const TYPES = [
  { icon: 'i-cap', name: 'Courses', body: 'Video and PDF lessons, one after another, so people can learn at their own pace.', eg: 'e.g. 30 Days of Surrender' },
  { icon: 'i-book', name: 'Ebooks', body: 'Devotionals, testimonies and study guides people read on their own time.', eg: 'e.g. Naming What Hurts' },
  { icon: 'i-headphones', name: 'Audiobooks', body: 'Guided prayers, teachings and meditations, in chapters people can listen to anywhere.', eg: 'e.g. The Quiet Hour' },
  { icon: 'i-printer', name: 'Printables', body: 'Prayer journals, planners and study sheets to print, write in and keep.', eg: 'e.g. A Season of Prayer Journal' },
  { icon: 'i-layout', name: 'Templates', body: 'Workbooks, planners and leader kits that people fill in and reuse.', eg: 'e.g. Small Group Leader Kit' },
  { icon: 'i-sun', name: 'Daily routines', body: 'Prayer, journaling and practice plans to follow day by day.', eg: 'e.g. Rooted Mornings' },
  { icon: 'i-layers', name: 'Bundles', body: 'Several resources from you, delivered together in one download.', eg: 'e.g. The Morning Rhythm Bundle' },
  { icon: 'i-video', name: '1:1 calls', body: 'Mentor, counsel and pray with people one to one. They book a time and pay in one step.', eg: 'e.g. 30-minute guidance call' },
]

export default function WhatYouSell() {
  return (
    <>
<section id="sell" className="sec" style={{ paddingBottom: '24px' }}>
  <div className="wrap">
    <div className="sec-head">
      <div className="eyebrow">What you can sell</div>
      <h2 className="h2">Eight ways to share what you know.</h2>
      <p className="lead" style={{ color: 'var(--muted)', fontSize: '19px', lineHeight: 1.6, margin: 0 }}>Start with one, add more when you are ready. Sell each item, or give it free to your Spiritual Family. You choose, item by item.</p>
    </div>
    <div className="sell-grid">
      {TYPES.map((t) => (
        <div className="sell-card" key={t.name}>
          <div className="ib"><svg className="ico"><use href={`#${t.icon}`} /></svg></div>
          <h3>{t.name}</h3>
          <p>{t.body}</p>
          <span className="eg">{t.eg}</span>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}
