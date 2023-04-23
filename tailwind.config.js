/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#94DBFB',
          DEFAULT: '#29B6F6',
          dark: '#199EF2',
        },
        secondary: {
          light: '#C7E9EE',
          DEFAULT: '#AFDFE7',
          dark: '#96D2DD',
        },
        tertiary: {
          light: '#C8DDFF',
          DEFAULT: '#B0CEFF',
          dark: '#97BCFF',
        },
        quaternary: {
          light: '#8292E5',
          DEFAULT: '#4C63DA',
          dark: '#3347CB',
        },
        white: {
          light: '#FDFDFC',
          DEFAULT: '#FAFAF9',
          dark: '#F8F8F6',
        },
        black: colors.black,
        gray: colors.gray,
      },
    },
  },
  plugins: [],
});
