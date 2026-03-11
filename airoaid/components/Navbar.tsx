'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const AiroLogo = () => (
  <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#0070c9"/>
    <path d="M8 18 L16 8 L24 18 L20 18 L20 24 L12 24 L12 18Z" fill="white"/>
    <path d="M5 20 L10 17 L10 20Z" fill="#c8102e"/>
    <path d="M27 20 L22 17 L22 20Z" fill="#c8102e"/>
  </svg>
)

const links = [
  { href: '/problem',     label: 'The Problem' },
  { href: '/solution',    label: 'Solution' },
  { href: '/features',    label: 'Features' },
  { href: '/how-it-works',label: 'How It Works' },
  { href: '/why-airoaid', label: 'Why AiroAid' },
]

export default function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => path === href

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        background: '#fff', borderBottom: '3px solid #0070c9',
        boxShadow: '0 2px 16px rgba(0,51,102,.10)',
        height: 68, display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 36px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <AiroLogo />
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 2, color: '#003366' }}>
              AIRO<span style={{ color: '#c8102e' }}>AID</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="resp-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700,
                letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
                padding: '7px 12px',
                color: isActive(l.href) ? '#0070c9' : '#003366',
                borderBottom: isActive(l.href) ? '2px solid #0070c9' : '2px solid transparent',
                transition: 'color .2s, border-color .2s',
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700,
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              background: '#c8102e', color: '#fff', padding: '9px 20px',
              borderRadius: 4, marginLeft: 8,
            }}>
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            <div style={{ width: 24, height: 2, background: '#003366', marginBottom: 5 }}/>
            <div style={{ width: 24, height: 2, background: '#003366', marginBottom: 5 }}/>
            <div style={{ width: 24, height: 2, background: '#003366' }}/>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 9998,
          background: '#fff', borderBottom: '3px solid #0070c9',
          boxShadow: '0 8px 24px rgba(0,51,102,.12)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700,
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              color: isActive(l.href) ? '#0070c9' : '#003366', padding: '10px 0',
              borderBottom: '1px solid #e8f4fd',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700,
            letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
            background: '#c8102e', color: '#fff', padding: '12px 20px',
            borderRadius: 4, textAlign: 'center', marginTop: 8,
          }}>
            Get Started
          </Link>
        </div>
      )}
    </>
  )
}
