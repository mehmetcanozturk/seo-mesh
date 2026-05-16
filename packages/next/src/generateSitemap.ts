// eslint-disable-next-line @typescript-eslint/ban-types
type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | (string & {});

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: Changefreq;
  priority?: number;
  alternates?: { lang: string; href: string }[];
}

export interface SitemapOptions {
  entries: SitemapEntry[];
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function generateSitemap({ entries }: SitemapOptions): string {
  const hasAlternates = entries.some((e) => e.alternates && e.alternates.length > 0);
  const xhtmlNs = hasAlternates
    ? '\n  xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : '';

  const urls = entries.map((entry) => {
    const lines = [`  <url>`, `    <loc>${esc(entry.url)}</loc>`];
    if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    if (entry.changefreq) lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    if (entry.priority !== undefined) lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
    if (entry.alternates) {
      for (const alt of entry.alternates) {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${esc(alt.href)}"/>`);
      }
    }
    lines.push(`  </url>`);
    return lines.join('\n');
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${xhtmlNs}>`,
    ...urls,
    `</urlset>`,
  ].join('\n') + '\n';
}
