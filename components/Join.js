import { CHECKOUT_URL, LOGIN_URL } from '@/lib/config'

export default function Join() {
  return (
    <>
<section id="join" className="join">
  <div className="in">
    <div className="eyebrow gold">Join Rooted Together</div>
    <h2>Your calling, your church or your ministry deserves a home. Open yours today.</h2>
    <p>Pay once, create your account, and your storefront and the full app are ready for your first course, post, routine or call.</p>
    <a className="btn btn-g" href={CHECKOUT_URL}>Join for $49</a>
    <div className="t"><span>One-time payment</span><span>No monthly fees</span><span>90% of every sale yours</span></div>
    <div style={{ fontSize: '14.5px', color: '#D9C7B3' }}>Already a member? <a href={LOGIN_URL} style={{ color: 'var(--cream)', fontWeight: '600', textDecoration: 'underline' }}>Log in</a></div>
    <div id="seekers" className="seek"><b>Not a creator?</b> This page is only for people opening a storefront. If you're looking for a spiritual mother, a pastor or a community, you'll find them inside the Rooted Together app.</div>
  </div>
</section>
    </>
  )
}
