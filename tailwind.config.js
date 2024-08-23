/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["AvenirBold", "AvenirRegular"],
        roboto: ["Roboto", "sans-serif"],
        worksans: ["Work Sans"],
      },
      colors: {
        bgColor: "#ffffff",
        color1: "#213f7d",
        color2: "#39cdcc",
        color3: "#33afaf",
        color4: "#d93025",
        color5: "#fbfbfb",
        color6: "#f3fcfc",
        color7: "#7a8cb1",
        color8: "#545f7d",
        color9: "#213f7d1a",
        colorX: "#545f7d26",
        colorXI: "#e4033b",
        colorXII: "#e9ecf2"
      },
    },
    screens: {
      lit: { max: "300px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
