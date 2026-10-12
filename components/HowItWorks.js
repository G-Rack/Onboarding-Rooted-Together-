import { CHECKOUT_URL } from '@/lib/config'

export default function HowItWorks() {
  return (
    <>
<section className="sec how">
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow">How it works</div>
      <h2 className="h2">Pay once. Be live the same day.</h2>
      <p className="lead">Join with a single payment, then these three steps take you from an empty page to a storefront that gets paid.</p>
    </div>
    <div className="steps">
      <div className="step"><div className="n">1</div><h3>Join and create your account</h3><p>Pay the one-time $49, then create your account and profile. Your storefront gets its own link, like rootedtogether.club/creator/you, and the app is yours too.</p><a className="btn btn-p" style={{ minHeight: '48px', fontSize: '15.5px', padding: '0 24px' }} href={CHECKOUT_URL}>Join for $49</a></div>
      <div className="step"><div className="n">2</div><h3>Connect your bank through Stripe</h3><p>Link your account securely with Stripe. Every sale lands in your balance and you request payouts when you are ready.</p><span className="tagp">Step 2, inside your dashboard</span></div>
      <div className="step"><div className="n">3</div><h3>Publish and gather your people</h3><p>Upload a PDF, add a video lesson or open a booking calendar. Then post to Explore and invite your family into the app.</p><span className="tagp">Step 3, dashboard and app</span></div>
    </div>
  </div>
</section>
    </>
  )
}
