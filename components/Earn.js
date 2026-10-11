'use client'

import { useState } from 'react'

const fmt = (n) => '$' + n.toLocaleString('en-US')

export default function Earn() {
  const [price, setPrice] = useState(18)
  const [sales, setSales] = useState(30)
  const gross = price * sales
  const keep = Math.round(gross * 0.9)
  const fee = gross - keep
  const priceLabel = fmt(price)
  const grossLabel = fmt(gross)
  const keepLabel = fmt(keep)
  const feeLabel = fmt(fee)
  const salesLabel = sales
  return (
    <>
      <div id="earn" style={{ background: '#2E1B10', padding: '104px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
      <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8923F' }}>Earn from your calling</div>
      <h2 style={{ margin: '0', fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.08', letterSpacing: '-0.015em', color: '#FBF6EF', textWrap: 'balance' }}>Four ways to be sustained by the work you already carry.</h2>
      <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.65', color: '#D9C7B3', maxWidth: '640px' }}>You keep 90% of every sale. Rooted Together keeps 10%, so we only do well when you do.</p>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'stretch' }}>
      <div style={{ flex: '1 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '0' }}>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '22px 0', borderTop: '1px solid #5A3A25' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px', color: '#FBF6EF', minWidth: '0', flex: '1' }}>Courses and ebooks</div>
      <div style={{ flex: '1.4', fontSize: '16px', lineHeight: '1.6', color: '#D9C7B3' }}>Sell your teaching once, and it keeps serving people while you sleep.</div>
      </div>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '22px 0', borderTop: '1px solid #5A3A25' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px', color: '#FBF6EF', minWidth: '0', flex: '1' }}>Daily routines</div>
      <div style={{ flex: '1.4', fontSize: '16px', lineHeight: '1.6', color: '#D9C7B3' }}>Guided mornings and evenings people can download and return to.</div>
      </div>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '22px 0', borderTop: '1px solid #5A3A25' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px', color: '#FBF6EF', minWidth: '0', flex: '1' }}>1:1 calls</div>
      <div style={{ flex: '1.4', fontSize: '16px', lineHeight: '1.6', color: '#D9C7B3' }}>Set your own price and your own calendar. People book and pay in one step.</div>
      </div>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '22px 0', borderTop: '1px solid #5A3A25', borderBottom: '1px solid #5A3A25' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '600', fontSize: '24px', color: '#FBF6EF', minWidth: '0', flex: '1' }}>Special prayer requests</div>
      <div style={{ flex: '1.4', fontSize: '16px', lineHeight: '1.6', color: '#D9C7B3' }}>Offer dedicated prayer for a specific need, on your terms.</div>
      </div>
      <div style={{ marginTop: '24px', fontSize: '15px', lineHeight: '1.6', color: '#D9C7B3' }}>Payouts go to your bank through Stripe. Request one any time your balance reaches $10.</div>
      </div>
      
      
      <div style={{ flex: '1 1 400px', minWidth: '0', borderRadius: '28px', background: '#FBF6EF', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '26px', color: '#2E1B10' }}>See what it could look like</div>
      <div style={{ fontSize: '14px', color: '#6F5846' }}>Move the sliders. An illustration, not a promise of income.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><label htmlFor="priceRange" style={{ fontSize: '15px', fontWeight: '600', color: '#2E1B10' }}>Average price</label><span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '22px', color: '#6B4226' }}>{priceLabel}</span></div>
      <input id="priceRange" type="range" min={5} max={100} step={1} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><label htmlFor="salesRange" style={{ fontSize: '15px', fontWeight: '600', color: '#2E1B10' }}>Sales per month</label><span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '22px', color: '#6B4226' }}>{sales}</span></div>
      <input id="salesRange" type="range" min={1} max={200} step={1} value={sales} onChange={(e) => setSales(Number(e.target.value))} />
      </div>
      <div style={{ borderRadius: '20px', background: '#6B4226', padding: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8CDA8' }}>You keep each month</div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '700', fontSize: '52px', lineHeight: '1', color: '#FBF6EF' }}>{keepLabel}</div>
      <div style={{ fontSize: '14px', color: '#E8CDA8' }}>of {grossLabel} in sales, after Rooted's 10% ({feeLabel})</div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
