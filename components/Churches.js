import { CHECKOUT_URL } from '@/lib/config'

const ChurchIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v4M10 4h4" />
    <path d="M12 6l5 4v10H7V10z" />
    <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
    <path d="M7 12.5H3.5V20H7M17 12.5h3.5V20H17" />
  </svg>
)

export default function Churches() {
  return (
    <section id="churches" className="church">
      <div className="church-panel">
        <div className="church-copy">
          <div className="eyebrow gold">For churches and ministries</div>
          <h2 className="h2">Your church&rsquo;s teaching deserves a home beyond Sunday.</h2>
          <p className="lead">Rooted Together is not only for individual leaders. Churches, ministries and mission teams can open a storefront, share what they teach, and gather their people in one place.</p>

          <div className="uses">
            <div className="use">
              <div className="ui"><svg className="ico"><use href="#i-book" /></svg></div>
              <div><h3>Sermon series, classes and courses</h3><p>Turn teaching series, discipleship classes and new members courses into courses and ebooks your whole congregation can reach, free or paid.</p></div>
            </div>
            <div className="use">
              <div className="ui"><svg className="ico"><use href="#i-people" /></svg></div>
              <div><h3>Ministries with a voice of their own</h3><p>Women&rsquo;s, men&rsquo;s, youth and prayer ministries can build a following and gather communities with a clear purpose.</p></div>
            </div>
            <div className="use">
              <div className="ui"><svg className="ico"><use href="#i-heart" /></svg></div>
              <div><h3>Care that reaches beyond your walls</h3><p>Offer paid pastoral calls and prayer requests to people outside your church, and keep your own congregation free through a Spiritual Family.</p></div>
            </div>
          </div>

          <div className="who" aria-label="Who this is for">
            <span>Local churches</span><span>Prayer ministries</span><span>Women&rsquo;s and men&rsquo;s ministries</span><span>Youth and young adults</span><span>Mission teams</span><span>Bible schools</span>
          </div>

          <div>
            <a className="btn btn-g" href={CHECKOUT_URL}>Open your church&rsquo;s storefront</a>
          </div>
        </div>

        <div className="church-art">
          <div className="cs">
            <div className="cs-cover" />
            <div className="cs-body">
              <div className="cs-av"><ChurchIcon size={30} /></div>
              <div className="cs-name">Grace Fellowship Church</div>
              <div className="cs-sub">Church &middot; 2,140 followers</div>
              <div className="cs-btns"><span className="cs-b p">Follow</span><span className="cs-b o">Message</span></div>
              <div className="cs-lbl">Offerings</div>
              <div className="cs-off"><div className="oi"><svg className="ico"><use href="#i-doc" /></svg></div><div><b>New Members Class</b><small>For your congregation</small></div><span className="free">Free</span></div>
              <div className="cs-off"><div className="oi"><svg className="ico"><use href="#i-video" /></svg></div><div><b>Walking in Peace</b><small>6-week sermon series</small></div><span className="pr">$24</span></div>
              <div className="cs-off"><div className="oi"><svg className="ico"><use href="#i-book" /></svg></div><div><b>Marriage Matters</b><small>Ebook and study guide</small></div><span className="pr">$12</span></div>
              <div className="cs-off"><div className="oi"><svg className="ico"><use href="#i-heart" /></svg></div><div><b>Pastoral care call</b><small>30 minutes</small></div><span className="pr">$40</span></div>
            </div>
          </div>
          <div className="cs-cap">Example storefront, for illustration</div>
        </div>
      </div>
    </section>
  )
}
