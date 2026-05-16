/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:  '#F59E0B',   // Electric Amber — main accent, CTAs, icons
          hover:    '#D97706',   // Deep Amber — hover states
          glow:     '#FBBF24',   // Gold — highlights, text gradients
          dark:     '#07080F',   // Deep Navy-Black — page background
        },
        cta: {
          whatsapp: '#F59E0B',
          hover:    '#D97706',
        },
        surface: {
          base:     '#07080F',   // Global page background
          card:     '#0D0E1C',   // Card surface — subtle navy tint
          elevated: '#15162A',   // Premium / elevated card
        },
        text: {
          heading: '#FFFFFF',
          body:    '#94A3B8',    // Cool slate — refined and modern
          muted:   '#64748B',
        },
      },
      boxShadow: {
        // Amber-tinted shadow system
        'card-base':    '0 2px 12px rgba(245,158,11,0.06)',
        'card-hover':   '0 8px 32px rgba(245,158,11,0.14)',
        'card-premium': '0 16px 48px rgba(245,158,11,0.22)',
        'cta-hover':    '0 8px 28px rgba(245,158,11,0.30)',
        'cta-heavy':    '0 10px 40px rgba(245,158,11,0.35)',
        'cta-secondary':'0 8px 20px rgba(245,158,11,0.20)',
        // Glow effects
        'amber-glow':   '0 0 32px rgba(245,158,11,0.25)',
        'amber-glow-lg':'0 0 60px rgba(245,158,11,0.20)',
      },
      animation: {
        'cta-glow':    'cta-glow 2.5s ease-in-out infinite',
        'shimmer':     'shimmer 3.5s ease-in-out infinite',
        'marquee':     'marquee 28s linear infinite',
        'float':       'float 4s ease-in-out infinite',
        'hero-bg':     'heroBgZoom 1.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-up-in':  'fadeUpIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        'cta-glow': {
          '0%,100%': { boxShadow: '0 0 20px rgba(245,158,11,0.30), 0 8px 32px rgba(245,158,11,0.20)' },
          '50%':     { boxShadow: '0 0 44px rgba(245,158,11,0.55), 0 8px 40px rgba(245,158,11,0.40)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '60%,100%': { transform: 'translateX(200%)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms',
      },
      scale: {
        '98': '.98',
        '102': '1.02',
        '105': '1.05',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
