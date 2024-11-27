/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#0089C9",
      "light-blue": "#DDF0FF",
      yellow: "#F87316",
      orange: "#ff7849",
      "dark-green": "#19525A",
      green: "#19525A",
      "light-green": "#ECFDF3",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#595959",
      "light-gray": "#D0D5DD",
      red: "#FF2323",
      "light-dark": "#282828",
      "navy-blue": "#00B0AD",
      "dark-blue": "#0046B0",
      cream: "#FCF8EF",
      white: "#ffffff",
      black: "#000000",
    },

    extend: {},
  },
};
