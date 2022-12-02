/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome": "url('../public/images/agency_bg.jpg')",
      },
    },
  },
  plugins: [],
}