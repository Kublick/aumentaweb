const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#2B4570',
				secondary: '#fbb923',
				secondarylight: '#fbc527',
				whatsapp: '#35B624',
				lightgray: '#383838',
				facebook: '#1877f2',
				webinar: 'rgb(231, 64, 123)'
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
			}
		}
	},

	plugins: []
};

module.exports = config;
