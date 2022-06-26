<script>
	import Counter from '../lib/Counter.svelte';
	import Icon from '@iconify/svelte';
	let url = 'https://pay.hotmart.com/N71490976C?off=ej0fd4kr&checkoutMode=10';
</script>

<div class="mt-12">
	<h1 class="text-2xl lg:text-5xl text-center">
		El Curso Online Aumenta Pacientes Cierra Sus Puertas En
	</h1>
	<div class="mt-12">
		<Counter />
	</div>
	<h1
		class="md:text-7xl text-center font-bold mt-4 md:mt-8 text-3xl text-primary underline underline-offset-2"
	>
		Valor: 97 dólares
	</h1>
	<div class="flex justify-center my-12">
		<button
			class="bg-green-600 text-white px-8 py-4 rounded-full font-bold md:text-4xl md:w-1/2 hover:opacity-90"
			on:click={() => window.open(url, '_blank')}
			>Da click aqui para ser parte de Aumenta Pacientes</button
		>
	</div>
	<div class="flex gap-8 justify-center items-center flex-wrap">
		<Icon icon="dashicons:lock" width="64" height="64" class="text-gray-600" />
		<img src="/paypal.svg" alt="PayPal" class="h-16" />
		<Icon icon="fontisto:american-express" width="64" height="64" class="text-[#006fcf]" />
		<Icon icon="logos:discover" width="64" height="64" />
		<Icon icon="logos:mastercard" width="64" height="64" />
		<Icon icon="logos:visa" width="64" height="64" />
	</div>
</div>
