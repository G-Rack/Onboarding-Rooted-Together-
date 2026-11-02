import { CHECKOUT_URL, LOGIN_URL, PRO_CHECKOUT_URL } from '@/lib/config'
import ProCta from '@/components/ProCta'

export default function Join() {
  return (
    <>
<section id="join" className="join">
  <div className="in">
    <div className="eyebrow gold">Join Rooted Together</div>
    <h2>Your calling, your church or your ministry deserves a home. Open yours today.</h2>
    <p>Pay once, create your account, and your storefront is ready for your first course, post, routine or call. The app is free to join.</p>
    <div className="btn-pair">
      <a className="btn btn-g" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Join for $49</a>
      <ProCta className="btn btn-ol" href={PRO_CHECKOUT_URL}>Get Creator Pro, $88</ProCta>
    </div>
    <div className="t"><span>One-time payment</span><span>No monthly storefront fee</span><span>Keep 90% of every sale, or all but Stripe’s card fee on Pro</span></div>
    <div style={{ fontSize: '14.5px', color: '#D9C7B3' }}>Already a member? <a href={LOGIN_URL} style={{ color: 'var(--cream)', fontWeight: '600', textDecoration: 'underline' }}>Log in</a></div>
    <div id="seekers" className="seek"><b>Not a creator?</b> This page is only for people opening a storefront. If you're looking for a spiritual mother, a pastor or a community, you'll find them inside the Rooted Together app.</div>
  </div>
</section>
    </>
  )
}
