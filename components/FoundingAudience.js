'use client'

import { useState } from 'react'

const COPY = {
  leader: {
    label: 'Pastor or church leader',
    title: 'For the ones who shepherd a congregation',
    body: 'You already carry people through their hardest seasons, often with little time and few tools. Rooted Together gives your church or ministry a home online: a storefront for your teaching, spaces for your community to gather, and a way to reach the people who will never walk through your doors. We want to know what would make that real for the people you serve.',
  },
  creator: {
    label: 'Creator or mentor',
    title: 'For the ones who teach, mentor and create',
    body: 'You have something to share: a course, a book, a daily rhythm, a call. Rooted Together gives you a storefront, a way to be paid through Stripe straight to your bank, and a community that is looking for exactly what you offer. We want to know what you need to share your calling with confidence.',
  },
}

export default function FoundingAudience() {
  const [who, setWho] = useState('leader')
  const c = COPY[who]
  return (
    <div className="fd-aud">
      <div className="fd-pills" role="tablist" aria-label="Which describes you?">
        {Object.entries(COPY).map(([key, v]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={who === key}
            className={`fd-pill${who === key ? ' is-on' : ''}`}
            onClick={() => setWho(key)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="fd-aud-card" role="tabpanel">
        <h3>{c.title}</h3>
        <p>{c.body}</p>
      </div>
    </div>
  )
}
