import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const feats = [
  { icon: '🫀', name: 'ECG Monitoring',    desc: 'Continuous 12-lead ECG streaming to ground physicians via satellite.' },
  { icon: '🩸', name: 'SpO₂ & Glucose',   desc: 'Real-time oxygen saturation and blood glucose diagnostics.' },
  { icon: '📊', name: 'Blood Pressure',   desc: 'Automated BP measurement with trend tracking and critical alerts.' },
  { icon: '🌡️', name: 'Temperature',      desc: 'Core temperature monitoring flagging fever, hypothermia, and heat stroke.' },
  { icon: '🧠', name: 'AI Triage Engine', desc: 'Step-by-step guided assessment for non-medical cabin crew.' },
  { icon: '📡', name: 'Satellite Comms',  desc: 'Encrypted real-time link to licensed ground-based physicians.' },
  { icon: '📋', name: 'Auto Reporting',   desc: 'Automated incident logs for FAA/EASA regulatory compliance.' },
  { icon: '🔋', name: 'Aviation-Rated',   desc: 'FAA certified, lithium-safe, and EMI-shielded hardware.' },
]

export default function Features() {
  return (
    <section style={{ padding: '96px 0', background: '#f5f9ff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#fde8ec', color: '#c8102e', border: '1.5px solid rgba(200,16,46,.25)' }}>System Features</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,88px)', lineHeight: .94, color: '#003366' }}>
              BUILT FOR THE <span style={{ color: '#0070c9' }}>SKIES</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="resp-four" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {feats.map(f => (
            <ScrollReveal key={f.name}>
              <div style={{ padding: '24px 20px', background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 16, textAlign: 'center', height: '100%' }}>
                <div style={{ width: 54, height: 54, background: '#e8f4fd', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 12px' }}>{f.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, color: '#003366', marginBottom: 6 }}>{f.name}</div>
                <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/features" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
            Full Deep-Dive: Features →
          </Link>
        </div>
      </div>
    </section>
  )
}
