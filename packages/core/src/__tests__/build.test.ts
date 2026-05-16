import { describe, expect, it } from 'vitest';
import { createJsonLdObject, mergeJsonLdProp } from '../build';

describe('createJsonLdObject', () => {
  it('creates object with @type', () => {
    const obj = createJsonLdObject('Product');
    expect(obj['@type']).toBe('Product');
  });

  it('does not include @context', () => {
    const obj = createJsonLdObject('Product');
    expect(obj['@context']).toBeUndefined();
  });
});

describe('mergeJsonLdProp', () => {
  it('adds a new key', () => {
    const obj = createJsonLdObject('Product');
    mergeJsonLdProp(obj, 'name', 'Test');
    expect(obj['name']).toBe('Test');
  });

  it('coerces existing scalar to array when key exists', () => {
    const obj = createJsonLdObject('Product');
    mergeJsonLdProp(obj, 'image', 'first.jpg');
    mergeJsonLdProp(obj, 'image', 'second.jpg');
    expect(obj['image']).toEqual(['first.jpg', 'second.jpg']);
  });

  it('appends to existing array when key already is array', () => {
    const obj = createJsonLdObject('Product');
    mergeJsonLdProp(obj, 'image', 'a.jpg');
    mergeJsonLdProp(obj, 'image', 'b.jpg');
    mergeJsonLdProp(obj, 'image', 'c.jpg');
    expect(obj['image']).toEqual(['a.jpg', 'b.jpg', 'c.jpg']);
  });

  it('accepts numeric values', () => {
    const obj = createJsonLdObject('Offer');
    mergeJsonLdProp(obj, 'price', 99.9);
    expect(obj['price']).toBe(99.9);
  });

  it('accepts null values', () => {
    const obj = createJsonLdObject('Product');
    mergeJsonLdProp(obj, 'image', null);
    expect(obj['image']).toBeNull();
  });
});
