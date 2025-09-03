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
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }

      xxxl: "1600px",
      // => @media (min-width: 1600px) { ... }

      max3Xl: { max: "1800px" },
      // => @media (max-width: 1700px) { ... }

      max2Xl: { max: "1600px" },
      // => @media (max-width: 1600px) { ... }

      maxXl: { max: "1400px" },
      // => @media (max-width: 1200px) { ... }

      maxLg: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      maxMd: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      maxSm: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      maxXs: { max: "575px" },
      // => @media (max-width: 575px) { ... }
      maxXXs: { max: "450px" },
      // => @media (max-width: 450px) { ... }
    },
    container: {
      center: true,
    },
    fontFamily: {
      body: ["'Inter', sans-serif"],
      fontawesome: ["Font Awesome 6 Pro"],
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#5163FF',
        },
        secondary: {
          DEFAULT: '#FE71B9',
        },
        body: {
          DEFAULT: '#838A95',
        },
        heading: {
          DEFAULT: '#00234B',
        },
        dark: {
          DEFAULT: '#0C0129',
        },
      },
      keyframes: {
        'circular-text': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'circular-text': 'circular-text 15s linear infinite',
        'slide-text': 'slide-text 15s linear infinite',
      },
    },
  },
  plugins: [],
}