<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

defineProps<{}>()
</script>

<template>
  <div class="greetings">
    <img
      alt="Photo"
      class="logo"
      src="@/assets/me_2.jpg"
      width="140"
      height="140"
    />

    <h3>
      Hi, I'm <strong>Felix Neubauer</strong>, a software engineer based in
      Germany.

      <a href="https://github.com/logende" target="_blank" rel="noopener">
        <FontAwesomeIcon :icon="faGithub" />
      </a>
      <a href="https://www.instagram.com/felix.neuby/" rel="noopener">
        <FontAwesomeIcon :icon="faInstagram" />
      </a>
      <a href="https://www.linkedin.com/in/neubauer-felix/" target="_blank">
        <FontAwesomeIcon :icon="faLinkedin" />
      </a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
