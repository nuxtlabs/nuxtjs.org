export default ({ store }) => {
  window.onNuxtReady(async () => {

    /*if (process.client) {

      const docus = window.$nuxt.$docus

      const docs = await docus
        .search('/docs', { deep: true })
        .fetch()

      let links = []

      docs.forEach(element => {
        if (element.body.children.length > 0) {
          element.body.children.forEach(element => {
            if (element.tag && element.children.length > 0) {
              element.children.forEach(element => {
                if (element.tag && element.tag === 'prose-a') {
                  if (element.props.href.substring(0, 1) !== '#') {
                    links.push(element.props.href)
                  }
                }
              });
            }
          });
        }
      });

      links = [...new Set(links)]
      console.log(links)

      links.forEach(element => {
        let url = element

        if (url.substring(0, 4) !== 'http') {
          url = `https://preview.nuxtjs.org/${url}`
        }
        const http = new XMLHttpRequest();

        http.open('HEAD', url, false);

        try {
          http.send();
          if (http.status === 404) {
            console.log('ERROR 404', url)
          } else {
            console.log('GOOD', url)
          }
        } catch(e) {
          console.log('EXCEPTION', e)
        }


      });

    }*/

    if (await adsBlocked()) {
      store.commit('setAdBlocked', true)
    }
  })
}

function adsBlocked() {
  return fetch('https://cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg', {
    method: 'HEAD',
    mode: 'no-cors'
  })
    .then(() => false)
    .catch(() => true)
}
