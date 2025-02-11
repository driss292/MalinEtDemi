/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["font-anton"], // Empêche Tailwind de supprimer la classe
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
