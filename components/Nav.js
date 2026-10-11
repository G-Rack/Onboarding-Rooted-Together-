import { CHECKOUT_URL, LOGIN_URL } from '@/lib/config'

export default function Nav() {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', maxWidth: '1240px', margin: '0 auto', padding: '22px 24px' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '24px', color: '#6B4226', letterSpacing: '-0.01em' }}>Rooted Together</div>
      <div className="nav-actions">
      <a className="nav-link" href="#value" style={{ fontSize: '15px', fontWeight: '500', color: '#6F5846' }}>What you get</a>
      <a className="nav-link" href="#earn" style={{ fontSize: '15px', fontWeight: '500', color: '#6F5846' }}>Earn</a>
      <a className="nav-link" href="#pricing" style={{ fontSize: '15px', fontWeight: '500', color: '#6F5846' }}>Pricing</a>
      <a className="btn-p" href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 22px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '15px', fontWeight: '600' }}>Start earning</a>
      </div>
      </div>
    </>
  )
}
