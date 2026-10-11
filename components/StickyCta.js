'use client'

import { useEffect, useState } from 'react'
import { CHECKOUT_URL } from '@/lib/config'

// Phone-only call to action. Appears after the hero and hides again at the final join section.
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false)
  const [atForm, setAtForm] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const form = document.getElementById('join')
    let io
    if (form && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => setAtForm(entry.isIntersecting), { threshold: 0.1 })
      io.observe(form)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (io) io.disconnect()
    }
  }, [])

  const show = pastHero && !atForm
  return (
    <a
      className="sticky-cta"
      href={CHECKOUT_URL}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      style={{ opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none', transform: show ? 'none' : 'translateY(16px)', transition: 'opacity .2s, transform .2s' }}
    >
      Create your storefront
    </a>
  )
}
