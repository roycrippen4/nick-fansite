import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		alias: {
			['@icons']: './src/lib/icons',
			['@components']: './src/lib/components',
			['@utils']: './src/lib/utils',
			['@images']: './src/lib/images'
		}
	}
};
export default config;
