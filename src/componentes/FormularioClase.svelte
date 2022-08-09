<script lang="ts">
	import { goto } from '$app/navigation';
	import { Confetti } from 'svelte-confetti';
	import ToggleConffeti from './ToggleConffeti.svelte';

	let hasError = false;
	let confetti = false;

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
		confetti = true;
		const url = 'https://psicologaberenicebastidas.activehosted.com/proc.php';
		fetch(url, {
			method: 'POST',
			body: formData,
			mode: 'no-cors'
		})
			.then((response) => {
				if (response.status === 200) {
					setTimeout(() => {
						goto('/webinar/gracias');
					}, 2000);
				}
			})
			.catch((error) => {
				console.log(error);
			});

		setTimeout(() => {
			goto('/clase/gracias');
		}, 2000);
	}
</script>

<form
	class="flex flex-col gap-4 mx-4 md:mx-24 mt-4 md:mt-12"
	on:submit|preventDefault={onSubmit}
	noValidate
>
	<input type="hidden" name="u" value="41" />
	<input type="hidden" name="f" value="41" />
	<input type="hidden" name="s" />
	<input type="hidden" name="c" value="0" />
	<input type="hidden" name="m" value="0" />
	<input type="hidden" name="act" value="sub" />
	<input type="hidden" name="v" value="2" />
	<input type="hidden" name="or" value="f12d0f8a905b37095a34e417f5165148" />

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

	{#if confetti == true}
		<div class="flex justify-center">
			<Confetti />
		</div>
	{/if}

	<button
		class="bg-secondary py-4 px-8 text-white sm:text-lg rounded-full m-4  disabled:opacity-50 disabled:cursor-not-allowed "
		disabled={hasError}>RESERVAR MI LUGAR AHORA</button
	>
</form>
