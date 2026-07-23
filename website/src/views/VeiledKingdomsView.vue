<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import galleryImages from 'virtual:veiled-kingdoms-gallery'

const previousTitle = document.title

onMounted(() => {
  document.body.classList.add('vk-active')
  document.title = 'Veiled Kingdoms | A board game by Felix Neubauer'

  const description =
    'Veiled Kingdoms is a Venetian masquerade dark fantasy board game of hidden units, bluffing, deck-building and building control, designed by Felix Neubauer.'

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
          <p class="eyebrow">A strategy board game by Felix Neubauer</p>
          <h1>
            Veiled
            <span>Kingdoms</span>
          </h1>
          <p class="hero-lead">
            Hidden forces. Deadly games. Absolute power.
          </p>
          <p class="hero-intro">
            I’m Felix, a doctoral researcher and software engineer based in
            Germany. Beyond my research, I have been developing a dark fantasy
            strategy game where every mask conceals a threat, and every move can
            be a bluff.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#game">Discover the game</a>
            <a class="button button-secondary" href="#contact">Meet at SPIEL</a>
          </div>

          <div class="spiel-note">
            <span class="spiel-date">22–23<br />OCT</span>
            <span>
              <strong>SPIEL Essen 2026</strong>
              Attending as a business visitor
            </span>
          </div>
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
            <strong>45–90 min</strong>
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
          <p class="eyebrow">Behind every mask</p>
          <h2>Control the city.<br />Conceal your strength.</h2>
        </div>

        <blockquote class="world-story">
          Beneath the fading splendour of <em>La Serenissima</em>, Venice’s
          masked patrician Houses, the <em>casate</em>, turn on one another as the
          Doge’s grip weakens. Each player leads one House, using trickery,
          deceit and open combat to seize the citadels and sanctums of the
          lagoon and establish dominance across its <em>sestieri</em>.
        </blockquote>

        <div class="game-intro">
          <p class="drop-cap">
            Players command units with concealed values across a modular
            hex-grid city, never knowing exactly how powerful an opponent is
            until a confrontation forces the truth into the open.
          </p>
          <p>
            Each turn, cards move units, disrupt rivals and shape combat. Gold
            from controlled citadels expands your deck, while a separate
            once-per-turn choice lets you recruit one unit or train one already
            in play. Victory comes from holding enough citadels and sanctums for
            a full round, or eliminating the opposition before they can recover.
          </p>
        </div>

        <div class="pillars">
          <article>
            <span class="pillar-number">01</span>
            <div class="pillar-icon" aria-hidden="true">◈</div>
            <h3>Hidden units &amp; bluffing</h3>
            <p>
              Unit values remain concealed behind masks. Attacks become a read
              on your opponent: expose a royal powerhouse, threaten with a
              weaker unit, or bait a costly defence.
            </p>
          </article>
          <article>
            <span class="pillar-number">02</span>
            <div class="pillar-icon" aria-hidden="true">♜</div>
            <h3>Tactical building control</h3>
            <p>
              Citadels fuel your economy, Sanctums expand your options, and
              controlling enough buildings secures victory. Terrain bonuses
              make every position matter.
            </p>
          </article>
          <article>
            <span class="pillar-number">03</span>
            <div class="pillar-icon" aria-hidden="true">✦</div>
            <h3>Deck-building momentum</h3>
            <p>
              A shared market lets every faction sharpen its own strategy with
              movement, economy and tactical cards as the contest escalates.
            </p>
          </article>
          <article>
            <span class="pillar-number">04</span>
            <div class="pillar-icon" aria-hidden="true">◇</div>
            <h3>Units that evolve</h3>
            <p>
              Train a unit with a new token to combine abilities, or match its
              type to unlock an elite version. Each army develops differently
              over the course of the game.
            </p>
          </article>
        </div>

        <div class="game-feel">
          <div>
            <p class="eyebrow">The balance can turn quickly</p>
            <h2>Every move can reveal a new path to victory.</h2>
          </div>
          <div class="game-feel-copy">
            <p>
              A concealed unit, the right combination of abilities and a
              well-timed card can transform a difficult position into a
              breakthrough. Some effects reward a successful attack with more
              cards or movement, allowing actions to flow into powerful
              sequences. Even late in the game, a clever plan can bring victory
              within reach in one or two turns.
            </p>
            <p>
              This creates a lively back and forth where players bluff, adapt
              and discover new synergies from game to game. Players leave the
              table comparing bluffs and combinations, already planning what
              they want to try next. Four-player games are played as two teams,
              adding coordination to the hidden information. For groups seeking
              still more variety, optional Twist cards change one rule for
              everyone and reshape the strategy of an entire game.
            </p>
          </div>
        </div>
      </section>

      <section id="development" class="development-section">
        <div class="vk-shell development-grid">
          <div class="development-copy">
            <p class="eyebrow">From sketch to table</p>
            <h2>A prototype in motion</h2>
            <p>
              Veiled Kingdoms has grown through repeated physical prototypes:
              revised unit figurines, iterated card systems, modular boards and
              a complete rulebook. The visual language and components continue
              to evolve alongside the gameplay.
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
              <span>Units, hidden tokens, buildings and cards across development</span>
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
          <p class="eyebrow">On the table</p>
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

      <section class="publisher-section">
        <div class="vk-shell">
          <div class="publisher-card">
            <div class="publisher-title">
              <p class="eyebrow">The next chapter</p>
              <h2>Seeking the right partners</h2>
            </div>

            <div class="publisher-copy">
              <p>
                The game has been thoroughly playtested and refined as a
                complete physical prototype. I am now looking for a publisher
                who sees the potential in its mix of hidden information,
                evolving units and spatial strategy.
              </p>
              <p>
                I am also keen to connect with producers and illustrators. The
                current 3D-printed pieces communicate the gameplay clearly;
                production versions could potentially use Re-Wood or another
                wood-based composite, depending on the publisher’s production
                vision.
              </p>
              <p>
                The prototype artwork was created with the assistance of image
                generation models and serves as a visual direction during
                development. For the final product, I would like to collaborate
                with a professional illustrator to create original artwork and
                a cohesive visual identity.
              </p>
            </div>

            <div class="publisher-needs" aria-label="Partnerships sought">
              <span>Publishing</span>
              <span>Production</span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="vk-shell contact-inner">
          <p class="eyebrow">Let’s meet in Essen</p>
          <h2>Interested in what lies<br />behind the veil?</h2>
          <p>
            I will attend SPIEL Essen as a business visitor on 22 and 23 October
            2026. If you are a publisher, producer, illustrator, or know someone
            who should see the game, I would be glad to arrange a conversation
            and present the prototype.
          </p>
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
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

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
    radial-gradient(circle at 78% 8%, rgba(111, 48, 147, 0.3), transparent 28rem),
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
  background: radial-gradient(circle, rgba(109, 39, 144, 0.24), transparent 70%);
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
    radial-gradient(circle at 50% 0%, rgba(112, 48, 160, 0.22), transparent 55%),
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
</style>
