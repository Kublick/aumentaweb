<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'GTM-NB8XTTR', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NB8XTTR">
	</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-EG7FM0BJFH"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'GTM-NB8XTTR');
		gtag('config', 'G-EG7FM0BJFH');
	</script>
</svelte:head>
