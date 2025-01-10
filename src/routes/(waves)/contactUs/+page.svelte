<script lang="ts">
    import ContactForm from '$lib/components/organisms/ContactForm.svelte';

    export let address = "Av. América y av. Universitaria · Quito, Pichincha, Ecuador";
    export let phone = "+593 99 558 2714";
    export let email = "micevallosg@uce.edu.ec";
</script>

<div class="contact-page">
    <!-- Encabezado -->
    <div class="header">
        <div class="header-text">
            <h1>Contacto</h1>
            <p>Zero Energy Home</p>
        </div>
    </div>

    <!-- Mapa -->
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7945088469774!2d-78.5048042!3d-0.19794960000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a8c54484dc1%3A0xd181ba6389c436e2!2sUniversidad%20Central%20del%20Ecuador!5e0!3m2!1ses!2sec!4v1736469533674!5m2!1ses!2sec"
            width="100%"
            height="400"
            style="border:0;"
            title="Mapa de la ubicación de Zero Energy Home"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    <!-- Información de Contacto y Formulario -->
    <ContactForm {address} {phone} {email} />
</div>

<style lang="scss">
    .contact-page {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;
    }

    .header {
        background-image: url('/images/header/contact-header.jpg');
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 60px 20px;
        color: black;

        .header-text {
            h1 {
                font-size: 2.5rem;
                margin: 0;
            }

            p {
                font-size: 1.2rem;
                margin: 10px 0 0 0;
            }
        }
    }

    .map-container {
        margin: 20px 0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>
