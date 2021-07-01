<template>
    <Link to='#'>
        <img :src="`/img/banner/banner-nuxt3.png`" class="hidden lg:block w-full h-10 object-right object-cover"/>
        <img :src="`/img/banner/banner-nuxt3-small.png`" class="lg:hidden w-full h-10 object-right object-cover"/>
        <span class="absolute h-10 text-white top-2 left-1/2">text</span>
    </Link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
        }
    }
})
</script>