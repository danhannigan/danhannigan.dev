module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-default": "#282A24",
        "background-dark": "#1A1B18",
        "background-accent": "#E8A920",
        "background-accent-neutral": "#766E6A",
        "background-accent-dark": "#43413C",
        "text-default": "#ffffff",
        "text-muted": "#91908B",
        "text-accent-weak": "#FBF6F1",
        accent: "#E8A920",
      },
      fontFamily: {
        secondary: ["Josefin Sans", "sans-serif"],
        primary: ["Lato", "sans-serif"],
        accent: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
