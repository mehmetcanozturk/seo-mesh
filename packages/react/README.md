<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seomesh/react</h1>

<p align="center">
  React Server Components — JSON-LD structured data, OpenGraph, Canonical, HreflangAlternate
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seomesh/react"><img src="https://img.shields.io/npm/v/@seomesh/react?color=818cf8" /></a>
  <img src="https://img.shields.io/badge/React-18%2B-61dafb" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

> **Next.js kullaniyorsaniz:** [`@seomesh/next`](https://www.npmjs.com/package/@seomesh/next) kullanin — tüm bu bilesenleri içerir, ayrica sitemap/robots.txt/llms.txt araçlari ekler.

## Kurulum

```bash
npm install @seomesh/react
```

## Bilesenler

### JSON-LD (40+ schema.org tipi)

```tsx
import { Product, Offer, AggregateRating } from '@seomesh/react';

<Product name="Hosting Paketi" description="NVMe SSD, LiteSpeed.">
  <Offer prop="offers" price={99.9} priceCurrency="TRY" availability="https://schema.org/InStock" />
  <AggregateRating prop="aggregateRating" ratingValue={4.8} reviewCount={312} />
</Product>
```

### OpenGraph

```tsx
import { OpenGraph } from '@seomesh/react';

<OpenGraph
  title="Sayfa Basligi"
  description="Meta açiklama"
  image="https://mysite.com/og.png"
  imageAlt="OG görseli"
  type="website"
  twitterCard="summary_large_image"
/>
```

### Canonical

```tsx
import { Canonical } from '@seomesh/react';

<Canonical href="https://mysite.com/sayfa" />
```

### HreflangAlternate

```tsx
import { HreflangAlternate } from '@seomesh/react';

<HreflangAlternate
  includeXDefault
  locales={[
    { lang: 'tr', href: 'https://mysite.com/tr' },
    { lang: 'en', href: 'https://mysite.com/en' },
  ]}
/>
```

### AI Bot Politikasi

```tsx
import { AiBotPolicy } from '@seomesh/react';

// Egitim verisi toplayan bot'lari engelle
<AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />
```

### Speakable (AI Özetleme)

```tsx
import { Article, Speakable } from '@seomesh/react';

<Article headline="Baslik" datePublished="2026-05-15">
  <Speakable prop="speakable" cssSelector={['.intro', 'h1']} />
</Article>
```

### @graph Merge

```tsx
import { SchemaGraph, WebSite, Organization } from '@seomesh/react';

<SchemaGraph>
  <WebSite name="My Site" url="https://mysite.com" />
  <Organization name="My Org" url="https://mysite.com" />
</SchemaGraph>
```

## RSC Uyumlulugu

React Context kullanilmaz. JSX agaci statik olarak gezilir — `'use server'` bilesenlerinde sorunsuz çalisir.

## Lisans

MIT © Mehmet Can Öztürk

