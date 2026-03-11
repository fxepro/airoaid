import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const components = [
  { num:'01', color:'#0070c9', icon:'🩺', title:'Compact Medical Kit',       sub:'Aviation-Certified Diagnostics in One Carry-On', body:'The AiroAid hardware kit houses a complete suite of digital medical sensors in a single, FAA-approved portable case. ECG electrodes, SpO₂ sensor, automated BP cuff, digital thermometer, and glucometer — all in one unified interface.', checks:['FAA carry-on certified & EMI-shielded','Lithium-safe battery: 8+ hour operation','Activates in under 60 seconds','Sealed and ruggedized for cabin environments'], left: true },
  { num:'02', color:'#003366', icon:'🧠', title:'AI-Driven Triage',           sub:'Intelligent Guidance for Non-Medical Crew',         body:'The AI triage engine interprets incoming sensor data in real time and walks crew through a structured clinical assessment in plain language — no medical training required from the operator.',                                                         checks:['Identifies cardiac, stroke, diabetic & respiratory events','Real-time threshold alerts & escalation triggers','Works offline — no internet required for core AI','Multilingual support for 18 languages'], left: false },
  { num:'03', color:'#c8102e', icon:'📡', title:'Satellite Telemedicine',     sub:'Real Physicians. Real Time. Any Altitude.',          body:'An encrypted satellite connection streams live patient vitals directly to a licensed ground physician. The doctor sees the same ECG trace, SpO₂, and blood pressure data as if they were in the cabin.',                                                checks:['End-to-end AES-256 encrypted uplink','24/7 physician availability, global coverage','Compatible with Inmarsat, Iridium, and Viasat','Voice + data channel to ground medical team'], left: true },
  { num:'04', color:'#4a6080', icon:'📋', title:'Compliance & Analytics',     sub:'Cloud Intelligence for Fleet-Wide Safety',          body:'Every incident is automatically logged, timestamped, and stored in a cloud compliance platform. Airlines receive automated regulatory reports and population-level analytics.',                                                                         checks:['Auto-generated FAA & EASA incident reports','HIPAA & GDPR compliant cloud storage','Fleet-wide analytics dashboard','REST API integration with airline ops systems'], left: false },
]

export default function SolutionPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="The Solution" tagColor="blue" breadcrumb="Solution"
        title={<>ONE SYSTEM.<br /><span style={{color:'#0070c9'}}>COMPLETE</span> <span style={{color:'#c8102e'}}>COVERAGE.</span></>}
        subtitle="AiroAid integrates hardware diagnostics, AI triage, satellite telemedicine, and compliance analytics into a single seamless package — built from the ground up for aviation."
      />

      {/* Pricing bar */}
      <div style={{ background: '#003366', padding: '56px 0' }}>
        <div className="resp-three" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'center', gap: 52, flexWrap: 'wrap', textAlign: 'center' }}>
          {[{ v:'$6,000',   l:'Per aircraft — hardware kit' }, { v:'$500/mo', l:'Software, AI & telemedicine' }, { v:'1 diversion', l:'Avoided = full fleet ROI covered' }].map(p => (
            <div key={p.v}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 54, color: '#fff', lineHeight: 1 }}>{p.v}</div><div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4da6e8', marginTop: 8 }}>{p.l}</div></div>
          ))}
        </div>
      </div>

      {/* Components */}
      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', gap: 72 }}>
          {components.map(c => (
            <ScrollReveal key={c.num}>
              <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
                <div style={{ order: c.left ? 1 : 2 }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: c.color, marginBottom: 10 }}>Component {c.num}</div>
                  <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(44px,5vw,68px)', lineHeight: .94, color: '#003366', marginBottom: 10 }}>{c.title}</h2>
                  <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 600, color: c.color, marginBottom: 18 }}>{c.sub}</h3>
                  <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginBottom: 20 }}>{c.body}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {c.checks.map(ch => (
                      <div key={ch} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ width: 22, height: 22, borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ order: c.left ? 2 : 1, background: `linear-gradient(135deg,${c.color}12,${c.color}28)`, border: `2px solid ${c.color}30`, borderRadius: 24, padding: '56px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: 72, marginBottom: 16 }}>{c.icon}</div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, color: c.color }}>{c.title}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 600, color: '#4a6080', marginTop: 6 }}>Component {c.num} of 4</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div style={{ background: '#003366', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', marginBottom: 16 }}>FITS YOUR FLEET. TODAY.</h2>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,.75)', maxWidth: 520, margin: '0 auto 32px' }}>AiroAid integrates with existing airline communication networks and satisfies current compliance requirements.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/features" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0070c9', background: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }}>Explore All Features →</Link>
          <Link href="/contact" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', border: '2px solid #fff', padding: '12px 26px', borderRadius: 4, textDecoration: 'none' }}>Request a Demo</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
