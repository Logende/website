<script setup lang="ts">
import { ref, watch, computed, type Ref } from 'vue'
import cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import Dialog from 'primevue/dialog'
import ProjectCard from '@/components/ProjectCard.vue'
import MarkdownArticle from '@/components/MarkdownArticle.vue'

import projectsData from '@/assets/main_projects.json'
import type { Project } from '@/model/data_structures'

cytoscape.use(fcose)

const projects = projectsData.projects as Project[]

// Generate affiliation colors
const affiliations = Array.from(
  new Set(projects.map(p => p.where?.toString() || 'Leisure')),
)

const affiliationColorMap: Record<string, string> = {}

function isDarkMode(): boolean {
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

affiliations.forEach((aff, index) => {
  const hue = Math.round((360 / affiliations.length) * index)
  // in light mode: darker nodes; in dark mode: lighter nodes
  const lightness = isDarkMode() ? 50 : 80
  const saturation = isDarkMode() ? 80 : 100
  affiliationColorMap[aff] = `hsl(${hue}, ${saturation}%, ${lightness}%)`
})

function getAffiliationColor(aff: string | undefined): string {
  if (!aff) return 'hsl(0, 0%, 60%)'
  return affiliationColorMap[aff] ?? 'hsl(0, 0%, 60%)'
}

// Build Cytoscape elements
const cytoscapeElements = computed(() => {
  const nodes = projects.map(p => ({
    data: {
      id: p.title,
      label: p.title,
      size: p.size,
      affiliation: p.where?.toString() || 'Leisure',
      color: getAffiliationColor(p.where?.toString() || 'Leisure'),
    },
  }))

  const edges = projects.flatMap(p =>
    (p.relations ?? []).map(rel => ({
      data: {
        id: `${p.title}-${rel.label}-${rel.relatedProject}`,
        source: p.title,
        target: rel.relatedProject,
        label: rel.label.replace(/([a-z])([A-Z])/g, '$1 $2'),
        bidirectional:
          rel.label == 'relatedTo' || rel.label == 'sharesConceptWith'
            ? 'true'
            : 'false',
      },
    })),
  )

  return [...nodes, ...edges]
})

const container = ref<HTMLElement | null>(null)
let cy: InstanceType<typeof cytoscape> | null = null

const layoutOptions = {
  name: 'fcose',
  quality: 'default',
  randomize: true,
  animate: 'end',
  animationDuration: 700,
  fit: true,
  padding: 20,
  nodeDimensionsIncludeLabels: true,
  nodeRepulsion: 6000,
  idealEdgeLength: 80,
  edgeElasticity: 0.45,
  nestingFactor: 0.8,
  numIter: 2500,
  tile: true,
  tilingPaddingVertical: 20,
  tilingPaddingHorizontal: 20,
  gravity: 0.25,
  gravityRange: 3.0,
  gravityCompound: 1.0,
  gravityRangeCompound: 1.5,
  initialEnergyOnIncremental: 0.5,
} as any

function getCssVar(name: string): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return value || '#000000'
}

function getStrongTextColor(): string {
  const raw = getCssVar('--color-text')
  const lower = raw.toLowerCase()

  // Heuristic: if it looks like a light color (dark mode), force full white
  if (
    lower.includes('235, 235, 235') ||
    lower === '#ffffff' ||
    lower === '#fff'
  ) {
    return '#ffffff'
  }

  // Otherwise full black
  return '#000000'
}

function initializeCytoscape() {
  if (!container.value) return

  const textColor = getStrongTextColor()
  const borderColor = getCssVar('--color-border')
  const backgroundColor = getCssVar('--color-background')

  const style: any[] = [
    {
      selector: 'node',
      style: {
        'background-color': (ele: any) => ele.data('color'),
        label: (ele: any) => ele.data('label'),
        'text-valign': 'center',
        'text-halign': 'center',
        'font-size': 12,
        'font-weight': 'bold',
        color: textColor, // <- resolved, concrete color
        width: (ele: any) => {
          const sizeMap: Record<string, number> = {
            xs: 20,
            s: 40,
            m: 100,
            l: 160,
            xl: 240,
          }
          return sizeMap[ele.data('size')] || 70
        },
        height: (ele: any) => {
          const sizeMap: Record<string, number> = {
            xs: 20,
            s: 40,
            m: 100,
            l: 160,
            xl: 240,
          }
          return sizeMap[ele.data('size')] || 70
        },
        'border-width': 2,
        'border-color': borderColor,
        padding: '10px',
        'text-wrap': 'wrap',
        'text-max-width': '80px',
        'overlay-padding': '5px',
      },
    },
    {
      selector: 'edge',
      style: {
        'line-color': borderColor,
        'target-arrow-color': textColor,
        'target-arrow-shape': 'triangle',
        'arrow-scale': 1.5,
        'curve-style': 'bezier',
        'text-background-color': backgroundColor,
        'text-background-padding': '3px',
        'text-background-opacity': 0.9,
        'text-background-shape': 'roundrectangle',
        'font-size': 9,
        color: textColor, // <- here too
        label: (ele: any) => ele.data('label'),
        width: 2,
        opacity: 0.8,
        'text-opacity': 0.8,
      },
    },
    {
      selector: 'edge[bidirectional = "true"]',
      style: {
        'source-arrow-color': textColor,
        'source-arrow-shape': 'triangle',
      },
    },
    {
      selector: 'node:selected',
      style: {
        'border-color': '#0984e3',
        'border-width': 3,
      },
    },
    {
      selector: 'edge:selected',
      style: {
        'line-color': '#0984e3',
        'target-arrow-color': '#0984e3',
        width: 3,
        opacity: 1,
      },
    },
  ]

  cy = cytoscape({
    container: container.value,
    elements: cytoscapeElements.value,
    style,
    layout: layoutOptions,
    wheelSensitivity: 0.1,
    boxSelectionEnabled: true,
  })

  cy.on('tap', 'node', (event: any) => {
    const id = event.target.id()
    selectedProjectTitle.value = id
    isProjectDialogVisible.value = true
  })

  cy.fit()
}

// Dialog state
const selectedProjectTitle = ref<string | null>(null)
const isProjectDialogVisible = ref(false)

const selectedProject = computed<Project | null>(() => {
  if (!selectedProjectTitle.value) return null
  return projects.find(p => p.title === selectedProjectTitle.value) ?? null
})

// Article dialog
const selectedArticle: Ref<string | undefined> = ref(undefined)
const isArticleSelected = ref(false)
const articleTitle = ref('')
const articleContent = ref('')

// Videos dialog
const selectedVideos: Ref<string[]> = ref([])
const isVideosSelected = ref(false)
const videosTitle = ref('')

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

function openArticle(articlePath: string, title: string) {
  selectedArticle.value = articlePath
  isArticleSelected.value = true
  articleTitle.value = title
  fetchArticleContent(articlePath)
}

function openVideos(videos: string[], title: string) {
  selectedVideos.value = videos
  isVideosSelected.value = true
  videosTitle.value = title
}

watch(
  container,
  async () => {
    if (!container.value) return
    await new Promise(resolve => setTimeout(resolve, 100))
    initializeCytoscape()
  },
  { immediate: true },
)

function rerunLayout() {
  if (!cy) return
  cy.layout(layoutOptions).run()
}

defineExpose({ rerunLayout, getAffiliationColor })
</script>

<template>
  <div class="graph-wrapper">

    <div ref="container" class="graph-container" />

    <!-- Legend overlay -->
    <div class="legend">
      <div class="legend-title">Affiliations</div>
      <div v-for="aff in affiliations" :key="aff" class="legend-item">
        <span
          class="legend-color"
          :style="{ backgroundColor: affiliationColorMap[aff] }"
        />
        <span class="legend-label">{{ aff }}</span>
      </div>
    </div>
  </div>

  <!-- Project details dialog -->
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

  <!-- Article dialog -->
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

  <!-- Videos dialog -->
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
        :src="`https://www.youtube.com/embed/${videoId}`"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </Dialog>
</template>

<style scoped>
.graph-wrapper {
  position: relative;
  width: 100%;
  height: 80vh;
}

.graph-container {
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-sizing: border-box;
  background-color: var(--color-background);
}

/* Cytoscape canvas */
:deep(.cytoscape-container) {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

/* Legend in top-right */
.legend {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 6px;
  font-size: 0.75rem;
  max-width: 200px;
}

.legend-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.legend-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.legend {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--color-text);
  border-radius: 6px;
  font-size: 0.75rem;
  max-width: 200px;
}

@media (prefers-color-scheme: dark) {
  .legend {
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
