---
id: reset-grub-password
title: Reset GRUB Password
sidebar_position: 5
description: Reset GRUB Password
---

# Reset GRUB Password

You followed Lab 2 instruction and secure your system with GRUB password. Now you need to boot your system to single user mode but you can,t remember where you put that piece of paper that has the GRUB password on it. Now, what can you do?

To solve this problem, you need one piece of information and your Live Fedora CD.

## Boot with Live Disc

1. Boot your system with the Fedora Live Disc.
2. Open a terminal window (Applications\>System Tools\>Terminal).
3. Become the system administrator (root) by typing: `su`

## Determining your Boot Partition

The information that you need is the partition number on your hard disk you used as the boot partition. For example, it may be the first logical partition, which is partition 5, or /dev/sda5 (if it is on the first hard disk).

If you remember your boot partition, skip to the next section. If you cannot remember your boot partition:

1. Enter the command: `grub`
2. Enter this grub command to search for the partition that contains your boot configuration file: `find /grub/grub.conf`
3. The grub shell will respond with a partition number, something like: `(hd0,4)`
4. To convert this to a Linux device name:
    - The drive number (hd0) is numbered starting from zero. Convert this to a drive name starting at sda (so hd0=sda, hd1=sdb, hd2=sdc, and so forth).
    - The partition number (4) is numbered starting from zero. Linux device name partitions are numbered starting from one, so add one (4+1=3) and append that to the drive name found in the previous step: `/dev/sda5`
5. Exit from the grub shell: `quit`

## Reset your Password

1. Mount the boot partition to `/mnt` with the following command: `mount -t ext3 /dev/sda5 /mnt`
2. Edit the file `/mnt/grub/grub.conf` to modify or remove the grub password.
3. Shutdown the Live Fedora, remove the CD and restart.

**Physical Access Overrules Security:** Note that if you have physical access to a system, most security measures can be easily overcome.
