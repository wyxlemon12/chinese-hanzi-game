/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oat: '#FFF8EF',
        cream: '#FDF6E3',
        'tian-zi': '#F5EFE0',
        'jelly-yellow': '#FFD93D',
        'jelly-blue': '#6ECFFF',
        'jelly-pink': '#FF8FA3',
        'mint-green': '#E8F5E9',
        'bubble-white': '#FFFFFF',
        'bubble-ai': '#C3F0CA',
        'tianzi-bg': '#F5EFE0',
      },
      fontFamily: {
        round: ['Varela Round', 'Quicksand', 'sans-serif'],
        chinese: ['Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'jelly': '0 4px 14px 0 rgba(0,0,0,0.1), 0 2px 6px 0 rgba(0,0,0,0.06)',
        'jelly-lg': '0 8px 24px 0 rgba(0,0,0,0.12), 0 4px 12px 0 rgba(0,0,0,0.08)',
      },
      animation: {
        'bounce-sm': 'bounceSm 0.6s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        bounceSm: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
