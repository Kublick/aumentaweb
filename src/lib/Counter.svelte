<script>
	import differenceInSeconds from 'date-fns/differenceInSeconds';

	let deadline = new Date('July 2, 2022 23:59:59');
	let now = Date.now();

	let diffInSeconds = differenceInSeconds(deadline, now);

	$: d = Math.floor(diffInSeconds / 86400);
	$: h = Math.floor((diffInSeconds - d * 86400) / 3600);
	$: m = Math.floor((diffInSeconds - d * 86400 - h * 3600) / 60);
	$: s = diffInSeconds - d * 86400 - h * 3600 - m * 60;

	async function updateTimer() {
		now = Date.now();
		diffInSeconds = differenceInSeconds(deadline, now);
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
