<script lang="ts">
	import { goto } from '$app/navigation';

	let hasError = false;

	let email = '';
	let fullname = '';

	function onSubmit(e: any) {
		if (email.length === 0 || fullname.length === 0) {
			hasError = true;
			setTimeout(() => {
				hasError = false;
			}, 3000);
			return;
		}

		const formData = new FormData(e.target);

		const url = 'https://psicologaberenicebastidas.activehosted.com/proc.php';
		fetch(url, {
			method: 'POST',
			body: formData,
			mode: 'no-cors'
		})
			.then((response) => {
				if (response.status === 200) {
					if (typeof window !== 'undefined') {
						if (window.fbq != null) {
							window.fbq('track', 'CompleteRegistration');
							console.log('track registration');
						}
					}
				}
				setTimeout(() => {
					goto('/webinar/gracias');
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	}
</script>

<form
	class="flex flex-col gap-4 mx-4 md:mx-24 mt-4 md:mt-12"
	on:submit|preventDefault={onSubmit}
	noValidate
>
	<input type="hidden" name="u" value="39" />
	<input type="hidden" name="f" value="39" />
	<input type="hidden" name="s" />
	<input type="hidden" name="c" value="0" />
	<input type="hidden" name="m" value="0" />
	<input type="hidden" name="act" value="sub" />
	<input type="hidden" name="v" value="2" />
	<input type="hidden" name="or" value="92ffc03067285b93961e1fb80bcae25d" />

	<input
		type="text"
		name="fullname"
		placeholder="Nombre completo"
		class="border border-gray-400 appearance-none rounded w-full px-3 py-3   focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 "
		bind:value={fullname}
	/>

	<input
		type="email"
		name="email"
		placeholder="Correo electrónico"
		class="border border-gray-400 appearance-none rounded w-full px-3 py-3   focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 "
		bind:value={email}
	/>

	{#if hasError == true}
		<p class="text-red-500 text-sm">* Todos los campos son requeridos</p>
	{/if}

	<button
		id="modal-trigger2"
		class="bg-primary py-4 px-8 text-white sm:text-lg rounded-full m-4 wiggle hover:animate-none disabled:opacity-50 disabled:cursor-not-allowed "
		disabled={hasError}>RESERVAR MI LUGAR AHORA</button
	>
</form>

<style>
	.wiggle {
		position: relative;
		animation: 2.5s rocking infinite;
	}

	@keyframes rocking {
		0% {
			transform: rotate(0deg);
		}
		80% {
			transform: rotate(0deg);
		}
		85% {
			transform: rotate(5deg);
		}
		95% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
