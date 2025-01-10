<script lang="ts">
    import ContentSection from '$lib/components/organisms/ContentSection.svelte';
    import Button from '$lib/components/atoms/Button.svelte';

    const teamMembers = [
        {
            name: 'Melvin Cevallos',
            position: 'UI/UX Designer - Frontend Developer',
            image: '/images/team/melvin.png',
        },
        {
            name: 'Luis Gaona',
            position: 'Project Manager',
            image: '/images/team/luis.png',
        },
        {
            name: 'John Pérez',
            position: 'Quality Assurance',
            image: '/images/team/john.png',
        },
        {
            name: 'Roberth Loaiza',
            position: 'Backend Developer',
            image: '/images/team/roberth.png',
        },
        {
            name: 'Ricardo Valle',
            position: 'Backend Developer',
            image: '/images/team/ricardo.png',
        }
    ];
</script>

<ContentSection
    id="team-section"
    title="Nuestro Equipo"
    description="Conoce a los profesionales detrás de nuestro éxito."
    align="left"
>
    <div slot="button">
        <Button href="/contactUs">Contáctanos</Button>
    </div>

    <div class="grid">
        {#each teamMembers as member}
            <div class="card">
                <div class="image-container">
                    <img src={member.image} alt={member.name} />
                </div>
                <div class="info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                </div>
            </div>
        {/each}
    </div>
</ContentSection>

<style lang="scss">
    @import '$lib/scss/breakpoints.scss';

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @include for-phone-only {
            grid-template-columns: 1fr;
        }
    }

    .card {
        background-color: #f7f9fc; // Fondo claro personalizado
        border: 1px solid #e0e4eb;
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 20px;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-10px);
        }

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        .info {
            h3 {
                font-size: 1.2rem;
                color: #333;
                margin: 10px 0 5px;
            }

            p {
                font-size: 1rem;
                color: #666;
                margin: 0;
            }
        }
    }
</style>