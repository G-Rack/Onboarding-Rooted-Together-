import { CHECKOUT_URL } from '@/lib/config'

export default function Pricing() {
  return (
    <>
<section id="pricing" className="sec" style={{ paddingTop: '24px' }}>
  <div className="wrap">
    <div className="price">
      <div className="price-l">
        <div className="eyebrow">Pricing</div>
        <h2 className="h2">One payment. Your whole ministry home.</h2>
        <p className="lead" style={{ maxWidth: '480px' }}>Join once for $49 and everything is yours to use, on the web and in the app. There is no subscription, and nothing to renew. When you sell, Rooted Together keeps 10% and you keep the rest.</p>
        <div className="facts">
          <div><b>$49</b><span>paid once</span></div>
          <div><b>$0</b><span>monthly fees</span></div>
          <div><b>90%</b><span>of each sale yours</span></div>
        </div>
      </div>
      <div className="price-card">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--gold)', color: 'var(--deep)', fontSize: '12px' }}>Creator membership</span>
        <div className="big"><b>$49</b><span>one-time payment</span></div>
        <hr />
        <ul>
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Full membership of the Rooted Together app,</b> with Explore, Directory, Chat, Family and Profile unlocked</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Your own storefront on web and app</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Courses, ebooks, routines, 1:1 calls and prayer requests</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Build a following and create tailored communities</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Spiritual Family tools to gather and shepherd your people</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Secure payouts through Stripe, 90% of every sale yours</li>
          <li><svg className="ico"><use href="#i-check"/></svg>No monthly fees, ever</li>
        </ul>
        <a className="btn btn-g" style={{ minHeight: '58px', fontSize: '17px' }} href={CHECKOUT_URL}>Join for $49</a>
        <div className="small">Pay once by card through Stripe, then create your account straight away.</div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
