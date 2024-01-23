/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#000000",
        white: "#FFFFFF",
        yellows: "#FFE145",
        grey: "#E8EEFF",
        lightBlue: "#233B65",
        lightblues: "#0B2960",
        Blue: "#114095",
        primaryBlue: "#6F94FF",
      lightGold:"#FFE145"
      }
    },
  },
  plugins: [],
}