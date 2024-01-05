/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      screens: {
        xs:"350px"
      }
    },
  },
  plugins: [require("daisyui")],
}
