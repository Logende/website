<script setup lang="ts">
import type { Project, Publication } from '@/model/data_structures'
import { formatTimeRange } from '@/utils'
import { getProjectSlug } from '@/utils'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { computed, type ComputedRef, type Ref, ref, watch } from 'vue'
import PublicationList from '@/components/PublicationList.vue'
import publications from '@/assets/main_publications.json'
import MarkdownArticle from '@/components/MarkdownArticle.vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  projectData: Project
  openArticleOnLoad?: boolean
}>()
const route = useRoute()
const router = useRouter()

const showPublications = ref(false)
const projectPublications: ComputedRef<Publication[]> = computed(() => {
  const projectTitle = props.projectData.title.toLowerCase()
  const allPublications = publications.publications as Publication[]
  return allPublications.filter(pub =>
    pub.related_projects?.some(proj =>
      proj.toLowerCase().includes(projectTitle),
    ),
  )
})

const showArticle: Ref<boolean> = ref<boolean>(false)
const articleContent = ref<string>('')
const projectSlug = computed(() => getProjectSlug(props.projectData))

const showVideos: Ref<boolean> = ref<boolean>(false)
const videoOrVideos: string = props.projectData.videos
  ? props.projectData.videos.length > 1
    ? 'Videos'
    : 'Video'
  : 'No Video'

type ProjectVideo =
  | { type: 'embed'; source: string; embedUrl: string }
  | { type: 'link'; source: string; href: string }

function parseHttpUrl(value: string): URL | undefined {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url
      : undefined
  } catch {
    return undefined
  }
}

function getYouTubeVideoId(url: URL): string | undefined {
  const hostname = url.hostname.toLowerCase().replace(/^www\./, '')

  if (hostname === 'youtu.be') {
    return url.pathname.split('/').filter(Boolean)[0]
  }

  if (hostname !== 'youtube.com' && hostname !== 'youtube-nocookie.com') {
    return undefined
  }

  if (url.pathname === '/watch') return url.searchParams.get('v') ?? undefined

  const [, route, videoId] = url.pathname.split('/')
  return ['embed', 'shorts', 'live'].includes(route) ? videoId : undefined
}

function getTibEmbedUrl(url: URL): string | undefined {
  const hostname = url.hostname.toLowerCase().replace(/^www\./, '')
  const mediaMatch = url.pathname.match(/^\/media\/(\d+)\/?$/)

  return hostname === 'av.tib.eu' && mediaMatch
    ? `https://av.tib.eu/player/${mediaMatch[1]}`
    : undefined
}

const projectVideos = computed<ProjectVideo[]>(() =>
  (props.projectData.videos ?? []).map(source => {
    const url = parseHttpUrl(source)

    if (url) {
      const youtubeVideoId = getYouTubeVideoId(url)
      if (youtubeVideoId) {
        return {
          type: 'embed',
          source,
          embedUrl: `https://www.youtube.com/embed/${encodeURIComponent(youtubeVideoId)}`,
        }
      }

      const tibEmbedUrl = getTibEmbedUrl(url)
      if (tibEmbedUrl) return { type: 'embed', source, embedUrl: tibEmbedUrl }

      return { type: 'link', source, href: url.href }
    }

    return {
      type: 'embed',
      source,
      embedUrl: `https://www.youtube.com/embed/${encodeURIComponent(source)}`,
    }
  }),
)

function openArticle() {
  updateArticleUrl()
  showArticle.value = true
  fetchArticleContent(props.projectData.article!)
}

function updateArticleUrl() {
  if (route.name === 'project-article' && route.params.projectSlug === projectSlug.value) {
    return
  }

  if (route.name === 'projects' || route.name === 'project-article') {
    router.push({ name: 'project-article', params: { projectSlug: projectSlug.value } })
    return
  }

  router.push({
    name: 'home',
    query: { ...route.query, article: projectSlug.value },
    hash: '#portfolio-section',
  })
}

function clearArticleUrl() {
  if (route.name === 'project-article' && route.params.projectSlug === projectSlug.value) {
    router.push({ name: 'projects' })
    return
  }

  if (route.query.article === projectSlug.value || route.query.project === projectSlug.value) {
    const query = { ...route.query }
    delete query.article
    delete query.project
    router.push({ name: 'home', query, hash: route.hash || '#portfolio-section' })
  }
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

watch(
  () => props.openArticleOnLoad,
  shouldOpen => {
    if (shouldOpen && props.projectData.article && !showArticle.value) {
      showArticle.value = true
      fetchArticleContent(props.projectData.article)
    } else if (!shouldOpen && showArticle.value) {
      showArticle.value = false
    }
  },
  { immediate: true },
)

watch(showArticle, isOpen => {
  if (!isOpen) clearArticleUrl()
})
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
        <template v-if="projectData.tags">
          <span v-for="tag in projectData.tags" :key="tag" class="badge">
            <span style="padding-right: 10px">{{ tag }}</span>
          </span>
        </template>
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
          @click="openArticle()"
          target="_blank"
          title="Read Article"
        >
          <span class="badge-link">Read More</span>
        </a>
        <a
          v-if="projectPublications.length"
          @click="showPublications = true"
          title="View Publications"
        >
          <span class="badge-link">
            Publications ({{ projectPublications.length }})
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
          @click="showVideos = true"
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
    :style="{ width: '90vw' }"
    header="Publications and Talks"
  >
    <PublicationList :publications="projectPublications" />
  </Dialog>

  <Dialog
    v-model:visible="showArticle"
    :modal="true"
    :closable="true"
    :style="{ width: '90vw', height: '90vh' }"
  >
    <template #header>
      <h3>{{ projectData.title }}</h3>
    </template>
    <MarkdownArticle
      v-if="projectData.article?.toLowerCase().endsWith('.md')"
      :article-path="projectData.article!"
    />
    <div
      v-if="projectData.article?.toLowerCase().endsWith('.html')"
      v-html="articleContent"
    ></div>
  </Dialog>

  <Dialog
    v-model:visible="showVideos"
    :modal="true"
    :style="{ width: '600px', height: '80vh' }"
    :closable="true"
  >
    <template #header>
      <h3>{{ projectData.title + ' ' + videoOrVideos }}</h3>
    </template>

    <div class="project-videos">
      <div
        v-for="video in projectVideos"
        :key="video.source"
        class="project-video"
      >
        <iframe
          v-if="video.type === 'embed'"
          width="560"
          height="315"
          :src="video.embedUrl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a
          v-else
          :href="video.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ video.source }}
        </a>
      </div>
    </div>
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

.full-size-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.project-videos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-video iframe {
  display: block;
  max-width: 100%;
}
</style>
