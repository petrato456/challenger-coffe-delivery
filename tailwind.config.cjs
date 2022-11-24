/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#c47f17",
        "yellow-normal": "#dbac2c",
        "yellow-light": "#f1e9c9",
        "purple-dark": "#4b2995",
        "purple-normal": "#8047f8",
        "purple-light": "#ebe5f9",
        "base-card": '#F3F2F2',
        "base-button": '#E6E5E5',
        "base-subtitle": '#403937',
        "base-label": '#8D8686',
        "base-hover": '#D7D5D5',
        "base-text": "#574F4D"
      },
      fontFamily: {
        Main: "Roboto",
      },
      container: {
        screens: {
          '2xl': { 'min': '1265px' }
        }
      },
    },
  },
  plugins: [],
};
