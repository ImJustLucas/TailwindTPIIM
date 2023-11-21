/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "dark-100": "#18181a",
        "dark-80": "#292227",
        "light-100": "#fafafa",
        "light-80": "#f4f4f5",
        "grey-100": "#3f3f45",
        "grey-80": "#a7a7aa",
        "grey-20": "#eaeafa",
        "red-100": "#a90f52",
        "red-40": "#da6d9c",
        "red-20": "#fbe7f2 ",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
