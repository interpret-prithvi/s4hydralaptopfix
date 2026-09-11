import { motion } from 'framer-motion'
import RepairImageCarousel from '../components/RepairImageCarousel'

import h1 from '../assets/hydra-repair/1.jpg'
import h2 from '../assets/hydra-repair/2.jpg'
import h3 from '../assets/hydra-repair/3.jpg'
import h4 from '../assets/hydra-repair/4.jpg'
import h5 from '../assets/hydra-repair/5.jpg'

const HYDRA_IMAGES = [
  { src: h1, alt: 'Hydra facial machine front panel' },
  { src: h2, alt: 'Hydra machine control interface' },
  { src: h3, alt: 'Hydra handpiece and vacuum components' },
  { src: h4, alt: 'Hydra machine internal electronics' },
  { src: h5, alt: 'Hydra facial system fluid lines' },
]

/* ── Three pillars ─────────────────────────────────────────── */
const PILLARS = [
  {
    id:     'repair',
    label:  'Repair',
    detail: 'Vacuum suction pumps · Motors · Electronic controls · Handpieces · Cooling probes · LED therapy handles',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id:     'maintain',
    label:  'Maintain',
    detail: 'Deep cleaning · Descaling · Fluid-system care · Water & serum line cleaning · Flow-system inspection',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
  },
  {
    id:     'optimize',
    label:  'Optimize',
    detail: 'Machine diagnostics · Calibration · Electronics inspection · Performance checks · Preventive maintenance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

/* ── Supporting services ───────────────────────────────────── */
const SERVICES = [
  { id: 'diag',  title: 'System Diagnostics',     description: 'Full inspection of motors, electronics and controls to identify faults, glitches or performance issues.' },
  { id: 'prec',  title: 'Precision Repairs',       description: 'Specialized repair of vacuum pumps, cooling probes, handpieces, LED therapy components and related systems.' },
  { id: 'fluid', title: 'Fluid & Flow Care',       description: 'Cleaning and descaling of internal water/serum lines while checking flow and system performance.' },
  { id: 'prev',  title: 'Preventive Maintenance',  description: 'Routine servicing and calibration designed to help extend machine life and reduce unexpected downtime.' },
]

/* ── Variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const itemReveal = {
  hidden:  { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HydraRepair() {
  return (
    <section
      id="hydra-repair"
      aria-labelledby="hydra-repair-heading"
      style={{ width: '100%', background: 'linear-gradient(180deg,#F0F7FF 0%,#FFFFFF 100%)', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      {/* ── Full-width carousel strip ── */}
      <div style={{ paddingTop: 'clamp(48px, 7vw, 80px)' }}>
        <RepairImageCarousel
          images={HYDRA_IMAGES}
          accent="Hydra Repair"
          label="Hydra facial machine repair image gallery"
        />
      </div>

      {/* ── Main content below carousel ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,80px) clamp(64px,9vw,112px)' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}
          className="hydra-repair-grid"
        >

          {/* ── LEFT — content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary-blue)', margin: 0 }}>
              Specialist Machine Servicing
            </motion.p>

            {/* Heading */}
            <motion.h2
              id="hydra-repair-heading"
              variants={fadeUp}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--heading)', margin: 0 }}
            >
              Hydra Facial<br />
              <span style={{ background: 'linear-gradient(135deg,var(--primary-blue),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Machine Repair
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.9rem,1.4vw,1rem)', lineHeight: 1.75, color: 'var(--body)', margin: 0 }}>
              Specialized diagnostics, repair and preventive maintenance for Hydra facial systems — helping your equipment perform reliably when you need it.
            </motion.p>

            {/* ── Repair / Maintain / Optimize pillars ── */}
            <motion.div
              variants={stagger}
              style={{ display: 'flex', flexDirection: 'column', gap: '0', borderRadius: 'var(--radius-card)', border: '1px solid rgba(0,136,255,0.12)', overflow: 'hidden' }}
            >
              {PILLARS.map((p, idx) => (
                <motion.div
                  key={p.id}
                  variants={itemReveal}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '14px',
                    padding: '14px 16px',
                    background: idx % 2 === 0 ? 'rgba(0,136,255,0.03)' : 'rgba(0,136,255,0.015)',
                    borderBottom: idx < PILLARS.length - 1 ? '1px solid rgba(0,136,255,0.08)' : 'none',
                  }}
                >
                  <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg,rgba(0,136,255,0.12),rgba(56,189,248,0.12))', border: '1px solid rgba(0,136,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', marginTop: '1px' }} aria-hidden="true">
                    {p.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 'clamp(0.88rem,1.2vw,0.97rem)', color: 'var(--heading)', marginBottom: '3px' }}>
                      {p.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.75rem,1vw,0.82rem)', color: 'var(--body)', lineHeight: 1.55, margin: 0 }}>
                      {p.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Emergency badge */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg,rgba(0,136,255,0.07),rgba(56,189,248,0.05))', border: '1px solid rgba(56,189,248,0.28)' }}
            >
              {/* Pulse dot */}
              <div style={{ flexShrink: 0, marginTop: '4px', position: 'relative', width: '10px', height: '10px' }} aria-hidden="true">
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--cyan)', opacity: 0.3, animation: 'hydra-ping 1.8s cubic-bezier(0,0,0.2,1) infinite' }} />
                <span style={{ position: 'absolute', inset: '2px', borderRadius: '50%', background: 'var(--cyan)' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 'clamp(0.78rem,1.1vw,0.86rem)', color: 'var(--heading)', marginBottom: '4px', letterSpacing: '0.04em' }}>
                  24/7 EMERGENCY HYDRA MACHINE REPAIR
                </p>
                <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.74rem,1vw,0.81rem)', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
                  When equipment downtime matters, get specialized repair support when you need it.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="#final-cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', borderRadius: 'var(--radius-pill)', background: 'linear-gradient(135deg,var(--primary-blue),var(--primary-blue-dark))', color: '#FFFFFF', fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: 'var(--shadow-glow)', transition: 'transform var(--transition-fast),box-shadow var(--transition-fast)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow-lg)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
              >
                Book a Consultation
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — service detail list ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}
              aria-label="Hydra machine repair service details"
            >
              {SERVICES.map(s => (
                <motion.li
                  key={s.id}
                  variants={itemReveal}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', paddingBottom: '18px', borderBottom: '1px solid rgba(0,136,255,0.08)', marginBottom: '18px' }}
                >
                  <span aria-hidden="true" style={{ flexShrink: 0, marginTop: '5px', width: '6px', height: '6px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--cyan),var(--primary-blue))' }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', color: 'var(--heading)', marginBottom: '4px' }}>
                      {s.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.78rem,1.1vw,0.85rem)', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
                      {s.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @keyframes hydra-ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @media (max-width: 900px) {
          .hydra-repair-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .hydra-repair-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
