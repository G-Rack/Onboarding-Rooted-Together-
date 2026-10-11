export default function HowItWorks() {
  return (
    <>
      <div id="start" style={{ background: '#F1E4D3', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B4226' }}>How it works</div>
      <h2 style={{ margin: '0', fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.08', letterSpacing: '-0.015em', textWrap: 'balance' }}>Live in three steps, earning from your first sale.</h2>
      <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#6F5846' }}>Apply first and we will welcome you personally. Then these three steps take you from an empty page to a storefront that gets paid.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '20px' }}>
      <div style={{ padding: '32px', borderRadius: '24px', background: '#FBF6EF', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '44px', lineHeight: '1', color: '#C8923F' }}>1</div><div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F1E4D3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4226" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"></path></svg></div></div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px' }}>Create your profile</div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#6F5846' }}>Add your photo, your calling and your story. Your storefront gets its own link, like rootedtogether.club/creator/you.</div>
      <a className="btn-p" href="#apply" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 24px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '15.5px', fontWeight: '600' }}>Create your profile</a>
      </div><div style={{ padding: '32px', borderRadius: '24px', background: '#FBF6EF', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '44px', lineHeight: '1', color: '#C8923F' }}>2</div><div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F1E4D3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4226" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5"></rect><path d="M3 10.5h18M7 15h4"></path></svg></div></div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px' }}>Connect your bank through Stripe</div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#6F5846' }}>Link your account securely with Stripe. Every sale lands in your balance and you request payouts when you are ready.</div>
      <a className="btn-p" href="#apply" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 24px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '15.5px', fontWeight: '600' }}>Connect with Stripe</a>
      </div><div style={{ padding: '32px', borderRadius: '24px', background: '#FBF6EF', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '44px', lineHeight: '1', color: '#C8923F' }}>3</div><div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F1E4D3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4226" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"></path><path d="M9 9h6M9 13h4"></path></svg></div></div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px' }}>Publish your courses and ebooks</div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#6F5846' }}>Upload a PDF, add a video lesson or open a booking calendar. Set your own price and go live in minutes.</div>
      <a className="btn-p" href="#apply" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 24px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '15.5px', fontWeight: '600' }}>Publish your first offering</a>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
