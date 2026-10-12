'use client'

import { useEffect, useState } from 'react'
import { CHECKOUT_URL } from '@/lib/config'

// Phone-only call to action. Appears after the hero and hides again at the final join section.
export default function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const join = document.getElementById('join')
    const update = () => {
      const past = window.scrollY > 600
      const atJoin = join ? join.getBoundingClientRect().top < window.innerHeight * 0.9 : false
      setShow(past && !atJoin)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <a className={'sticky' + (show ? ' show' : '')} href={CHECKOUT_URL} aria-hidden={!show} tabIndex={show ? 0 : -1}>
      Create your storefront
    </a>
  )
}
