'use client'

import { useEffect } from 'react'

const KEY = 'rt_ref'
const VALID = /^[A-Za-z0-9_-]{1,60}$/

// Remembers a referral code from ?ref=RT-00042 and passes it to Stripe as
// client_reference_id when someone clicks any checkout button, so the member
// who referred them is credited once the new creator creates their account.
export default function RefCarrier() {
  useEffect(() => {
    let code = ''
    try {
      const fromUrl = new URLSearchParams(window.location.search).get('ref') || ''
      if (VALID.test(fromUrl)) {
        code = fromUrl
        window.localStorage.setItem(KEY, code)
      } else {
        const saved = window.localStorage.getItem(KEY) || ''
        if (VALID.test(saved)) code = saved
      }
    } catch {
      // Storage can be blocked; the URL code still works for this page view.
      const fromUrl = new URLSearchParams(window.location.search).get('ref') || ''
      if (VALID.test(fromUrl)) code = fromUrl
    }
    if (!code) return undefined

    const onClick = (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href^="https://buy.stripe.com/"]') : null
      if (!a) return
      try {
        const u = new URL(a.href)
        u.searchParams.set('client_reference_id', code)
        a.href = u.toString()
      } catch {
        // Leave the link as is.
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
