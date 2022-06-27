<script>
	import Videoplayer from '../componentes/Videoplayer.svelte';
	const url = 'https://pay.hotmart.com/N71490976C?off=ej0fd4kr&checkoutMode=10';
</script>

<main class="container mx-auto mt-12 md:mt-24 px-2">
	<h1 class="text-xl md:text-4xl text-secondary text-center ">
		¿Te Perdiste El Taller? o ¿Quieres Volver A Verlo?
	</h1>
	<h2 class="text-lg md:text-2xl text-primary py-4 md:py-8 text-center">¡NO TE PREOCUPES!</h2>
	<h2 class="text-lg md:text-2xl text-primary text-center">
		<span class="text-secondary"> Solo da click en el video aquí abajo </span>
		y podrás verla de nuevo (Por tiempo limitado)
	</h2>

	<div class="md:my-8">
		<Videoplayer videoid={'NmL3jxP9BB0'} />
	</div>
	<div class="flex justify-center my-12">
		<button
			class="bg-green-600 text-white px-8 py-4 rounded-full font-bold md:text-4xl md:w-[720px] hover:opacity-90 shadow-lg"
			on:click={() => window.open(url, '_blank')}
			>Da click aqui para ser parte de Aumenta Pacientes</button
		>
	</div>
</main>
