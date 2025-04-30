/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        brand1:     '#00ffd1',
        brand2:     '#0098ff',
        brand3:     '#5f00ff',
      },
      keyframes: {
        'blob-cycle': {
          '0%,100%': { transform: 'translate(-50%,-50%) scale(1) rotate(0deg)' },
          '50%':      { transform: 'translate(-50%,-50%) scale(1.25) rotate(180deg)' },
        },
      },
      animation: {
        blob: 'blob-cycle 28s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}