import { describe, expect, it } from 'vitest';
import { generateLlmsTxt } from '../generateLlmsTxt';

describe('generateLlmsTxt', () => {
  it('starts with # siteName heading', () => {
    const result = generateLlmsTxt({ siteName: 'My Site', sections: [] });
    expect(result.startsWith('# My Site')).toBe(true);
  });

  it('ends with trailing newline', () => {
    const result = generateLlmsTxt({ siteName: 'My Site', sections: [] });
    expect(result.endsWith('\n')).toBe(true);
  });

  it('includes tagline as blockquote when provided', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      tagline: 'The best site',
      sections: [],
    });
    expect(result).toContain('> The best site');
  });

  it('omits tagline line when not provided', () => {
    const result = generateLlmsTxt({ siteName: 'My Site', sections: [] });
    expect(result).not.toContain('>');
  });

  it('renders section heading as ## title', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [{ title: 'Docs', links: [] }],
    });
    expect(result).toContain('## Docs');
  });

  it('renders link as markdown list item', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [
        {
          title: 'Docs',
          links: [{ label: 'Getting Started', url: 'https://example.com/start' }],
        },
      ],
    });
    expect(result).toContain('- [Getting Started](https://example.com/start)');
  });

  it('appends description after link when provided', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [
        {
          title: 'Docs',
          links: [
            { label: 'API', url: 'https://example.com/api', description: 'Full API reference' },
          ],
        },
      ],
    });
    expect(result).toContain('- [API](https://example.com/api): Full API reference');
  });

  it('omits colon+description when description is not set', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [
        {
          title: 'Docs',
          links: [{ label: 'Home', url: 'https://example.com/' }],
        },
      ],
    });
    const line = result.split('\n').find((l) => l.includes('[Home]'));
    expect(line).toBe('- [Home](https://example.com/)');
  });

  it('renders multiple sections', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [
        { title: 'Docs', links: [] },
        { title: 'Blog', links: [] },
      ],
    });
    expect(result).toContain('## Docs');
    expect(result).toContain('## Blog');
  });

  it('renders multiple links in a section', () => {
    const result = generateLlmsTxt({
      siteName: 'My Site',
      sections: [
        {
          title: 'Pages',
          links: [
            { label: 'Home', url: 'https://example.com/' },
            { label: 'About', url: 'https://example.com/about' },
          ],
        },
      ],
    });
    expect(result).toContain('[Home]');
    expect(result).toContain('[About]');
  });

  it('full document structure is correct', () => {
    const result = generateLlmsTxt({
      siteName: 'Acme Corp',
      tagline: 'Building great things',
      sections: [
        {
          title: 'Products',
          links: [{ label: 'Widget', url: 'https://acme.com/widget', description: 'Our flagship product' }],
        },
      ],
    });
    const expected = [
      '# Acme Corp',
      '',
      '> Building great things',
      '',
      '## Products',
      '',
      '- [Widget](https://acme.com/widget): Our flagship product',
      '',
    ].join('\n');
    expect(result).toBe(expected);
  });
});
