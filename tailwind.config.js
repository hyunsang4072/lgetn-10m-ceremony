/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      colors: {
        'lg-red': '#ED1C24',
        'lg-dark-red': '#C60036',
        'deep-onyx': '#09090B',
        'zinc-gray': '#27272A',
        'champagne-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(140, 20, 40, 0.10)',
        'glass-hover': '0 12px 40px 0 rgba(140, 20, 40, 0.16)',
        'glow-red': '0 6px 24px rgba(237, 28, 36, 0.35)',
        'glow-gold': '0 0 22px rgba(212, 175, 55, 0.45)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
