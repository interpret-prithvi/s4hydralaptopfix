import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo/logo.png'

const NAV_LINKS = [
   { label: 'Services', href: '#laptop-repair' },
  { label: 'About',    href: '#about-us'      },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Switch header from transparent to glass on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        transition: 'background var(--transition-standard), border-color var(--transition-standard), box-shadow var(--transition-standard)',
        background: scrolled
          ? 'rgba(15, 23, 42, 0.65)'
          : 'transparent',
        backdropFilter:         scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter:   scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0, 0, 0, 0.18)' : 'none',
      }}
      role="banner"
    >
      <div
        style={{
          maxWidth:      '1280px',
          margin:        '0 auto',
          padding:       '0 32px',
          height:        '140px',
          display:       'flex',
          alignItems:    'center',
          justifyContent:'space-between',
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#"
          aria-label="S4 hydralaptopfix — back to top"
          style={{
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            gap:            '4px',
            flexShrink:     0,
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="S4 hydralaptopfix logo"
            style={{
              width:        '170px',
              height:       'auto',
              borderRadius: '8px',
              objectFit:    'contain',
              display:      'block',
            }}
          />
          <span
            style={{
              fontFamily:    'var(--font-heading)',
              fontWeight:    'var(--weight-bold)',
              fontSize:      '0.65rem',
              color:         'rgba(255,255,255,0.8)',
              letterSpacing: '0.04em',
              textAlign:     'center',
              lineHeight:    1,
              whiteSpace:    'nowrap',
            }}
          >
            S4 hydralaptopfix
          </span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav
          aria-label="Main navigation"
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '36px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily:     'var(--font-primary)',
                fontWeight:     'var(--weight-semibold)',
                fontSize:       '1rem',
                color:          'rgba(255, 255, 255, 0.85)',
                letterSpacing:  '0.01em',
                transition:     'color var(--transition-fast)',
                position:       'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
            >
              {link.label}
            </a>
          ))}

          {/* Mail / Contact icon */}
          <a
            href="mailto:hello@hydrarepair.com"
            aria-label="Contact us by email"
            style={{
              display:    'flex',
              alignItems: 'center',
              color:      'rgba(255, 255, 255, 0.85)',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </nav>

        {/* ── Hamburger (mobile only) ── */}
        <button
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
          style={{
            display:        'none',
            flexDirection:  'column',
            justifyContent: 'center',
            gap:            '5px',
            padding:        '8px',
            background:     'none',
            border:         'none',
            cursor:         'pointer',
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display:       'block',
                width:         '22px',
                height:        '2px',
                background:    '#FFFFFF',
                borderRadius:  '2px',
                transition:    'transform 0.25s ease, opacity 0.25s ease',
                transform:
                  i === 0 && menuOpen ? 'translateY(7px) rotate(45deg)'  :
                  i === 2 && menuOpen ? 'translateY(-7px) rotate(-45deg)' :
                  i === 1 && menuOpen ? 'scaleX(0)'                       : 'none',
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{
              background:           'rgba(15, 23, 42, 0.96)',
              backdropFilter:       'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderTop:            '1px solid rgba(255, 255, 255, 0.08)',
              padding:              '24px 32px 32px',
              display:              'flex',
              flexDirection:        'column',
              gap:                  '4px',
            }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily:   'var(--font-primary)',
                  fontWeight:   'var(--weight-medium)',
                  fontSize:     '1.1rem',
                  color:        'rgba(255, 255, 255, 0.85)',
                  padding:      '14px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  transition:   'color var(--transition-fast)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@hydrarepair.com"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:  'var(--font-primary)',
                fontWeight:  'var(--weight-medium)',
                fontSize:    '1.1rem',
                color:       'var(--cyan)',
                padding:     '14px 0',
                display:     'flex',
                alignItems:  'center',
                gap:         '10px',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
