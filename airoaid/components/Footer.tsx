import Link from 'next/link'

const AiroLogo = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#0070c9"/>
    <path d="M8 18 L16 8 L24 18 L20 18 L20 24 L12 24 L12 18Z" fill="white"/>
    <path d="M5 20 L10 17 L10 20Z" fill="#c8102e"/>
    <path d="M27 20 L22 17 L22 20Z" fill="#c8102e"/>
  </svg>
)

const navLinks = [
  { href: '/problem',      label: 'Problem' },
  { href: '/solution',     label: 'Solution' },
  { href: '/features',     label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-airoaid',  label: 'Why AiroAid' },
  { href: '/contact',      label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#001f40', paddingTop: 36 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px 28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AiroLogo />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, color: '#fff' }}>
            AIRO<span style={{ color: '#c8102e' }}>AID</span>
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', textAlign: 'center' }}>
          © 2025 AiroAid. The world&apos;s first AI-connected in-flight medical system.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: '.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,.5)', textDecoration: 'none', marginLeft: 16,
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={{ height: 4, background: 'linear-gradient(90deg,#0070c9,#4da6e8,#c8102e)' }} />
    </footer>
  )
}
