/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/script.js",
  ],
  theme: {
    screens: {
      md: "900px",
    },
    extend: {
      fontFamily: {
        body: ["Epilogue"]
      },
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      }
    },
  },
  plugins: [],
}

