import { d as defineComponent, o as onMounted, a as onUnmounted, c as createElementBlock, b as createBaseVNode, u as unref, e as createCommentVNode, f as createVNode, w as withCtx, g as createStaticVNode, F as Fragment, r as renderList, h as openBlock, i as createTextVNode, R as RouterLink, n as normalizeClass, j as _export_sfc } from "./index-B-SIE2DS.js";
const _imports_0 = "/veiled-kingdoms/vk_foto_1.webp";
const _imports_1 = "/veiled-kingdoms/vk_foto_1.png";
const _imports_2 = "/veiled-kingdoms/vk_prototypen.webp";
const _imports_3 = "/veiled-kingdoms/vk_prototypen.png";
const _imports_4 = "/veiled-kingdoms/player_screen.png";
const _imports_5 = "/veiled-kingdoms/turn_quick_guide.png";
const variantGalleryImages = ["/veiled-kingdoms/gallery/2p_setup_tactics_and_dice.png", "/veiled-kingdoms/gallery/2p_setup_tactics_and_stamina.png", "/veiled-kingdoms/gallery/vk_foto_2.png", "/veiled-kingdoms/gallery/vk_foto_3.png"];
const deckbuildingGalleryImages = ["/veiled-kingdoms/gallery_old/7220EC0B-5333-43C4-AF30-DCE43CB939A6%202.webp", "/veiled-kingdoms/gallery_old/IMG_0818.webp", "/veiled-kingdoms/gallery_old/IMG_0820.webp", "/veiled-kingdoms/gallery_old/IMG_0896.webp", "/veiled-kingdoms/gallery_old/IMG_1448.webp"];
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
  class: "gallery-variants-description"
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
      const description = "Veiled Kingdoms is a Venetian masquerade strategy board game for 2–4 players, combining hidden units, bluffing, deck-building and control of Citadels and Sanctums.";
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
            unref(deckbuildingGalleryImages).length || unref(variantGalleryImages).length ? (openBlock(), createElementBlock("a", _hoisted_6, "Gallery")) : createCommentVNode("", true),
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
          _cache[7] || (_cache[7] = createBaseVNode("section", { class: "hero vk-shell" }, [
            createBaseVNode("div", { class: "hero-copy" }, [
              createBaseVNode("h1", null, "Veiled Kingdoms"),
              createBaseVNode("p", { class: "hero-intro" }, " A strategy board game of hidden units, bluffing and deck-building. Combine unit abilities, use cards to move and fight, and control the city’s citadels and sanctums. ")
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
          _cache[8] || (_cache[8] = createStaticVNode('<section class="facts" aria-label="Game facts" data-v-5e80976c><div class="vk-shell facts-grid" data-v-5e80976c><div data-v-5e80976c><span data-v-5e80976c>Players</span><strong data-v-5e80976c>2–4</strong><small data-v-5e80976c>4 players: 2 teams</small></div><div data-v-5e80976c><span data-v-5e80976c>Playing time</span><strong data-v-5e80976c>30–90 min</strong></div><div data-v-5e80976c><span data-v-5e80976c>Age</span><strong data-v-5e80976c>12+</strong></div><div data-v-5e80976c><span data-v-5e80976c>Setting</span><strong data-v-5e80976c>Venetian masquerade</strong></div><div data-v-5e80976c><span data-v-5e80976c>Stage</span><strong data-v-5e80976c>Playtested prototype</strong></div></div></section><section id="game" class="game-section vk-shell" data-v-5e80976c><div class="section-heading" data-v-5e80976c><h2 data-v-5e80976c>A strategy game built around hidden information, deduction and bluffing.</h2></div><div class="game-intro" data-v-5e80976c><p data-v-5e80976c> Veiled Kingdoms combines deck-building and hidden-unit combat with area control on a modular hex-grid city. The value and abilities inside each unit are concealed from other players until combat or a special action reveals them. Unit tokens can be combined, creating new ability synergies and armies that develop differently from game to game. Each turn, cards move units, disrupt rivals and shape combat. You can also recruit one unit or train one already in play. </p></div><div class="pillars" data-v-5e80976c><article data-v-5e80976c><h3 data-v-5e80976c>Configure hidden units</h3><p data-v-5e80976c> Combine value and ability tokens to shape each unit. Matching types strengthen an ability; mixing types creates new synergies. How you distribute your best tokens is your choice. </p></article><article data-v-5e80976c><h3 data-v-5e80976c>Bluffing and deduction</h3><p data-v-5e80976c> Watch how opposing units move and act for clues about what they hide. Your own movements can give away a strong unit or make a weak one look dangerous. </p></article><article data-v-5e80976c><h3 data-v-5e80976c>Area control</h3><p data-v-5e80976c> Citadels provide gold to buy new cards, while sanctums let you draw more cards each turn. Capturing and defending enough of these buildings secures victory. </p></article><article data-v-5e80976c><h3 data-v-5e80976c>Build your deck</h3><p data-v-5e80976c> Buy movement, economy and tactical cards from a shared market. Develop your own combinations and chain card effects to support your units and respond to the changing board. </p></article></div></section><section id="development" class="development-section" data-v-5e80976c><div class="vk-shell development-grid" data-v-5e80976c><div class="development-copy" data-v-5e80976c><h2 data-v-5e80976c>A prototype in motion</h2><p data-v-5e80976c> Veiled Kingdoms has grown through repeated physical prototypes: revised unit figurines, iterated card systems, modular boards and a complete rulebook. The visual language and components continue to evolve alongside the gameplay. </p><p class="development-credit" data-v-5e80976c> Prototype development has been supported by Martin Neubauer, who contributed to the design and 3D printing of the models, and by friends and family whose many playtesting sessions helped refine the game. </p></div><figure class="development-photo" data-v-5e80976c><picture data-v-5e80976c><source srcset="' + _hoisted_2 + '" type="image/webp" data-v-5e80976c><img src="' + _imports_3 + '" alt="Early and later Veiled Kingdoms unit, token, tile and card prototypes arranged chronologically" width="2000" height="1500" loading="lazy" data-v-5e80976c></picture><figcaption data-v-5e80976c><strong data-v-5e80976c>Prototype evolution</strong><span data-v-5e80976c>Units, hidden tokens, buildings and cards across development</span></figcaption></figure></div></section>', 3)),
          unref(deckbuildingGalleryImages).length || unref(variantGalleryImages).length ? (openBlock(), createElementBlock("section", _hoisted_8, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "gallery-heading" }, [
              createBaseVNode("h2", null, "The world of Veiled Kingdoms")
            ], -1)),
            unref(deckbuildingGalleryImages).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(deckbuildingGalleryImages), (image, index) => {
                return openBlock(), createElementBlock("figure", {
                  key: image,
                  class: "gallery-item"
                }, [
                  createBaseVNode("img", {
                    src: image,
                    alt: `Veiled Kingdoms deck-building photograph ${index + 1}`,
                    loading: "lazy"
                  }, null, 8, _hoisted_10)
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            _cache[6] || (_cache[6] = createStaticVNode('<p class="gallery-variants-description" data-v-5e80976c>Player aid</p><div class="gallery-grid" data-v-5e80976c><figure class="gallery-item" data-v-5e80976c><img src="' + _imports_4 + '" alt="Player screen with unit information" loading="lazy" data-v-5e80976c></figure><figure class="gallery-item" data-v-5e80976c><img src="' + _imports_5 + '" alt="Turn quick guide card" loading="lazy" data-v-5e80976c></figure></div>', 2)),
            unref(variantGalleryImages).length ? (openBlock(), createElementBlock("p", _hoisted_11, " Other tested variants of the game explored action selection using stamina, with each additional move costing more, or a die. In some versions, players committed a hidden tactic at the end of their turn to take effect on their next turn, rewarding anticipation of how the intervening turns would unfold. I also tested a larger unit figurine that could be bought from the market and hold three tokens. ")) : createCommentVNode("", true),
            unref(variantGalleryImages).length ? (openBlock(), createElementBlock("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(variantGalleryImages), (image, index) => {
                return openBlock(), createElementBlock("figure", {
                  key: image,
                  class: normalizeClass(["gallery-item", { "gallery-item--render": image.includes("2p_setup") }])
                }, [
                  createBaseVNode("img", {
                    src: image,
                    alt: `Other tested Veiled Kingdoms variants photograph ${index + 1}`,
                    loading: "lazy"
                  }, null, 8, _hoisted_13)
                ], 2);
              }), 128))
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          _cache[9] || (_cache[9] = createStaticVNode('<section id="masquerade" class="masquerade-section vk-shell" aria-labelledby="masquerade-title" data-v-5e80976c><div class="masquerade-card" data-v-5e80976c><h2 id="masquerade-title" data-v-5e80976c> Alternative Theme: The Grand Masquerade Ball </h2><p class="masquerade-story" data-v-5e80976c> &quot;Once a year, on the last night of Carnival, the Doge opens his Venetian palazzo for a grand masquerade. Rival houses send masked troupes across the ballroom to claim the finest boxes and win over the bands. When two dancers meet, they settle their rivalry in a dance-off. The more graceful dancer keeps the floor; the other slips away to the cloakroom. Behind each mask are hidden talents, and each house builds its own repertoire of Flourishes to outwit its rivals. At midnight, one house is crowned Belle of the Ball.&quot; </p><div class="masquerade-terms" data-v-5e80976c><table data-v-5e80976c><thead data-v-5e80976c><tr data-v-5e80976c><th scope="col" data-v-5e80976c>Current prototype</th><th scope="col" data-v-5e80976c>At the masquerade</th></tr></thead><tbody data-v-5e80976c><tr data-v-5e80976c><td data-v-5e80976c>Unit</td><td data-v-5e80976c>Dancer</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Unit token</td><td data-v-5e80976c>Mask</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Gold</td><td data-v-5e80976c>Wine</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Combat</td><td data-v-5e80976c>Dance-off</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Card</td><td data-v-5e80976c>Flourish</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Citadel</td><td data-v-5e80976c>Box</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Sanctum</td><td data-v-5e80976c>Bandstand</td></tr><tr data-v-5e80976c><td data-v-5e80976c>Recruit / Train</td><td data-v-5e80976c>Invite / Rehearse</td></tr></tbody></table></div></div></section><section id="contact" class="contact-section" data-v-5e80976c><div class="vk-shell contact-inner" data-v-5e80976c><div class="contact-heading" data-v-5e80976c><h2 data-v-5e80976c>Interested in what lies behind the veil?</h2><a class="button button-primary contact-button" href="https://www.linkedin.com/posts/neubauer-felix_spielessen-spiel2026-boardgames-activity-7486004316189786112-ixr4?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAADgsKZMBVVwkaXh9nGqwzV-hpCpWN9zUMaE" target="_blank" rel="noopener noreferrer" data-v-5e80976c> Connect with me on LinkedIn <span aria-hidden="true" data-v-5e80976c>↗</span></a></div><div class="contact-copy" data-v-5e80976c><p data-v-5e80976c> Veiled Kingdoms has been thoroughly playtested and refined as a complete physical prototype. I am looking for a publisher who sees potential in its mix of hidden information, combined unit abilities, deck-building and spatial strategy. </p><p data-v-5e80976c> I am also keen to connect with producers and illustrators. The current 3D-printed pieces are good for a prototype; production versions could use RE-Wood or another wood-based composite, depending on the publisher’s production vision. </p><p data-v-5e80976c> The prototype artwork uses image generation as a visual direction during development. For the final game, I would like to work with a professional illustrator on original artwork and a cohesive visual identity. </p><p data-v-5e80976c> I will attend SPIEL Essen as a business visitor on 22 and 23 October 2026 and would be glad to arrange a conversation and present the prototype. </p></div></div></section>', 2))
        ]),
        createBaseVNode("footer", null, [
          createBaseVNode("div", _hoisted_14, [
            _cache[11] || (_cache[11] = createBaseVNode("div", null, [
              createBaseVNode("strong", null, "Veiled Kingdoms"),
              createBaseVNode("span", null, "A board game by Felix Neubauer")
            ], -1)),
            _cache[12] || (_cache[12] = createBaseVNode("span", null, "Working title · Prototype shown", -1)),
            createVNode(unref(RouterLink), { to: "/" }, {
              default: withCtx(() => _cache[10] || (_cache[10] = [
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
const VeiledKingdomsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e80976c"]]);
export {
  VeiledKingdomsView as default
};
