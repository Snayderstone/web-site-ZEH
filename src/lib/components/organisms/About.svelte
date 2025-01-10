<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '../atoms/Image.svelte';
</script>

<section id="about">
	<div class="container">
		<div class="info">
			<h2>
				No solo ahorra energía, sino que redefine cómo vivimos en armonía con el planeta🌍
				<SparklingHighlight color="secondary">ZEH!</SparklingHighlight>
			</h2>
			<!--<div class="socials">
				<span>Socials:</span>
				<Socials />
			</div>-->
		</div>
		<div class="features">
			<div class="feature">
				<img src="/images/cost-savings.png" alt="Cost Savings" />
				<h3>Ahorro de costes</h3>
				<p>Disfruta de importantes ahorros en tus facturas energéticas.</p>
			</div>
			<div class="feature">
				<img src="/images/enviromental-impact.png" alt="Environmental Impact" />
				<h3>Impacto ambiental</h3>
				<p>Reduce tu huella de carbono y ayuda al planeta.</p>
			</div>
			<div class="feature">
				<img src="/images/energy-indepedence.png" alt="Energy Independence" />
				<h3>Independencia energética</h3>
				<p>Disfruta de la independencia energética con soluciones renovables.</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: space-between;
		padding: 50px 20px;
		gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 15px;

			h2 {
				font-size: 2rem;
				margin-bottom: 10px;
				color: #333;

				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				color: #555;
				font-size: 1rem;

				@include for-phone-only {
					text-align: justify;
				}
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 10px;

				@include for-phone-only {
					justify-content: center;
					span {
						display: none;
					}
				}
			}
		}

		.features {
			display: flex;
			justify-content: center;
			gap: 20px;
			padding: 20px;

			@include for-phone-only {
				flex-direction: column;
				align-items: center;
			}

			.feature {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				background-color: #f9f9f9;
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				width: 300px;
				height: 400px;
				box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				transition: trnasform 0.3s, box-shadow 0.3s;

				&:hover {
					transform: translateY(-10px);
					box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
				}

				img {
					width: 200px;
					height: 200px;
					object-fit: cover;
					margin-bottom: 15px;
				}

				h3 {
					font-size: 1.5rem;
					color: #333;
					margin-bottom: 10px;
				}

				p {
					font-size: 1rem;
					color: #666;
					flex-grow: 1;
				}

				a {
					font-size: 0.9rem;
					color: #007bff;
					text-decoration: none;
					margin-top: 10px;

					&:hover {
						text-decoration: underline;
					}
				}

				@include for-phone-only {
					width: 100%;
				}
			}
		}
	}
</style>