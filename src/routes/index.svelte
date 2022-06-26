<script>
	import Situaciones from '../componentes/Situaciones.svelte';
	import Hero from '../componentes/Hero.svelte';
	import Cta from '../componentes/Cta.svelte';
	import Presentacion from '../componentes/Presentacion.svelte';
	import Testimonios from '../componentes/Testimonios.svelte';
	import CtaTimer from '../componentes/CtaTimer.svelte';
	import Contenido from '../componentes/Contenido.svelte';
</script>

<main>
	<Hero />
	<Situaciones />

	<Cta />

	<section>
		<Presentacion />
	</section>
	<section>
		<Testimonios />
	</section>
	<section>
		<CtaTimer />
	</section>
	<section>
		<Contenido />
	</section>
</main>
