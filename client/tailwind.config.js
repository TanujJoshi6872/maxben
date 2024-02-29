/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a53f3f",
      },
    },
  },
  plugins: [],
    corePlugins: {
      preflight: false,
    }
}