import type { ReactNode } from 'react';
import { buildSchemaFromNamedProps, validateSchema, validateForAI } from '@seo-mesh/core';
import type { JsonLdValue, SchemaOrgType } from '@seo-mesh/core';
import type { RequiredPropsFor, OptionalPropsFor } from '@seo-mesh/core';
import { JsonLdScript } from './JsonLdScript';

type SchemaComponentProps<T extends string> =
  { [K in RequiredPropsFor<T>]: JsonLdValue } &
  { [K in OptionalPropsFor<T>]?: JsonLdValue } &
  { [key: string]: JsonLdValue | undefined | ReactNode | string } &
  { id?: string; prop?: string; children?: ReactNode };

export type NamedSchemaComponent<T extends SchemaOrgType> = ((
  props: SchemaComponentProps<T>,
) => ReactNode) & {
  __schemaType: T;
  displayName: string;
};

export function createSchemaComponent<T extends SchemaOrgType>(schemaType: T): NamedSchemaComponent<T> {
  function SchemaComponent(props: SchemaComponentProps<T>): ReactNode {
    const { children, prop, id, ...schemaProps } = props;

    if (prop !== undefined) {
      return <>{children}</>;
    }

    const rawProps = schemaProps as Record<string, JsonLdValue>;
    if (id !== undefined) rawProps['@id'] = id;

    const schema = buildSchemaFromNamedProps(schemaType, rawProps, children as ReactNode);
    const schemaObj = schema as unknown as Record<string, unknown>;
    validateSchema(schemaType, schemaObj);
    validateForAI(schemaType, schemaObj);

    return (
      <>
        <JsonLdScript schema={schema} />
        {children}
      </>
    );
  }

  (SchemaComponent as unknown as NamedSchemaComponent<T>).__schemaType = schemaType;
  SchemaComponent.displayName = schemaType;

  return SchemaComponent as unknown as NamedSchemaComponent<T>;
}
