<script>
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup, { message: "It's a modal!" });
</script>

<p>
	<button
		on:click={showSurprise}
		class="bg-greenbutton py-4 px-12 text-white font-semibold shadow-lg tracking-wide text-2xl hover:bg-lime-600 cursor-pointer"
		>Registrate Gratis</button
	>
</p>
