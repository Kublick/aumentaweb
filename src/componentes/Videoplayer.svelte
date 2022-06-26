<script lang="ts">
	import '@vime/core/themes/default.css';
	import { Youtube, Player } from '@vime/svelte';
	export let videoid: string;
</script>

<Player>
	<Youtube videoId={videoid} />
</Player>
