import { FOOTER_NOTE, LOGIN_URL } from '@/lib/config'

export default function Footer() {
  return (
    <>
      <div style={{ background: '#2E1B10', borderTop: '1px solid #4A2F1D', padding: '36px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '20px', color: '#E8CDA8' }}>Rooted Together</div>
      <div style={{ fontSize: '14px', color: '#D9C7B3' }}>{FOOTER_NOTE} · <a href={LOGIN_URL} style={{ color: '#E8CDA8', textDecoration: 'underline' }}>Log in</a></div>
      </div>
      </div>
    </>
  )
}
