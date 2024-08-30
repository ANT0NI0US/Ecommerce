/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "commonSection-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url('https://i.ibb.co/dDS4MWS/common-section.webp')",
      },
      colors: {
        "main-color": "#0e1013",
        "primary-color": "#88d07a",
        "secondary-color": "#163b48",
        "orange-color": "#c18500",
        "light-color": "#daf3ff",
        "card-bg-01": "#007c49",
        "card-bg-02": "#636568",
        "card-bg-03": "#3b212a",
        "card-bg-04": "#463323",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      gridScreen: "653px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
    },
  },
  plugins: [],
};
