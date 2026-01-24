<script setup lang="ts">
import projectsData from '@/assets/main_projects.json'
import type { Project } from '@/model/data_structures'
import ProjectCard from '@/components/ProjectCard.vue'
import MultiSelect from 'primevue/multiselect'
import Dialog from 'primevue/dialog'
import { computed, type Ref, ref } from 'vue'
import MarkdownArticle from '@/components/MarkdownArticle.vue'

const projects = projectsData.projects as Project[]

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

const selectedArticle: Ref<string | undefined> = ref<string | undefined>(
  undefined,
)
const isArticleSelected: Ref<boolean> = ref<boolean>(false)
const articleTitle: Ref<string> = ref<string>('')
const articleContent = ref<string>('')

const selectedVideos: Ref<string[]> = ref<string[]>([])
const isVideosSelected: Ref<boolean> = ref<boolean>(false)
const videosTitle: Ref<string> = ref<string>('')

const filteredProjects = computed(() => {
  const result = projects.filter(project => {
    const matchesSize =
      selectedSizes.value.length === 0 ||
      selectedSizes.value.includes(project.size)
    const matchesLanguage =
      selectedLanguages.value.length === 0 ||
      project.tags?.some(lang =>
        selectedLanguages.value.includes(lang),
      )
    const matchesFavorite =
      selectedFavorites.value.length === 0 ||
      (selectedFavorites.value.includes('Yes')
        ? project.favorite
        : !project.favorite)

    const matchesLocation =
      selectedLocations.value.length === 0 ||
      selectedLocations.value.includes(project.where?.toString() || 'Leisure')
    return matchesSize && matchesLanguage && matchesFavorite && matchesLocation
  })
  // sort the list of projects: first prefer favorites, then by end date
  result.sort((a, b) => {
    if (a.favorite !== b.favorite) {
      return a.favorite ? -1 : 1
    }

    let dateA = new Date(a.when.end).getTime()
    let dateB = new Date(b.when.end).getTime()

    // for favorite a special rule holds: for every size it is bigger, it gets more priority, as it was two years older
    if (a.favorite) {
      dateA += new Date(sizesRaw.indexOf(a.size) * 3, 0).getTime()
      dateB += new Date(sizesRaw.indexOf(b.size) * 3, 0).getTime()
    }

    return dateB - dateA
  })
  return result
})

function openArticle(articlePath: string, title: string) {
  selectedArticle.value = articlePath
  isArticleSelected.value = true
  articleTitle.value = title
  fetchArticleContent(articlePath)
}

async function fetchArticleContent(articlePath: string) {
  try {
    const response = await fetch(articlePath)
    if (response.ok) {
      articleContent.value = await response.text()
    } else {
      console.error('Failed to fetch article content')
    }
  } catch (error) {
    console.error('Error fetching article content:', error)
  }
}

function openVideos(videos: string[], title: string) {
  selectedVideos.value = videos
  isVideosSelected.value = true
  videosTitle.value = title
}
</script>

<template>
  <main class="full-width">
    <Dialog
      v-model:visible="isArticleSelected"
      :modal="true"
      :style="{ width: '90vw', height: '90vh' }"
      :closable="true"
    >
      <template #header>
        <h3>{{ articleTitle }}</h3>
      </template>
      <MarkdownArticle
        v-if="selectedArticle?.toLowerCase().endsWith('.md')"
        :article-path="selectedArticle!"
      />
      <div
        v-if="selectedArticle?.toLowerCase().endsWith('.html')"
        v-html="articleContent"
      ></div>
    </Dialog>

    <Dialog
      v-model:visible="isVideosSelected"
      :modal="true"
      :style="{ width: '600px', height: '80vh' }"
      :closable="true"
    >
      <template #header>
        <h3>{{ videosTitle }}</h3>
      </template>

      <div>
        <iframe
          v-for="videoId in selectedVideos"
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + videoId"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Dialog>

    <h1>Portfolio</h1>
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
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project-data="project"
        @select_article="openArticle"
        @select_videos="openVideos"
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

.full-size-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
