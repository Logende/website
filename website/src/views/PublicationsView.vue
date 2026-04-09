<script setup lang="ts">
import PublicationList from '@/components/PublicationList.vue'
import publications from '@/assets/main_publications.json'
import type { Publication } from '@/model/data_structures'
import MultiSelect from 'primevue/multiselect'
import ToggleSwitch from 'primevue/toggleswitch'
import { computed, ref } from 'vue'

const allPublications = publications.publications as Publication[]

function tagLabel(tag: string): string {
  return tag.replace(/([a-z])([A-Z])/g, '$1 $2')
}

// expand all tags of all publications
const tagOptions = Array.from(
  new Set(allPublications.flatMap(p => p.tags)),
).map(t => ({
  label: tagLabel(t),
  value: t,
}))

const projectOptions = Array.from(
  new Set(allPublications.flatMap(p => p.related_projects ?? [])),
).map(p => ({ label: p, value: p }))

const selectedTags = ref<string[]>([])
const selectedProjects = ref<string[]>([])
const includeSupervised = ref(true)

const filteredPublications = computed(() =>
  allPublications.filter(pub => {
    const matchesType =
      // there must be an overlap of selectedTags and publication.tags
      selectedTags.value.length === 0 || selectedTags.value.some(tag => pub.tags.includes(tag as string))

    const matchesProject =
      selectedProjects.value.length === 0 ||
      pub.related_projects?.some(p => selectedProjects.value.includes(p))

    const matchesSupervision = includeSupervised.value || !pub.supervised_by

    return matchesType && matchesProject && matchesSupervision
  }),
)
</script>

<template>
  <div class="publication-view">
    <h1>
      Publications
      <span v-if="filteredPublications.length !== allPublications.length">
        ({{ filteredPublications.length }} / {{ allPublications.length }})
      </span>
      <span v-else>({{ allPublications.length }})</span>
    </h1>

    <div class="filters">
      <MultiSelect
        v-model="selectedTags"
        :options="tagOptions"
        placeholder="Filter by type"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <MultiSelect
        v-model="selectedProjects"
        :options="projectOptions"
        placeholder="Filter by project"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <label class="supervision-toggle">
        <ToggleSwitch v-model="includeSupervised" />
        <span>Include supervised student publications</span>
      </label>
    </div>

    <PublicationList :publications="filteredPublications" />
  </div>
</template>

<style scoped>
.publication-view {
  max-width: 900px;
  margin: 0 auto;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 1.5rem;
}

.supervision-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
