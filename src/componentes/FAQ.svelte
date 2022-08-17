<script>
	import CtaButton from '$lib/CtaButton.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="container mx-auto my-12 md:my-24">
	<div class="border-8 border-primary px-4 rounded-xl flex flex-col md:flex-row items-center">
		<img src="/laptop.webp" alt="laptop" />
		<p class="text-xl md:text-4xl md:mx-12 mx-2 leading-0 py-4">
			¡Si accedes hoy además hay bonos para ti! obtienes de forma 100% GRATUITA de regalo El Taller
			Consigue Pacientes En Redes Sociales
		</p>
	</div>
	<div class="mt-12">
		<p class="text-xl md:text-4xl md:mx-12 mx-2 leading-0 py-4 px-2">
			Además tienes <span class="text-secondary">7 días de GARANTIA </span>podrás empezar la
			formación conocer a todos tus compañeros empezar a formarte y si no te gusta lo que vez, si
			sientes que no es lo tuyo te devuelvo el 100% del importe pagado.
		</p>
	</div>
	<img src="/logo_garantia.webp" alt="laptop" class="mx-auto mt-4" />

	<h1 class="text-xl md:text-4xl mt-2 text-center">
		El precio regular de este curso online es de <span class="text-primary font-bold"
			>$197 dólares</span
		>
		pero al inscribirte hoy, recibes
		<span class="text-primary font-bold"> un descuento de $100</span>
		dólares, por lo que tu inversión seria solo de
	</h1>

	<CtaButton />
	<div class="flex gap-8 justify-center items-center flex-wrap">
		<Icon icon="dashicons:lock" width="64" height="64" class="text-gray-600" />
		<img src="/paypal.svg" alt="PayPal" class="h-16" />
		<Icon icon="fontisto:american-express" width="64" height="64" class="text-[#006fcf]" />
		<Icon icon="logos:discover" width="64" height="64" />
		<Icon icon="logos:mastercard" width="64" height="64" />
		<Icon icon="logos:visa" width="64" height="64" />
	</div>
</section>
