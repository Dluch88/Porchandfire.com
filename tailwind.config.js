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
      },
    },
  },
  plugins: [],
};
