---
id: resources
title: Resources
sidebar_position: 1
description: Resources
---

# Resources

## New Features

- [systemd resource](./systemmd-fedora.md)
- [iptables and firewalld](http://docs.fedoraproject.org/en-US/Fedora/19/html/Security_Guide/sec-Comparison_of_Firewalld_to_system-config-firewall.html)
- [DNF](http://fedoraproject.org/wiki/Features/DNF)

## Monitoring System Main Log File

Most system daemons write log messages to the main system log file at /var/log/messages. As a system administrator, you can view any new log messages written to the file in real time using the following command line in a terminal window:

```bash
[root@localhost ~]# tail -f /var/log/messages
Jan 13 11:59:01 localhost kernel: usb 1-2: new high speed USB device using ehci_hcd and address 5
Jan 13 11:59:01 localhost kernel: usb 1-2: New USB device found, idVendor=058f, idProduct=6387
Jan 13 11:59:01 localhost kernel: usb 1-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
Jan 13 11:59:01 localhost kernel: usb 1-2: Product: Mass Storage
Jan 13 11:59:01 localhost kernel: usb 1-2: Manufacturer: USB2.0
Jan 13 11:59:01 localhost kernel: usb 1-2: SerialNumber: 1C7FED06
Jan 13 11:59:01 localhost kernel: usb 1-2: configuration #1 chosen from 1 choice
Jan 13 11:59:01 localhost kernel: scsi9 : SCSI emulation for USB Mass Storage devices
Jan 13 11:59:06 localhost kernel: scsi 9:0:0:0: Direct-Access     USB2.0   Flash Disk       8.07 PQ: 0 ANSI: 2
Jan 13 11:59:06 localhost kernel: sd 9:0:0:0: Attached scsi generic sg3 type 0
Jan 13 11:59:06 localhost kernel: sd 9:0:0:0: [sdc] 1998848 512-byte logical blocks: (1.02 GB/976 MiB)
Jan 13 11:59:06 localhost kernel: sd 9:0:0:0: [sdc] Write Protect is off
Jan 13 11:59:06 localhost kernel: sd 9:0:0:0: [sdc] Assuming drive cache: write through
Jan 13 11:59:06 localhost kernel: sd 9:0:0:0: [sdc] Assuming drive cache: write through
Jan 13 11:59:07 localhost kernel: sdc: unknown partition table
Jan 13 11:59:07 localhost kernel: sd 9:0:0:0: [sdc] Assuming drive cache: write through
Jan 13 11:59:07 localhost kernel: sd 9:0:0:0: [sdc] Attached SCSI removable disk
Jan 13 11:59:07 localhost kernel: kjournald starting.  Commit interval 5 seconds
Jan 13 11:59:07 localhost kernel: EXT3 FS on sdc, internal journal
Jan 13 11:59:07 localhost kernel: EXT3-fs: recovery complete.
Jan 13 11:59:07 localhost kernel: EXT3-fs: mounted filesystem with ordered data mode.
```

The above messages were generated when a user plugged in an USB Flash drive to the system. In this example, the system assgined the device name [sdc] to identify the Flash drive.

## Firewall Configuration

### Default Firewall Setting

The default firewall configuration:

```bash
[root@localhost ~]# iptables -L --line-number
Chain INPUT (policy ACCEPT)
num  target     prot opt source               destination         
1    ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED 
2    ACCEPT     icmp --  anywhere             anywhere            
3    ACCEPT     all  --  anywhere             anywhere            
4    ACCEPT     udp  --  anywhere             224.0.0.251         state NEW udp dpt:mdns 
5    REJECT     all  --  anywhere             anywhere            reject-with icmp-host-prohibited 

Chain FORWARD (policy ACCEPT)
num  target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination          
```

- Incoming packets will be filtered based on firewall rules for the INPUT chain (Chain num 1 to 5)
    - Rule number 1 allows any packets which are related to any packets went out before
    - Rule number 2 allows any icmp packets, including echo-request and echo-reply packet (used by the ping command)
    - Rule number 3 allows packets coming from the loop back network interface (lo). Use the "-v" option to show the interface name.
    - Rule number 4 allows packets go to IP address 224.0.0.251 port 5353
    - Rule number 5 blocks all other incoming packets
- All packets will be forwarded.
- All outgoing packets are allowed.

### Improving system security with some better rules

A better configuration

```bash
[root@localhost ~]# iptables -L --line-number
Chain INPUT (policy DROP)
num  target     prot opt source               destination         
1    ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED 
2    ACCEPT     icmp --  anywhere             anywhere            
3    ACCEPT     all  --  anywhere             anywhere            

Chain FORWARD (policy DROP)
num  target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination          
```

- Incoming packets will be filtered based on firewall rules for the INPUT chain (Chain num 1 to 3)
    - Rule number 1 allows any packets which are related to any packets went out before
    - Rule number 2 allows any icmp packets, including echo-request and echo-reply packet (used by the ping command)
    - Rule number 3 allows packets coming from the loop back network interface (lo). Use the "-v" option to show the interface name.
    - As we aren't using MDNS, we can delete that rule.
    - Instead of rejecting unwanted traffic (which sends a response back), simply drop it (note the changed default policy).
- No packets will be forwarded.
    - Unless you expect to be forwarding traffic, why allow it?

**Logging unexpected traffic**

It can also be useful to keep a log of the traffic that your machine drops. This could be traffic that you want, but haven't added a rule to accept, or it could provide early warning that someone is trying to compromise your machine. This is particularly useful on machines/interfaces that face the outside world.

```bash
[root@localhost ~]# iptables -A INPUT -j LOG
```

### Restore default firewall rules to the Filter table

To restore the firewall to saved settings, do the following:

```bash
[root@localhost ~]# systemctl restart iptables
iptables: Flushing firewall rules:                         [  OK  ]
iptables: Setting chains to policy ACCEPT: raw mangle nat f[  OK  ]
iptables: Unloading modules:                               [  OK  ]
iptables: Applying firewall rules:
```

## Reporting Problems about your Fedora Installation

Please read the [bug report guide line](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) to collect as much information as possible when reporting your Fedora problem to your professor.

## Miscellaneous Topics

- [Fedora Vs Ubuntu](http://itmanagement.earthweb.com/osrc/article.php/3862556/Fedora-vs-Ubuntu-Is-Either-Better.htm)
