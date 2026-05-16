'use client';

import { createContext } from 'react';
import type { SchemaNode } from '@seo-mesh/core';

export interface SchemaContextValue {
  schema: SchemaNode;
  registerProp: (name: string, value: unknown) => void;
}

export const SchemaContext = createContext<SchemaContextValue | null>(null);
