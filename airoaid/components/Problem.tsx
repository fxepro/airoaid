import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const issues = [
  { icon: '✈️', title: 'Outdated Regulations', body: 'ICAO Annex 6 SARPs haven\'t evolved since the late 20th century. Airlines carry only a basic first-aid kit, limited EMK, and AED — no digital diagnostics, no AI triage.' },
  { icon: '🏥', title: 'No Medical Professionals', body: 'Flight attendants are not licensed clinicians. Without diagnostic data, they cannot assess cardiac events, strokes, or diabetic emergencies with confidence.' },
  { icon: '💰', title: 'Costly Diversions', body: 'Each unplanned diversion costs $20,000–$250,000. Studies show the majority could be avoided with better onboard medical evaluation tools.' },
  { icon: '📡', title: 'No Telemedicine Link', body: 'Ground physicians cannot access real-time patient data. Decisions are made blind — over radio — without ECG, oxygen saturation, or blood pressure readings.' },
]

export default function Problem() {
  return (
    <section style={{ padding: '96px 0', background: '#f5f9ff', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#0070c9,#4da6e8,#c8102e)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <ScrollReveal>
            <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#fde8ec', color: '#c8102e', border: '1.5px solid rgba(200,16,46,.25)' }}>
              The Problem
            </span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,88px)', lineHeight: .94, color: '#003366', marginBottom: 22 }}>
              MODERN JETS.<br /><span style={{ color: '#0070c9' }}>20TH-CENTURY</span><br />MEDICINE.
            </h2>
            <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginBottom: 20 }}>
              Every year, an estimated <strong style={{ color: '#003366' }}>44,000 in-flight medical emergencies</strong> occur globally. Aircraft carry 21st-century avionics but 20th-century medical preparedness.
            </p>
            <div style={{ padding: '24px 28px', borderLeft: '4px solid #c8102e', background: '#fff', borderRadius: '0 14px 14px 0', marginTop: 28 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#c8102e', marginBottom: 8 }}>Regulatory Gap</div>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>FAA & ICAO standards require only first-aid kits and an AED. No mandate exists for digital vital-sign monitoring, AI-assisted triage, or telemedicine links — technologies that exist today.</p>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {issues.map(iss => (
                <div key={iss.title} style={{ display: 'flex', gap: 18, padding: '22px 24px', background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 16 }}>
                  <div style={{ width: 54, height: 54, background: '#e8f4fd', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>{iss.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: '#003366', marginBottom: 6 }}>{iss.title}</div>
                    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>{iss.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div style={{ textAlign: 'center', marginTop: 52, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/problem" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
            Full Deep-Dive: The Problem →
          </Link>
        </div>
      </div>
    </section>
  )
}
