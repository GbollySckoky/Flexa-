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
        grey: "E8EEFF",
        lightBlue: "#3D6FFF",
        lightblues: "#3267FE",
        Blue: "#2251D1"
      }
    },
  },
  plugins: [],
}