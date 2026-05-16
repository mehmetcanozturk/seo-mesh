<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/main/assets/seomesh-logo.svg" alt="seo-mesh" width="280" />
</p>

<p align="center">
  <strong>Component-first JSON-LD structured data engine for React & Next.js</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seo-mesh/next"><img src="https://img.shields.io/npm/v/@seo-mesh/next?label=%40seo-mesh%2Fnext&color=60a5fa" alt="npm" /></a>
  <a href="https://www.npmjs.com/package/@seo-mesh/react"><img src="https://img.shields.io/npm/v/@seo-mesh/react?label=%40seo-mesh%2Freact&color=818cf8" alt="npm" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" alt="RSC" />
</p>

---

## Paketler

| Paket | Açıklama |
|-------|----------|
| [`@seo-mesh/next`](./packages/next) | Next.js App Router — tüm bileşenler + sitemap/robots/llms.txt/audit |
| [`@seo-mesh/react`](./packages/react) | React RSC bileşenleri — JSON-LD, OpenGraph, Canonical, HreflangAlternate |
| [`@seo-mesh/core`](./packages/core) | Framework-agnostic JSX traversal ve JSON-LD builder |

## Kurulum

```bash
# Next.js projeleri için (önerilen)
npm install @seo-mesh/next

# Sadece React için
npm install @seo-mesh/react
```

## Hızlı Başlangıç

```tsx
// app/urun/page.tsx
import { Product, Offer, OpenGraph, Canonical } from '@seo-mesh/next';

export default function Page() {
  return (
    <>
      <OpenGraph
        title="WordPress Hosting"
        description="NVMe SSD, LiteSpeed, ücretsiz SSL."
        image="https://mysite.com/og/hosting.png"
        type="website"
      />
      <Canonical href="https://mysite.com/urun" />

      <Product name="WordPress Hosting" description="NVMe SSD hosting çözümü.">
        <Offer prop="offers" price={99.9} priceCurrency="TRY" availability="https://schema.org/InStock" />
      </Product>
    </>
  );
}
```

## Özellikler

### JSON-LD Bileşenleri (40+ şema tipi)

```tsx
import { Article, Person, FAQPage, Question, Answer } from '@seo-mesh/next';

<Article headline="Başlık" datePublished="2026-05-15">
  <Person prop="author" name="Mehmet Can Öztürk" />
</Article>

<FAQPage>
  <Question prop="mainEntity" name="seo-mesh RSC ile çalışır mı?">
    <Answer prop="acceptedAnswer" text="Evet, React Context gerektirmez." />
  </Question>
</FAQPage>
```

### OpenGraph & Meta Tags

```tsx
import { OpenGraph, Canonical, HreflangAlternate } from '@seo-mesh/next';

<OpenGraph title="Sayfa Başlığı" description="..." image="..." twitterCard="summary_large_image" />
<Canonical href="https://mysite.com/sayfa" />
<HreflangAlternate locales={[{ lang: 'tr', href: '...' }, { lang: 'en', href: '...' }]} includeXDefault />
```

### Sitemap & Robots.txt

```ts
// app/sitemap.xml/route.ts
import { generateSitemap } from '@seo-mesh/next';

export function GET() {
  return new Response(generateSitemap({
    entries: [
      { url: 'https://mysite.com', changefreq: 'weekly', priority: 1.0 },
    ],
  }), { headers: { 'Content-Type': 'application/xml' } });
}

// app/robots.txt/route.ts
import { generateRobotsTxt } from '@seo-mesh/next';

export function GET() {
  return new Response(generateRobotsTxt({
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'CCBot'], disallow: '/' },
    ],
    sitemap: 'https://mysite.com/sitemap.xml',
  }), { headers: { 'Content-Type': 'text/plain' } });
}
```

### AI Özellikleri

```tsx
import { AiBotPolicy, Speakable } from '@seo-mesh/next';
import { generateLlmsTxt } from '@seo-mesh/next';

// AI crawler kontrolü
<AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />

// AI özetleme işaretçisi
<Article headline="...">
  <Speakable prop="speakable" cssSelector={['.intro', 'h1']} />
</Article>
```

### SEO Audit

```ts
import { auditPage } from '@seo-mesh/next';

const result = auditPage({
  title: 'Sayfa Başlığı',
  description: 'Meta açıklama...',
  canonical: 'https://mysite.com/sayfa',
  og: { title: '...', image: '...' },
  schema: { '@type': 'Article', ... },
});

console.log(result.score);   // 0-100
console.log(result.issues);  // [{ rule, message, impact }]
console.log(result.passed);  // ['Title length is optimal', ...]
```

### @graph Desteği

```tsx
import { SchemaGraph, WebSite, Organization } from '@seo-mesh/next';

<SchemaGraph>
  <WebSite name="seo-mesh" url="https://seo-mesh.dev" />
  <Organization name="seo-mesh" url="https://seo-mesh.dev" />
</SchemaGraph>
// → { "@context": "...", "@graph": [...] }
```

## RSC Uyumluluğu

seo-mesh, React Context **kullanmaz**. JSX ağacını statik olarak gezer — React Server Components ile tam uyumludur.

## Lisans

MIT © Mehmet Can Öztürk
