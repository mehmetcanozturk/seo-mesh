<p align="center">
  <img src="https://raw.githubusercontent.com/mehmetcanozturk/seo-mesh/refs/heads/master/assets/seomesh-logo.png" alt="seo-mesh" width="240" />
</p>

<h1 align="center">@seomesh/core</h1>

<p align="center">
  Framework-agnostic JSX tree traversal and JSON-LD builder — the engine behind seo-mesh
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@seomesh/core"><img src="https://img.shields.io/npm/v/@seomesh/core?color=a78bfa" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

> **Uygulama gelistiriyorsaniz** bu paketi dogrudan kullanmayin. [`@seomesh/next`](https://www.npmjs.com/package/@seomesh/next) veya [`@seomesh/react`](https://www.npmjs.com/package/@seomesh/react) tercih edin.

`@seomesh/core`, JSX element agacini statik olarak gezerek schema.org nesnesi insa eden düsük seviyeli motorudur.

## API

```ts
import {
  buildSchemaFromNamedProps,
  traverseNamedSchemaChildren,
  collectRootSchemas,
  validateSchema,
  validateForAI,
} from '@seomesh/core';
```

## Lisans

MIT © Mehmet Can Öztürk

