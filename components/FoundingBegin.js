'use client'

import { useEffect, useState } from 'react'
import { FOUNDING_DEMO_URL } from '@/lib/config'

const WAYS = [
  {
    kind: 'demo',
    title: 'Book a private demo',
    body: 'Twenty minutes, one to one. I walk you through the dashboard and the app and listen to what you think.',
    cta: 'Book my demo',
    submit: 'Request my demo',
    note: 'We will confirm a time by WhatsApp or email.',
    done: 'Thank you. We have your request and will confirm a time with you personally.',
  },
  {
    kind: 'access',
    title: 'Request exclusive access',
    body: 'Skip the call and go straight in. You receive founding access to the dashboard and the app, free.',
    cta: 'Request access',
    submit: 'Request my access',
    note: 'Creator and Pro are included at no charge for founding members.',
    done: 'Thank you. Your request is in, and we will send your access personally.',
  },
  {
    kind: 'feedback',
    title: 'Share your thoughts first',
    body: 'Not ready for a call? Tell us what would make a home like this useful to the people you serve.',
    cta: 'Share my thoughts',
    submit: 'Send my thoughts',
    note: 'Every message is read by the founder.',
    done: 'Thank you. Your words will shape what we build.',
  },
]

export default function FoundingBegin() {
  const [open, setOpen] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(null) // { kind, groupUrl }
  const [source, setSource] = useState('')

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search)
      setSource((q.get('utm_source') || q.get('src') || '').slice(0, 100))
    } catch {}
  }, [])

  const way = WAYS.find((w) => w.kind === open)

  async function onSubmit(e) {
    e.preventDefault()
    if (!way) return
    setError('')
    setPending(true)
    const f = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/founding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: way.kind,
          audience: f.get('audience'),
          name: f.get('name'),
          email: f.get('email'),
          phone: f.get('phone'),
          organisation: f.get('organisation'),
          message: f.get('message'),
          website: f.get('website'),
          source,
        }),
      })
      const j = await res.json().catch(() => ({}))
      if (j.ok) setDone({ kind: way.kind, groupUrl: j.groupUrl || '' })
      else setError(j.error || 'Something went wrong. Please try again.')
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setPending(false)
  }

  if (done) {
    const w = WAYS.find((x) => x.kind === done.kind)
    return (
      <div className="fd-done" role="status">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
        <h3>{w.done}</h3>
        {done.kind === 'demo' && FOUNDING_DEMO_URL && (
          <p>Prefer to choose your own time? <a className="fd-link" href={FOUNDING_DEMO_URL} target="_blank" rel="noopener noreferrer">Pick a time that suits you</a>.</p>
        )}
        {done.kind === 'access' && (
          done.groupUrl
            ? <p>One more step: <a className="fd-link" href={done.groupUrl} target="_blank" rel="noopener noreferrer">join the founding members WhatsApp group</a>.</p>
            : <p>We will also add you to the founding members WhatsApp group.</p>
        )}
        <p className="fd-sign">With gratitude, the Rooted Together team</p>
      </div>
    )
  }

  return (
    <div className="fd-begin">
      <div className="fd-ways">
        {WAYS.map((w) => (
          <button
            key={w.kind}
            type="button"
            className={`fd-way${open === w.kind ? ' is-on' : ''}`}
            aria-expanded={open === w.kind}
            onClick={() => { setOpen(open === w.kind ? null : w.kind); setError('') }}
          >
            <h3>{w.title}</h3>
            <p>{w.body}</p>
            <span className="fd-way-cta">{w.cta}<i aria-hidden="true">&rarr;</i></span>
          </button>
        ))}
      </div>

      {way && (
        <form className="fd-form" onSubmit={onSubmit} key={way.kind}>
          <h3 className="fd-form-h">{way.title}</h3>
          <div className="fd-row">
            <label>
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" maxLength={120} required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
          </div>
          <div className="fd-row">
            <label>
              <span>WhatsApp number <em>(optional)</em></span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+1 555 000 0000" />
            </label>
            <label>
              <span>Church or ministry <em>(optional)</em></span>
              <input name="organisation" type="text" maxLength={160} />
            </label>
          </div>
          <label>
            <span>I am a</span>
            <select name="audience" defaultValue="leader">
              <option value="leader">Pastor or church leader</option>
              <option value="creator">Creator or mentor</option>
            </select>
          </label>
          <label>
            <span>{way.kind === 'feedback' ? 'What would make this useful to the people you serve?' : 'Anything you would like us to know'} {way.kind !== 'feedback' && <em>(optional)</em>}</span>
            <textarea name="message" rows={way.kind === 'feedback' ? 5 : 3} maxLength={2000} required={way.kind === 'feedback'} />
          </label>
          {/* Real people leave this empty. */}
          <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="fd-hp" />
          {error && <p role="alert" className="fd-error">{error}</p>}
          <button type="submit" className="fd-submit" disabled={pending}>{pending ? 'Sending…' : way.submit}</button>
          <p className="fd-note">{way.note} We only use your details to reply to you. <a className="fd-link" href="https://rootedtogether.club/privacy">Privacy Policy</a></p>
        </form>
      )}
    </div>
  )
}
