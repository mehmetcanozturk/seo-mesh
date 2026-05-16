import { generateSitemap } from '@seo-mesh/next';

export function GET() {
  const content = generateSitemap({
    entries: [
      {
        url: 'https://seo-mesh.dev',
        lastmod: '2026-05-15',
        changefreq: 'weekly',
        priority: 1.0,
        alternates: [
          { lang: 'tr', href: 'https://seo-mesh.dev/tr' },
          { lang: 'en', href: 'https://seo-mesh.dev/en' },
        ],
      },
      {
        url: 'https://seo-mesh.dev/urun',
        lastmod: '2026-05-15',
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://seo-mesh.dev/blog',
        lastmod: '2026-05-15',
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://seo-mesh.dev/sss',
        lastmod: '2026-05-15',
        changefreq: 'monthly',
        priority: 0.7,
      },
    ],
  });

  return new Response(content, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
