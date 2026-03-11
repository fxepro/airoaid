import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const stakeholders = [
  { icon: '✈️', name: 'Airlines',    color: '#0070c9', items: ['Reduce costly diversions ($20K–$250K each)', 'Physician-verified records reduce liability', 'Future-proof ahead of FAA/EASA updates', 'Differentiate as a passenger safety leader'] },
  { icon: '👩‍✈️', name: 'Cabin Crew', color: '#003366', items: ['AI guides every step — no guessing required', 'Physician backup for every major decision', 'Documented actions reduce personal liability', 'Greater confidence and lower stress on duty'] },
  { icon: '🧳', name: 'Passengers',  color: '#c8102e', items: ['Real emergency care — not just first aid', 'Physician-guided response to cardiac & stroke events', 'Fewer unnecessary diversions', 'Peace of mind on every flight'] },
  { icon: '🏛️', name: 'Regulators', color: '#4a6080', items: ['Clear pathway to modernize Annex 6 SARPs', 'Data-driven policy evidence from fleet analytics', 'Deployable model for FAA/EASA STC approval', 'Framework for aviation health surveillance'] },
]

export default function Why() {
  return (
    <section style={{ padding: '96px 0', background: '#f5f9ff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, background: '#fde8ec', color: '#c8102e', border: '1.5px solid rgba(200,16,46,.25)' }}>Why AiroAid</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,88px)', lineHeight: .94, color: '#003366', marginBottom: 22 }}>
              BETTER FOR <span style={{ color: '#0070c9' }}>EVERYONE</span>
            </h2>
            <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', maxWidth: 560, margin: '0 auto' }}>
              AiroAid&apos;s value proposition spans every stakeholder in the aviation ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {stakeholders.map(s => (
            <ScrollReveal key={s.name}>
              <div style={{ padding: 32, background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 20, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
                  <div style={{ width: 58, height: 58, background: '#e8f4fd', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 44, lineHeight: 1, color: s.color }}>{s.name}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Market opportunity */}
        <ScrollReveal>
          <div style={{ marginTop: 24, padding: '36px 44px', background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 20 }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0070c9', marginBottom: 4 }}>Market Opportunity</div>
            <div className="resp-three" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, textAlign: 'center', marginTop: 20 }}>
              {[
                { n: '25,000+', l: 'Commercial Aircraft',    s: 'Long-haul & high-risk routes' },
                { n: '15,000+', l: 'Private & Charter',      s: 'High-value private aviation' },
                { n: '$2.8B',   l: 'Total Addressable Market', s: 'North America · Europe · Middle East' },
              ].map(m => (
                <div key={m.n}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, color: '#003366', lineHeight: 1 }}>{m.n}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, color: '#0070c9', marginTop: 5 }}>{m.l}</div>
                  <div style={{ fontSize: 14, color: '#4a6080', marginTop: 3 }}>{m.s}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/why-airoaid" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
            Full Deep-Dive: Why AiroAid →
          </Link>
        </div>
      </div>
    </section>
  )
}
