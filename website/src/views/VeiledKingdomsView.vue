<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import galleryImages from 'virtual:veiled-kingdoms-gallery'

const previousTitle = document.title

onMounted(() => {
  document.body.classList.add('vk-active')
  document.title = 'Veiled Kingdoms | A board game by Felix Neubauer'

  const description =
    'Veiled Kingdoms is a fast area-control board game of hidden units, combined abilities, bluffing and predicting the next turn, designed by Felix Neubauer.'

  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    meta.dataset.veiledKingdoms = 'true'
    document.head.appendChild(meta)
  }
  meta.content = description
})

onUnmounted(() => {
  document.body.classList.remove('vk-active')
  document.title = previousTitle

  const meta = document.querySelector<HTMLMetaElement>(
    'meta[data-veiled-kingdoms="true"]',
  )
  meta?.remove()
})
</script>

<template>
  <div class="vk-page">
    <header class="vk-nav">
      <nav aria-label="Page navigation">
        <a href="#game">The game</a>
        <a href="#development">Development</a>
        <a v-if="galleryImages.length" href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <RouterLink class="back-link" to="/">logende.org ↗</RouterLink>
    </header>

    <main id="top">
      <section class="hero vk-shell">
        <div class="hero-copy">
          <h1>Veiled Kingdoms</h1>
          <p class="hero-intro">
            A fast area-control game about hidden unit values, combined
            abilities and committing to a tactic before you know exactly what
            the next turn will bring.
          </p>
        </div>

        <div class="hero-portrait">
          <figure class="portrait-frame">
            <picture>
              <source
                srcset="/veiled-kingdoms/vk_foto_1.webp"
                type="image/webp"
              />
              <img
                src="/veiled-kingdoms/vk_foto_1.png"
                alt="Felix Neubauer wearing a Venetian mask behind the Veiled Kingdoms prototype"
                width="1800"
                height="1800"
                fetchpriority="high"
              />
            </picture>
            <figcaption>
              <span>Designer &amp; developer</span>
              <strong>Felix Neubauer</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="facts" aria-label="Game facts">
        <div class="vk-shell facts-grid">
          <div>
            <span>Players</span>
            <strong>2–4</strong>
            <small>4 players: 2 teams</small>
          </div>
          <div>
            <span>Playing time</span>
            <strong>30–90 min</strong>
          </div>
          <div>
            <span>Age</span>
            <strong>12+</strong>
          </div>
          <div>
            <span>Setting</span>
            <strong>Venetian dark fantasy</strong>
          </div>
          <div>
            <span>Stage</span>
            <strong>Playtested prototype</strong>
          </div>
        </div>
      </section>

      <section id="game" class="game-section vk-shell">
        <div class="section-heading">
          <h2>A strategy game built around hidden information.</h2>
        </div>

        <div class="game-intro">
          <p>
            Veiled Kingdoms is a hidden-unit area-control game played on a
            modular hex-grid city. The value and abilities inside each unit are
            concealed from other players until combat or a special action
            reveals them. Unit tokens can be combined, creating new ability
            synergies and armies that develop differently from game to game.
            Control of citadels and sanctums shapes the board, while combat
            forces players to decide when a secret is worth revealing.
          </p>
        </div>

        <div class="pillars">
          <article>
            <h3>Hidden units and bluffing</h3>
            <p>
              Values and abilities stay concealed until combat or an action
              reveals them. A weak unit can still threaten, bait or protect a
              more valuable position.
            </p>
          </article>
          <article>
            <h3>Area control</h3>
            <p>
              Citadels and sanctums make positioning important. Capturing and
              defending the right buildings creates the route to victory.
            </p>
          </article>
          <article>
            <h3>Combined abilities</h3>
            <p>
              Train units by combining tokens. Matching types strengthen an
              ability; mixing types produces useful and sometimes unexpected
              synergies.
            </p>
          </article>
          <article>
            <h3>Prepare for next turn</h3>
            <p>
              Choose a situational Tactic one turn in advance. Reading the board
              well gives you an advantage, while a wrong prediction asks you to
              adapt.
            </p>
          </article>
        </div>

        <div class="game-feel">
          <div>
            <h2>Quick turns, different games.</h2>
          </div>
          <div class="game-feel-copy">
            <p>
              A little uncertainty in movement keeps the board from becoming
              predictable, without taking control away from the players.
            </p>
            <p>
              Prepared Tactics reward players who anticipate the next turn.
              Together with hidden strength and changing unit combinations, they
              create varied games that stay focused and move quickly.
            </p>
          </div>
        </div>
      </section>

      <section id="development" class="development-section">
        <div class="vk-shell development-grid">
          <div class="development-copy">
            <h2>A prototype in motion</h2>
            <p>
              Veiled Kingdoms has grown through repeated physical prototypes:
              revised unit figurines, a simpler Tactic system, modular boards
              and a complete rulebook. The visual language and components
              continue to evolve alongside the gameplay.
            </p>
            <p class="development-credit">
              Prototype development has been supported by Martin Neubauer, who
              contributed to the design and 3D printing of the models, and by
              friends and family whose many playtesting sessions helped refine
              the game.
            </p>
          </div>

          <figure class="development-photo">
            <picture>
              <source
                srcset="/veiled-kingdoms/vk_prototypen.webp"
                type="image/webp"
              />
              <img
                src="/veiled-kingdoms/vk_prototypen.png"
                alt="Early and later Veiled Kingdoms unit, token, tile and card prototypes arranged chronologically"
                width="2000"
                height="1500"
                loading="lazy"
              />
            </picture>
            <figcaption>
              <strong>Prototype evolution</strong>
              <span
                >Units, hidden tokens, buildings and cards across
                development</span
              >
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        v-if="galleryImages.length"
        id="gallery"
        class="gallery-section vk-shell"
      >
        <div class="gallery-heading">
          <h2>The world of Veiled Kingdoms</h2>
        </div>
        <div class="gallery-grid">
          <figure
            v-for="(image, index) in galleryImages"
            :key="image"
            class="gallery-item"
          >
            <img
              :src="image"
              :alt="`Veiled Kingdoms gallery photograph ${index + 1}`"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="vk-shell contact-inner">
          <div class="contact-heading">
            <h2>Interested in what lies behind the veil?</h2>
            <a
              class="button button-primary contact-button"
              href="https://www.linkedin.com/posts/neubauer-felix_spielessen-spiel2026-boardgames-activity-7486004316189786112-ixr4?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAADgsKZMBVVwkaXh9nGqwzV-hpCpWN9zUMaE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me on LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="contact-copy">
            <p>
              Veiled Kingdoms has been thoroughly playtested and refined as a
              complete physical prototype. I am looking for a publisher who sees
              potential in its mix of hidden information, combined unit
              abilities, prediction and spatial strategy.
            </p>
            <p>
              I am also keen to connect with producers and illustrators. The
              current 3D-printed pieces communicate the gameplay clearly;
              production versions could use Re-Wood or another wood-based
              composite, depending on the publisher’s production vision.
            </p>
            <p>
              The prototype artwork uses image generation as a visual direction
              during development. For the final game, I would like to work with
              a professional illustrator on original artwork and a cohesive
              visual identity.
            </p>
            <p>
              I will attend SPIEL Essen as a business visitor on 22 and 23
              October 2026 and would be glad to arrange a conversation and
              present the prototype.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="vk-shell footer-inner">
        <div>
          <strong>Veiled Kingdoms</strong>
          <span>A board game by Felix Neubauer</span>
        </div>
        <span>Working title · Prototype shown</span>
        <RouterLink to="/">Back to logende.org</RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(body.vk-active) {
  background: #0e0717;
}

:global(body.vk-active #app) {
  max-width: none;
  margin: 0;
  padding: 0;
}

:global(body.vk-active #app > .full-width),
:global(body.vk-active #app > .full-width > main) {
  width: 100%;
  max-width: none;
  margin-top: 0;
}

.vk-page {
  --ink: #f4ecdc;
  --ink-muted: #cfc0d8;
  --violet: #9a5bb9;
  --violet-bright: #c186df;
  --purple: #28113f;
  --purple-soft: #3b1a56;
  --night: #0e0717;
  --night-soft: #160b22;
  --gold: #d2a94f;
  --gold-bright: #f0d18a;
  --line: rgba(210, 169, 79, 0.34);
  width: 100%;
  min-height: 100vh;
  color: var(--ink);
  background:
    radial-gradient(
      circle at 78% 8%,
      rgba(111, 48, 147, 0.3),
      transparent 28rem
    ),
    var(--night);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.vk-page *,
.vk-page *::before,
.vk-page *::after {
  box-sizing: border-box;
}

.vk-shell {
  width: min(1180px, calc(100% - 48px));
  margin-inline: auto;
}

.vk-nav {
  position: absolute;
  inset: 0 0 auto;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: min(1280px, calc(100% - 48px));
  min-height: 92px;
  margin-inline: auto;
  border-bottom: 1px solid rgba(244, 236, 220, 0.16);
}

.vk-nav a {
  padding: 0;
  text-decoration: none;
}

.vk-nav a:hover {
  color: var(--gold-bright);
  background: transparent;
}

.vk-nav nav {
  display: flex;
  grid-column: 2;
  gap: 30px;
}

.vk-nav nav a,
.back-link {
  color: var(--ink-muted);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.back-link {
  grid-column: 3;
  justify-self: end;
}

.hero {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: clamp(42px, 7vw, 100px);
  align-items: center;
  min-height: 900px;
  padding-block: 150px 84px;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.eyebrow {
  margin: 0 0 22px;
  color: var(--gold);
  font-family: 'Cinzel', serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.23em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0 0 24px;
  color: var(--ink);
  font-family: 'Cinzel Decorative', 'Palatino Linotype', serif;
  font-size: clamp(3.5rem, 6.9vw, 6.9rem);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.84;
  text-shadow: 0 0 42px rgba(193, 134, 223, 0.18);
}

.hero h1 span {
  display: block;
  margin-left: 0.42em;
  color: var(--gold-bright);
  font-weight: 700;
}

.hero-lead {
  margin: 0 0 24px;
  color: var(--violet-bright);
  font-family: 'Cinzel', serif;
  font-size: clamp(1rem, 1.7vw, 1.28rem);
  letter-spacing: 0.08em;
}

.hero-intro {
  max-width: 580px;
  margin: 0;
  color: var(--ink-muted);
  font-size: 1.04rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 13px 22px;
  border-radius: 2px;
  font-family: 'Cinzel', serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-decoration: none;
  text-transform: uppercase;
}

.button:hover {
  background: inherit;
}

.button-primary {
  color: #1b0c23;
  background: linear-gradient(135deg, var(--gold-bright), var(--gold));
  box-shadow: 0 12px 34px rgba(210, 169, 79, 0.14);
}

.button-primary:hover {
  color: #1b0c23;
  background: linear-gradient(135deg, #f7dda2, #d9ad50);
  transform: translateY(-1px);
}

.button-secondary {
  color: var(--ink);
  border: 1px solid rgba(244, 236, 220, 0.3);
}

.button-secondary:hover {
  color: var(--gold-bright);
  border-color: var(--gold);
}

.spiel-note {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 42px;
  color: var(--ink-muted);
  font-size: 0.8rem;
  line-height: 1.5;
}

.spiel-date {
  display: grid;
  width: 55px;
  height: 55px;
  flex: 0 0 55px;
  place-items: center;
  color: var(--gold-bright);
  border: 1px solid var(--line);
  font-family: 'Cinzel', serif;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.15;
  text-align: center;
}

.spiel-note strong {
  display: block;
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: 0.83rem;
  letter-spacing: 0.06em;
}

.hero-portrait {
  position: relative;
  margin: 0;
}

.hero-portrait::after {
  position: absolute;
  z-index: 0;
  inset: 18% -8% -8% 20%;
  background: radial-gradient(
    circle,
    rgba(109, 39, 144, 0.24),
    transparent 70%
  );
  content: '';
  filter: blur(36px);
}

.portrait-frame {
  position: relative;
  z-index: 1;
  aspect-ratio: 0.86;
  overflow: hidden;
  background: #1a1120;
}

.portrait-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 55% 50%;
}

.portrait-frame figcaption {
  position: absolute;
  right: 30px;
  bottom: 27px;
  left: 30px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}

.portrait-frame figcaption span {
  color: white;
  padding: 8px 10px;
  background: rgba(14, 7, 23, 0.82);
  font-size: 0.68rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.portrait-frame figcaption strong {
  color: white;
  padding: 8px 10px;
  background: rgba(14, 7, 23, 0.82);
  font-family: 'Cinzel', serif;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

.facts {
  background: rgba(39, 16, 58, 0.45);
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid var(--line);
}

.facts-grid div {
  min-height: 118px;
  padding: 27px 24px;
  border-right: 1px solid var(--line);
}

.facts-grid div:last-child {
  border-right: 0;
}

.facts-grid span,
.facts-grid strong {
  display: block;
}

.facts-grid span {
  margin-bottom: 7px;
  color: var(--violet-bright);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.facts-grid strong {
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: 0.96rem;
  font-weight: 500;
}

.facts-grid small {
  display: block;
  margin-top: 5px;
  color: var(--ink-muted);
  font-size: 0.68rem;
}

.game-section {
  padding-block: 150px;
}

.section-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 62px;
}

.section-heading h2,
.development-copy h2,
.publisher-title h2,
.contact-inner h2 {
  margin: 0;
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: clamp(2.45rem, 5vw, 4.9rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.04;
}

.game-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-left: 28%;
  color: var(--ink-muted);
  font-size: 1.02rem;
  line-height: 1.85;
}

.world-story {
  max-width: 880px;
  margin: -4px 0 62px 28%;
  padding: 0 0 0 28px;
  color: var(--gold-bright);
  border-left: 1px solid var(--gold);
  font-family: 'Cinzel', serif;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  line-height: 1.65;
}

.world-story em {
  color: var(--ink);
  font-style: normal;
}

.game-intro p {
  margin: 0;
}

.drop-cap::first-letter {
  float: left;
  margin: 8px 10px 0 0;
  color: var(--gold-bright);
  font-family: 'Cinzel Decorative', serif;
  font-size: 3.6rem;
  line-height: 0.72;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(22px, 3vw, 42px);
  margin-top: 90px;
}

.pillars article {
  position: relative;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.pillar-number {
  color: rgba(207, 192, 216, 0.48);
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
}

.pillar-icon {
  margin: 17px 0 12px;
  color: var(--gold);
  font-size: 1.55rem;
  line-height: 1;
}

.pillars h3 {
  min-height: 2.7em;
  margin: 0 0 10px;
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.35;
}

.pillars p {
  margin: 0;
  color: var(--ink-muted);
  font-size: 0.86rem;
  line-height: 1.72;
}

.game-feel {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(45px, 8vw, 110px);
  margin-top: 115px;
  padding-top: 72px;
  border-top: 1px solid var(--line);
}

.game-feel h2 {
  max-width: 580px;
  margin: 0;
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.game-feel-copy {
  color: var(--ink-muted);
  font-size: 1rem;
  line-height: 1.84;
}

.game-feel-copy p {
  margin: 0 0 22px;
}

.game-feel-copy p:last-child {
  margin-bottom: 0;
}

.development-section {
  position: relative;
  padding-block: 130px;
  background: #160b20;
}

.development-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: clamp(50px, 8vw, 110px);
  align-items: center;
}

.development-copy h2 {
  margin-bottom: 28px;
}

.development-copy > p:not(.eyebrow) {
  margin: 0;
  color: var(--ink-muted);
  font-size: 1rem;
  line-height: 1.82;
}

.development-copy .development-credit {
  margin-top: 22px !important;
  color: var(--ink) !important;
  font-size: 0.9rem !important;
}

.development-photo {
  position: relative;
  margin: 0;
  overflow: hidden;
  background: #120a1b;
}

.development-photo picture,
.development-photo img {
  display: block;
  width: 100%;
}

.development-photo img {
  aspect-ratio: 4 / 3;
  height: auto;
  object-fit: cover;
}

.development-photo figcaption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  color: white;
  background: rgba(14, 7, 23, 0.82);
}

.development-photo figcaption strong {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.development-photo figcaption span {
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-align: right;
}

.gallery-section {
  padding-block: 150px;
}

.gallery-heading {
  margin-bottom: 54px;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.gallery-item {
  display: flex;
  max-width: 100%;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.gallery-item img {
  display: block;
  width: auto;
  height: auto;
  max-width: min(760px, 100%);
  max-height: 320px;
  object-fit: contain;
}

.publisher-section {
  padding-block: 100px 140px;
  background: #150a20;
}

.publisher-card {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 70px;
}

.publisher-title h2 {
  font-size: clamp(2.2rem, 4vw, 4rem);
}

.publisher-copy {
  color: var(--ink-muted);
  font-size: 0.98rem;
  line-height: 1.84;
}

.publisher-copy p {
  margin: 0 0 20px;
}

.publisher-needs {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px 34px;
  margin-top: 8px;
}

.publisher-needs span {
  position: relative;
  padding-left: 15px;
  color: var(--gold-bright);
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.publisher-needs span::before {
  position: absolute;
  top: 0.46em;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
  content: '';
}

.contact-section {
  position: relative;
  padding-block: 150px;
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(112, 48, 160, 0.22),
      transparent 55%
    ),
    #11081a;
}

.contact-inner {
  text-align: center;
}

.contact-inner h2 {
  color: var(--gold-bright);
}

.contact-inner > p:not(.eyebrow) {
  max-width: 720px;
  margin: 32px auto 36px;
  color: var(--ink-muted);
  font-size: 1rem;
  line-height: 1.85;
}

.contact-button {
  padding-inline: 28px;
}

footer {
  border-top: 1px solid rgba(244, 236, 220, 0.12);
  background: #0c0612;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 40px;
  align-items: center;
  min-height: 120px;
  color: rgba(207, 192, 216, 0.58);
  font-size: 0.72rem;
}

.footer-inner div {
  display: flex;
  flex-direction: column;
}

.footer-inner strong {
  color: var(--ink);
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-inner a {
  padding: 0;
  color: var(--gold);
  text-decoration: none;
}

.footer-inner a:hover {
  color: var(--gold-bright);
  background: transparent;
}

@media (max-width: 980px) {
  .vk-nav {
    grid-template-columns: 1fr auto;
  }

  .vk-nav nav {
    display: none;
  }

  .back-link {
    grid-column: 2;
  }

  .hero {
    grid-template-columns: 1fr 1fr;
    gap: 38px;
    min-height: 760px;
  }

  .hero h1 {
    font-size: clamp(3.2rem, 8vw, 5.6rem);
  }

  .pillars {
    grid-template-columns: repeat(2, 1fr);
  }

  .pillars article {
    min-height: 0;
  }

  .game-intro {
    margin-left: 12%;
  }

  .world-story {
    margin-left: 12%;
  }
}

@media (max-width: 720px) {
  .vk-shell {
    width: min(100% - 32px, 600px);
  }

  .vk-nav {
    width: calc(100% - 32px);
    min-height: 74px;
  }

  .back-link {
    font-size: 0.65rem;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-block: 118px 72px;
  }

  .hero-copy {
    order: 1;
  }

  .hero-portrait {
    order: 2;
    width: 100%;
    margin-top: 12px;
  }

  .hero h1 {
    font-size: clamp(3.3rem, 16vw, 5.7rem);
  }

  .facts-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .facts-grid div {
    min-height: 100px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .facts-grid div:nth-child(2n) {
    border-right: 0;
  }

  .facts-grid div:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-bottom: 0;
  }

  .game-section,
  .gallery-section,
  .contact-section {
    padding-block: 95px;
  }

  .section-heading,
  .game-intro,
  .game-feel,
  .development-grid,
  .publisher-card {
    grid-template-columns: 1fr;
  }

  .section-heading {
    gap: 28px;
  }

  .game-intro {
    gap: 24px;
    margin-left: 0;
  }

  .world-story {
    margin: 0 0 46px;
    padding-left: 18px;
  }

  .pillars {
    grid-template-columns: 1fr;
    margin-top: 60px;
  }

  .pillars article {
    min-height: 0;
  }

  .pillar-icon {
    margin: 22px 0 14px;
  }

  .pillars h3 {
    min-height: 0;
  }

  .game-feel {
    gap: 28px;
    margin-top: 72px;
    padding-top: 54px;
  }

  .development-section {
    padding-block: 90px;
  }

  .development-photo figcaption {
    position: static;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  .development-photo figcaption span {
    text-align: left;
  }

  .gallery-grid {
    gap: 12px;
  }

  .gallery-item img {
    max-width: 100%;
    max-height: 300px;
  }

  .publisher-section {
    padding-bottom: 95px;
  }

  .publisher-card {
    gap: 34px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-block: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}

/* Restrained editorial treatment for the current prototype. */
:global(body.vk-active) {
  background: #1c1720;
}

.vk-page {
  --ink: #eeeae3;
  --ink-muted: #c1b7c3;
  --violet: #896d96;
  --violet-bright: #bda3c5;
  --purple: #32263a;
  --purple-soft: #44334c;
  --night: #1c1720;
  --night-soft: #261e2b;
  --gold: #b49a62;
  --gold-bright: #d0bd91;
  --line: rgba(238, 234, 227, 0.17);
  background: var(--night);
  font-family: Arial, Helvetica, sans-serif;
}

.vk-shell {
  width: min(1120px, calc(100% - 48px));
}

.vk-nav {
  position: relative;
  width: min(1200px, calc(100% - 48px));
  min-height: 72px;
  border-color: var(--line);
}

.vk-nav nav {
  gap: 26px;
}

.vk-nav nav a,
.back-link {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.07em;
}

.hero {
  grid-template-columns: minmax(0, 0.9fr) minmax(400px, 1.1fr);
  gap: clamp(42px, 7vw, 88px);
  min-height: 680px;
  padding-block: 72px 88px;
}

.hero h1 {
  margin: 0 0 28px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.6rem, 6.6vw, 6.2rem);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.95;
  text-shadow: none;
}

.hero-intro {
  max-width: 500px;
  color: var(--ink-muted);
  font-size: clamp(1.05rem, 1.7vw, 1.26rem);
  line-height: 1.65;
}

.hero-portrait::after {
  display: none;
}

.portrait-frame {
  aspect-ratio: 1 / 0.9;
  background: #242126;
}

.portrait-frame figcaption {
  right: 18px;
  bottom: 16px;
  left: 18px;
}

.portrait-frame figcaption span,
.portrait-frame figcaption strong {
  padding: 7px 9px;
  background: rgba(24, 22, 25, 0.88);
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.04em;
}

.facts {
  background: var(--night-soft);
  border-block: 1px solid var(--line);
}

.facts-grid {
  border: 0;
}

.facts-grid div {
  min-height: 104px;
  padding: 24px 20px;
  border-color: var(--line);
}

.facts-grid span {
  color: var(--violet-bright);
  letter-spacing: 0.08em;
}

.facts-grid strong {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
}

.game-section {
  padding-block: 108px 112px;
}

.section-heading {
  display: block;
  max-width: 880px;
  margin-bottom: 48px;
}

.section-heading h2,
.game-feel h2,
.development-copy h2,
.gallery-heading h2,
.publisher-title h2,
.contact-inner h2 {
  margin: 0;
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.3rem, 4.5vw, 4.25rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.game-intro {
  display: block;
  max-width: 780px;
  margin: 0;
  font-size: 1.04rem;
  line-height: 1.75;
}

.pillars {
  grid-template-columns: repeat(2, 1fr);
  gap: 0 56px;
  margin-top: 72px;
  border-bottom: 1px solid var(--line);
}

.pillars article {
  min-height: 0;
  padding: 26px 0 30px;
  border-color: var(--line);
}

.pillars h3 {
  min-height: 0;
  margin: 0 0 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 700;
}

.pillars p {
  max-width: 470px;
  font-size: 0.92rem;
  line-height: 1.65;
}

.game-feel {
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(42px, 7vw, 88px);
  margin-top: 96px;
  padding-top: 0;
  border: 0;
}

.game-feel h2 {
  font-size: clamp(2.2rem, 3.8vw, 3.7rem);
}

.game-feel-copy {
  font-size: 1rem;
  line-height: 1.75;
}

.development-section,
.publisher-section {
  background: var(--night-soft);
}

.development-section {
  padding-block: 104px;
  border-block: 1px solid var(--line);
}

.development-grid {
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(46px, 7vw, 84px);
}

.development-copy h2 {
  margin-bottom: 24px;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
}

.development-copy > p:not(.eyebrow) {
  line-height: 1.72;
}

.development-photo,
.development-photo figcaption {
  background: #242126;
}

.development-photo figcaption strong {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.06em;
}

.gallery-section {
  padding-block: 108px;
}

.gallery-heading {
  margin-bottom: 42px;
}

.gallery-heading h2 {
  font-size: clamp(2.2rem, 4vw, 3.7rem);
}

.gallery-grid {
  gap: 12px;
  justify-content: flex-start;
}

.publisher-section {
  padding-block: 104px;
  border-block: 1px solid var(--line);
}

.publisher-card {
  gap: 60px;
}

.publisher-title h2 {
  font-size: clamp(2.2rem, 4vw, 3.7rem);
}

.publisher-copy {
  line-height: 1.75;
}

.publisher-needs {
  gap: 12px 28px;
  margin-top: 0;
}

.publisher-needs span {
  padding-left: 0;
  color: var(--ink-muted);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

.publisher-needs span::before {
  display: none;
}

.contact-section {
  padding-block: 110px;
  background: var(--night);
}

.contact-inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(46px, 7vw, 84px);
  align-items: start;
  text-align: left;
}

.contact-inner h2 {
  color: var(--ink);
  font-size: clamp(2.2rem, 4vw, 3.7rem);
}

.contact-button {
  margin-top: 30px;
}

.contact-copy {
  color: var(--ink-muted);
  font-size: 0.98rem;
  line-height: 1.75;
}

.contact-copy p {
  margin: 0 0 20px;
}

.contact-copy p:last-child {
  margin-bottom: 0;
}

.button {
  min-height: 48px;
  border-radius: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.07em;
}

.button-primary,
.button-primary:hover {
  color: var(--ink);
  background: var(--purple-soft);
  box-shadow: none;
}

.button-primary:hover {
  background: #49384e;
}

footer {
  background: #141215;
  border-color: var(--line);
}

.footer-inner strong {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.06em;
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 0.9fr 1.1fr;
    min-height: 600px;
  }

  .game-intro {
    margin: 0;
  }
}

@media (max-width: 720px) {
  .vk-shell {
    width: min(100% - 32px, 600px);
  }

  .vk-nav {
    width: calc(100% - 32px);
  }

  .hero {
    grid-template-columns: 1fr;
    padding-block: 62px 72px;
  }

  .hero h1 {
    font-size: clamp(3.4rem, 17vw, 5.5rem);
  }

  .hero-portrait {
    margin-top: 8px;
  }

  .portrait-frame {
    aspect-ratio: 1 / 1;
  }

  .game-section,
  .gallery-section,
  .contact-section {
    padding-block: 78px;
  }

  .game-intro,
  .game-feel,
  .development-grid,
  .publisher-card,
  .contact-inner {
    grid-template-columns: 1fr;
  }

  .contact-inner {
    gap: 34px;
  }

  .pillars {
    grid-template-columns: 1fr;
    margin-top: 52px;
  }

  .game-feel {
    gap: 24px;
    margin-top: 72px;
  }

  .development-section,
  .publisher-section {
    padding-block: 78px;
  }

  .gallery-grid {
    justify-content: center;
  }
}
</style>
