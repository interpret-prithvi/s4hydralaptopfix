import { motion } from 'framer-motion'
import TrustMarquee from '../components/TrustMarquee'

/* ── Animation variants ───────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
}

const marqueeReveal = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function PrecisionTrust() {
  return (
    <section
      id="precision-trust"
      aria-labelledby="precision-trust-heading"
      style={{
        width:      '100%',
        background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
        overflow:   'hidden',
      }}
    >
      {/* ── Top border accent ── */}
      <div
        aria-hidden="true"
        style={{
          width:      '100%',
          height:     '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,136,255,0.25) 50%, transparent 100%)',
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          maxWidth:      '860px',
          margin:        '0 auto',
          padding:       'clamp(64px, 9vw, 112px) 32px clamp(48px, 7vw, 80px)',
          textAlign:     'center',
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           '28px',
        }}
      >
        {/* Heading */}
        <motion.h2
          id="precision-trust-heading"
          variants={fadeUp}
          style={{
            fontFamily:    'var(--font-heading)',
            fontWeight:    'var(--weight-extrabold)',
            fontSize:      'clamp(2.2rem, 5.5vw, 4.2rem)',
            lineHeight:    1.08,
            letterSpacing: '-0.02em',
            color:         'var(--heading)',
            margin:        0,
          }}
        >
          PRECISION.{' '}
          <span
            style={{
              background:              'linear-gradient(135deg, var(--primary-blue) 0%, var(--cyan) 100%)',
              WebkitBackgroundClip:    'text',
              WebkitTextFillColor:     'transparent',
              backgroundClip:         'text',
            }}
          >
            EXPERIENCE.
          </span>{' '}
          TRUST.
        </motion.h2>

        {/* Supporting paragraph */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily:  'var(--font-primary)',
            fontWeight:  'var(--weight-regular)',
            fontSize:    'clamp(1rem, 1.8vw, 1.18rem)',
            lineHeight:  1.75,
            color:       'var(--body)',
            maxWidth:    '600px',
            margin:      0,
          }}
        >
          From everyday computers to professional Hydra facial systems,
          we diagnose, repair and restore what you depend on.
        </motion.p>
      </motion.div>

      {/* ── Trust Marquee strip ── */}
      <motion.div
        variants={marqueeReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        style={{
          width:        '100%',
          borderTop:    '1px solid rgba(0, 136, 255, 0.12)',
          borderBottom: '1px solid rgba(0, 136, 255, 0.12)',
          padding:      '18px 0',
          background:   'rgba(240, 247, 255, 0.6)',
          backdropFilter:       'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          overflow:     'hidden',
        }}
      >
        <TrustMarquee />
      </motion.div>
    </section>
  )
}
