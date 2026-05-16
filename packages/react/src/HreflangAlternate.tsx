import type { ReactNode } from 'react';

export interface HreflangLocale {
  lang: string;
  href: string;
}

export interface HreflangAlternateProps {
  locales: HreflangLocale[];
  includeXDefault?: boolean;
}

export function HreflangAlternate({ locales, includeXDefault = false }: HreflangAlternateProps): ReactNode {
  const xDefault = includeXDefault ? locales[0] : undefined;
  return (
    <>
      {locales.map((l) => (
        <link key={l.lang} rel="alternate" hrefLang={l.lang} href={l.href} />
      ))}
      {xDefault && <link rel="alternate" hrefLang="x-default" href={xDefault.href} />}
    </>
  );
}
