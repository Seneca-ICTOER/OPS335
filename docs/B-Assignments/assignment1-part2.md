---
id: assignment1-part2
title: Assignment 1 (Part 2)
sidebar_position: 2
description: Assignment 1 (Part 2)
---

# Assignment 1 (Part 2)

## Purpose

In this assignment, you will use the **335assign** virtual network and the **pangaea** cloning-source that you created in assignment 1 (part 1) to create two name-servers. One of the cloned VMs (hostname: **australinea**) will be a **master** name server, and the other VM (hostname: **antarctica**) will be a **slave** name server. You will install and setup the master and slave servers in order to provide various domain name resolutions for existing servers, and for servers that will be created and used in assignment #2.

## General Requirements

**Weight**: **7.5%** of the overall grade

**Due Date**: check with your professor

## Detailed Requirements

**It is YOUR responsibility to Backup all of your VMs for this Assignment!**

You are required to frequently backup your VMs prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

### Set-up Master Name Server (australinea)

Perform the following steps for this section:

1. Create a clone virtual machine called **australinea** from the **pangaea** cloning-source. Refer to the table below for **address** and **hostname**.
2. Create a **regular user** for this virtual machine using **your Seneca userID**.
3. Setup a DNS server on your **australinea** virtual machine noting the following items below:
    1. This virtual machine will be the **Master DNS server** for **continents.earth.ops**.
    2. Only **antarctica** will be allowed to obtain zone transfers of this zone.
    3. This machine will provide **forward** and **reverse** lookups of ALL virtual machines in the **continents.earth.ops**. zone, including resource
    4. records for virtual machines that do not currently exist.
    5. You MUST use the following names for both the forward and reverse zone files in **/var/named** directory: **mydb-for-continents.earth.ops** and **mydb-for-172.28.105**
    6. Any machine in the **continents.earth.ops** network may use this machine to perform queries of machines outside the network, however it will route all such queries through the DNS server you created in lab #3.
    7. For machines outside the **continents.earth.ops** domain, it will only answer queries about machines inside the network. They may not use it to query other machines.

### Set-up Slave Name Server (antarctica)

Perform the following steps for this section:

1. Create a clone virtual machine called **antarctica** from the **pangaea** cloning-source. Refer to the table below for **address** and **hostname**.
2. Create a **regular user** for this virtual machine using **your Seneca userID**.
3. Setup a DNS server on your **antarctica** virtual machine noting the following items below:
    1. This virtual machine will be the **Slave DNS server** (in case the Master Name Server goes down).
    2. This virtual machine will obtain its zone files by copying them from the Master Name Server.
    3. This Slave DNS server will check for updated records from the Master DNS server every three days. If the initial attempt fails, then it will attempt every twenty-four hours until it succeeds, or three weeks have passed.
    4. This machine will provide **forward** and **reverse** lookups of ALL machines in the **continents.earth.ops** zone, the zone files for which will be obtained from **australinea.continents.earth.ops**.
    5. Only machines within the **continents.earth.ops** domain will be allowed to query this machine.
    6. This machine will not provide recursive lookup capabilities for any machines.

### Network Configuration

As you will now have functioning primary and secondary DNS servers, modify your network configuration file on these machines and on the **cloning source** to specify the correct IPADDR.

### Table of Virtual Machines / DNS Records

**All** the machines in the following table **require DNS records**. The rows not shaded represent future servers that will be created in Assignment #2.

| Hostname / Domain	| Address	| Purpose |
| --- | --- | --- |
| _africa.continents.earth.ops_' (your existing host)	External Facing Address: **DHCP assigned** Internal Virtual Bridge (virbr1): **172.28.105.1**	| Your **host** machine |
| **pangaea.continents.earth.ops**	| **172.28.105.100**	| **Cloning-source** used to create other servers for other assignments. |
| **australinea.continents.earth.ops**	| **172.28.105.2**	| **Master** Name Server |
| **antarctica.continents.earth.ops**	| **172.28.105.3**	| **Slave** Name Server |
| **asia.continents.earth.ops**	| **172.28.105.5**	| **SMTP** mail Server |
| **europe.continents.earth.ops**	| **172.28.105.6**	| **IMAP** mail Server |
| **southamerica.continents.earth.ops**	| **172.28.105.8**	| **Samba** Server |

### Set-up Firewall Policies

In addition to the basic firewall established in assignment 1, ensure the following restrictions are met:

1. Any machine may query **australinea**
2. Only the machines in the **continents.earth.ops** network may query **antarctica**.

## Assignment Submission

The student is required to prove to their professor that their set-up works correctly during the regularly-scheduled lab period.

### Assignment Evaluation Details

- **Demonstrate working assignment to your instructor in class:**
    1. Students need to demonstrate their assignment functionality to their professor during a lab period (like you would for any lab for "sign-off").
    2. Students are required to prepare everything ahead of time so that you can quickly demonstrate to your instructor that all required parts of your assignment are working.
    3. **Do not proceed to the next step** until you have demonstrated your assignment to your instructor to check for errors that may cause problems when running the checking script.

- Download and run a shell script to check your work:
    1. Login as **root** on your **host** machine.
    2. Change to the **/root/bin** directory.
    3. Make certain that your **assignment VMs are running**.
    4. Issue the command to download a checking script for your assignment to your host machine: `wget https://matrix.senecacollege.ca/~peter.callaghan/files/OPS335/check-assn1-p2.bash`
    5. Set execute permissions and run the shell script.
    6. Upload the resulting file to blackboard.

## Evaluation Rubric

Here is an evaluation rubric (in table form) showing you how you will be evaluated for this assignment. Part of the rubric is marked from professor observation from student demonstration of assignment in class, and the other part is based on output from the results of an assignment checking script that the student will download and run.

| Student Demonstration (in class) |  |
| --- | --- |
| **Evaluation Item**	| **Mark** |
|   - **australinea** and **antarctica** VMs created | /1 |
|   - **australinea** and **antarctica** VMs can perform **DNS queries of vm1, vm2, vm3** | /1 |
|   - **australinea** and **antarctica** VMs can perform **forward DNS lookups** for ALL machines within network (listed in the table above) | /3 |
|   - **australinea** and **antarctica** VMs can perform **reverse DNS lookups** for ALL machines within network (listed in the table above) | /3 |
|   - Zone transfer occurs | /3 |
| **Configuration (Checking Script Output)** |  |
| **Evaluation Item**	| **Mark** |
| **Master Name Server (australinea) - Network Configuration** |  |
|   - **correct static network configuration** (one mark for each network config item) | /5 |
| **Master Name Server (australinea) - Named Configuration Options / Zone Declarations** |  |
|   - Zone transfer (i.e. to slave DNS server) limited to **antarctica** only | /1 |
|   - Allows forward and reverse lookups to **continents.earth.ops** | /1 |
|   - **Recursion** limited to **continents.earth.ops** only | /1 |
|   - australinea server is the **master** name-server for continents.earth.ops | /1 |
| **Master Name Server (australinea) - Zone Record** |  |
|   - **SOA** - three common options (determined by instructor at time of marking) | /3 |
|   - Correct **NS** records in forward zone | /2 |
|   - Correct **NS** records in reverse zone | /2 |
| **Slave Name Server (antarctica) - Network Configuration** |  |
|   - **correct static network configuration** (one mark for each network config item) | /5 |
| **Slave Name Server (antarctica) - Named Configuration Options** |  |
|   - Queries are limited to **continents.earth.ops** | /1 |
|   - Slave server is **Non-recursive** | /1 |
|   - Allows forward and reverse lookup for **continents.earth.ops** | /1 |
|   - antarctica server is **slave** name-server for **continents.earth.ops** | /1 |
| **Firewall policies** |  |
|   - **australinea** allows queries from any machine (i.e. will work with **vm1**, **vm2**, **vm3**) | /2 |
|   - **antarctica** limits queries to **continents.earth.ops** (i.e. won't work with **vm1**, **vm2**, **vm3**) | /2 |
| **Less Deductions (1 mark per issue for EACH VM):** |  |
|   - Not using zone filenames: **mydb-for-continents.earth.ops** and **mydb-for-172.28.105** | /1 |
|   - **VM hostname** NOT set | /1 |
|   - firewalld **enabled** / **running** | /1 |
|   - iptables **disabled** / **not running** | /1 |
|   - No **Yum update** | /1 |
|   - **Named** NOT active | /1 |
|   - Local hostname resolution appears in **/etc/hosts** (1 mark per entry, per vm) | /1 |
|   - Neglecting major safeguards (e.g. no firewall present, firewall allowing all traffic, no active SELinux) (**4 marks per issue, per VM**) | /1 |
|   - Failing to backup VMs (**1 mark deduction for each VM not backed up**) | /1 |
| **TOTAL**	| **/40** |
