import { LOGIN_URL, MAIN_SITE_URL } from '@/lib/config'

export default function Footer() {
  return (
    <>
<footer>
  <div className="in">
    <div className="lg">Rooted Together</div>
    <div>For creators · rootedtogether.club · Made for the ones who shepherd · <a href={LOGIN_URL}>Log in</a> · <a href={`${MAIN_SITE_URL}/privacy`}>Privacy</a></div>
  </div>
</footer>
    </>
  )
}
