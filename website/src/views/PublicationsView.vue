<script setup lang="ts">
import { computed } from 'vue'
import PublicationList from '@/components/PublicationList.vue'
import type { Project, Publication } from '@/model/data_structures'
import projectsData from '@/assets/main_projects.json'
import type { ComputedRef } from '@vue/runtime-dom'

const allPublications: ComputedRef<Publication[]> = computed(() => {
  return (projectsData.projects as Project[]).flatMap(
    project => project.publication ?? [],
  )
})
</script>

<template>
  <div class="publication-view">
    <h1>Publications</h1>

    <PublicationList :publications="allPublications" />
  </div>
</template>

<style scoped>
.publication-view {
  max-width: 900px;
  margin: 0 auto;
}
</style>
