/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2190px",
        "4xl": "2268px",
        "5xl": "1975px",
        "6xl": "2077px",
      },
    },
  },
  plugins: [],
};
