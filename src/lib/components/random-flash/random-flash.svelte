<script>
	import { onMount } from 'svelte';
	import { meatspin } from '@images';

	let show = false;
	// let content = 'Hello World';

	function randomDelay() {
		// return Math.random() * (600000 - 60000) + 60000;
		return Math.random() * (600000 - 60000) + 60000;
	}

	function flashContent() {
		show = true;
		setTimeout(() => {
			show = false;
			setTimeout(flashContent, randomDelay());
		}, 500);
	}

	onMount(() => {
		setTimeout(flashContent, randomDelay());
	});
</script>

{#if show}
	<div>
		<img
			src={meatspin}
			alt="meatspin"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full"
		/>
	</div>
{/if}
