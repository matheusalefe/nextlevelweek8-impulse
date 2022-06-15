/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300: '#996DFF',
          500: '#8257e6'
        },
        application: {
          800: '#09090A'
        }
      }
    },
  },
  plugins: [],
}