import { traverseForSchema } from '@seo-mesh/core';
import type { SchemaScopeProps } from '@seo-mesh/core';
import { JsonLdScript } from './JsonLdScript';
import { SchemaProp } from './SchemaProp';

export function SchemaScope({ type, prop, children }: SchemaScopeProps) {
  const schema = traverseForSchema(children, {
    type,
    SchemaPropRef: SchemaProp,
    SchemaScopeRef: SchemaScope,
    isRoot: prop === undefined,
  });

  return (
    <>
      {prop === undefined && <JsonLdScript schema={schema} />}
      {children}
    </>
  );
}
