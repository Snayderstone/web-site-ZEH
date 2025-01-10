<script>
	import Waves from '$lib/components/organisms/Waves.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!--<Waves />-->

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
.layout {
    display: grid;
    min-height: 100dvh; /* Ocupa el 100% de la altura de la pantalla */
    grid-template-rows: auto 1fr auto; /* Header, Main y Footer */

    header {
        background-color: #f5f5f5; /* Opcional, estilo del header */
    }

    main {
        padding: 20px; /* Espacio interno para el contenido principal */
    }

    footer {
        background-color: #e6f8f7; /* Fondo del footer */
    }
}
</style>


