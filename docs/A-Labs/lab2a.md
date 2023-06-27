---
id: lab2a
title: Lab 2a
sidebar_position: 3
description: Lab 2a
---

# Lab 2a - Packet Filtering Using iptables

## Objective and Preparation

In this lab, you will learn how to use **iptables** to build a simple **Linux firewall** on your servers.

iptables is a very complex topic. Fortunately, you are not required to become an iptables expert, but by the end of the course, you should be able to use iptables to properly secure your servers.

You were exposed to iptables in your OPS235 course. You should refer to [OPS235](http://zenit.senecac.on.ca/wiki/index.php/Lab_6_Warnings_/_Debrief#Investigation_2:_Networking_Tweaks) or [OPS335](https://prezi.com/akyqt4h40oel/iptables-packet-filtering/) notes or find and use documentation to learn how to complete these tasks. You can also ask your professor or lab assistant during the lab for help when using iptables. Some basic iptables commands are provided in this lab for reference, but it is also essential that you know how to obtain help (man pages and online) in order to become self-reliant.

**firewalld**

In this course, we will be using _iptables_, **not** _firewalld_. Although firewalld can present information in the familiar iptables format, learning both would be too advanced at this point of learning Linux network administration. In the [Prep for Labs](../weekly-schedule.md), you should have disabled and stopped the firewalld service: .

You can also check the status of the firewalld service by issuing the command. You can also check if the firewalld service is running by issuing **iptables -L** and noting a high volume of unexpected output (i.e. "a strange result").


### Online Resources

- [Overview](https://en.wikipedia.org/wiki/Iptables#Overview) A excellent concise overview of iptables (ignore diagram).
- [CentOS Wiki](https://wiki.centos.org/HowTos/Network/IPTables) Listing of basic commands (not all required to know).

### How Firewalls (iptables) Relate to the Labs in this Course

We will use an example of setting up a firewall to secure a web server. You will be installing, configuring, protecting, and maintaining a web-server of one of your VMs in a later lab.

**The diagram displayed below shows how iptables can be used with a web-server:**

![Iptables](/img/Iptables.png)

**There are some important things to be aware of in terms of this diagram:**

- There are **two sets** of IPtables rules (chains) that apply: **OUTPUT/INPUT on the client** and **INPUT/OUTPUT on the server**. It is important to think about trafic from the perspective from the client as well as the server.
- Outbound traffic is rarely blocked unless< there is a security policy to prevent some kind of traffic. Even in that case, that security policy is usually performed on a router.
- **Inbound traffic is of two distinct types**. Our diagram shows:
    1. **New incoming connections** (what you normally think of as **inbound traffic**): the web server receives a **new incoming connection**.
    2. **Incoming data that client receives as a response from the server**: the web page that the server sent back in the diagram above.
    3. The analogy would be like making a telephone call:
        + A **NEW** packet is like the phone ringing
        + An **ESTABLISHED** packet is the connection and the packet says "hello", along with any further communication.
        + A **RELATED** packet would be the same person calling on a second line. (eg. a second connection that is made because of something that happened in the first, like an ftp transfer).
    4. We normally don't want to do anything special for the response. It is safe to assume that **a connection that was allowed to be established should be allowed to receive a response**. This is accomplished with the following **INPUT chain rule** that should be there by default on your machines:

```bash
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
```

- **Rules are applied to: chains** (e.g. _input/output_) and contain information regarding the type of traffic they apply to. For example, **protocols** such as _tcp/udp/icmp_, **port numbers** such as _22_ (SSH), _80_ (HTTP), _443_ (SHTTP), **addresses**, and many other things.
- Let's look at how these rules would apply to a simple web connection (HTTP - port 80):
    1. For the _request_, the **source port (sport) for the example in the above diagram is 40112** and the **destination port (dport) is 80**
    2. For the _response_, the **source port (sport) is 80** and the **destination port (dport) is 40112**
    3. Since the **RELATED**,**ESTABLISHED** rule already exists, we are only concerned about **controlling** the **incoming traffic on the server**, which in our example, **the chain is: INPUT**, the **protocol is: tcp**, and the **destination is: port 80.**
- **Basically, most other services work in a similar way as discussed above.**

### Critical iptables Elements

This may seem like another task to perform, but it is an essential task! You need to "_become one_" with basic iptables and focus on these important elements on this section, since you will be troubleshooting MANY connection issues with MANY VMs for labs and assignments! You need to become comfortable when using iptables to not only set policy, but troubleshoot and fix mistakes when you set your firewall policies!

_The more you practice and get comfortable with iptables, the quicker you will be able to isolate and fix connection issues._

We don't expect you to become firewall experts, but there are some basics that you need to become familiar for this and future labs:
- What is a **chain**?
- **Which chain** applies to which traffic?
- What's the **default action** for a chain and when that applies?
- Understanding the differences between **setting policies**, **adding rules**, and **inserting rules.**
- In what **order are the rules executed**?
- **Reading and/or creating a rule** for a specific service. That includes a basic understanding of:
    + **Protocols**
    + **Ports**
    + Source/Destination IPADDR
    + HWADDR (MAC Address)
    + Network Interface name
- The best way to learn that is to **practice**.

**Record essential concepts from this section into your OPS335 lab log-book**

## Investigation 1: Preparation and Getting To Know iptables

### Confirming Existing Network Connections

Before proceeding with iptables, we should first verify that your **host machine** and **VMs** can connect with each other. We can also take the opportunity to record some observations which could be used for future labs.

**Perform the Following Steps:**

1. Determine the _MAC_ address of the virtual network device on your **host machine** and the _IP address_ assigned to it. Record this information in your lab log book.
2. Launch all three of your **VMs**.
3. For each **VM**:
    - Login as root.
    - Find the MAC address of the **Network Interface** and the **IP address** assigned to it. Record this information on your lab log book.
4. Change to your **host machine**, open a terminal window, and perform the following connectivity tests for each vm:

```bash
ping -c 1 [ip-of-vm]
ssh [ip-of-vm]
```

### Default vs Updated Firewall Rules for VMs

You should have learned in OPS235 how to view existing iptables rules with a command similar to: **iptables -L -v**. Although you may assume that this listing of rules should be empty, they may not be!

In fact, several rules were **automatically added** to your chains because you are using a **virtual network**. As an exercise, we will determine which of those rules were added when running a virtual network.

**Perform the Following Steps:**

1. Leave your VMs running for this section (which seems counter-intuitive).
2. On your **host machine**, stop the **libvirtd** service (refer to [systemctl](http://zenit.senecac.on.ca/wiki/index.php/Init_vs_systemd#systemd_Command_Usage) command), and **restart** the **iptables** service.
3. Run **iptables -L -v** but redirect the output to a text file called **before.txt** (you will be using this file later).
4. You should notice the virtual machine manager no longer lists your vms (i.e. vm1, vm2, or vm3).
5. Close and then restart the virtual machine manager. What Happens?
    - What are the states of your VMs? Record your observations in your lab logbook.
6. Close the virtual machine manager application window again.
7. **Restart** the **libvirtd** service.
8. Now, restart the virtual machine manager (**note**: it should indicate that the virtual machine manager connecting - be patient and wait until you are prompted you to enter the root password). What happens? What is the status of your VMs?
9. What does this mean when you lose your vm connections (including the disruption of the libvirtd service)?
    - Record your observations in your lab logbook.
10. Re-issue **iptables -L -v** commands making certain to redirect output to a second file (**after.txt**). This should provide a listing of the new state of your firewall settings.
11. You now should have two text files representing the before and after states of your firewall. Compare differences between these two files using the **diff** command (You should have used this tool in **ULI101**).
12. Run **diff -u before.txt after.txt** and figure out how to read the output.
13. You can use these tools to compare any two text files, they often come in handy. Note in your lab logbook the iptables rules that were added automatically by the libvirtd service.
14. Are there any differences between those 2 files? What does this mean if your VMs get disconnected in terms of the firewall rules?

**Graphically Compare File Differences:** You can also install a graphical tool that makes it much easier to see differences: kompare before.txt after.txt

**NOTE: Make certain to run the command as a regular user (i.e. NOT root!).**

### Practice Setting Firewall Rules on Host Machine

We will run some iptables commands on your **host machine** to practice and get a basic understanding of how to set rules. We will NOT be saving the iptables rules in this section, so you don't have to worry about "messing-up" your host machine - you can simply reboot your host machine to load the default iptables rules.

Let's set a **default policy** to disable all inbound traffic:

1. Issue an _iptables_ command to set the default policy to disable all inbound traffic.
2. Issue an _iptables_ command to list rules to verify you correctly disabled all inbound traffic.

The remaining iptables rules will relate to that same **inbound** traffic chain:

3. Issue the command **iptables -L INPUT**, and note the rules associated for ssh in your lab logbook.
4. Issue an _iptables command_ to delete the default ssh rule, and issue another iptables command to verify.
5. Issue an _iptables command_ to insert an iptables rule to ACCEPT SSH connections at the **beginning** of the chain (refer to your lab logbook for details).
6. Verify that you inserted that rule at the top of the INPUT chain, and then issue an iptable rule to delete that rule at the top of the chain (i.e. by number), and verify that that rule was deleted.
7. Issue an _iptables command_ to append the SSH rule to the end of the chain, verify, delete that same rule, and verify.
8. Issue an _iptables command_ to delete the related,established rule. Test your network connectivity between your hosts and vms. What happened?
9. **Shut down your VMs and reboot your host machine**. What happens to the iptables rules you created for your host machine? Note in your OPS335 lab logbook how to save and restore your iptables rules, and what the difference of **restoring iptables rules** as opposed to **flushing iptables rules**.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Best Practices and Customized Chains

In this investigation, we will use shell scripting to help automate our firewalls, and create our own customized chains for packet filtering.

### Best Practices for iptables

**Refer to this "best practices" chart when using iptables:**

| Tip	| Explanation |
| --- | --- |
| **Always back-up the default iptables settings**	| When you install iptables in CentOS it already has some rules predefined. Make a copy of the file that creates these rules (including the ones that allow communication with your other machines). This way you can always restore them to have a functional machine even if you completely mess up your rules. |
| **Place your iptables commands (i.e. Rules) within a Bash shell script**	| If you need to reset iptables, then you can run a shell script to quickly re-apply rules to save time. |
| **Don't Panic if disconnected from a VM**	| Some of the traffic between your host and VirtManager goes through IPtables. When you mess with IPtables rules on the host, you might end up losing the console connection to the virtual machines. **Don't worry, the virtual machines are still running and you can still use them once you re-establish your connection**. |
| **If your most recent iptables Rule messes up your system**	| **Reload the default rules**. You can do that by restarting the iptables and libvirtd services (you can also do that at the beginning of your shell script). Then **run your script with all the working iptables commands** that you already finished. **Return to work on creating the rule that didn't work.** |

### Creating Customized Chains

You have the ability to create your own customized chains - you can actually name them!

The purpose of creating your own customized chains is to separate all the rules related to a single service (e.g. SSH, HTTP, FTP, ICMP, etc) from other unrelated rules.

**Perform the following steps for your host machine:**

1. **Stop libvirtd** and **restart iptables** so that you have only the minimal default rules.
2. Make a backup of the original default rules:

```bash
cp /etc/sysconfig/iptables /etc/sysconfig/iptables.original
```

3. Use the **ifconfig** or **ip address** command to determine the IP ADDRESS of your external facing address \[ens33\] (i.e. IP address beginning with **192.168.40.x** if you are using an SSD).
4. Open a terminal on the Windows machine and **ping** your external facing IP address of your Linux host (ens33). Was it successful? (it should have worked)
5. Change the **default policy** on the **INPUT** and **FORWARD** chains in the filter table to **DROP**.
6. Remove the rules from the **INPUT** and **FORWARD** chains (if any) that are **rejecting** all traffic (we are now better protected by the _default_ policy).

    - We will now create a new chain in order to create rules just relating to the **ssh** service:

7. Create a new chain named **MYSSH** in the filter table. Refer to notes or other resources to learn now to name a chain.
8. Add a rule to the **INPUT** chain of your filter table that sends all **ssh** traffic to your **MYSSH** chain. **Make sure this new rule follows (not preceeds) the RELATED,ESTABLISHED rule, so it doesn't apply to existing connections!**
    - **Note**: Use **--jump** or **-j** (not -g or --goto) to move to a target.
9. Add a rule to your **MYSSH** chain to accept all traffic on your virtual interface from **192.168.X.0/24** (i.e. your internal network).
10. Add a rule to the **beginning of your MYSSH chain** that allows traffic from the IP address of your main host (probably Windows or Mac) machine.
11. Add a rule to the **end of the MYSSH chain** to drop all remaining **ssh** connections, but to log these denied packets with log level 'info' and log prefix "DENIED BY MYSSH" before doing so.
12. Remove the rule in your **INPUT** chain that was allowing all **ssh** traffic.
13. Issue **iptables -L -v** to view your firewall rules for your newly-created chain.

Next we'll create a new chain to handle rules relating only to the **ICMP** protocol (ping):

14. Remove the rule in your **INPUT** chain that is allowing all **icmp**.
15. Make a new chain named **MYICMP**.
16. Insert a rule to the **beginning of the INPUT chain** to send **ICMP** packets to your **MYICMP** chain.
17. Find the **IP ADDRESS** and **MAC address** of your Windows machine's internal facing interface (should be an internal address beginning with **192.168.40.x**).
18. Add a rule to your **MYICMP** chain that allows **ICMP** packets coming in from **192.168.X.0/24** (i.e. your internal network).
19. Insert a rule to the **beginning of your MYICMP chain** that denies **ICMP pings** originating with MAC address of your main host (probably Windows) machine.
20. Insert a rule to the **beginning of your MYICMP chain** that denies **ICMP pings** originating with IP address of your main host (probably Windows) machine.
21. Issue **iptables -L -v** to view your firewall rules for your newly-created chains.
22. Attempt to connect to your machine using the external facing address to ensure your rules are working.
    - **NOTE**: Your system logs (such as: **/var/log/messages** or in the case (using a customized chains) the command: **journalctl --dmesg | grep MYSSH** should also show your failed attempts to **ssh** to you with your **customized** message.
23. When you are confident the rules are working, save them by running (**Note** _that this should not include the rules from the virtual network. They will always be added automatically when libvirtd starts._)

```bash
iptables-save > /etc/sysconfig/iptables
```

24. Now start libvirtd again, and test that your firewall still allows the VMs to connect to the host and each other (ping and ssh). Do not continue until it works.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Completing The Lab

Upon completion of this lab, your host machine has a firewall protecting it from unexpected traffic. You should now have a basic understanding of the commands necessary to modify firewalls using iptables. You will be building on these rules for the rest of the course.

### Online Submission

Follow the instructions for lab 2a on blackboard.

## Exploration Questions

1. View your firewall rules using the output of the 'iptables -L -n -v' command. Also save the output to a text file.
2. How could you display the log records generated by your invalid ssh attempts without including any unrelated entries.
3. What iptables rule would you need to add to your firewall to allow a maximum of 3 concurrent ssh connections from your host to your VM1?
4. Which rule in the MYICMP chain is actually responsible for denying icmp packets from your partner? Why?
5. Which optional module could be used to work with packets based on whether they are new connections or not?
