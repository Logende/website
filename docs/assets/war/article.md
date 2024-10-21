War (also known as NeubyWar and later ZeubyWar) was a minigame for the computer game Minecraft, which I invented and developed (implemented as a Java plugin).
The War plugin expanded the traditional gameplay of Minecraft by a _matchmaking_ system (players can join a game lobby, get assigned to one of two teams, can vote for one of three randomly chosen maps, and when the countdown is over, finally get teleported to the battlefield), by a custom _currency_ (money can be earned by damaging and killing enemies, as well as winning a match) and _custom weapons_ and items with special effects (can be purchased with the money. Examples are grenades, sniper shot, mines, blindness bomb, machine gun, etc.).

It was the very first Minecraft minigame I developed and was very fun to play, but was not optimized for a broad range of average players and instead rather difficult to understand and get into as a beginner.
I learned a lot about software development during the creation of this Minigame and I also learned a lot about user experience and accessibility.

[caption id="attachment_417" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_main.png)](https://logende.org/wp-content/uploads/2021/01/2012-08-05_15.29.44.png)One of the first War maps with the red team being in the bottom right corner and the blue team in the top left corner[/caption]
[caption id="attachment_418" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_bunt.png)](https://logende.org/wp-content/uploads/2021/01/2012-09-22_10.38.51.png)Another War map. The blue team wears leather armor and the red team wears gold armor[/caption]
[caption id="attachment_419" align="alignnone" width="900"]![](/src/assets/articles/war/war_texturepack.png)](https://logende.org/wp-content/uploads/2021/01/2012-11-16_23.01.48.png)The War game with a "Texturepack" created for the minigame by one of the players of the minigame[/caption]

## History

### First steps

Running my own Minecraft server in 2012, we had a core player base of around 50 players, 5-20 being online simultaneously.
Just wanting to have fun, we played and fought battles and so on, just as other regular players.
One idea I had was, that we could divide us players (everyone who was interested) into two teams.
Then, both teams would get a few days of time to build their castles, walls, and other combat buildings (e.g. hidden underground tunnels, etc.).
Finally, everyone would get the same armor and weapons and we would fight.
This was a lot of fun for us but it was quite some effort for me to coordinate everything, give everyone proper equipment, teleport the players to the corresponding locations, and so on.
Therefore, after just one or two days after trying this "team blue vs team red" fight approach, I decided to write a (very) simple plugin that would automate that task.
Players could join the "battle" using one simple command and would automatically get assigned to a team, equipped with items, and teleported to the waiting area.
After some time of no new player joining (or some fixed total countdown), players could start the fight with another simple command, causing the team members to get teleported to their team spawn and the battle officially starting.
Every team would have a fixed number of "team lifes" and team members would be respawned after being killed until the team would have lost all of its lives.
This was very simple, but also efficient and it did work.

[caption id="attachment_422" align="alignnone" width="900"]![](/src/assets/articles/war/war_old_waiting_area.png)](https://logende.org/wp-content/uploads/2021/01/2012-04-15_17.06.23-1.png)The waiting area: players would get teleported to this place when joining the minigame until the game started[/caption]
[caption id="attachment_423" align="alignnone" width="900"]![](/src/assets/articles/war/war_gameflow.png)](https://logende.org/wp-content/uploads/2021/01/2012-06-16_21.52.29.png)The chat here shows how the "game flow" worked like (unfortunately just in German, as the minigame was in German)[/caption]

### Getting more sophisticated

As the minigame was so much fun, I decided to invest more time into it and built a big "battlefield" map just for the minigame, making sure it was balanced and close to symmetric, as well as both teams having their recognizable bases and the map containing different tactical elements, such as underground tunnels, a high tree from which you could see the whole battlefield and use long-range attacks, and many more.
I also introduced a new currency, which players would get awarded by damaging opponents and being good in the game.
This currency could be used to buy so-called special attacks.
In the beginning, I implemented just a hand-full of those special attacks: one attack that would shoot 10 arrows at once ("Superschuss", shoots them straight forward), one very expensive attack, that would launch many arrows around you in every direction ("Rundumschuss") and a few others.
They would keep players engaged and it would feel just very satisfying to purchase and use one of those special attacks.
The special attacks themselves were programmed by using the API of the Minecraft server: the "PlayerClickEvent" could be used to detect when a player uses right-click on a certain item, and then I would generate new arrow objects, spawn them and assign proper velocities to them, to achieve the intended effect of the attacks.
By using this API and manipulating objects in the game many more special attacks were implemented by me during the development of the minigame.

[caption id="attachment_424" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_first_2.png)](https://logende.org/wp-content/uploads/2021/01/2012-07-11_20.39.18-1.png)The first War map and one player of team red and blue each[/caption]
[caption id="attachment_425" align="alignnone" width="900"]![](/src/assets/articles/war/war_chat_after_match.png)](https://logende.org/wp-content/uploads/2021/01/2012-07-30_10.01.07.png)Back in the lobby after a match has ended. The (German) chat gives a hint at how the last minutes of the match looked like.[/caption]
[caption id="attachment_427" align="alignnone" width="900"]![](/src/assets/articles/war/war_rundumschuss.png)](https://logende.org/wp-content/uploads/2021/01/2012-09-19_17.25.51.png)The effect of the "Rundumschuss" special attack[/caption]

### More Maps

I added code that made the minigame support multiple maps.
As a server administrator, one could simply add a new map to the game with a simple command and defining the team spawn locations, as well as a few other map properties.
Before a game would start, three of the maps would randomly be chosen and the players could vote for them.
The map with the most votes (obviously) would get chosen.

[caption id="attachment_426" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_voting.png)](https://logende.org/wp-content/uploads/2021/01/2012-07-30_22.03.17.png)The (German) chat shows the voting feature, as well as how players join the game and can start it[/caption]

Other players (especially server staff members) then started building their own "War" maps, which I added to the minigame.
It was fun for everyone involved.

[caption id="attachment_429" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_fabi.png)](https://logende.org/wp-content/uploads/2021/01/2012-10-03_14.29.05-1.png)Fabi's Map. One team would spawn in the city and the other team on the island.[/caption]
[caption id="attachment_430" align="alignnone" width="900"]![](/src/assets/articles/war/war_map_towerdefense.png)](https://logende.org/wp-content/uploads/2021/01/2012-11-24_18.57.04.png)A map where one team tries to reach the end of the street and the other team tries to stop them with heavy weapons[/caption]

### Custom Mod

One pain point of the minigame was the special attack shops: players had to type a command to buy special attacks (e.g. "k buy superschuss").
Also, players had to look up the names of the special attacks using another command.
This was not very intuitive and took time.
To improve the situation, I wrote a custom Mod for the game Minecraft, which would add a graphical user interface for the player, where a player could browse through the different shop items (mainly attacks) and click a button to buy the corresponding item.
This step improved the player experience for everyone having the mod, however, as the mod had to manually download and installed by the player, this was something many players simply did not do and it did not really increase the accessibility of the game.
Too bad I did not have written the plugin [BossShop](https://logende.org/portfolio-archive/bossshoppro/) at this point.

[caption id="attachment_431" align="alignnone" width="900"]![](/src/assets/articles/war/war_gui_mod.png)](https://logende.org/wp-content/uploads/2021/01/2012-08-05_14.39.45.png)Main menu of the War mod[/caption]
[caption id="attachment_432" align="alignnone" width="900"]![](/src/assets/articles/war/war_gui_mod_2.png)](https://logende.org/wp-content/uploads/2021/01/2012-08-05_14.39.35.png)Special attacks, can be browsed through and bought via the War mod[/caption]
[caption id="attachment_434" align="alignnone" width="900"]![](/src/assets/articles/war/war_gui_mod_3.png)](https://logende.org/wp-content/uploads/2021/01/2012-08-05_14.39.38.png)Supporting items in the War minigame[/caption]
[caption id="attachment_433" align="alignnone" width="900"]![](/src/assets/articles/war/war_gui_mod_4.png)](https://logende.org/wp-content/uploads/2021/01/2012-08-05_14.39.41.png)Destructive items in the War minigame[/caption]

### Custom Texturepack

One of my players was nice enough to create a custom "Texturepack" for the game, making the weapons look like actual weapons.
Before, players would, for example, hold a stick and when performing a right-click, the stick would be consumed and arrows were spawned, simulating the effects of a machine gun.
The texturepack made the stick look like an actual machinegun.

[![](/src/assets/articles/war/war_texturepack_2.png)](https://logende.org/wp-content/uploads/2021/01/2012-11-19_18.05.18.png)The "sniper" special attack looks like a sniper and the "Heal" special looks like a mushroom

[caption id="attachment_437" align="alignnone" width="900"]![](/src/assets/articles/war/war_texturepack_3.png)](https://logende.org/wp-content/uploads/2021/01/2012-11-25_17.24.35.png)The machinegun attack looks like a machinegun[/caption]
[caption id="attachment_438" align="alignnone" width="900"]![](/src/assets/articles/war/war_texturepack_4.png)](https://logende.org/wp-content/uploads/2021/01/2012-12-15_19.57.04.png)More custom textures are shown here[/caption]

### The End

The minigame was a lot of fun for everyone involved and I learned a lot through its development.
Working with the game was such a creative time and it had so many features I have not even touched on this page.
However, it was not optimized for a broad player base and due to its complexity, its accessibility was not as good, as in my other minigames ([EarthGames](https://logende.org/portfolio-archive/earthgames/) and [ZombieV](https://logende.org/portfolio-archive/zombiev/)).
Because the other games were just more popular and more fun to work with, as, admittedly, the codebase of the War game was not very good, after some time I just stopped working on it and spent my time improving the other minigames.
When we finally joined the Snapcraft network from the Netherlands, I did not port the War game to their server and instead brought EarthGames and ZombieV with me.
This was the end of the (really fun) minigame.
