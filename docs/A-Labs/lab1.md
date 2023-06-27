---
id: lab1
title: Lab 1
sidebar_position: 2
description: Lab 1
---

# Lab 1 - Network/Backup

## Objective and Preparation

In OPS235, you learned how to configure a virtual private network for your **vm1**, **vm2** and **vm3** virtual machines. You were required to configure a static network connection for your VMs. In OPS335, you will also be setting up a static network connection for all of your VMs (which all VMs will be text-based). All of the services that we install and configure for this course **require a working network connection**; therefore, it is very important that you know how to configure a network connection for your VMs, whether via command line for trouble-shooting purposes, or to create a persistent (permanent) network connection that uses static IP address (as opposed to DHCP).

This lab is a review of the material from labs 6 ( [CLI Network Configuration](http://zenit.senecac.on.ca/wiki/index.php/OPS235_Lab_6_-_CentOS7#Part_4:_Configuring_VM_Network_Setup_via_Command_Line_.28centos3.29) ), but will also additional topics.

### Online Resources

- [ip vs ifconfig](https://www.tty1.net/blog/2010/ifconfig-ip-comparison_en.html)
- [rsync Howto](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps)
- [Cron HowTo](https://help.ubuntu.com/community/CronHowto)

## Investigation 1: Basic Network Configuration (Revisited)

Remember how you set up the network interfaces in your virtual machines in OPS235? You are expected to be familiar with how to configure and test out a VM's network connectivity at this point.

### Checking Your Current Network Settings

In OPS235, you have used the **ifconfig** and **route** commands. In this course we'll use the **ip** command instead, so that you'll be familiar with both sets of commands.

**Perform the following steps:**

1. View the table below comparing _older_ vs _newer_ methods of obtaining network setting information for a Linux machine.

**Comparison of Older and Newer Methods of Obtaining Network Settings**

| Purpose |	Older Method (command) |	Newer Method (command) |
| --- | --- | --- |
| Obtain IP ADDRESS and Subnet Mask	| **ifconfig**	| **ip address** |
| Obtain Default Gateway	| **route -n**	| **ip route** |
| Obtain DNS Server	| **nslookup**	| **more resolv.conf** |
| Obtain Hostname	| **uname -n**	| **uname -n** |
| See MAC cache	| **arp -n**	| **ip neighbour** |

2. Run the **ifconfig** command on your **host** machine. Check and record the IPADDR for your default (dhcp) network interface card (possibly eno1) and the virtual bridge.
3. Issue the **ip** command on your **host** machine to determine the IPADDR and GATEWAY information (refer to above chart). How are the result similar or different than the ifconfig command?
4. Issue the ifconfig command on your VMs. what happened?
5. Use the **ip** command for your VMs to list the IPADDR and GATEWAY information.
6. Refer to the man pages or refer to following article [10 Useful ip Commands](http://www.tecmint.com/ip-command-examples/) to see how to issue the above commands to create a temporary connection to your existing network.

### Making Persistent (Permanent) Network Setting Changes

In your OPS235 course, you used a series of commands (ifconfig, route, and nameserver) to setup a temporary network connection. You can use the ip command (a another command) in a similar way to create a temporary network connection. The problem with this network connection method is that those changes will be lost if you restart your Linux machine, although you may want to do that to create a temporary network connection for troubleshooting purposes.

In order to have your network settings become permanent, you need to edit and save the settings changes in a file. For the IP address, subnet mask, default gateway, and DNS server you edit that file is contained in a directory called **network-scripts**.

**Perform the following steps:**

1. Change to the _network-scripts_ directory (see your _OPS335/OPS235/ULI101_ notes).
2. The name of the file that contains your persistent network settings has the following name format: **ifcfg-interfacename**
3. Which file-name in your network-scripts directory do you think contains your current network settings?
4. View the contents of the file to see if it contains the IP address, subnet mask, and default gateway.
5. What is the MAC address if your current machine?
6. Does this file contain the hostname of your machine? If not, what command can allow you to change your machine's hostname?

Except for your host machine, all the Virtual Machines in this course will have **static network configuration** (as opposed to Automatic or DHCP). Sometimes, you will be required to debug networking problems quickly by changing the network configuration of your VMs.

7. Edit the **ifcfg-interfacename** (most likely ifcfg-eth0) file for each of your VMs to use a static IP address (refer to previous OPS235 lab on networking: [ Network Config - CLI ] (ADD LINK).
    - You should be configuring the BOOTPROTO (**static** instead of dhcp), IPADDR, PREFIX (or NETMASK), GATEWAY, HWADDR, and DNS1 for this file. Note the following information for this setup:
    - Set your IPADDR for each VM with the following rules:
        1. Your IPADDR's third octet will use the last 2 digits in your student number.
        2. Make certain that the 4th octet for your VMs does not start with 1 since that is reserved by your host machine. (Use the recommended fourth octets: **2 for vm1**, **3 for vm2**, and **4 for vm3**.)
    - Don't forget to set the default gateway and DNS server for your VMs. You can use your host's IP address as a gateway and DNS server (_libvirt_ will proxy the requests to the real DNS server).
    - You can refer to your previous lab to obtain information for setup of these options: [ Configuring a VM Host ] (ADD LINK)

8. Make note of the files used and entries required and note them in your lab log-book.
9. Save your editing session, and then restart each VM and run the following command to ensure they still have the network configuration you set:
    - **ping** (what is the purpose of this command?). Try to ping google from your host machine.
        - Try to ping google from each of your VM's to ensure you can reach the outside world.
    - **ssh** (into another server, like Matrix)

10. After setting the network configuration for EACH VM, then either the the ifdown and ifup commands or reboot each VM, to verify that you can connect to the Internet with the new static IP network configuration. If you cannot connect to the Internet, then check the network configuration file and make corrections until you have a workable network connection for each VM from boot-up.

If you are uncertain how to perform those above-listed operations by member, take time to practice them. If everything works and you are comfortable with these operations then you may proceed to the next section.

### Linux Network Connection Configuration Troubleshooting

If the network works in your host, but not in your Virtual Machine, you should perform the following routine steps to troubleshoot the network connection:

1. **IS THE NETWORK ON VM PLUGGED IN**? On a physical network you would check whether the cable is plugged in and the link light is on on your network card. In a virtual network environment, you don't have a physical network adapter. Instead, you will need to check the NIC settings in the **virtual** machine details to view and confirm the appropriate network connection.
2. **IS THE NETWORK ENABLED**? This is a problem more common with virtual networks than physical networks. Check in: **VirtManager-\> ConnectionDetails-\> VirtualNetworks** that your network is active.
3. **DO YOU HAVE AN IP ADDRESS**? Run **ip address** to check.
4. **CAN YOU PING THE HOST BY IP**? (by its internal IP address). If not - check all of the above, check if you have an IP address conflict, and check that your subnet mask is correct.
5. **CAN YOU PING 8.8.8.8**? If all of the above work - check that your default gateway is set correctly with **ip route** and that you can ping the default gateway.
6. **CAN YOU RESOLVE google.ca**? Run **host google.ca**. If the output doesn't provide an IP address, check that your DNS server is configured correctly and that you can ping that address.
There are a number of other problems that could prevent your network connection from functioning but the above are the most common problems.

**Run Script to Break Network Connection for Troubleshooting**

You will now download, set execute permissions and run a Bash shell script to try to "break" the network connection for your vm1. This will provide troubleshooting practice to check your network configuration file, look and correct errors and restart your network interface connection.


Perform the Following Steps:

1. Move to your **vm1** machine and make certain that you are logged in as **root**.
2. Make certain that the **wget** command is available on your VM. If not, install the wget application. Make certain to do for ALL of your VMs.
3. Use the **wget** command (with option "--no-check-certificate" ) to download and run the following shell script: http://scs.senecacollege.ca/~murray.saul/ops335/break-network.bash
4. When you have run that shell script, it should automatically restart your vm1.
5. Login to your vm1.
6. Use the commands taught in this lab to confirm if your network connection is broken.
7. Carefully check your configuration to see if there is a change to your settings
8. Try to temporarily connect to the Internet
9. Edit your network settings file to make the changes permanent
10. Test your connectivity (including after a reboot of your vm1)
    - **Note**: You should be able to go through that troubleshooting process pretty quickly. Setting up the network in this course is never a primary task, but it's almost always a prerequisite for anything else we're going to do. You can't have a working web server (or any other kind of server) if you don't have a working network connection.


**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Configuring SSH

The default (and often the only way) to administer a Linux server is via SSH. Even if you work in a graphical Linux environment, it is very useful to open a terminal and use SSH to monitor and manage your VMs (you can resize the terminal window). Using SSH to connect to remote servers on a network helps to protect your Linux machine from being penetrated. You can also generate a private and public encryption key for the root user, and copy that public key from your host to your VMs in order to allow certain backup programs to run via a scheduling daemon (called cron) without having to be required to enter the password for the remote machine. You will be doing those operations later in this lab.

### Managing Services

The SSH server should already be installed and running in your VMs. If it's not installed, you can install **openssh-server** using yum. It is essential for CNS/CTY students to become comfortable managing services since you will need to constantly stop services, change their configuration, and start them for the configuration changes to take effect in nearly every topic this semester, and for other courses involving Linux network management.

**Perform the following steps:**

1. Note the following [systemctl](http://zenit.senecac.on.ca/wiki/index.php/Init_vs_systemd#systemd_Command_Usage) commands (refer to man pages or the Internet) and become comfortable using them:
    - **systemctl list-units --all**
    - **systemctl start/stop**
    - **systemctl enable/disable**
    - **systemctl status**
2. Launch your **vm2** machine, login to the machine, and open a shell terminal.
3. Use one of the commands above to check the status of your SSH server (i.e. service: _sshd_).
4. Issue one of the above commands to stop of the ssh server and run a command to verify that the ssh server is no longer running.
5. Issue another one of the above commands to start the SSH server and to verify that it is running.
6. Issue a command to confirm that the ssh service will run upon when the vm2 server restarts (i.e. "enabled").

### Configuring the SSH Service

A common (if somewhat blatant) way to try to hack into a machine is to try to ssh as **root** and brute-force root's password. The root user always exists, meaning the attacker doesn't need to try guessing what user names are on your system. If they can get access to root, they can do anything. To prevent this, we will edit the configuration file for the ssh service to prevent root from ssh'ing into your host machine.

**Perform the following steps:**

1. Login to your Centos **host** machine for the following steps.
2. Use the more command to display **/etc/ssh/sshd_config** on your host. This file contains the configuration parameters for the ssh service.
3. Take a few moments to view this file. Lines that begin with # are comments. Either simple explanations of parameters, or parameters that have not been set.
4. Open the man page for **sshd_config**. This lists all the possible parameters in alphabetical order along with a brief explanation of what each one does. The parameter we are looking for is **PermitRootLogin**, read its description.
5. Use a text editor to edit the file **/etc/ssh/sshd_config**, and find the line that has **PermitRootLogin**. By default it is set to yes, allowing the root user to ssh in to the machine.
6. Uncomment **PermitRootLogin**, and change the value to **no**.
7. Try to use ssh from one of your VMs to log into your host as root. What happened?
8. This is because (for most services) the **changes you make to the configuration file will not take effect until the service restarts**.
9. Restart the sshd service on your host and try to ssh in again. Now it should prevent you.
10. The option **PermitRootLogin** for **all of your VMs** for both labs and assignments MUST be set to **yes**. The reason for this is that you have created a virtual network, so you have protected the host from root login, so you don't have to do the same for your VMs. Also, by allowing root login for your VM's will allow you to automatically backup your VMs to your host machine (via a crontab entry) without being prompted for a root password for each VM.
    - **Note**: Configuration files for most services follow a very similar format. Some use an = between the parameter and its value, some require you to group certain parameters together, and most use # to be a comment. You will get lots of experience working with the configuration files for services in this course.

### SSH Key Concepts

After performing lab7 in OPS235, you should have a basic understanding of ssh and public/private key cryptography to create secure connections between servers. The public key can be "shared" with other server accounts, and can be used in conjunction with your private key in order to help encrypt/de-crypt data.

The diagram below is shared from [Sébastien Saunier's blog](http://sebastien.saunier.me/blog/2015/05/10/github-public-key-authentication.html). It demonstrates how SSH key authentication works. It's not a complete diagram, but it helps see all the parts of ssh key authentication in one place.

![SSH Connection Explained](/img/Ssh_connection_explained.png)

Put this book on your "must-read" list. You can borrow a copy from the Toronto Public Library. I have yet to see a better introduction to encryption. It's not a reqirement for OPS335 - but if you want to not be clueless about security fundamentals online - read that book and understand it.

![Crypto](/img/Crypto.jpeg)

### Generating a Public/Private Key Pair & Sharing the Public Key

The public/private key pair needs to be generated on and used on your **host** machine (i.e. the user/machine you're connecting **from**). The private key is the equivalent of a _password_ (that is why it is considered to be _private_ - only to be used by _one_ owner). That is why the private key is stored in the owner's **~/.ssh/** directory.

One very common mistake that students make is to either generate the key pair for the wrong account, or copy the public key to the wrong account on the intended remote machine.

**Perform the following Steps:**

1. Make certain you are in your **host** machine.
2. You will be creating a **key-pair on your host machine with no password** (i.e. when generating keypair press enter for all prompts including the password).
3. Make certain you are logged on as **root** on your host machine.
4. Generate the key-pair by issuing the command:

```bash
ssh-keygen -t rsa
```

   - **NOTE**: When issuing this command, you will end up with the files: **~/.ssh/id_rsa** and **~/.ssh/id_rsa.pub** (private and public keys). So far, this topic is generally a repeat of OPS235 lab7. What you may **not** know is that by using a "**trick**" (the _magic_ of public key cryptography), you can SSH to a Linux machine without using a password! Learning to perform this trick is **essential** in this course and in the industry in general. SSH keys are used everywhere that Linux servers are used.
   - If you have the private key, you can prove to someone who has your public key that you are indeed the **actual owner of that public key**. That is how ssh key authentication works. You are then only required to transfer your public key to a remote server.

5. You are going to share the public key from the **root user in your host machine** with the **root user of your vm1 machine**.
6. Copy the contents of your **~/.ssh/id_rsa.pub** from your host machine and append to **~/.ssh/authorized_keys** on each of your Virtual Machines. In your case, you will issue the following command 3 times (for each vm IPADDR):

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@IPADDR_for_vm
```

   - **NOTE**: Press ENTER for all prompted information including the password (although this may seen counter-intuitive!).

7. Use the ssh command to test each ssh connection between your host and each virtual machine that you can connect to the VMs without having to use a password. This is essential to create backups from VMs to your hostmachine without being prompted for password.

**Errors in Copying Public Key from Host to VM:** If you experience an error when copying the public key from your hostmachine to your VM, it is most likely caused from not permitting root login that you performed in the previous section. Set to allow login from root for each vm, restart your sshd service and then re-run the above command.

After you perform either of those operations, you can then ssh into a remote vm without a password.

**NOTE**: Always remember that these keys are **per-user**, **not per machine**. This means that sharing a user's public key will only work for that specific user.

## Investigation 3: Performing and Automating Backups

Data backups are considered to be an insurance policy. Running backup can be tedious, but they MUST be performed in an accurate and consistent basis, since loss of data can be expensive (For example: cost of hiring staff to re-enter data).

When performing labs or assignments in this class, if you fail to make backups and something bad occurs and there is loss of data, it only affects you. On the other hand, if you are supporting a client, or working for a company and fail to adequately perform backups and there is loss of data, then other users are affected by failure to backup essential data.

### Performing Full Backups

A full backup represents backing up of all of the files of a computer machine (in our case, a VM). A full backup should be performed at the end of each lab or assignment working session.

In OPS235, you learned to use the command **gzip**, **gunzip** (plus **virsh dumpxml** / **virsh define** if backing up to external storage device like a usb key) to backup your virtual machines. We will use the same method to perform a full backup for these labs and assignments.

**Perform the following steps:**

1. Make certain that your virtual machines are NOT running.
2. Make certain that you are logged in as **root** user on your host machine.
3. Refer to OPS235 lab2 on backing up your VMs using the **gzip** command [OPS235 Lab2 - Backing up VMs] (ADD LINK)
4. Make certain that you have performed a full backup for **vm1**, **vm2**, and **vm3**.
    - It is recommended to create a Bash shell script to automate the backing up of ALL your VMs in sequence. You can do this by running a for loop using a list for vm1, vm2, and vm3 image file pathnames.

5. Create the sub-directory **/root/bin/**
6. You should know how to create full backups of your VMs in your OPS235 course. Create a Bash shell script called:
    - **/root/bin/fullbackup.bash** that will backup all of your other vms (i.e. vm1, vm2, and vm3) one at a time using the **gzip** command to your host machine into the directory path-name: **/backup/full/**
7. Set execute permissions, and run the shell script to verify that you shell script works.
8. It is also recommended to backup to your USB key as well (qcow2 images and xml config files).

It will be your responsibility as an administrator of your own Linux system, to backup all of your VMs for labs and assignments at the end of your lab session. Learning to create shell scripts to automate routine tasks (such as backups) will be EXTREMELY useful for your NDD430 course.

### Performing Incremental Backups

An incremental backup is a backup of only files that have changed since the last backup. In your case, it may be a good idea to perform incremental backups of your **/etc/** directory for your VMs upon startup. We will be using the **rsync** command to perform incremental backups for all of your VMs.

**Rsync** is a very versatile backup tool. As the name suggests, rsync is used for synchronizing files typically across a network. It works over the **SSH** protocol, which is useful in our situation since we are running ssh on our server and VMs. You are going to use your _host machine_ to backup files from the _virtual machines_.

**Perform the following steps:**

**Rsync Needs to be Installed on ALL VMs:** Since you select minimum install on your VMs, the rsync command was not installed by default. You need the rsync command to be available on your host machine and all of your VMs. Make certain that the rsync command is installed on all your vms.

1. Make certain that your **vm1** machine is running.
2. Make certain that you are logged in as **root** user on your host machine.
3. On your **host machine**, run the following commands:

```bash
mkdir -p /backup/incremental/vm1
rsync -avz 192.168.x.x:/etc /backup/incremental/vm1/     # where 192.168.x.x is the IPADDR of your vm1
```

   - **NOTE**: This command will **NOT** work if **permit root access is denied for your VMs** for your sshd service configuration, so keep it off for now...

4. If rsync prompts for a password, make certain that you completed the **SSH key** section above, and that you assigned the keys for the appropriate user (in this case, for the **root user for both the hostname and vm1**!)
5. When the rsync command runs correctly, you should see all the files from vm1 being copied over to your host machine.
6. Run the rsync command again. Notice that the second time nothing is copied over to your host machine since none of the files have changed on your vm1 machine.
7. Create a new file in vm1's **/etc/** directory, and rerun **rsync**. Confirm on your **host machine** that only that file that was created on your vm1 machine actually got backed up to your host machine.
8. Repeat the above steps to create backups for your **vm2** and **vm3** machines on your host machine as well (for the respective directories: **/backup/incremental/vm2** and **/backup/incremental/vm3**).

### Automating Backups (cron)

Since your host machine and VMs are **not continuously running, you are not required to schedule to perform your FULL BACKUPS periodically** (eg. every week at 2:00 AM). Instead, it will be YOUR responsibility to run your full backup script when you complete each of your OPS335 labs, or when you finish your OPS335 assignment working session. On the other hand, **you will use cron to perform incremental backups** (eg. copy updated files from the VMs/ /etc/ directory)

**Cron** is a _daemon_ (i.e. a program that runs in the background). The term "_Cron_" is short for **Chronograph** which was an old fashioned term for a **stop watch** or **timer**. The role of **Cron** is to run tasks periodically. It can run tasks for the system (as root) or for a user (including regular users). Every user has a crontab (Cron Table) which is a list of tasks they want to run periodically. You do not edit this file manually: instead, you edit this table using the command **crontab -e**. Once you run the command, you will get an empty file where you have to insert a line like this:

**Perform the following steps:**

1. Refer to the following WIKI to learn how to use cron: [crontab tutorial] (ADD LINK)
2. In your host machine as root, modify the setting so it will run that echo command every minute by creating a crontab (via **crontab -e**) entry with the following line:

```bash
* * * * * echo "Cron ran this job at: "`date` >> /tmp/cron.log
```

3. Save and exit your crontab edit session.
4. Wait for one minute to pass, and check the **/tmp/cron.log** file to see if it was created with the expected contents. (You can also check **/var/log/cron** file to see what jobs were run).
5. Perform a Net-search to see how to configure that crontab entry to run every two minutes instead of every minute.
6. Edit your crontab entry to run same command every two minutes, save and exit, and then confirm by viewing **/tmp/cron.log** and **/var/log/cron** files.
7. Perform a Net-search to see how to run a cron for a command for every hour.
8. Edit your crontab to **make automatic backups using the rsync command** of the **/etc** directory from **vm1**, **vm2**, and **vm3** into **/backup/incremental/vm1**, **/backup/incremental/vm2**, and **/backup/incremental/vm3** every hour and overwrite the previous backup.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the gzip command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Completing The Lab

### Online Submission

Follow the instructions for lab 1 on blackboard.

## Exploration Questions

1. Explain the major different between the **ip** and **ifconfig** commands.
2. List the steps to create a **temporary static IP network connection** for your vm1 machine to connect to your host machine.
3. List the steps to create a **persistent static IP network connection** for your vm1 machine to connect to your host machine.
4. List at least **3 trouble-shooting techniques** to check or verify a network connection from a vm to a host machine.
5. List at least **5 reasons** (from networking trouble-shooting) that can break a network connection.
6. List the tools (commands) how to configure / stop / start the ssh service.
7. Explain why it is important to know how to manage network services if you intend to configure ("tweak") the service.
8. Briefly explain the purpose of the **tar**, **cpio**, **dump**, **restore** commands.
9. Explain how the **rsync** command differs from the _tar_, _cpio_, _dump_, and _restore_ commands.
10. List the steps to create a **crontab** entry to run the program **/bin/clean-out.bash** every half day.
11. What is the purpose of using **crontabs** for backing up your virtual machines' data to your host machine?
