'use client'

import { useState } from 'react'

const fmt = (n) => '$' + n.toLocaleString('en-US')

export default function Earn() {
  const [price, setPrice] = useState(16)
  const [sales, setSales] = useState(88)
  const gross = price * sales
  const keep = Math.round(gross * 0.9)
  const fee = gross - keep
  return (
    <>
<section id="earn" className="sec earn">
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow gold">Earn from your calling</div>
      <h2 className="h2" style={{ color: 'var(--cream)' }}>Four ways to fund the work you already carry.</h2>
      <p className="lead" style={{ color: '#D9C7B3', maxWidth: '640px' }}>You keep 90% of every sale. Rooted Together keeps 10%, so we only do well when you do.</p>
    </div>
    <div className="earn-grid">
      <div className="earn-list">
        <div className="er"><h3>Courses and ebooks</h3><p>Sell your teaching once, and it keeps serving people while you sleep.</p></div>
        <div className="er"><h3>Daily routines</h3><p>Guided mornings and evenings people can download and return to.</p></div>
        <div className="er"><h3>1:1 calls</h3><p>Set your own price and your own calendar. People book and pay in one step.</p></div>
        <div className="er"><h3>Special prayer requests</h3><p>Offer dedicated prayer for a specific need, on your terms.</p></div>
        <p style={{ marginTop: '24px', fontSize: '15px', lineHeight: '1.6', color: '#D9C7B3' }}>Payouts go to your bank through Stripe. Request one any time your balance reaches $10.</p>
      </div>
      <div className="calc">
        <div><h3>See what it could look like</h3><div className="sub">Move the sliders. An illustration, not a promise of income.</div></div>
        <div className="sl"><label htmlFor="pr">Average price <span>{fmt(price)}</span></label><input id="pr" type="range" min={5} max={100} step={1} value={price} onChange={(ev) => setPrice(Number(ev.target.value))} /></div>
        <div className="sl"><label htmlFor="sa">Sales per month <span>{sales}</span></label><input id="sa" type="range" min={1} max={200} step={1} value={sales} onChange={(ev) => setSales(Number(ev.target.value))} /></div>
        <div className="keep"><div className="a">You keep each month</div><div className="b">{fmt(keep)}</div><div className="c">of {fmt(gross)} in sales, after Rooted’s 10% ({fmt(fee)})</div></div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
