/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      outlineOffset: {
        3: '3px',
      }
    },
  },
  plugins: [],
}

