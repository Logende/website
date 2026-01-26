<script setup lang="ts">
import PublicationList from '@/components/PublicationList.vue'
import publications from '@/assets/main_publications.json'
import type { Publication } from '@/model/data_structures'
</script>

<template>
  <div class="publication-view">
    <h1>Publications</h1>

    <PublicationList
      :publications="publications.publications as Publication[]"
    />
  </div>
</template>

<style scoped>
.publication-view {
  max-width: 900px;
  margin: 0 auto;
}
</style>
