const color = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: color.blue,
        dark: '#35363A',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
