import { Children, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import type {
  JsonLdValue,
  SchemaNode,
  SchemaPropProps,
  SchemaScopeProps,
  TraverseOptions,
} from './types';

export function buildSchemaFromNamedProps(
  type: string,
  props: Record<string, JsonLdValue>,
  children: ReactNode,
): SchemaNode {
  const schema: SchemaNode = { '@context': 'https://schema.org', '@type': type };
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) (schema as Record<string, unknown>)[k] = v;
  }
  traverseNamedSchemaChildren(children, schema as unknown as Record<string, unknown>);
  return schema;
}

export function traverseNamedSchemaChildren(
  children: ReactNode,
  schema: Record<string, unknown>,
): void {
  function traverse(node: ReactNode): void {
    if (!isValidElement(node)) return;
    const el = node as ReactElement<Record<string, unknown>>;

    if (typeof el.type === 'function' && '__schemaType' in el.type) {
      const { prop, children: nestedChildren, ...nestedProps } = el.props;
      if (prop !== undefined) {
        const nestedType = (el.type as { __schemaType: string }).__schemaType;
        const nestedSchema: Record<string, unknown> = { '@type': nestedType };
        for (const [k, v] of Object.entries(nestedProps)) {
          if (v !== undefined) nestedSchema[k] = v;
        }
        traverseNamedSchemaChildren(nestedChildren as ReactNode, nestedSchema);

        const existing = schema[prop as string];
        if (existing !== undefined) {
          schema[prop as string] = Array.isArray(existing)
            ? [...existing, nestedSchema]
            : [existing, nestedSchema];
        } else {
          schema[prop as string] = nestedSchema;
        }
        return;
      }
    }

    const elChildren = (el.props as { children?: ReactNode }).children;
    if (elChildren != null) Children.forEach(elChildren, traverse);
  }

  Children.forEach(children, traverse);
}

export function extractText(node: ReactNode): string | undefined {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) {
    const parts = node.map(extractText).filter((s): s is string => s !== undefined);
    return parts.length > 0 ? parts.join('') : undefined;
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    return extractText(el.props.children);
  }
  return undefined;
}

export function collectRootSchemas(children: ReactNode): SchemaNode[] {
  const schemas: SchemaNode[] = [];

  function traverse(node: ReactNode): void {
    if (!isValidElement(node)) return;
    const el = node as ReactElement<Record<string, unknown>>;

    if (typeof el.type === 'function' && '__schemaType' in el.type) {
      const { prop, children: nestedChildren, id, ...props } = el.props;
      if (prop === undefined) {
        const type = (el.type as { __schemaType: string }).__schemaType;
        const schema: Record<string, unknown> = { '@context': 'https://schema.org', '@type': type };
        if (id !== undefined) schema['@id'] = id;
        for (const [k, v] of Object.entries(props)) {
          if (v !== undefined) schema[k] = v;
        }
        traverseNamedSchemaChildren(nestedChildren as ReactNode, schema);
        schemas.push(schema as SchemaNode);
        return;
      }
    }

    const elChildren = (el.props as { children?: ReactNode }).children;
    if (elChildren != null) Children.forEach(elChildren, traverse);
  }

  Children.forEach(children, traverse);
  return schemas;
}

export function traverseForSchema(children: ReactNode, options: TraverseOptions): SchemaNode {
  const schema: SchemaNode = {
    '@context': 'https://schema.org',
    '@type': options.type,
  };

  if (options.isRoot === false) {
    delete (schema as Record<string, unknown>)['@context'];
  }

  function traverse(node: ReactNode): void {
    if (!isValidElement(node)) return;

    const el = node as ReactElement<Record<string, unknown>>;

    if (el.type === options.SchemaPropRef) {
      const { name, value, children: propChildren } = el.props as unknown as SchemaPropProps;

      const extracted: JsonLdValue =
        value !== undefined ? value : (extractText(propChildren as ReactNode) ?? '');

      const existing = schema[name];
      if (existing !== undefined) {
        schema[name] = Array.isArray(existing)
          ? ([...existing, extracted] as JsonLdValue)
          : ([existing as JsonLdValue, extracted] as JsonLdValue);
      } else {
        schema[name] = extracted;
      }
      return;
    }

    if (el.type === options.SchemaScopeRef) {
      const { type: nestedType, prop, children: scopeChildren } = el.props as unknown as SchemaScopeProps;

      if (prop !== undefined) {
        const nested = traverseForSchema(scopeChildren, {
          ...options,
          type: nestedType,
          isRoot: false,
        });

        const { '@context': _ctx, ...withoutContext } = nested as Record<string, unknown>;
        const nestedObj = { '@type': nestedType, ...withoutContext } as JsonLdValue;

        const existing = schema[prop];
        if (existing !== undefined) {
          schema[prop] = Array.isArray(existing)
            ? ([...existing, nestedObj] as JsonLdValue)
            : ([existing as JsonLdValue, nestedObj] as JsonLdValue);
        } else {
          schema[prop] = nestedObj;
        }
      }
      return;
    }

    const elChildren = (el.props as { children?: ReactNode }).children;
    if (elChildren != null) {
      Children.forEach(elChildren, traverse);
    }
  }

  Children.forEach(children, traverse);
  return schema;
}
