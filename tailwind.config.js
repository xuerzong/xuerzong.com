const color = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: color.sky,
        dark: '#35363A',
      },

      fontFamily: {
        mono: ['Recursive', ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
