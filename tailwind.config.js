/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic Poultry Comb Crimson Red & Feather Neutral Palette
        farm: {
          50: '#faf9f6',   // clean feather ivory
          100: '#f4f2ee',  // soft eggshell neutral
          200: '#e8e5df',  // crisp neutral border
          300: '#d5d0c7',
          400: '#b0a99c',
          500: '#ef4444',
          600: '#dc2626',  // bright comb red
          700: '#b91c1c',  // rooster crimson
          800: '#991b1b',  // rich poultry red (primary button/brand)
          900: '#7f1d1d',  // deep poultry burgundy
          950: '#450a0a',  // dark ruby slate
        },
        // Chicken Beak & Legs Golden Corn Amber Palette
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
          50: '#ffffff',
          100: '#faf9f6',
          200: '#f5f3ee',
          300: '#eae6dd',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -2px rgba(15, 23, 42, 0.03)',
        'premium': '0 20px 40px -15px rgba(153, 27, 27, 0.16)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
