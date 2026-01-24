<template>
  <div class="about">
    <h1>About Me</h1>

    <img
      alt="Photo"
      class="logo"
      src="@/assets/me_2.jpg"
      width="140"
      height="140"
    />

    <br />

    <a href="https://github.com/logende" target="_blank" rel="noopener">
      <FontAwesomeIcon :icon="faGithub" />
    </a>
    <a href="https://www.instagram.com/felix.neuby/" rel="noopener">
      <FontAwesomeIcon :icon="faInstagram" />
    </a>
    <a href="https://www.linkedin.com/in/neubauer-felix/" target="_blank">
      <FontAwesomeIcon :icon="faLinkedin" />
    </a>

    <br />

    <br />

    <h3>
      Hi, I'm <b>Felix Neubauer</b>, a research software engineer based in Germany with a
      passion for crafting well-architected, high-quality software.

      <br />

      I started programming in Java in 2012 and have since earned both my
      <b>Bachelor’s and Master’s degrees in Software Engineering</b>. After
      working at <b>Robert Bosch GmbH from 2019 to 2024</b> — developing
      software for self-driving cars with <b>C++ for embedded systems</b>,
      <b>Python-based tooling</b>, and <b>CI/CD pipelines</b> — I have now
      transitioned to full-time research as part of my <b>PhD</b>.

      <br />

      Beyond my research, I love experimenting with
      <b>TypeScript, Kotlin and Java</b>, focusing on <b>research data management</b>, <b>model driven engineering</b>,
      <b>software architecture</b>, <b>clean code</b>, <b>testing</b>,
      <b>DevOps</b>, and <b>API design</b>. My open-source projects have
      accumulated over a <b>million downloads</b>, and one of my Java minigames
      was featured by YouTubers with a combined audience of over 50 million
      subscribers.

      <br />

      Before transitioning to a full-time industry and then research job, I
      worked as a freelancer and sold my own Java software. Now, I continue to
      build impactful software—most recently, <b>MetaConfigurator</b>, a JSON schema
      editor and form generator, developed as part of my
      master’s thesis and now developed further within the scope of my PhD.

      <br />
      Want to learn more? Check out my projects and research below! 🚀
    </h3>
  </div>
</template>

<style>
.about b {
  font-weight: 500;
}
</style>

<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
