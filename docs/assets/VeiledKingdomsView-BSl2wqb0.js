import { d as defineComponent, o as onMounted, a as onUnmounted, c as createElementBlock, b as createBaseVNode, u as unref, e as createCommentVNode, f as createVNode, w as withCtx, g as createStaticVNode, F as Fragment, r as renderList, h as openBlock, i as createTextVNode, R as RouterLink, j as _export_sfc } from "./index-BAzH_I3M.js";
const _imports_0 = "/veiled-kingdoms/vk_foto_1.webp";
const _imports_1 = "/veiled-kingdoms/vk_foto_1.png";
const _imports_2 = "/veiled-kingdoms/vk_prototypen.webp";
const _imports_3 = "/veiled-kingdoms/vk_prototypen.png";
const galleryImages = ["/veiled-kingdoms/gallery/vk_foto_2.png", "/veiled-kingdoms/gallery/vk_foto_3.png"];
const oldGalleryImages = ["/veiled-kingdoms/gallery_old/7220EC0B-5333-43C4-AF30-DCE43CB939A6%202.webp", "/veiled-kingdoms/gallery_old/IMG_0818.webp", "/veiled-kingdoms/gallery_old/IMG_0820.webp", "/veiled-kingdoms/gallery_old/IMG_0896.webp", "/veiled-kingdoms/gallery_old/IMG_1448.webp"];
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
const _hoisted_9 = {
  key: 0,
  class: "gallery-grid"
};
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = {
  key: 1,
  class: "gallery-old-label"
};
const _hoisted_12 = {
  key: 2,
  class: "gallery-grid"
};
const _hoisted_13 = ["src", "alt"];
const _hoisted_14 = { class: "vk-shell footer-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VeiledKingdomsView",
  setup(__props) {
    const previousTitle = document.title;
    onMounted(() => {
      document.body.classList.add("vk-active");
      document.title = "Veiled Kingdoms | A board game by Felix Neubauer";
      const description = "Veiled Kingdoms is an accessible tactical area-control game for 2–4 players. Build units with hidden values and abilities, read your opponents, and plan secret Tactics one turn ahead.";
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
            unref(galleryImages).length || unref(oldGalleryImages).length ? (openBlock(), createElementBlock("a", _hoisted_6, "Gallery")) : createCommentVNode("", true),
            _cache[2] || (_cache[2] = createBaseVNode("a", { href: "#masquerade" }, "Alternative theme", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("a", { href: "#contact" }, "Contact", -1))
          ]),
          createVNode(unref(RouterLink), {
            class: "back-link",
            to: "/"
          }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("logende.org ↗")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("main", _hoisted_7, [
          _cache[6] || (_cache[6] = createBaseVNode("section", { class: "hero vk-shell" }, [
            createBaseVNode("div", { class: "hero-copy" }, [
              createBaseVNode("h1", null, "Veiled Kingdoms"),
              createBaseVNode("p", { class: "hero-intro" }, " A tactical area-control game where you build units with hidden strengths and abilities. Read your opponents’ moves, keep them guessing about yours, and secretly plan a Tactic for your next turn. ")
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
                  createBaseVNode("span", null, "Spieleautor"),
                  createBaseVNode("strong", null, "Felix Neubauer")
                ])
              ])
            ])
          ], -1)),
          _cache[7] || (_cache[7] = createStaticVNode('<section class="facts" aria-label="Game facts" data-v-6047e5bb><div class="vk-shell facts-grid" data-v-6047e5bb><div data-v-6047e5bb><span data-v-6047e5bb>Players</span><strong data-v-6047e5bb>2–4</strong><small data-v-6047e5bb>4 players: 2 teams</small></div><div data-v-6047e5bb><span data-v-6047e5bb>Playing time</span><strong data-v-6047e5bb>20–60 min</strong></div><div data-v-6047e5bb><span data-v-6047e5bb>Age</span><strong data-v-6047e5bb>10+</strong></div><div data-v-6047e5bb><span data-v-6047e5bb>Rules explanation</span><strong data-v-6047e5bb>~5–10 min</strong></div><div data-v-6047e5bb><span data-v-6047e5bb>Stage</span><strong data-v-6047e5bb>Playtested prototype</strong></div></div></section><section id="game" class="game-section vk-shell" data-v-6047e5bb><div class="section-heading" data-v-6047e5bb><h2 data-v-6047e5bb>A strategy game built around hidden information, dedudction and bluffing.</h2></div><div class="game-intro" data-v-6047e5bb><p data-v-6047e5bb> Veiled Kingdoms is a hidden-unit area-control game played on a modular hex-grid city. The value and abilities inside each unit are concealed from other players until combat or a special action reveals them. Unit tokens can be combined, creating new ability synergies and armies that develop differently from game to game. Control of citadels and sanctums shapes the board, while combat forces players to decide when a secret is worth revealing. </p></div><div class="pillars" data-v-6047e5bb><article data-v-6047e5bb><h3 data-v-6047e5bb>Configure hidden units</h3><p data-v-6047e5bb> Combine value and ability tokens to shape each unit. Matching types strengthen an ability; mixing types creates new synergies. How you distribute your best tokens is your choice. </p></article><article data-v-6047e5bb><h3 data-v-6047e5bb>Bluffing and deduction</h3><p data-v-6047e5bb> Watch how opposing units move and act for clues about what they hide. Your own movements can give away a strong unit or make a weak one look dangerous. </p></article><article data-v-6047e5bb><h3 data-v-6047e5bb>Area control</h3><p data-v-6047e5bb> Citadels and sanctums make positioning important. Capturing and defending the right buildings creates the route to victory. </p></article><article data-v-6047e5bb><h3 data-v-6047e5bb>Plan a secret Tactic</h3><p data-v-6047e5bb> At the end of each turn, choose a Tactic in secret for your next turn. Its effect is strongest when you correctly anticipate the next turn (e.g., a Tactic which rewards destroying an opponent unit benefits, when in the next turn you manage to win a combat). </p></article></div></section><section id="development" class="development-section" data-v-6047e5bb><div class="vk-shell development-grid" data-v-6047e5bb><div class="development-copy" data-v-6047e5bb><h2 data-v-6047e5bb>A prototype in motion</h2><p data-v-6047e5bb> Veiled Kingdoms has grown through repeated physical prototypes: revised unit figurines, a simpler Tactic system, modular boards and a complete rulebook. The visual language and components continue to evolve alongside the gameplay. </p><p class="development-credit" data-v-6047e5bb> Prototype development has been supported by Martin Neubauer, who contributed to the design and 3D printing of the models, and by friends and family whose many playtesting sessions helped refine the game. </p></div><figure class="development-photo" data-v-6047e5bb><picture data-v-6047e5bb><source srcset="' + _hoisted_2 + '" type="image/webp" data-v-6047e5bb><img src="' + _imports_3 + '" alt="Early and later Veiled Kingdoms unit, token, tile and card prototypes arranged chronologically" width="2000" height="1500" loading="lazy" data-v-6047e5bb></picture><figcaption data-v-6047e5bb><strong data-v-6047e5bb>Prototype evolution</strong><span data-v-6047e5bb>Units, hidden tokens, buildings and cards across development</span></figcaption></figure></div></section>', 3)),
          unref(galleryImages).length || unref(oldGalleryImages).length ? (openBlock(), createElementBlock("section", _hoisted_8, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "gallery-heading" }, [
              createBaseVNode("h2", null, "The world of Veiled Kingdoms")
            ], -1)),
            unref(galleryImages).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
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
            ])) : createCommentVNode("", true),
            unref(oldGalleryImages).length ? (openBlock(), createElementBlock("p", _hoisted_11, " Photos of the older deck-building variant of the game. The new version without deck-building maintained all the part that made Veiled Kingdoms most fun but removed a lot of the complexity and made the game much faster too. ")) : createCommentVNode("", true),
            unref(oldGalleryImages).length ? (openBlock(), createElementBlock("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(oldGalleryImages), (image, index) => {
                return openBlock(), createElementBlock("figure", {
                  key: image,
                  class: "gallery-item"
                }, [
                  createBaseVNode("img", {
                    src: image,
                    alt: `Older Veiled Kingdoms deck-building variant photograph ${index + 1}`,
                    loading: "lazy"
                  }, null, 8, _hoisted_13)
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          _cache[8] || (_cache[8] = createStaticVNode('<section id="masquerade" class="masquerade-section vk-shell" aria-labelledby="masquerade-title" data-v-6047e5bb><div class="masquerade-card" data-v-6047e5bb><h2 id="masquerade-title" data-v-6047e5bb> Alternative Theme: The Grand Masquerade Ball </h2><p class="masquerade-story" data-v-6047e5bb> &quot;Once a year, on the last night of Carnival, the Doge opens his Venetian palazzo for a grand masquerade. Rival houses send masked troupes across the ballroom to claim the finest boxes and win over the bands. When two dancers meet, they settle their rivalry in a dance-off. The more graceful dancer keeps the floor; the other slips away to the cloakroom. Behind each mask are hidden talents, and each house secretly prepares a Flourish for the next dance. At midnight, one house is crowned Belle of the Ball.&quot; </p><div class="masquerade-terms" data-v-6047e5bb><table data-v-6047e5bb><thead data-v-6047e5bb><tr data-v-6047e5bb><th scope="col" data-v-6047e5bb>Current prototype</th><th scope="col" data-v-6047e5bb>At the masquerade</th></tr></thead><tbody data-v-6047e5bb><tr data-v-6047e5bb><td data-v-6047e5bb>Unit</td><td data-v-6047e5bb>Dancer</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Unit token</td><td data-v-6047e5bb>Mask</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Gold</td><td data-v-6047e5bb>Wine</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Combat</td><td data-v-6047e5bb>Dance-off</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Tactic</td><td data-v-6047e5bb>Flourish</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Citadel</td><td data-v-6047e5bb>Box</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Sanctum</td><td data-v-6047e5bb>Bandstand</td></tr><tr data-v-6047e5bb><td data-v-6047e5bb>Recruit / Train</td><td data-v-6047e5bb>Invite / Rehearse</td></tr></tbody></table></div></div></section><section id="contact" class="contact-section" data-v-6047e5bb><div class="vk-shell contact-inner" data-v-6047e5bb><div class="contact-heading" data-v-6047e5bb><h2 data-v-6047e5bb>Interested in what lies behind the veil?</h2><a class="button button-primary contact-button" href="https://www.linkedin.com/posts/neubauer-felix_spielessen-spiel2026-boardgames-activity-7486004316189786112-ixr4?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAADgsKZMBVVwkaXh9nGqwzV-hpCpWN9zUMaE" target="_blank" rel="noopener noreferrer" data-v-6047e5bb> Connect with me on LinkedIn <span aria-hidden="true" data-v-6047e5bb>↗</span></a></div><div class="contact-copy" data-v-6047e5bb><p data-v-6047e5bb> Veiled Kingdoms has been thoroughly playtested and refined as a complete physical prototype. I am looking for a publisher who sees potential in its mix of hidden information, combined unit abilities, prediction and spatial strategy. </p><p data-v-6047e5bb> I am also keen to connect with producers and illustrators. The current 3D-printed pieces are good for a prototype; production versions could use RE-Wood or another wood-based composite, depending on the publisher’s production vision. </p><p data-v-6047e5bb> The prototype artwork uses image generation as a visual direction during development. For the final game, I would like to work with a professional illustrator on original artwork and a cohesive visual identity. </p><p data-v-6047e5bb> I will attend SPIEL Essen as a business visitor on 22 and 23 October 2026 and would be glad to arrange a conversation and present the prototype. </p></div></div></section>', 2))
        ]),
        createBaseVNode("footer", null, [
          createBaseVNode("div", _hoisted_14, [
            _cache[10] || (_cache[10] = createBaseVNode("div", null, [
              createBaseVNode("strong", null, "Veiled Kingdoms"),
              createBaseVNode("span", null, "A board game by Felix Neubauer")
            ], -1)),
            _cache[11] || (_cache[11] = createBaseVNode("span", null, "Working title · Prototype shown", -1)),
            createVNode(unref(RouterLink), { to: "/" }, {
              default: withCtx(() => _cache[9] || (_cache[9] = [
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
const VeiledKingdomsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6047e5bb"]]);
export {
  VeiledKingdomsView as default
};
