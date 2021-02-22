const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './pages-lib/**/*.js', './layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			yellow: colors.yellow,
			red: colors.red,
			green: colors.green,
			pink: colors.pink,
			orange: colors.orange,
			indigo: colors.indigo,
			'light-blue': colors.lightBlue,
			teal: colors.teal,
			cyan: colors.cyan,
			rose: colors.rose,
			orange: colors.orange,
			blue: colors.blue
		}
	},
  variants: {
    extend: {
			opacity: ['disabled'],
			cursor: ['hover', 'focus', 'disabled'],
			backgroundColor: ['disabled'],
    }
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
