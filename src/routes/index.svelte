<script lang="ts">
	import Situaciones from '../componentes/Situaciones.svelte';
	import Hero from '../componentes/Hero.svelte';
	import Cta from '../componentes/Cta.svelte';
	import Presentacion from '../componentes/Presentacion.svelte';
	import Testimonios from '../componentes/Testimonios.svelte';
	import CtaTimer from '../componentes/CtaTimer.svelte';
	import Contenido from '../componentes/Contenido.svelte';
	import Faq from '../componentes/FAQ.svelte';
	import SEO from '../componentes/SEO/index.svelte';
	import website from '../componentes/SEO/website';
	import Footer from '../componentes/Footer.svelte';

	const { author, siteUrl } = website;

	let metadescription = 'Incrementa tu consulta webinar';

	let title = 'Bienvenido al Webinar';

	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		metadescription
	};
</script>

<SEO {...seoProps} />

<main>
	<Hero />
	<Situaciones />
	<Cta />
	<Presentacion />
	<Testimonios />
	<CtaTimer />
	<Contenido />
	<Faq />
	<Footer />
</main>
