/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#E92928',
        'secondary' : '#A3AED0',
        'tertiary' : '#2B3674'
      }
    },
  },
  plugins: [],
}

