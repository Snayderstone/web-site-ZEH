<script>
    import Socials from '$lib/components/molecules/Socials.svelte';
    import RssLink from '$lib/components/atoms/RssLink.svelte';
    import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
</script>

<footer>
    <div class="footer-content">
        <div class="footer-section about">
            <h3>Sobre Nosotros</h3>
            <p>
                Soluciones de energía sostenible para hogares y empresas,
                promoviendo un futuro más verde y sostenible.
            </p>
        </div>

        <div class="footer-section links">
            <h3>Enlaces Rápidos</h3>
            <ul>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
        </div>

        <div class="footer-section social">
            <h3>Síguenos</h3>
            <div class="icons">
                <Socials />
                <RssLink />
                <ThemeToggle />
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>
            &copy; 2024 Zero Energy Home. Todos los derechos reservados. <br />
            Desarrollado con <a href="https://kit.svelte.dev/">SvelteKit</a> | Icons by
            <a href="https://iconoir.com/">Iconoir</a>
        </p>
    </div>
</footer>

<style lang="scss">
footer {
    background: linear-gradient(120deg, #e6f8f7, #c0e3e7);
    color: #333;
    font-size: 13px;

    .footer-content {
        display: flex;
        justify-content: space-between;
        padding: 20px 10%;
        flex-wrap: wrap;

        .footer-section {
            flex: 1 1 200px;
            margin: 10px;

            h3 {
                color: #4caf50;
                font-size: 14px;
                margin-bottom: 8px;
                font-weight: bold;
            }

            p,
            ul {
                margin: 0;
                font-size: 12px;
                line-height: 1.4;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 5px;

                    a {
                        text-decoration: none;
                        color: #333;

                        &:hover {
                            color: #4caf50;
                        }
                    }
                }
            }

            .icons {
                display: flex;
                gap: 10px;

                svg {
                    width: 20px;
                    height: 20px;
                    color: #4caf50;

                    &:hover {
                        color: #388e3c;
                    }
                }
            }
        }
    }

    .footer-bottom {
        text-align: center;
        padding: 10px 0;
        border-top: 1px solid #dcdcdc;
        font-size: 12px;

        a {
            color: #4caf50;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>