---
description: Guide to Preventing and stopping DDoS Attacks
---

# IP safety guide

{% hint style="info" %}
A distributed denial-of-service attack (DDoS attack) is when an attacker floods a victim's internet network with malicious traffic, aimed at overwhelming it and causing downtime ranging from seconds to hours and more.
{% endhint %}

## Stopping attacks when your IP Address is shared

* If your IP Address has been leaked, or shared, you will want to change it.
* Domestic public IPv4 IP Addresses (most likely the one you are using) that is show to the server when connecting to it, are split into two categories:

### Dynamic

* Dynamic IP Addresses change regularly, if you are on a home internet connection, you most likely have a dynamic IP Address.
  * To reset a Dynamic IP unplugging your modem/router for 60 seconds and then plugging it back in, should provide you with a new IP Address.
  * When you do this, you release your existing IP address so that your ISP can recycle it. When you reconnect, your ISP assigns you a new IP address.
  * Going to http://checkip.amazonaws.com/ should present you with a different IP Address than you had before.
    * If not try running these steps again, if it doesn’t work still, you probably have a static IP Address.

### Static

* Static IP Addresses do not change, if you are on a commercial internet connection, you most likely have a static IP Addresss.

{% hint style="warning" %}
This makes it harder to gain a new IP Address&#x20;
{% endhint %}

* To gain a new IP Address you will want to contact your ISP (Internet Service Provider) and request they change your IP.
* Explain how you are worried about your security, and your internet has been going down, due to DDoS Attacks.
* Most of the time they will change your IP at no extra cost.

## Preventing your IP Address from being shared

### VPNs

* Most large servers will not support VPNs, Vanilla+ included.
* However, when playing on smaller servers, a VPN service is necessary, as they may not have security like you see on Vanilla+.
* Most people can find a VPN service that works for them online, but a free, easy to use, low latency option is Cloudflare Warp.

{% hint style="info" %}
* Cloudflare Warp connects you to the closest Cloudflare server, which you can learn more about here: https://www.cloudflare.com/network/
* To install Cloudflare Warp, go here: https://1.1.1.1/
{% endhint %}
