'use server'

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createHash } from 'node:crypto'
import { rpc, CHOSEN_COOKIE } from '@/lib/chosen'

// Checks the invitation word. Wrong guesses are counted per visitor (hashed IP) in the
// database, which locks that visitor out for 15 minutes after 8 misses.
export async function redeem(_prev, formData) {
  const word = String(formData.get('word') || '').slice(0, 64)
  if (!word.trim()) return { error: 'Enter the invitation word from our message.' }

  const h = await headers()
  const ip = (h.get('x-forwarded-for') || '').split(',')[0].trim() || h.get('x-real-ip') || 'unknown'
  const ipHash = createHash('sha256').update('rt-chosen:' + ip).digest('hex')

  const res = await rpc('redeem_invitation', { p_word: word, p_ip_hash: ipHash })
  if (!res) return { error: 'Something went wrong. Please try again in a moment.' }
  if (res.locked) return { error: 'Too many tries. Please wait a few minutes and try again.' }
  if (!res.ok) return { error: 'That word does not match. Check your message and try again.' }

  const jar = await cookies()
  jar.set(CHOSEN_COOKIE, res.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/chosen',
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect('/chosen')
}
