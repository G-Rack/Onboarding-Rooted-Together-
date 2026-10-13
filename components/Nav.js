import { CHECKOUT_URL } from '@/lib/config'

export default function Nav() {
  return (
    <>
<header className="nav">
  <div className="wrap">
    <a href="/" className="logo"><i>RT</i>Rooted Together</a>
    <nav className="nav-links">
      <a className="l" href="#value">Storefront</a>
      <a className="l" href="#churches">Churches</a>
      <a className="l" href="#app">The app</a>
      <a className="l" href="#earn">Earn</a>
      <a className="l" href="#pricing">Pricing</a>
      <a className="btn btn-p" href={CHECKOUT_URL}>Start earning</a>
    </nav>
  </div>
</header>
    </>
  )
}
