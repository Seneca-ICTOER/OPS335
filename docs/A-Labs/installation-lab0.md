---
id: installation-lab0
title: Installation Prep Lab 0
sidebar_position: 1
description: Installation Prep Lab 0
---

# Installation Lab 0

## Objective and Preparation

This lab is a repeat of a portion of lab1 (and some of lab2) that you already performed in OPS235 plus some newer content that relates to this week's notes. You are expected to be able to complete all this using your existing skills and knowledge or refer back to your OPS235 lab-book or OPS235 WIKI notes.

In this is lab, you will install your **host machine** (Centos7), **install virtualization software**, and **create and install 3 nested virtual machines**.

### Required materials

- Centos 7 Full Installation DVD.
- One Solid State Drive (SSD), mininmum capacity: 240 GB (USB 3.0). It is strongly advised you dedicate a drive for this course only.

### Online Resources

- [Centos7 Install Tips](https://wiki.centos.org/TipsAndTricks#head-4c9ee55a5c9dc051bd32e795b46a3856e41a0335)

## Investigation 1: Host Installation

### Installation instructions for CentOS 7

1. It may be advisable to obtain the latest version of the CentOS 7 Full Installation DVD since there may be improvements since the last version from when you took OPS235.
2. Download and burn on a DVD a copy of the CentOS 7 installation DVD (64 bit edition) from the CentOS web site or the Belmont server.
**Note**: we'll be using the 64 bit version of CentOS because all of our lab computers are equipped with Intel 64 bit mainboards and CPUs, and any computer you bought in the last few years for yourself will be 64bit as well.

    - **Seneca's mirror of CentOS**: https://mirror.senecacollege.ca/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso
        - This is very fast, but is only accessible from within Seneca's network - you can't access this from home. You can burn this disc on the machines in the Open Lab.)

    - **Outside Seneca College link (available from any Internet connection):** https://mirror.netflash.net/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso

3. You need to refer to your OPS235 notes in order to install your host machine. Here is a direct link: OPS245 - Lab1 (ADD LINK)
4. Customize your installation following these guidelines:
    - **Turn on networking** and use **host** as the **hostname**.
    - Under software selection, choose **Gnome desktop.**
    - The partition setup is similar to what you had in OPS235:
        - Delete any old partitions.
        - Select the hard disk and indicate "I will configure partitions" and click done.
        - Click the link to **create them (partitions) automatically** (this will give a typical layout with /, /boot, /boot/efi, /home, etc).
        - Free up at least **100GB** of disk space by shrinking the /home partition (At least **40** GB for root (/) and **40GB** for /home). Since your machine will have far fewer users and more virtual machines than a typical installation, we will need that space elsewhere.
        - Create a new logical volume for **/var/lib/libvirt/images** and give it the space made available by shrinking /home (You will need enough space for up to 10 virtual machines at 8GB each plus room to compress/extract images).
        - Make certain that the existing partitions **except swap, /boot and /boot/efi** have the file system type **ext4** (not xfs).
5. After the installation starts you will also have the opportunity to create users.
    - Set the root password
    - Create a **user account** named with your **MySeneca ID**

### First Boot

1. In the current version of CentOS the first time you boot your system a graphical licence prompt comes up.
2. Log in and check that you have access to the internet. If you don't - you need to get the network interface to come up on boot. Edit the appropriate config file and configure your main network interface to come up at boot.
    - You can then use the **ifup**/**ifdown** commands to reset your network configuration or you can just reboot.
3. Make certain that **SELinux** is **enforcing** for security reasons (this should be the default). To make it _enforcing_, simply edit the **/etc/selinux/config** file and follow the instructions inside.

**SELinux in Andrew's sections:** If you're in one of Andrew's sections - please disable SELinux (i.e. do the opposite of the bullet above). This will give you some extra freedom in the rest of the course to learn and experiment without being bogged down by inexplicable permission denied errors.

4. Install all updates using the **yum update** command.

### Using iptables

The most recent variants of Centos and Fedora are using a service called **firewalld** that is intended to replace **iptables**, however the _iptables_ service is still in relatively common usage. In this course we will concentrate on _iptables_.

1. Disable firewalld:

```bash
systemctl disable firewalld
systemctl stop firewalld
```

2. Install and enable the IPTables services:

```bash
yum install iptables-services
systemctl enable iptables
systemctl start iptables
```

At this point you have a basic Centos system installed and updated. This will serve as a host for the virtual machines where you will do the majority of the work in this course. All the rest of our labs will assume you have this basic system running. If, for any reason, your system becomes corrupted during the semester, you'll have to redo this lab to be able to continue with the remaining uncompleted labs. You are responsible for YOUR system. If you do not perform back-ups you have taken this risk on yourself. Poor planning on your part does not constitute an emergency for anyone else.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS235 lab log-book**

## Investigation 2: Virtual Machine Installation

### Configuring a VM host

1. You will need to install some software to allow your machine to act as a host for virtual machines. We'll be using the same **libvirt** and **virt-manager** you used in OPS235 - Lab2 (ADD LINK).
    - You may find it helpful to refer back to the **OPS235 notes** to perform the following operations:
        - Install the required virtualization software
        - Start and enable the virtualization service
        - Reboot your host machine

2. Start the graphical virtual machine manager (_virt-manager_). Do this as you regular user, and don't run virt-manager from a terminal where you're logged in as root.
3. We will be creating our own virtual network. A default virtual network has been created for you, but you will be using a custom one in this course.
    - Right click **localhost (QEMU)** and select **Details**.
    - Click on the **Virtual Networks** tab.
    - Stop and delete the **default** network.
    - Use the **plus sign** to add a new virtual network using the following options:
        - Name your virtual network **ops335**
        - Use the **last two digits of your student number for the third octet of network IP address** (for example, if your student number is 000-000-0**90**, the network address would be 192.168.**90**.0/24.
        - Ensure the DHCP range will allow you to assign **at least 10 static IP addresses outside it** (note: leave the low numbers available for static addresses).
        - Choose **Forwarding to physical network** radio button, **Destination: Any physical device** and **Mode: NAT**
        - Ensure the network is **started at boot**.

### VM Installation

With the virtualization software installed and your personal network created, you are now ready to create your first virtual machine. First, It is a good idea to make certain that your host machine has been set up correctly prior to creating your first virtual machine:

1. Open a separate terminal and issue the `ip address show` command on your host machine to know your physical network and your virtual network. Note this information for the next few steps.
2. Issue the following command to download Bash shell script to check your host machine's set-up prior to proceeding with this lab:

```bash
wget http://ict.senecacollege.ca/~andrew.smith/ops335/labcheck_install.sh
```

3. Assign execute permissions, and run the script to check your work:

```bash
labcheck_install.sh
```

4. Use the information from the **ip address show** command to correctly specify the **physical network interface** and the **virtual network interface**.
    - **NOTE**: You will need an ISO file for CentOS 7 (the same one you burned your DVD from). It is recommended to use the command to download this image onto your host machine. In this way, you can keep it on your host machine for the remainder of this course in case you need it:

```bash
wget http://mirror.csclub.uwaterloo.ca/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso
```

Perform the following steps to create your first VM on your Virtual Machine Manager application:

1. Create a new virtual machine named vm1.
2. Accept the default file type (which is **qcow2**). You are NOT required to specify the VM file pathname as you did in OPS235.

**VM File Types** ( .qcow2 **vs** .img ): In OPS235, you selected the VM images as a "**raw**" image. In OPS335, you will be accepting the default image file "**.qcow2**" (which stands for "QMENU Copy on Write version 2" ) that provides more features when manipulating stored VM images.

3. Since you will be installing a Linux server (as opposed to a Gnome Desktop workstation), you can **use the default memory and CPU options for use with lab computers**.
4. Set the disk image size set to **8GB**

    - Note: Since you already setup your virtual network to OPS335, your VM will be automatically connected to your new ops335 virtual network.

5. Note the following installation steps when you install your created VM:
    - Select the correct _location_ / _Time Zone_.
    - For Software Selection: Accept the default **minimum install**. None of your VMs in this course will have a GUI since GUIs needlessly consume resources and image space.
        1. Click **Installation Destination**, and then click **Done** to confirm that an **automatic install** will be performed.
        2. Click Network & Hostname and set hostname to: **vm1.localdomain** and make certain the _Ethernet connection_ is set to **ON**.
        3. During installation you will be prompted to set the root password and an **initial user account**. For the _initial user_, enter the same information you entered on your host machine.

**First user created:** For successful completion of the labs, please ensure the first user created is named using your Seneca username.

### First Boot

1. You will notice that the server installation defaults to a command-line interface. This is normal, and we will only be using this interface during this course.
2. Ensure your machine has a network connection by running the command

```bash
ssh your_seneca_id@matrix.senecacollege.ca
```

3. If that did not work - make sure GlobalProtect VPN is installed on your Windows/Mac and connected. If it is, ensure your CentOS network interface is started automatically on boot.

**Default for network config for onboot:** If you've turned on your networking interface during installation - it will be turned on by default. If you've left the network interface off during the installation - it will be off by default.

4. Once you have a working connection - update your machine.

```bash
 yum update
```

5. Install the **bind-utils** package. The commands it provides (e.g. nslookup) will be useful in troubleshooting your network connection.
6. You may also want to install the **nmap**, **telnet** and **net-tools** packages to help you troubleshoot connectivity issues.
7. Configure **firewalld**, **iptables** and (if required) **SELinux** the same way you did for the host.
8. Reboot the virtual machine once it is updated.

### Cloning a Virtual Machine

1. Now that you have one virtual machine working, you will create two more. If you struggled with the previous steps, repeat them to create two more virtual machines.
2. **If you are confident with what you have done so far, you may clone your existing machine to create the others by performing the following steps:**
    1. Make certain that your **vm1** virtual machine is shutdown.
    2. For your **vm1** machine, go to the details section and remove the device **Channel qemu-ga**.
    3. In the virtual machine manager, **right click** on _vm1_ and select **Clone**....
    4. Set the Name to be: **vm2**

3. Once successfully created, boot the new VM and correct the host name. This can be done using the **hostnamectl** command-line tool.
4. Record in your notes the steps for cloning a vm.
5. Use the host command to check for connectivity
6. After creating **vm2** repeat the above steps to create **vm3** and correct the hostname (**vm2.localdomain** and **vm3.localdomain** respectively).

**Backup your VMs!**

You MUST backup ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**:
[ Backing up Your Virtual Machines ] (ADD LINK). Refer to OPS235 lab2 notes on how to backup your VMs. You should backup your VMs to a USB key in case something happens to your host machine. Note: VM files contained in the **/var/lib/libvirt/images** directory have the extension in **.qcow2** and instead of **.img** (eg. for OPS235 courses prior to Fall 2016.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Completing The Lab

Upon completion of this lab you should have 4 installed machines. One machine running Centos 7 and acting as a host and gateway for three virtual machines running minimal installations of Centos 7. Each machine must be fully updated and have access to the network (for example, to get further updates) and be able ping the others. Each machine must be using iptables for the firewall.

### Online Submission

Follow the instructions for lab 0 on blackboard.

## Exploration Questions

1. What kernel release is your host system running?
2. What kernel release are your virtual machines running?
3. What is the UUID (Universally Unique Identifier) of your root file system? What command was used to obtain this information?
4. What is the size and type of the /boot file system on your host?
5. What file was edited to change the host name on your VM's? Are there other ways to change the hostname?
