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
      <p className="lead">Join once and open your storefront, on the web and in the app. There is no subscription for your storefront, and nothing to renew. Choose the Creator membership, or add Creator Pro for the training, the badge and a lower Rooted Together fee.</p>
    </div>

    <div className="plans">
      <div className="price-card light">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--brown)', color: 'var(--cream)', fontSize: '12px' }}>Creator membership</span>
        <div className="big"><b>$49</b><span>one-time payment</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Your profile in the Rooted Together app,</b> with Explore, Directory and communities free to use</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Your own storefront on web and app</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Courses, ebooks, routines and 1:1 calls</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Build a following and create tailored communities</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Secure payouts through Stripe. Rooted Together keeps 10% of each sale, and Stripe’s card fee comes out of each payment</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Paid items start at $5, and free items are allowed</li>
          <li><svg className="ico"><use href="#i-check"/></svg>No monthly storefront fee, ever</li>
        </ul>
        <div className="btn-row">
          <a className="btn btn-p" style={{ minHeight: '58px', fontSize: '17px' }} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Join for $49</a>
          <div className="small">Pay once by card through Stripe, then create your account straight away.</div>
        </div>
      </div>

      <div className="price-card">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--gold)', color: 'var(--deep)', fontSize: '12px' }}>Creator Pro</span>
        <div className="big"><b>$88</b><span>one-time payment</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Everything in the Creator membership, plus:</b></span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>5% Rooted Together fee</b> on every sale, half the standard rate. Stripe’s card fee comes out of the payment</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Daily prayers, guided meditations and special requests,</b> offered from your storefront and paid straight to you</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Rooted Pro badge</b> and priority placement in your category</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Creator Academy:</b> selling more, Instagram and TikTok, and storefront content</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Templates, swipe files and a 30-day launch plan</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Private Creator Pro community: ask, share and swap files</li>
        </ul>
        <div className="btn-row">
          <ProCta className="btn btn-g" style={{ minHeight: '58px', fontSize: '17px' }} href={PRO_CHECKOUT_URL}>Get Creator Pro, $88</ProCta>
          <div className="small">
            Already a member?{' '}
            {UPGRADE_CHECKOUT_URL ? <a href={UPGRADE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Upgrade for $39</a> : <span>Upgrade for $39 (opens soon)</span>}
            . Pay the difference once.
          </div>
        </div>
      </div>
    </div>

    <div className="plans-note">
      <p>Stripe’s card fee (about 2.9% plus 30 cents) comes out of each sale on both plans, on top of Rooted Together’s 10% on the Creator membership or 5% on Creator Pro.</p>
    </div>
  </div>
</section>
    </>
  )
}
