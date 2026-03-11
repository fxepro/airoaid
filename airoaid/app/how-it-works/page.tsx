import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/shared/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const steps = [
  { num:'01', color:'#c8102e', bg:'#c8102e18', icon:'🚨', dur:'0 – 60 seconds',  title:'Emergency Detected',         body:'A passenger reports symptoms or collapses. Crew activates the AiroAid kit — a single button press powers up all sensors and launches the AI triage interface in under 60 seconds. No manual. No setup. No medical training needed.',                                                                        chip:'★ Average activation: under 45 seconds', chipBg:'#c8102e12', chipBorder:'#c8102e30', chipColor:'#c8102e' },
  { num:'02', color:'#0070c9', bg:'#0070c918', icon:'🧠', dur:'1 – 3 minutes',    title:'AI Guides Assessment',       body:'The AI triage assistant walks crew through structured sensor placement and data collection — ECG, SpO₂, blood pressure, glucose, and temperature — interpreting readings in plain language step by step. The system flags critical values, escalates alerts, and identifies the most likely emergency type.',  chip:'★ No medical training required to operate', chipBg:'#0070c912', chipBorder:'#0070c930', chipColor:'#0070c9' },
  { num:'03', color:'#003366', bg:'#00336618', icon:'📡', dur:'2 – 4 minutes',    title:'Satellite Link Established', body:'While assessment continues, AiroAid automatically establishes an encrypted satellite uplink streaming all live patient data to a ground medical center. The same ECG trace, SpO₂ waveform, and vital readings visible on-device are simultaneously visible to a licensed physician on the ground.',               chip:'★ AES-256 encrypted — HIPAA & GDPR compliant', chipBg:'#00336612', chipBorder:'#00336630', chipColor:'#003366' },
  { num:'04', color:'#0070c9', bg:'#0070c918', icon:'👨‍⚕️', dur:'Ongoing',        title:'Physician Advises in Real Time', body:'A licensed physician reviews live vitals, makes a remote diagnosis, and speaks directly with crew via voice channel. They can authorize specific medications from the EMK, recommend monitoring protocols, or support the decision to divert — based on actual clinical data, not guesswork.',          chip:'★ 24/7 physician availability on all global routes', chipBg:'#0070c912', chipBorder:'#0070c930', chipColor:'#0070c9' },
  { num:'05', color:'#4a6080', bg:'#4a608018', icon:'📋', dur:'Session close',    title:'Incident Auto-Logged',       body:'At session close, AiroAid automatically generates a full incident report — timestamped vitals data, AI triage decisions, physician notes, and crew actions — formatted for FAA and EASA regulatory submission. No manual reporting. No missed documentation.',                                               chip:'★ Zero manual reporting burden on crew', chipBg:'#4a608012', chipBorder:'#4a608030', chipColor:'#4a6080' },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="How It Works" tagColor="blue" breadcrumb="How It Works"
        title={<>FROM EMERGENCY<br /><span style={{color:'#0070c9'}}>TO RESOLUTION</span></>}
        subtitle="AiroAid guides crew from initial activation to physician-supported resolution — in under 5 minutes. Here is every step of the process, in full detail."
      />

      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
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
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', marginTop: 8 }}>From activation to live physician-guided care — vs. the current standard of blind radio consultation with no diagnostic data</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before vs After */}
      <section style={{ padding: '96px 0', background: '#f5f9ff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,6.5vw,80px)', lineHeight: .94, color: '#003366' }}>BEFORE vs.<br /><span style={{ color: '#0070c9' }}>AFTER AIROAID</span></h2>
            </div>
          </ScrollReveal>
          <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <ScrollReveal>
              <div style={{ padding: 32, background: '#fff5f5', border: '1.5px solid rgba(200,16,46,.2)', borderRadius: 18 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: '#c8102e', marginBottom: 20 }}>Without AiroAid</div>
                {['Manual first-aid kit only','No digital vitals at all','Radio call — no data shared with doctor','Non-clinical crew making medical decisions alone','Diversion decided on gut feeling','Manual paper incident report post-flight'].map(i => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}><span style={{ fontWeight: 700, color: '#c8102e', fontSize: 18, flexShrink: 0 }}>✗</span><span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{i}</span></div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ padding: 32, background: '#f0f7ff', border: '1.5px solid rgba(0,112,201,.2)', borderRadius: 18 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: '#0070c9', marginBottom: 20 }}>With AiroAid</div>
                {['ECG, SpO₂, BP, glucose, temperature','AI-guided step-by-step crew support','Live vitals streamed to physician via satellite','Licensed doctor advising crew in real time','Diversion only when clinically warranted','Automatic regulatory-grade incident report'].map(i => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}><span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0070c9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: '#4a6080' }}>{i}</span></div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div style={{ background: '#003366', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', marginBottom: 16 }}>READY TO SEE IT LIVE?</h2>
        <p style={{ fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,.75)', maxWidth: 480, margin: '0 auto 32px' }}>Book a full demonstration and watch AiroAid handle a simulated cardiac event from activation to physician sign-off.</p>
        <Link href="/contact" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#c8102e', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>Request Your Demo →</Link>
      </div>
      <Footer />
    </>
  )
}
