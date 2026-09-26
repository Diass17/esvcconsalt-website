/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#627d98',
          500: '#486581',
          600: '#334e68',
          700: '#243b53',
          800: '#16263d',
          900: '#0d1a2b',
          950: '#070f1c',
        },
        steel: {
          50: '#f4f6f8',
          100: '#e3e8ed',
          200: '#c7d0da',
          300: '#a3b2c2',
          400: '#7d8fa3',
          500: '#5e7286',
          600: '#4a5b6e',
          700: '#3d4b5b',
          800: '#2e3946',
          900: '#1f2731',
          950: '#131820',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
