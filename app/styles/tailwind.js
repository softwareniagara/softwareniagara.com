const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwind-css-variables')({
      screens: '',
      fontFamily: 'font',
      fontSize: 'text',
      fontWeight: 'font',
      gap: 'gap',
      gridColumn: 'col',
      gridTemplateColumns: 'grid-cols',
      lineHeight: 'leading',
      letterSpacing: 'tracking',
      backgroundSize: 'bg',
      borderWidth: 'border',
      borderRadius: 'rounded',
      width: 'w',
      height: 'h',
      minWidth: 'min-w',
      minHeight: 'min-h',
      maxWidth: 'max-w',
      maxHeight: 'max-h',
      padding: 'p',
      margin: 'm',
      boxShadow: 'shadows',
      zIndex: 'z',
      opacity: 'opacity',
    }),
  ],
}
