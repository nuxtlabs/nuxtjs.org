<template>
  <div>
    <div>
      <h3 class="font-semibold light:text-gray-400 dark:text-cloud-light text-lg">{{ $t('footer.newsletter.title')}}</h3>
      <p class="mt-2 text-base text-gray-500 dark:text-secondary-surface">
        {{ $t('footer.newsletter.description')}}
      </p>
    </div>
    <InputGroupButton v-model="email" placeholder="Enter your email">Subscribe</InputGroupButton>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useNewsletter } from '../../../plugins/composables'

export default defineComponent({
  setup() {
    const { email, error, subscribe, pending, subscribed } = useNewsletter()

    return {
      email,
      pending,
      subscribe,
      subscribed,
      error
    }
  }
})
</script>
