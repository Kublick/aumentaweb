<script>
	import { beneficios } from '../data/beneficios';
</script>

<secion>
	<div class="mt-12 bg-gradient-to-b from-secondary to-white grid md:grid-cols-3 items-center">
		<div class="col-span-2 container">
			<h1 class="text-2xl md:text-5xl text-center font-bold pt-12 md:pt-24 md:mx-2">
				¿Pero Quién Soy Yo Para Enseñarte?
			</h1>
			<h2 class="text-lg md:text-2xl mt-8 text-justify mx-4 leading-0 md:mx-32">
				Psicóloga de profesión desde hace 15 años y en los últimos años me he dedicado ayudar a
				Psicólogos, Nutriólogos, Terapeutas, Odontólogos y Profesionales de la Salud a incrementar
				su número de pacientes, con estrategia a través de internet incluso empezando desde cero,
				actualmente ya tengo alumnos de más de 14 países diferentes a los que he ayudado con mi
				entrenamiento avanzado incrementa tu consulta.
			</h2>
		</div>
		<div class="md:pt-24 py-2 hidden md:block">
			<img src="/presentadora_bere.webp" alt="Berenice" />
		</div>
	</div>
	<div class="mt-12 md:mt-24 py-24">
		<div class=" py-12 bg-secondary">
			<h1 class="text-white md:text-3xl text-xl text-center">Este programa es para ti si</h1>
		</div>
		<div class="container mx-auto">
			<div class="mt-8 md:mx-24 px-4 md:px-0">
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
	</div>
</secion>
