/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "778px",
        lg: "960px",
        lgl: "1000px",
        xl: "1280px",
      },
      colors: {
        marineBlue: '#02295a',
        lightBlue: '#bfe2fd',
        lightGray: '#d6d9e6',
        coolGray: '#9699ab',
        magnolia: '#eff5ff'
      },
      fontFamily: {
        body: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}