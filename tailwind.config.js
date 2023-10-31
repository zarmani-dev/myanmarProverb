/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./views/*.ejs"
  ],
  theme: {
    extend: {
      fontFamily: {
        'walone': ['Z06-Walone']
      },
    },
  },
  plugins: [],
}
