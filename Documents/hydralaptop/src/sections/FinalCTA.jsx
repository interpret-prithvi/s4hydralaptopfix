import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      style={{ width: '100%', background: 'linear-gradient(180deg,#FFFFFF 0%,#F0F7FF 100%)', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(64px,9vw,112px) clamp(24px,5vw,80px)' }}>

        {/* ── CTA container ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position:     'relative',
            borderRadius: '28px',
            overflow:     'hidden',
            padding:      'clamp(40px,8vw,100px) clamp(20px,6vw,96px)',
            background:   'linear-gradient(135deg, #050e1f 0%, #0a1a3a 50%, #071528 100%)',
            boxShadow:    '0 0 80px rgba(0,136,255,0.22), 0 32px 64px rgba(0,0,0,0.3)',
            textAlign:    'center',
          }}
        >
          {/* ── Decorative background elements ── */}

          {/* Radial glow top-right */}
          <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,136,255,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

          {/* Radial glow bottom-left */}
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

          {/* Subtle grid mesh */}
          <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(56,189,248,1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>

          {/* Thin horizontal accent line */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(56,189,248,0.4),transparent)' }} />

          {/* ── Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <span style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '8px',
                padding:       '7px 18px',
                borderRadius:  'var(--radius-pill)',
                border:        '1px solid rgba(56,189,248,0.3)',
                background:    'rgba(56,189,248,0.08)',
                fontFamily:    'var(--font-primary)',
                fontWeight:    600,
                fontSize:      'clamp(0.65rem,1vw,0.75rem)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         'var(--cyan)',
                marginBottom:  'clamp(20px,3vw,28px)',
              }}>
                {/* Pulse dot */}
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)', animation: 'cta-ping 2s ease-in-out infinite' }} aria-hidden="true" />
                Ready When You Need Us
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              id="final-cta-heading"
              variants={fadeUp}
              style={{
                fontFamily:    'var(--font-heading)',
                fontWeight:    800,
                fontSize:      'clamp(2.4rem,6vw,5rem)',
                lineHeight:    1.05,
                letterSpacing: '-0.025em',
                color:         '#FFFFFF',
                marginBottom:  'clamp(20px,3vw,28px)',
                maxWidth:      '800px',
              }}
            >
              Let's Solve Your{' '}
              <span style={{ background: 'linear-gradient(135deg,#0088FF,#38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Technology
              </span>{' '}
              Problem.
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily:   'var(--font-primary)',
                fontWeight:   400,
                fontSize:     'clamp(0.95rem,1.6vw,1.1rem)',
                lineHeight:   1.75,
                color:        'rgba(255,255,255,0.62)',
                maxWidth:     '560px',
                marginBottom: 'clamp(36px,5vw,52px)',
              }}
            >
              Whether it's a laptop that needs repair, a Hydra facial machine that needs attention,
              or a technology solution for your business — we're ready to help.
            </motion.p>

            {/* Service pills */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: 'clamp(36px,5vw,52px)' }}
            >
              {['Laptop Repair', 'Hydra Machine Repair', 'IT Services', 'Consulting'].map(tag => (
                <span key={tag} style={{ padding: '6px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', fontFamily: 'var(--font-primary)', fontWeight: 500, fontSize: 'clamp(0.74rem,1vw,0.82rem)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.03em' }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: 'clamp(24px,4vw,36px)' }}
            >
              {/* Primary */}
              <a
                href="#final-cta"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '10px',
                  padding:        '16px 40px',
                  borderRadius:   'var(--radius-pill)',
                  background:     'linear-gradient(135deg,#0088FF,#0055CC)',
                  color:          '#FFFFFF',
                  fontFamily:     'var(--font-primary)',
                  fontWeight:     700,
                  fontSize:       'clamp(0.82rem,1.2vw,0.92rem)',
                  letterSpacing:  '0.08em',
                  textTransform:  'uppercase',
                  textDecoration: 'none',
                  boxShadow:      '0 0 32px rgba(0,136,255,0.45), 0 8px 20px rgba(0,85,204,0.3)',
                  transition:     'transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(0,136,255,0.6), 0 12px 28px rgba(0,85,204,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(0,136,255,0.45), 0 8px 20px rgba(0,85,204,0.3)' }}
              >
                Book a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>

            {/* Secondary text link */}
            <motion.div variants={fadeUp}>
              <a
                href="mailto:hello@hydrarepair.com"
                style={{
                  fontFamily:     'var(--font-primary)',
                  fontWeight:     500,
                  fontSize:       'clamp(0.82rem,1.1vw,0.9rem)',
                  color:          'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition:     'color var(--transition-fast)',
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '6px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                Have a question? Get in touch.
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @keyframes cta-ping {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="cta-ping"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
