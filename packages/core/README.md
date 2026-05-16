<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seo-mesh/core</h1>

<p align="center">
  Framework-agnostic JSX tree traversal and JSON-LD builder — the engine behind seo-mesh
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seo-mesh/core"><img src="https://img.shields.io/npm/v/@seo-mesh/core?color=a78bfa" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

> **Uygulama geliştiriyorsanız** bu paketi doğrudan kullanmayın. [`@seo-mesh/next`](https://www.npmjs.com/package/@seo-mesh/next) veya [`@seo-mesh/react`](https://www.npmjs.com/package/@seo-mesh/react) tercih edin.

`@seo-mesh/core`, JSX element ağacını statik olarak gezerek schema.org nesnesi inşa eden düşük seviyeli motorudur.

## API

```ts
import {
  buildSchemaFromNamedProps,
  traverseNamedSchemaChildren,
  collectRootSchemas,
  validateSchema,
  validateForAI,
} from '@seo-mesh/core';
```

## Lisans

MIT © Mehmet Can Öztürk
