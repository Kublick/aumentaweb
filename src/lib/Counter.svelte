<script>
	export let countdown = 3600 * 72 - 1;

	let now = Date.now();
	let end = now + countdown * 1000;

	$: count = Math.round((end - now) / 1000);
	$: d = Math.floor(count / 60 / 60 / 24);
	$: h = Math.floor((count / 60 / 60) % 24);
	$: m = Math.floor((count / 60) % 60);
	$: s = Math.floor(count % 60);

	function updateTimer() {
		now = Date.now();
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (count === 0) clearInterval(interval);
</script>

<section>
	<div class="flex justify-center">
		<div class="flex gap-2 bg-black text-[red] font-bold p-4 rounded-lg justify-center">
			<p class="text-xl lg:text-3xl">{d}</p>
			<p class="text-xl lg:text-3xl">:</p>
			<p class="text-xl lg:text-3xl">{h}</p>
			<p class="text-xl lg:text-3xl">:</p>
			<p class="text-xl lg:text-3xl">{m}</p>
			<p class="text-xl lg:text-3xl">:</p>
			<p class="text-xl lg:text-3xl">{s}</p>
		</div>
	</div>
</section>
