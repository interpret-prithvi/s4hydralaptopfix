/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },

      // ── Brand Colors ─────────────────────────────────────────
      colors: {
        'primary-blue':      '#0088FF',
        'primary-blue-dark': '#0066FF',
        'cyan-accent':       '#38BDF8',
        'bg-light':          '#F0F7FF',
        'heading':           '#0F172A',
        'body':              '#475569',
      },

      // ── Border ───────────────────────────────────────────────
      borderColor: {
        'brand': 'rgba(0, 136, 255, 0.15)',
      },

      // ── Border Radius ─────────────────────────────────────────
      borderRadius: {
        'pill': '9999px',
        'card': '16px',
      },

      // ── Box Shadow / Glow ─────────────────────────────────────
      boxShadow: {
        'glow-sm': '0 0 16px rgba(0, 136, 255, 0.20)',
        'glow':    '0 0 32px rgba(0, 136, 255, 0.28)',
        'glow-lg': '0 0 64px rgba(0, 136, 255, 0.34)',
      },

      // ── Transitions ───────────────────────────────────────────
      transitionDuration: {
        'standard': '250ms',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      // ── Background gradients ──────────────────────────────────
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0088FF 0%, #0066FF 100%)',
        'page-bg':        'linear-gradient(135deg, #F0F7FF 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
