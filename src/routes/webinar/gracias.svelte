<script>
	import { onMount } from 'svelte';
	import website from '../../componentes/SEO/website';
	const { awsUrl } = website;
	let disabled = true;
	let whatsappUrl = '';

	onMount(async () => {
		const id = '7YXamvsw6hSppoy-s2cPc';
		try {
			const response = await fetch(`${awsUrl}/url/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			whatsappUrl = data.body.link;
			disabled = false;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="flex flex-col h-screen justify-center align-middle bg-transparent">
	<div class="grid lg:grid-cols-4 bg-transparent min-h-[720px] items-center">
		<div class="hidden py-24 md:bg-gradient-to-r from-webinar  to-white lg:grid container ">
			<img src="/webinar_bere_noback.png" alt="webinar" class="ml-10" />
		</div>

		<div class="col-span-3 md:mx-24 mx-4 my-12">
			<div class="flex flex-col gap-6 items-center">
				<h1 class="text-xl text-primary md:text-3xl font-bold tracking-wide ">
					¡Felicidades tu registro esta casi listo!
				</h1>
				<p class="text-lg md:text-2xl text-center w-9/12">
					Para finalmente
					<span class="font-semibold"> COMPLETAR</span> tu{' '}
					<span class="font-semibold">REGISTRO</span> faltan{' '}
					<span class="font-semibold">DOS PASOS</span> muy pequeños e{' '}
					<span class="font-semibold">IMPORTANTES</span>
				</p>

				<p class="w-9/12 md:text-lg">
					1. Ir a tu <span class="font-semibold">BANDEJA</span> de
					<span class="font-semibold"> CORREO</span> con el cual te registraste a este
					<span>WEBINAR </span>y busca el
					<span class="font-semibold"> CORREO</span> con el
					<span class="font-semibold"> TÍTULO</span>:{' '}
					<span class="font-semibold ">
						[IMPORTANTE] tu cupo esta confirmado{' '}
					</span>
				</p>

				<p class="w-9/12 md:text-lg text-center">
					2. Unirte al <span class="font-semibold">GRUPO PRIVADO</span>{' '}
					de
					<span class="font-semibold"> Whastapp</span> para recibir todas las
					<span>NOTIFICACIONES </span>del evento y que no te pierdas de nada.
				</p>
			</div>
			<div class="flex justify-center gap-4 align-middle items-center ">
				<div
					class="rounded-full  bg-whatsapp px-6 text-2xl font-bold text-white shadow-lg py-4 my-12 hover:opacity-95"
				>
					{#if disabled}
						<button
							type="button"
							class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm  text-white bg-whatsapp transition ease-in-out duration-150 cursor-not-allowed"
							disabled
						>
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
							Descargando tu grupo
						</button>
					{:else}
						<button
							class="font-bold text-sm lg:text-2xl disabled:cursor-not-allowed flex gap-4"
							on:click={() => {
								console.log('click', whatsappUrl);
								window.open(whatsappUrl, '_blank');
							}}
							{disabled}
						>
							<span class="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-8 h-8"
									viewBox="0 0 512 512"
									fill="#fff"
								>
									<path
										d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
										fill-rule="evenodd"
									/>
								</svg>
							</span>
							Da click en el botón y ve al grupo
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
