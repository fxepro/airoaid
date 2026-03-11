import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const components = [
  { num: '01', color: '#0070c9', icon: '🩺', title: 'Compact Medical Device Kit',        body: 'Aviation-certified portable kit with ECG, SpO₂, blood pressure, temperature, and glucose sensors — activates in under 60 seconds.' },
  { num: '02', color: '#003366', icon: '🧠', title: 'AI-Driven Triage Assistant',         body: 'Interprets sensor data in real time and walks crew through a structured clinical assessment in plain language — no medical training required.' },
  { num: '03', color: '#c8102e', icon: '📡', title: 'Satellite Telemedicine Link',        body: 'Encrypted satellite uplink streams live patient vitals to a licensed ground physician — 24/7, any altitude, any route.' },
  { num: '04', color: '#4a6080', icon: '📋', title: 'Compliance & Analytics Platform',   body: 'Cloud-based auto-reporting, FAA/EASA documentation, and fleet-wide analytics to identify at-risk routes before emergencies occur.' },
]

export default function Solution() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#e8f4fd', color: '#0070c9', border: '1.5px solid rgba(77,166,232,.25)' }}>The AiroAid Solution</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,88px)', lineHeight: .94, color: '#003366', marginBottom: 22 }}>
              ONE SYSTEM.<br /><span style={{ color: '#0070c9' }}>COMPLETE</span> <span style={{ color: '#c8102e' }}>COVERAGE.</span>
            </h2>
            <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', maxWidth: 600, margin: '0 auto' }}>
              AiroAid integrates hardware, AI software, and telemedicine into a single seamless package — designed from the ground up for aviation.
            </p>
          </div>
        </ScrollReveal>

        <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
          {components.map(c => (
            <ScrollReveal key={c.num}>
              <div style={{ padding: 32, background: '#f5f9ff', border: '1.5px solid #d6e8f5', borderRadius: 20, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -10, right: -8, fontFamily: "'Bebas Neue',sans-serif", fontSize: 120, lineHeight: 1, opacity: .06, color: c.color, pointerEvents: 'none' }}>{c.num}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: c.color, marginBottom: 10 }}>Component {c.num}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{c.icon}</span>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: '#003366' }}>{c.title}</div>
                </div>
                <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>{c.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing */}
        <ScrollReveal>
          <div style={{ background: 'linear-gradient(135deg,#003366,#0070c9)', borderRadius: 22, padding: '52px 44px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: 8 }}>Investment Overview</div>
            <div className="resp-three" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 52, flexWrap: 'wrap', marginTop: 12 }}>
              {[
                { v: '$6,000',   l: 'Per Aircraft — Hardware' },
                { v: '$500/mo',  l: 'Software & Telemedicine' },
                { v: '$2.8B',    l: 'Total Addressable Market' },
              ].map((p, i) => (
                <>
                  <div key={p.v} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 54, color: '#fff', lineHeight: 1 }}>{p.v}</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4da6e8', marginTop: 8 }}>{p.l}</div>
                  </div>
                  {i < 2 && <div key={`div-${i}`} className="resp-pricing-div" style={{ width: 1, height: 64, background: 'rgba(255,255,255,.2)' }} />}
                </>
              ))}
            </div>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.6)', marginTop: 20 }}>
              Avoiding a single diversion per year pays for an entire fleet&apos;s deployment.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/solution" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
            Full Deep-Dive: The Solution →
          </Link>
        </div>
      </div>
    </section>
  )
}
