import { motion } from 'framer-motion'

/* ── Variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

/* ── Founder placeholder ───────────────────────────────────── */
function FounderPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Founder photograph — to be added"
      style={{
        width: '100%',
        aspectRatio: '3 / 4',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(0,136,255,0.18)',
        background: 'linear-gradient(160deg, #0a1628 0%, #0d2040 50%, #0a1628 100%)',
        boxShadow: '0 0 48px rgba(0,136,255,0.18)',
      }}
    >
      {/* Decorative grid */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="founder-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56,189,248,0.6)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#founder-grid)" />
      </svg>

      {/* Glow orb */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,136,255,0.25), transparent 70%)', pointerEvents: 'none' }} />

      {/* Person silhouette */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(56,189,248,0.45)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
        </svg>
        <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(56,189,248,0.45)', marginTop: '4px' }}>
          Founder Photo
        </p>
      </div>

      {/* Bottom name plate */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(5,10,24,0.9) 0%, transparent 100%)' }}>
        <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          Founder
        </p>
      </div>
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-us-heading"
      style={{ width: '100%', background: '#FFFFFF', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(64px,9vw,112px) clamp(24px,5vw,80px)' }}>

        {/* ── Section label + large heading ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 'clamp(48px,7vw,80px)' }}
        >
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary-blue)', marginBottom: '14px' }}>
            About Us
          </motion.p>

          <motion.h2
            id="about-us-heading"
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2.2rem,5.5vw,4.4rem)', lineHeight: 1.06, letterSpacing: '-0.025em', color: 'var(--heading)', marginBottom: '20px', maxWidth: '820px' }}
          >
            Technology.{' '}
            <span style={{ background: 'linear-gradient(135deg,var(--primary-blue),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Expertise.
            </span>{' '}
            A commitment to doing things right.
          </motion.h2>

          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.95rem,1.6vw,1.1rem)', lineHeight: 1.75, color: 'var(--body)', maxWidth: '640px' }}>
            We help individuals and businesses keep the technology they depend on working reliably —
            from everyday laptops and computers to specialized Hydra facial equipment and essential digital services.
          </motion.p>
        </motion.div>

        {/* ── Two-column: story left, founder right ── */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}
          className="about-grid"
        >

          {/* ── LEFT — Company story ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Story block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Accent line */}
              <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: 'linear-gradient(90deg,var(--primary-blue),var(--cyan))' }} aria-hidden="true" />

              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.015em', color: 'var(--heading)', margin: 0 }}>
                Built Around Reliable Solutions
              </h3>

              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.9rem,1.4vw,1rem)', lineHeight: 1.8, color: 'var(--body)', margin: 0 }}>
                Our approach is simple: understand the problem properly, apply the right technical
                solution and deliver work that customers can rely on. From hardware repair and
                equipment maintenance to websites, hosting, email and IT support, we focus on
                practical technology solutions that make a real difference.
              </p>
            </div>

            {/* Emphasized values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Reliable Solutions',   desc: 'Work that holds up over time, not just in the short term.' },
                { label: 'Technical Expertise',  desc: 'Deep knowledge applied carefully to every job we take on.' },
                { label: 'Practical Results',    desc: 'Fixes and services that make a measurable difference.' },
              ].map(v => (
                <div key={v.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg,rgba(0,136,255,0.04),rgba(56,189,248,0.03))', border: '1px solid rgba(0,136,255,0.1)' }}>
                  <span aria-hidden="true" style={{ flexShrink: 0, marginTop: '5px', width: '6px', height: '6px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary-blue),var(--cyan))' }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 'clamp(0.85rem,1.2vw,0.92rem)', color: 'var(--heading)', marginBottom: '3px' }}>{v.label}</p>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.78rem,1.05vw,0.84rem)', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Founder photo + message ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {/* Founder photo */}
            <FounderPlaceholder />

            {/* Founder message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ padding: '24px', borderRadius: 'var(--radius-card)', background: 'linear-gradient(135deg,#F0F7FF,#FFFFFF)', border: '1px solid rgba(0,136,255,0.12)', position: 'relative' }}
            >
              {/* Quote mark */}
              <span aria-hidden="true" style={{ position: 'absolute', top: '16px', left: '20px', fontFamily: 'Georgia, serif', fontSize: '4rem', lineHeight: 1, color: 'rgba(0,136,255,0.1)', userSelect: 'none' }}>"</span>

              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.68rem,1vw,0.75rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary-blue)', marginBottom: '14px' }}>
                A Message From The Founder
              </p>

              <blockquote style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(0.9rem,1.4vw,0.98rem)', lineHeight: 1.8, color: 'var(--body)', margin: '0 0 16px', paddingLeft: '4px' }}>
                "Technology should make life easier, not create more problems. Our goal is to combine
                technical knowledge with careful workmanship and honest guidance — helping our customers
                solve today's problems while building technology they can depend on tomorrow."
              </blockquote>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(0,136,255,0.1)', marginBottom: '14px' }} aria-hidden="true" />

              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--heading)', margin: 0, letterSpacing: '0.04em' }}>
                Founder
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
