<script lang="ts">
	import SEO from '../../componentes/SEO/index.svelte';
	import Modal from 'svelte-simple-modal';
	import Content from '../../componentes/Content.svelte';

	const goTop = () => {
		document.body.scrollIntoView();
	};

	let showModal = false;
	let modalContent: any;

	function toggleModal(component: any) {
		modalContent = component;
		showModal = !showModal;
	}

	const textsParaTi = [
		{
			id: 1,
			text: 'Estás dando dando consultas, o quieres empezar tu consulta pero aun no tienes la cantidad de pacientes que deseas.'
		},
		{
			id: 2,
			text: 'Sabes que lo que tienes que compartir es muy valioso y puede ayudar a más personas, pero no sabes cómo llegar a más personas y lugares.'
		},
		{
			id: 3,
			text: 'La razón por la que no has empezado a ofrecer y/o vender tu consulta es porque no sabes los pasos a seguir.'
		}
	];

	const seoProps = {
		title: 'Bienvenido a la Clase',
		slug: '',
		metadescription: 'Incrementa tu consulta clase'
	};
</script>

<SEO {...seoProps} />
<section class="mx-auto">
	<div class="bg-secondary text-white py-4">
		<h1 class="md:text-2xl text-center uppercase">
			<span class="font-bold">CLASE GRATUITA:</span> ¿COMO GENERAR PROSPECTOS A PACIENTES TODOS LOS DIAS?
		</h1>
	</div>
	<div class="flex justify-center flex-col items-center gap-4 mt-16">
		<h2 class="text-2xl md:text-4xl md:w-3/4 text-center mx-4 md:mx-0 ">
			<span class="text-secondary font-semibold">¡Atención!</span> Nutriologos, Coaches, Psicólogos Y
			Profesionales de la Salud:
		</h2>
		<h2 class="text-2xl md:text-4xl md:w-3/4 text-center mx-4 md:mx-0">
			Reserva Tu Lugar Gratis A Mi Clase Gratuita:
		</h2>
	</div>
	<div class="flex flex-col items-center m-4">
		<h2 class="text-2xl text-black md:text-5xl md:py-4 text-center font-bold md:w-3/4 mx-4 md:mx-0">
			Los 3 Secretos Para <span class="font-bold text-secondary"
				>Ofrecer y/o Vender Tu Consulta,
			</span> Facturando $5,000 Dólares O Más
		</h2>

		<!-- {#if showModal}
				<Modal on:click={toggleModal} {modalContent} />
			{/if} -->

		<p class="text-sm my-4 tracking-wide">Da click en el botón para registrarte a este webinar:</p>
		<!-- <button
				class="bg-greenbutton py-4 px-12 text-white font-semibold shadow-lg tracking-wide text-2xl hover:bg-lime-600 cursor-pointer"
				on:click={() => toggleModal(FormularioClase)}
			>
				Registrate Gratis
			</button> -->

		<Modal>
			<Content />
		</Modal>
	</div>
</section>
<div class="bg-secondary py-2 mt-16" />
<section class="bg-black text-white py-8">
	<div class="container mx-auto ">
		<div class="grid md:grid-cols-2 mx-12 md:mx-4 gap-4 place-items-start sm:place-items-center">
			<div class="flex gap-4 justify-center items-center">
				<img src="/boleto.webp" alt="Boleto" class="w-16 h-16 rounded-full" />
				<div>
					<h3>Reserva tu Lugar</h3>
					<p class="text-secondary font-semibold">20 de Julio</p>
				</div>
			</div>
			<div>
				<div class="flex gap-4 justify-center items-center">
					<img src="/anfritrion_small.webp" alt="anfritrion" class="w-16 h-16 rounded-full" />
					<div>
						<h3 class="font-semibold">Anfritrión: Psicóloga Berenice Bastidas</h3>
						<p>Creador del progama:</p>
						<p class="text-secondary font-semibold">Incrementa tu Cosulta y Aumenta Pacientes</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="container mx-auto py-8">
	<div class="mx-4">
		<h3 class="text-2xl md:text-5xl text-center">Lo Que Solucionarás En Este Exclusivo Evento</h3>
	</div>
	<div class="grid md:grid-cols-3 mx-12 md:gap-16 lg:mx-24 md:my-12">
		<div class="m-4">
			<img
				src="/Logo_pc.webp"
				alt="imagen PC"
				height="194"
				width="190"
				class="mx-auto h-24 w-24 mb-4"
			/>

			<h4 class="text-xl font-semibold">¿Miedo a la Tecnología?</h4>
			<div class="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
			<p>
				Las herramientas que necesitas para vender tu consulta sin necesidad de contratar una
				agencia o aunque le tengas miedo a la tecnología
			</p>
		</div>
		<div class="m-4">
			<img
				src="/megafono.webp"
				alt="imagen megafono"
				height="250"
				width="171"
				class="mx-auto h-24  mb-4"
			/>
			<h4 class="text-xl font-semibold">No sabes promocionar tu consulta</h4>
			<div class="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
			<p>
				Conocerás cómo encontrar prospectos en las redes sociales y que SÍ quieran tu servicio,
				aunque haya competencia
			</p>
		</div>
		<div class="m-4">
			<img
				src="/usuarios.webp"
				alt="imagen usuarios"
				height="215"
				width="214"
				class="mx-auto h-24 w-24 mb-4"
			/>
			<h4 class="text-xl font-semibold">¿0 o Pocos Seguidores?</h4>
			<div class="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
			<p>¿Cómo crecer tu audiencia desde 0 con personas que quieran tu consulta?</p>
		</div>
	</div>

	<div class="grid md:grid-cols-2 mx-12 md:gap-16 lg:mx-24 md:my-12">
		<div class="m-4 max-w-[373px] mx-auto">
			<img
				src="/thumbsup.webp"
				alt="imagen redes"
				height="215"
				width="214"
				class="mx-auto h-24 w-24 mb-4"
			/>
			<h4 class="text-xl font-semibold">Redes Sociales a Tu Favor</h4>
			<div class="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
			<p>
				¿Cómo usar las Redes Sociales (De la forma correcta) para tener pacientes todos los días?
			</p>
		</div>
		<div class="m-4 max-w-[373px] mx-auto">
			<img
				src="/muchainfo.webp"
				alt="imagen mucha informacion"
				height="215"
				width="214"
				class="mx-auto h-24 w-24 mb-4"
			/>
			<h4 class="text-xl font-semibold">¿Mucha información?</h4>
			<div class="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
			<p>¿Cómo estructurar TODO tu conocimiento para ofrecer y/o vender tu consulta en internet?</p>
		</div>
	</div>
</section>

<section>
	<h1 class="text-center text-2xl md:text-4xl font-bold ">Esto Es Para Ti Sí:</h1>
	<div class="flex justify-center mb-8 md:mb-16 mt-4">
		<div class="bg-secondary h-1 w-1/2 text-center" />
	</div>
	<div class="grid md:grid-cols-2 md:gap-8">
		<div class="flex flex-col ">
			<img src="/parati1.webp" alt="imagen parati" class="md:self-start md:ml-12 md:block hidden" />
			<img src="/parati2.webp" alt="imagen parati2" class="md:self-end md:mr-6 hidden md:block" />
			<img
				src="/parati3.webp"
				alt="imagen parati3"
				class="md:self-start md:ml-12 hidden md:block"
			/>
		</div>
		<div class="flex flex-col justify-between">
			{#each textsParaTi as content}
				<div class="flex gap-4 items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-12 w-12 flex-shrink-0 text-secondary "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="3"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
					<p class="text-lg md:text-2xl md:mx-8 mx-4 md:mt-0">
						{content.text}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="my-16 mx-auto">
	<div class="text-center bg-secondary py-6">
		<h1 class="text-xl md:text-4xl font-bold">Conoce Más De Berenice</h1>
	</div>
	<div class="md:flex md:items-center md:gap-8 md:w-3/4 container mt-8 mx-auto">
		<div class="flex flex-col gap-4 mx-6 md:0 md:text-xl text-lg">
			<p>
				Berenice Bastidas creadora de programas internacionales como: Incrementa Tu Consulta y
				Aumenta Pacientes, con los cuales ya estoy ayudando a profesionales de más de14 países
				diferentes incrementar su número de pacientes.
			</p>
			<p class="mt-8">
				Psicóloga de profesión desde hace 15 años y en los últimos años me he dedicado ayudar a
				Psicólogos, Nutriólogo y Profesionales de la Salud a incrementar su número de pacientes con
				estrategia a través de internet incluso empezando desde cero.
			</p>
		</div>
		<img src="/berenice_portrait.webp" alt="Berenice Bastidas" class="mx-auto mt-4" />
	</div>
	<div class="bg-secondary h-1" />
</section>

<section class="mx-4 my-16">
	<h1 class="text-xl md:text-2xl text-center">
		Regístrate <span class="font-semibold text-secondary text-center"
			>Gratis Al Taller En Línea</span
		> Dando Click En El Botón Para Asegurar Tu Lugar
	</h1>
	<div class="flex flex-col items-center">
		<p class="text-sm my-4 tracking-wide">Da click en el botón para registrarte a este webinar:</p>
		<!-- <button
				class="bg-greenbutton py-4 px-12 text-white font-semibold shadow-lg tracking-wide text-2xl hover:bg-lime-600 cursor-pointer"
				on:click={() => {
					goTop();
					toggleModal(FormularioClase);
				}}
			>
				Registrate Gratis
			</button> -->

		<Modal>
			<Content />
		</Modal>
	</div>
</section>

<foooter class="">
	<div class="bg-secondary py-8 text-center md:text-xl text-sm px-4">
		<p class="text-white  ">
			Legal Terms - Acerca de las politicas de privacidad y uso de cookies Incrementa tu consulta
			Derechos reservados 2021
		</p>
		<p class="text-white ">
			<a href="https://incrementatuconsulta.com">https://incrementatuconsulta.com</a> Psicologa Berenice
			Bastidas Mexicali Baja California, México Whatsapp: +52 (686) 234-9366
		</p>
	</div>
</foooter>
