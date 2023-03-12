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
				black: {
					DEFAULT: '#0D1220',
				},
        blue: {
          DEFAULT: '#516178',
        },
				white: {
					DEFAULT: '#DBE2EC',
          dark: '#C0CBDA',
				},
			},
		},
	},
  plugins: [
  ],
}
