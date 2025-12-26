/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#c92925',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        dark: {
          DEFAULT: '#280B08',
          50: '#f7f5f4',
          100: '#ede9e7',
          200: '#d9d0cd',
          300: '#c5b7b3',
          400: '#8d7c78',
          500: '#554441',
          600: '#3d312f',
          700: '#280B08',
          800: '#1f0806',
          900: '#160604',
        },
        cream: {
          DEFAULT: '#F9E7C9',
          50: '#fffbf5',
          100: '#fef7eb',
          200: '#fef0d7',
          300: '#fde9c3',
          400: '#fbe2af',
          500: '#F9E7C9',
          600: '#f8d9a5',
          700: '#f6cb81',
          800: '#f4bd5d',
          900: '#f2af39',
        },
      },
    },
  },
  plugins: [],
}
