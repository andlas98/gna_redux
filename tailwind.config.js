/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'ping-once': 'fade 4s linear',
        'fade-in': 'fade 1s ease-in-out',
      },
      colors: {
        "light-gray": "#E0E0E0",
        "dark-gray": "#202020",
        'light-green': "#02ec0b",
        "dark-mode-red":"#FF0000",
        "almost-black": "#0B0B0B",
        "dark-mode-red-text":"#FF8989",
      },
    },
  },
  plugins: [],
}
