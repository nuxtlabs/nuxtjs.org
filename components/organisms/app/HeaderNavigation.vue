<template>
  <nav class="relative w-full h-full flex items-center justify-center">
    <Link
      v-for="{ title, href, slug, blank, to } in links"
      :key="slug"
      :aria-label="title"
      class="
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
      :to="href || to"
      :blank="blank"
      :class="{
        'text-primary': currentSlug === slug,
        'hover:d-primary-text-hover': currentSlug !== slug
      }"
    >
      {{ title }}
    </Link>
  </nav>
</template>

<script>
import { computed, defineComponent, useRoute, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props) {
    const route = useRoute()
    const { $docus } = useContext()
    let links = [
      ...$docus.currentNav.value.links,
    {
      title: 'Mastering Nuxt',
      href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link',
      blank: true
    }]

    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    return {
      currentSlug,
      links
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
