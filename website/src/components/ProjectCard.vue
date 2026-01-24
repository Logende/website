<script setup lang="ts">
import type { Project, Publication } from '@/model/data_structures'
import { formatTimeRange } from '@/utils'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { computed, ref } from 'vue'
import type { ComputedRef } from '@vue/runtime-dom'
import PublicationList from '@/components/PublicationList.vue'

const props = defineProps<{
  projectData: Project
}>()

const emit = defineEmits<{
  (e: 'select_article', articlePath: string, title: string): void
  (e: 'select_videos', videos: string[], title: string): void
}>()

const showPublications = ref(false)

const publications: ComputedRef<Publication[]> = computed(() => {
  return props.projectData.publication ?? []
})

const videoOrVideos: string = props.projectData.videos
  ? props.projectData.videos.length > 1
    ? 'Videos'
    : 'Video'
  : 'No Video'
</script>

<template>
  <Card>
    <template #header>
      <h4 style="text-align: center" v-if="projectData.where">
        {{ projectData.where }}
      </h4>
    </template>
    <template #title
      >{{ projectData.title }}
      <FontAwesomeIcon
        v-if="projectData.favorite"
        :icon="faStar"
      ></FontAwesomeIcon>
    </template>
    <template #subtitle>
      {{ formatTimeRange(projectData.when) }}
      <div>
        <span class="badge-size">
          {{ projectData.size }}
        </span>
        <span
          v-if="projectData.tags"
          v-for="tag in projectData.tags"
          class="badge"
        >
          <span style="padding-right: 10px">{{ tag }}</span>
        </span>
      </div>
    </template>
    <template #content>
      <p class="m-0">
        {{ projectData.description }}
      </p>

      <img
        v-if="projectData.icon"
        alt="user header"
        :src="projectData.icon"
        style="max-width: 350px"
      />
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <a
          v-if="projectData.article"
          @click="
            emit('select_article', projectData.article, projectData.title)
          "
          target="_blank"
          title="Read Article"
        >
          <span class="badge-link">Read More</span>
        </a>
        <a
          v-if="publications.length"
          @click="showPublications = true"
          title="View Publications"
        >
          <span class="badge-link">
            Publications ({{ publications.length }})
          </span>
        </a>
        <a
          v-if="projectData.project_page"
          :href="projectData.project_page"
          target="_blank"
          title="Go to Project Page"
        >
          <span class="badge-link">Project Page</span>
        </a>
        <a
          v-if="projectData.source_code"
          :href="projectData.source_code"
          target="_blank"
          title="View Source Code"
        >
          <span class="badge-link">Source Code</span>
        </a>
        <a
          v-if="projectData.demo"
          :href="projectData.demo"
          target="_blank"
          title="Try It Out"
        >
          <span class="badge-link">Try It Out</span>
        </a>
        <a
          v-if="projectData.videos"
          @click="
            emit(
              'select_videos',
              projectData.videos,
              projectData.title + ' ' + videoOrVideos,
            )
          "
          target="_blank"
          title="Watch Video"
        >
          <span class="badge-link"
            >Watch {{ videoOrVideos }} ({{ projectData.videos.length }})</span
          >
        </a>
      </div>
    </template>
  </Card>

  <Dialog
    v-model:visible="showPublications"
    modal
    dismissableMask
    :style="{ width: '60vw' }"
    header="Publications and Talks"
  >
    <PublicationList :publications="publications" />
  </Dialog>
</template>

<style scoped>
.p-card {
  overflow: hidden;
  width: 24rem;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  font-size: 0.75em;
  font-weight: 600;
  color: var(--color-text);
  background-color: var(--color-border);
  border-radius: 0.25rem;
}
.badge-size {
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  font-size: 0.75em;
  font-weight: 600;
  color: var(--color-text);
  background-color: var(--color-border-hover);
  border-radius: 0.25rem;
}

.badge-link {
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  font-size: 0.75em;
  font-weight: 600;
  border-radius: 0.25rem;
}
</style>
