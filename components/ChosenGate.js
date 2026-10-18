'use client'

import { useActionState, useState } from 'react'
import { redeem } from '@/app/chosen/actions'

export default function ChosenGate() {
  const [state, formAction, pending] = useActionState(redeem, {})
  const [show, setShow] = useState(false)

  return (
    <main className="ch-gate">
      <span className="ch-glow" aria-hidden="true" />
      <span className="ch-ring ch-ring-a" aria-hidden="true" />
      <span className="ch-ring ch-ring-b" aria-hidden="true" />

      <header className="ch-top">
        <span className="ch-logo"><i>RT</i>Rooted Together</span>
      </header>

      <div className="ch-gate-body">
        <div className="ch-gate-in">
          <div className="ch-eyebrow">By invitation only</div>
          <h1 className="ch-gate-h">You are invited to <em>build something.</em></h1>
          <p className="ch-gate-lead">Enter the invitation word from our message to see what you have been asked to carry.</p>

          <form action={formAction} className="ch-form">
            <label htmlFor="word" className="ch-label">Invitation word</label>
            <div className="ch-field">
              <input
                id="word"
                name="word"
                type={show ? 'text' : 'password'}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                maxLength={64}
                required
                aria-invalid={state?.error ? 'true' : 'false'}
                aria-describedby={state?.error ? 'word-error' : undefined}
              />
              <button type="button" className="ch-show" onClick={() => setShow((s) => !s)} aria-pressed={show}>
                {show ? 'Hide' : 'Show'}
              </button>
            </div>
            {state?.error && (
              <p id="word-error" role="alert" className="ch-error">{state.error}</p>
            )}
            <button type="submit" className="ch-go" disabled={pending}>
              {pending ? 'Checking…' : 'Continue'}
            </button>
          </form>

          <p className="ch-help">
            The word is in the message we sent you.<br />
            No message? <a href="https://rootedtogether.club">Visit Rooted Together</a>
          </p>
        </div>
      </div>
    </main>
  )
}
