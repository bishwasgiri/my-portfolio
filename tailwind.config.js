/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#e5eef9",
        secondary: "#93bfe6",
      },
      boxShadow: {
        'custom-light': '0 4px 15px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
