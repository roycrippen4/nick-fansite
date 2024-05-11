<script lang="ts">
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { Menu } from '@icons';

	const drawer = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		width: '300px'
	};

	const open = () => drawer.open(drawerSettings);
</script>

<button class="btn btn-icon variant-ghost-surface" on:click={open}><Menu /></button>
