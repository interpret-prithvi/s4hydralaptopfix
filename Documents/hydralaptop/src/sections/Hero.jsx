import { motion, useReducedMotion } from 'framer-motion'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/logo/logo.png' /* best available static fallback */

/* ── Animation variants ── */
const contentVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ── Scroll Indicator ── */
function ScrollIndicator() {
  const reduced = useReducedMotion()
  return (
    <div
      aria-hidden="true"
      style={{
        position:      'absolute',
        bottom:        '32px',
        left:          '50%',
        transform:     'translateX(-50%)',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           '6px',
      }}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <div style={{
          width: '24px', height: '38px',
          border: '2px solid rgba(255,255,255,0.45)',
          borderRadius: '12px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <motion.div
            animate={reduced ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }}
          />
        </div>
        <span style={{
          fontFamily: 'var(--font-primary)', fontSize: '10px',
          fontWeight: 500, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
        }}>
          Scroll
        </span>
      </motion.div>
    </div>
  )
}

/* ── Hero ── */
export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position:   'relative',
        minHeight:  '100svh',
        width:      '100%',
        overflow:   'hidden',
        display:    'flex',
        alignItems: 'flex-end',
        /* Deep fallback if video cannot play */
        background: 'linear-gradient(160deg, #050e1f 0%, #0a1a3a 100%)',
      }}
    >
      {/* ── Video background ── */}
      <video
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'center',
          zIndex:         0,
        }}
      />

      {/* ── Overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          zIndex:     1,
          background: 'linear-gradient(to top, rgba(5,10,24,0.82) 0%, rgba(5,10,24,0.35) 55%, rgba(5,10,24,0.12) 100%)',
        }}
      />

      {/* ── Hero content ── */}
      <motion.div
        variants={reduced ? {} : contentVariants}
        initial="hidden"
        animate="visible"
        style={{
          position:  'relative',
          zIndex:    2,
          width:     '100%',
          maxWidth:  '1280px',
          margin:    '0 auto',
          /* top padding clears the 72px fixed header; bottom gives scroll-indicator room */
          padding:   'clamp(100px, 14vw, 160px) clamp(20px, 5vw, 32px) clamp(90px, 12vw, 130px)',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={reduced ? {} : itemVariants}
          style={{
            fontFamily: 'var(--font-primary)', fontWeight: 600,
            fontSize: 'clamp(0.65rem, 1.2vw, 0.82rem)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '16px',
          }}
        >
          Laptop Repair + Hydra Facial Machine Repair
        </motion.p>

        {/* H1 */}
        <motion.h1
          id="hero-heading"
          variants={reduced ? {} : itemVariants}
          style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: 'clamp(2.375rem, 6.5vw, 4.5rem)',
            lineHeight: 1.06, letterSpacing: '-0.02em',
            color: '#FFFFFF', marginBottom: '20px',
            maxWidth: '780px',
          }}
        >
          PRECISION REPAIR.
          <br />
          RELIABLE RESULTS.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={reduced ? {} : itemVariants}
          style={{
            fontFamily: 'var(--font-primary)', fontWeight: 400,
            fontSize: 'clamp(0.92rem, 1.6vw, 1.15rem)',
            lineHeight: 1.65, color: 'rgba(255,255,255,0.72)',
            marginBottom: '36px', maxWidth: '480px',
          }}
        >
          Expert repair, maintenance &amp; technology services.
        </motion.p>

        {/* CTA */}
        <motion.div variants={reduced ? {} : itemVariants}>
          <a
            href="#final-cta"
            aria-label="Book a consultation with S4 hydralaptopfix"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: 'clamp(12px,2vw,15px) clamp(24px,4vw,34px)',
              borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg,var(--primary-blue),var(--primary-blue-dark))',
              color: '#FFFFFF', fontFamily: 'var(--font-primary)', fontWeight: 700,
              fontSize: 'clamp(0.8rem,1.2vw,0.88rem)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              boxShadow: 'var(--shadow-glow)', textDecoration: 'none',
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
          >
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator />
    </section>
  )
}
