import { generateRobotsTxt } from '@seo-mesh/next';

export function GET() {
  const content = generateRobotsTxt({
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
      { userAgent: ['GPTBot', 'CCBot', 'Google-Extended'], disallow: '/' },
    ],
    sitemap: 'https://seo-mesh.dev/sitemap.xml',
    host: 'seo-mesh.dev',
  });

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
