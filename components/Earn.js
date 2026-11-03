'use client'

import { useState } from 'react'

const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US')

// Illustration only. Standard: Rooted keeps 10%. Pro: Rooted keeps 5%.
// On both, Stripe's card fee (typically 2.9% + 30 cents) comes out of each sale.
export default function Earn() {
  const [plan, setPlan] = useState('standard')
  const [price, setPrice] = useState(16)
  const [sales, setSales] = useState(88)
  const gross = price * sales
  const card = sales * (price * 0.029 + 0.3)
  const stdKeep = Math.max(0, gross * 0.9 - card)
  const proKeep = Math.max(0, gross * 0.95 - card)
  const isPro = plan === 'pro'
  const keep = isPro ? proKeep : stdKeep
  const diff = proKeep - stdKeep
  const note = `of ${fmt(gross)} in sales, after Rooted’s ${isPro ? '5%' : '10%'} (${fmt(gross * (isPro ? 0.05 : 0.1))}) and about ${fmt(card)} in Stripe card fees`
  const compare = diff >= 1
    ? (isPro ? `That is about ${fmt(diff)} a month more than the Standard membership.` : `Creator Pro would keep you about ${fmt(diff)} more each month.`)
    : ''
  return (
    <>
<section id="earn" className="sec earn">
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow gold">Earn from your calling</div>
      <h2 className="h2" style={{ color: 'var(--cream)' }}>{isPro ? 'Four' : 'Three'} ways to fund the work you already carry.</h2>
      <p className="lead" style={{ color: '#D9C7B3', maxWidth: '640px' }}>Rooted Together keeps 10% of each sale on the Creator membership, and Stripe’s card fee comes out of each payment, about 2.9% plus 30 cents. Upgrade to Creator Pro and our share drops to 5%.</p>
    </div>
    <div className="earn-grid">
      <div className="earn-list">
        <div className="er"><h3>Courses and ebooks</h3><p>Sell your teaching once, and it keeps serving people while you sleep.</p></div>
        <div className="er"><h3>Daily routines</h3><p>Guided mornings and evenings people can download and return to.</p></div>
        <div className="er"><h3>1:1 calls</h3><p>Set your own price and your own calendar. People book and pay in one step.</p></div>
        {isPro && <div className="er"><h3>Daily prayers, meditations and special requests <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px', padding: '3px 10px', borderRadius: '999px', background: 'var(--gold)', color: 'var(--deep)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em' }}>Creator Pro</span></h3><p>Offer a week of daily prayer, a guided meditation or a dedicated request for a specific need, on your terms. Included with Creator Pro.</p></div>}
        <p style={{ marginTop: '24px', fontSize: '15px', lineHeight: '1.6', color: '#D9C7B3' }}>Payouts go to your bank through Stripe. Request one any time your balance reaches $10.</p>
      </div>
      <div className="calc">
        <div><h3>See what it could look like</h3><div className="sub">Move the sliders. An illustration, not a promise of income.</div></div>
        <div className="seg" role="group" aria-label="Plan">
          <button type="button" className={isPro ? '' : 'on'} aria-pressed={!isPro} onClick={() => setPlan('standard')}>Standard, $49</button>
          <button type="button" className={isPro ? 'on' : ''} aria-pressed={isPro} onClick={() => setPlan('pro')}>Creator Pro, $88</button>
        </div>
        <div className="sl"><label htmlFor="pr">Average price <span>{fmt(price)}</span></label><input id="pr" type="range" min={5} max={100} step={1} value={price} onChange={(ev) => setPrice(Number(ev.target.value))} /></div>
        <div className="sl"><label htmlFor="sa">Sales per month <span>{sales}</span></label><input id="sa" type="range" min={1} max={200} step={1} value={sales} onChange={(ev) => setSales(Number(ev.target.value))} /></div>
        <div className="keep"><div className="a">You keep each month</div><div className="b">{fmt(keep)}</div><div className="c">{note}</div>{compare && <div className="d">{compare}</div>}</div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
