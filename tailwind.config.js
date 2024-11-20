/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#E0E0E0",
        "dark-gray": "#202020",
        'light-green': "#02ec0b",
        "dark-mode-red":"@FF0000"
      },
    },
  },
  plugins: [],
}

