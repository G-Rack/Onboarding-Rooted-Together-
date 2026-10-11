import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/500-italic.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/config'

const title = 'Rooted Together for Creators: open your storefront and earn from what you teach'
const description =
  'A marketplace for spiritual mothers, pastors and leaders. Open your storefront, sell courses, ebooks, routines, 1:1 calls and prayer requests, and get paid to your bank through Stripe.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: { title, description, siteName: SITE_NAME, type: 'website' },
  twitter: { card: 'summary', title, description },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBF6EF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
