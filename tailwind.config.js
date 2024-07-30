const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      fontFamily: {
        sans: ["", ...defaultTheme.fontFamily.sans],
        times: ["Times New Roman"],
        roboto: ["Roboto"],
      },
    },
    colors: {
      primary: "#f2f2f2",
      secondary: "#01058D",
      white: "#ffffff",
      green: "#01d531",
      grey : "#595977",
      black: "#000000",
      cyan: "#00B4D8",
      blue: "#0052D4",
      red: "#FF6B6B",
      yellow: "#FFD166",
      teal: "#118AB2",
      pink: "#FF98A8",
      purple: "#94618E",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    fontSize: {
      sm: '0.8rem',  //12.8px
      base: '1rem', //16px
      xl: '1.25rem',  //20px
      '2xl': '2.813rem',  //45px
      '4xl': '5.438rem',  //87px
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
