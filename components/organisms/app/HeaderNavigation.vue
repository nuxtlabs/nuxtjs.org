<template>
  <nav class="relative w-full h-full flex items-center justify-center">
    <Link
      v-for="{ title, href, slug, blank, icon } in links"
      :key="slug"
      :aria-label="title"
      class="
        group
        relative
        capitalize
        font-medium
        flex flex-col
        items-center
        justify-center
        text-center
        px-4
        h-full
        flex
        items-center
      "
      :to="href"
      :blank="blank"
      :class="{
        'text-primary': currentSlug === slug,
        'hover:d-primary-text-hover': currentSlug !== slug
      }"
      >
        <div class="flex items-center">
          {{ $t(`header.${title}`) }}
          <Component v-if="icon" :is="icon" class="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100"/>
        </div>
    </Link>
  </nav>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'Docs',
          slug: 'docs',
          href: '/docs'
        },
        {
          title: 'Examples',
          slug: 'examples',
          href: '/examples'
        },
        {
          title: 'Resources',
          slug: 'resources',
          href: '/resources'
        },
        {
          title: 'Blog',
          slug: 'blog',
          href: '/blog'
        },
        {
          title: 'Video Courses',
          slug: 'video-courses',
          href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link',
          blank: true,
          icon: 'IconExternalLink'
        }
      ]
    }
  },
  setup() {
    const route = useRoute()

    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    return {
      currentSlug
    }
  }
})
</script>

<style scoped lang="postcss">
.nuxt-link-active {
  color: rgba(52, 211, 153);
}

.menu li {
  display: block;
  position: relative;
}
</style>
