/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF0F00",
        stars: "#FFB800",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
}

