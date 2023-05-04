/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx}", "./index.html"], 
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

