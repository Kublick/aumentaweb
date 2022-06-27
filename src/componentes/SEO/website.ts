const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE : '';

const website = {
	author: 'Berenice Bastidas',
	ogLanguage: 'es_MX',
	siteLanguage: 'es-MX',
	siteTitle: 'Webinar Incrementa Pacientes',
	siteShortTitle: 'Webinar Incrementa Pacientes',
	siteUrl: import.meta.env ? /** @type {string} */ (import.meta.env.VITE_SITE_URL) : '',
	icon: 'static/favicon.png',
	contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName
};

export { website as default };
