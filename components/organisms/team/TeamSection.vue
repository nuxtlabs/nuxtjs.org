<template>
  <div class="py-16 d-container-content">
    <h2 class="text-display-4 font-serif">
      <Markdown use="title" unwrap="p" />
    </h2>
    <div class="text-center text-lg pb-16"><DocusContent :document="team.body" /></div>
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center pb-16">
        <div v-for="member in team.members" :key="member.name">
          <TeamMember :member="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    teamName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const teams = ref()
    const team = ref([])


    useFetch(async () => {
      teams.value = await $docus
        .search(`/teams/${props.teamName}`, { deep: true })
        .where({ 'language': i18n.locale })
        .sortBy('position', 'asc')
        .fetch()

      team.value = teams.value[0]
      console.log(team.value)
    })
    return {
      team
    }
  }
})
</script>
