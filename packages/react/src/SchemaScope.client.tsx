'use client';

import { useState, useCallback } from 'react';
import type { SchemaScopeProps, SchemaNode } from '@seo-mesh/core';
import { SchemaContext } from './SchemaContext';
import { JsonLdScript } from './JsonLdScript';

export function SchemaScopeClient({ type, prop, children }: SchemaScopeProps) {
  const [schema, setSchema] = useState<SchemaNode>({
    '@context': 'https://schema.org',
    '@type': type,
  });

  const registerProp = useCallback((name: string, value: unknown) => {
    setSchema((prev) => ({ ...prev, [name]: value as string | number | boolean | null }));
  }, []);

  return (
    <SchemaContext.Provider value={{ schema, registerProp }}>
      {prop === undefined && <JsonLdScript schema={schema} />}
      {children}
    </SchemaContext.Provider>
  );
}
