import type { JsonLdObject, JsonLdValue, SchemaOrgType } from './types';

export function createJsonLdObject(type: SchemaOrgType): JsonLdObject {
  return { '@type': type };
}

export function mergeJsonLdProp(obj: JsonLdObject, key: string, value: JsonLdValue): void {
  const existing = obj[key];
  if (existing === undefined) {
    obj[key] = value;
  } else if (Array.isArray(existing)) {
    existing.push(value);
  } else {
    obj[key] = [existing as JsonLdValue, value];
  }
}
