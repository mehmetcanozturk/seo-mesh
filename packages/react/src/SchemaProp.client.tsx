'use client';

import { useEffect } from 'react';
import type { SchemaPropProps } from '@seo-mesh/core';
import { useSchema } from './useSchema';

export function SchemaPropClient({ name, value, children }: SchemaPropProps) {
  const { registerProp } = useSchema();

  useEffect(() => {
    const resolved =
      value !== undefined
        ? value
        : typeof children === 'string'
          ? children
          : String(children ?? '');
    registerProp(name, resolved);
  }, [name, value, children, registerProp]);

  return <>{children}</>;
}
