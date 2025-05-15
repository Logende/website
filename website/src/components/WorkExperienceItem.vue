<script setup lang="ts">
import type { Project, WorkExperience } from '@/model/data_structures'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatTimeRange } from '@/utils'
import Image from 'primevue/image'

defineProps<{
  workExperienceData: WorkExperience
}>()
</script>

<template>
  <div class="item">
    <i>
      <Image
        :src="workExperienceData.icon"
        alt="img"
        width="80px"
        style="background: white"
      ></Image>
    </i>
    <div class="details">
      <h3>
        {{ workExperienceData.role }}
      </h3>
      <h4>
        {{ workExperienceData.organization }}
      </h4>
      <h5>
        {{ formatTimeRange(workExperienceData.timeRange) }}
        <span v-if="workExperienceData.location">
          - {{ workExperienceData.location }}</span
        >
      </h5>
      <span v-if="workExperienceData.description">
        {{ workExperienceData.description }}
      </span>

      <br />
      <span
        v-if="workExperienceData.tags"
        v-for="tag in workExperienceData.tags"
        class="badge"
      >
        <span style="padding-right: 10px">{{ tag }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h4 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.item {
  margin-left: 1rem;
  margin-top: 0;
  max-width: 500px;
  margin-right: 3rem;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  display: flex;
  position: relative;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  top: calc(50% - 40px);
  left: -41px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
  width: 80px;
  height: 80px;
}

.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 40px);
  height: calc(50%);
}

.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 40px);
  height: calc(50%);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
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
</style>
