import { motion } from 'framer-motion'

const SERVICES = [
  {
    id:          'email',
    title:       'Email',
    description: 'Professional business email setup, configuration and support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    id:          'hosting',
    title:       'Hosting',
    description: 'Reliable website and hosting setup, management and support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="8" x="2" y="2" rx="2"/>
        <rect width="20" height="8" x="2" y="14" rx="2"/>
        <line x1="6" x2="6.01" y1="6" y2="6"/>
        <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
  },
  {
    id:          'website',
    title:       'Website',
    description: 'Modern, responsive websites designed for businesses and organizations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="3" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M2 7h20"/>
      </svg>
    ),
  },
  {
    id:          'consulting',
    title:       'Consulting',
    description: 'Technology guidance to help identify practical solutions for your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6M10 22h4"/>
      </svg>
    ),
  },
  {
    id:          'it-services',
    title:       'IT Services',
    description: 'Technical support, troubleshooting, setup and general IT assistance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

/* ── Variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ── Service Card ──────────────────────────────────────────── */
function ServiceCard({ service }) {
  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{
        padding:      '28px 24px',
        borderRadius: 'var(--radius-card)',
        background:   'rgba(255,255,255,0.8)',
        border:       '1px solid rgba(0,136,255,0.12)',
        boxShadow:    '0 2px 16px rgba(0,136,255,0.06)',
        backdropFilter: 'blur(8px)',
        display:      'flex',
        flexDirection:'column',
        gap:          '14px',
        transition:   'box-shadow 0.2s ease',
        cursor:       'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,136,255,0.14)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,136,255,0.06)' }}
    >
      {/* Icon */}
      <div style={{
        width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
        background: 'linear-gradient(135deg,rgba(0,136,255,0.1),rgba(56,189,248,0.1))',
        border: '1px solid rgba(0,136,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--primary-blue)',
      }}>
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(0.95rem,1.3vw,1.05rem)', color: 'var(--heading)', marginBottom: '6px' }}>
          {service.title}
        </p>
        <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.82rem,1.1vw,0.88rem)', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function MoreServices() {
  return (
    <section
      id="more-services"
      aria-labelledby="more-services-heading"
      style={{ width: '100%', background: 'linear-gradient(180deg,#FFFFFF 0%,#F0F7FF 100%)', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(64px,9vw,112px) clamp(24px,5vw,80px)' }}>

        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,64px)' }}
        >
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary-blue)', marginBottom: '16px' }}>
            Technology Services
          </motion.p>

          <motion.h2
            id="more-services-heading"
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.6rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--heading)', marginBottom: '16px' }}
          >
            More Services
          </motion.h2>

          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.92rem,1.5vw,1.05rem)', lineHeight: 1.7, color: 'var(--body)', maxWidth: '520px', margin: '0 auto' }}>
            Practical technology services to help your business stay connected, visible and running smoothly.
          </motion.p>
        </motion.div>

        {/* ── Service grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Top row — 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '16px' }} className="services-row-3">
            {SERVICES.slice(0, 3).map(s => <ServiceCard key={s.id} service={s} />)}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', maxWidth: '66.66%', margin: '0 auto' }} className="services-row-2">
            {SERVICES.slice(3).map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px,6vw,60px)' }}
        >
          <a
            href="#final-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 36px', borderRadius: 'var(--radius-pill)', background: 'linear-gradient(135deg,var(--primary-blue),var(--primary-blue-dark))', color: '#FFFFFF', fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: 'var(--shadow-glow)', transition: 'transform var(--transition-fast),box-shadow var(--transition-fast)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
          >
            Book a Consultation
          </a>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @media (max-width: 900px) {
          .services-row-3 { grid-template-columns: repeat(2,1fr) !important; }
          .services-row-2 { max-width: 100% !important; }
        }
        @media (max-width: 560px) {
          .services-row-3 { grid-template-columns: 1fr !important; }
          .services-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
