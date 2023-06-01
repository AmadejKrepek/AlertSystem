module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan_200: "#85d6d9",
        cyan_A200: "#15f0ff",
        white_A700_7d: "#ffffff7d",
        red_700: "#e91d1d",
        blue_gray_600: "#51616f",
        teal_900: "#00325d",
        blue_gray_800: "#2a4a67",
        gray_200: "#eeebeb",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
