import { describe, expect, it } from 'vitest';
import { generateRobotsTxt } from '../generateRobotsTxt';

describe('generateRobotsTxt', () => {
  it('renders User-agent and Disallow for a simple rule', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*', disallow: '/admin' }],
    });
    expect(result).toContain('User-agent: *');
    expect(result).toContain('Disallow: /admin');
  });

  it('renders Allow lines', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*', allow: '/public', disallow: '/' }],
    });
    expect(result).toContain('Allow: /public');
  });

  it('renders multiple user-agents from array', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: ['Googlebot', 'Bingbot'], disallow: '/private' }],
    });
    expect(result).toContain('User-agent: Googlebot');
    expect(result).toContain('User-agent: Bingbot');
  });

  it('renders Crawl-delay when provided', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*', crawlDelay: 10 }],
    });
    expect(result).toContain('Crawl-delay: 10');
  });

  it('renders Sitemap when provided as string', () => {
    const result = generateRobotsTxt({
      rules: [],
      sitemap: 'https://example.com/sitemap.xml',
    });
    expect(result).toContain('Sitemap: https://example.com/sitemap.xml');
  });

  it('renders multiple Sitemap entries from array', () => {
    const result = generateRobotsTxt({
      rules: [],
      sitemap: ['https://example.com/sitemap.xml', 'https://example.com/news-sitemap.xml'],
    });
    expect(result).toContain('Sitemap: https://example.com/sitemap.xml');
    expect(result).toContain('Sitemap: https://example.com/news-sitemap.xml');
  });

  it('renders Host when provided', () => {
    const result = generateRobotsTxt({
      rules: [],
      host: 'example.com',
    });
    expect(result).toContain('Host: example.com');
  });

  it('separates rules with a blank line', () => {
    const result = generateRobotsTxt({
      rules: [
        { userAgent: 'Googlebot', disallow: '/private' },
        { userAgent: '*', disallow: '/' },
      ],
    });
    // Each rule block ends with an empty line → double newline between blocks
    expect(result).toContain('\n\n');
  });

  it('handles rules with no allow/disallow', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*' }],
    });
    expect(result).toContain('User-agent: *');
    expect(result).not.toContain('Allow:');
    expect(result).not.toContain('Disallow:');
  });

  it('renders allow as array', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*', allow: ['/a', '/b'] }],
    });
    expect(result).toContain('Allow: /a');
    expect(result).toContain('Allow: /b');
  });

  it('ends with a trailing newline when sitemap is present', () => {
    const result = generateRobotsTxt({
      rules: [{ userAgent: '*', disallow: '/' }],
      sitemap: 'https://example.com/sitemap.xml',
    });
    expect(result.endsWith('\n')).toBe(true);
  });
});
