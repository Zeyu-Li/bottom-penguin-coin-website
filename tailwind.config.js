module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2D5BFF",
        secondary: "#211F79",
        button: "#A5FAFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
