import { serializeJsonLd } from '@seo-mesh/core';
import type { SchemaNode } from '@seo-mesh/core';

interface JsonLdScriptProps {
  schema: SchemaNode;
}

export function JsonLdScript({ schema }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
