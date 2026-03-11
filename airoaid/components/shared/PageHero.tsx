import Link from 'next/link'

interface PageHeroProps {
  tag: string
  tagColor?: 'blue' | 'red'
  title: React.ReactNode
  subtitle: string
  breadcrumb: string
}

export default function PageHero({ tag, tagColor = 'blue', title, subtitle, breadcrumb }: PageHeroProps) {
  const tagStyle = tagColor === 'red'
    ? { background: '#fde8ec', color: '#c8102e', border: '1.5px solid rgba(200,16,46,.25)' }
    : { background: '#e8f4fd', color: '#0070c9', border: '1.5px solid rgba(77,166,232,.25)' }

  return (
    <section style={{
      paddingTop: 130, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(155deg,#e8f4fd 0%,#f5f9ff 40%,#fff 100%)',
    }}>
      {/* dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .35,
        backgroundImage: 'radial-gradient(circle,#a8cce8 1px,transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      {/* bottom stripe */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#0070c9,#4da6e8,#c8102e)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#4a6080', marginBottom: 18 }}>
          <Link href="/" style={{ color: '#0070c9', textDecoration: 'none' }}>Home</Link>
          {' / '}{breadcrumb}
        </div>
        <span style={{ display: 'inline-block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 100, marginBottom: 18, ...tagStyle }}>
          {tag}
        </span>
        <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(60px,8vw,100px)', lineHeight: .93, color: '#003366', marginBottom: 22 }}>
          {title}
        </h1>
        <p style={{ fontSize: 21, fontWeight: 300, lineHeight: 1.7, color: '#4a6080', maxWidth: 700 }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
