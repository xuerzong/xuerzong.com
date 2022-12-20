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
        sans: ['Noto Sans SC', ...defaultTheme.fontFamily.sans],
        mono: ['Recursive', ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
