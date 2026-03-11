import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', paddingTop: 68,
      background: 'linear-gradient(155deg,#e8f4fd 0%,#f0f7ff 40%,#fff 100%)',
      position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center',
    }}>
      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle,#a8cce8 1px,transparent 1px)', backgroundSize: '30px 30px', opacity: .38 }} />
      {/* bottom stripe */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#0070c9,#4da6e8,#c8102e)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', padding: '80px 0' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#e8f4fd', border: '1.5px solid #4da6e8', borderRadius: 100, padding: '7px 18px', marginBottom: 24, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0070c9' }}>
              <span className="pulse" /> World&apos;s First AI In-Flight Medical System
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(72px,10vw,128px)', lineHeight: .91, color: '#003366', marginBottom: 24 }}>
              SAVE LIVES<br />
              <span style={{ color: '#0070c9' }}>AT</span>{' '}
              <span style={{ color: '#c8102e' }}>35,000</span><br />
              FEET
            </h1>
            <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.75, color: '#4a6080', maxWidth: 520, marginBottom: 32 }}>
              AiroAid is the world&apos;s first AI-connected, telemedicine-enabled smart in-flight medical system — purpose-built to modernize emergency care aboard commercial and private aircraft.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/solution" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: '#0070c9', padding: '14px 32px', borderRadius: 4, textDecoration: 'none' }}>
                Discover the System →
              </Link>
              <Link href="/contact" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#c8102e', border: '2px solid #c8102e', padding: '12px 30px', borderRadius: 4, textDecoration: 'none' }}>
                Request Demo
              </Link>
            </div>
            {/* Stats */}
            <div style={{ display: 'flex', gap: 36, paddingTop: 32, borderTop: '1.5px solid #d6e8f5' }}>
              {[
                { n: '44,000', l: 'Emergencies / yr' },
                { n: '$250K',  l: 'Max diversion cost' },
                { n: '10.6%', l: 'Result in diversions' },
              ].map(s => (
                <div key={s.n}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, lineHeight: 1, color: '#0070c9' }}>{s.n}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#4a6080', marginTop: 5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device visual */}
          <div className="resp-hide" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 360, height: 360, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1.5px solid rgba(0,112,201,.18)' }} />
              <div style={{ position: 'absolute', inset: 30, borderRadius: '50%', border: '1px solid rgba(0,112,201,.12)' }} />
              <div style={{ position: 'absolute', inset: 66, borderRadius: 20, background: 'linear-gradient(135deg,#fff,#f0f7ff)', border: '2px solid #d6e8f5', boxShadow: '0 18px 52px rgba(0,112,201,.14)' }}>
                <div style={{ position: 'absolute', inset: 13, borderRadius: 12, background: '#003366', overflow: 'hidden' }}>
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 220 130" fill="none">
                    <polyline points="0,65 30,65 42,30 54,100 64,65 88,65 98,48 108,82 118,65 220,65" stroke="#4da6e8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <circle cx="98" cy="48" r="4.5" fill="#c8102e"/>
                  </svg>
                  <span style={{ position: 'absolute', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', top: 9, left: 10, color: '#4da6e8' }}>ECG LIVE</span>
                  <span style={{ position: 'absolute', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', bottom: 9, right: 10, color: '#22c55e' }}>● CONNECTED</span>
                  <span style={{ position: 'absolute', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', top: 9, right: 10, color: '#4da6e8' }}>SpO₂ 98%</span>
                </div>
                <div style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', fontFamily: "'Bebas Neue',sans-serif", fontSize: 21, letterSpacing: 2, color: '#003366', whiteSpace: 'nowrap' }}>
                  AIRO<span style={{ color: '#c8102e' }}>AID</span>
                </div>
              </div>
              {/* orbit icons */}
              {[
                { style: { left: 150, top: -16 }, emoji: '🧠', label: 'AI Triage', border: '#0070c9' },
                { style: { right: -16, top: 152 }, emoji: '📡', label: 'Telemedicine', border: '#c8102e' },
                { style: { left: 150, bottom: -18 }, emoji: '❤️', label: 'ECG Vitals', border: '#0070c9' },
                { style: { left: -20, top: 152 }, emoji: '🛰️', label: 'Satellite', border: '#4a6080' },
              ].map((o, i) => (
                <div key={i} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 58, ...o.style }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 4px 14px rgba(0,0,0,.09)', border: `2px solid ${o.border}` }}>{o.emoji}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700, color: '#003366', textAlign: 'center', marginTop: 3, letterSpacing: .5, lineHeight: 1.2 }}>{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
