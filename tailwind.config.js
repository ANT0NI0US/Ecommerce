/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "commonSection-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url('https://i.ibb.co/dDS4MWS/common-section.webp')",
      },
      colors: {
        "card-bg-01": "#fdefe6",
        "card-bg-02": "#d6e5fb",
        "card-bg-03": "#ceebe9",
        "card-bg-04": "#e2f2b2",
        "primary-color": "#f97316",
        "secondary-color": "#54433a",
        "light-gray": "#bca79c",
        "medium-gray": "#00ba9a",
        "dark-gray": "#008267",
        "hero-bg": "#d6e5fb",
        "small-text-color": "#999",
        "heading-text-color": "#0a1d37",
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
