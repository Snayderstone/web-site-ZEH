<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';
	import GitHubIcons from '$lib/components/atoms/GitHubLink.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	export let showBackground = false;
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo />
		</a>

		<!--Enlaces del menú-->
		<div class="links">
			<a href="/">INICIO</a>
			<a href="/lineal-programing">SIMULADOR OTPSB</a>
			<a href="/about">SOBRE NOSOTROS</a>
			<a href="/contactUs">CONTACTO</a>
			<a href="/blog">BLOG</a>
			
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 20px 30px;
		background-color: white;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

		@include for-phone-only {
			padding: 20px;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.logo {
			flex: 1;
			height: 50px;
		}

		.links {
			display: flex;
			font-weight: bold;
			text-decoration: dashed;
			align-items: center;
			justify-content: center;
			gap: 40px;

			a {
				text-decoration: none;
				color: #333;
				font-weight: 500;

				&:hover {
					color: #007bff;
				}
			}
		}

		/* Media queries */
		@include for-phone-only {
			.container {
				flex-wrap: wrap; /* Permite que los elementos bajen en pantallas pequeñas */
			}

			.links {
				justify-content: center;
				flex-wrap: wrap; /* Ajusta los enlaces si el espacio es reducido */
			}

			.contact-button {
				justify-content: center; /* Centra el botón en pantallas pequeñas */
			}
		}
	}
</style>
