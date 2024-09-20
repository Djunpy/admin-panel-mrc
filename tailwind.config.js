/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	theme: {
		extend: {
			colors: {
				'dark-purple': '#081A51',
				'light-white': 'rgba(255,255,255,0.17)',
			},
			keyframes: {
				move: {
					'0%, 49.99%': { opacity: '0', 'z-index': '1' },
					'50%, 100%': { opacity: '1', 'z-index': '5' },
				},
			},
			animation: {
				move: 'move 0.6s ease-in-out',
			},
		},
	},
	plugins: [],
}
