<script lang="ts">
    import ContentSection from '$lib/components/organisms/ContentSection.svelte';

    const sections = [
        {
            id: 'mision',
            title: 'NUESTRA MISIÓN',
            description: `
                Nuestra misión es liderar la transformación hacia un mundo más sostenible, impulsando la 
                transición hacia una economía baja en carbono y mejorando la calidad de vida de las personas.
                Nos enfocamos en proporcionar soluciones innovadoras y eficientes de energía renovable, 
                eficiencia energética y transformación digital a nuestros clientes.`,
            image: '/images/features/solar1.jpg',
            cta: 'CONTÁCTANOS',
            link: '/contactUs'
        },
        {
            id: 'vision',
            title: 'NUESTRA VISIÓN',
            description: `
                En Master Energy, nuestra visión es un mundo en el que la energía sostenible y limpia es 
                accesible para todos. Creemos que la tecnología puede ser una fuerza para el bien y estamos 
                dedicados a desarrollar soluciones tecnológicas innovadoras que aborden los desafíos más 
                urgentes de nuestro tiempo.`,
            image: '/images/features/solar2.jpg',
            cta: 'CONTÁCTANOS',
            link: '/contactUs'
        },
        {
            id: 'valores',
            title: 'NUESTROS VALORES',
            description: `
                1. Sostenibilidad: Protegemos el medio ambiente y reducimos la huella de carbono.<br>
                2. Innovación: Ofrecemos soluciones energéticas de vanguardia.<br>
                3. Orientación al cliente: Soluciones personalizadas y eficientes.<br>
                4. Trabajo en equipo: Colaboración y aprovechamiento máximo de habilidades.<br>
                5. Integridad: Honestidad, transparencia y ética en nuestras decisiones.<br>
                6. Excelencia: Calidad en proyectos y servicios.<br>
                7. Respeto: Valoramos la diversidad y la cultura.`,
            image: '/images/features/solar3.jpg',
        }
    ];
</script>

<ContentSection title="Sobre Nosotros" description="Explora nuestra misión, visión y valores.">
    <div class="sections-container">
        {#each sections as section}
            <div class="section" id={section.id}>
                <div class="section-content">
                    <h2>{section.title}</h2>
                    <p>{@html section.description}</p>
                    {#if section.cta}
                        <a href={section.link} class="cta-button">{section.cta}</a>
                    {/if}
                </div>
                <div class="section-image">
                    <img src={section.image} alt={section.title} />
                </div>
            </div>
        {/each}
    </div>
</ContentSection>

<style lang="scss">
    .sections-container {
        display: flex;
        flex-direction: column;
        gap: 60px;

        .section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 20px;

            &:nth-child(even) {
                grid-template-columns: 1fr 1fr;
                .section-content {
                    order: 2; /* Intercala contenido e imagen en pares */
                }
            }

            .section-content {
                h2 {
                    color: #333;
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                p {
                    line-height: 1.6;
                    margin-bottom: 20px;
                }

                .cta-button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #4caf50;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #45a049;
                    }
                }
            }

            .section-image img {
                width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
        }
    }

    @media (max-width: 768px) {
        .sections-container .section {
            grid-template-columns: 1fr;
            text-align: center;

            .section-content {
                order: 1;
            }
        }
    }
</style>