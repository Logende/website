<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import AboutView from '@/views/AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectView from '@/views/ProjectView.vue'
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import PublicationsView from "@/views/PublicationsView.vue";

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    const headerOffset = 95 // Height of the header
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <main>
    <header class="full-width">
      <div class="menu-bar">
        <nav>
          <Button class="header-button" @click="scrollTo('about')"
            >About</Button
          >
          <Button class="header-button" @click="scrollTo('experiences')"
            >Experiences</Button
          >
          <Button class="header-button" @click="scrollTo('portfolio')"
          >Portfolio</Button
          >
          <Button class="header-button" @click="scrollTo('publications')"
          >Publications</Button
          >
        </nav>
      </div>
    </header>

    <AboutView class="page-section" id="about" />
    <ExperienceView class="page-section" id="experiences" />
    <ProjectView class="page-section" id="portfolio" />
    <PublicationsView class="page-section" id="publications" />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  z-index: 1000;
  background: var(--color-background);
}

.header-button {
  margin-right: 10px;
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
</style>
