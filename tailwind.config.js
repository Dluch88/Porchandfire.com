/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        sage: {
          50:  '#f4f7f4',
          100: '#e3ebe3',
          200: '#c7d7c8',
          300: '#9dbba0',
          400: '#6d9872',
          500: '#4a7a50',
          600: '#38613e',
          700: '#2d4e33',
          800: '#263f2b',
          900: '#203525',
        },
        cream: '#faf8f3',
        charcoal: '#1e2420',
        terracotta: {
          DEFAULT: '#c67a4a',
          50: '#fdf3ed',
          100: '#fbe4d4',
          200: '#f5c6a8',
          300: '#efa47a',
          400: '#c67a4a',
          500: '#b5693c',
          600: '#9a5432',
          700: '#7d422a',
          800: '#653526',
          900: '#543024',
        },
        clay: '#c9b99a',
      },
    },
  },
  plugins: [],
};
