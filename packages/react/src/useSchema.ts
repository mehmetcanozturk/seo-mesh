'use client';

import { useContext } from 'react';
import { SchemaContext } from './SchemaContext';
import type { SchemaContextValue } from './SchemaContext';

export function useSchema(): SchemaContextValue {
  const ctx = useContext(SchemaContext);
  if (!ctx) {
    throw new Error(
      '[seo-mesh] useSchema() must be called inside a <SchemaScope> from @seo-mesh/react/client',
    );
  }
  return ctx;
}
