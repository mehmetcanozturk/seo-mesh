import type { ReactNode } from 'react';

interface SpeakableProps {
  cssSelector?: string | string[];
  xpath?: string | string[];
  prop?: string;
}

export function Speakable(_props: SpeakableProps): ReactNode {
  return null;
}

(Speakable as unknown as { __schemaType: string }).__schemaType = 'SpeakableSpecification';
Speakable.displayName = 'SpeakableSpecification';
