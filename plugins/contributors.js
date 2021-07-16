
import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useContributors () {

  const { $docus } = useContext()

  const { contributors } = async () => {
    await $fetch(`https://contributors-api.nuxtjs.com/nuxt/nuxtjs.org/master/content/en/guides/get-started/installation`)
  }

  console.log('contributors', contributors)

  return {
    contributors
  }


}

/*export default function (ctx, inject) {
  inject('contributors', async path => {
    if (path[0] !== '/') {
      path = `/${path}`
    }
    console.log(path)
    return await fetch(
      `https://contributors-api.nuxtjs.com/nuxt/nuxtjs.org/master${path}`
    )
      .then(res => {
        if (!res.ok) return []
        return res.json()
      })
      .catch(e => [])
  })
}*/
