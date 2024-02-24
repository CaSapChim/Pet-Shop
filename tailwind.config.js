/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primarycolor": "#7AB730",
        "secondarycolor": "#FFD33C",
      }
    },
  },
  plugins: [],
} 