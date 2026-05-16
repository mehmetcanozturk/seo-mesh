<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seomesh/next</h1>

<p align="center">
  Next.js App Router integration for seo-mesh — JSON-LD components, sitemap, robots.txt, llms.txt, OpenGraph, and SEO audit
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seomesh/next"><img src="https://img.shields.io/npm/v/@seomesh/next?color=60a5fa" /></a>
  <img src="https://img.shields.io/badge/Next.js-14%2B-black" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

## Kurulum

```bash
npm install @seomesh/next
# veya
pnpm add @seomesh/next
```

## Ne Içerir?

`@seomesh/next`, `@seomesh/react`'in tüm bilesenlerini yeniden export eder ve Next.js'e özel araçlar ekler:

### Bilesenler (React'tan yeniden export)

| Bilesen | Açiklama |
|---------|----------|
| `<Product>`, `<Article>`, `<FAQPage>` ... | 40+ schema.org JSON-LD bileseni |
| `<OpenGraph>` | og:* ve twitter:* meta tag'leri |
| `<Canonical>` | `<link rel="canonical">` |
| `<HreflangAlternate>` | Çok dilli hreflang tag'leri |
| `<AiBotPolicy>` | GPTBot, CCBot, Google-Extended engelleme |
| `<Speakable>` | AI özetleme isaretçisi |
| `<SchemaGraph>` | Çoklu sema ? @graph merge |

### Fonksiyonlar

| Fonksiyon | Açiklama |
|-----------|----------|
| `generateSitemap()` | XML sitemap (xhtml:link alternates dahil) |
| `generateRobotsTxt()` | robots.txt üretici |
| `generateLlmsTxt()` | LLM crawler standart dosyasi |
| `auditPage()` | 0–100 SEO skoru |

## Kullanim

### JSON-LD

```tsx
// app/urun/page.tsx
import { Product, Offer } from '@seomesh/next';

export default function Page() {
  return (
    <Product name="WordPress Hosting" description="NVMe SSD hosting.">
      <Offer prop="offers" price={99.9} priceCurrency="TRY" availability="https://schema.org/InStock" />
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
          { lang: 'tr', href: 'https://mysite.com/tr' },
          { lang: 'en', href: 'https://mysite.com/en' },
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
  title: 'Sayfa Basligi (30–60 karakter)',
  description: 'Meta açiklama (120–160 karakter)...',
  canonical: 'https://mysite.com/sayfa',
  og: { title: '...', description: '...', image: '...', imageAlt: '...' },
  schema: { '@type': 'Article', headline: '...', description: '...' },
});
// score: 95
// passed: ['Title length is optimal', 'og:title is set', ...]
// issues: [{ rule: 'og-image-alt', message: '...', impact: 'info' }]
```

## Lisans

MIT © Mehmet Can Öztürk

