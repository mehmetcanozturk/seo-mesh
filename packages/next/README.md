<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seo-mesh/next</h1>

<p align="center">
  Next.js App Router integration for seo-mesh — JSON-LD components, sitemap, robots.txt, llms.txt, OpenGraph, and SEO audit
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seo-mesh/next"><img src="https://img.shields.io/npm/v/@seo-mesh/next?color=60a5fa" /></a>
  <img src="https://img.shields.io/badge/Next.js-14%2B-black" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

## Kurulum

```bash
npm install @seo-mesh/next
# veya
pnpm add @seo-mesh/next
```

## Ne İçerir?

`@seo-mesh/next`, `@seo-mesh/react`'in tüm bileşenlerini yeniden export eder ve Next.js'e özel araçlar ekler:

### Bileşenler (React'tan yeniden export)

| Bileşen | Açıklama |
|---------|----------|
| `<Product>`, `<Article>`, `<FAQPage>` ... | 40+ schema.org JSON-LD bileşeni |
| `<OpenGraph>` | og:* ve twitter:* meta tag'leri |
| `<Canonical>` | `<link rel="canonical">` |
| `<HreflangAlternate>` | Çok dilli hreflang tag'leri |
| `<AiBotPolicy>` | GPTBot, CCBot, Google-Extended engelleme |
| `<Speakable>` | AI özetleme işaretçisi |
| `<SchemaGraph>` | Çoklu şema → @graph merge |

### Fonksiyonlar

| Fonksiyon | Açıklama |
|-----------|----------|
| `generateSitemap()` | XML sitemap (xhtml:link alternates dahil) |
| `generateRobotsTxt()` | robots.txt üretici |
| `generateLlmsTxt()` | LLM crawler standart dosyası |
| `auditPage()` | 0–100 SEO skoru |

## Kullanım

### JSON-LD

```tsx
// app/urun/page.tsx
import { Product, Offer } from '@seo-mesh/next';

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
import { generateSitemap } from '@seo-mesh/next';

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
import { generateRobotsTxt } from '@seo-mesh/next';

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
import { generateLlmsTxt } from '@seo-mesh/next';

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
import { auditPage } from '@seo-mesh/next';

const { score, passed, issues } = auditPage({
  title: 'Sayfa Başlığı (30–60 karakter)',
  description: 'Meta açıklama (120–160 karakter)...',
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
