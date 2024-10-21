[<img src="/src/assets/articles/bossshoppro/bsp_overview.png" width="850"/>](/src/assets/articles/bossshoppro/bsp_overview.png)

Originally starting development in 2013, BossShopPro is a Minecraft plugin written in Java.
It can be downloaded and used by server administrators, who can use the software on their server, resulting in an improved experience for their players.

BossShop(Pro) was originally [published on Bukkit](https://dev.bukkit.org/projects/bossshop), where it was downloaded over 500.000 times.
It has since been improved and updated a lot and is currently being [distributed via Spigot](https://www.spigotmc.org/resources/222).
The source code of the plugin is [available on Github](https://github.com/Blackixx/BossShopPro), where other software developers have also made some contributions or even developed custom tooling for the plugin.

A [sophisticated Wiki page](https://www.spigotmc.org/wiki/bossshoppro/) describes users of BossShopPro how to [set it up](https://www.spigotmc.org/wiki/bossshoppro-configuration/) and shows [usage examples](https://www.spigotmc.org/wiki/bossshoppro-examples/).

## History trip

Running my own Minecraft server in the past, I always thought about how to keep players motivated and allow players that are most active or bring leadership qualities to get some benefit.
Therefore, I introduced different ranks, which players could achieve (e.g. Player, Builder, Moderator, Admin).
While I assigned those ranks to the players manually, in the beginning, I quickly realized that I can not always be online and not watch every playe.
Therefore, I wanted a system that allows players to increase their rank themselves if they meet certain conditions.
Players would not be able to become administrators without my approval, but they would be able to get a few neat perks by being active.
To make this possible, I wrote the Java plugin [CommandRank](https://dev.bukkit.org/projects/commandrank-permissionsbukkit), one of my very first pieces of software.
The plugin allows players to promote themselves via command IF they meet the given conditions.

Next, I wanted to add some level of automation to the promotions to the Moderator ranks as well.
I wanted to be able to keep track of the quantity and quality of the useful things the players did, who in turn could promote themselves to a certain Staff rank if they did enough of those useful things.
Therefore, I invented and developed the plugin [PlayerPoints](https://dev.bukkit.org/projects/playerpoints), which introduces a second currency on the server (Points).
At that time, on my server, I could give my players points if they did support me with server maintenance tasks or just building something nice for the server.
The players could then use those points to promote themselves, via the plugin CommandRank, which can connect itself with PlayerPoints.
This was the main purpose of PlayerPoints at that time.
The resource has more than 120.000 Downloads now and is used for many other purposes besides just promotions.
Many different plugins by other authors hook into PlayerPoints and use its API.
I have handed over the maintenance of PlayerPoints to another developer, who has taken great care of the resource and improved the code quality a lot (at the time I wrote PlayerPoints, I was a complete beginner in Software Development).
The code is available on Github too ([Link](https://github.com/Mitsugaru/PlayerPoints)).

Having introduced a second currency (Points), I quickly came to the conclusion that it makes sense players can also buy other stuff from it, rather than just ranks.
Therefore, I wrote the plugin [PointShop](https://dev.bukkit.org/projects/pointshop), which allows players to buy stuff for points.
This plugin was one of the firsts of its kind: players could not just buy items with their currency, but also permissions or the execution of commands (e.g. a command of another plugin, that does something specific, like granting you a protected area to build).
As people seemed to love the concept of buying different stuff (and not just items) via their currency, I wrote another plugin named [ItemShop](https://dev.bukkit.org/projects/itemshop), having the same features, but using Items as currency, instead of points.
The code was mostly just copied from PointShop.

While I had, originally, shied away from writing a shop plugin using the regular money currency, as many money shop plugins already existed, I finally decided, to port my unique shop plugin concept to a new plugin using the regular money currency.
[MoneyShop](https://dev.bukkit.org/projects/moneyshop) was born and it quickly became the most popular of the three plugins.

Maybe you have noticed already: Now I had three almost identical plugins, with only the type of currency/cost differing.
Maintaining those three (almost identical) codebases resulted in unnecessary effort.
Therefore, I merged all of those three plugins into one new plugin: [BossShop](https://dev.bukkit.org/projects/bossshop).
This plugin does not only allow server owners to create awesome shops, where they can define the price type of a shop entry (Money / Points / Items / and more!) and the reward type of that shop entry (Money / Points / Items / Permissions / Execution of commands / and many more!), but it also featured a nice graphical user interface, instead of requiring the players to use commands to buy things.
It is a really sophisticated and big plugin and I am proud of what it is and what it has achieved.
Fun Fact: the Chinese company NetEase has purchased a license, allowing them to distribute BossShop within the mainland of China.

[<img src="/src/assets/articles/bossshoppro/bsp_result.png" width="400"/>](/src/assets/articles/bossshoppro/bsp_result.png)

After maintaining BossShop for some time, some server owners and hardcore users of the plugin (mainly the owners from Snapcraft) were interested in even more features, such as conditions (e.g. some menu entries are available only when players have a certain rank or meet other conditions) and more.
They proposed that I could create a premium version of BossShop, which I could then sell on the [Spigot](https://www.spigotmc.org/) marketplace, a website where many plugins already have been sold for money.
This way I could afford to spend time on those advanced features.
With those server owners as active testers of my new features, providing valuable input to what users of the plugin actually want, I started creating a premium version of the plugin, called BossShopPro.
Not only did they provide valuable input in terms of ideas, but also in terms of graphics for the [BossShopPro resource page](https://www.spigotmc.org/resources/bossshoppro-the-most-powerful-chest-gui-shop-menu-plugin.222/) and wiki page.
BossShopPro quickly became a success. Just to show some of the reviews:

[<img src="/src/assets/articles/bossshoppro/bsp_reviews_1.png" width="800"/>](/src/assets/articles/bossshoppro/bsp_reviews_1.png)

[<img src="/src/assets/articles/bossshoppro/bsp_reviews_2.png" width="800"/>](/src/assets/articles/bossshoppro/bsp_reviews_2.png)

[<img src="/src/assets/articles/bossshoppro/bsp_reviews_3.png" width="800"/>](/src/assets/articles/bossshoppro/bsp_reviews_3.png)

[<img src="/src/assets/articles/bossshoppro/bsp_reviews_4.png" width="800"/>](/src/assets/articles/bossshoppro/bsp_reviews_4.png)

Everything was great and I kept maintaining BossShopPro, until, at one point, I was about to graduate and start my first full-time job, which would be in the area of self-driving cars.
This was the point, where I decided that I no longer have the capacity and time to work as a "freelancer" and sell software in my free time, let alone maintain projects of that size.
Therefore, I turned BossShopPro into a free resource and turned it open source, allowing for external developers to contribute and continue it.
The resource is now being continued [here](https://www.spigotmc.org/resources/104824/).
