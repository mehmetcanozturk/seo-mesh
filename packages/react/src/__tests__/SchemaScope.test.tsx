import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SchemaScope } from '../SchemaScope';
import { SchemaProp } from '../SchemaProp';

function getJsonLd(container: HTMLElement): Record<string, unknown> | null {
  const script = container.querySelector('script[type="application/ld+json"]');
  if (!script?.textContent) return null;
  return JSON.parse(script.textContent) as Record<string, unknown>;
}

describe('SchemaScope — server component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <SchemaScope type="Product">
        <p>Hello</p>
      </SchemaScope>,
    );
    expect(getByText('Hello')).toBeTruthy();
  });

  it('injects <script type="application/ld+json"> for root scope', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaProp name="name">Test</SchemaProp>
      </SchemaScope>,
    );
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
  });

  it('does NOT inject script for nested scope (has prop)', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaScope type="Offer" prop="offers">
          <SchemaProp name="price">10</SchemaProp>
        </SchemaScope>
      </SchemaScope>,
    );
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts).toHaveLength(1);
  });

  it('script content has correct @type and @context', () => {
    const { container } = render(<SchemaScope type="Product" />);
    const data = getJsonLd(container);
    expect(data?.['@type']).toBe('Product');
    expect(data?.['@context']).toBe('https://schema.org');
  });

  it('extracts SchemaProp name from direct child', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaProp name="name">My Product</SchemaProp>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(data?.['name']).toBe('My Product');
  });

  it('extracts SchemaProp inside <h1> wrapper', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <h1>
          <SchemaProp name="name">Wrapped Product</SchemaProp>
        </h1>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(data?.['name']).toBe('Wrapped Product');
  });

  it('extracts multiple props into correct schema keys', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaProp name="name">Widget</SchemaProp>
        <SchemaProp name="description">A great widget</SchemaProp>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(data?.['name']).toBe('Widget');
    expect(data?.['description']).toBe('A great widget');
  });

  it('extracts nested SchemaScope into nested JSON-LD object', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaProp name="name">WordPress Hosting</SchemaProp>
        <SchemaScope type="Offer" prop="offers">
          <SchemaProp name="price" value={99.9}>
            99.90
          </SchemaProp>
          <SchemaProp name="priceCurrency">TRY</SchemaProp>
        </SchemaScope>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(data?.['name']).toBe('WordPress Hosting');
    const offers = data?.['offers'] as Record<string, unknown>;
    expect(offers?.['@type']).toBe('Offer');
    expect(offers?.['price']).toBe(99.9);
    expect(offers?.['priceCurrency']).toBe('TRY');
  });

  it('extracts SchemaProp.value (explicit) correctly', () => {
    const { container } = render(
      <SchemaScope type="Offer">
        <SchemaProp name="price" value={49.99}>
          $49.99
        </SchemaProp>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(data?.['price']).toBe(49.99);
  });

  it('renders with empty children without error', () => {
    expect(() => render(<SchemaScope type="Product" />)).not.toThrow();
  });
});

describe('SchemaScope — full Product+Offer integration', () => {
  it('produces valid JSON-LD matching plan example', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <h1>
          <SchemaProp name="name">WordPress Hosting</SchemaProp>
        </h1>
        <p>
          <SchemaProp name="description">Fast NVMe SSD hosting with LiteSpeed and free SSL.</SchemaProp>
        </p>
        <SchemaScope type="Offer" prop="offers">
          <SchemaProp name="price" value={99.9}>
            99.90
          </SchemaProp>
          <SchemaProp name="priceCurrency">TRY</SchemaProp>
        </SchemaScope>
      </SchemaScope>,
    );

    const data = getJsonLd(container);
    expect(data?.['@context']).toBe('https://schema.org');
    expect(data?.['@type']).toBe('Product');
    expect(data?.['name']).toBe('WordPress Hosting');
    expect(data?.['description']).toBe(
      'Fast NVMe SSD hosting with LiteSpeed and free SSL.',
    );

    const offers = data?.['offers'] as Record<string, unknown>;
    expect(offers?.['@type']).toBe('Offer');
    expect(offers?.['price']).toBe(99.9);
    expect(offers?.['priceCurrency']).toBe('TRY');
  });

  it('handles multiple Offers as array', () => {
    const { container } = render(
      <SchemaScope type="Product">
        <SchemaScope type="Offer" prop="offers">
          <SchemaProp name="price">10</SchemaProp>
        </SchemaScope>
        <SchemaScope type="Offer" prop="offers">
          <SchemaProp name="price">20</SchemaProp>
        </SchemaScope>
      </SchemaScope>,
    );
    const data = getJsonLd(container);
    expect(Array.isArray(data?.['offers'])).toBe(true);
    const offers = data?.['offers'] as Array<Record<string, unknown>>;
    expect(offers).toHaveLength(2);
  });
});
