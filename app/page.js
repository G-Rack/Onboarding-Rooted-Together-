import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import OfferingsStrip from '@/components/OfferingsStrip'
import Problem from '@/components/Problem'
import Value from '@/components/Value'
import SpiritualFamily from '@/components/SpiritualFamily'
import Earn from '@/components/Earn'
import LeadersNetwork from '@/components/LeadersNetwork'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Apply from '@/components/Apply'
import Footer from '@/components/Footer'
import StickyCta from '@/components/StickyCta'

export default function Home() {
  return (
    <main style={{ background: '#FBF6EF', width: '100%', overflow: 'hidden' }}>
      <Nav />
      <Hero />
      <OfferingsStrip />
      <Problem />
      <Value />
      <SpiritualFamily />
      <Earn />
      <LeadersNetwork />
      <HowItWorks />
      <Pricing />
      <Apply />
      <Footer />
      <StickyCta />
    </main>
  )
}
