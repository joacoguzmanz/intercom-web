/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'heroxl': '14rem',
        'hero2xl': '16rem'
      },
      keyframes: {
        'marqueeAnim': {
          '0%': { transform: 'translate3d(calc(-25%), 0, 0)' },
          '100%': { transform: 'translate3d(calc(-50%), 0, 0)' }
        }
      },
      animation: {
        'marquee': 'marqueeAnim'
      }
    },
  },
  plugins: [],
}
