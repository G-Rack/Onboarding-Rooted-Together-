
// Each "today" pain point is paired with what Rooted Together does about it,
// so the same content can be shown as two side-by-side columns on desktop and
// as stacked before/after pairs on phones (see the .pairs rules in globals.css).
const PAIRS = [
  {
    today: 'Your people are split across group chats, livestreams, a church website and a link in your bio.',
    with: 'One storefront and one Spiritual Family, all in one place.',
  },
  {
    today: 'Years of teaching live in sermon recordings and DMs, free by default.',
    with: 'Courses, ebooks and routines you price and publish yourself.',
  },
  {
    today: 'Calls and prayer requests are arranged by message, and rarely paid for.',
    with: '1:1 calls and prayer requests booked and paid in one step.',
  },
  {
    today: 'Getting paid means chasing transfers, cash and gifts.',
    with: 'Secure payouts through Stripe, with 90% of every sale yours.',
  },
  {
    today: 'The calling can feel lonely, whether you lead a congregation or a ministry team.',
    with: 'A community of spiritual mothers, pastors, churches and ministries who understand.',
  },
]

export default function Problem() {
  return (
    <>
<section className="sec">
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow">Sound familiar?</div>
      <h2 className="h2">Your ministry runs on scattered tools. It deserves one home.</h2>
    </div>

    {/* Desktop and tablet: two columns side by side */}
    <div className="problem-grid">
      <div className="pcard a">
        <span className="tag">Today</span>
        <div style={{ marginTop: '10px' }}>
          {PAIRS.map((p) => (
            <div className="row" key={p.today}><svg className="ico"><use href="#i-x"/></svg><div>{p.today}</div></div>
          ))}
        </div>
      </div>
      <div className="pcard b">
        <span className="tag">With Rooted Together</span>
        <div style={{ marginTop: '10px' }}>
          {PAIRS.map((p) => (
            <div className="row" key={p.with}><svg className="ico"><use href="#i-check"/></svg><div>{p.with}</div></div>
          ))}
        </div>
      </div>
    </div>

    {/* Phones: each pain point stacked directly above its answer */}
    <div className="pairs">
      {PAIRS.map((p) => (
        <div className="pair" key={p.today}>
          <div className="pair-a">
            <span className="pair-label">Today</span>
            <div className="pair-line"><svg className="ico"><use href="#i-x"/></svg><div>{p.today}</div></div>
          </div>
          <div className="pair-b">
            <span className="pair-label">With Rooted Together</span>
            <div className="pair-line"><svg className="ico"><use href="#i-check"/></svg><div>{p.with}</div></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}
