---
title: 'The buildDir Property'
description: Define the dist directory for your Nuxt.js application
category: api-configuration
---

- Type: `String`
- Default: `.nuxt`

> Define the dist directory for your Nuxt.js application

```js{}[nuxt.config.js]
export default {
  buildDir: 'nuxt-dist'
}
```

By default, many tools assume that `.nuxt` is a hidden directory, because its name starts with a dot. You can use this option to prevent that.
