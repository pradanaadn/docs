// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	site: 'https://pradanaadn.github.io',
    base: '/docs',
	
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
					label: 'Notes',
					autogenerate: { directory: 'notes' }
				},
				{
					label: 'Tutorial',
					autogenerate: { directory: 'tutorials' },
				},
			],
			head: [
                {

                    tag: 'meta',
                    attrs: {
                        name: 'google-site-verification',
                        content: '9xlSg2YNj-bBORDdhCIUGs3sgKcbeyNiNy7GCK0J9I'
                    }
                }
            ],
		}),
	],
});
