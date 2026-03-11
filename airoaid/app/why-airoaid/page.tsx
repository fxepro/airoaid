import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const stakeholders = [
  { icon:'✈️', name:'Airlines',    color:'#0070c9', sub:'Protect Your Bottom Line — and Your Brand',
    intro:'For airline operators, AiroAid is both a financial risk management tool and a competitive differentiator in an increasingly safety-conscious market.',
    cards:[
      { title:'Diversion Cost Reduction',    body:'Each unplanned diversion costs $20K–$250K. Avoiding just one per aircraft per year more than covers the entire AiroAid deployment cost for that aircraft.' },
      { title:'Liability Documentation',     body:'Every session produces a physician-reviewed, AI-verified incident record — providing defensible documentation in the event of litigation or regulatory review.' },
      { title:'Regulatory Future-Proofing',  body:'As FAA and EASA modernize Annex 6, AiroAid positions your fleet ahead of compliance requirements rather than scrambling to meet them retroactively.' },
      { title:'Brand Leadership',            body:'Being an AiroAid-certified airline signals genuine commitment to passenger welfare — beyond the regulatory minimum — in a market that increasingly rewards safety transparency.' },
    ]},
  { icon:'👩‍✈️', name:'Cabin Crew', color:'#003366', sub:'Confidence When It Matters Most',
    intro:'Flight attendants are placed in impossible positions during medical emergencies — trained for first aid but expected to manage cardiac events at altitude.',
    cards:[
      { title:'Guided Decision Making',  body:'AiroAid\'s AI walks crew through every step in plain language. No guessing, no medical jargon — just clear, actionable guidance at every moment.' },
      { title:'Physician Backup',         body:'Crew are supported by a licensed physician who sees the same data they see. No major decision is made alone — ever.' },
      { title:'Reduced Personal Liability', body:'When crew follow AI and physician guidance, all actions are documented and defensible. AiroAid protects crew members as much as it protects patients.' },
      { title:'Confidence & Wellbeing',   body:'Crew who are adequately equipped report significantly lower anxiety around in-flight medical events — improving job satisfaction and crew retention.' },
    ]},
  { icon:'🧳', name:'Passengers',  color:'#c8102e', sub:'Real Emergency Care. Not Just First Aid.',
    intro:'For the 44,000 passengers who experience a medical emergency mid-flight each year, AiroAid is the difference between first aid and actual clinical care.',
    cards:[
      { title:'Faster, More Accurate Response', body:'Physician-guided interventions supported by real diagnostics dramatically improve outcomes for cardiac, stroke, and diabetic events.' },
      { title:'Fewer Unnecessary Diversions',   body:'Patients with non-critical conditions are more likely to continue to their destination — avoiding the trauma and disruption of unplanned landings.' },
      { title:'Peace of Mind',                   body:'Knowing your aircraft is equipped with 21st-century medical technology fundamentally changes the flying experience for passengers with chronic health conditions.' },
      { title:'Equity in Care',                  body:'AiroAid ensures passengers on long-haul, remote, and international routes receive the same standard of emergency response as any major hub route.' },
    ]},
]

export default function WhyAiroAidPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Why AiroAid" tagColor="blue" breadcrumb="Why AiroAid"
        title={<>BETTER FOR<br /><span style={{color:'#c8102e'}}>EVERYONE</span></>}
        subtitle="AiroAid's value proposition spans every stakeholder in aviation — airlines, crew, passengers, and regulators all benefit from smarter in-flight medical response."
      />

      {/* Stats bar */}
      <div style={{ background: '#003366', padding: '56px 0' }}>
        <div className="resp-four" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {[{ n:'25,000+', l:'Commercial aircraft' }, { n:'15,000+', l:'Private & charter' }, { n:'$2.8B', l:'Total addressable market' }, { n:'3 regions', l:'NA · Europe · Middle East' }].map(s => (
            <div key={s.n}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, lineHeight: 1, color: '#4da6e8' }}>{s.n}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.65)', marginTop: 5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', gap: 72 }}>
          {stakeholders.map((s, si) => (
            <ScrollReveal key={s.name}>
              <div style={{ background: si % 2 === 1 ? '#f5f9ff' : '#fff', borderRadius: 24, padding: si % 2 === 1 ? 44 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16 }}>
                  <div style={{ width: 58, height: 58, background: '#e8f4fd', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 44, lineHeight: 1, color: s.color }}>{s.name}</div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 600, color: '#003366' }}>{s.sub}</div>
                  </div>
                </div>
                <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginBottom: 28, maxWidth: 700 }}>{s.intro}</p>
                <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  {s.cards.map(c => (
                    <div key={c.title} style={{ padding: 28, background: '#fff', border: '1.5px solid #d6e8f5', borderRadius: 16 }}>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: s.color, marginBottom: 8 }}>{c.title}</div>
                      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: '#4a6080' }}>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div style={{ background: '#0070c9', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', marginBottom: 16 }}>JOIN THE MISSION.</h2>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,.75)', maxWidth: 480, margin: '0 auto 32px' }}>No life should be lost because the aircraft couldn&apos;t diagnose or respond fast enough.</p>
        <Link href="/contact" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0070c9', background: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }}>Talk to Our Team →</Link>
      </div>
      <Footer />
    </>
  )
}
