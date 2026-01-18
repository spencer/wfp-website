/** @type {import('tailwindcss').Config} */
const path = require("path");

module.exports = {
  content: [
    "./src/**/*.{html,js,njk}",
    "./src/content/**/*.{html,js,njk}",
    "./src/assets/views/**/*.{html,js,njk}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
