<script lang="ts">
    import { onMount } from 'svelte';

    let currentGroup = 0;
    const intervalTime = 5000;
    let groupInterval: number;

    const slides = [
        {
            image: '/images/features/solar4.jpeg',
            title: 'Eficiencia Energética',
            description: 'Maximización de la generación de energía con recursos limitados.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
        {
            image: '/images/features/solar5.jpeg',
            title: 'Minimización de Costos',
            description: 'Reducción de costos operativos y de inversión mediante decisiones óptimas.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
        {
            image: '/images/features/solar6.jpeg',
            title: 'Sustentabilidad',
            description: 'Optimización del uso de materiales, reduciendo el impacto ambiental.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
        {
            image: '/images/features/solar7.jpeg',
            title: 'Menos uso de combustibles',
            description: 'Disminuye la necesidad del uso de combustibles fósiles.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
        {
            image: '/images/features/solar8.jpeg',
            title: 'Reduce la huella de carbono',
            description: 'Menos dependencia de fuentes de energía no renovables.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
        {
            image: '/images/features/solar9.jpeg',
            title: 'Es renovable y sostenible',
            description: 'El uso de paneles solares se puede aprovechar en cualquier lugar.',
            button: 'Leer más',
            link: '/gestion-energetica',
        },
    ];

    const groups = [];
    const groupSize = 2; // Mostrar 2 elementos por grupo

    // Dividir las diapositivas en grupos de tamaño definido
    for (let i = 0; i < slides.length; i += groupSize) {
        groups.push(slides.slice(i, i + groupSize));
    }

    function nextGroup() {
        currentGroup = (currentGroup + 1) % groups.length;
    }

    function prevGroup() {
        currentGroup = (currentGroup - 1 + groups.length) % groups.length;
    }

    onMount(() => {
        groupInterval = setInterval(nextGroup, intervalTime);
        return () => clearInterval(groupInterval);
    });
</script>

<div class="slider">
    <!-- Botón Anterior -->
    <button class="prev" on:click={prevGroup}>❮</button>

    <!-- Grupo Actual -->
    {#each groups as group, index}
        <div
            class="group {index === currentGroup ? 'active' : ''}"
        >
            {#each group as slide}
                <div class="slide">
                    <img src={slide.image} alt={slide.title} class="slide-image" />
                    <div class="slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                        {#if slide.button}
                            <a href={slide.link} class="button">{slide.button}</a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    {/each}

    <!-- Botón Siguiente -->
    <button class="next" on:click={nextGroup}>❯</button>
</div>

<style>
    .slider {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .group {
        display: flex;
        gap: 20px; /* Espaciado entre diapositivas */
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
        position: absolute;
    }

    .group.active {
        opacity: 1;
        visibility: visible;
        position: relative;
    }

    .slide {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px;
    }

    .slide-image {
        width: 100%;
        height: 200px; /* Altura fija para todas las imágenes */
        object-fit: cover; /* Ajustar la imagen al contenedor */
        border-radius: 8px;
    }

    .slide-content h2 {
        font-size: 1.2rem;
        margin: 10px 0;
    }

    .slide-content p {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .button {
        display: inline-block;
        padding: 8px 16px;
        background-color: #4caf50;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .button:hover {
        background-color: #45a049;
    }

    .prev,
    .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        z-index: 10;
    }

    .prev:hover,
    .next:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    @media (max-width: 768px) {
        .slide-image {
            height: 150px;
        }

        .slide-content h2 {
            font-size: 1rem;
        }

        .slide-content p {
            font-size: 0.9rem;
        }
    }
</style>