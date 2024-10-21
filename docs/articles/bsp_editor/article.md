BossShopProEditor is a web application that makes it easier to configure shops of the BossShopPro Java plugin.
It is written in TypeScript and uses VueJs.
Before I have written this web application (together with a good friend of mine), I had created a desktop application in Java, which served the same purpose ([Link](https://www.spigotmc.org/resources/bossshopproconfigure-configuration-and-setup-tool.28791/)) and there was an even older tool before that.

## History

Already in 2012, I started developing Java plugins for the computer game "Minecraft".
Those plugins could be deployed by the administrators of a "Minecraft server", where they would then affect the gameplay of the server, and, ideally, enhance the gameplay for the players of this server.
Not being into the game, one might severely underestimate the size and impact of those servers.
In reality, there are over 100 million people playing the game Minecraft.
And while anyone can easily set up a server and allow other players to join, the huge player-base led to professional companies and entrepreneurs making big business out of it.
Due to the possibility of such server plugins, one can customize their server to a crazy extent and also charge players real-world money for certain permissions or premium features on their server.
That way, many servers became commercialized and interested in high-quality plugins that provide their server a unique experience for their players.

I, personally, at that time, was just one of many players playing Minecraft just for the sake of having fun.
I was developing plugins, mainly, for my own server, but also sharing them publicly, because I liked the positive attention I was getting from other server owners and because I felt it would be valuable to learn how to code.
One of those plugins I developed and publicly shared was BossShop(Pro), which I extensively describe [here](https://logende.org/portfolio-archive/bossshoppro/).
While BossShop(Pro) was and still is very powerful, it also is complex and, especially for beginners, can be complicated to work with: it provides tons of options for server administrators to set certain things up, using a configuration YAML file.
Therefore, people should have some familiarity with config files in general, and also take some time to learn how the BossShop(Pro) configs are supposed to look like.
An extensive [Wiki page](https://www.spigotmc.org/wiki/bossshoppro/) with an [introduction](https://www.spigotmc.org/wiki/bossshoppro/), [examples](https://www.spigotmc.org/wiki/bossshoppro-examples/) and a [FAQ page](https://www.spigotmc.org/wiki/bossshoppro-faq-and-help/) help people learn how to configure the plugin.

### BossShopConfigure

Yet, I still wanted to make the life of the users of my plugin easier, and actually also my own life.
Realizing that an extensive graphical user interface would be way more intuitive than some plain configuration text file, I decided to develop exactly that.
Additionally, this GUI can have the option to auto-complete choices of the user, as well as list the different options one has for a certain config setting.

The resulting GUI tool is shown in the following video.
I named it [BossShopConfigure](https://bukkit.org/threads/gui-admin-bossshopconfigure-shop-config-editor.222404/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/ahyp1uYGgp8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[<img src="/src/assets/articles/bsp_editor/bspc_overview.png" width="600"/>](/src/assets/articles/bsp_editor/bspc_overview.png)

_BossShopConfigure GUI tool - Main menu with entry "BossSword" of shop "BuyShop" being selected_

[<img src="/src/assets/articles/bsp_editor/bspc_item.png" width="600"/>](/src/assets/articles/bsp_editor/bspc_item.png)

_BossShopConfigure GUI tool - ItemData editor menu_

[<img src="/src/assets/articles/bsp_editor/bspc_result.png" width="300"/>](/src/assets/articles/bsp_editor/bspc_result.png)

_The resulting "BossSword" entry within the BuyShop menu in the game_

### BossShopConfigureX

BossShopConfigure was alright, but it was missing some features that I wanted, such as advanced help menus, auto-completion of material names and other enum values, and some more.
Therefore, I decided to develop something much more sophisticated and advanced than BossShopConfigure.
The result was [BossShopConfigureX](https://www.spigotmc.org/threads/bossshop-gui-configuration-setup-tool.150313/).
The most distinct change of the new tool was, that it would require and use a "Minecraft server jar file" provided by the user of the tool.
The tool would then hook into the API of this server jar file and retrieve a lot of information from there, such as a list of available material names, enchantments, potion types, and more.
Therefore, whenever new content would be added to Minecraft, instead of the tool needing to be updated to include the new content, the tool would, automatically, always be up-to-date with whatever server version the user of the tool would provide.
This is the kind of robustness and independence I want my software to have: not having to update it, whenever somewhere else something is changed.

[<img src="/src/assets/articles/bsp_editor/bspc2_overview.png" width="800"/>](/src/assets/articles/bsp_editor/bspc2_overview.png)

_BossShopConfigureX GUI tool - Main menu_

[<img src="/src/assets/articles/bsp_editor/bspc2_shop.png" width="800"/>](/src/assets/articles/bsp_editor/bspc2_shop.png)

_BossShopConfigureX GUI tool - Shop with inventory view_

[<img src="/src/assets/articles/bsp_editor/bspc2_shopitem.png" width="600"/>](/src/assets/articles/bsp_editor/bspc2_shopitem.png)

_BossShopConfigureX GUI tool - Menu entry editor_

[<img src="/src/assets/articles/bsp_editor/bspc2_item.png" width="700"/>](/src/assets/articles/bsp_editor/bspc2_item.png)

_BossShopConfigureX GUI tool - ItemData editor_

[<img src="/src/assets/articles/bsp_editor/bspc2_itemdata_potion.png" width="350"/>](/src/assets/articles/bsp_editor/bspc2_itemdata_potion.png)

_BossShopConfigureX GUI tool - Easy choice selection feature (instead of plain text)_

[<img src="/src/assets/articles/bsp_editor/bspc2_autocomplete.png" width="200"/>](/src/assets/articles/bsp_editor/bspc2_autocomplete.png)

_BossShopConfigureX GUI tool - Auto-completion feature_

[<img src="/src/assets/articles/bsp_editor/bspc2_tooltip.png" width="350"/>](/src/assets/articles/bsp_editor/bspc2_tooltip.png)

_BossShopConfigureX GUI tool - Advanced help menu_

Note that after some time of maintaining BossShopConfigureX, I released the premium version of my plugin, called BossShopPro.
For that premium version, I also provided a slightly adjusted version of BossShopConfigureX, which I called [BossShopProConfigure](https://www.spigotmc.org/resources/bossshopproconfigure-configuration-and-setup-tool.28791/).

### BossShopProEditor

This tool was quite successful and well-received, but I still felt that it might be a little confusing for new users of my plugin, plus the number of options the tool provides (e.g. complexity) might overwhelm the user.
Also, the design of the tool was quite ugly.
It just happened that during an internship in 2019, I learned to code web applications in TypeScript and got familiar with the VueJs framework.
Additionally, using BossShopProConfigure myself, I realized that, while it makes a lot of things easier, it also lacks some possibilities in comparison to a raw configuration file.
True, the tool shows you everything you can do, but still, you have to spend quite some time clicking the different buttons in the GUI.
Everything is possible but speed is limited.
When editing a raw configuration file, on the other hand, users, probably, do not know every option they have/every feature the plugin has, but they can be quite fast if they know what to do.
Create a new shop entry?
Copy and paste.
Copy some item definition to somewhere else?
Copy and paste.
One can simply be a lot faster with the raw configuration file.
Seeing the pros and cons of both concepts, I decided that the ideal configuration tool would be one that merges both worlds.
The idea of [BossShopProEditor](https://www.spigotmc.org/resources/bossshoppro-editor.64777/) was born.
During my internship, I was collaborating a lot with a colleague and friend of mine, who is extremely good at web development and I liked working with him a lot.
It felt very productive and creative.
Therefore, I proposed to him to develop BossShopProEditor as a joint project.
He would focus on the VueJs components in the "GUI" half of the application and I would focus on the configuration half of the application and about linking both components together.
This is exactly would we did, resulting in a quite intuitive and powerful, yet surprisingly simple application.

[<img src="/src/assets/articles/bsp_editor/bspe_main.png" width="800"/>](/src/assets/articles/bsp_editor/bspe_main.png)

_BossShopProEditor web app - main page with the "Configuration" section and the "Configuration Assistant" section_

\_[<img src="/src/assets/articles/bsp_editor/bspe_shopitem.png" width="600"/>](src/assets/articles/bsp_editor/bspe_shopitem.png)

BossShopProEditor web app - "Configuration Assistant" dynamically shows the currently selected entry of the config\_

\_[<img src="/src/assets/articles/bsp_editor/bspe_autocomplete.png" width="350"/>](/src/assets/articles/bsp_editor/bspe_autocomplete.png)

BossShopProEditor web app - Neat features, such as auto-completion\_

[\_<img src="/src/assets/articles/bsp_editor/bspe_colorcode.png" width="500"/>](/src/assets/articles/bsp_editor/bspe_colorcode.png)

BossShopProEditor web app - Preview of formatting\_

### Honorable mentions

Besides my own tooling efforts for BossShop(Pro), there are some more tools out there, which other developers have created.
For example, on the [mc-market.org website](https://www.mc-market.org/search/35630/?q=BossShop&o=relevance), there are developers selling their own configurator, as well as people selling their service of configuring shops, as well as pre-configured shops.

Additionally, on Spigot other users provide tools that make setting up shops easier, such as this one: [Link](https://www.spigotmc.org/resources/gui-creation-tool-make-gui-crate-shop-formats-in-game-in-seconds.51660/).

Last but not least, my BossShopPro addon "[BSP ItemShops](https://www.spigotmc.org/resources/itemshops-bsp-create-fancy-gui-shops-with-minimal-effort.26640/)" makes setting up very standard shops where only regular items are sold, very easy.
