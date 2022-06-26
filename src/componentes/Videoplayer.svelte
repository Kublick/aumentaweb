<script lang="ts">
	import { onMount } from 'svelte';
	let showPlayer = false;

	import '@vime/core/themes/default.css';
	export let videoid: string;

	onMount(async () => {
		const { defineCustomElements } = await import('@vime/core');
		defineCustomElements();
		showPlayer = true;
	});
</script>

{#if showPlayer}
	<vm-player controls>
		<vm-youtube video-id={videoid} />
	</vm-player>
{/if}
