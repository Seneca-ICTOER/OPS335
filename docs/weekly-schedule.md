---
id: weekly-schedule
title: Weekly Schedule
sidebar_position: 2
description: Weekly Schedule for OPS335
---

# Weekly Schedule

**Note**: Each OPS335 instructor will indicate the due dates for labs, tests and assignments. This schedule is a considered to be a general guideline for week-by-week content.

## Week 1

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Introduction to OPS335:** | **Online Reference:** | [Prep for Labs](/A-Labs/installation-lab0.md) |
| - Outline, policies | - [Centos7 Install Tips](https://wiki.centos.org/TipsAndTricks#head-4c9ee55a5c9dc051bd32e795b46a3856e41a0335) |  |
| - Assignments, labs, evaluation, email | - [OPS335 Resources](/C-ExtraResources/resources.md) |  |
| - Preparation for OPS335 labs |  |  |

## Week 2

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Basic Networking & Backups:** | **Online Reference:** | [Lab 1: Network/Backup](/A-Labs/lab1.md) |
| - ifconfig & route vs ip; resolv.conf, hostnamectl | - [ip vs ifconfig](https://www.tty1.net/blog/2010/ifconfig-ip-comparison_en.html) |  |
| - /etc/sysconfig/network-scripts/ | - OPS235 - Lab7 (ADD LINK) |  |
| - Network connection troubleshooting | - [rsync Howto](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps) |  |
| - SSH & SSH Keys | - [Cron HowTo](https://help.ubuntu.com/community/CronHowto) |  |
| - rsync & cron |  |  |

## Week 3

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Packet Filtering Using iptables:** | **Online Reference:** | [Lab 2a: Packet Filtering Using iptables](/A-Labs/lab2a.md) |
| - What is Packet Filtering | - [Overview](https://en.wikipedia.org/wiki/Iptables#Overview) |  |
| - iptables Basics (Tables, Chains, Targets) | - [CentOS Wiki](https://wiki.centos.org/HowTos/Network/IPTables) |  |
| - iptables Commands & Options |  |  |
| - iptables Command Examples |  |  |
| - Saving iptables Settings |  |  |

## Week 4

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Network Address Translation / iptables Best Practices** | **Online Reference:** | [Lab 2b: Additional iptables Troubleshooting](/A-Labs/lab2b.md) |
| - Network Address Translation (NAT Table - iptables) | - [Test Network Connectivity](/A-Labs/lab1.md#linux-network-connection-configuration-troubleshooting) (From Lab1) |  |
| - **Debugging firewall problems:** |  |  |
| - Troubleshooting Procedures |  |  |
| - Troubleshooting Tools |  |  |
| - Troubleshooting Exercises |  |  |

## Week 5

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Domain Name System (DNS):** | **Online Reference:** | [Lab 3: DNS](/A-Labs/lab3.md) |
| - Address resolution mechanism (zone definitions) | - [Address resolution mechanism](https://en.wikipedia.org/wiki/Domain_Name_System#Address_resolution_mechanism) | [Assignment 1 (Part 1)](/B-Assignments/assignment1-part1.md) |
| - DNS server setup | - [Reverse DNS lookups](https://en.wikipedia.org/wiki/Reverse_DNS_lookup) |  |
| - Querying Name Servers |  |  |
| - Reverse DNS lookups |  |  |
| **Performing DNS Queries** |  |  |
| - SOA, MX, TXT records |  |  |
| - Coordinating multiple servers |  |  |

## Week 6

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Mail Servers - SMTP** | **Online Reference:** | [Lab 4a: Simple Mail Server Setup](/A-Labs/lab4a.md) |
| - Mail Server Elements (MSA/MTA, MUA, MDA, MS, AA, SMTP) | - [Sending Messages with mail Command](http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/) |  |
| - Install and using mailx application (MUA) | - [Read Email Message with mail Command](http://www.johnkerl.org/doc/mail-how-to.html#prompt_commands) |  |
| - Analyze Email Message Headers | - [Reading Full Email Headers](https://support.google.com/mail/answer/29436?hl=en) |  |
| - Setup Postfix Server (no encryption) |  |  |
| - Sending Email from VM to Seneca College Mail Account |  |  |
| - Troubleshooting |  |  |

## Week 7

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Evaluation / Review** |  | [Assignment 1 (Part 2)](/B-Assignments/assignment1-part2.md) |
|  |  | Written Midterm Test |

## Study Week

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
|  |  |  |

## Week 8

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Using a Centralized Message Store (IMAP)** | **Online Reference:** | [Lab 4b: Mail Server Setup: LDA](/A-Labs/lab4b.md) |
| - Specifying Domains for Received Email (MTA) | - [common mail server terms](http://wiki.dovecot.org/MailServerOverview) |  |
| - Installing & Configuring MDA/LDA | - [Postfix man page](http://www.postfix.org/postconf.5.html) |  |
| - Send & Verify Receiving Mail on VMs | - [Configuring Dovecot](https://workaround.org/ispmail/wheezy/setting-up-dovecot) |  |
| - Troubleshooting |  |  |

## Week 9

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **File Server (Samba):** |  | [Lab 5: Samba Server](/A-Labs/lab5.md) |
| - smbclient, smbmount (mount -t cifs) |  |  |
| - smb.conf, testparm, smbpasswd, pdbedit |  |  |
| - getsebool, setsebool |  |  |

## Week 10

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Web Server (Apache):** | **Online Resources:** | [Lab 6: Web Server](/A-Labs/lab6.md) |
| - LAMP stack installation and configuration | - [PHP Tutorial](http://www.w3schools.com/php/default.asp) |  |
| - smb.conf, testparm, smbpasswd, pdbedit | - [MySQL / SQL Language Resources](http://www.w3schools.com/sql/) |  |

## Week 11

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Webmail: Encrypted connections** | **Online Reference:** | [Lab 7: Encrypted connections and webmail](/A-Labs/lab7.md) |
| - WebMail installation and configuration | - [TLS, SSL Definition](https://en.wikipedia.org/wiki/Transport_Layer_Security) |  |
| - Setting Up a Self-Serve Certificate | - [Create a self signed SSL key for Postfix](https://www.e-rave.nl/create-a-self-signed-ssl-key-for-postfix) |  |
| - Configuring Postfix (VM2) for Encryption (TLS) | - [Dovecot SSL configuration](http://wiki2.dovecot.org/SSL/DovecotConfiguration) |  |
| - Setting up Encryption with Thunderbird MUA |  |  |
| - Setting Up Dovecot MDA/LDA for Encryption (SSL) |  |  |

## Week 12

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **OpenLDAP:** | **Online Reference:** | [Lab 8: OpenLDAP](/A-Labs/lab8.md) |
| - LDAP Overview | - [OpenLDAP Administration Guide](https://www.openldap.org/doc/admin24/) |  |
| - Client setup | - [CentOS server & client setup guide](https://www.itzgeek.com/how-tos/linux/centos-how-tos/step-step-openldap-server-configuration-centos-7-rhel-7.html) |  |
| - Adding users |  |  |

## Week 13

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Evaluation / Review** |  | [Assignment 2](/B-Assignments/assignment2.md) |
|  |  | Exam Review |

## Week 14

| Objectives and Tasks	| Reference	| Labs |
| --- | --- | --- |
| **Evaluation / Review** |  | Final Exam |
