/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Comfortaa', 'cursive'],
      },
      gridTemplateColumns: {
        '70-30': '68.7% 28.7%'
      },
    },
  },
  plugins: [],
}

