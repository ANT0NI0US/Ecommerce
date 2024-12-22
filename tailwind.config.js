/** @type {import('tailwindcss').Config} */
export default {
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
        "card-bg-01": "#007c49",
        "card-bg-02": "#636568",

        "light-color": "#daf3ff",
        "primary-color-light": "#253b45",
        "secondary-color-light": "#a3ffce",
        "orange-color-light": "#f39530",
        "card-bg-01-light": "#98afba",
        "card-bg-02-light": "#ccb29e",
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
