const defaultTheme = require('tailwindcss/defaultTheme');
let forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#64cbc9',
        coal: '#4a4f55',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'hover'],
    },
  },
  plugins: [forms],
};
