<script lang="ts">
	import website from './website';

	const VERTICAL_LINE_ENTITY = '\u007c'; // |

	const { siteTitle, siteUrl } = website;

	export let metadescription = '';
	export let slug;

	export let title;

	// imported props with fallback defaults

	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	const url = `${siteUrl}/${slug}`;

	

</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>
