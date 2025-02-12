---
title: Layouts
description: Using layouts to show different ways to structure your page
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/miscellaneous/layouts?fontsize=14&hidenavigation=1&module=%2Fpages%2Fprofile.vue&theme=dark&view=editor
---

<example-intro></example-intro>

- `layouts/default.vue` is used in the home page as no layout property is defined
- `layouts/auth.vue` is used in the /login page with the `layout` property set to 'auth'
- `layouts/profile.vue` is used in the /profile page the `layout` property set to 'profile'

<alert type="next">

Learn more in the Concepts book in the [Views](/docs/concepts/views) chapter or in the Directory Structure book in the [Layouts](/docs/directory-structure/layouts) chapter.

</alert>

<code-sandbox :src="csb_link"></code-sandbox>
