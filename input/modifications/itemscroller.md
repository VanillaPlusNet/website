# Itemscroller

[https://modrinth.com/mod/item-scroller](https://modrinth.com/mod/item-scroller)\
\
When using Itemscroller, it is essential that you remove the mod from your mods folder before engaging in PvP. Not doing so will result in a ban from the network.

General guide for Itemscroller: [https://www.youtube.com/watch?v=aOfo8eoeTdQ](https://www.youtube.com/watch?v=aOfo8eoeTdQ) (abfielder)



Here at Vanilla+, we have a packet rate limiter on the server to prevent lag. Due to this, your Itemscroller mod will need to be configured before use.\
\
Configuration for crafting:

* Set "massCraftInterval" to 40
* Set "massCraftIterations" to 36
* Set "packetRateLimit" to 10
* Enable "rateLimitClickPackets"

***

Configuration for villager trading:

* Disable "rateLimitClickPackets"
* Optionally, bind "villagerTradeFavorites" to right click. This way you can right click a villager twice to instantly trade with it.
