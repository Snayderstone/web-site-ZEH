<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	let A = 10;
	let eta = 0.2;
	let I_promedio = 5.5;
	let horas_sol = 12;

	let results = writable([]);
	let total_energy = writable(0);
	let loading = writable(false);
	let error = writable('');

	async function optimizeSolarPanel() {
		loading.set(true);
		error.set('');
		try {
			const response = await fetch(
				'https://congenial-halibut-xvrxpx9qrjg2v65w-5000.app.github.dev/api/v1/solar/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ A, eta, I_promedio, horas_sol })
				}
			);
			const data = await response.json();
			if (data.status === 'success') {
				results.set(data.results);
				total_energy.set(data.total_energy);
			} else {
				error.set(data.message);
			}
		} catch (err) {
			error.set('Error al conectar con la API.');
		} finally {
			loading.set(false);
		}
	}
</script>

<div class="container">
	<ContentSection title="Simulador de Optimización de Orientación del Panel Solar">
		<form on:submit|preventDefault={optimizeSolarPanel}>
			<div>
				<label for="A">Área del panel solar (m²):</label>
				<input type="number" id="A" bind:value={A} min="0" step="0.1" required />
			</div>
			<div>
				<label for="eta">Eficiencia del panel (%):</label>
				<input type="number" id="eta" bind:value={eta} min="0" max="1" step="0.01" required />
			</div>
			<div>
				<label for="I_promedio">Radiación solar promedio diaria (kWh/m²):</label>
				<input type="number" id="I_promedio" bind:value={I_promedio} min="0" step="0.1" required />
			</div>
			<div>
				<label for="horas_sol">Duración del día (horas):</label>
				<input type="number" id="horas_sol" bind:value={horas_sol} min="0" max="24" required />
			</div>
			<button type="submit">Optimizar</button>
		</form>

		{#if $loading}
			<p>Cargando...</p>
		{:else if $error}
			<p>Error: {$error}</p>
		{:else if $results.length > 0}
			<h2>Resultados</h2>
			<ul>
				{#each $results as result}
					<li>
						Hora: {result.Hora}, Radiación Solar: {result['Radiación Solar (kWh/m²)']}, Inclinación: {result[
							'Inclinación (θ)'
						]}, Orientación: {result['Orientación (φ)']}, Energía Generada: {result[
							'Energía Generada (kWh)'
						]}
					</li>
				{/each}
			</ul>
			<p>Energía total generada: {$total_energy} kWh</p>
		{/if}
	</ContentSection>
</div>

<style lang="scss">
	/* Tus estilos aquí */
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
