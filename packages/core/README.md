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

> **Building an app?** Use [`@seomesh/next`](https://www.npmjs.com/package/@seomesh/next) or [`@seomesh/react`](https://www.npmjs.com/package/@seomesh/react) instead of this package directly.

`@seomesh/core` is the low-level engine that statically traverses JSX element trees to build schema.org objects.

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

## License

MIT © Mehmet Can Öztürk
