'use client'

import { useState } from 'react'

export default function Apply() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please try again.')
      form.reset()
      setStatus('done')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <div id="apply" style={{ background: '#2E1B10', padding: '104px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
      <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8923F' }}>Apply to join</div>
      <h2 style={{ margin: '0', fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: 'clamp(34px,4.6vw,58px)', lineHeight: '1.06', letterSpacing: '-0.015em', color: '#FBF6EF', textWrap: 'balance' }}>Your calling deserves a home. Let's build it together.</h2>
      <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#D9C7B3', maxWidth: '480px' }}>Tell us a little about you and your ministry. Membership is a one-time $49 once you are approved, and we read every application ourselves.</p>
      </div>
      <form onSubmit={onSubmit} style={{ flex: '1 1 400px', minWidth: '0', borderRadius: '28px', background: '#FBF6EF', padding: '32px', display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate={false}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><label htmlFor="fName" style={{ fontSize: '14px', fontWeight: '600', color: '#2E1B10' }}>Full name</label><input id="fName" name="name" required type="text" placeholder="Your name" style={{ width: '100%', minHeight: '50px', padding: '0 16px', borderRadius: '14px', border: '1.5px solid #D8C5AC', background: '#fff', fontFamily: 'inherit', fontSize: '16px', color: '#2E1B10' }} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><label htmlFor="fEmail" style={{ fontSize: '14px', fontWeight: '600', color: '#2E1B10' }}>Email</label><input id="fEmail" name="email" required type="email" placeholder="you@example.com" style={{ width: '100%', minHeight: '50px', padding: '0 16px', borderRadius: '14px', border: '1.5px solid #D8C5AC', background: '#fff', fontFamily: 'inherit', fontSize: '16px', color: '#2E1B10' }} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><label htmlFor="fRole" style={{ fontSize: '14px', fontWeight: '600', color: '#2E1B10' }}>Your role</label><select id="fRole" name="role" style={{ width: '100%', minHeight: '50px', padding: '0 16px', borderRadius: '14px', border: '1.5px solid #D8C5AC', background: '#fff', fontFamily: 'inherit', fontSize: '16px', color: '#2E1B10' }}><option>Spiritual mother</option><option>Pastor</option><option>Ministry leader</option><option>Other</option></select></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><label htmlFor="fMinistry" style={{ fontSize: '14px', fontWeight: '600', color: '#2E1B10' }}>Church or ministry</label><input id="fMinistry" name="ministry" type="text" placeholder="Where you serve" style={{ width: '100%', minHeight: '50px', padding: '0 16px', borderRadius: '14px', border: '1.5px solid #D8C5AC', background: '#fff', fontFamily: 'inherit', fontSize: '16px', color: '#2E1B10' }} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><label htmlFor="fStory" style={{ fontSize: '14px', fontWeight: '600', color: '#2E1B10' }}>Tell us about your calling</label><textarea id="fStory" name="story" rows={4} placeholder="Who do you serve, and what would you like to offer?" style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1.5px solid #D8C5AC', background: '#fff', fontFamily: 'inherit', fontSize: '16px', color: '#2E1B10', resize: 'vertical' }}></textarea></div>
      <button type="submit" className="btn-p" disabled={status === 'sending'} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '56px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '17px', fontWeight: '600'  }}>{status === 'sending' ? 'Sending…' : 'Apply to join'}</button>
      {status === 'done' && (
      <div role="status" style={{ padding: '14px 16px', borderRadius: '14px', background: '#EAF2E3', color: '#2F4A22', fontSize: '15px', lineHeight: '1.5' }}>Thank you. Your application is in. We will email you within a few days.</div>
      )}
      {status === 'error' && (
      <div role="alert" style={{ padding: '14px 16px', borderRadius: '14px', background: '#FBE9E4', color: '#7A2E1D', fontSize: '15px', lineHeight: '1.5' }}>{error}</div>
      )}
      <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#6F5846', textAlign: 'center' }}>We will email you within a few days. No payment is taken until you are approved.</div>
      </form>
      </div>
      </div>
    </>
  )
}
