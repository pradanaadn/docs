import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const LAST_MODIFIED = '2026-05-21';

function getSiteBaseUrl(site: URL | undefined) {
	const baseUrl = site ?? new URL('http://localhost:4321');
	return new URL('/docs/', baseUrl);
}

function toAbsoluteUrl(baseUrl: URL, path: string) {
	return new URL(path, baseUrl).href;
}

function getUrlEntries(baseUrl: URL) {
	return [
		{
			loc: toAbsoluteUrl(baseUrl, ''),
			changefreq: 'weekly',
			priority: '1.0',
		},
		...['notes/python-typing/', 'tutorials/arize-phoenix/', 'tutorials/ten-vad/', 'welcome/'].map((path) => ({
			loc: toAbsoluteUrl(baseUrl, path),
			changefreq: 'monthly',
			priority: '0.8',
		})),
	];
}

export const GET: APIRoute = async ({ site }) => {
	const baseUrl = getSiteBaseUrl(site);
	await getCollection('docs');
	const urls = getUrlEntries(baseUrl);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
		.map(
			(url) =>
				`  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${LAST_MODIFIED}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`,
		)
		.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};