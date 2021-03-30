module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F3F8FB',
     }),
    extend: {
      spacing: {
        150: '37.5rem'
      }, 
      screens: {
        '2xl': '1536px'
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
          '"Poppins"',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
