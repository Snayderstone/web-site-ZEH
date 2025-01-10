<script>
    export let title = "Zero Energy Home (ZEH)";
    export let descripcion = `
        El Hogar de Energía Cero (ZEH) es una vivienda que genera tanta energía como la que consume. 
        Está diseñado para ser energéticamente eficiente y sostenible, utilizando fuentes de energía renovables 
        como paneles solares y turbinas eólicas para generar electricidad. La ZEH también utiliza productos de eficiencia energética 
        electrodomésticos y sistemas de calefacción y refrigeración para minimizar el consumo de energía.
        `;
    
    export let buttonText = "CONÓCENOS";
    export let imageSrc = "/images/features/zero-energy-home.jpg";
    export let buttonLink = "/about";
</script>

<section class="about-us">
    <div class="image-container">
        <img src={imageSrc} alt="Zero Energy Home" />
    </div>
    <div class="content">
        <h3>NUESTRO PROYECTO</h3>
        <h2>{title}</h2>
        <p>{descripcion}</p>
        <a class="button" href={buttonLink}>{buttonText}</a>
    </div>
</section>

<style>
    .about-us {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px 20px;
        background-color: #f9f9f9;
    }

    .image-container {
        flex: 1;
        max-width: 50%;
    }

    .image-container img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .content {
        flex: 1;
        padding: 20px;
        background-color: #78be20;
        color: white;
        border-radius: 8px;
    }

    h3 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #ffffff;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ffffff;
        color: #78be20;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5%;
        transition: background-color 0.3s ease-in-out;
    }

    .button:hover {
        background-color: #e0e0e0;
    }
</style>