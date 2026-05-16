import type { ReactNode } from 'react';
import { collectRootSchemas, serializeJsonLd } from '@seo-mesh/core';
import type { SchemaNode } from '@seo-mesh/core';

interface SchemaGraphProps {
  children: ReactNode;
}

export function SchemaGraph({ children }: SchemaGraphProps) {
  const schemas = collectRootSchemas(children);

  if (schemas.length === 0) return <>{children}</>;

  const graph =
    schemas.length === 1
      ? schemas[0]!
      : ({
          '@context': 'https://schema.org',
          '@graph': schemas.map(({ '@context': _ctx, ...rest }) => rest),
        } as unknown as SchemaNode);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
      />
      {children}
    </>
  );
}
