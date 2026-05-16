import { createElement, Fragment } from 'react';
import { describe, expect, it } from 'vitest';
import { extractText, traverseForSchema } from '../traverse';

// Mock component refs — identity is what matters, not implementation
function MockSchemaProp(_props: { name: string; value?: unknown; children?: unknown }) {
  return null;
}
function MockSchemaScope(_props: { type: string; prop?: string; children?: unknown }) {
  return null;
}

const refs = {
  SchemaPropRef: MockSchemaProp,
  SchemaScopeRef: MockSchemaScope,
};

// ─── extractText ────────────────────────────────────────────────────────────

describe('extractText', () => {
  it('returns string as-is', () => {
    expect(extractText('hello')).toBe('hello');
  });

  it('converts number to string', () => {
    expect(extractText(42)).toBe('42');
  });

  it('joins array of strings', () => {
    expect(extractText(['a', 'b', 'c'])).toBe('abc');
  });

  it('recurses into React element children', () => {
    const el = createElement('span', null, 'deep text');
    expect(extractText(el)).toBe('deep text');
  });

  it('handles mixed array (string + element + null)', () => {
    const el = createElement('em', null, 'world');
    expect(extractText(['hello ', el, null])).toBe('hello world');
  });

  it('returns undefined for null', () => {
    expect(extractText(null)).toBeUndefined();
  });

  it('returns undefined for boolean', () => {
    expect(extractText(false)).toBeUndefined();
    expect(extractText(true)).toBeUndefined();
  });

  it('returns undefined for undefined', () => {
    expect(extractText(undefined)).toBeUndefined();
  });
});

// ─── traverseForSchema — basics ─────────────────────────────────────────────

describe('traverseForSchema — basic', () => {
  it('produces @context and @type on root schema', () => {
    const result = traverseForSchema(null, { ...refs, type: 'Product', isRoot: true });
    expect(result['@context']).toBe('https://schema.org');
    expect(result['@type']).toBe('Product');
  });

  it('omits @context when isRoot=false', () => {
    const result = traverseForSchema(null, { ...refs, type: 'Offer', isRoot: false });
    expect(result['@context']).toBeUndefined();
    expect(result['@type']).toBe('Offer');
  });

  it('extracts a SchemaProp by string children', () => {
    const children = createElement(MockSchemaProp, { name: 'name', children: 'My Product' });
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('My Product');
  });

  it('extracts a SchemaProp with explicit value prop', () => {
    const children = createElement(MockSchemaProp, { name: 'price', value: 99.9, children: '$99.90' });
    const result = traverseForSchema(children, { ...refs, type: 'Offer' });
    expect(result['price']).toBe(99.9);
  });

  it('extracts multiple SchemaProp nodes', () => {
    const children = [
      createElement(MockSchemaProp, { key: '1', name: 'name', children: 'Widget' }),
      createElement(MockSchemaProp, { key: '2', name: 'description', children: 'A great widget' }),
    ];
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('Widget');
    expect(result['description']).toBe('A great widget');
  });

  it('ignores non-SchemaProp, non-SchemaScope elements', () => {
    const children = createElement('div', null, 'just display text');
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(Object.keys(result)).toEqual(['@context', '@type']);
  });
});

// ─── traverseForSchema — nesting ────────────────────────────────────────────

describe('traverseForSchema — nesting', () => {
  it('recurses through HTML wrapper elements', () => {
    const children = createElement(
      'h1',
      null,
      createElement(MockSchemaProp, { name: 'name', children: 'My Product' }),
    );
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('My Product');
  });

  it('recurses through Fragment', () => {
    const children = createElement(
      Fragment,
      null,
      createElement(MockSchemaProp, { name: 'name', children: 'Fragmented' }),
    );
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('Fragmented');
  });

  it('recurses through multiple levels of HTML wrappers', () => {
    const deep = createElement(
      'section',
      null,
      createElement(
        'div',
        null,
        createElement(
          'p',
          null,
          createElement(MockSchemaProp, { name: 'description', children: 'Deep' }),
        ),
      ),
    );
    const result = traverseForSchema(deep, { ...refs, type: 'Product' });
    expect(result['description']).toBe('Deep');
  });

  it('detects nested SchemaScope with prop and returns nested object', () => {
    const nested = createElement(
      MockSchemaScope,
      { type: 'Offer', prop: 'offers' },
      createElement(MockSchemaProp, { name: 'price', children: '99.90' }),
    );
    const result = traverseForSchema(nested, { ...refs, type: 'Product' });
    const offers = result['offers'] as { '@type': string; price: string };
    expect(offers['@type']).toBe('Offer');
    expect(offers['price']).toBe('99.90');
  });

  it('handles multiple nested SchemaScope with same prop → array', () => {
    const children = [
      createElement(
        MockSchemaScope,
        { key: 'o1', type: 'Offer', prop: 'offers' },
        createElement(MockSchemaProp, { name: 'price', children: '10' }),
      ),
      createElement(
        MockSchemaScope,
        { key: 'o2', type: 'Offer', prop: 'offers' },
        createElement(MockSchemaProp, { name: 'price', children: '20' }),
      ),
    ];
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(Array.isArray(result['offers'])).toBe(true);
    const offers = result['offers'] as Array<{ price: string }>;
    expect(offers).toHaveLength(2);
    expect(offers[0]?.price).toBe('10');
    expect(offers[1]?.price).toBe('20');
  });

  it('does not recurse into SchemaProp children for schema extraction', () => {
    // SchemaProp with inner element — only its direct value/text should be extracted
    const children = createElement(
      MockSchemaProp,
      { name: 'name' },
      createElement('strong', null, 'Bold Name'),
    );
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('Bold Name');
    // Should NOT also have 'strong' as a key
    expect(result['strong']).toBeUndefined();
  });
});

// ─── traverseForSchema — edge cases ─────────────────────────────────────────

describe('traverseForSchema — edge cases', () => {
  it('handles null children gracefully', () => {
    const result = traverseForSchema(null, { ...refs, type: 'Product' });
    expect(result['@type']).toBe('Product');
  });

  it('handles boolean false children (conditional rendering)', () => {
    const children = [
      false as unknown as null,
      createElement(MockSchemaProp, { key: '1', name: 'name', children: 'Available' }),
    ];
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(result['name']).toBe('Available');
  });

  it('handles empty array children', () => {
    const result = traverseForSchema([], { ...refs, type: 'Product' });
    expect(result['@type']).toBe('Product');
  });

  it('coerces duplicate SchemaProp names to array', () => {
    const children = [
      createElement(MockSchemaProp, { key: '1', name: 'image', children: 'a.jpg' }),
      createElement(MockSchemaProp, { key: '2', name: 'image', children: 'b.jpg' }),
    ];
    const result = traverseForSchema(children, { ...refs, type: 'Product' });
    expect(Array.isArray(result['image'])).toBe(true);
    expect(result['image']).toEqual(['a.jpg', 'b.jpg']);
  });

  it('uses explicit numeric value from SchemaProp.value', () => {
    const children = createElement(MockSchemaProp, { name: 'price', value: 99.9, children: '$99.90' });
    const result = traverseForSchema(children, { ...refs, type: 'Offer' });
    expect(result['price']).toBe(99.9);
    expect(typeof result['price']).toBe('number');
  });

  it('nested SchemaScope without prop is ignored (no orphan data)', () => {
    const nested = createElement(
      MockSchemaScope,
      { type: 'Offer' },
      createElement(MockSchemaProp, { name: 'price', children: '99' }),
    );
    const result = traverseForSchema(nested, { ...refs, type: 'Product' });
    // No prop on nested scope → should not add anything to parent
    expect(result['price']).toBeUndefined();
    expect(result['offers']).toBeUndefined();
  });

  it('full Product+Offer example produces correct JSON-LD', () => {
    const children = [
      createElement(
        'h1',
        { key: 'h1' },
        createElement(MockSchemaProp, { name: 'name', children: 'WordPress Hosting' }),
      ),
      createElement(
        'p',
        { key: 'p' },
        createElement(MockSchemaProp, { name: 'description', children: 'Fast NVMe SSD hosting' }),
      ),
      createElement(
        MockSchemaScope,
        { key: 'offer', type: 'Offer', prop: 'offers' },
        createElement(MockSchemaProp, { name: 'price', value: 99.9, children: '99.90' }),
        createElement(MockSchemaProp, { name: 'priceCurrency', children: 'TRY' }),
      ),
    ];

    const result = traverseForSchema(children, { ...refs, type: 'Product' });

    expect(result['@context']).toBe('https://schema.org');
    expect(result['@type']).toBe('Product');
    expect(result['name']).toBe('WordPress Hosting');
    expect(result['description']).toBe('Fast NVMe SSD hosting');

    const offers = result['offers'] as { '@type': string; price: number; priceCurrency: string };
    expect(offers['@type']).toBe('Offer');
    expect(offers['price']).toBe(99.9);
    expect(offers['priceCurrency']).toBe('TRY');
  });
});
