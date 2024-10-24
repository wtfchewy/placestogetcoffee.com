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
        mcqueen: "#B17457",
        sally: "#D8D2C2",
        white: "#FAF7F0"
      },
    },
  },
  plugins: [],
}