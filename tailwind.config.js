/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'dark-pattern':
          "linear-gradient(to bottom, rgb(43, 108, 176, 0), rgb(31,41,55)), url('../sky.jpeg')",
        'dark-pattern1':
        "linear-gradient(to top, rgb(43, 108, 176, 0), rgb(31,41,55)), url('../sky.jpeg')",
        'light-pattern':
          "linear-gradient(to bottom, rgb(43, 108, 176, 0), rgb(243,244,246)), url('../cloud.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};

