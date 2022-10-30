/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body:"#F8EF02",
        "selected-text":"#A3A3FF",
        theme:"#5c318c"
      },
      backgroundImage:{
        'hero-img': "url('./src/images/header_bg.jpg')",
      }
    },
    fontFamily:{
      raleway:['Raleway', "sans-serif"],
    },
  },
  plugins: [],
}
