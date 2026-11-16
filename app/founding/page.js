import FoundingAudience from '@/components/FoundingAudience'
import FoundingBegin from '@/components/FoundingBegin'
import './founding.css'

// Private page for the first founding members: no link to it from the rest of the site, and search
// engines are told not to list it. It is shared by hand, one message at a time.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const title = 'A private invitation | Rooted Together'
const description = 'A private invitation to help build a home for people who need spiritual support.'

export const metadata = {
  title,
  description,
  robots: { index: false, follow: false, nocache: true },
  openGraph: { title, description },
  twitter: { card: 'summary', title, description },
}

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }

const SEE = [
  {
    title: 'The creator dashboard',
    items: [
      'Your own storefront, with your story, banner and links',
      'Courses, ebooks, daily routines and 1:1 calls to sell or give away',
      'Payouts through Stripe, straight to your bank',
      'Your referral link, to bring your own people in first',
    ],
  },
  {
    title: 'The Rooted Together app',
    items: [
      'What your community sees when they find and follow you',
      'Spiritual Families, communities and a feed made for your teaching',
      'Prayer and meditation requests that reach the right person',
      'A quiet, faith-centred space, free of the noise of social media',
    ],
  },
]

const GIVE = [
  {
    title: 'Creator and Pro, free',
    body: 'Your creator membership is waived and Creator Pro is included at no charge, with nothing to renew.',
    icon: <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></svg>,
  },
  {
    title: 'A direct line and a real say',
    body: 'You speak with the founder, and what you tell us shapes what we build next.',
    icon: <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4" /></svg>,
  },
  {
    title: 'The founding members group',
    body: 'A small private WhatsApp group of the first people building this together. It opens when you ask for access.',
    icon: <svg width="30" height="30" viewBox="0 0 24 24" {...stroke}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2c2.9.2 5 2.4 5 5.3" /></svg>,
  },
]

export default function FoundingPage() {
  return (
    <main className="fd-page">
      <header className="fd-bar">
        <span className="fd-logo"><i>RT</i>Rooted Together</span>
        <span className="fd-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" {...stroke} strokeWidth="2.4"><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
          Private invitation
        </span>
      </header>

      <section className="fd-hero">
        <div className="fd-hero-copy">
          <div className="fd-eyebrow">Founding members</div>
          <h1 className="fd-hero-h">Help us build a home for people who need <em>spiritual support.</em></h1>
          <p className="fd-hero-lead">Too many people carry heavy seasons alone. Before we open our doors, we are inviting a small circle of pastors, spiritual mothers and creators to see Rooted Together first, tell us honestly what is missing, and walk in ahead of everyone else.</p>
          <div className="fd-hero-cta">
            <a className="fd-btn fd-btn-p" href="#begin">Begin</a>
            <a className="fd-btn fd-btn-o" href="#receive">What you receive</a>
          </div>
        </div>
        <aside className="fd-glance" aria-label="What this invitation includes">
          <b>Your private preview</b>
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>A 20-minute personal walkthrough</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Early access to the dashboard</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Early access to the app</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>A voice in what we build</li>
          </ul>
          <small>No cost and no obligation.</small>
        </aside>
      </section>

      <section className="fd-for">
        <div className="fd-in">
          <div className="fd-eyebrow">Why you</div>
          <h2 className="fd-h2">We are asking you because of the work you already do.</h2>
          <FoundingAudience />
        </div>
      </section>

      <section className="fd-vision">
        <div className="fd-in fd-in-wide">
          <div className="fd-eyebrow fd-gold">The vision</div>
          <h2 className="fd-h2 fd-light">No one should face a hard season alone.</h2>
          <div className="fd-vision-grid">
            <div className="fd-vcard">
              <h3>The vision</h3>
              <p>A trusted online home where someone searching for guidance can find a real person, a real community and real teaching, and where the people who shepherd them can share what they know without having to become tech companies.</p>
            </div>
            <div className="fd-vcard">
              <h3>The mission</h3>
              <p>To equip pastors, spiritual mothers, churches and creators to serve people who need spiritual support, on the app and on the web, with honesty, care and integrity, and to let them be paid fairly for the work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fd-see">
        <div className="fd-in fd-in-wide">
          <div className="fd-eyebrow">What you will see</div>
          <h2 className="fd-h2">A short, honest tour of what is built today.</h2>
          <div className="fd-see-grid">
            {SEE.map((s) => (
              <div key={s.title} className="fd-scard">
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}><svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg><span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-receive" id="receive">
        <div className="fd-in fd-in-wide">
          <div className="fd-eyebrow fd-gold">What founding members receive</div>
          <h2 className="fd-h2 fd-light">You walk in first, and you help shape what is built.</h2>
          <div className="fd-perks">
            {GIVE.map((g) => (
              <div key={g.title} className="fd-perk">
                {g.icon}
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-insight">
        <div className="fd-in fd-in-narrow">
          <div className="fd-eyebrow">Your insight</div>
          <h2 className="fd-h2">We are not asking you to just use it.</h2>
          <p className="fd-quote">&ldquo;Tell us what is wrong with it, what is missing, and what would make you trust it with your people. That is the most valuable thing a founding member can give us.&rdquo;</p>
        </div>
      </section>

      <section className="fd-start" id="begin">
        <div className="fd-in fd-in-wide">
          <div className="fd-eyebrow">Three ways to begin</div>
          <h2 className="fd-h2">Choose what feels right for you.</h2>
          <p className="fd-start-lead">Each one goes straight to the founder. No pressure, and no automated sequences.</p>
          <FoundingBegin />
        </div>
      </section>

      <footer className="fd-foot">Rooted Together, Inc. &middot; For the ones who shepherd</footer>
    </main>
  )
}
