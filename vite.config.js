import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			'@': path.resolve('./src')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
