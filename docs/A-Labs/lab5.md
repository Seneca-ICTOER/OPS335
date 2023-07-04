---
id: lab5
title: Lab 5
sidebar_position: 8
description: Lab 5
---

# Lab 5 - Samba Server

## Objective and Preparation

This lab's primary focus is to set up a Samba server on a Linux server in order to allow MS Windows users to share common files from the Linux's Samba server.

This lab will first install, setup, and enable a Samba server. Then users will access files on the Linux Samba server from Linux and Windows client machines (both graphically and command line).

## Investigation 1: Installing and Configuring A Samba Server

In this investigation, we will set up a **Samba server** on our **VM2** machine. We will first install, configure and enable the samba server on our virtual machine, and then we will quickly test to see if the Samba server works.

**Perform the following steps:**

1. Make certain that both your **VM1** and **VM2** machines are running.
2. Switch to your **VM2** machine as the **root** user.
3. Issue the following Linux command to install Samba server utlity:

```bash
yum install samba samba-client
```

4. Copy the file **/etc/samba/smb.conf** to another filename by issuing the following command:

```bash
cp /etc/samba/smb.conf /etc/samba/smb.conf.original
```

5. Clear the contents of the configuration file by running

```bash
cat /dev/null > /etc/samba/smb.conf
```

6. Edit **/etc/samba/smb.conf** so that the file that contains the following lines:

```bash
[global]
workgroup = WORKGROUP 
server string = "put your real name here without the quotes"
encrypt passwords = yes
security = user
passdb backend = tdbsam

[home]
comment = "put your real name here without the quotes"
path = /home/<yourSenecaID>
public = no
writable = yes
printable = no
create mask = 0765

[homes]
comment = automatic home share
public = no
writable = yes
printable = no
create mask = 0765
browseable = no
```

7. Append (add) the following parameter to the bottom of the **\[global\] section** that will limit access to the share so that only machines in your virtual network will be able to access it:

```bash
hosts allow = 192.168.x. 127.0.0.1
```

8. Append (add) the following parameter to the **\[home\] section** so that only your user account can access that share:

```bash
valid users = <yourSenecaID>
```

9. Create a Samba account and password for yourSenecaID by issuing the following command:

```bash
smbpasswd -a <yourSenecaID>
```

**Changing Existing Samba Account Passwords:** If you need to change a user's existing Samba account password, you can issue the following command as root: **smbpasswd username**.

10. Confirm the user you created has been added using the following command:

```bash
pdbedit -L -v
```

11. Test and review your configuration with the command:

```bash
testparm
```

12. Use the **systemctl** command to start the smb.service and enable the service to run on boot-up
13. If you have SELinux set to enforcing, you'll will need to tell it to allow samba access to home directories by running:

```bash
setsebool -P samba_enable_home_dirs 1
```

14. Use the **ss -nautp** command to see with port Samba is running on.
15. Use the information in the previous step to modify the firewall on VM2 machine to allow samba traffic.
16. Test to see that you can connect to your Samba server (locally) by issuing the following command:

```bash
smbclient -U <yourSenecaID> -L 127.0.0.1
```

17. When prompted, enter your Samba account password.
18. The output from that issued command show appear similar to example displayed below:

```bash
Sharename       Type       Comment
---------       ----       -------
home             Disk      Your Name
IPC$             IPC       IPC Service ("Your Name")
Domain=[WORKGROUP] OS=[Windows 6.1] Server=[Samba 4.2.3]

Server                Comment
------                -------

WorkGroup             Master
---------             ------
```

19. To access the Samba client shell on your local Samba share, issue the following command:

```bash
smbclient '\\127.0.0.1\home' -U <yourSenecaID>
```

20. Enter your Samba account password.
21. Issue the help command to note common commands (_dir_, _cd_, _ls_, _put_, _get_). Note how similar they are to _sftp_ commands.
22. Enter **exit** to terminal your local Samba session.

You can use smbclient to access, browse and share files within other Linux and Windows servers using a variety of tools which will be demonstrated in Investigations 2 and 3.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Connecting To A Linux SMB Server From A Linux Client

In this investigation you will explore some of the different ways to access a shared directory from a Linux client machine (VM1).

### Installing and Using smbclient

**Perform the following steps on your VM1**

1. Install the **samba-client** and **cifs-utils** packages.
2. Use the "smbclient" command in a terminal window.

```bash
 smbclient '\\vm2\home' -U <yourSenecaID>
```

3. After entering your password you should get a prompt similar to:

```bash
 smb: \>
```

4. Enter the ls command to see a list of the files in your home directory:

```bash
 smb: \> ls
```

5. Once you have access to the directory use the get and put commands (similar to ftp) to move files.
6. When you are finished close the connection.
7. Try again using **\[homes\]** share instead

```bash
 smbclient '\\vm2\homes' -U <yourSenecaID>
```

Note that this tool only gave temporary access with a limited set of commands.

### Using 'mount -t cifs'

Instead of always having to use the smbclient command to connect to your network share, you can have the share automatically mounted upon your file server boot-up.

**Perform the following steps on your VM1**

1. Issue the following commands to create a mount-point and to mount your home directory from your vm2 machine:

```bash
 mkdir /tmp/vm2-home
 mount -t cifs //vm2/home /tmp/vm2-home -o username=<yourSenecaID>
 ls /tmp/vm2-home
```

2. Create a file in that directory, then switch to **vm2** to confirm that it was created.
3. Use umount on **vm1** to unmount that directory.

Note that this tool would leave the directory mounted until the machine rebooted or it was manually unmounted. It would also allow other users access to the directory, as it effectively became part of the local filesystem. It could even be added to fstab to be mounted on boot (though this would require another configuration file we don't cover).

## Investigation 3: Connecting To A Samba Server From A Windows Client

This investigation will configure your VM2 machine to act as a Samba File server to allow Windows OS Users access to the Linux Samba server files.

### Accessing Files on a Linux Samba Server via Windows Explorer

With some additional "tweaking" to your Linux Samba server configuration file, you should be able to access files on that file from a Windows machine on the same network. You will be creating a Samba share for your home directory of your regular user account.

**Perform the following tasks:**

1. Make certain that your **VM2** machine is running, is still allowing samba traffic through the firewall, and is still running the samba service.
2. Use the Windows machine you are already running Vmware on. If you have a Linux host - good for you, you can either use a Windows VM or skip this part.
3. Add the prerouting and forwarding rules to your host's iptables necessary to redirect samba traffic from outside your network to your VM2, making sure to replace the X with your own network address.

```bash
iptables -I FORWARD -p tcp --dport 139 -d 192.168.X.3 -j ACCEPT
```

```bash
iptables -I FORWARD -p tcp --dport 445 -d 192.168.X.3 -j ACCEPT
```

```bash
iptables -t nat -A PREROUTING -p tcp --dport 139 -j DNAT --to-destination 192.168.X.3
```

```bash
iptables -t nat -A PREROUTING -p tcp --dport 445 -j DNAT --to-destination 192.168.X.3
```

   - OR with specifing the interface (whichever works):

```bash
iptables -t nat -A PREROUTING -i *externalinterface* -p tcp --dport 139 -j DNAT --to-destination 192.168.X.3
```

```bash
iptables -t nat -A PREROUTING -i *externalinterface* -p tcp --dport 445 -j DNAT --to-destination 192.168.X.3
```

   - where \*externalinterface\* is an interface name (e.g. ens33)
   - **NOTE**: when you restart libvirtd, it will move your FORWARD rules to the end of the chain, invalidating them.

1. Modify the **hosts allow** setting on your **vm2** to also accept connections from the windows machine you are using.
2. Open the Windows File Explorer application.
3. At the top of the application, enter the following: **\\\EXTERNAL_IPADDR_OF_HOST\home**
4. You will be prompted to enter your samba username and password (one time only). Refer to screenshot below.

      - **NOTE**: It may take approximately 30 seconds to display the file contents.

![Samba Login](/img/Samba-login.png)

5. Were you successful? You should have received an error stating the your credentials are incorrect. You will notice that it adds SENEDS to the beginning of your user name, as the Seneca machine is pre-configured to be part of that workgroup.
6. Change the workgroup parameter in smb.conf on VM2 to match the seneca domain SENEDS, and try to connect again.
7. Were you successful? If not, try to troubleshoot the problem first, then ask your lab assistant or instructor for assistance.
8. Close the Windows File Explorer application window.
9. Click on the **START** menu, and click on **This PC**.
10. Click on the Map Network Drive button, and create a **mapped network drive** (called it drive **Z:**) which is a Samba share of your VM2 machine for the home directory.

![Samba Map Drive](/img/Samba3-map-drive.png)

11. When finished, click on **Network** in Windows file manager to confirm that the network share is present.
12. Try to create a file on Windows on your Linux Samba machine. Were you able to create a save a file?
13. Switch to your VM2 machine and check to see if that file was created in your home directory.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command VMs.

**Record steps, commands, and your observations from this INVESTIGATION in your OPS335 lab log-book**

## Completing The Lab

In completing this lab you have gained experience using a service that allows remote access to files stored on a Linux server. You have also learned how to use several different tools to access those files, both from a Linux and Windows client..

### Online Submission

Follow the instructions for lab 5 on blackboard.

## Exploration Questions

1. What does SMB stand for?
2. What does CIFS stand for?
3. What is the purpose of the **testparm** command?
4. What does the text inside square brackets in the **smb.conf** file mean? (e.g., "\[home\]").
5. Explain the meaning of the line "create mask = 0765" in the smb.conf file?
6. What does the **smbpasswd** command do?
