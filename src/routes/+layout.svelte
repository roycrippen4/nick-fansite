<script lang="ts">
	import '../app.postcss';
	import { AppShell, initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import { AppBar, Footer, RandomFlash } from '@components';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';

	if (browser) {
		const section = document.querySelector('section');
		const checkbox = section?.querySelector('input');

		checkbox?.addEventListener('change', () => {
			section?.classList.toggle('enable-animation');
		});
	}

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

<Drawer>
	<div>
		<h1 class="h1">Drawer Content</h1>
	</div>
</Drawer>

<RandomFlash />
