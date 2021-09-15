module.exports = {
  purge: [
    './src/Resources/Views/**/*.edge',
    './src/Resources/Ts/**/*.ts',
    './src/Resources/Ts/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
