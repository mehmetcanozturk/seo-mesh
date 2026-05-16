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

> **Using Next.js?** Use [`@seomesh/next`](https://www.npmjs.com/package/@seomesh/next) — it includes all these components plus sitemap, robots.txt, and llms.txt generators.

## Installation

```bash
npm install @seomesh/react
```

## Components

### JSON-LD (40+ schema.org types)

```tsx
import { Product, Offer, AggregateRating } from '@seomesh/react';

<Product name="Hosting Plan" description="NVMe SSD, LiteSpeed.">
  <Offer prop="offers" price={9.9} priceCurrency="USD" availability="https://schema.org/InStock" />
  <AggregateRating prop="aggregateRating" ratingValue={4.8} reviewCount={312} />
</Product>
```

### OpenGraph

```tsx
import { OpenGraph } from '@seomesh/react';

<OpenGraph
  title="Page Title"
  description="Meta description"
  image="https://mysite.com/og.png"
  imageAlt="OG image"
  type="website"
  twitterCard="summary_large_image"
/>
```

### Canonical

```tsx
import { Canonical } from '@seomesh/react';

<Canonical href="https://mysite.com/page" />
```

### HreflangAlternate

```tsx
import { HreflangAlternate } from '@seomesh/react';

<HreflangAlternate
  includeXDefault
  locales={[
    { lang: 'en', href: 'https://mysite.com/en' },
    { lang: 'tr', href: 'https://mysite.com/tr' },
  ]}
/>
```

### AI Bot Policy

```tsx
import { AiBotPolicy } from '@seomesh/react';

// Block AI training crawlers
<AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />
```

### Speakable (AI Summarization)

```tsx
import { Article, Speakable } from '@seomesh/react';

<Article headline="Title" datePublished="2026-05-15">
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

## RSC Compatible

No React Context used. The JSX tree is traversed statically — works seamlessly in `'use server'` components.

## License

MIT © Mehmet Can Öztürk
