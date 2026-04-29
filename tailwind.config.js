/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marvelRed: "#ed1d24",
        marvelDark: "#151515",
        paper: "#f3ece0" 
      },
      fontFamily: {
        impact: ["Impact", "Haettenschweiler", "sans-serif"]
      }
    }
  },
  plugins: []
};
