const color = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: color.violet,
        dark: '#000000',
      },

      fontFamily: {
        sans: ['Noto Sans SC', ...defaultTheme.fontFamily.sans],
        mono: ['Recursive', ...defaultTheme.fontFamily.mono],
      },

      gridTemplateColumns: {
        'only-content': 'auto',
        'sidebar-content': '20rem auto',
        'sidebar-content-toc': '20rem auto 20rem',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
