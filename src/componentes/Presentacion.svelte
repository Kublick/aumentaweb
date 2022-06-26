<script>
	import { each } from 'svelte/internal';

	let beneficios = [
		{
			id: 1,
			title: 'Beneficio 1',
			text: 'Este curso es para ti si quieres aprender a crear contenido que atraiga a tus potenciales pacientes, sin que te tome todo el día'
		},
		{
			id: 2,
			title: 'Beneficio 2',
			text: 'Este curso es para ti si quieres tener presencia en redes sociales de forma orgánica, sin necesidad de contratar agencias de marketing'
		},
		{
			id: 3,
			title: 'Beneficio 3',
			text: 'Este curso es para ti por que lograrás sentirte plenamente confiado a la hora de mostrar tus servicios de consulta, en las redes sociales'
		},
		{
			id: 4,
			title: 'Beneficio 4',
			text: 'Si aun no sabes como hacer la automatización básica de Facebook e Instagram y creación de página, este curso entonces definitivamente si es para ti'
		}
	];
</script>

<div class="mt-12 bg-gradient-to-b from-secondary to-white grid md:grid-cols-3">
	<div class="col-span-2">
		<h1 class="text-2xl md:text-5xl text-center tracking-wide font-bold pt-12 md:pt-24">
			¿Pero Quién Soy Yo Para Enseñarte?
		</h1>
		<h2 class="text-lg md:text-2xl mt-8 text-center mx-4 leading-0 md:mx-32">
			Psicóloga de profesión desde hace 15 años y en los últimos años me he dedicado ayudar a
			Psicólogos, Nutriólogos, Terapeutas, Odontólogos y Profesionales de la Salud a incrementar su
			número de pacientes, con estrategia a través de internet incluso empezando desde cero,
			actualmente ya tengo alumnos de más de 14 países diferentes a los que he ayudado con mi
			entrenamiento avanzado incrementa tu consulta.
		</h2>
	</div>
	<div>imagen</div>
</div>
<div class="mt-12 md:mt-24 py-24">
	<div class="bg-secondary py-12">
		<h1 class="text-white md:text-3xl text-xl text-center">Este programa es para ti si</h1>
	</div>
	<div class="mt-8 container mx-24">
		<div class="md:flex md:gap-24">
			{#each beneficios as beneficio}
				<div>
					<h4 class="text-2xl font-bold py-4">{beneficio.title}</h4>
					<div class="bg-gradient-to-r from-secondary to-white h-4" />
					<p class="text-lg py-4">{beneficio.text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
