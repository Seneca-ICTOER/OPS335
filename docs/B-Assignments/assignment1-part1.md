---
id: assignment1-part1
title: Assignment 1 (Part 1)
sidebar_position: 1
description: Assignment 1 (Part 1)
---

# Assignment 1 (Part 1)

## Purpose

For this portion of assignment 1, you will set up the basic functionality for a virtual machine to act as a **cloning-source** to make it easier for the student to create other servers (VMs) in later assignments. Whenever you clone another server (in later assignments), you MUST make certain to configure the cloned server in order to make it function in the network correctly and meet the requirements of future assignments. All of the assignments for this course are **interdependent** of each other and belong to the same Virtual Private Network called **335assign**.

## General Requirements

**Weight**: **2.5%** of the overall grade

**Due Date**: check with your professor

## Detailed Requirements

### Set-up a Virtual Network (335assign)

Create a new virtual network on your Host Machine.

- Assign a newly-created virtual network the name: **335assign**, and set **forwarding to any physical device** (refer to [lab setup] (ADD LINK). You can have have 2 different network names: "335assign" and "ops335" without causing any problems).
- Addresses in this network will start with **172.28.105**. The subnet mask must be **255.255.255.0**
- There must **NOT** be a DHCP server running for this network!
- All the machines for this assignment will be connected to your newly-created virtual network called: **335assign**

### Create a "Cloning-Source" VM (335assign Virtual Network)

Create a virtual machine that you will use as a cloning-source.

Details for the cloning-source

1. The name of this cloning-source VM will be called: **pangaea**.
2. You should use the options that you used in your lab1 to setup the static network, plus you should use the DOMAIN parameter to set the **continents.earth.ops** domain for your cloning-source.
3. The VM should have a command-line interface only.
4. Configure it to be a good cloning-source, **making certain that the cloning-source has all the following elements prior to cloning**:
    - Don't make the virtual drive too big: you will need space for it as well as space for the clones you from your cloning-source (**5 GB** should be enough for any cloning-source and clone VM that you create for this assignment).
    - The hostname for this server will be called: **pangaea**
    - Make certain that you can login to your cloning-source.
    - Configure your network interface for this cloning-source with a **static** configuration and is connected to the **335assign** network. Refer to the table below for IP address and hostname.

| Hostname / Domain	 | Address	| Purpose |
| --- | --- | --- |
| (your existing host / source)	| External Facing Address: **DHCP assigned** Internal Virtual Bridge (virbr1): **172.28.105.1**	| Your **host** machine |
| **pangaea.continents.earth.ops**	| **172.28.105.100**	| **Cloning-source** used to create other servers for other assignments. |

5. Make certain your cloning-source can connect to the Internet using the newer static configuration.
6. Run a **yum update** for this cloning-source.
7. Make certain that SELinux is set to **enforcing** (unless you're in Andrew or Hans' sections - then have it **disabled**).
8. Set up an SSH server on this "cloning-source".
9. Make sure that **PermitRootLogin** is set to **yes** for this server.
10. Make certain that the root account is permitted to login only using key authentication. If other users are required to be created in a later assignment, they should be permitted to log in with their username and password.
11. Copy the same public key (already generated for your **Host Machine** for your **root** account in lab1) to the **root** account on your cloning-source.
12. Test to make certain that you can login from root on your host machine to your root account on the cloning-course ("pangaea") **without** being prompted for a pass-phrase.
13. If you have created a **regular user** when you installed this machine, **delete that regular user** (make certain to **remove the regular user's home directory!**).

### Set-up Firewall Rules for your Cloning-Source

Perform the following steps for this section:

1. Make certain that you have **iptables** services enabled and running instead of _Firewalld_.
2. Modify the **iptables** to meet the following conditions:
    - All outgoing traffic is allowed.
    - Responses to any traffic the machine sends out are allowed.
    - Traffic on the loopback interface is allowed.
    - The host machine (and **only** the host machine) must be able to ssh to that cloning-source VM.
    - ICMP traffic is allowed if it originated with the local network only.
    - As this is acting as the secure basis for later machines, no other traffic should be allowed, and no response should be sent if any other traffic is received.

### Create Full and Incremental Backups of cloning-source VM

Perform the following steps for this section:

1. This task is to be performed in your **host** machine.
2. Issue the command **su -**
3. Create a Bash shell script called **/root/bin/assnBackup.bash** to perform a **full backup** using the **gzip** command to backup the entire file system of your cloning-source VM to save the compressed copy to the directory path: **/backup/full/**).
4. This shell script should read each of any number of VM image files in the **/var/lib/libvirt/images** directory that has the extension ".qcow2". In this way, this shell script will safely backup any new VMs that are created later in this course, yet backup the existing labs and assignment VMs.
5. Perform a Net-search to use the **pv** (_pipe-viewer_) command to show a text-based indicator of backup for EACH VM image file. You need to add the **EPEL repository** to install the pv command.
6. Set execute permissions for this script, and **run this Bash shell script prior to exiting your assignment work session to properly backup your cloning source**. You should also make a copy of the backup on an external device (such as a USB key).
7. Set-up via a crontab entry, an **incremental backup** of the **/etc/** directory of your cloning-source to be performed every hour to the **/backup/incremental/cloning-source** directory.

## Assignment Submission

The student is required to prove to their professor that their set-up works correctly during the regularly-scheduled lab period.

### Assignment Evaluation Details

- **Demonstrate working assignment to your instructor in class:**
  1. Students can demonstrate their assignment functionality to their professor during a lab period (like you would for any lab for "sign-off").
  2. Students are required to prepare everything ahead of time so that you can quickly demonstrate to your instructor that all required parts of your assignment are working.
  3. The idea of the demonstration of your assignment to your instructor is to check for errors that may cause problems when running the checking script.

- Download and run a shell script to check your work:
  1. Login as **root** on your **host** machine.
  2. Change to the **/root/bin** directory.
  3. Make certain that your **cloning-source VM is running.**
  4. Issue the command to download a checking script for your assignment to your **host** machine: `wget https://matrix.senecacollege.ca/~ahad.mammadov/files/OPS335/check-assn1-p1.bash`
  5. Set execute permissions and run the shell script. It will create a tar file for you to upload as your submission to blackboard.

## Evaluation Rubric
Here is an evaluation rubric (in table form) showing you how you will be evaluated for this assignment. Part of the rubric is marked from professor observation from student demonstration of assignment in class, and the other part is based on output from the results of an assignment checking script that the student will download and run.

| Student Demonstration (optional) |  |
| --- | --- |
| **Evaluation Item**	| **Mark** |
| Created Virtual Network: **335assign** (correct settings)	| /1 |
| Can **ping cloning-source from host machine** with **correct IPADDR**	| /1 |
| root account on host machine can **connect to cloning-source VM** via ssh application **without** password	| /1 |
| cloning-source VM can connect to the Internet (i.e. **ping 8.8.8.8**)	| /1 |
| cloning-source can SSH to student's **Matrix** account	| /1 |
| **Configuration (Checking Script Output)** |  |
| **Evaluation Item**	| **Mark** |
| Hostname set to: **pangaea** only, domain name **continents.earth.ops** set as a network parameter	| /1 |
| **yum update performed**	| /1 |
| **No regular users on cloning source** (just root)	| /1 |
| SELinux status set to: **enforcing**	| /1 |
| firewalld **stopped** and **inactive**	| /1 |
| iptables **active** and **enabled**	| /1 |
| iptables - **All outgoing traffic is allowed**	| /1 |
| iptables - The **host machine** (and only the host machine) must be **able to ssh to the cloning-source**	| /1 |
| iptables - **ICMP traffic is allowed** if it originated with the **local network only**	| /1 |
| iptables - Other unexpected **INPUT** traffic is blocked without response	| /1 |
| iptables - all **FORWARD** traffic is blocked without response	| /1 |
| **correct static network configuration for cloning-source VM** (half mark for each network config item)	| /5 |
| permitRootLogin set to **yes** for cloning-source VM	| /1 |
| Backup script **assnBackup.bash** structure	| /1 |
| Use of **PV** command for backup script	| /1 |
| Proof that **VM full backup** was run	| /2 |
| **Crontab entries executed properly**	| /2 |
| **Incremental Backup** of **/etc/** directory of cloning-source to **/backup/incremental/cloning-source** directory	| /2 |
| **TOTAL**	| **/30** |
