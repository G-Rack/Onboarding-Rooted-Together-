import { NextResponse } from 'next/server'

const ROLES = ['Spiritual mother', 'Pastor', 'Ministry leader', 'Other']
const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const full_name = clean(body.name, 120)
  const email = clean(body.email, 200).toLowerCase()
  const role = ROLES.includes(body.role) ? body.role : 'Other'
  const ministry = clean(body.ministry, 200) || null
  const story = clean(body.story, 2000) || null

  if (!full_name) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    console.error('SUPABASE_URL or SUPABASE_ANON_KEY is not set')
    return NextResponse.json({ error: 'Applications are not open yet. Please try again soon.' }, { status: 503 })
  }

  const res = await fetch(`${url}/rest/v1/creator_applications`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ full_name, email, role, ministry, story, source: 'onboarding-site' }),
  })

  if (!res.ok) {
    console.error('Supabase insert failed', res.status, await res.text())
    return NextResponse.json({ error: 'We could not save your application. Please try again.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
