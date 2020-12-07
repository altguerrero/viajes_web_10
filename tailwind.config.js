module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: {
        light: "#F1B95B",
        dark: "#F0B24A",
      },
      secondary: {
        normal: "#606060",
        light: "#707070",
      },
      white: "#FFF",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
