import { motion } from 'framer-motion'
import RepairImageCarousel from '../components/RepairImageCarousel'

import l1 from '../assets/laptop-repair/1.jpg'
import l2 from '../assets/laptop-repair/2.jpg'
import l3 from '../assets/laptop-repair/3.jpg'
import l4 from '../assets/laptop-repair/4.jpg'
import l5 from '../assets/laptop-repair/5.jpg'
import h1 from '../assets/hydra-repair/1.jpg'
import h2 from '../assets/hydra-repair/2.jpg'
import h3 from '../assets/hydra-repair/3.jpg'
import h4 from '../assets/hydra-repair/4.jpg'
import h5 from '../assets/hydra-repair/5.jpg'

/* Interleaved laptop + hydra images */
const MIXED_IMAGES = [
  { src: l1, alt: 'Laptop repair' },
  { src: h1, alt: 'Hydra facial machine repair' },
  { src: l2, alt: 'Laptop screen repair' },
  { src: h2, alt: 'Hydra machine service' },
  { src: l3, alt: 'Laptop component repair' },
  { src: h3, alt: 'Hydra facial device' },
  { src: l4, alt: 'Laptop motherboard repair' },
  { src: h4, alt: 'Hydra machine electronics' },
  { src: l5, alt: 'Laptop hardware upgrade' },
  { src: h5, alt: 'Hydra machine maintenance' },
]

const SERVICES = [
  { id: 1, title: 'Screens & Displays',          description: 'Cracked, flickering, damaged or non-functioning LCD/LED displays.' },
  { id: 2, title: 'Hinges & Body Rework',         description: 'Broken hinges, cracked casings, bezels and damaged bottom cases.' },
  { id: 3, title: 'Motherboard & Chip-Level Fixes', description: 'Power issues, dead laptops, component-level faults and liquid-spill-related motherboard problems.' },
  { id: 4, title: 'Liquid Damage Recovery',       description: 'Deep cleaning, component-level motherboard repair and corrosion prevention after liquid exposure.' },
  { id: 5, title: 'Performance Upgrades',         description: 'SSD and RAM upgrades, thermal servicing and thermal-paste re-application.' },
  { id: 6, title: 'Battery & Charging Solutions', description: 'Battery replacement, swollen batteries and faulty or loose DC charging jacks.' },
  { id: 7, title: 'Keyboard & Touchpad',          description: 'Missing keys, ghost typing, sticky/unresponsive keys and faulty trackpads.' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const serviceItem = {
  hidden:  { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ServiceRow({ title, description }) {
  return (
    <motion.li
      variants={serviceItem}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '14px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(0,136,255,0.08)',
      }}
    >
      <span aria-hidden="true" style={{
        flexShrink: 0, marginTop: '5px',
        width: '7px', height: '7px', borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary-blue), var(--cyan))',
      }} />
      <div>
        <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', color: 'var(--heading)', marginBottom: '3px' }}>
          {title}
        </p>
        <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.78rem,1.1vw,0.85rem)', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </motion.li>
  )
}

export default function LaptopRepair() {
  return (
    <section
      id="laptop-repair"
      aria-labelledby="laptop-repair-heading"
      style={{ width: '100%', background: '#FFFFFF', overflow: 'hidden' }}
    >
      {/* Top border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      {/* ── Full-width carousel strip ── sits above content, edge to edge */}
      <div style={{ paddingTop: 'clamp(48px, 7vw, 80px)' }}>
        <RepairImageCarousel
          images={MIXED_IMAGES}
          accent="Laptop Repair"
          label="Laptop and Hydra repair image gallery"
        />
      </div>

      {/* ── Content below carousel ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(64px, 9vw, 112px)' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}
          className="laptop-repair-grid"
        >

          {/* LEFT — heading + copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.68rem,1vw,0.78rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary-blue)', margin: 0 }}>
              Repair Services
            </motion.p>

            <motion.h2 id="laptop-repair-heading" variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--heading)', margin: 0 }}>
              Laptop Repair
            </motion.h2>

            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 'clamp(0.9rem,1.4vw,1rem)', lineHeight: 1.75, color: 'var(--body)', margin: 0 }}>
              From cracked screens and broken hinges to motherboard issues, liquid damage and performance upgrades — we diagnose the problem and get your laptop working properly again.
            </motion.p>

            {/* STUCK callout */}
            <motion.div variants={fadeUp} style={{ padding: '14px 18px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg,rgba(0,136,255,0.06),rgba(56,189,248,0.06))', border: '1px solid rgba(0,136,255,0.15)' }}>
              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'clamp(0.8rem,1.1vw,0.88rem)', color: 'var(--heading)', margin: 0, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--primary-blue)' }}>STUCK?</span>{' '}
                Cracked screen, virus, slow performance, liquid spill? We fix it all.
              </p>
            </motion.div>

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

          {/* RIGHT — service list */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}
            aria-label="Laptop repair services"
          >
            {SERVICES.map(s => <ServiceRow key={s.id} title={s.title} description={s.description} />)}
          </motion.ul>

        </div>
      </div>

      {/* Bottom border */}
      <div aria-hidden="true" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,136,255,0.2),transparent)' }} />

      <style>{`
        @media (max-width: 900px) {
          .laptop-repair-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .laptop-repair-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
