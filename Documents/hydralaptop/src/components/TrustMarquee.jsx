/*
  TrustMarquee
  ─────────────
  Pure CSS infinite marquee. No JS animation library needed.
  Items are duplicated so the loop is seamless with no visible jump.
  The outer wrapper clips overflow without creating a page-level
  horizontal scrollbar.
*/

const ITEMS = [
  'Expert Technicians',
  'Genuine Parts',
  'Data Protection',
]

/* Dot separator between items */
function Dot() {
  return (
    <span
      aria-hidden="true"
      style={{
        display:      'inline-block',
        width:        '6px',
        height:       '6px',
        borderRadius: '50%',
        background:   'var(--cyan)',
        flexShrink:   0,
        opacity:      0.8,
      }}
    />
  )
}

/* Single item pill */
function Item({ label }) {
  return (
    <span
      style={{
        display:     'inline-flex',
        alignItems:  'center',
        gap:         '10px',
        whiteSpace:  'nowrap',
        padding:     '0 40px',
        fontFamily:  'var(--font-primary)',
        fontWeight:  'var(--weight-semibold)',
        fontSize:    'clamp(0.78rem, 1.1vw, 0.9rem)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color:       'var(--heading)',
      }}
    >
      <Dot />
      {label}
    </span>
  )
}

export default function TrustMarquee() {
  /* Duplicate the list ONCE — animation runs from 0 to -50% = one full copy */
  const displayItems = [...ITEMS, ...ITEMS]

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .trust-track {
          animation: marquee-scroll 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-track { animation: none !important; }
        }
      `}</style>

      <div
        style={{ width: '100%', overflow: 'hidden' }}
        aria-label="Trust highlights"
        role="marquee"
      >
        <div
          className="trust-track"
          style={{
            display:   'inline-flex',
            alignItems:'center',
            width:     'max-content',
            willChange:'transform',
          }}
          aria-hidden="true"
        >
          {displayItems.map((label, i) => (
            <Item key={i} label={label} />
          ))}
        </div>
      </div>
    </>
  )
}
