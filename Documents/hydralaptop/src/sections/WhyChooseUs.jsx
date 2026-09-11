import { motion } from 'framer-motion'

const TRUST_POINTS = [
  {
    num:   '01',
    title: 'Expert Diagnosis',
    sub:   'Find the root cause, not just the symptom.',
    body:  'Specialized diagnostic methods to identify the actual source of hardware and system problems before carrying out repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num:   '02',
    title: 'Genuine Components',
    sub:   'Quality parts for dependable repairs.',
    body:  'Quality replacement components selected for compatibility, performance and reliability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num:   '03',
    title: 'Professional Tools',
    sub:   'The right equipment for precise work.',
    body:  'Professional tools and equipment help reduce unnecessary damage and allow more accurate repair and servicing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num:   '04',
    title: 'Data Protection',
    sub:   'Your files stay treated with care.',
    body:  'Customer data and personal files are handled responsibly during repairs, upgrades and hardware replacement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    num:   '05',
    title: 'Precision Repair',
    sub:   'Careful work from component to system.',
    body:  'From laptop hardware and motherboard work to Hydra facial machine components, repairs are approached carefully and methodically.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    num:   '06',
    title: 'Preventive Maintenance',
    sub:   'Fix problems before they become downtime.',
    body:  'Regular inspection, cleaning, calibration and maintenance helps identify issues early and extend equipment service life.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
  },
]

const HYDRA_POINTS = [
  'Specialized equipment diagnostics',
  'Fluid and flow-system care',
  'Calibration and performance checks',
  'Preventive maintenance',
  'Reduced equipment downtime',
]

/* ── Variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const cardReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ── Trust Card ────────────────────────────────────────────── */
function TrustCard({ point }) {
  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        padding:       '24px',
        borderRadius:  'var(--radius-card)',
        background:    'rgba(255,255,255,0.75)',
        border:        '1px solid rgba(0,136,255,0.1)',
        boxShadow:     '0 2px 12px rgba(0,136,255,0.05)',
        backdropFilter:'blur(8px)',
        display:       'flex',
        flexDirection: 'column',
        gap:           '12px',
        transition:    'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow     = '0 8px 28px rgba(0,136,255,0.13)'
        e.currentTarget.style.borderColor   = 'rgba(0,136,255,0.22)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow     = '0 2px 12px rgba(0,136,255,0.05)'
        e.currentTarget.style.borderColor   = 'rgba(0,136,255,0.1)'
      }}
    >
      {/* Top row: number + icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily:    'var(--font-heading)',
          fontWeight:    800,
          fontSize:      'clamp(1.4rem,2.5vw,1.9rem)',
          background:    'linear-gradient(135deg,rgba(0,136,255,0.18),rgba(56,189,248,0.18))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip:'text',
          lineHeight:    1,
          letterSpacing: '-0.02em',
        }}>
          {point.num}
        </span>
        <div style={{
          width: '36px', height: '36px', borderRadius: '9px',
          background: 'linear-gradient(135deg,rgba(0,136,255,0.09),rgba(56,189,248,0.09))',
          border: '1px solid rgba(0,136,255,0.14)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--primary-blue)',
          flexShrink: 0,
        }}>
          {point.icon}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(0,136,255,0.08)' }} aria-hidden="true" />

      {/* Title */}
      <p style={{
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize: 'clamp(0.92rem,1.3vw,1rem)', color: 'var(--heading)', margin: 0,
      }}>
        {point.title}
      </p>

      {/* Sub */}
      <p style={{
        fontFamily: 'var(--font-primary)', fontWeight: 600,
        fontSize: 'clamp(0.78rem,1vw,0.84rem)', color: 'var(--primary-blue)',
        margin: 0, lineHeight: 1.4,
      }}>
        {point.sub}
      </p>

      {/* Body */}
      <p style={{
        fontFamily: 'var(--font-primary)', fontWeight: 400,
        fontSize: 'clamp(0.78rem,1.05vw,0.84rem)', color: 'var(--body)',
        lineHeight: 1.65, margin: 0,
      }}>
        {point.body}
      </p>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      style={{ width: '100%', background: 'linear-gradient(180deg,#F0F7FF 0%,#FFFFFF 100%)', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(64px,9vw,112px) clamp(24px,5vw,80px)' }}>

        {/* ── Section header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 'clamp(40px,6vw,64px)', maxWidth: '680px' }}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-primary)', fontWeight: 600,
            fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--primary-blue)', marginBottom: '14px',
          }}>
            Why Choose Us
          </motion.p>

          <motion.h2
            id="why-choose-us-heading"
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.5vw,3.6rem)', lineHeight: 1.08,
              letterSpacing: '-0.02em', color: 'var(--heading)', marginBottom: '18px',
            }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-primary)', fontWeight: 400,
            fontSize: 'clamp(0.92rem,1.5vw,1.05rem)', lineHeight: 1.75,
            color: 'var(--body)', margin: 0,
          }}>
            Professional repair is about more than replacing a part. It's about accurate diagnosis,
            careful workmanship and making sure the solution lasts.
          </motion.p>
        </motion.div>

        {/* ── Trust points grid — 3 × 2 ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}
          className="trust-grid"
        >
          {TRUST_POINTS.map(p => <TrustCard key={p.num} point={p} />)}
        </motion.div>

        {/* ── Hydra Machine Care callout ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ marginTop: 'clamp(40px,6vw,64px)' }}
        >
          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)', marginBottom: 'clamp(32px,5vw,48px)' }} aria-hidden="true" />

          <div
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
            }}
            className="hydra-callout-grid"
          >
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p style={{
                fontFamily: 'var(--font-primary)', fontWeight: 600,
                fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px',
              }}>
                Specialist Servicing
              </p>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                fontSize: 'clamp(1.5rem,3vw,2.4rem)', lineHeight: 1.1,
                letterSpacing: '-0.02em', color: 'var(--heading)', marginBottom: '14px',
              }}>
                Hydra Machine Care
              </h3>
              <p style={{
                fontFamily: 'var(--font-primary)', fontWeight: 400,
                fontSize: 'clamp(0.88rem,1.3vw,0.96rem)', color: 'var(--body)',
                lineHeight: 1.7, margin: 0,
              }}>
                Dedicated servicing for Hydra facial systems — keeping your clinic equipment
                running reliably and efficiently.
              </p>
            </motion.div>

            {/* Right — points */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}
              aria-label="Hydra machine care points"
            >
              {HYDRA_POINTS.map((pt, i) => (
                <motion.li
                  key={i}
                  variants={cardReveal}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 16px', borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(0,136,255,0.1)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <span aria-hidden="true" style={{
                    flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,var(--primary-blue),var(--cyan))',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-primary)', fontWeight: 500,
                    fontSize: 'clamp(0.82rem,1.1vw,0.9rem)', color: 'var(--heading)',
                  }}>
                    {pt}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @media (max-width: 900px) {
          .trust-grid          { grid-template-columns: repeat(2,1fr) !important; }
          .hydra-callout-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
