<script>
	import { tweened } from 'svelte/motion';
	let original = 14.99 * 60; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original);
	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);
	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	$: seconds = Math.floor($timer - minutes * 60);
</script>

<section>
	<div class="flex justify-center">
		<div class="flex gap-2 bg-black text-[red] font-bold p-4 rounded-lg w-36 justify-center">
			<p class="text-xl lg:text-3xl">{minutes}</p>
			<p class="text-xl lg:text-3xl">:</p>
			<p class="text-xl lg:text-3xl">{seconds}</p>
		</div>
	</div>
</section>
