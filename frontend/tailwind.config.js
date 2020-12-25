module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      0: '0',

      '1/4': '25%',

      '1/2': '50%',

      '3/4': '75%',

      full: '100%',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      black: '#121212',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
