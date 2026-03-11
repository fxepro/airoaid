import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Contact" tagColor="red" breadcrumb="Contact"
        title={<>LET&apos;S TALK<br /><span style={{color:'#0070c9'}}>ABOUT YOUR FLEET.</span></>}
        subtitle="Whether you're an airline executive, charter operator, or regulatory body — we'd love to walk you through what AiroAid can do for your operation."
      />
      <Contact />
      <Footer />
    </>
  )
}
