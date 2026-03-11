import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const categories = [
  { label:'Diagnostics', color:'#0070c9', bg:'#e8f4fd', icon:'🩺', features:[
    { icon:'🫀', name:'12-Lead ECG',       desc:'Continuous electrocardiogram streaming at clinical quality. Detects arrhythmias, ST-segment changes, and cardiac events. Streams live to ground physicians via satellite.' },
    { icon:'🩸', name:'SpO₂ Monitoring',   desc:'Pulse oximetry with continuous oxygen saturation readings. Alerts triggered below 94% — critical for detecting hypoxia at altitude before cognitive impairment begins.' },
    { icon:'📊', name:'Blood Pressure',    desc:'Automated BP measurement with trend tracking. Hypertensive crisis and hypotension alerts support rapid triage of stroke, syncope, and cardiac events.' },
    { icon:'🌡️', name:'Core Temperature', desc:'Digital temperature sensing flagging fever, hypothermia, and heat stroke — important for identifying sepsis risk in elderly passengers.' },
    { icon:'💉', name:'Blood Glucose',     desc:'Point-of-care glucose measurement for diabetic emergencies — the most common preventable in-flight medical incident type.' },
  ]},
  { label:'AI & Software', color:'#003366', bg:'#e8f4fd', icon:'🧠', dark: true, features:[
    { icon:'🧠', name:'AI Triage Engine',      desc:'Interprets multi-sensor data and guides crew through a structured clinical protocol. Plain-language instructions — no medical training required.' },
    { icon:'🔔', name:'Critical Alert System', desc:'Threshold-based alerts for each vital sign. Color-coded escalation tiers guide proportional crew response.' },
    { icon:'🌍', name:'Multilingual Interface',desc:'Full interface localization for 18 languages — supporting international airlines and globally diverse passenger populations.' },
    { icon:'📴', name:'Offline AI Mode',        desc:'Core triage AI operates entirely offline. Satellite connectivity enhances capability but is never a single point of failure.' },
  ]},
  { label:'Connectivity', color:'#c8102e', bg:'#fde8ec', icon:'📡', features:[
    { icon:'📡', name:'Satellite Uplink',       desc:'Encrypted real-time data channel to ground medical center. Compatible with Inmarsat, Iridium, and Viasat aircraft communication systems.' },
    { icon:'👨‍⚕️', name:'Live Physician Consult', desc:'24/7 access to licensed physicians who review live vitals and provide direct verbal guidance to crew in real time.' },
    { icon:'🔒', name:'End-to-End Encryption',  desc:'All patient data transmitted under AES-256 encryption. HIPAA and GDPR compliant. No data stored on-device after session close.' },
  ]},
  { label:'Compliance & Ops', color:'#4a6080', bg:'#e8edf2', icon:'📋', dark: true, features:[
    { icon:'📋', name:'Auto Incident Reports', desc:'Fully automated FAA and EASA compliant incident documentation generated at session end. Eliminates manual reporting burden.' },
    { icon:'☁️', name:'Cloud Analytics',        desc:'Fleet-wide medical event analytics, diversion trend tracking, and route-level risk profiling.' },
    { icon:'🔋', name:'Aviation-Rated HW',      desc:'FAA DO-160 certified. EMI-shielded, lithium-safe, tested for pressure, vibration, and temperature extremes.' },
    { icon:'🔧', name:'Ops Integration',        desc:'REST API for integration with airline operations control, crew communication, and passenger health systems.' },
  ]},
]

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="System Features" tagColor="red" breadcrumb="Features"
        title={<>BUILT FOR<br />THE <span style={{color:'#0070c9'}}>SKIES</span></>}
        subtitle="Every AiroAid feature was designed around the unique constraints of aviation — from EMI shielding to offline AI, satellite connectivity to one-touch deployment."
      />

      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', gap: 64 }}>
          {categories.map(cat => (
            <ScrollReveal key={cat.label}>
              <div style={{ background: cat.dark ? '#f5f9ff' : '#fff', border: cat.dark ? 'none' : 'none', borderRadius: 24, padding: cat.dark ? 44 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{cat.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: cat.color }}>Feature Category</div>
                    <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 44, color: '#003366', lineHeight: 1 }}>{cat.label}</h2>
                  </div>
                </div>
                <div className="resp-four" style={{ display: 'grid', gridTemplateColumns: `repeat(${cat.features.length <= 3 ? cat.features.length : 4},1fr)`, gap: 16 }}>
                  {cat.features.map(f => (
                    <div key={f.name} style={{ padding: '24px 20px', background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 16, textAlign: 'center' }}>
                      <div style={{ width: 54, height: 54, background: '#e8f4fd', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 12px' }}>{f.icon}</div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, color: '#003366', marginBottom: 6 }}>{f.name}</div>
                      <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div style={{ background: '#0070c9', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', marginBottom: 16 }}>SEE IT IN ACTION.</h2>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,.75)', maxWidth: 520, margin: '0 auto 32px' }}>Book a live demonstration and watch AiroAid guide a simulated in-flight emergency from detection to resolution.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/how-it-works" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0070c9', background: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }}>How It Works →</Link>
          <Link href="/contact" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', border: '2px solid #fff', padding: '12px 26px', borderRadius: 4, textDecoration: 'none' }}>Request Demo</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
