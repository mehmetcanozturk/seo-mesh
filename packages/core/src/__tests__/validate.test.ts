import { describe, expect, it, vi, afterEach } from 'vitest';
import { validateSchema, validateForAI, REQUIRED_SCHEMA_FIELDS } from '../validate';

afterEach(() => {
  vi.restoreAllMocks();
});

// ─── validateSchema ──────────────────────────────────────────────────────────

describe('validateSchema', () => {
  it('does not warn for unknown types', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('UnknownType', { name: 'test' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('does not warn when all required fields are present', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Product', { name: 'My Product' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('warns when a required field is missing (undefined)', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Product', {});
    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0]![0]).toContain('"name"');
  });

  it('warns for each missing required field', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Article', {});
    expect(spy).toHaveBeenCalledTimes(2); // headline + datePublished
  });

  // BUG: null and empty string are NOT caught — only undefined is checked
  it('does NOT warn when required field is null (current behaviour)', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Product', { name: null });
    // null passes the `=== undefined` check, so no warning is emitted
    // This test documents the current (potentially surprising) behaviour
    expect(spy).not.toHaveBeenCalled();
  });

  it('does NOT warn when required field is empty string (current behaviour)', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Product', { name: '' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('REQUIRED_SCHEMA_FIELDS export contains Product with ["name"]', () => {
    expect(REQUIRED_SCHEMA_FIELDS['Product']).toEqual(['name']);
  });

  it('validates Offer requires price and priceCurrency', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('Offer', { price: 99 });
    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0]![0]).toContain('"priceCurrency"');
  });

  it('validates JobPosting requires 5 fields', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSchema('JobPosting', {});
    expect(spy).toHaveBeenCalledTimes(5);
  });

  it('skips validation in production', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const origEnv = (globalThis as Record<string, unknown>).process;
    (globalThis as Record<string, unknown>).process = { env: { NODE_ENV: 'production' } };
    try {
      validateSchema('Product', {});
      expect(spy).not.toHaveBeenCalled();
    } finally {
      (globalThis as Record<string, unknown>).process = origEnv;
    }
  });
});

// ─── validateForAI ───────────────────────────────────────────────────────────

describe('validateForAI', () => {
  it('warns when AI content type has no description', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateForAI('Product', {});
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('"description"'));
  });

  it('warns when description is under 50 chars', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateForAI('Article', { description: 'Short' });
    const calls = spy.mock.calls.map((c) => c[0] as string);
    expect(calls.some((m) => m.includes('too short'))).toBe(true);
  });

  it('does not warn for description >= 50 chars', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const longDesc = 'A'.repeat(50);
    validateForAI('Product', { description: longDesc });
    expect(spy).not.toHaveBeenCalled();
  });

  it('warns when article type is missing author', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateForAI('Article', { description: 'A'.repeat(50) });
    const calls = spy.mock.calls.map((c) => c[0] as string);
    expect(calls.some((m) => m.includes('"author"'))).toBe(true);
  });

  it('does not warn for non-AI content types', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateForAI('BreadcrumbList', {});
    expect(spy).not.toHaveBeenCalled();
  });
});
