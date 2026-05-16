<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/main/assets/seomesh-logo.svg" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seo-mesh/react</h1>

<p align="center">
  React Server Components — JSON-LD structured data, OpenGraph, Canonical, HreflangAlternate
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seo-mesh/react"><img src="https://img.shields.io/npm/v/@seo-mesh/react?color=818cf8" /></a>
  <img src="https://img.shields.io/badge/React-18%2B-61dafb" />
  <img src="https://img.shields.io/badge/RSC-compatible-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

> **Next.js kullanıyorsanız:** [`@seo-mesh/next`](https://www.npmjs.com/package/@seo-mesh/next) kullanın — tüm bu bileşenleri içerir, ayrıca sitemap/robots.txt/llms.txt araçları ekler.

## Kurulum

```bash
npm install @seo-mesh/react
```

## Bileşenler

### JSON-LD (40+ schema.org tipi)

```tsx
import { Product, Offer, AggregateRating } from '@seo-mesh/react';

<Product name="Hosting Paketi" description="NVMe SSD, LiteSpeed.">
  <Offer prop="offers" price={99.9} priceCurrency="TRY" availability="https://schema.org/InStock" />
  <AggregateRating prop="aggregateRating" ratingValue={4.8} reviewCount={312} />
</Product>
```

### OpenGraph

```tsx
import { OpenGraph } from '@seo-mesh/react';

<OpenGraph
  title="Sayfa Başlığı"
  description="Meta açıklama"
  image="https://mysite.com/og.png"
  imageAlt="OG görseli"
  type="website"
  twitterCard="summary_large_image"
/>
```

### Canonical

```tsx
import { Canonical } from '@seo-mesh/react';

<Canonical href="https://mysite.com/sayfa" />
```

### HreflangAlternate

```tsx
import { HreflangAlternate } from '@seo-mesh/react';

<HreflangAlternate
  includeXDefault
  locales={[
    { lang: 'tr', href: 'https://mysite.com/tr' },
    { lang: 'en', href: 'https://mysite.com/en' },
  ]}
/>
```

### AI Bot Politikası

```tsx
import { AiBotPolicy } from '@seo-mesh/react';

// Eğitim verisi toplayan bot'ları engelle
<AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />
```

### Speakable (AI Özetleme)

```tsx
import { Article, Speakable } from '@seo-mesh/react';

<Article headline="Başlık" datePublished="2026-05-15">
  <Speakable prop="speakable" cssSelector={['.intro', 'h1']} />
</Article>
```

### @graph Merge

```tsx
import { SchemaGraph, WebSite, Organization } from '@seo-mesh/react';

<SchemaGraph>
  <WebSite name="My Site" url="https://mysite.com" />
  <Organization name="My Org" url="https://mysite.com" />
</SchemaGraph>
```

## RSC Uyumluluğu

React Context kullanılmaz. JSX ağacı statik olarak gezilir — `'use server'` bileşenlerinde sorunsuz çalışır.

## Lisans

MIT © Can Kaptaner
