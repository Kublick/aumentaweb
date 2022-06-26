<script lang="ts">
	import CtaButton from '../lib/CtaButton.svelte';

	import { modulos, contenidos } from '../data/modulos';
	const url = 'https://pay.hotmart.com/N71490976C?off=ej0fd4kr&checkoutMode=10';
</script>

<div class="my-12">
	<h1 class="bg-primary text-white p-8 md:text-4xl text-xl text-center ">
		El curso online incluye
	</h1>

	<div class="grid md:grid-cols-2 gap-4 container mx-auto mt-12 text-primary px-2 md:px-0">
		<div>
			<div class="flex gap-2">
				<img src="/checkmark.svg" alt="checkmark" class="h-6 w-6" />

				<div>
					<h4 class="font-bold">PROGRAMA INTENSIVO DE 4 SEMANAS 100% ONLINE</h4>
					<p>(valorado en $847 en dólares)</p>
				</div>
			</div>

			{#each modulos as modulo}
				<div class="flex gap-2 py-2">
					<img src="/checkmark.svg" alt="checkmark" class="h-6 w-6" />
					<div class="flex flex-col container mx-auto">
						<h4 class="font-bold">
							{modulo.module}
						</h4>
						<h4 class="font-bold">
							{modulo.title}
						</h4>
						<p>
							{modulo.text}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div>
			{#each contenidos as contenido}
				<div class="flex gap-2 py-2">
					<img src="/checkmark.svg" alt="checkmark" class="h-6 w-6" />
					<div class="flex flex-col container mx-auto">
						<h4 class="font-bold">
							{contenido.title}
							<span class="font-normal">{contenido.text}</span>
						</h4>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="mt-12 container mx-auto px-2 md:px-0">
		<h2 class="text-center text-lg md:text-2xl">
			Sin duda es muchísimo valor el que tendrás con el curso completo AUMENTA PACIENTES y además
			con los bonos de regalo tienes acceso a más de <span class="text-primary font-bold"
				>$1,200 dólares</span
			>
			en contenido de valor y recursos. Si pagaras todo esto por separado te saldría en eso... Pero hoy
			tengo una invitación, es una oferta especial para ti, hoy si te inscribes a la primera generación
			de aumenta pacientes, recibes un descuento de
			<span class="text-primary font-bold">$100 dólares,</span>
			por lo que tu inversión seria solo
			<span class="text-primary font-bold">$97 dólares</span> de el tipo de cambio y el IVA dependerá
			de cada país
		</h2>
	</div>
	<div>
		<div class="flex flex-wrap justify-center items-center mx-4 md:mx-12">
			<div class="w-full md:w-1/2 p-4">
				<img src="/hero_aumenta.png" alt="aumenta_imagen" />
			</div>
			<div class="w-full md:w-1/2 p-4">
				<CtaButton />
			</div>
		</div>
	</div>
</div>
