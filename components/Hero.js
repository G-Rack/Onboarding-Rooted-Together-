import { CHECKOUT_URL } from '@/lib/config'
import RuthAvatar from '@/components/RuthAvatar'

export default function Hero() {
  return (
    <>
<section className="hero">
  <div className="wrap">
    <div className="hero-copy">
      <h1>Open your storefront. <em>Earn from what you already teach.</em></h1>
      <p className="lead">Rooted Together is a marketplace and community app for faith leaders, churches and ministries. Set up your own storefront, publish courses, ebooks and daily routines, take paid 1:1 calls and prayer requests, and get paid straight to your bank.</p>
      <div className="cta-row">
        <a className="btn btn-p" href={CHECKOUT_URL}>Create your storefront</a>
        <a className="btn btn-o" href="#app">See inside the app</a>
      </div>
      <div className="fine"><b>One-time $49 membership.</b><span>Includes your storefront and full membership of the Rooted Together app.</span></div>
    </div>

    <div className="hero-art">
<div className="hero-stage">
 <div className="arch"></div>
 <div className="phone"><div className="scr">
 <div className="sb"><span>9:41</span><span></span></div>
 <div className="sc-body" style={{ gap: '9px' }}>
  <div className="sc-title"><h4>Profile</h4><span className="mini-btn" style={{ background: 'var(--sand)', color: 'var(--brown)' }}>Edit</span></div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <RuthAvatar size={58} />
    <div><div style={{ fontFamily: 'var(--serif)', fontWeight: '700', fontSize: '18px', lineHeight: '1.15' }}>Mother Ruth</div><span className="role" style={{ margin: '4px 0 0', display: 'inline-block' }}>Mother</span></div>
  </div>
  <div className="stats"><div><b>1,248</b><span>Followers</span></div><div><b>3</b><span>Communities</span></div><div><b>24</b><span>Family</span></div></div>
  <div className="bal">
    <div className="bal-top"><div><div className="l">Available balance</div><div className="n">$1,284.60</div></div><span className="up">+18%</span></div>
    <svg viewBox="0 0 220 44" preserveAspectRatio="none" className="spark"><path d="M0 36 L24 30 L48 33 L72 22 L96 26 L120 15 L144 20 L170 9 L196 12 L220 3 L220 44 L0 44Z" fill="rgba(200,146,63,.22)"/><polyline points="0,36 24,30 48,33 72,22 96,26 120,15 144,20 170,9 196,12 220,3" fill="none" stroke="#C8923F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <div className="bal-btn">Request payout</div>
  </div>
  <div className="comm"><div className="ci"><svg className="ico"><use href="#i-people"/></svg></div><div><b>Mothers in Prayer</b><small>86 members</small></div></div>
  <div className="comm"><div className="ci"><svg className="ico"><use href="#i-heart"/></svg></div><div><b>New Believers Circle</b><small>42 members</small></div></div>
 </div>
 <div className="tbar"><div><svg className="ico"><use href="#i-compass"/></svg>Explore</div><div><svg className="ico"><use href="#i-people"/></svg>Directory</div><div><svg className="ico"><use href="#i-chat"/></svg>Chat</div><div><svg className="ico"><use href="#i-home"/></svg>Family</div><div className="on"><svg className="ico"><use href="#i-person"/></svg>Profile</div></div>
</div></div>
 <div className="note" style={{ right: '-132px', top: '110px' }}><div className="ni" style={{ background: 'var(--brown)', color: 'var(--cream)' }}><svg className="ico"><use href="#i-person"/></svg></div><div><b>New follower</b><span>Grace M. started following you</span></div></div>
 <div className="note" style={{ left: '-124px', top: '300px' }}><div className="ni" style={{ background: 'var(--gold)', color: 'var(--deep)' }}><svg className="ico"><use href="#i-card"/></svg></div><div><b>Rooted Mornings sold</b><span>+$7.20 added to your balance</span></div></div>
 <div className="note" style={{ right: '-128px', top: '470px' }}><div className="ni" style={{ background: 'var(--olive)', color: 'var(--cream)' }}><svg className="ico"><use href="#i-heart"/></svg></div><div><b>Your family is praying</b><span>24 people prayed today</span></div></div>
</div>
</div>
  </div>
</section>
    </>
  )
}
