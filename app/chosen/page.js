import { cookies } from 'next/headers'
import { rpc, CHOSEN_COOKIE } from '@/lib/chosen'
import ChosenGate from '@/components/ChosenGate'
import ChosenPledge from '@/components/ChosenPledge'
import './chosen.css'

// Invitation only: no link to this page from the rest of the site, and search engines
// are told not to list it. It reads the visitor's cookie on every request.
export const dynamic = 'force-dynamic'

// Lets the page run edge to edge on phones (under the status bar and the browser's bottom bar);
// the CSS pads for the safe areas so nothing sits underneath them.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const title = 'You are invited | Rooted Together'
const description = 'A private invitation to help build a home for people who need spiritual support.'

export const metadata = {
  title,
  description,
  robots: { index: false, follow: false, nocache: true },
  openGraph: { title, description },
  twitter: { card: 'summary', title, description },
}

export default async function ChosenPage() {
  const jar = await cookies()
  const token = jar.get(CHOSEN_COOKIE)?.value || ''
  let allowed = false
  if (/^[a-f0-9]{64}$/.test(token)) {
    allowed = (await rpc('check_invitation_token', { p_token: token })) === true
  }
  return allowed ? <ChosenPledge token={token} /> : <ChosenGate />
}
