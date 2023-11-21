/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        backgroudLight: "#f7f7f7",
        backgroundDark: "#212529",
        "dark-contrast": "#f8f9fa",
        "light-contrast": "#2b2d42",
        colorLight: "#ffffff",
        colorDark: "#212529",
      },
      maxWidth: {
        wrap: "1200px",
      },
      height: {
        header: "80px",
        footer: "80px",
        content: "calc(100vh - 160px)",
      },
      backgroundImage: {
        drinkingWater:
          "url('https://www.boredpanda.com/blog/wp-content/uploads/2020/02/women-dont-know-how-to-drink-water-stock-photos-63-5e579fdbc7ead__700.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
