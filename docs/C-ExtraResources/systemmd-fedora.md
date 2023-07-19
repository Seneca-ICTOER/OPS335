---
id: systemd-fedora
title: Systemd Fedora
sidebar_position: 2
description: Systemd Fedora
---

# Systemd Fedora

## Fedora Specific

Starting from Fedora 15, systemd is a drop in replacement for SysVinit.

Information on Fedora's implementation of systemd:

- [Fedora wiki on systemd](http://fedoraproject.org/wiki/Systemd)
- [SysVinit to systemd cheatsheet](http://fedoraproject.org/wiki/SysVinit_to_Systemd_Cheatsheet)

## Developer Specific

Information provided by the systemd developer:

- [systemd](http://www.freedesktop.org/wiki/Software/systemd)

### For System Administrators

Blog posts by the systemd developer Lennart Poettering for system administrators:

- [systemd: Verifying Bootup](http://0pointer.de/blog/projects/systemd-for-admins-1.html)
- [systemd: Which Service Owns Which Processes?](http://0pointer.de/blog/projects/systemd-for-admins-2.html)
- [systemd: How Do I Convert A SysV Init Script Into A systemd Service File?](http://0pointer.de/blog/projects/systemd-for-admins-3.html)
- [systemd: Killing Services](http://0pointer.de/blog/projects/systemd-for-admins-4.html)
- [systemd: 3 levels of off](http://0pointer.de/blog/projects/three-levels-of-off)
- [systemd: Changing Roots](http://0pointer.de/blog/projects/changing-roots.html)
- [systemd: The blame game](http://0pointer.de/blog/projects/blame-game.html)
- [systemd: The New Configuration Files](http://0pointer.de/blog/projects/the-new-configuration-files)
- [systemd: On /etc/sysconfig and /etc/default](http://0pointer.de/blog/projects/on-etc-sysinit.html)

## System Administration

### Add systemd service to replace rc.local

Here is the suggestion:

- Reference [systemd service for replacing rc.local](https://bbs.archlinux.org/viewtopic.php?id=148170)

Add the following to the file /usr/lib/systemd/system/rc-local.service:

```bash
[Unit]
Description=/etc/rc.local Compatibility
After=network.target
[Service]
Type=oneshot
ExecStart=-/etc/rc.local
TimeoutSec=0
StandardInput=tty
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Call whatever script you want to run in /etc/rc.local and use systemctl to enable rc-local.service at boot time.
