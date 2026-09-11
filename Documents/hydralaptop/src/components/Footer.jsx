import logo from '../assets/logo/logo.png'

const SERVICES_LINKS = [
  { label: 'Laptop Repair',              href: '#laptop-repair' },
  { label: 'Hydra Facial Machine Repair',href: '#hydra-repair'  },
  { label: 'Email',                      href: '#more-services' },
  { label: 'Hosting',                    href: '#more-services' },
  { label: 'Website',                    href: '#more-services' },
  { label: 'Consulting',                 href: '#more-services' },
  { label: 'IT Services',               href: '#more-services' },
]

const COMPANY_LINKS = [
  { label: 'About Us',      href: '#about-us'     },
  { label: 'Why Choose Us', href: '#why-choose-us'},
  { label: 'Contact',       href: '#final-cta'    },
]

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontFamily:     'var(--font-primary)',
        fontWeight:     400,
        fontSize:       '0.875rem',
        color:          'rgba(148,163,184,1)',
        textDecoration: 'none',
        transition:     'color 0.2s ease',
        display:        'block',
        lineHeight:     1.5,
      }}
      onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,1)'}
    >
      {children}
    </a>
  )
}

function ColumnHeading({ children }) {
  return (
    <p style={{
      fontFamily:    'var(--font-primary)',
      fontWeight:    700,
      fontSize:      '0.75rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color:         '#FFFFFF',
      marginBottom:  '18px',
    }}>
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        width:      '100%',
        background: '#0F172A',
        overflow:   'hidden',
        position:   'relative',
      }}
    >
      {/* Subtle top glow line */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.35),rgba(56,189,248,0.35),transparent)' }} />

      {/* Decorative radial glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at top, rgba(0,136,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* ── Main footer content ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(24px,5vw,80px) clamp(32px,5vw,56px)', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 'clamp(32px,5vw,64px)' }} className="footer-grid">

          {/* ── Col 1 — Brand ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Logo + name */}
            <a href="#" aria-label="Back to top" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img
                src={logo}
                alt="Hydra logo"
                style={{ width: '44px', height: '44px', borderRadius: '6px', objectFit: 'contain', flexShrink: 0 }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>
                S4 hydralaptopfix
              </span>
            </a>

            {/* Description */}
            <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: '0.875rem', color: 'rgba(148,163,184,1)', lineHeight: 1.75, maxWidth: '280px', margin: 0 }}>
              Professional repair, maintenance and technology services for laptops, Hydra facial machines and modern businesses.
            </p>

            {/* CTA button */}
            <div>
              <a
                href="#final-cta"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '8px',
                  padding:        '11px 24px',
                  borderRadius:   'var(--radius-pill)',
                  background:     'linear-gradient(135deg,#0088FF,#0055CC)',
                  color:          '#FFFFFF',
                  fontFamily:     'var(--font-primary)',
                  fontWeight:     700,
                  fontSize:       '0.8rem',
                  letterSpacing:  '0.07em',
                  textTransform:  'uppercase',
                  textDecoration: 'none',
                  boxShadow:      '0 0 20px rgba(0,136,255,0.3)',
                  transition:     'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(0,136,255,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,136,255,0.3)' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>

          {/* ── Col 2 — Services ── */}
          <nav aria-label="Services navigation">
            <ColumnHeading>Services</ColumnHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES_LINKS.map(l => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* ── Col 3 — Company ── */}
          <nav aria-label="Company navigation">
            <ColumnHeading>Company</ColumnHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {COMPANY_LINKS.map(l => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* ── Col 4 — Get in Touch ── */}
          <div>
            <ColumnHeading>Get in Touch</ColumnHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:hello@hydrarepair.com"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '8px',
                  fontFamily:     'var(--font-primary)',
                  fontWeight:     400,
                  fontSize:       '0.875rem',
                  color:          'rgba(148,163,184,1)',
                  textDecoration: 'none',
                  transition:     'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,1)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                hello@hydrarepair.com
              </a>

              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: '0.82rem', color: 'rgba(100,116,139,1)', lineHeight: 1.65, margin: 0 }}>
                Available for laptop repair, Hydra machine servicing, IT support and general technology consultations.
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={{ marginTop: 'clamp(32px,5vw,56px)', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: '0.8rem', color: 'rgba(100,116,139,1)', margin: 0 }}>
            © {new Date().getFullYear()} S4 hydralaptopfix. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: '0.8rem', color: 'rgba(100,116,139,1)', margin: 0 }}>
            Professional Repair &amp; Technology Services
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
