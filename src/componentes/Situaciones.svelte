<script lang="ts">
	let situaciones = [
		{
			id: 1,
			text: 'No sabes como hacerlo'
		},
		{
			id: 2,
			text: 'La publicación que pusiste no te funcionó'
		},
		{
			id: 3,
			text: 'No tienes ni idea por dónde empezar'
		},
		{
			id: 4,
			text: 'No conoces herramientas digitales'
		},
		{
			id: 5,
			text: 'Tienes pocos seguidores'
		},
		{
			id: 6,
			text: 'No sabes que publicar en redes sociales para atraer pacientes'
		},
		{
			id: 7,
			text: 'No tienes personas interesadas en tu consulta'
		},
		{
			id: 8,
			text: 'No has podido captar pacientes de internet'
		},
		{
			id: 9,
			text: 'Compartes contenido en grupos pero no obtienes resultados'
		},
		{
			id: 10,
			text: 'Te falta saber como llegar a las personas indicadas que necesiten tu consulta'
		},
		{
			id: 11,
			text: 'No sabes como promocionar tu servicio de forma orgánica'
		},
		{
			id: 12,
			text: 'Te da miedo que te critiquen o hagan memes de tu persona'
		}
	];
</script>

<section class="bg-primary mt-12">
	<div class="md:container md:mx-12 mx-4 text-white py-12 md:py-24 ">
		<h1 class="text-2xl md:text-5xl text-center tracking-wide font-bold">
			Si has intentado vender tus servicios profesionales de consulta a través de internet, pero no
			has tenido los resultados que quieres por que:
		</h1>

		<div>
			<div class="flex flex-wrap justify-center items-center mx-4 md:mx-12 mt-16">
				<!-- loop over situaciones -->
				<ul class="grid grid-cols-2 gap-8 md:text-2xl font-sm md:font-base">
					{#each situaciones as situacion}
						<li class="flex gap-2 md:items-center">
							<img src="/bullet.svg" alt="bullet" class="h-6 w-6" />
							{situacion.text}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="md:container md:mx-12 mx-4 text-primary mt-12 md:py-24 py-6">
		<h1 class="text-2xl md:text-5xl text-center tracking-wide font-bold">
			Si tu respuesta es si, sigue leyendo... Te tengo la solución
		</h1>
		<h2 class="text-xl md:text-4xl mt-2 md:mt-8 text-center text-secondary font-bold">
			Curso Online
		</h2>
		<div>
			<div class="flex flex-wrap justify-center items-center mx-4 md:mx-12">
				<div class="w-full md:w-1/2 p-4">
					<img src="/aumenta_logo.svg" alt="aumenta logo" class="" />
				</div>
			</div>
		</div>
		<h2 class="text-xl md:text-4xl mt-2 md:mt-8 text-center text-primary font-bold md:mx-24 mx-8">
			Despega tu consulta primero de forma orgánica y logra posicionamiento digital
		</h2>
	</div>
</section>
