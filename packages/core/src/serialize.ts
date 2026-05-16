import type { SchemaNode } from './types';

const ESCAPE_MAP: Record<string, string> = {
  '<': '\\u003c',
  '>': '\\u003e',
  '&': '\\u0026',
  '/': '\\u002f',
};

const UNSAFE_CHARS = /[<>&/]/g;

export function serializeJsonLd(schema: SchemaNode): string {
  return JSON.stringify(schema).replace(UNSAFE_CHARS, (c) => ESCAPE_MAP[c] ?? c);
}
