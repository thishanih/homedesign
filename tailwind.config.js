/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        proxima: ["proxima"],
        georgia: ["georgia"],
        georgia_italic: ["georgiaitalic"],
      },
    },
  },
  plugins: [],
};
