<script>
	import Videoplayer from './Videoplayer.svelte';
</script>

<div class="container mx-auto md:my-16 px-4">
	<h1 class="text-3xl md:text-5xl font-bold">¿Serás el próximo?</h1>
	<h4 class="text-lg md:text-2xl my-2">
		Mira las historias inspiradoras, los casos de éxito que ya tomaron acción.
	</h4>
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto py-12 px-2 ">
	<Videoplayer videoid={'vSyVhKV4n-s'} />
	<Videoplayer videoid={'DUTbbtn9vJs'} />
	<Videoplayer videoid={'z9CsFqeleUo'} />
</div>

<div class=" md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto py-12 px-2 hidden md:grid">
	<Videoplayer videoid={'4G_j_Qk7Gvc'} />
	<Videoplayer videoid={'eGORT3A48l0'} />
	<Videoplayer videoid={'J6PQXxhV_Ks'} />
</div>
