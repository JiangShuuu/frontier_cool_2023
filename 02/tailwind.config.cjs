/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
		extend: {
			colors: {
				pink: {
					DEFAULT: '#FA90A0',
				},
        blue: {
          DEFAULT: '#516178',
          dark: '#0D1220'
        },
				white: {
					DEFAULT: '#DBE2EC',
          dark: '#C0CBDA',
				},
        gray: {
					DEFAULT: '#DCE2E8',
				},
			},
		},
	},
  plugins: [
  ],
}
