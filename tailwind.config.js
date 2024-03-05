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
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(-20px)' },
        },
        fadeDown: {
          '0%': { opacity: 1, transform: 'translateY(-20px)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        showDetails: {
          '0%': { opacity: 0, transform: "translateY(20px)" },
          '100%': { opacity: 1, transform: "translateY(0)" },
        }
      },
      animation: {
        fadeUp: "fadeUp .3s linear",
        fadeDown: "fadeDown .4s linear",
        showDetails: "showDetails .4s ease-in-out"
      },
    },
  },
  plugins: [],
} 