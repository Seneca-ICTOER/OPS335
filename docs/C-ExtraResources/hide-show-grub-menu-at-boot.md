---
id: hide-show-grub-menu-at-boot
title: Hide-show grub menu at boot
sidebar_position: 6
description: Hide-show grub menu at boot
---

# Hide-show grub menu at boot

**Fedora 13:** These instructions should apply to other Linux distribution using grub version 0.97 and later.

The default installation of the GRUB boot loader by Fedora 13 set the `timeout` value to 0 and the `hiddenmenu` option enabled, which effectively hides the GRUB boot menu from the user.

## Viewing the GRUB menu without changing the defaults

The grub menu can be made to appear by holding down a key, such as SHIFT, during the boot process.

## Changing the defaults so the boot menu always appears

Edit `/boot/grub/grub.conf`:

1. Remove (or comment out) the `hiddenmenu` line.
2. Set the `timeout` parameter to the length in seconds that GRUB will wait before booting the default menu option, if the user does not press any keys.

## References

- `man grub`

**GRUB vs. GRUB2:**

When searching for information about GRUB on the Internet, be aware that Grub2 is a very different program from the version shipped with Fedora, and information about Grub2 will not necessarily apply to Fedora. The Fedora project has not yet switched to using Grub2 because it does not support some system configurations on which Fedora is used.
