<script setup lang="ts">
import { ref, watch, nextTick, computed, type Ref } from 'vue'
import { MarkerType, type NodeMouseEvent, VueFlow } from '@vue-flow/core'
import type { Node, Edge } from '@vue-flow/core'
import { useD3ForceLayout } from '@/composables/useD3ForceLayout'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import projectsData from '@/assets/main_projects.json'
import type { Project } from '@/model/data_structures'
import Dialog from 'primevue/dialog'
import ProjectCard from '@/components/ProjectCard.vue'
import MarkdownArticle from '@/components/MarkdownArticle.vue'

const projects = projectsData.projects as Project[]

const affiliations = Array.from(
  new Set(projects.map(p => p.where?.toString() || 'Leisure')),
)

// generate a distinct HSL color for each affiliation
const affiliationColorMap: Record<string, string> = {}

affiliations.forEach((aff, index) => {
  const hue = Math.round((360 / affiliations.length) * index)
  const saturation = 80
  const lightness = 70
  affiliationColorMap[aff] = `hsl(${hue}, ${saturation}%, ${lightness}%)`
})

function getAffiliationColor(aff: string | undefined): string {
  if (!aff) return 'hsl(0, 0%, 60%)' // neutral gray fallback
  return affiliationColorMap[aff] ?? 'hsl(0, 0%, 60%)'
}

const rawNodes: Node[] = projects.map(p => ({
  id: p.title,
  type: 'project', // custom node type
  data: {
    label: p.title,
    size: p.size, // 'xs' | 's' | 'm' | 'l' | 'xl'
    affiliation: p.where?.toString() || 'Leisure',
  },
  position: { x: 0, y: 0 },
}))

const rawEdges: Edge[] = projects.flatMap(p =>
  (p.relations ?? []).flatMap(rel => {
    if (rel.label === 'relatedTo') {
      return [
        {
          id: `${p.title}-relatedTo-${rel.relatedProject}`,
          source: p.title,
          target: rel.relatedProject,
          label: 'Related To',
          markerStart: { type: MarkerType.ArrowClosed },
          markerEnd: { type: MarkerType.ArrowClosed },
        },
      ]
    }

    return [
      {
        id: `${p.title}-${rel.label}-${rel.relatedProject}`,
        source: p.title,
        target: rel.relatedProject,
        label: rel.label.replace(/([a-z])([A-Z])/g, '$1 $2'),
        markerEnd: { type: MarkerType.ArrowClosed },
      },
    ]
  }),
)

const nodes = ref<Node[]>(rawNodes)
const edges = ref<Edge[]>(rawEdges)

const container = ref<HTMLElement | null>(null)

async function runLayout() {
  if (!container.value) return

  await nextTick() // ensure DOM updated

  const width = container.value.clientWidth
  const height = container.value.clientHeight
  if (!width || !height) return

  const positioned = await useD3ForceLayout(
    rawNodes.map(n => ({ ...n })),
    rawEdges,
    width,
    height,
  )
  nodes.value = positioned
}

// dialog state
const selectedProjectTitle = ref<string | null>(null)
const isProjectDialogVisible = ref(false)

const selectedProject = computed<Project | null>(() => {
  if (!selectedProjectTitle.value) return null
  return projects.find(p => p.title === selectedProjectTitle.value) ?? null
})

// article dialog
const selectedArticle: Ref<string | undefined> = ref(undefined)
const isArticleSelected = ref(false)
const articleTitle = ref('')
const articleContent = ref('')

// videos dialog
const selectedVideos: Ref<string[]> = ref([])
const isVideosSelected = ref(false)
const videosTitle = ref('')

// from ProjectView
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

// VueFlow node click
function onNodeClick(event: NodeMouseEvent) {
  selectedProjectTitle.value = event.node.id as string
  isProjectDialogVisible.value = true
}

// initial layout when graph mounts
watch(
  container,
  async () => {
    if (!container.value) return
    await runLayout()
  },
  { immediate: true },
)

defineExpose({ runLayout })
</script>

<template>
  <div ref="container" class="graph-container">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      fit-view
      class="project-graph"
      :elevate-edges-on-select="true"
      @node-click="onNodeClick"
    >
      <template #node-project="nodeProps">
        <div
          class="project-node"
          :style="{
            backgroundColor: getAffiliationColor(nodeProps.data.affiliation),
          }"
        >
          <div class="project-node-header">
            <span class="project-node-title">
              {{ nodeProps.data.label }}
            </span>
            <span class="size-badge">
              {{ nodeProps.data.size }}
            </span>
          </div>
        </div>
      </template>
    </VueFlow>

    <!-- Node -> project tile dialog -->
    <Dialog
      v-model:visible="isProjectDialogVisible"
      :modal="true"
      :closable="true"
      :style="{ width: '600px', maxWidth: '90vw' }"
    >
      <template #header>
        <h3>{{ selectedProject?.title }}</h3>
      </template>

      <div v-if="selectedProject">
        <ProjectCard
          :project-data="selectedProject"
          @select_article="openArticle"
          @select_videos="openVideos"
        />
      </div>
    </Dialog>

    <!-- Article dialog (same as in grid view) -->
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
      />
    </Dialog>

    <!-- Videos dialog (same as in grid view) -->
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
          :key="videoId"
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + videoId"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.graph-container {
  width: 100%;
  height: 80vh;
}
.project-graph {
  width: 100%;
  height: 100%;
}
.graph-container {
  width: 100%;
  height: 80vh;
  border: 1px solid var(--color-border); /* or any color */
  border-radius: 8px;
  box-sizing: border-box;
}

.project-node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.project-node-title {
  font-weight: 600;
  font-size: 0.9rem;
}
.project-node {
  margin: 0;
  padding: 4px 6px;
  border-radius: 3px;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.size-badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  text-transform: uppercase;
}

.affiliation-pill {
  margin-top: 4px;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 999px;
  color: white;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
