/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        bg:      '#09090f',
        surface: '#0f0f1a',
        card:    '#13131f',
        border:  '#1e1e2e',
        border2: '#2a2a3e',
        muted:   '#6b7280',
        dim:     '#374151',
        violet:  { DEFAULT:'#8b5cf6', dark:'#7c3aed', glow:'rgba(139,92,246,0.35)' },
        fuchsia: { DEFAULT:'#d946ef', glow:'rgba(217,70,239,0.3)' },
        cyan:    { DEFAULT:'#22d3ee', glow:'rgba(34,211,238,0.25)' },
        rose:    { DEFAULT:'#f43f5e', glow:'rgba(244,63,94,0.3)' },
        amber:   { DEFAULT:'#f59e0b' },
      },
      backgroundImage: {
        'glow-violet': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'glow-fuchsia':'radial-gradient(ellipse at center, rgba(217,70,239,0.12) 0%, transparent 70%)',
        'card-shine':  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'float2':   'float 8s ease-in-out infinite reverse',
        'pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':  'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.34,1.4,0.64,1)',
        'fade-in':  'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34,1.4,0.64,1)',
        'spin-slow':'spin 8s linear infinite',
        'marquee':  'marquee 30s linear infinite',
      },
      keyframes: {
        float:    { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
        shimmer:  { '0%':{ backgroundPosition:'-200% 0' }, '100%':{ backgroundPosition:'200% 0' } },
        slideUp:  { from:{ opacity:'0', transform:'translateY(20px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:   { from:{ opacity:'0' }, to:{ opacity:'1' } },
        scaleIn:  { from:{ opacity:'0', transform:'scale(0.92)' }, to:{ opacity:'1', transform:'scale(1)' } },
        marquee:  { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } },
      },
      boxShadow: {
        'glow-v':  '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(139,92,246,0.15)',
        'glow-f':  '0 0 40px rgba(217,70,239,0.35)',
        'glow-c':  '0 0 30px rgba(34,211,238,0.3)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.2)',
      },
    }
  },
  plugins: [],
}

