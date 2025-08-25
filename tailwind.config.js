/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        Inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#189DFE",
        dark: "#6E6E6E",
        gray: "#929292",
      },
    },
  },
  plugins: [],
};
