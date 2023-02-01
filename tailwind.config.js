/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto'],
      },
      colors: {
        primary: '#19CC95',
        secondary: '#2C7EF9',
        dark: '#253858',
        grey: '#606266',
        lightgrey: '#F2F2F2',
        mediumgrey: '#F7F9FA',
        pillgrey: '#EFEFEF',
        accentgrey: '#CDCDCD',
        lightblue: '#BAD6FF'
      },
      fontSize:{
        xl: '24px'
      }
    },
  },
  plugins: [],
}
