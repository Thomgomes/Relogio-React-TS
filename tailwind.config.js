/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
        '6': '6',
      },
      colors: {
        'custon-black': "#0B0816",
        'custon-purple': "#281C62",
      }
    },
  },
  plugins: [],
}
