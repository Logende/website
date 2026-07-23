import { d as defineComponent, o as onMounted, a as onUnmounted, c as createElementBlock, b as createBaseVNode, u as unref, e as createCommentVNode, f as createVNode, w as withCtx, g as createTextVNode, h as createStaticVNode, F as Fragment, r as renderList, i as openBlock, R as RouterLink, j as _export_sfc } from "./index-CgHhq6Q8.js";
const _imports_0 = "/veiled-kingdoms/vk_foto_1.webp";
const _imports_1 = "/veiled-kingdoms/vk_foto_1.png";
const _imports_2 = "/veiled-kingdoms/vk_prototypen.webp";
const _imports_3 = "/veiled-kingdoms/vk_prototypen.png";
const galleryImages = ["/veiled-kingdoms/gallery/7220EC0B-5333-43C4-AF30-DCE43CB939A6%202.webp", "/veiled-kingdoms/gallery/IMG_0818.webp", "/veiled-kingdoms/gallery/IMG_0820.webp", "/veiled-kingdoms/gallery/IMG_0896.webp", "/veiled-kingdoms/gallery/IMG_1448.webp"];
const _hoisted_1 = _imports_0;
const _hoisted_2 = _imports_2;
const _hoisted_3 = { class: "vk-page" };
const _hoisted_4 = { class: "vk-nav" };
const _hoisted_5 = { "aria-label": "Page navigation" };
const _hoisted_6 = {
  key: 0,
  href: "#gallery"
};
const _hoisted_7 = { id: "top" };
const _hoisted_8 = {
  key: 0,
  id: "gallery",
  class: "gallery-section vk-shell"
};
const _hoisted_9 = { class: "gallery-grid" };
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = { class: "vk-shell footer-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VeiledKingdomsView",
  setup(__props) {
    const previousTitle = document.title;
    onMounted(() => {
      document.body.classList.add("vk-active");
      document.title = "Veiled Kingdoms | A board game by Felix Neubauer";
      const description = "Veiled Kingdoms is a Venetian masquerade dark fantasy board game of hidden units, bluffing, deck-building and building control, designed by Felix Neubauer.";
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        meta.dataset.veiledKingdoms = "true";
        document.head.appendChild(meta);
      }
      meta.content = description;
    });
    onUnmounted(() => {
      document.body.classList.remove("vk-active");
      document.title = previousTitle;
      const meta = document.querySelector(
        'meta[data-veiled-kingdoms="true"]'
      );
      meta == null ? void 0 : meta.remove();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_3, [
        createBaseVNode("header", _hoisted_4, [
          createBaseVNode("nav", _hoisted_5, [
            _cache[0] || (_cache[0] = createBaseVNode("a", { href: "#game" }, "The game", -1)),
            _cache[1] || (_cache[1] = createBaseVNode("a", { href: "#development" }, "Development", -1)),
            unref(galleryImages).length ? (openBlock(), createElementBlock("a", _hoisted_6, "Gallery")) : createCommentVNode("", true),
            _cache[2] || (_cache[2] = createBaseVNode("a", { href: "#contact" }, "Contact", -1))
          ]),
          createVNode(unref(RouterLink), {
            class: "back-link",
            to: "/"
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("logende.org ↗")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("main", _hoisted_7, [
          _cache[5] || (_cache[5] = createBaseVNode("section", { class: "hero vk-shell" }, [
            createBaseVNode("div", { class: "hero-copy" }, [
              createBaseVNode("p", { class: "eyebrow" }, "A strategy board game by Felix Neubauer"),
              createBaseVNode("h1", null, [
                createTextVNode(" Veiled "),
                createBaseVNode("span", null, "Kingdoms")
              ]),
              createBaseVNode("p", { class: "hero-lead" }, " Hidden forces. Deadly games. Absolute power. "),
              createBaseVNode("p", { class: "hero-intro" }, " I’m Felix, a doctoral researcher and software engineer based in Germany. Beyond my research, I have been developing a dark fantasy strategy game where every mask conceals a threat, and every move can be a bluff. "),
              createBaseVNode("div", { class: "hero-actions" }, [
                createBaseVNode("a", {
                  class: "button button-primary",
                  href: "#game"
                }, "Discover the game"),
                createBaseVNode("a", {
                  class: "button button-secondary",
                  href: "#contact"
                }, "Meet at SPIEL")
              ]),
              createBaseVNode("div", { class: "spiel-note" }, [
                createBaseVNode("span", { class: "spiel-date" }, [
                  createTextVNode("22–23"),
                  createBaseVNode("br"),
                  createTextVNode("OCT")
                ]),
                createBaseVNode("span", null, [
                  createBaseVNode("strong", null, "SPIEL Essen 2026"),
                  createTextVNode(" Attending as a business visitor ")
                ])
              ])
            ]),
            createBaseVNode("div", { class: "hero-portrait" }, [
              createBaseVNode("figure", { class: "portrait-frame" }, [
                createBaseVNode("picture", null, [
                  createBaseVNode("source", {
                    srcset: _hoisted_1,
                    type: "image/webp"
                  }),
                  createBaseVNode("img", {
                    src: _imports_1,
                    alt: "Felix Neubauer wearing a Venetian mask behind the Veiled Kingdoms prototype",
                    width: "1800",
                    height: "1800",
                    fetchpriority: "high"
                  })
                ]),
                createBaseVNode("figcaption", null, [
                  createBaseVNode("span", null, "Designer & developer"),
                  createBaseVNode("strong", null, "Felix Neubauer")
                ])
              ])
            ])
          ], -1)),
          _cache[6] || (_cache[6] = createStaticVNode('<section class="facts" aria-label="Game facts" data-v-f6208c32><div class="vk-shell facts-grid" data-v-f6208c32><div data-v-f6208c32><span data-v-f6208c32>Players</span><strong data-v-f6208c32>2–4</strong><small data-v-f6208c32>4 players: 2 teams</small></div><div data-v-f6208c32><span data-v-f6208c32>Playing time</span><strong data-v-f6208c32>45–90 min</strong></div><div data-v-f6208c32><span data-v-f6208c32>Age</span><strong data-v-f6208c32>12+</strong></div><div data-v-f6208c32><span data-v-f6208c32>Setting</span><strong data-v-f6208c32>Venetian dark fantasy</strong></div><div data-v-f6208c32><span data-v-f6208c32>Stage</span><strong data-v-f6208c32>Playtested prototype</strong></div></div></section><section id="game" class="game-section vk-shell" data-v-f6208c32><div class="section-heading" data-v-f6208c32><p class="eyebrow" data-v-f6208c32>Behind every mask</p><h2 data-v-f6208c32>Control the city.<br data-v-f6208c32>Conceal your strength.</h2></div><blockquote class="world-story" data-v-f6208c32> Beneath the fading splendour of <em data-v-f6208c32>La Serenissima</em>, Venice’s masked patrician Houses, the <em data-v-f6208c32>casate</em>, turn on one another as the Doge’s grip weakens. Each player leads one House, using trickery, deceit and open combat to seize the citadels and sanctums of the lagoon and establish dominance across its <em data-v-f6208c32>sestieri</em>. </blockquote><div class="game-intro" data-v-f6208c32><p class="drop-cap" data-v-f6208c32> Players command units with concealed values across a modular hex-grid city, never knowing exactly how powerful an opponent is until a confrontation forces the truth into the open. </p><p data-v-f6208c32> Each turn, cards move units, disrupt rivals and shape combat. Gold from controlled citadels expands your deck, while a separate once-per-turn choice lets you recruit one unit or train one already in play. Victory comes from holding enough citadels and sanctums for a full round, or eliminating the opposition before they can recover. </p></div><div class="pillars" data-v-f6208c32><article data-v-f6208c32><span class="pillar-number" data-v-f6208c32>01</span><div class="pillar-icon" aria-hidden="true" data-v-f6208c32>◈</div><h3 data-v-f6208c32>Hidden units &amp; bluffing</h3><p data-v-f6208c32> Unit values remain concealed behind masks. Attacks become a read on your opponent: expose a royal powerhouse, threaten with a weaker unit, or bait a costly defence. </p></article><article data-v-f6208c32><span class="pillar-number" data-v-f6208c32>02</span><div class="pillar-icon" aria-hidden="true" data-v-f6208c32>♜</div><h3 data-v-f6208c32>Tactical building control</h3><p data-v-f6208c32> Citadels fuel your economy, Sanctums expand your options, and controlling enough buildings secures victory. Terrain bonuses make every position matter. </p></article><article data-v-f6208c32><span class="pillar-number" data-v-f6208c32>03</span><div class="pillar-icon" aria-hidden="true" data-v-f6208c32>✦</div><h3 data-v-f6208c32>Deck-building momentum</h3><p data-v-f6208c32> A shared market lets every faction sharpen its own strategy with movement, economy and tactical cards as the contest escalates. </p></article><article data-v-f6208c32><span class="pillar-number" data-v-f6208c32>04</span><div class="pillar-icon" aria-hidden="true" data-v-f6208c32>◇</div><h3 data-v-f6208c32>Units that evolve</h3><p data-v-f6208c32> Train a unit with a new token to combine abilities, or match its type to unlock an elite version. Each army develops differently over the course of the game. </p></article></div><div class="game-feel" data-v-f6208c32><div data-v-f6208c32><p class="eyebrow" data-v-f6208c32>The balance can turn quickly</p><h2 data-v-f6208c32>Every move can reveal a new path to victory.</h2></div><div class="game-feel-copy" data-v-f6208c32><p data-v-f6208c32> A concealed unit, the right combination of abilities and a well-timed card can transform a difficult position into a breakthrough. Some effects reward a successful attack with more cards or movement, allowing actions to flow into powerful sequences. Even late in the game, a clever plan can bring victory within reach in one or two turns. </p><p data-v-f6208c32> This creates a lively back and forth where players bluff, adapt and discover new synergies from game to game. Players leave the table comparing bluffs and combinations, already planning what they want to try next. Four-player games are played as two teams, adding coordination to the hidden information. For groups seeking still more variety, optional Twist cards change one rule for everyone and reshape the strategy of an entire game. </p></div></div></section><section id="development" class="development-section" data-v-f6208c32><div class="vk-shell development-grid" data-v-f6208c32><div class="development-copy" data-v-f6208c32><p class="eyebrow" data-v-f6208c32>From sketch to table</p><h2 data-v-f6208c32>A prototype in motion</h2><p data-v-f6208c32> Veiled Kingdoms has grown through repeated physical prototypes: revised unit figurines, iterated card systems, modular boards and a complete rulebook. The visual language and components continue to evolve alongside the gameplay. </p><p class="development-credit" data-v-f6208c32> Prototype development has been supported by Martin Neubauer, who contributed to the design and 3D printing of the models, and by friends and family whose many playtesting sessions helped refine the game. </p></div><figure class="development-photo" data-v-f6208c32><picture data-v-f6208c32><source srcset="' + _hoisted_2 + '" type="image/webp" data-v-f6208c32><img src="' + _imports_3 + '" alt="Early and later Veiled Kingdoms unit, token, tile and card prototypes arranged chronologically" width="2000" height="1500" loading="lazy" data-v-f6208c32></picture><figcaption data-v-f6208c32><strong data-v-f6208c32>Prototype evolution</strong><span data-v-f6208c32>Units, hidden tokens, buildings and cards across development</span></figcaption></figure></div></section>', 3)),
          unref(galleryImages).length ? (openBlock(), createElementBlock("section", _hoisted_8, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "gallery-heading" }, [
              createBaseVNode("p", { class: "eyebrow" }, "On the table"),
              createBaseVNode("h2", null, "The world of Veiled Kingdoms")
            ], -1)),
            createBaseVNode("div", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(galleryImages), (image, index) => {
                return openBlock(), createElementBlock("figure", {
                  key: image,
                  class: "gallery-item"
                }, [
                  createBaseVNode("img", {
                    src: image,
                    alt: `Veiled Kingdoms gallery photograph ${index + 1}`,
                    loading: "lazy"
                  }, null, 8, _hoisted_10)
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          _cache[7] || (_cache[7] = createStaticVNode('<section class="publisher-section" data-v-f6208c32><div class="vk-shell" data-v-f6208c32><div class="publisher-card" data-v-f6208c32><div class="publisher-title" data-v-f6208c32><p class="eyebrow" data-v-f6208c32>The next chapter</p><h2 data-v-f6208c32>Seeking the right partners</h2></div><div class="publisher-copy" data-v-f6208c32><p data-v-f6208c32> The game has been thoroughly playtested and refined as a complete physical prototype. I am now looking for a publisher who sees the potential in its mix of hidden information, evolving units and spatial strategy. </p><p data-v-f6208c32> I am also keen to connect with producers and illustrators. The current 3D-printed pieces communicate the gameplay clearly; production versions could potentially use Re-Wood or another wood-based composite, depending on the publisher’s production vision. </p><p data-v-f6208c32> The prototype artwork was created with the assistance of image generation models and serves as a visual direction during development. For the final product, I would like to collaborate with a professional illustrator to create original artwork and a cohesive visual identity. </p></div><div class="publisher-needs" aria-label="Partnerships sought" data-v-f6208c32><span data-v-f6208c32>Publishing</span><span data-v-f6208c32>Production</span><span data-v-f6208c32>Illustration</span></div></div></div></section><section id="contact" class="contact-section" data-v-f6208c32><div class="vk-shell contact-inner" data-v-f6208c32><p class="eyebrow" data-v-f6208c32>Let’s meet in Essen</p><h2 data-v-f6208c32>Interested in what lies<br data-v-f6208c32>behind the veil?</h2><p data-v-f6208c32> I will attend SPIEL Essen as a business visitor on 22 and 23 October 2026. If you are a publisher, producer, illustrator, or know someone who should see the game, I would be glad to arrange a conversation and present the prototype. </p><a class="button button-primary contact-button" href="https://www.linkedin.com/posts/neubauer-felix_spielessen-spiel2026-boardgames-activity-7486004316189786112-ixr4?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAADgsKZMBVVwkaXh9nGqwzV-hpCpWN9zUMaE" target="_blank" rel="noopener noreferrer" data-v-f6208c32> Connect with me on LinkedIn <span aria-hidden="true" data-v-f6208c32>↗</span></a></div></section>', 2))
        ]),
        createBaseVNode("footer", null, [
          createBaseVNode("div", _hoisted_11, [
            _cache[9] || (_cache[9] = createBaseVNode("div", null, [
              createBaseVNode("strong", null, "Veiled Kingdoms"),
              createBaseVNode("span", null, "A board game by Felix Neubauer")
            ], -1)),
            _cache[10] || (_cache[10] = createBaseVNode("span", null, "Working title · Prototype shown", -1)),
            createVNode(unref(RouterLink), { to: "/" }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode("Back to logende.org")
              ])),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const VeiledKingdomsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6208c32"]]);
export {
  VeiledKingdomsView as default
};
