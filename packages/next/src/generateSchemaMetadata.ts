import { traverseForSchema, serializeJsonLd } from '@seo-mesh/core';
import type { SchemaNode, SchemaOrgType } from '@seo-mesh/core';
import type { ReactNode } from 'react';

export interface BuildSchemaOptions {
  type: SchemaOrgType;
  children: ReactNode;
  SchemaPropRef: unknown;
  SchemaScopeRef: unknown;
}

export function buildSchemaFromTraversal(options: BuildSchemaOptions): SchemaNode {
  return traverseForSchema(options.children, {
    type: options.type,
    SchemaPropRef: options.SchemaPropRef,
    SchemaScopeRef: options.SchemaScopeRef,
    isRoot: true,
  });
}

export function schemaToMetadataScript(schema: SchemaNode): {
  other: Record<string, string>;
} {
  return {
    other: {
      'application/ld+json': serializeJsonLd(schema),
    },
  };
}
