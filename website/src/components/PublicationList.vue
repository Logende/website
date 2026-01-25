<script setup lang="ts">
import type { Publication } from '@/model/data_structures'
defineProps<{
  publications: Publication[]
}>()

function sortPublications(publications: Publication[]) {
  return publications.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

function formattedDate(pub: Publication): string {
  return new Date(pub.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function publicationTypeLabel(type: Publication['type']): string {
  return type.replace(/([a-z])([A-Z])/g, '$1 $2')
}
</script>

<template>
  <div class="publication-list">
    <div
      v-for="(pub, idx) in sortPublications(publications)"
      :key="idx"
      class="publication-entry"
    >
      <p class="citation">
        <span class="authors">{{ pub.authors.join(', ') }}. </span>
        <span class="title">{{ pub.title }}. </span>
        <span class="venue"> {{ pub.conference }}, </span>
        <span class="date">{{ formattedDate(pub) }}.</span>

        <!-- DOI -->
        <span v-if="pub.doi" class="doi">
          DOI:
          <a :href="`https://doi.org/${pub.doi}`" target="_blank">
            {{ pub.doi }} </a
          >.
        </span>

        <!-- URL (only if different from DOI) -->
        <span
          v-if="pub.link && !pub.link.includes(pub.doi ?? 'NO DOI!')"
          class="url"
        >
          <a :href="pub.link" target="_blank"> {{ pub.link }} </a>.
        </span>

        <span class="pub-type" :class="`pub-type--${pub.type}`">
          {{ publicationTypeLabel(pub.type) }}
        </span>
      </p>

      <p v-if="pub.abstract" class="abstract">
        {{ pub.abstract }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.publication-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.publication-entry {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.citation {
  line-height: 1.4;
}

.citation .title {
  font-weight: 600;
}

.citation .venue {
  font-style: italic;
}

.citation .date {
  color: var(--color-text-soft);
}

.citation .doi,
.citation .url {
  margin-left: 0.4rem;
  font-size: 0.85em;
  color: var(--color-text-soft);
  word-break: break-all;
}

.citation .url a,
.citation .doi a {
  color: inherit;
  text-decoration: underline;
}

.meta {
  font-size: 0.85em;
  color: var(--color-text-soft);
}

.abstract {
  margin-top: 0.5rem;
  font-size: 0.9em;
  line-height: 1.4;
}

.pub-type {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.15em 0.45em;
  font-size: 0.65em;
  font-weight: 600;
  border-radius: 0.25rem;
  vertical-align: middle;
  background: var(--color-border);
  color: var(--color-text);
}
.pub-type--ConferencePaper {
  background: var(--pub-conference-paper-bg);
}

.pub-type--JournalPaper {
  background: var(--pub-journal-paper-bg);
}

.pub-type--Poster {
  background: var(--pub-poster-bg);
}

.pub-type--MasterThesis,
.pub-type--BachelorThesis,
.pub-type--ThesisSupervision {
  background: var(--pub-thesis-bg);
}

.pub-type--ConferenceTalk,
.pub-type--WorkshopTalk,
.pub-type--OtherTalk {
  background: var(--pub-talk-bg);
}
</style>
