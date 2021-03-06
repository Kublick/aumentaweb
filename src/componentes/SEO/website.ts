const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE : '';

const website = {
	author: 'Berenice Bastidas',
	ogLanguage: 'es_MX',
	siteLanguage: 'es-MX',
	siteTitle: 'Webinar Aumenta Pacientes',
	siteShortTitle: 'Webinar Aumenta Pacientes',
	siteUrl: import.meta.env ? /** @type {string} */ import.meta.env.VITE_SITE_URL : '',
	icon: 'static/favicon.png',
	contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	awsUrl: import.meta.env.VITE_AWS_URL,
	fbPixel: import.meta.env.VITE_FBOOK_PIXEL
};

export { website as default };
