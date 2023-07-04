---
id: assignment2
title: Assignment 2
sidebar_position: 3
description: Assignment 2
---

# Assignment 2

## Purpose

In this assignment, you will use the **335assign virtual network** and the **pangaea** cloning-source that you created in assignment 1 (part 1) to create two e-mail servers: a **Mail Transfer Agent** called **asia** and a _Message Store_ (IMAP) called **europe**. You will also use the **pangaea** cloning source to create a Samba server called **southamerica**. In addition to creating those Linux servers, you will also be required to create a virtual machine for an MS Windows operating system to test-out your Samba server. As you perform and submit this assignment, you **MUST** run the **australinea** Master Name server and **antarctica** Slave server in order to resolve domain names to IP addresses.

## General Requirements

**Weight**: **10%** of the overall grade

**Due Date**: check with your professor

## Detailed Requirements

### Set-up Mail Transfer Agent (asia)

Perform the following steps for this section:

1. Create a clone virtual machine called **asia** from the **pangaea** cloning-source. Refer to the table below for **address** and **hostname**.
2. Only root user on your host machine must be able to ssh to the root account on each machine without being prompted for a password.
3. Create a **regular user** for this virtual machine using **your Seneca userID**.
4. Any machine within the **continents.earth.ops** domain will be able to route outgoing email through this server.
5. Any mail sent directly from this machine will use the domain as the sending address (i.e. user@continents.earth.ops)
6. You are NOT required to encrypt received email messages.
7. This machine will relay received email messages for any user account in the **continents.earth.ops** domain to **europe.continents.earth.ops**.

### Set-up Mail Delivery Agent / Message Store (europe)

Perform the following steps for this section:

1. Create a clone virtual machine called **europe** from the **pangaea** cloning-source. Refer to the table below for **address** and **hostname**.
2. Create a **regular user** for this virtual machine using **your Seneca userID**.
3. Only root user on your host machine must be able to ssh to the root account on each machine without being prompted for a password.
4. This machine will accept incoming email for any user account in the **continents.earth.ops** domain.
5. No other machine in this domain will accept incoming email.
6. This machine will be an **IMAP** server (i.e. NOT POP3 or LTMP).
7. This machine will NOT use encryption.
8. This machine will use postfix's built-in LDA to store received emails in maildir format in a sub-directory of each users' home directory called **mailboxes**.
9. Any mail sent to root will be automatically delivered into the mailbox of the **regular user** created above.
10. Configure your Thunderbird application (installed in Lab 4b) to allow the user to send and receive email messages using the **asia** and **europe** servers.

Add MX records to the forward lookup zone on your master DNS server so that all incoming mail addressed to the domain is sent to your IMAP server (**europe**) first, and the MTA (**asia**) as a fall-back.

### Set-up a Samba Server (southamerica)

Perform the following steps for this section:

1. Create a clone virtual machine called **southamerica** from the **pangaea** cloning-source. Refer to the table below for **address** and **hostname**.
2. Create a **regular user** for this virtual machine using **your Seneca userID**.
3. Only root user on your host machine must be able to ssh to the root account on each machine without being prompted for a password.
4. It will run **Samba** (automatically on boot) to share files with machines in this network.
5. Create three new users on the Samba file server, call them **sarmation-yoursenecaid**, **kaapvaal-yoursenecaid**, and **gawler-yoursenecaid**. (replace "yoursenecaid" with your actual Seneca ID)
6. Create a directory /supercontinents with the following subdirectories:

```bash
/supercontinents
+-- cratons
¦   +-- sarmation
¦   +-- kaapvaal
¦   +-- gawler
+-- pangaeaic
    +-- laurasia
    +-- gondwana
```

7. Set up permissions/ownership on those directories for your Linux users on the file server so that:

    1. **sarmation-yoursenecaid** and **kaapvaal-yoursenecaid** have **read/write** access to their own private directories.
    2. **gawler-yoursenecaid** has **read/write** access to every directory.
    3. Everyone has **read** access to the **laurasia** directory (but only the **gawler** account has **write** access too).
    4. Everyone can both **read** and **write** to the **gondwana** directory.

8. Set up **three** Samba users to mirror your new Linux users.
9. Configure **five** shares (one for each of sarmation, kaapvaal, gawler, laurasia, and gondwana) with permissions as close as possible to the Linux permissions.

### Set-up Client to Test Samba server (southamerica)

Perform the following steps for this section:

1. Create another virtual machine to act as a client to the samba service. If using windows, you can obtain the MS Windows image from Seneca's MSDN section (trial version good for 30 days). Refer to the table below for **address** and **hostname**.
2. Create a **regular user** for this virtual machine using **your Seneca userID**.
3. The root user on your host machine must be able to ssh to the root account on each machine without being prompted for a password (not applicable on Windows).
4. This machine will use the master and slave DNS servers in your domain as the primary and secondary DNS servers. It will not have access to any other DNS servers.

### Network Configuration

As you will now have functioning primary and secondary DNS servers, modify your network configuration file for the **asia**, **europe**, and **southamerica** servers specify the correct IPADDR.

### Table of Virtual Machines / DNS Records

Below is network configuration for ALL virtual machines used in this assignment and previous assignments for this course:

| Hostname / Domain	| Address	| Purpose |
| --- | --- | --- |
| **africa.continents.earth.ops** (your existing host)	| External Facing Address: **DHCP assigned** Internal Virtual Bridge (virbr1): **172.28.105.1**	| Your **host** machine |
| **pangaea.continents.earth.ops**	| **172.28.105.100**	| **Cloning-source** used to create other servers for other assignments. |
| **australinea.continents.earth.ops**	| **172.28.105.2**	| **Master** Name Server |
| **antarctica.continents.earth.ops**	| **172.28.105.3**	| **Slave** Name Server |
| **asia.continents.earth.ops**	| **172.28.105.5**	| **SMTP** mail Server |
| **europe.continents.earth.ops**	| **172.28.105.6**	| **IMAP** mail Server |
| **southamerica.continents.earth.ops**	| **172.28.105.8**	| **Samba** Server |

### Set-up Firewall Policies

In addition to the basic firewall established in assignment 1, ensure the following restrictions are met:

1. Any machine may send smtp traffic to **asia** and **europe**.
2. Only machines in the local network may send IMAP traffic to **europe**.
3. Only machines in the local network may access the samba shares on **southamerica**.

## Assignment Submission

The student is required to prove to their professor that their set-up works correctly during the regularly-scheduled lab period.

### Assignment Evaluation Details

- **Demonstrate working assignment to your instructor in class:**

    1. You need to run their full backup shell script to backup all of your VMs (like you did in Assignment 1 - Part 2.
    2. Students need to demonstrate their assignment functionality to their professor during a lab period (like you would for any lab for "sign-off").
    3. Students are required to prepare everything ahead of time so that you can quickly demonstrate to your instructor that all required parts of your assignment are working.
    4. Do not proceed to the next step until you have demonstrated your assignment to your instructor to check for errors that may cause problems when running the checking script.

- Download and run a shell script to check your work:

    1. Login as **root** on your **host** machine.
    2. Change to the **/root/bin** directory.
    3. Make certain that your **assignment VMs are running**.
    4. Issue the command to download a checking script for your assignment to your **host** machine: `wget https://matrix.senecacollege.ca/~peter.callaghan/files/OPS335/check-assn2.bash`
    5. Set execute permissions and run the shell script.
    6. Upload the resulting file to blackboard.
    7. **Additional Assignment Information:**

        1. This assignment is to be completed individually. **Group submissions are not allowed**.
        2. Test your machine to make sure it works. If a machine is not accessible (e.g. will not boot, can not be accessed through ssh from your host, etc.), or is otherwise non-functional, you may be told to **resubmit**.
        3. **Late submissions are a subject to a penalty of 10% per day.**

## Evaluation Rubric

Here is an evaluation rubric (in table form) showing you how you will be evaluated for this assignment. Part of the rubric is marked from professor observation from student demonstration of assignment in class, and the other part is based on output from the results of an assignment checking script that the student will download and run.

| Student Demonstration (in class) |  |
| --- | --- |
| **Evaluation Item**	| **Mark** |
| **SMTP and IMAP Servers:** |  |
|   - Proof of SMTP Server Running on **asia** server | /1 |
|   - E-mails sent from **asia** and **southamerica** servers to **europe** server (user@IP_ADDR) | /1 |
|   - E-mails sent from **asia** and **southamerica** servers to **europe** server (user@DOMAIN_NAME) | /1 |
| **Samba Server Access via client:** |  |
|   - **sarmation-yoursenecaid** and **kaapvaal-yoursenecaid** have **read/write** access | /1 |
|   - **gawler-yoursenecaid** has **read/write** access to every directory | /1 |
|   - All accounts have **read' access to the** _laurasia_ **directory** (**but only** _manager-yoursenecaid_ has **write** _access_) | /1 |
|   - All accounts can both **read** and **write** to the **gondwana** directory. | /1 |
| **Configuration (Checking Script Output)** |  |
| **Evaluation Item**	| **Mark** |
| **Mail Transfer Agent (asia) - General Configuration** |  |
|   - Postfix MTA settings | /5 |
| **Mail Delivery Agent (MTA) / Message Store (MS) - General Configuration** |  |
|   - Postfix MTA settings | /3 |
|   - LDA settings | /1 |
|   - Email sent to root is delivered to non-privileged user | /1 |
|   - AA (Access Agent – IMAP) settings | /4 |
| **DNS configuration** |  |
|   - Correct MX records exist | /2 |
|   - MX records prioritize access to mail servers correctly | /2 |
| **Samba Server - General Configuration** |  |
|   - Directories shared with correct permissions | /5 |
|   - Samba accounts created (1 mark each) | /3 |
|   - Writing allowed to directories | /1 |
| **Firewall policies** |  |
|   - MTAs allow SMTP traffic | /2 |
|   - AA allows IMAP traffic | /1 |
|   - IMAP traffic limited to local network | /1 |
|   - Samba server allows samba traffic | /1 |
|   - Samba traffic limited to local network | /1 |
| **Less Deductions (One mark per issue for EACH VM):** |  |
|   - Not using zone filenames: **mydb-for-continents.earth.ops and mydb-for-172.28.105** | /1 |
|   - **DOMAIN Name** NOT Resolved | /1 |
|   - **VM hostname** NOT set | /1 |
|   - firewalld **enabled / running** | /1 |
|   - iptables **disabled / not running** | /1 |
|   - No **Yum update** | /1 |
|   - **Services** NOT active | /1 |
|   - Local hostname resolution appears in **/etc/hosts** (1 mark per entry, per vm) | /1 |
|   - Neglecting major safeguards (e.g. no firewall present, firewall allowing all traffic, no active SELinux) (**4 marks per issue, per VM**) | /4 |
|   - Failing to backup VMs (**1 mark deduction for each VM not backed up**) | /1 |
| **TOTAL**	| **/40** |
