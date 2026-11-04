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
      <p className="lead">Join once and open your storefront, on the web and in the app. The Creator membership is a single payment with nothing to renew. Creator Pro is an optional yearly add-on for the training, the badge and a lower Rooted Together fee.</p>
    </div>

    <div className="plans">
      <div className="price-card light">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--brown)', color: 'var(--cream)', fontSize: '12px' }}>Creator membership</span>
        <div className="big"><b>$49</b><span>one-time payment</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Your profile in the app,</b> with Explore, Directory and communities</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Your own storefront on web and app</li>
          <li><svg className="ico"><use href="#i-check"/></svg>Sell courses, ebooks, audiobooks, printables, templates, routines, bundles and 1:1 calls</li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Creative hub</b> for Instagram and TikTok posts</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg>Payouts through Stripe, 10% Rooted Together fee</li>
          <li><svg className="ico"><use href="#i-check"/></svg>No monthly storefront fee, ever</li>
        </ul>
        <div className="upsell">
          <b>Start here, add Pro any time.</b> Join now, and upgrade to Creator Pro for $39 a year whenever you want the badge, the training and the lower 5% fee.
        </div>
        <div className="btn-row">
          <a className="btn btn-p" style={{ minHeight: '58px', fontSize: '17px' }} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Join for $49</a>
          <div className="small">Pay once by card through Stripe, then create your account straight away.</div>
        </div>
      </div>

      <div className="price-card">
        <span className="tag" style={{ alignSelf: 'flex-start', background: 'var(--gold)', color: 'var(--deep)', fontSize: '12px' }}>Creator Pro</span>
        <div className="big"><b>$88</b><span>first year, then $39 a year</span></div>
        <hr />
        <ul className="grow">
          <li className="hl"><svg className="ico"><use href="#i-check"/></svg><span><b>Everything in the Creator membership, plus:</b></span></li>
          <li className="grp">Keep more of every sale</li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>5% Rooted Together fee,</b> half the standard rate. Stripe’s card fee still comes out of each payment</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Daily prayers, guided meditations and special requests,</b> offered from your storefront and paid straight to you</span></li>
          <li className="grp">Be the storefront people tap</li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Rooted Pro badge</b> on your profile, storefront and marketplace listing</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Priority placement,</b> shown ahead of other creators in your category</span></li>
          <li className="grp">Grow on purpose</li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Creator Academy:</b> three short trainings on selling more, Instagram and TikTok, and storefront content</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Templates and swipe files:</b> post and story templates, caption starters and follow-up messages to download and use</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>30-day launch plan:</b> one small task a day, from empty storefront to first sale</span></li>
          <li><svg className="ico"><use href="#i-check"/></svg><span><b>Private Creator Pro community:</b> ask, share and swap files with other Pro creators</span></li>
        </ul>
        <div className="pays">
          <b>It can pay for itself.</b> The extra 5% you keep covers the $39 yearly renewal once you have sold $780.
        </div>
        <div className="btn-row">
          <ProCta className="btn btn-g" style={{ minHeight: '58px', fontSize: '17px' }} href={PRO_CHECKOUT_URL}>Get Creator Pro, $88 first year</ProCta>
          <div className="small">
            Already a member?{' '}
            {UPGRADE_CHECKOUT_URL ? <a href={UPGRADE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Upgrade for $39 a year</a> : <span>Upgrade for $39 a year (opens soon)</span>}
            . Renews yearly; cancel any time.
          </div>
        </div>
      </div>
    </div>

    <div className="plans-note">
      <p>Stripe’s card fee (about 2.9% plus 30 cents) comes out of each sale on both plans, on top of Rooted Together’s 10% on the Creator membership or 5% on Creator Pro. Paid items start at $5, and free items are allowed.</p>
    </div>
  </div>
</section>
    </>
  )
}
