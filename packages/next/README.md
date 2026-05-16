<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seomesh/next</h1>

<p align="center">
  Next.js App Router integration — JSON-LD components, sitemap, robots.txt, llms.txt, OpenGraph, and SEO audit
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seomesh/next"><img src="https://img.shields.io/npm/v/@seomesh/next?color=60a5fa" /></a>
  <img src="https://img.shields.io/badge/Next.js-14%2B-black" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

## Installation

```bash
npm install @seomesh/next
# or
pnpm add @seomesh/next
```

## What's Included?

`@seomesh/next` re-exports all `@seomesh/react` components and adds Next.js-specific utilities:

### Components (re-exported from React)

| Component | Description |
|-----------|-------------|
| `<Product>`, `<Article>`, `<FAQPage>` ... | 40+ schema.org JSON-LD components |
| `<OpenGraph>` | og:* and twitter:* meta tags |
| `<Canonical>` | `<link rel="canonical">` |
| `<HreflangAlternate>` | Multilingual hreflang tags |
| `<AiBotPolicy>` | Block GPTBot, CCBot, Google-Extended |
| `<Speakable>` | AI summarization marker |
| `<SchemaGraph>` | Merge multiple schemas into @graph |

### Functions

| Function | Description |
|----------|-------------|
| `generateSitemap()` | XML sitemap with xhtml:link alternates |
| `generateRobotsTxt()` | robots.txt generator |
| `generateLlmsTxt()` | LLM crawler standard file |
| `auditPage()` | SEO score 0-100 |

## Usage

### JSON-LD

```tsx
// app/product/page.tsx
import { Product, Offer } from '@seomesh/next';

export default function Page() {
  return (
    <Product name="WordPress Hosting" description="NVMe SSD hosting.">
      <Offer prop="offers" price={9.9} priceCurrency="USD" availability="https://schema.org/InStock" />
    </Product>
  );
}
```

### Sitemap

```ts
// app/sitemap.xml/route.ts
import { generateSitemap } from '@seomesh/next';

export function GET() {
  return new Response(generateSitemap({
    entries: [
      {
        url: 'https://mysite.com',
        lastmod: '2026-05-15',
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
```

### robots.txt

```ts
// app/robots.txt/route.ts
import { generateRobotsTxt } from '@seomesh/next';

export function GET() {
  return new Response(generateRobotsTxt({
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      { userAgent: ['GPTBot', 'CCBot', 'Google-Extended'], disallow: '/' },
    ],
    sitemap: 'https://mysite.com/sitemap.xml',
  }), { headers: { 'Content-Type': 'text/plain' } });
}
```

### llms.txt

```ts
// app/llms.txt/route.ts
import { generateLlmsTxt } from '@seomesh/next';

export function GET() {
  return new Response(generateLlmsTxt({
    siteName: 'My Site',
    tagline: 'What my site does',
    sections: [
      { title: 'Docs', links: [{ label: 'Getting Started', url: '/docs' }] },
    ],
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

## License

MIT © Mehmet Can Öztürk
