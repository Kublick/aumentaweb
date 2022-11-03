<script lang="ts">
	let url = 'https://pay.hotmart.com/N71490976C?off=ej0fd4kr&checkoutMode=10';
	import Icon from '@iconify/svelte';
	import CtaButton from '../lib/CtaButton.svelte';
</script>

<section class="container mx-auto">
	<div class="md:container md:mx-12 mx-4  mt-12 ">
		<h2 class="text-xl md:text-4xl mt-2 text-center">
			El precio regular de este curso online es de <span class="text-primary font-bold"
				>$197 dólares</span
			>
			pero al inscribirte hoy, recibes
			<span class="text-primary font-bold"> un descuento de 50%</span>, por lo que tu inversión
			seria solo de
		</h2>

		<CtaButton />
		<div class="flex gap-8 justify-center items-center flex-wrap">
			<Icon icon="dashicons:lock" width="64" height="64" class="text-gray-600" />
			<img src="/paypal.svg" alt="PayPal" class="h-16" />
			<Icon icon="fontisto:american-express" width="64" height="64" class="text-[#006fcf]" />
			<Icon icon="logos:discover" width="64" height="64" />
			<Icon icon="logos:mastercard" width="64" height="64" />
			<Icon icon="logos:visa" width="64" height="64" />
		</div>
	</div>
</section>
