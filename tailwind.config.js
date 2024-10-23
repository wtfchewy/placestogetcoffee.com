/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        mcqueen: "#130ABC",
        sally: "#cbc9fc",
        white: "#EFEFE9"
      },
    },
  },
  plugins: [],
}