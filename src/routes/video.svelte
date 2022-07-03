<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	const url = 'https://pay.hotmart.com/N71490976C?off=ej0fd4kr&checkoutMode=10';

	onMount(() => {
		goto('https://www.incrementatuconsulta.com');
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
				src="https://www.youtube.com/embed/A2PLm2-KIAg?start=609"
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
