<script>
	let deadline = new Date('November 5, 2022 20:00:00');

	let t1 = deadline.getTime();
	let t2 = Date.now();
	let diff = t1 - t2;
	let diffInSeconds = Math.floor(diff / 1000);

	$: d = Math.floor(diffInSeconds / 86400);
	$: h = Math.floor((diffInSeconds - d * 86400) / 3600);
	$: m = Math.floor((diffInSeconds - d * 86400 - h * 3600) / 60);
	$: s = diffInSeconds - d * 86400 - h * 3600 - m * 60;

	async function updateTimer() {
		t1 = deadline.getTime();
		t2 = Date.now();
		diff = t1 - t2;
		diffInSeconds = Math.floor(diff / 1000);
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (diffInSeconds === 0) clearInterval(interval);
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
