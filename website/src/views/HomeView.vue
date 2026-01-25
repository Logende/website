<script setup lang="ts">
import AboutView from '@/views/AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectView from '@/views/ProjectView.vue'
import PublicationsView from '@/views/PublicationsView.vue'
import ProjectGraphView from '@/views/ProjectGraphView.vue'
import Button from 'primevue/button'
import { nextTick, ref, watch } from 'vue'

type ProjectViewMode = 'grid' | 'graph'
const projectViewMode = ref<ProjectViewMode>('grid')
const projectGraphRef = ref<InstanceType<typeof ProjectGraphView> | null>(null)

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return

  const headerOffset = 95
  const elementPosition = section.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.scrollY - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

function goToPortfolio() {
  // ensure we always scroll to the shared project section wrapper
  scrollTo('portfolio-section')
}

// whenever view mode switches to graph, ensure layout after render
watch(projectViewMode, async mode => {
  if (mode !== 'graph') return
  await nextTick()
  projectGraphRef.value?.rerunLayout()
})
</script>

<template>
  <main>
    <header class="full-width">
      <div class="menu-bar">
        <nav>
          <Button class="header-button" @click="scrollTo('about')">
            About
          </Button>
          <Button class="header-button" @click="scrollTo('experiences')">
            Experiences
          </Button>
          <Button class="header-button" @click="goToPortfolio">
            Portfolio
          </Button>
          <Button class="header-button" @click="scrollTo('publications')">
            Publications
          </Button>
        </nav>
      </div>
    </header>

    <AboutView class="page-section" id="about" />
    <ExperienceView class="page-section" id="experiences" />

    <!-- Shared Portfolio section wrapper -->
    <section class="page-section" id="portfolio-section">

      <h1>Portfolio</h1>

      <!-- Toggle buttons -->
      <div class="project-toggle">
        <Button
          class="toggle-button"
          :severity="projectViewMode === 'grid' ? 'primary' : 'secondary'"
          @click="projectViewMode = 'grid'"
        >
          Grid view
        </Button>
        <Button
          class="toggle-button"
          :severity="projectViewMode === 'graph' ? 'primary' : 'secondary'"
          @click="projectViewMode = 'graph'"
        >
          Graph view
        </Button>
      </div>

      <!-- Views -->
      <div v-if="projectViewMode === 'grid'">
        <ProjectView id="portfolio" />
      </div>
      <div v-else>
        <ProjectGraphView id="projectGraphView" />
      </div>
    </section>

    <PublicationsView class="page-section" id="publications" />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1000;
  background: var(--color-background);
}

.header-button {
  margin-right: 10px;
  margin-bottom: 8px;
}

.page-section {
  margin-bottom: 300px;
}

main {
  flex-grow: 1;
}

.full-width {
  width: 100%;
  max-width: 2000px;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

:target {
  scroll-margin-top: 200px;
}

.project-toggle {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.toggle-button {
  min-width: 120px;
}
</style>
