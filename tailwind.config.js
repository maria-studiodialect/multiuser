/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green:'#7AF39F',
        light: '#E8EBEC', 
      },
      borderRadius: {
        '3xl': '1rem',
      }, 
      dropShadow: {
        'black': '0 10px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(green)/,
    },
  ],
}
