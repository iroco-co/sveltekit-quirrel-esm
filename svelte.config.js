import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: 'warn'
		},
		adapter: adapter()
	}
};

export default config;
