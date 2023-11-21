/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dark: "#21201f",
        light: "#f5f5f5",
        grey: "#a6a6a5",
        primary: "#1c85e8",
      },
      height: {
        header: "80px",
        footer: "80px",
        content: "calc(100vh - 160px)",
      },
      maxWidth: {
        wrap: "960px",
      },
      backgroundImage: {
        heroBanner: "url('../src/assets/img/hero-banner.jpg')",
        gridBigImg: "url('../src/assets/img/grid-big-img.jpg')",
      },
    },
  },
  plugins: [],
};
