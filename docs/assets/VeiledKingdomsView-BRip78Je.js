import { d as defineComponent, o as onMounted, a as onUnmounted, c as createElementBlock, b as createBaseVNode, u as unref, e as createCommentVNode, f as createVNode, w as withCtx, g as createStaticVNode, F as Fragment, r as renderList, h as openBlock, i as createTextVNode, R as RouterLink, j as _export_sfc } from "./index-_MNEV4bE.js";
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
      const description = "Veiled Kingdoms is a fast area-control board game of hidden units, combined abilities, bluffing and predicting the next turn, designed by Felix Neubauer.";
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
              createBaseVNode("h1", null, "Veiled Kingdoms"),
              createBaseVNode("p", { class: "hero-intro" }, " A fast area-control game about hidden unit values, combined abilities and committing to a tactic before you know exactly what the next turn will bring. ")
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
          _cache[6] || (_cache[6] = createStaticVNode('<section class="facts" aria-label="Game facts" data-v-6f4350b4><div class="vk-shell facts-grid" data-v-6f4350b4><div data-v-6f4350b4><span data-v-6f4350b4>Players</span><strong data-v-6f4350b4>2–4</strong><small data-v-6f4350b4>4 players: 2 teams</small></div><div data-v-6f4350b4><span data-v-6f4350b4>Playing time</span><strong data-v-6f4350b4>30–90 min</strong></div><div data-v-6f4350b4><span data-v-6f4350b4>Age</span><strong data-v-6f4350b4>12+</strong></div><div data-v-6f4350b4><span data-v-6f4350b4>Setting</span><strong data-v-6f4350b4>Venetian dark fantasy</strong></div><div data-v-6f4350b4><span data-v-6f4350b4>Stage</span><strong data-v-6f4350b4>Playtested prototype</strong></div></div></section><section id="game" class="game-section vk-shell" data-v-6f4350b4><div class="section-heading" data-v-6f4350b4><h2 data-v-6f4350b4>A strategy game built around hidden information.</h2></div><div class="game-intro" data-v-6f4350b4><p data-v-6f4350b4> Veiled Kingdoms is a hidden-unit area-control game played on a modular hex-grid city. The value and abilities inside each unit are concealed from other players until combat or a special action reveals them. Unit tokens can be combined, creating new ability synergies and armies that develop differently from game to game. Control of citadels and sanctums shapes the board, while combat forces players to decide when a secret is worth revealing. </p></div><div class="pillars" data-v-6f4350b4><article data-v-6f4350b4><h3 data-v-6f4350b4>Hidden units and bluffing</h3><p data-v-6f4350b4> Values and abilities stay concealed until combat or an action reveals them. A weak unit can still threaten, bait or protect a more valuable position. </p></article><article data-v-6f4350b4><h3 data-v-6f4350b4>Area control</h3><p data-v-6f4350b4> Citadels and sanctums make positioning important. Capturing and defending the right buildings creates the route to victory. </p></article><article data-v-6f4350b4><h3 data-v-6f4350b4>Combined abilities</h3><p data-v-6f4350b4> Train units by combining tokens. Matching types strengthen an ability; mixing types produces useful and sometimes unexpected synergies. </p></article><article data-v-6f4350b4><h3 data-v-6f4350b4>Prepare for next turn</h3><p data-v-6f4350b4> Choose a situational Tactic one turn in advance. Reading the board well gives you an advantage, while a wrong prediction asks you to adapt. </p></article></div><div class="game-feel" data-v-6f4350b4><div data-v-6f4350b4><h2 data-v-6f4350b4>Quick turns, different games.</h2></div><div class="game-feel-copy" data-v-6f4350b4><p data-v-6f4350b4> A little uncertainty in movement keeps the board from becoming predictable, without taking control away from the players. </p><p data-v-6f4350b4> Prepared Tactics reward players who anticipate the next turn. Together with hidden strength and changing unit combinations, they create varied games that stay focused and move quickly. </p></div></div></section><section id="development" class="development-section" data-v-6f4350b4><div class="vk-shell development-grid" data-v-6f4350b4><div class="development-copy" data-v-6f4350b4><h2 data-v-6f4350b4>A prototype in motion</h2><p data-v-6f4350b4> Veiled Kingdoms has grown through repeated physical prototypes: revised unit figurines, a simpler Tactic system, modular boards and a complete rulebook. The visual language and components continue to evolve alongside the gameplay. </p><p class="development-credit" data-v-6f4350b4> Prototype development has been supported by Martin Neubauer, who contributed to the design and 3D printing of the models, and by friends and family whose many playtesting sessions helped refine the game. </p></div><figure class="development-photo" data-v-6f4350b4><picture data-v-6f4350b4><source srcset="' + _hoisted_2 + '" type="image/webp" data-v-6f4350b4><img src="' + _imports_3 + '" alt="Early and later Veiled Kingdoms unit, token, tile and card prototypes arranged chronologically" width="2000" height="1500" loading="lazy" data-v-6f4350b4></picture><figcaption data-v-6f4350b4><strong data-v-6f4350b4>Prototype evolution</strong><span data-v-6f4350b4>Units, hidden tokens, buildings and cards across development</span></figcaption></figure></div></section>', 3)),
          unref(galleryImages).length ? (openBlock(), createElementBlock("section", _hoisted_8, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "gallery-heading" }, [
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
          _cache[7] || (_cache[7] = createStaticVNode('<section id="contact" class="contact-section" data-v-6f4350b4><div class="vk-shell contact-inner" data-v-6f4350b4><div class="contact-heading" data-v-6f4350b4><h2 data-v-6f4350b4>Interested in what lies behind the veil?</h2><a class="button button-primary contact-button" href="https://www.linkedin.com/posts/neubauer-felix_spielessen-spiel2026-boardgames-activity-7486004316189786112-ixr4?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAADgsKZMBVVwkaXh9nGqwzV-hpCpWN9zUMaE" target="_blank" rel="noopener noreferrer" data-v-6f4350b4> Connect with me on LinkedIn <span aria-hidden="true" data-v-6f4350b4>↗</span></a></div><div class="contact-copy" data-v-6f4350b4><p data-v-6f4350b4> Veiled Kingdoms has been thoroughly playtested and refined as a complete physical prototype. I am looking for a publisher who sees potential in its mix of hidden information, combined unit abilities, prediction and spatial strategy. </p><p data-v-6f4350b4> I am also keen to connect with producers and illustrators. The current 3D-printed pieces communicate the gameplay clearly; production versions could use Re-Wood or another wood-based composite, depending on the publisher’s production vision. </p><p data-v-6f4350b4> The prototype artwork uses image generation as a visual direction during development. For the final game, I would like to work with a professional illustrator on original artwork and a cohesive visual identity. </p><p data-v-6f4350b4> I will attend SPIEL Essen as a business visitor on 22 and 23 October 2026 and would be glad to arrange a conversation and present the prototype. </p></div></div></section>', 1))
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
const VeiledKingdomsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f4350b4"]]);
export {
  VeiledKingdomsView as default
};
