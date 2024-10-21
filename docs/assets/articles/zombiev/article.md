ZombieV is a Minecraft Minigame that I have invented, developed, and published to thousands of players via the Snapcraft gaming network from the Netherlands.
It is written in Java. The concept is simple: players fight together against pre-defined waves of crazy enemies.
By killing those enemies, they get money, which they can invest and stronger armor, weapons, and some other special perks.
Besides a lot of crazy fun elements (items like grenades, an interactive map which, for example, changes over the course of the game, and boss waves) players could also use the equipment they unlocked to challenge other players in a 1v1 fight.

## History

### First steps

[caption id="attachment_208" align="alignnone" width="300"]![](/src/assets/articles/zombiev/zombiev_old_arena.png)](https://logende.org/wp-content/uploads/2021/01/2012-11-17_17.48.06-300x155-1.png) The very first ZombieSurvival arena[/caption]

Around 2012, I was playing the game Minecraft and running my own minigames server.
I honestly do not remember how I got the idea, but I decided to develop "ZombieSurvival" minigame by coding a Java plugin with that functionality.
The features were: there are hardcoded enemy waves (e.g. wave 1 is 10 zombies with certain health spawned at certain locations, wave 2 is 4 endermen with a lot of health and special damage, etc.).
Players can join the arena at any time.
If the arena is currently empty, it will start with wave 1.
Otherwise, the players just join at the current wave.
They get money by killing enemies themselves (plus some money for kills of a nearby player), which they can invest in new equipment.
This equipment and its cost also was hardcoded and defined by me.
If the players survive all waves and kill the final boss (last wave) they get a lot of money as a reward.
Starting out with a really bad map, limited waves and really bad code, the minigame evolved over time.

I kept adding new waves and features every day.
Eventually, I met the Swedish gentleman David and merged my minigames server (custom plugins) with his server (bigger player base).
We created the network named "Zeuby" and had around 40-90 players online at once at this point.
The new ZombieSurvival map, which I built, looked like the following:

[caption id="attachment_209" align="alignnone" width="300"]![](/src/assets/articles/zombiev/zombiev_second_arena.png)](https://logende.org/wp-content/uploads/2021/01/2013-01-20_20.22.54.png) The improved ZombieSurvival arena[/caption]

I became more and more ambitious and started adding new features such as artificial players (NPCs) as enemies, which behaved and moved like regular players, using pathfinding algorithms and some logic to turn them into autonomous entities.

[caption id="attachment_210" align="alignnone" width="300"]![](/src/assets/articles/zombiev/zombiev_craz_enemy.png)](https://logende.org/wp-content/uploads/2021/01/2013-02-02_20.24.53.png) A crazy enemy with TnT on its head[/caption]

Many other features, of which I will only list a few, were implemented, such as the possibility, to purchase a wolf, which follows the player within the arena.
The player can upgrade the health, damage, and other attributes of the wolf and select one of many different special abilities, which could also be upgraded (e.g., the wolf can shoot fireballs) and also ride on the wolf while fighting.
Players could also select one of the multiple different super weapons (e.g. bow with explosive ammo, a sword that can shoot fireballs, an axe with an extreme attack).
They could give their weapon a name and enhance it in the so-called Forge.

[caption id="attachment_213" align="alignnone" width="900"]![](/src/assets/articles/zombiev/zombiev_wolf_upgrade_cave.png)](https://logende.org/wp-content/uploads/2021/01/2013-08-27_10.18.00.png)The cave where players could upgrade their wolf[/caption]
[caption id="attachment_214" align="alignnone" width="900"]![](/src/assets/articles/zombiev/zombiev_wolf_upgrade_cave_2.png)](https://logende.org/wp-content/uploads/2021/01/2013-08-27_10.17.24-e1610308730947.png)An example of the wolf upgrades[/caption]
[caption id="attachment_211" align="alignnone" width="300"]![](/src/assets/articles/zombiev/zombiev_weapon_forge.png)](https://logende.org/wp-content/uploads/2021/01/2013-01-24_15.40.12.png) The Forge[/caption]

### Rollout on Snapcraft

Due to different reasons (described in more detail in the EarthGames article), I joined the gaming network Snapcraft, owned by Bas and Maarten from the Netherlands.
There, I became Developer, Administrator, and Partner of Snapcraft after some time.
With the useful feedback of Bas and Maarten, I have improved the player experience of the game a lot.
In the beginning, ZombieSurvival shared its server with the minigame EarthGames, but we quickly came to the conclusion, that it would make sense to move ZombieSurvival to its own server too, due to the high player count.
As we had anticipated a lot of ZombieSurvival changes and the original codebase was not that good, I decided to rewrite ZombieSurvival from scratch.
Now, with the new code, multiple arenas were supported and I have realized other crazy ideas too, such as sound effects, fireworks (e.g. when a wave is defeated), a new shop, crazy waves (such as many enemies stacked up on top of each other), an interactive map (e.g. a solid tower that moves and can shoot arrows).

[caption id="attachment_215" align="alignnone" width="900"]![](/src/assets/articles/zombiev/zombiev_map_3.png)](https://logende.org/wp-content/uploads/2021/01/2013-07-19_14.24.39.png)New ZombieSurvival map, built by „randomguy1243" alias Noah[/caption]

Then, finally, ZombieSurvival was released on its own server in 2013, being called ZombieV now.
It was accepted by the players quickly and running quite successfully.

[caption id="attachment_216" align="alignnone" width="959"]![](/src/assets/articles/zombiev/zombiev_player_count.png)](https://logende.org/wp-content/uploads/2021/01/sucess.png)Snapcraft Forum message by Bas[/caption]

As more and more players joined, we added new arenas and I implemented more features.

[![](/src/assets/articles/zombiev/zombiev_player_count_2.png)](https://logende.org/wp-content/uploads/2021/01/2013-09-02_17.04.55.png)

### How the story continued

Having achieved my goals and successfully completed my minigames, as well as enjoyed a large player base, I lost interest in the game Minecraft and, eventually, stopped playing it.
I continued to update my minigames until competent maintainers were found and I must say that they have done a great job.
As Snapcraft kept evolving, so did ZombieV.
Nowadays, it looks very different and even more sophisticated:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eoSg1iHQnq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/qCp2JzMIMK4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### A quick overview of the 1v1 fights

Players could challenge each other to a 1v1 fight on the ZombieV server.
In that fight, they can use all the equipment, which they collect during playing ZombieSurvival.

[caption id="attachment_224" align="alignnone" width="300"]![](/src/assets/articles/zombiev/pvp_1.png)](https://logende.org/wp-content/uploads/2021/01/2014-08-13_18.31.11.png) First 1v1 map (small)[/caption]
[caption id="attachment_226" align="alignnone" width="300"]![](/src/assets/articles/zombiev/pvp_2.png)](https://logende.org/wp-content/uploads/2021/01/2013-07-19_14.17.00.png) Section of the new 1v1 map[/caption]
[caption id="attachment_225" align="alignnone" width="300"]![](/src/assets/articles/zombiev/pvp_3.png)](https://logende.org/wp-content/uploads/2021/01/2013-07-19_14.16.18.png) Section of the new 1v1 map[/caption]

<iframe width="560" height="315" src="https://www.youtube.com/embed/ky0OyJrV0OA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
