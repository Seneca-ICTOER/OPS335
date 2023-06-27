---
id: unbinding-mac-addresses-on-fedora
title: Unbinding MAC Addresses on Fedora
sidebar_position: 4
description: Unbinding MAC Addresses on Fedora
---

# Unbinding MAC Addresses on Fedora

**Fedora 12/13/14:** These instructions are written for Fedora 12 and 13 but should apply to earlier Fedora releases. Fedora 15 utilizes a new persistent naming scheme, and interfaces may be named differently than in previous releases.

By default, Fedora binds ethernet interfaces (such as eth0) to a MAC address (specific network interface card/NIC). This is useful, because if a NIC is added, it will be assigned a new ethernet interface (instead of bumping the existing eth0 to eth1). However, this causes problems when you use a removable disk drive and move it from one computer to another.

To unbind the interace from the MAC address:

1. Start the system-config-network tool (on the menus under System\>Administration\>Network).

![Network Mac 1](/img/Ops235-network-mac-1.png)

2. Double-click on the **eth0** device.

![Network Mac 2](/img/Ops235-network-mac-2.png)

3. Select the **Hardware** tab and uncheck the box labeled **Bind to MAC address**, then click **Ok**.

![Network Mac 3](/img/Ops235-network-mac-3.png)

4. Select File\>Save.
5. **Delete the file** `/etc/udev/rules.d/70-persistent-net-rules` **by entering this command as root:** `rm /etc/udev/rules.d/70-persistent-net.rules`
6. Reboot your system.
