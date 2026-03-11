import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Why from '@/components/Why'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Why />
      <Contact />
      <Footer />
    </>
  )
}
