// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	site: 'https://pradanaadn.github.io',
    base: '/docs',
	
	integrations: [
		sitemap(),
		starlight({
			title: 'Pradana Adnyana',
			description:
				'AI/ML Engineer building practical machine learning products, computer vision systems, and MLOps solutions.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pradanaadn/docs' }],
			plugins: [starlightThemeRapide()],
			customCss: [
                './src/styles/custom.css',
            ],
			sidebar: [
				{
					label: 'Notes',
					items: [{ autogenerate: { directory: 'notes' } }],
				},
				{
					label: 'Tutorial',
					items: [{ autogenerate: { directory: 'tutorials' } }],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						charset: 'UTF-8',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: '9xlSg2YNj-bBORDdhCIUGs3sgKcbeyNiNy7GCK0J9I',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content:
							'AI/ML Engineer building practical machine learning products, computer vision systems, and MLOps solutions that help teams ship faster.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content:
							'Pradana Adnyana, Machine Learning Engineer, AI Engineer, MLOps Engineer, Computer Vision, Natural Language Processing, Deep Learning, Python Developer, TensorFlow, PyTorch, AI Product Development, Model Deployment, Machine Learning Portfolio, Artificial Intelligence, Data Science, Software Engineer, Backend Developer, Prompt Engineering, Generative AI, LLM Applications, AI Automation, Predictive Analytics, API Development, Cloud Deployment, MLOps Best Practices, Portfolio, Pradana, Adnyana, pradanaadn, Putu Gede Pradana Adnyana, ML Engineer, AI Specialist, Computer Vision Engineer, NLP Engineer',
						},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Pradana Adnyana',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'Pradana Adnyana Notes',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
            ],
		}),
	],
});
