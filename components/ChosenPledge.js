import { PLEDGE_NEXT_URL } from '@/lib/config'
import ChosenPledgeCta from '@/components/ChosenPledgeCta'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }

const steps = [
  {
    n: 1,
    title: 'Set up your profile',
    body: 'Add your photo, a banner and the story of your calling, so the people who find you know who is walking with them.',
  },
  {
    n: 2,
    title: 'Create at least 2 offerings',
    body: 'A course, ebook, daily routine or 1:1 calls. Sell each one, or give it free to the community. You choose, item by item.',
  },
  {
    n: 3,
    title: 'Connect payouts with Stripe',
    body: 'Create or link your Stripe account so what your community pays reaches your bank. Rooted Together never holds your money.',
  },
]

export default function ChosenPledge({ token = '' }) {
  // The invitation travels with the creator to sign-up, where it stands in for the $49 membership.
  const nextUrl = token ? `${PLEDGE_NEXT_URL}&invite=${encodeURIComponent(token)}` : PLEDGE_NEXT_URL
  return (
    <main className="ch-page">
      <header className="ch-bar">
        <span className="ch-logo ch-logo-dark"><i>RT</i>Rooted Together</span>
        <span className="ch-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          Invitation accepted
        </span>
      </header>

      <section className="ch-hero">
        <div className="ch-hero-copy">
          <div className="ch-eyebrow ch-eyebrow-dark">Your mission</div>
          <h1 className="ch-hero-h">You were chosen to build a home for <em>those who need spiritual support.</em></h1>
          <p className="ch-hero-lead">Too many people carry heavy seasons alone. We are gathering Spiritual Mothers, pastors, churches and ministries to build a community where no one has to. Share what you know, free or paid, with the people who are searching for it.</p>
        </div>

        <aside className="ch-glance" aria-label="Your pledge at a glance">
          <div className="ch-glance-top">
            <b>Your pledge</b>
            <span>0 of 3 complete</span>
          </div>
          <div className="ch-bar-track"><span /></div>
          <ul className="ch-glance-list">
            <li><i />Set up your profile</li>
            <li><i />Create 2 offerings</li>
            <li><i />Connect payouts with Stripe</li>
          </ul>
          <div className="ch-unlock">
            <svg width="22" height="22" viewBox="0 0 24 24" {...stroke} strokeWidth="2"><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
            <span><strong>Unlocks:</strong> first access to the Rooted Together app</span>
          </div>
        </aside>
      </section>

      <section className="ch-steps">
        <div className="ch-in">
          <div className="ch-eyebrow ch-eyebrow-dark">The pledge</div>
          <h2 className="ch-h2">Three things to complete before the doors open.</h2>
          <ol className="ch-step-list">
            {steps.map((s) => (
              <li key={s.n} className="ch-step">
                <span className="ch-num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ch-reward">
        <div className="ch-in ch-in-wide">
          <div className="ch-eyebrow">When your pledge is complete</div>
          <h2 className="ch-h2 ch-light">You walk into the app first.</h2>
          <div className="ch-perks">
            <div className="ch-perk">
              <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>
              <h3>First access to the app</h3>
              <p>Founding creators open the Rooted Together app before anyone else does.</p>
            </div>
            <div className="ch-perk">
              <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M17 5v6M14 8h6" /></svg>
              <h3>Bring your community in first</h3>
              <p>Invite your people with your own referral link, and receive a referral benefit for every one who joins.</p>
            </div>
            <div className="ch-perk">
              <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M14.5 9.2c-.4-.8-1.4-1.3-2.5-1.3-1.4 0-2.5.8-2.5 1.9 0 2.7 5.2 1.3 5.2 4 0 1.2-1.2 2-2.7 2-1.2 0-2.3-.6-2.7-1.5M12 6.5v1.4M12 16v1.5" /></svg>
              <h3>Earn from what your people spend</h3>
              <p>Anything your referred members spend on the platform earns you a commission. The rate is explained in your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ch-final">
        <div className="ch-in ch-in-narrow">
          <div className="ch-eyebrow ch-eyebrow-dark">Before you begin</div>
          <h2 className="ch-h2">Make it your pledge.</h2>
          <p className="ch-quote">&ldquo;I will use what I have been given to serve people in need of spiritual support, with honesty, care and integrity, and I will build alongside others who carry the same mission.&rdquo;</p>
          <ChosenPledgeCta href={nextUrl} />
        </div>
      </section>

      <footer className="ch-foot">Rooted Together &middot; For the ones who shepherd</footer>
    </main>
  )
}
