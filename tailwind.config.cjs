/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome": "url('/images/agency-bg.jpg')",
        "error-400": "url('/images/error-400-bg.jpg')",
      },
    },
  },
  plugins: [],
}