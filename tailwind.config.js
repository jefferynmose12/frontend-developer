/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#90EE90',
        'Bright-Red': '#F25F3A',
        'Dark-Blue': '#242D52',
        'Dark-Grayish-Blue': '#9095A7',
        'Very-Dark-Blue': '#1D1E25',
        'Very-Pale-Red': '#FFEFEB',
        'Vary-Light-Gray': '#FAFAFA',
      },
    },
  },
  plugins: [],
}