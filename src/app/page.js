import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '@/components/AboutSection'
import PropertySection from '@/components/PropertySection'
import EasySection from '@/components/EasySection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <PropertySection />
      <EasySection />
      <CTA />
    </main>
  )
}