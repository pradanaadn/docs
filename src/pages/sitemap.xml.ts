import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function getSiteBaseUrl(site: URL | undefined) {
	const baseUrl = site ?? new URL('http://localhost:4321');
	return new URL('/docs/', baseUrl);
}

function toAbsoluteUrl(baseUrl: URL, path: string) {
	return new URL(path, baseUrl).href;
}

export const GET: APIRoute = async ({ site }) => {
	const baseUrl = getSiteBaseUrl(site);
	const docs = await getCollection('docs');
	const urls = [
		toAbsoluteUrl(baseUrl, ''),
		...docs.filter((entry) => entry.id !== 'index').map((entry) => toAbsoluteUrl(baseUrl, `${entry.id}/`)),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};