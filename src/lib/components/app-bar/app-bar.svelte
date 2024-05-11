<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import AppBarTrail from './app-bar-trail.svelte';
	import AppBarLead from './app-bar-lead.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<AppBarLead />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<AppBarTrail />
	</svelte:fragment>
</AppBar>
