'use client'

import { useState } from 'react'

export default function ChosenPledgeCta({ href }) {
  const [agreed, setAgreed] = useState(false)
  return (
    <div className="ch-cta">
      <label className="ch-check" htmlFor="pledge">
        <input id="pledge" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>I take this pledge.</span>
      </label>
      <a
        className={`ch-begin${agreed ? '' : ' is-off'}`}
        href={agreed ? href : undefined}
        aria-disabled={agreed ? 'false' : 'true'}
        onClick={(e) => { if (!agreed) e.preventDefault() }}
      >
        Take the pledge and begin
      </a>
      <p className="ch-cta-note">You can complete the three steps in any order, and come back any time.</p>
    </div>
  )
}
