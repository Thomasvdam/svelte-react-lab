<script>
	import HelloNameComponent from './HelloNameComponent.svelte';
	import ByeNameComponent from './ByeNameComponent.svelte';

	let state = true;
	setInterval(() => {
		state = !state;
	}, 1);
</script>

<main>
	{#if state}
		<HelloNameComponent />
	{:else}
		<ByeNameComponent />
	{/if}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(h1) {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
