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

      // max3Xl: { max: "1800px" },
      // // => @media (max-width: 1700px) { ... }

      // max2Xl: { max: "1600px" },
      // // => @media (max-width: 1600px) { ... }

      // maxXl: { max: "1400px" },
      // // => @media (max-width: 1200px) { ... }

      // maxLg: { max: "1200px" },
      // // => @media (max-width: 1200px) { ... }

      // maxMd: { max: "991px" },
      // // => @media (max-width: 991px) { ... }

      // maxSm: { max: "767px" },
      // // => @media (max-width: 767px) { ... }

      // maxXs: { max: "575px" },
      // // => @media (max-width: 575px) { ... }
      // maxXXs: { max: "450px" },
      // // => @media (max-width: 450px) { ... }

      // minMax4Xl: { min: "1801px", max: "1900px" },
      // // => @media (min-width: 1601px) and (max-width: 1800px) { ... }
      // minMax3Xl: { min: "1601px", max: "1800px" },
      // // => @media (min-width: 1601px) and (max-width: 1800px) { ... }

      // minMax2Xl: { min: "1401px", max: "1600px" },
      // // => @media (min-width: 1401px) and (max-width: 1600px) { ... }

      // minMaxXl: { min: "1201px", max: "1400px" },
      // // => @media (min-width: 1201px) and (max-width: 1400px) { ... }

      // minMaxLg: { min: "992px", max: "1200px" },
      // // => @media (min-width: 992px) and (max-width: 1200px) { ... }

      // minMaxMd: { min: "768px", max: "991px" },
      // // => @media (min-width: 768px) and (max-width: 991px) { ... }

      // minMaxSm: { min: "576px", max: "767px" },
      // // => @media (min-width: 576px) and (max-width: 576px) { ... }
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
        // gradientPrimary: {
        //   DEFAULT: 'linear-gradient(90deg, #6C5FFC 0%, #003cff 100%)',
        //   dark: 'linear-gradient(90deg, #4C51BF 0%, #2C5282 100%)',
        // },
      },
      // backgroundImage: {
      //   gradientPrimary: "linear-gradient(90deg, #6C5FFC 0%, #003cff 100%)",
      //   gradientSecondary: "linear-gradient(90deg, #FF6339 0%, #FF2259 100%)",
      // },
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