<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Slider from '$lib/components/organisms/Slider.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import AboutUs from '$lib/components/organisms/AboutUs.svelte';
	import ServiceSlider  from '$lib/components/organisms/ServiceSlider.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="page-container">
	<Slider />
</div>

<div class="container">
	<Hero />
	<AboutUs 
	title="Zero Energy Home (ZEH)" 
	descripcion="El Hogar de Energía Cero (ZEH) es una vivienda que genera tanta energía como la que consume. 
        Está diseñado para ser energéticamente eficiente y sostenible, utilizando fuentes de energía renovables 
        como paneles solares y turbinas eólicas para generar electricidad. La ZEH también utiliza productos de eficiencia energética 
        electrodomésticos y sistemas de calefacción y refrigeración para minimizar el consumo de energía."
	buttonText="CONÓCENOS"
	imageSrc="/images/features/zero-energy-home.jpg"
	buttonLink="/about"
/>
	<About />
	<!-- Slider de Servicios -->
	<ServiceSlider />
</div>