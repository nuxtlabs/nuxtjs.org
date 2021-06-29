import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useNewsletter() {
  // @ts-ignore
  const { $http } = useContext()

  let _timeout
  const email = ref('')
  const error = ref(null)
  const subscribed = ref(false)
  const pending = ref(false)

  const subscribe = async () => {
    // Cancel empty email
    if (!email.value || !email.value.trim()) return

    if (_timeout) clearTimeout(_timeout)
    error.value = null
    pending.value = true

    try {
      await $fetch(`${process.env.NUXT_API || 'https://api.nuxtjs.com'}/newsletter`, {
        method: 'POST',
        body: {
          email: email.value
        }
      })

      subscribed.value = email.value
      pending.value = false
    } catch (e) {
      pending.value = false
      subscribed.value = false

      if (e.data) {
        const { code, name } = e.data

        if (code === 'member-exists') error.value = 'You are already registered.'
        if (name === 'ValidationException') error.value = 'Invalid email address'

        _timeout = setTimeout(() => (error.value = null), 3000)
      }
    }
  }

  return {
    email,
    error,
    subscribed,
    pending,
    subscribe
  }
}
