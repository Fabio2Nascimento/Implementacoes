const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
