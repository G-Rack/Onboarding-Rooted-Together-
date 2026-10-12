import { CHECKOUT_URL } from '@/lib/config'

export default function Hero() {
  return (
    <>
<section className="hero">
  <div className="wrap">
    <div className="hero-copy">
      <div className="pill">For spiritual mothers, pastors and leaders</div>
      <h1>Open your storefront. <em>Earn from what you already teach.</em></h1>
      <p className="lead">Rooted Together is a marketplace and community app for faith leaders. Set up your own storefront, publish courses, ebooks and daily routines, take paid 1:1 calls and prayer requests, and get paid straight to your bank.</p>
      <div className="cta-row">
        <a className="btn btn-p" href={CHECKOUT_URL}>Create your storefront</a>
        <a className="btn btn-o" href="#app">See inside the app</a>
      </div>
      <div className="fine"><b>One-time $49 membership.</b><span>Includes your storefront and full membership of the Rooted Together app.</span></div>
    </div>

    <div className="hero-art">
      <div className="hero-stage">
        <div className="arch"></div>
        <div className="phone">
          <div className="scr">
            <div className="sb"><span>9:41</span><span></span></div>
            <div className="sc-body">
              <div className="sc-title"><h4>Your Spiritual Family</h4></div>
              <div className="avs">
                <div className="av c1">G</div><div className="av c2">R</div><div className="av c3">A</div><div className="av c4">J</div>
                <small>+24 praying</small>
              </div>
              <div className="post">
                <div style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brown)' }}>Prayer request</div>
                <p>Please pray for my family as we move cities this month.</p>
                <div className="post-h"><small>Grace M.</small><span className="follow" style={{ background: 'var(--brown)', color: 'var(--cream)' }}>I'm praying</span></div>
              </div>
              <div className="mem"><div><div style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brown)' }}>New sale</div><b>Rooted Mornings</b></div><b style={{ fontFamily: 'var(--serif)', fontSize: '19px', color: 'var(--brown)' }}>+$7.20</b></div>
              <div className="fam-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}><div><div className="l">1:1 call booked</div><p style={{ fontWeight: '600' }}>Thursday, 4:00 PM</p></div><svg className="ico" style={{ fontSize: '24px', color: 'var(--tan)' }}><use href="#i-video"/></svg></div>
            </div>
            <div className="tbar">
              <div><svg className="ico"><use href="#i-compass"/></svg>Explore</div>
              <div><svg className="ico"><use href="#i-people"/></svg>Directory</div>
              <div><svg className="ico"><use href="#i-chat"/></svg>Chat</div>
              <div className="on"><svg className="ico"><use href="#i-home"/></svg>Family</div>
              <div><svg className="ico"><use href="#i-person"/></svg>Profile</div>
            </div>
          </div>
        </div>
        <div className="float" style={{ right: '-26px', top: '404px' }}><svg className="ico" style={{ fontSize: '18px', color: 'var(--brown)', strokeWidth: '2.4' }}><use href="#i-check"/></svg>Payout on its way</div>
        <div className="float gold" style={{ left: '-26px', top: '470px' }}><svg className="ico" style={{ fontSize: '18px' }}><use href="#i-heart"/></svg>Your family is praying</div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
