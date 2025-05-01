// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	site: 'https://pradanaadn.github.io',
    base: '/',
	integrations: [
		starlight({
			title: 'Pradana Adnyana',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pradanaadn/docs' }],
			plugins: [starlightThemeRapide()],
			customCss: [
                './src/styles/custom.css',
            ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
