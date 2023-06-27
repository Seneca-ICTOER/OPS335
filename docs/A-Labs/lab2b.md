---
id: lab2b
title: Lab 2b
sidebar_position: 4
description: Lab 2b
---

# Lab 2b - Additional iptables Troubleshooting

## Objective and Preparation

In Lab 2a, we set the firewall rules for your **host** machine. In this lab, we will **create firewall rules for our virtual machines** within our virtual private network. This lab will also apply **best practices** and **troubleshooting techniques** using iptables.

### Online Resources

- [Troubleshooting iptables](http://www.microhowto.info/troubleshooting/troubleshooting_iptables.html)

## Investigation 1: Custom iptables Rules On A VM

We will now **set iptables rules for your vm1 machine.**

**Perform the following Steps:**

1. Start your **host** machine, and launch your **vm1** machine.
2. Login to your **root account** on your **vm1** machine.
3. Issue a command (like you did in lab2a) to copy your default iptables rules to the file pathname: **/etc/sysconfig/iptables.original**
4. Issue an _iptables command_ to set the policy to disable **all forwarding traffic**, and remove the rule that is rejecting it.
5. Next, set the default policy to drop **all inbound traffic**, and remove the rule that is rejecting traffic.
6. Issue an iptables command to list rules for verification.

    - The remaining tasks will relate to that same **inbound** traffic chain:

7. Issue an _iptables command_ to delete the default ssh rule.
8. Issue an _iptables command_ to add a rule that allows ssh traffic (i.e. tcp packets with destination port 22) that originates from any machine within your virtual network.
9. Issue an _iptables command_ to delete the default icmp rule.
10. Issue an _iptables command_ to allow icmp traffic from addresses in your virtual network.
11. Test that your machines can still use ping and ssh to communicate with each other.
12. Save your rules in the location that iptables will automatically read from when it starts.
13. Reboot your machine and check that the new rules are being applied. If they are not, resolve this issue before moving on.
14. Now copy the file to your other VMs and make it apply to them when they boot as well.
15. Reboot each machine and make sure this works before you move on.

**Record your observations in this section on your OPS335 lab log-book**

## Investigation 2: iptables Troubleshooting Checklist

By now, you have probably discovered that a simple mistake in your iptables rules can have very serious and unexpected consequences for not only your services, but the network connectivity in general. There is a general process (checklist) that you can following to help troubleshoot iptables in order to fix the problem.

**Refer to the following IPTABLES Troubleshooting Checklist:**

| Step	| Procedure	| Explanation |
| --- | --- | --- |
| **1**	| **Test Network Connectivity**	| You can use the [steps in lab 1](lab1.md#linux-network-connection-configuration-troubleshooting) as a guide, but keep in mind the firewall may be blocking pings and DNS requests. |
| **2**	| **Verify Service is Running & listening on the correct interfaces**	| You should learn to read the output of **ss -atnp** and **ss -aunp** to complement the **systemctl status** command. |
| **3**	| **List your iptables Rules & Perform a "Walk-Thru"**	| For many decades, when troubleshooting programs that don't run properly, programmers will resort to reading their "source-code" line-by-line and pretend they are the computer to perform the operation. The programmer "walks-through" the code to force them to think like a computer in order to spot and fix subtle problems. Therefore, you can follow a packet's path as you understand it should follow. Keep in mind [the diagram from the lecture last week](./lab2a.md#how-firewalls-iptables-relate-to-the-labs-in-this-course). What chain applies first on which machine? What's the first rule that matches the packet? What happens if no rules match the packet? Don't forget that even if you're tracing the path of outgoing traffic - the INPUT chain on your machine still applies (for the response that comes back to your request). |
| **4**	| **Use the log target to list unexpected traffic**	| Add a final rule to your input chain to log all traffic. Any traffic you are allowing will have already been accepted and will not reach this rule, so you will start a log of all the packets you are not allowing. Observing the logs while you attempt to use the service that is not being allowed will show you the type of traffic you need to allow. |
| **5**	| **Verify Network Connectivity by Deleting iptables Rules**	| As a last resort, if you have no idea what's going on and need to confirm that you're still sane - clear all the iptables rules and check your configuration then. Keep in mind that the **iptables -F** command will delete all your rules but will not set the default policies to ACCEPT. This will tell you for sure whether your problem was (or was not) caused by iptables. Stopping the iptable service with **systemctl stop iptables** will also clear all iptables rules. Additionally, it will reset all policy to ACCEPT. If you do this - have a ready way to restore the rules you just deleted. Restarting the iptables service is usually a good start and a **shell script** to add your custom rules is a reasonable next step. Don't forget to restart libvirtd service as well if this is being done on a kvm host |

At this point, you should be able to understand any iptables rules you experience in this course, including the default ones in CentOS. If you see a iptables rule that you don't understand, you can delete it and see what happens. But if you simply delete this rule, take the time to figure out what that rule did and why you needed to delete it. It was likely there for a purpose (other than to drive you crazy).

**Record the troubleshooting checklist in your OPS335 lab log-book**

## Investigation 3: Hands-On iptables Troubleshooting

You will now get additional practice on troubleshooting iptables by downloading a running a shell script that will create iptables rules that will cause problems. You will then need to use tools and procedures (IPTABLES Troubleshooting Checklist) to determine the cause of the problem and fix that problem.

**Perform the following steps on your HOST:**

1. Download and run the following script: http://scs.senecacollege.ca/~andrew.smith/ops335/lab_practice_iptables.sh

    - This will display a menu of exercises. You can choose any of the items in order, but you should attempt all of them. The script will first reset the firewall settings to CentOS defaults and then make some modifications from those defaults.

2. Troubleshoot and fix the problem as you would on a real server. The point of the exercises is for you to find the problem using regular troubleshooting tools, not to reverse-engineer the shell script.
3. Finish the exercises, and record any information you feel you'll need to remember to solve problems like this in the future (e.g. in an assignment and/or in a practical test).

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record your observations in this section on your OPS335 lab log-book**

## Completing The Lab

In completing this lab you have gained further practice using iptables. Each of your machines should now be protected by a custom firewall that we will continue to build on throughout the course. You have also gained experience troubleshooting iptables and determining what rules might need to be changed to allow desired traffic (or block undesired traffic).

### Online Submission

Follow the instructions for lab 2b on blackboard.

## Exploration Questions

1. List 3 separate techniques that you used to help troubleshoot to detect and fix iptables from running the shell script in the previous section.
2. Without looking at the table above, list tips for troubleshooting iptables.
3. After completing this lab, how does the above-mentioned shell script work to cause problems with iptables?
