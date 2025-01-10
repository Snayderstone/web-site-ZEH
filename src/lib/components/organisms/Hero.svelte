<script>
	import FeaturesIcon from '$lib/icons/features.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<div class="content">
		<h1 class="hello">Optimización Energética para Hogares con Energía Solar en Ecuador (OEHESE)</h1>
		<p class="intro">
			<span class="left">⚡ Innovación que impulsa ,</span>
			<span class="right">un futuro sostenible...🌱.</span>
		</p>
		<div class="ctas">
			<Sparkles>
				<Button href="https://github.com/matfantinel/sveltekit-static-blog-template">
					<GitHubIcon slot="icon" />
					Source Code
				</Button>
			</Sparkles>
			<Button color="primary" href="https://histoire-sveltekit-static-blog-template.vercel.app/">
				<FeaturesIcon slot="icon" />
				Components
			</Button>
		</div>
	</div>

	<div class="metrics">
		<img src="/images/features/panel-home.jpg" alt="Panel Solar" class="solar-image" />
		<div class="stats">
			<div>
				<span class="number">4320000</span>
				<p>KWh/año Energía generada</p>
			</div>
			<div>
				<span class="number">8109</span>
				<p>Unidades Paneles FV instalados</p>
			</div>
			<div>
				<span class="number">978</span>
				<p>Toneladas de Ahorro en emisión CO2</p>
			</div>
		</div>
	</div>
</section>


<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 60px 20px;
	background-color: #f9f9f9;

	.content,
	.metrics {
		flex: 1;
	}

	.content {
		padding-right: 20px;

		.hello {
			font-size: 2.5rem;
			font-weight: 700;
			color: #333;
			margin-bottom: 20px;
		}

		.intro {
			font-size: 1.4rem;
			color: #555;
			margin-bottom: 20px;

			.left {
				text-align: left;
			}

			.right {
				text-align: right;
			}
		}

		.ctas {
			display: flex;
			gap: 15px;
			align-items: center;

			Button {
				padding: 10px 20px;
			}
		}
	}

	.metrics {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		.solar-image {
			max-width: 100%;
			height: auto;
			margin-bottom: 20px;
		}

		.stats {
			display: flex;
			justify-content: space-between;
			width: 100%;

			div {
				text-align: center;

				.number {
					font-size: 2rem;
					font-weight: bold;
					color: #333;
				}

				p {
					font-size: 1rem;
					color: #555;
				}
			}
		}
	}

	/* Ajustes para pantallas pequeñas */
		@media (max-width: 768px) {
			flex-direction: column;
			text-align: center;

			.content,
			.metrics {
				max-width: 100%;
				padding-right: 0;
			}

			.stats {
				flex-direction: column;
			}
		}
	}

</style>