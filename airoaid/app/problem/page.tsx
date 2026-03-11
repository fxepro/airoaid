import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export default function ProblemPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="The Problem" tagColor="red" breadcrumb="The Problem"
        title={<>MODERN JETS.<br /><span style={{color:'#0070c9'}}>20TH-CENTURY</span><br />MEDICINE.</>}
        subtitle="Every year, 44,000 in-flight medical emergencies occur globally. Aircraft carry 21st-century avionics — but rely on medical equipment standards from the late 1900s."
      />

      {/* Stats bar */}
      <div style={{ background: '#003366', padding: '56px 0' }}>
        <div className="resp-four" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { n: '44,000',  l: 'In-flight emergencies / year' },
            { n: '1 in 600',l: 'Flights has a medical event' },
            { n: '10.6%',   l: 'Result in diversions' },
            { n: '$250K',   l: 'Maximum cost per diversion' },
          ].map(s => (
            <div key={s.n}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, lineHeight: 1, color: '#4da6e8' }}>{s.n}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.65)', marginTop: 5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <ScrollReveal>
              <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#fde8ec', color: '#c8102e', border: '1.5px solid rgba(200,16,46,.25)' }}>The Reality Today</span>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,80px)', lineHeight: .94, color: '#003366', marginBottom: 22 }}>WHEN<br />SECONDS COUNT</h2>
              <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginBottom: 20 }}>Every day, airlines worldwide face mid-flight medical events: chest pain, fainting, hypoxia, diabetic collapse, stroke symptoms, and severe allergic reactions. Cabin crews are trained in basic first aid — but they are not licensed clinicians.</p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginBottom: 20 }}>Without diagnostic data, crew must decide — under extreme pressure — whether to divert the aircraft. That decision costs time, money, and potentially lives.</p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: '#4a6080' }}>The crew&apos;s tools? A manual first-aid kit, oxygen, and an AED. No ECG. No blood pressure monitor. No glucose sensor. No physician link. No AI guidance. Just a radio.</p>
              <div style={{ padding: '24px 28px', borderLeft: '4px solid #c8102e', background: '#f5f9ff', borderRadius: '0 14px 14px 0', marginTop: 28 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#c8102e', marginBottom: 8 }}>Key Finding</div>
                <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>When a passenger&apos;s condition is unclear, decision-making falls on flight crew and airline operations — often under uncertainty, without diagnostic data.</p>
              </div>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '🏥', color: '#c8102e', bg: '#fde8ec', title: 'No Diagnostic Equipment',   body: 'No digital vital-sign monitoring required by regulations. Crew cannot measure ECG, blood pressure, oxygen saturation, glucose, or temperature with any precision.' },
                { icon: '📡', color: '#0070c9', bg: '#e8f4fd', title: 'No Telemedicine Link',       body: 'Ground physicians cannot access real-time patient data. All consultation happens blind — over voice radio — without any clinical readings.' },
                { icon: '🧠', color: '#003366', bg: '#e8f4fd', title: 'No Decision Support',        body: 'Flight attendants must make quasi-medical decisions with zero AI or clinical support. Misdiagnosis and unnecessary diversions are both common outcomes.' },
                { icon: '💰', color: '#4a6080', bg: '#f0f0f5', title: 'Enormous Financial Waste',   body: 'Studies show most diversions could be avoided with better evaluation tools. Each costs $20,000–$250,000 in operational disruption.' },
              ].map(iss => (
                <ScrollReveal key={iss.title}>
                  <div style={{ display: 'flex', gap: 18, padding: '22px 24px', background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 16 }}>
                    <div style={{ width: 54, height: 54, background: iss.bg, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>{iss.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: iss.color, marginBottom: 6 }}>{iss.title}</div>
                      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>{iss.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory gap */}
      <section style={{ padding: '96px 0', background: '#f5f9ff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#e8f4fd', color: '#0070c9', border: '1.5px solid rgba(77,166,232,.25)' }}>Regulatory Gap</span>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,80px)', lineHeight: .94, color: '#003366' }}>ANNEX 6: THE<br /><span style={{ color: '#0070c9' }}>FROZEN STANDARD</span></h2>
            </div>
          </ScrollReveal>
          <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <ScrollReveal>
              <div style={{ padding: '32px', background: '#fff5f5', border: '1.5px solid rgba(200,16,46,.2)', borderRadius: 18 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: '#c8102e', marginBottom: 20 }}>What Regulations Currently Require</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['A basic first-aid kit for minor injuries', 'A limited Emergency Medical Kit (EMK)', 'An AED on certain aircraft types only', 'Non-clinical first-aid crew training'].map(i => (
                    <div key={i} style={{ display: 'flex', gap: 12 }}><span style={{ fontWeight: 700, color: '#c8102e', fontSize: 18, flexShrink: 0 }}>✗</span><span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{i}</span></div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ padding: '32px', background: '#f0f7ff', border: '1.5px solid rgba(0,112,201,.2)', borderRadius: 18 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: '#0070c9', marginBottom: 20 }}>What Technology Now Enables</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Digital ECG, SpO₂, blood pressure, glucose, temperature', 'AI-guided triage for non-medical crew', 'Satellite telemedicine to licensed physicians', 'Automated FAA/EASA compliance reporting', 'Predictive analytics for at-risk passengers'].map(i => (
                    <div key={i} style={{ display: 'flex', gap: 12 }}><span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0070c9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{i}</span></div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: '#003366', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', marginBottom: 16 }}>THE SOLUTION EXISTS.</h2>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,.75)', maxWidth: 480, margin: '0 auto 32px' }}>AiroAid bridges the gap between what regulations require and what technology can deliver.</p>
        <Link href="/solution" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#c8102e', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>See the AiroAid Solution →</Link>
      </div>

      <Footer />
    </>
  )
}
