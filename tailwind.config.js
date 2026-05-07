/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblue: "#404258",
        darkmid: "#474E68",
        darkgray: "#50577A",
        darklight: "#6B728E",
      },
    },
  },
  plugins: [],
};
