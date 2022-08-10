<script lang="ts">
	import Analytics from '$lib/Analytics.svelte';

	import '../app.css';
	import website from '../componentes/SEO/website';

	const { fbPixel } = website;

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
			f.fbq('init', fbPixel);
			f.fbq('track', 'PageView');
		}
		pixel(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
	}
</script>

<Analytics />

<!-- <img
	height="1"
	width="1"
	style="display:none"
	src="https://www.facebook.com/tr?id=227610218315785&ev=PageView&noscript=1"
	alt=""
/> -->

<slot />
