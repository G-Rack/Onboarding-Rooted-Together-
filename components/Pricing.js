import { CHECKOUT_URL, PRO_CHECKOUT_URL, UPGRADE_CHECKOUT_URL } from '@/lib/config'
import ProCta from '@/components/ProCta'

export default function Pricing() {
  return (
    <>
<section id="pricing" className="sec" style={{ paddingTop: '24px' }}>
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow">Pricing</div>
      <h2 className="h2">One payment. Your whole ministry home.</h2>
      <p className="lead">Join once and open your storefront, on the web and in the app. There is no subscription for your storefront, and nothing to renew. Choose the Creator membership, or add Creator Pro for the training, the badge and zero Rooted Together fees.</p>
    </div>

    <div className="plans">
      <div className="price-card light">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--brown)', color: 'var(--cream)', fontSize: '12px' }}>Creator membership</span>
        <div className="big"><b>$49</b><span>one-time payment</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Your profile in the Rooted Together app,</b> with Explore, Directory and communities free to use</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Your own storefront on web and app</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Courses, ebooks, routines, 1:1 calls and prayer requests</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Build a following and create tailored communities</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Secure payouts through Stripe, 90% of every sale yours, and we cover Stripe’s card fees</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Paid items start at $5, and free items are allowed</li>
          <li><svg className="ico"><use href="#i-check"/></svg>No monthly storefront fee, ever</li>
        </ul>
        <div className="btn-row">
          <a className="btn btn-p" style={{ minHeight: '58px', fontSize: '17px' }} href={CHECKOUT_URL}>Join for $49</a>
          <div className="small">Pay once by card through Stripe, then create your account straight away.</div>
        </div>
      </div>

      <div className="price-card">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--gold)', color: 'var(--deep)', fontSize: '12px' }}>Creator Pro</span>
        <div className="big"><b>$88</b><span>one-time payment</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Everything in the Creator membership, plus:</b></span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>0% Rooted Together fee</b> on every sale. Stripe’s card fee comes out of the payment</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Rooted Pro badge</b> and priority placement in your category</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Creator Academy:</b> selling more, Instagram and TikTok, and storefront content</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Templates, swipe files and a 30-day launch plan</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Private Creator Pro community: ask, share and swap files</li>
        </ul>
        <div className="btn-row">
          <ProCta className="btn btn-g" style={{ minHeight: '58px', fontSize: '17px' }} href={PRO_CHECKOUT_URL}>Get Creator Pro, $88</ProCta>
          <div className="small">
            Already a member?{' '}
            {UPGRADE_CHECKOUT_URL ? <a href={UPGRADE_CHECKOUT_URL}>Upgrade for $39</a> : <span>Upgrade for $39 (opens soon)</span>}
            . Pay the difference once.
          </div>
        </div>
      </div>
    </div>

    <div className="plans-note">
      <p>Stripe’s card fee is covered by us on the Creator membership, and comes out of each sale on Creator Pro. The app is free to join, with optional Premium for messaging at $49 a year or $5.99 a month.</p>
    </div>
  </div>
</section>
    </>
  )
}
