import { describe, expect, it } from 'vitest';
import { serializeJsonLd } from '../serialize';
import type { SchemaNode } from '../types';

const base: SchemaNode = {
  '@context': 'https://schema.org',
  '@type': 'Product',
};

describe('serializeJsonLd', () => {
  it('produces valid JSON', () => {
    const result = serializeJsonLd(base);
    expect(() => JSON.parse(result)).not.toThrow();
  });

  it('escapes < to \\u003c', () => {
    const schema: SchemaNode = { ...base, name: '<script>' };
    expect(serializeJsonLd(schema)).toContain('\\u003cscript\\u003e');
  });

  it('escapes > to \\u003e', () => {
    const schema: SchemaNode = { ...base, name: 'a > b' };
    expect(serializeJsonLd(schema)).toContain('a \\u003e b');
  });

  it('escapes & to \\u0026', () => {
    const schema: SchemaNode = { ...base, name: 'foo & bar' };
    expect(serializeJsonLd(schema)).toContain('foo \\u0026 bar');
  });

  it('escapes / to \\u002f (prevents </script> injection)', () => {
    const schema: SchemaNode = { ...base, name: '</script>' };
    const result = serializeJsonLd(schema);
    expect(result).not.toContain('</script>');
    expect(result).toContain('\\u002f');
  });

  it('handles nested objects', () => {
    const schema: SchemaNode = {
      ...base,
      offers: { '@type': 'Offer', price: '99' },
    };
    const result = serializeJsonLd(schema);
    const parsed = JSON.parse(result);
    expect(parsed.offers['@type']).toBe('Offer');
    expect(parsed.offers.price).toBe('99');
  });

  it('handles arrays', () => {
    const schema: SchemaNode = {
      ...base,
      offers: [
        { '@type': 'Offer', price: '10' },
        { '@type': 'Offer', price: '20' },
      ],
    };
    const parsed = JSON.parse(serializeJsonLd(schema));
    expect(parsed.offers).toHaveLength(2);
  });

  it('roundtrips cleanly when no unsafe chars present', () => {
    const schema: SchemaNode = { ...base, name: 'Normal product name', price: 99 };
    const parsed = JSON.parse(serializeJsonLd(schema));
    expect(parsed.name).toBe('Normal product name');
    expect(parsed.price).toBe(99);
  });
});
