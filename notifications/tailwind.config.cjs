/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'primary-red': 'hsl(1, 90%, 64%)',
      'primary-blue': 'hsl(219, 85%, 26%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(210, 60%, 98%)',
      'light-grayish-1': 'hsl(211, 68%, 94%)',
      'light-grayish-2': 'hsl(205, 33%, 90%)',
      'grayish': 'hsl(219, 14%, 63%)',
      'dark-grayish': 'hsl(219, 12%, 42%)',
      'dark-blue': 'hsl(224, 21%, 14%)'
    },
  },
  plugins: [],
}
