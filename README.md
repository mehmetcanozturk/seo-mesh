<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="280" />
</p>

<p align="center">
  <strong>Component-first JSON-LD structured data engine for React & Next.js</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seomesh/next"><img src="https://img.shields.io/npm/v/@seomesh/next?label=%40seo-mesh%2Fnext&color=60a5fa" alt="npm" /></a>
  <a href="https://www.npmjs.com/package/@seomesh/react"><img src="https://img.shields.io/npm/v/@seomesh/react?label=%40seo-mesh%2Freact&color=818cf8" alt="npm" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" alt="RSC" />
</p>

---

## Packages

| Package | Description |
|---------|-------------|
| [`@seomesh/next`](./packages/next) | Next.js App Router — all components + sitemap, robots.txt, llms.txt, SEO audit |
| [`@seomesh/react`](./packages/react) | React RSC components — JSON-LD, OpenGraph, Canonical, HreflangAlternate |
| [`@seomesh/core`](./packages/core) | Framework-agnostic JSX traversal and JSON-LD builder |

## Installation

```bash
# For Next.js projects (recommended)
npm install @seomesh/next

# React only
npm install @seomesh/react
```

## Quick Start

```tsx
// app/product/page.tsx
import { Product, Offer, OpenGraph, Canonical } from '@seomesh/next';

export default function Page() {
  return (
    <>
      <OpenGraph
        title="WordPress Hosting"
        description="NVMe SSD, LiteSpeed, free SSL."
        image="https://mysite.com/og/hosting.png"
        type="website"
      />
      <Canonical href="https://mysite.com/product" />

      <Product name="WordPress Hosting" description="Professional NVMe SSD hosting.">
        <Offer prop="offers" price={9.9} priceCurrency="USD" availability="https://schema.org/InStock" />
      </Product>
    </>
  );
}
```

## Features

### JSON-LD Components (40+ schema types)

```tsx
import { Article, Person, FAQPage, Question, Answer } from '@seomesh/next';

<Article headline="My Post" datePublished="2026-05-15">
  <Person prop="author" name="Mehmet Can Öztürk" />
</Article>

<FAQPage>
  <Question prop="mainEntity" name="Does seo-mesh work with RSC?">
    <Answer prop="acceptedAnswer" text="Yes, no React Context needed." />
  </Question>
</FAQPage>
```

### OpenGraph & Meta Tags

```tsx
import { OpenGraph, Canonical, HreflangAlternate } from '@seomesh/next';

<OpenGraph title="Page Title" description="..." image="..." twitterCard="summary_large_image" />
<Canonical href="https://mysite.com/page" />
<HreflangAlternate
  locales={[{ lang: 'en', href: '...' }, { lang: 'tr', href: '...' }]}
  includeXDefault
/>
```

### Sitemap & Robots.txt

```ts
// app/sitemap.xml/route.ts
import { generateSitemap } from '@seomesh/next';

export function GET() {
  return new Response(generateSitemap({
    entries: [
      {
        url: 'https://mysite.com',
        changefreq: 'weekly',
        priority: 1.0,
        alternates: [
          { lang: 'en', href: 'https://mysite.com/en' },
          { lang: 'tr', href: 'https://mysite.com/tr' },
        ],
      },
    ],
  }), { headers: { 'Content-Type': 'application/xml' } });
}

// app/robots.txt/route.ts
import { generateRobotsTxt } from '@seomesh/next';

export function GET() {
  return new Response(generateRobotsTxt({
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'CCBot', 'Google-Extended'], disallow: '/' },
    ],
    sitemap: 'https://mysite.com/sitemap.xml',
  }), { headers: { 'Content-Type': 'text/plain' } });
}
```

### AI Features

```tsx
import { AiBotPolicy, Speakable } from '@seomesh/next';

// Block AI training crawlers
<AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />

// Mark content for AI summarization
<Article headline="...">
  <Speakable prop="speakable" cssSelector={['.intro', 'h1']} />
</Article>
```

```ts
// app/llms.txt/route.ts
import { generateLlmsTxt } from '@seomesh/next';

export function GET() {
  return new Response(generateLlmsTxt({
    siteName: 'My Site',
    tagline: 'What my site does',
    sections: [{ title: 'Docs', links: [{ label: 'Getting Started', url: '/docs' }] }],
  }), { headers: { 'Content-Type': 'text/plain' } });
}
```

### SEO Audit

```ts
import { auditPage } from '@seomesh/next';

const { score, passed, issues } = auditPage({
  title: 'Page Title (30-60 chars)',
  description: 'Meta description (120-160 chars)...',
  canonical: 'https://mysite.com/page',
  og: { title: '...', description: '...', image: '...', imageAlt: '...' },
  schema: { '@type': 'Article', headline: '...', description: '...' },
});
// score: 95
// passed: ['Title length is optimal', 'og:title is set', ...]
// issues: [{ rule: 'og-image-alt', message: '...', impact: 'info' }]
```

### @graph Support

```tsx
import { SchemaGraph, WebSite, Organization } from '@seomesh/next';

<SchemaGraph>
  <WebSite name="seo-mesh" url="https://seo-mesh.dev" />
  <Organization name="seo-mesh" url="https://seo-mesh.dev" />
</SchemaGraph>
// => { "@context": "...", "@graph": [...] }
```

## RSC Compatible

seo-mesh does **not** use React Context. It traverses the JSX tree statically — fully compatible with React Server Components.

## License

MIT © Mehmet Can Öztürk
