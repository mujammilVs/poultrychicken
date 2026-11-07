/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chicken Comb & Wattle Crimson Red Palette
        farm: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        // Chicken Beak & Legs Golden Amber Palette
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        // Feather White, Eggshell & Warm Ivory Palette
        cream: {
          50: '#fffdf9',
          100: '#faf6ee',
          200: '#f5ede0',
          300: '#ebdcc9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(136, 19, 55, 0.06), 0 2px 6px -2px rgba(136, 19, 55, 0.04)',
        'premium': '0 20px 40px -15px rgba(159, 18, 57, 0.18)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
