/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#232432",
        "secondary": "#00DF70",
        "button": "#191924"
      }
    },
  },
  plugins: [],
}