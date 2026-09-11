/*
  RepairImageCarousel — full-width edge-to-edge strip
  ─────────────────────────────────────────────────────
  • Breaks out of any parent container via negative margins
  • Starts from the absolute left edge of the viewport
  • Scrolls smoothly left → right using CSS on the GPU
  • Images compressed to ~100-200KB so decoding is instant
*/

function PlaceholderPanel({ accent = 'Repair' }) {
  return (
    <div
      role="img"
      aria-label={`${accent} images coming soon`}
      style={{
        width: '100%', height: '240px',
        background: 'linear-gradient(135deg,#EBF4FF,#F8FBFF)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid rgba(0,136,255,0.15)',
        borderRadius: 'var(--radius-card)',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-primary)', fontWeight: 600,
        fontSize: '0.8rem', letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--primary-blue)', opacity: 0.6,
      }}>
        {accent} · Images Coming Soon
      </p>
    </div>
  )
}

function ScrollingStrip({ images, label }) {
  const track = [...images, ...images]
  const CARD_W   = 340
  const CARD_GAP = 8
  const halfPx   = images.length * (CARD_W + CARD_GAP)

  return (
    <>
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${halfPx}px); }
        }
        .carousel-strip {
          animation: marquee-ltr ${images.length * 3.5}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .carousel-strip { animation-play-state: paused; }
        }
      `}</style>

      {/*
        Full-width breakout wrapper.
        Uses 100vw + negative margins to escape any padded parent.
        overflow:hidden here so it never adds a page scrollbar.
      */}
      <div
        aria-label={label}
        style={{
          width:       '100vw',
          marginLeft:  'calc(-1 * ((100vw - 100%) / 2))',
          overflow:    'hidden',
          background:  '#0a1628',
          borderTop:    '1px solid rgba(0,136,255,0.15)',
          borderBottom: '1px solid rgba(0,136,255,0.15)',
        }}
      >
        {/* Track — starts at x=0 (left edge), animates left */}
        <div
          className="carousel-strip"
          style={{
            display:    'flex',
            width:      'max-content',
            willChange: 'transform',
            padding:    '12px 0',
          }}
        >
          {track.map((img, i) => (
            <div
              key={i}
              style={{
                width:       `${CARD_W}px`,
                height:      '240px',
                flexShrink:  0,
                marginRight: `${CARD_GAP}px`,
                borderRadius:'8px',
                overflow:    'hidden',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={CARD_W}
                height="240"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  display: 'block',
                  userSelect: 'none', pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function RepairImageCarousel({
  images = [],
  accent = 'Repair',
  label  = 'Repair image gallery',
}) {
  if (!images || images.length === 0) {
    return <PlaceholderPanel accent={accent} />
  }
  return <ScrollingStrip images={images} label={label} />
}
