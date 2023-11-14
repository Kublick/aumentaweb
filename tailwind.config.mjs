/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2B4570',
				secondary: '#fbb923',
				secondarylight: '#fbc527',
				whatsapp: '#35B624',
				lightgray: '#383838',
				facebook: '#1877f2',
				webinar: 'rgb(231, 64, 123)',
				greenbutton: 'rgb(131, 201, 45)'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			fontSize: {
				44: '2.75rem',
				27: '1.6875rem',
				93: '5.8125rem'
			},
			spacing: {
				100: '25rem'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 100 }
				},


					


			},
			animation: {
				fadeIn: 'fadeIn 0.2s ease-in-out forwards'
			}
			
		},
	},
	plugins: [],
}
