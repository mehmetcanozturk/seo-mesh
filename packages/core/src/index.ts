export type {
  SchemaContext,
  SchemaOrgType,
  SchemaNode,
  JsonLdObject,
  JsonLdValue,
  SchemaScopeProps,
  SchemaPropProps,
  TraverseOptions,
} from './types';

export { traverseForSchema, extractText, buildSchemaFromNamedProps, traverseNamedSchemaChildren, collectRootSchemas } from './traverse';
export { serializeJsonLd } from './serialize';
export { createJsonLdObject, mergeJsonLdProp } from './build';
export type { SchemaPropsFor, RequiredPropsFor, OptionalPropsFor } from './schema-types';
export { validateSchema, validateForAI, REQUIRED_SCHEMA_FIELDS } from './validate';
