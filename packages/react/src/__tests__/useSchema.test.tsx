import { render, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useSchema } from '../useSchema';

function ThrowIfNoContext() {
  useSchema();
  return null;
}

describe('useSchema', () => {
  it('throws when used outside SchemaScope context', () => {
    const originalError = console.error;
    console.error = vi.fn();

    expect(() => render(<ThrowIfNoContext />)).toThrow(
      '[seo-mesh] useSchema() must be called inside a <SchemaScope> from @seo-mesh/react/client',
    );

    console.error = originalError;
  });
});
