<script lang="ts">
    export let address: string;
    export let phone: string;
    export let email: string;
</script>

<div class="contact-form-container">
    <!-- Información de Contacto -->
    <div class="contact-info">
        <h2>¿Quieres empezar un nuevo proyecto?</h2>
        <p class="address">
            <strong>Dirección:</strong> {address}
        </p>
        <p class="phone">
            <strong>Teléfono:</strong> {phone}
        </p>
        <p class="email">
            <strong>Correo Electrónico:</strong> {email}
        </p>
    </div>

    <!-- Formulario de Contacto -->
    <div class="form-container">
        <form action="/send-message" method="POST">
            <label for="name">Nombre *</label>
            <input type="text" id="name" name="name" required placeholder="Ingrese su nombre" />

            <label for="email">Correo Electrónico *</label>
            <input type="email" id="email" name="email" required placeholder="Ingrese su correo electrónico" />

            <label for="phone">Teléfono *</label>
            <input type="tel" id="phone" name="phone" required placeholder="Ingrese su número de teléfono" />

            <label for="service">Seleccionar Servicio</label>
            <select id="service" name="service">
                <option value="" disabled selected>Seleccione un servicio</option>
                <option value="consulting">Consultoría</option>
                <option value="installation">Instalación</option>
                <option value="maintenance">Mantenimiento</option>
            </select>

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" placeholder="Escriba su mensaje aquí"></textarea>

            <button type="submit">Enviar Mensaje</button>
        </form>
    </div>
</div>

<style lang="scss">
    .contact-form-container {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 30px;
        margin: 0 auto;
        max-width: 1200px;
        padding: 30px;

        .contact-info {
            background-color: #cbe9ec;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 50px;

            h2 {
                font-size: 1.5rem;
                margin-bottom: 15px;
                color: #064e3b;
            }

            p {
                margin: 10px 0;
                font-size: 1rem;

                strong {
                    color: #065f46;
                }
            }
        }

        .form-container {
            padding: 20px;
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            

            form {
                display: flex;
                flex-direction: column;
                gap: 15px;

                label {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #374151;
                }

                input,
                select,
                textarea {
                    padding: 10px;
                    border: 1px solid #d1d5db;
                    border-radius: 5px;
                    font-size: 1rem;
                }

                button {
                    padding: 10px 15px;
                    background-color: #059669;
                    color: white;
                    font-size: 1rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        background-color: #047857;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .contact-form-container {
            grid-template-columns: 1fr;
        }
    }
</style>
