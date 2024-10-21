ManaWars is a sidescrolling game written in Java.
Starting out as a simple computer game, it has evolved over time and later became an Android game with a custom game engine and eventually a cross-platform game using the existing game engine [libGDX](https://libgdx.badlogicgames.com/).

## Development Progress

### ManaWars for Desktop

Having written the simple Desktop game [ManaWar](https://logende.org/portfolio-archive/manawars-original-desktop-game/), I wanted to continue with developing my own game, but this time a little bit different.
Taking my experience from the development of Minecraft Minigame [ZombieV](https://logende.org/portfolio-archive/zombiev/), I wanted a game where the player fights against predefined waves of enemies and can upgrade his abilities over time (e.g. better attacks or more health).
As in the development of ManaWar, my brother supported my game development and code by drawing the characters and other artwork for the game.
As the creation of the character animations in ManaWar was too much effort (my brother drew every single character animation frame by hand), we decided to go with my brother drawing static skin files and me writing code that automatically aligns the body parts of the skin file in the proper way to simulate character movement/animations.
Therefore, I wrote multiple tools supporting the drawing efforts of my brother.

[caption id="attachment_290" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw2_character_generator.png)](https://logende.org/wp-content/uploads/2021/01/mw2_character_generator.png)Skin and skill preview and generation tool[/caption]

After some time, I designed the gameplay: a player has health, mana, and a certain walk speed, which can be upgraded.
Mana regenerates over time and is used to cast so-called "skills".
Every player has 3 skills (and enemies have 1 to 3 skills) selected at a time.
Examples for skills are fireballs or an arrow.
The stronger a skill is, the more mana it costs to use it.

The game featured a few different modes.
For example Sidescroller: the player walks to the right and meets predefined enemy tribes on his way.
In order to reach the next "stage" (e.g. next batch of enemies/next tribe) the previous tribe has to be defeated.
At the end of every tribe, the player meets a boss he has to kill.
Another mode was "Waves": the player has a fixed area within he can move and will be challenged by enemies that appear from the left and right.
When one wave of enemies is killed, the next wave will appear.

Every game mode can be played either alone or with up to 3 friends, using the same computer locally.
The resulting game was quite nice already.

[Downloadlink](http://www.mediafire.com/file/vjiq7hsx2jg4644/MW2_Beta_2014-05-09.jar/file)

[caption id="attachment_291" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw2_gameplay.png)](https://logende.org/wp-content/uploads/2021/01/manawar-ingame.png)ManaWars for PC - During a fight against Goblins. 2 players playing locally.[/caption]

[caption id="attachment_292" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw2_gameplay_2.png)](https://logende.org/wp-content/uploads/2021/01/manawar-ingame-2.png)ManaWars for PC - During a fight against Snowmen. 3 players playing locally.[/caption]

[caption id="attachment_293" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw2_skilltree.png)](https://logende.org/wp-content/uploads/2021/01/manawar-skilltree.png)Player upgrades and skill tree.[/caption]

https://www.youtube.com/watch?v=VVs1GJxp65k todo

### ManaWars for Android

Realizing, that the kind of gameplay we created is suited for mobile devices, I decided to port the game to Android.
I put a lot of time into coding the game and thinking about ideas to enhance the gameplay even more and my brother put a lot of time into the artwork.
The results were really great.

[caption id="attachment_294" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_1.png)](https://logende.org/wp-content/uploads/2021/01/mwa_1.png) How ManaWars for Android looks like on different devices[/caption]

Also, I have added multiple different game modes to spice things up.
Now, we would have one big world map, where the player would select "missions" (inspired by the game Castle Crashers, as well as the game Legendary Wars).
Some missions would be typical "Wave" or "Stage" missions (see ManaWars for PC), but some would also be platformer missions, where one should be careful to not fall down from the platform, while simultaneously fighting enemies and trying to reach the end of the map.
Also, there would be "CastleDefense" missions, where the player would own a castle and summon units, which in turn attack the enemies and the castle of the enemy.

As done in my other games, the player could upgrade most of the things available in the game: character stats (health, mana, speed), skills, his follower (yes: the player could unlock a buddy following him and could upgrade his buddy) and even his castle (bigger castle/long range units standing on castle to attack enemies/gold mine of castle).
Also, the player could upgrade and even exchange the units available for the castle.

[caption id="attachment_295" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_2.png)](https://logende.org/wp-content/uploads/2021/01/mwa_4.png) Different ManaWars gamemodes[/caption]

https://www.youtube.com/watch?v=2uh9V58g9Q0&feature=emb_title

[caption id="attachment_297" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_worldmap.png)](https://logende.org/wp-content/uploads/2021/01/mwa_6.png) The player can select missions on the big world map[/caption]

[caption id="attachment_298" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_tavern.png)](https://logende.org/wp-content/uploads/2021/01/mwa_7.png) In the tavern, the player can purchase upgrades[/caption]

[caption id="attachment_299" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_skilltree.png)](https://logende.org/wp-content/uploads/2021/01/mwa_8.png) New skills are unlocked in this skill tree[/caption]

[caption id="attachment_300" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_skill_selection.png)](https://logende.org/wp-content/uploads/2021/01/mwa_9.png) Players can always select 3 skills at a time.[/caption]

[caption id="attachment_301" align="alignnone" width="680"]![](/src/assets/articles/manawars/mw_android_castle_upgrades.png)](https://logende.org/wp-content/uploads/2021/01/mwa_11.png) The castle can be upgraded too[/caption]

[caption id="attachment_409" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw_android_castledefense.png)](https://logende.org/wp-content/uploads/2021/01/Screenshot_2015-05-13-13-53-31.png)The CastleDefense mode[/caption]

[caption id="attachment_302" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw_android_wallpaper.png)](https://logende.org/wp-content/uploads/2021/01/poster-low-quali1.png)ManaWars Wallpaper[/caption]

The creation of new content, such as levels, was accelerated by self-written tools, such as a campaign map editor.

[![](/src/assets/articles/manawars/mw_android_mapeditor.png)](https://logende.org/wp-content/uploads/2021/01/mw_campaign_mapcreator.png)

### ManaWars Crystalseeker (Cross-platform)

We were quite satisfied with most parts of the Android game, however, there was one major drawback: although not being very big, the game was rather slow.
The performance was disappointing. At that time, I had almost no clue about memory allocation on Android and as the game engine was completely custom written, it was far from being performance-optimized.
Having successfully written my own (although not very fast or flexible) game engine, I accepted that I had learned enough and it was time to move to an already existing more sophisticated game engine.
I chose [libGDX](https://libgdx.badlogicgames.com/) and ported our game to libGDX.
Doing that, I rewrote and improved many parts of the code.
Also, multiple parts of the game were very fancy but also tons of effort to maintain and work with, therefore I decided to remove those.
ManaWars CrystalSeeker was born, our very first cross-platform game.
The engine would enable us to port the game to Android/iOS/PC/Html5 and more.

[caption id="attachment_304" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw_crystalseeker_1.png)](https://logende.org/wp-content/uploads/2021/01/Screenshot_2015-12-23-10-30-47.png)ManaWars CrystalSeeker - Gameplay[/caption]

[caption id="attachment_305" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw_crystalseeker_2.png)](https://logende.org/wp-content/uploads/2021/01/Screenshot_2015-12-26-13-48-27.png)ManaWars CrystalSeeker - The new Upgrade Menu[/caption]

### ManaWars (new cross-platform version)

Having learned a lot more about software architecture and wanting to try out the language Kotlin, I decided to rewrite most parts of ManaWars CrystalSeeker in Kotlin and improve some parts of the architecture at the same time.
A new version of ManaWars was created, which was more user-friendly than the previous versions and which is a complete game, including a final endboss.

[caption id="attachment_308" align="alignnone" width="900"]![](/src/assets/articles/manawars/mw_new_1.png)](https://logende.org/wp-content/uploads/2021/01/mw-mount.png)How the new ManaWars game looks like[/caption]

https://www.youtube.com/watch?v=py2VAddQ08c&feature=emb_title

After having finished the game ManaWars, I wanted to follow up on the "CastleDefense" game mode ideas, which our Android game had.
As a result, we started working on the game [ManaWars CastleDefense](https://logende.org/portfolio-archive/manawars-castledefense-cross-platform/).
