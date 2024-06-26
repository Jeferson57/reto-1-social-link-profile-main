/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "Green": "hsl(75, 94%, 57%)",
      "White": "hsl(0, 0%, 100%)",
      "Grey": "hsl(0, 0%, 20%)",
      "Dark-Grey": "hsl(0, 0%, 12%)",
      "Off-Black": "hsl(0, 0%, 8%)"
    },
    fontFamily: {
      'Inter': ['Inter']
    }
  },
  plugins: [],
}