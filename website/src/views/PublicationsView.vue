<script setup lang="ts">
import PublicationList from '@/components/PublicationList.vue'
import publications from '@/assets/main_publications.json'
import type { Publication } from '@/model/data_structures'
import MultiSelect from 'primevue/multiselect'
import ToggleSwitch from 'primevue/toggleswitch'
import { computed, ref } from 'vue'

type PublicationTag = Publication['tags'][number]
const allPublications = publications.publications as Publication[]

function tagLabel(tag: PublicationTag): string {
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

const selectedTags = ref<PublicationTag[]>([])
const selectedProjects = ref<string[]>([])
const includeSupervised = ref(true)

const filteredPublications = computed(() =>
  allPublications.filter(pub => {
    const matchesType =
      // there must be an overlap of selectedTags and publication.tags
      selectedTags.value.length === 0 || selectedTags.value.some(tag => pub.tags.includes(tag))

    const matchesProject =
      selectedProjects.value.length === 0 ||
      pub.related_projects?.some(p => selectedProjects.value.includes(p))

    const matchesSupervision = includeSupervised.value || !pub.supervised_by

    return matchesType && matchesProject && matchesSupervision
  }),
)

// Ordered groups for the "all publications" overview. Each publication is placed
// into a single group, so the most relevant works (peer-reviewed papers) appear
// first and supervised student projects come last.
type GroupKey =
  | 'Journal'
  | 'PaperPreprint'
  | 'TalkPosterWorkshop'
  | 'Thesis'
  | 'Supervised'

const groupDefinitions: { key: GroupKey; label: string }[] = [
  { key: 'Journal', label: 'Journal Articles' },
  { key: 'PaperPreprint', label: 'Conference Papers & Preprints' },
  { key: 'TalkPosterWorkshop', label: 'Talks, Posters & Workshops' },
  { key: 'Thesis', label: 'Theses' },
  { key: 'Supervised', label: 'Supervised Student Projects' },
]

function publicationGroup(pub: Publication): GroupKey {
  // Student work the user supervised is always grouped last, regardless of type.
  if (pub.supervised_by) return 'Supervised'
  const tags = pub.tags
  if (tags.includes('JournalPaper')) return 'Journal'
  if (tags.includes('ConferencePaper') || tags.includes('Preprint'))
    return 'PaperPreprint'
  if (
    tags.includes('ConferenceTalk') ||
    tags.includes('WorkshopTalk') ||
    tags.includes('OtherTalk') ||
    tags.includes('Poster') ||
    tags.includes('Workshop')
  )
    return 'TalkPosterWorkshop'
  return 'Thesis'
}

const groupedPublications = computed(() =>
  groupDefinitions
    .map(group => ({
      ...group,
      publications: filteredPublications.value.filter(
        pub => publicationGroup(pub) === group.key,
      ),
    }))
    .filter(group => group.publications.length > 0),
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

    <div
      v-for="group in groupedPublications"
      :key="group.key"
      class="publication-group"
    >
      <h2 class="group-heading">
        {{ group.label }}
        <span class="group-count">({{ group.publications.length }})</span>
      </h2>
      <PublicationList :publications="group.publications" />
    </div>

    <p v-if="groupedPublications.length === 0" class="no-results">
      No publications match the selected filters.
    </p>
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

.publication-group {
  margin-bottom: 2.5rem;
}

.group-heading {
  margin-bottom: 1rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid var(--color-border);
  font-size: 1.25rem;
}

.group-count {
  color: var(--color-text-soft);
  font-weight: 400;
  font-size: 0.85em;
}

.no-results {
  color: var(--color-text-soft);
}
</style>
