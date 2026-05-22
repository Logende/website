<template>
  <div class="about">
    <h1>About Me</h1>

    <img
      alt="Photo"
      class="logo"
      src="@/assets/me_5.jpg"
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
      Hi, I'm <b>Felix Neubauer</b>, a research software engineer based in
      Germany. I enjoy building software that is robust, well-structured, and
      genuinely useful to the people working with it.

      <br />

      I started programming in Java in 2012 and later completed both my
      Bachelor's and Master's degrees in Software Engineering. From 2019 to
      2024, I worked at Robert Bosch GmbH on software for self-driving vehicles,
      including embedded C++, Python tooling, and CI/CD infrastructure. I am
      now continuing this path in academia as a doctoral researcher at the
      University of Stuttgart.

      <br />

      My main interests today are research data management, model-driven
      engineering, software architecture, testing, DevOps, and practical uses of
      AI in developer tools. A lot of my recent work revolves around
      MetaConfigurator, a JSON Schema editor and form generator that began as a
      student project, became the basis of my master's thesis, and now continues
      as part of my PhD and research collaborations in chemistry and scientific
      data workflows.

      <br />

      Alongside that, I still enjoy building things outside my core research
      area. Recent side projects include Veiled Kingdoms, a dark fantasy
      strategy board game, and a simulator for it that I use to experiment with
      reinforcement learning agents and AI-assisted development. Earlier on, I
      worked as a freelancer, sold my own Java software, and built open-source
      projects with more than a million downloads in total.

      <br />

      I also publish regularly on my research topics, most recently around
      MetaConfigurator, AI-assisted model-driven engineering, and structured
      data workflows for chemistry.

      <br />

      Outside of work, I like to slow down a bit. I enjoy meditation, playing
      badminton and board games, and whenever I get the chance to travel, I
      especially like going scuba diving.

      <br />
      Want to learn more? Check out my projects and research below! 🧙
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
