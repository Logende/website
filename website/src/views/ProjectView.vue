<script setup lang="ts">
import projectsData from '@/assets/main_projects.json'
import type { Project } from '@/model/data_structures'
import ProjectCard from '@/components/ProjectCard.vue'
import MultiSelect from 'primevue/multiselect'
import DatePicker from 'primevue/datepicker'
import { computed, ref } from 'vue'

const projects = projectsData.projects as Project[]

const selectedStartDate = ref<Date | null>(null)
const selectedEndDate = ref<Date | null>(null)

const sizesRaw = ['xs', 's', 'm', 'l', 'xl']

const sizes = sizesRaw.map(size => ({ label: size, value: size }))
const languages = Array.from(
  new Set(projects.flatMap(project => project.tags)),
).map(lang => ({ label: lang, value: lang }))
const favorites = ['Yes', 'No'].map(fav => ({ label: fav, value: fav }))
const locations = Array.from(
  new Set(projects.map(project => project.where?.toString() || 'Leisure')),
).map(location => ({ label: location, value: location }))

const selectedSizes = ref<string[]>([])
const selectedLanguages = ref<string[]>([])
const selectedFavorites = ref<string[]>([])
const selectedLocations = ref<string[]>([])

const filteredProjects = computed(() => {
  const result = projects.filter(project => {
    const projectStart = new Date(project.when.start)
    const projectEnd = new Date(project.when.end)

    const matchesDateRange =
      (!selectedStartDate.value || projectEnd >= selectedStartDate.value) &&
      (!selectedEndDate.value || projectStart <= selectedEndDate.value)

    const matchesSize =
      selectedSizes.value.length === 0 ||
      selectedSizes.value.includes(project.size)

    const matchesLanguage =
      selectedLanguages.value.length === 0 ||
      project.tags?.some(lang => selectedLanguages.value.includes(lang))

    const matchesFavorite =
      selectedFavorites.value.length === 0 ||
      (selectedFavorites.value.includes('Yes')
        ? project.favorite
        : !project.favorite)

    const matchesLocation =
      selectedLocations.value.length === 0 ||
      selectedLocations.value.includes(project.where?.toString() || 'Leisure')

    return (
      matchesDateRange &&
      matchesSize &&
      matchesLanguage &&
      matchesFavorite &&
      matchesLocation
    )
  })

  // existing sort logic
  result.sort((a, b) => {
    if (a.favorite !== b.favorite) {
      return a.favorite ? -1 : 1
    }

    let dateA = new Date(a.when.end).getTime()
    let dateB = new Date(b.when.end).getTime()

    if (a.favorite) {
      dateA += new Date(sizesRaw.indexOf(a.size) * 3, 0).getTime()
      dateB += new Date(sizesRaw.indexOf(b.size) * 3, 0).getTime()
    }

    return dateB - dateA
  })

  return result
})
</script>

<template>
  <main class="full-width">
    <div class="filters">
      <MultiSelect
        v-model="selectedSizes"
        :options="sizes"
        placeholder="Select sizes"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <MultiSelect
        v-model="selectedLanguages"
        :options="languages"
        placeholder="Select languages"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <MultiSelect
        v-model="selectedFavorites"
        :options="favorites"
        placeholder="Select favorite status"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <MultiSelect
        v-model="selectedLocations"
        :options="locations"
        placeholder="Select affiliations"
        optionLabel="label"
        optionValue="value"
        multiple
      />
      <!-- Start date -->
      <DatePicker
        v-model="selectedStartDate"
        show-icon
        placeholder="Start date"
        date-format="yy-mm-dd"
      />

      <!-- End date -->
      <DatePicker
        v-model="selectedEndDate"
        show-icon
        placeholder="End date"
        date-format="yy-mm-dd"
      />
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project-data="project"
      />
    </div>
  </main>
</template>
e>

<style scoped>
.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(280px, 25vw, 380px), 1fr)
  );
  gap: 16px;
}

.full-width {
  width: 100%;
}
</style>
