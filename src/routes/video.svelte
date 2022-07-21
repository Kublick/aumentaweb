<script lang="ts">
	import { goto } from '$app/navigation';

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
		<div class="flex justify-center ">
			<iframe
				id="ytplayer"
				type="text/html"
				src="https://www.youtube.com/embed/WfsCdPgcxZM?start=645"
				title="video"
				frameborder="0"
				class="ytplayer"
			/>
		</div>
	</div>
	<div class="flex justify-center my-12">
		<button
			class="bg-green-600 text-white px-8 py-4 rounded-full font-bold md:text-4xl md:w-[720px] hover:opacity-90 shadow-lg"
			on:click={() => goto('/')}>Da click aqui para ser parte de Aumenta Pacientes</button
		>
	</div>
</main>

<style>
	.ytplayer {
		width: 768px;
		height: 540px;
	}

	@media screen and (max-width: 840px) {
		.ytplayer {
			width: 384px;
			height: 270px;
		}
	}
</style>
