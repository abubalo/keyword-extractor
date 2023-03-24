/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors:{
        primary: "#EA80FC",
        hoverPrimary: "#FFB2FF",
        secondary: "#1F1F1F",
        background: "#121212"
      }
    },
  },
  plugins: [],
}
