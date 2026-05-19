import { describe, expect, it } from 'vitest';
import { generateSitemap } from '../generateSitemap';

describe('generateSitemap', () => {
  it('produces valid XML declaration and urlset', () => {
    const result = generateSitemap({ entries: [] });
    expect(result).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(result).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(result).toContain('</urlset>');
  });

  it('ends with a trailing newline', () => {
    const result = generateSitemap({ entries: [] });
    expect(result.endsWith('\n')).toBe(true);
  });

  it('renders a basic url entry', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/' }] });
    expect(result).toContain('<loc>https://example.com/</loc>');
  });

  it('renders lastmod when provided', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/', lastmod: '2024-01-01' }] });
    expect(result).toContain('<lastmod>2024-01-01</lastmod>');
  });

  it('renders changefreq when provided', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/', changefreq: 'weekly' }] });
    expect(result).toContain('<changefreq>weekly</changefreq>');
  });

  it('renders priority with one decimal', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/', priority: 0.8 }] });
    expect(result).toContain('<priority>0.8</priority>');
  });

  it('omits optional fields when not provided', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/' }] });
    expect(result).not.toContain('<lastmod>');
    expect(result).not.toContain('<changefreq>');
    expect(result).not.toContain('<priority>');
  });

  it('escapes & in URL', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/?a=1&b=2' }] });
    expect(result).not.toContain('&b=');
    expect(result).toContain('&amp;b=');
  });

  it('escapes < and > in URL', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/<path>' }] });
    expect(result).toContain('&lt;path&gt;');
  });

  it('adds xhtml namespace when alternates are present', () => {
    const result = generateSitemap({
      entries: [{
        url: 'https://example.com/',
        alternates: [{ lang: 'en', href: 'https://example.com/en/' }],
      }],
    });
    expect(result).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
  });

  it('does not add xhtml namespace when no alternates', () => {
    const result = generateSitemap({ entries: [{ url: 'https://example.com/' }] });
    expect(result).not.toContain('xhtml');
  });

  it('renders xhtml:link alternate entries', () => {
    const result = generateSitemap({
      entries: [{
        url: 'https://example.com/',
        alternates: [
          { lang: 'en', href: 'https://example.com/en/' },
          { lang: 'tr', href: 'https://example.com/tr/' },
        ],
      }],
    });
    expect(result).toContain('hreflang="en"');
    expect(result).toContain('hreflang="tr"');
    expect(result).toContain('href="https://example.com/en/"');
  });

  it('renders multiple entries', () => {
    const result = generateSitemap({
      entries: [
        { url: 'https://example.com/' },
        { url: 'https://example.com/about' },
      ],
    });
    const urlCount = (result.match(/<url>/g) ?? []).length;
    expect(urlCount).toBe(2);
  });

  it('escapes double-quotes inside alternate href attribute', () => {
    const result = generateSitemap({
      entries: [{
        url: 'https://example.com/',
        alternates: [{ lang: 'en', href: 'https://example.com/?q="hello"' }],
      }],
    });
    expect(result).not.toMatch(/href="[^"]*"[^"]*"[^"]*"/);
    expect(result).toContain('&quot;hello&quot;');
  });
});
