import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const steps = [
  { num: '01', color: '#c8102e', bg: '#c8102e18', icon: '🚨', dur: '0 – 60 seconds',  title: 'Emergency Detected',         body: 'One button press activates all sensors and launches the AI triage interface. Ready in under 60 seconds — no manual, no setup.',                                                                chip: '★ Average activation: under 45s',        chipBg: '#c8102e12', chipBorder: '#c8102e30', chipColor: '#c8102e' },
  { num: '02', color: '#0070c9', bg: '#0070c918', icon: '🧠', dur: '1 – 3 minutes',    title: 'AI Guides Assessment',       body: 'AI walks crew through sensor placement and data collection — ECG, SpO₂, blood pressure, glucose, temperature — interpreting in plain language, step by step.',  chip: '★ No medical training required',         chipBg: '#0070c912', chipBorder: '#0070c930', chipColor: '#0070c9' },
  { num: '03', color: '#003366', bg: '#00336618', icon: '📡', dur: '2 – 4 minutes',    title: 'Satellite Link Established', body: 'Encrypted satellite uplink streams all live patient data to a ground physician — who sees the same ECG and vitals as the device, in real time.',                 chip: '★ AES-256 encrypted — HIPAA/GDPR',        chipBg: '#00336612', chipBorder: '#00336630', chipColor: '#003366' },
  { num: '04', color: '#0070c9', bg: '#0070c918', icon: '👨‍⚕️', dur: 'Ongoing',        title: 'Physician Advises Live',     body: 'A licensed doctor reviews live vitals, speaks directly with crew, and authorizes treatment or diversion — only when clinically warranted.',                     chip: '★ 24/7 physician availability',           chipBg: '#0070c912', chipBorder: '#0070c930', chipColor: '#0070c9' },
  { num: '05', color: '#4a6080', bg: '#4a608018', icon: '📋', dur: 'Session close',    title: 'Incident Auto-Logged',       body: 'Full FAA/EASA compliant incident report auto-generated — timestamped vitals, AI decisions, physician notes. Zero manual burden on crew.',                        chip: '★ Zero documentation burden',             chipBg: '#4a608012', chipBorder: '#4a608030', chipColor: '#4a6080' },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#e8f4fd', color: '#0070c9', border: '1.5px solid rgba(77,166,232,.25)' }}>How It Works</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,88px)', lineHeight: .94, color: '#003366' }}>
              FROM EMERGENCY<br /><span style={{ color: '#0070c9' }}>TO RESOLUTION</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 860, margin: '0 auto' }}>
          {steps.map((s, i) => (
            <ScrollReveal key={s.num}>
              <div style={{ display: 'flex', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 54, height: 54, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, color: '#fff', flexShrink: 0 }}>{s.num}</div>
                  {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: '#d6e8f5', margin: '6px 0', minHeight: 24 }} />}
                </div>
                <div style={{ flex: 1, border: '1.5px solid #d6e8f5', borderRadius: 18, overflow: 'hidden', marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 26px', background: s.bg }}>
                    <span style={{ fontSize: 32 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: s.color, marginBottom: 3 }}>{s.dur}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 24, fontWeight: 700, color: '#003366' }}>{s.title}</div>
                    </div>
                  </div>
                  <div style={{ padding: '20px 26px', background: '#fff' }}>
                    <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: '#4a6080' }}>{s.body}</p>
                    <span style={{ display: 'inline-block', marginTop: 12, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.08em', padding: '5px 16px', borderRadius: 100, background: s.chipBg, border: `1.5px solid ${s.chipBorder}`, color: s.chipColor }}>{s.chip}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ background: '#f5f9ff', border: '1.5px solid #d6e8f5', borderRadius: 22, padding: 36, textAlign: 'center', maxWidth: 860, margin: '0 auto 52px' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0070c9', marginBottom: 10 }}>Total Response Time</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#003366', lineHeight: 1 }}>Under 5 Minutes</div>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginTop: 8 }}>From activation to live physician-guided care</p>
          </div>
        </ScrollReveal>

        <div style={{ textAlign: 'center' }}>
          <Link href="/how-it-works" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
            Full Deep-Dive: How It Works →
          </Link>
        </div>
      </div>
    </section>
  )
}
