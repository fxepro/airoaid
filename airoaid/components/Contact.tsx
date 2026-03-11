'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', fleet: '', interest: '', message: '' })

  return (
    <section style={{ background: 'linear-gradient(155deg,#003366 0%,#0070c9 100%)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 18 }}>Get In Touch</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(52px,6vw,80px)', lineHeight: .94, color: '#fff', marginBottom: 22 }}>
              READY TO<br />MODERNIZE<br /><span style={{ color: '#4da6e8' }}>YOUR FLEET?</span>
            </h2>
            <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,.75)', maxWidth: 400, marginBottom: 36 }}>
              Whether you&apos;re an airline, charter operator, or regulatory body — we&apos;d love to show you what AiroAid can do.
            </p>
            {[
              { icon: '🌐', label: 'Website',  val: 'airoaid.com' },
              { icon: '📧', label: 'Email',    val: 'hello@airoaid.com' },
              { icon: '📍', label: 'Markets',  val: 'North America · Europe · Middle East' },
            ].map(info => (
              <div key={info.label} style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>{info.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>{info.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.85)' }}>{info.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div style={{ background: '#fff', borderRadius: 22, padding: '38px 34px' }}>
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 24, fontWeight: 700, color: '#003366', marginBottom: 26 }}>Request a Demo</h3>
            <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Full Name *</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Jane Smith" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Organization</label>
                <input value={form.org} onChange={e => setForm({...form, org: e.target.value})} placeholder="Global Airways" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none' }} />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Email Address *</label>
              <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" placeholder="jane@airline.com" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none' }} />
            </div>
            <div className="resp-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Fleet Size</label>
                <select value={form.fleet} onChange={e => setForm({...form, fleet: e.target.value})} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none' }}>
                  <option value="">Select…</option>
                  <option>1–10 aircraft</option><option>11–50 aircraft</option><option>51–200 aircraft</option><option>200+ aircraft</option><option>Private / Charter</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Interest</label>
                <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none' }}>
                  <option value="">Select…</option>
                  <option>Product Demo</option><option>Fleet Proposal</option><option>Partnership</option><option>Investment</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#003366', marginBottom: 7 }}>Message</label>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} placeholder="Tell us about your fleet or requirements…" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #d6e8f5', background: '#f5f9ff', color: '#003366', borderRadius: 9, fontSize: 15, outline: 'none', resize: 'vertical' }} />
            </div>
            <button onClick={() => alert('Thank you! We\'ll be in touch within 24 hours.')} style={{ width: '100%', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', background: 'linear-gradient(90deg,#003366,#0070c9)', border: 'none', padding: 16, borderRadius: 10, cursor: 'pointer' }}>
              Request Your Demo →
            </button>
            <p style={{ fontSize: 13, textAlign: 'center', color: '#4a6080', marginTop: 12 }}>We respond within 24 hours on business days.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
