import type { ReactNode } from 'react';

export interface CanonicalProps {
  href: string;
}

export function Canonical({ href }: CanonicalProps): ReactNode {
  return <link rel="canonical" href={href} />;
}
