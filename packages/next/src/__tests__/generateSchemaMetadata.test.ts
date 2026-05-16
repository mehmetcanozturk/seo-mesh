import { createElement } from 'react';
import { describe, expect, it } from 'vitest';
import { buildSchemaFromTraversal, schemaToMetadataScript } from '../generateSchemaMetadata';

function MockSchemaProp(_props: { name: string; value?: unknown; children?: unknown }) {
  return null;
}
function MockSchemaScope(_props: { type: string; prop?: string; children?: unknown }) {
  return null;
}

describe('buildSchemaFromTraversal', () => {
  it('returns a SchemaNode with @context and @type', () => {
    const result = buildSchemaFromTraversal({
      type: 'Product',
      children: null,
      SchemaPropRef: MockSchemaProp,
      SchemaScopeRef: MockSchemaScope,
    });
    expect(result['@context']).toBe('https://schema.org');
    expect(result['@type']).toBe('Product');
  });

  it('extracts props from JSX children', () => {
    const children = createElement(MockSchemaProp, { name: 'name', children: 'Test Product' });
    const result = buildSchemaFromTraversal({
      type: 'Product',
      children,
      SchemaPropRef: MockSchemaProp,
      SchemaScopeRef: MockSchemaScope,
    });
    expect(result['name']).toBe('Test Product');
  });
});

describe('schemaToMetadataScript', () => {
  it('returns object with "other" key', () => {
    const schema = { '@context': 'https://schema.org' as const, '@type': 'Product' };
    const result = schemaToMetadataScript(schema);
    expect(result).toHaveProperty('other');
  });

  it('"other" key contains serialized JSON-LD string', () => {
    const schema = { '@context': 'https://schema.org' as const, '@type': 'Product', name: 'Test' };
    const result = schemaToMetadataScript(schema);
    const parsed = JSON.parse(result.other['application/ld+json'] ?? '{}');
    expect(parsed['@type']).toBe('Product');
    expect(parsed['name']).toBe('Test');
  });

  it('serialized JSON-LD is XSS-safe (no raw < > & /)', () => {
    const schema = {
      '@context': 'https://schema.org' as const,
      '@type': 'Product',
      name: '<script>alert(1)</script>',
    };
    const result = schemaToMetadataScript(schema);
    const raw = result.other['application/ld+json'] ?? '';
    expect(raw).not.toContain('<script>');
    expect(raw).not.toContain('</script>');
  });
});
