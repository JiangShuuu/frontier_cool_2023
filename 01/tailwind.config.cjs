/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#5139F2',
					light: '#B3ABF9',
					shallower: '#444444',
				},
				gray: {
					DEFAULT: '#DCE2E8',
				},
				blue: {
					DEFAULT: '#C8ECE8',
				},
				red: {
					DEFAULT: '#ff3b3f',
				},
			},
		},
	},
	plugins: [],
};
