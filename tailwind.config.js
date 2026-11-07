/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          50: '#f3f8f4',
          100: '#e3efe6',
          200: '#c8e0ce',
          300: '#9ec9a8',
          400: '#6ea97d',
          500: '#488c5a',
          600: '#367246',
          700: '#2c5b39',
          800: '#1c3d26',
          900: '#142d1c',
          950: '#0a170e',
        },
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
        cream: {
          50: '#fdfdfb',
          100: '#faf8f2',
          200: '#f5f2e7',
          300: '#eae4d3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 24, 40, 0.05), 0 2px 6px -2px rgba(16, 24, 40, 0.03)',
        'premium': '0 20px 40px -15px rgba(28, 61, 38, 0.12)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
