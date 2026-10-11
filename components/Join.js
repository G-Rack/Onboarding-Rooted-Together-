import { CHECKOUT_URL, LOGIN_URL } from '@/lib/config'

export default function Join() {
  return (
    <div id="join" style={{ background: '#2E1B10', padding: '104px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px' }}>
        <div style={{ fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8923F' }}>Join Rooted Together</div>
        <h2 style={{ margin: '0', fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: 'clamp(34px,5vw,62px)', lineHeight: '1.06', letterSpacing: '-0.015em', color: '#FBF6EF', textWrap: 'balance' }}>Your calling deserves a home. Open yours today.</h2>
        <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#D9C7B3', maxWidth: '560px' }}>
          Pay once, create your account, and your storefront is ready for your first course, ebook, routine or call.
        </p>
        <a
          className="btn-g"
          href={CHECKOUT_URL}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '60px', padding: '0 44px', borderRadius: '999px', background: '#C8923F', color: '#2E1B10', fontSize: '18px', fontWeight: '700' }}
        >
          Join for $49
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 28px', fontSize: '14.5px', color: '#E8CDA8' }}>
          <span>One-time payment</span>
          <span>No monthly fees</span>
          <span>90% of every sale yours</span>
        </div>
        <div style={{ fontSize: '14.5px', color: '#D9C7B3' }}>
          Already a member?{' '}
          <a href={LOGIN_URL} style={{ color: '#FBF6EF', fontWeight: '600', textDecoration: 'underline' }}>
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}
