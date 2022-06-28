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
	import { onMount } from 'svelte';

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
		entityMeta,
		metadescription
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			function pixel(f?: any, b?: any, e?: any, v?: any, n?: any, t?: any, s?: any) {
				if (f.fbq) return;
				n = f.fbq = function () {
					n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
				};
				if (!f._fbq) f._fbq = n;
				n.push = n;
				n.loaded = !0;
				n.version = '2.0';
				n.queue = [];
				t = b.createElement(e);
				t.async = !0;
				t.src = v;
				s = b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t, s);
				f.fbq('init', '227610218315785');
				// f.fbq('track', 'PageView');
				f.fbq('track', 'ViewContent');
			}

			pixel(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		}
	});
</script>

<img
	height="1"
	width="1"
	style="display:none"
	src="https://www.facebook.com/tr?id=227610218315785&ev=PageView&noscript=1"
	alt=""
/>
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
</main>
