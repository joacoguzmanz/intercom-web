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
      },
      colors: {
        'primary': '#FD5920',
      },
      boxShadow: {
        'nav': 'rgba(0, 0, 0, 0.1) 0px 8px 16px 0px',
      }
    },
  },
  plugins: [],
}
