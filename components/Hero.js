import { CHECKOUT_URL } from '@/lib/config'

export default function Hero() {
  return (
    <>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 24px 88px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '56px' }}>
      <div style={{ flex: '1 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '10px', padding: '8px 16px', borderRadius: '999px', background: '#F1E4D3', color: '#6B4226', fontSize: '13px', fontWeight: '600', letterSpacing: '0.02em' }}>
      <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#C8923F' }}></span>
      For spiritual mothers, pastors and leaders
      </div>
      <h1 style={{ margin: '0', fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: 'clamp(42px,6.2vw,80px)', lineHeight: '1.02', letterSpacing: '-0.02em', color: '#2E1B10', textWrap: 'balance' }}>Open your storefront. Earn from what you already teach.</h1>
      <p style={{ margin: '0', fontSize: '20px', lineHeight: '1.55', color: '#6F5846', maxWidth: '560px' }}>Rooted Together is a marketplace for faith leaders. Set up your own storefront, publish courses, ebooks and daily routines, take paid 1:1 calls and prayer requests, and get paid straight to your bank.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
      <a className="btn-p" href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '56px', padding: '0 34px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '17px', fontWeight: '600' }}>Create your storefront</a>
      <a className="btn-o" href="#value" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '56px', padding: '0 30px', borderRadius: '999px', border: '1.5px solid #6B4226', color: '#6B4226', fontSize: '17px', fontWeight: '600' }}>See what you get</a>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#6F5846' }}>
      <span style={{ fontWeight: '600', color: '#6B4226' }}>One-time $49 membership.</span>
      <span>Pay once, then create your account. Payouts through Stripe.</span>
      </div>
      </div>
      
      
      <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '640px' }}>
      <div style={{ position: 'absolute', left: '0', right: '0', top: '30px', bottom: '0', borderRadius: '220px 220px 36px 36px', background: '#F1E4D3' }}></div>
      <div style={{ position: 'absolute', left: '50%', top: '0', width: '292px', marginLeft: '-146px', height: '610px', borderRadius: '44px', background: '#2E1B10', padding: '10px' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '36px', background: '#FBF6EF', padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: '14px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '15px', color: '#6B4226' }}>Rooted Together</div>
      <div style={{ width: '26px', height: '26px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>M</div>
      </div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '22px', lineHeight: '1.15', color: '#2E1B10' }}>Your Spiritual Family</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '34px', height: '34px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', border: '2px solid #FBF6EF', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>G</div>
      <div style={{ width: '34px', height: '34px', marginLeft: '-8px', borderRadius: '999px', background: '#C8923F', color: '#2E1B10', border: '2px solid #FBF6EF', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>R</div>
      <div style={{ width: '34px', height: '34px', marginLeft: '-8px', borderRadius: '999px', background: '#8A9A6B', color: '#FBF6EF', border: '2px solid #FBF6EF', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</div>
      <div style={{ width: '34px', height: '34px', marginLeft: '-8px', borderRadius: '999px', background: '#A9724A', color: '#FBF6EF', border: '2px solid #FBF6EF', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>J</div>
      <div style={{ marginLeft: '10px', fontSize: '12px', fontWeight: '600', color: '#6F5846' }}>+ 24 praying together</div>
      </div>
      <div style={{ borderRadius: '16px', background: '#fff', border: '1px solid #EADBC8', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B4226' }}>Prayer request</div>
      <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#2E1B10' }}>Please pray for my family as we move cities this month.</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '11.5px', color: '#6F5846' }}>Grace M.</div>
      <div style={{ padding: '5px 12px', borderRadius: '999px', background: '#6B4226', color: '#FBF6EF', fontSize: '11.5px', fontWeight: '600' }}>I'm praying</div>
      </div>
      </div>
      <div style={{ borderRadius: '16px', background: '#fff', border: '1px solid #EADBC8', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
      <div style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B4226' }}>New sale</div>
      <div style={{ fontSize: '13px', fontWeight: '600', color: '#2E1B10' }}>Rooted Mornings</div>
      </div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '20px', color: '#6B4226' }}>+$7.20</div>
      </div>
      <div style={{ borderRadius: '16px', background: '#6B4226', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <div style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8CDA8' }}>1:1 call booked</div>
      <div style={{ fontSize: '13px', fontWeight: '600', color: '#FBF6EF' }}>Thursday, 4:00 PM</div>
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8CDA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="12" height="12" rx="2"></rect><path d="M15 10l6-3v10l-6-3z"></path></svg>
      </div>
      <div style={{ fontSize: '10.5px', color: '#9A826C', textAlign: 'center' }}>App preview with example content</div>
      </div>
      </div>
      <div style={{ position: 'absolute', right: '0', top: '96px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '999px', background: '#fff', border: '1px solid #EADBC8', boxShadow: '0 10px 30px rgba(46,27,16,0.12)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4226" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4 10-10"></path></svg>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#2E1B10' }}>Payout on its way</span>
      </div>
      <div style={{ position: 'absolute', left: '0', bottom: '84px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '999px', background: '#C8923F', boxShadow: '0 10px 30px rgba(46,27,16,0.16)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E1B10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path></svg>
      <span style={{ fontSize: '13px', fontWeight: '700', color: '#2E1B10' }}>Your family is praying</span>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
