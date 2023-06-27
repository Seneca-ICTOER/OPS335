---
id: lab3
title: Lab 3
sidebar_position: 5
description: Lab 3
---

# Lab 3 - DNS

## Objective and Preparation

In this lab, you will configure a Linux machine to be a DNS server for the rest of the machines in your Intranet. You will **use your MySeneca ID (the one based on your name, not your student number) as your domain**. The server will handle all queries for names in the **yoursenecaid.ops** domain. The server will also pass DNS queries for other names and addresses out to the Internet (i.e. to Seneca's DNS server).

### Online Resources

- [Address resolution mechanism](https://en.wikipedia.org/wiki/Domain_Name_System#Address_resolution_mechanism)
- [Reverse DNS lookups](https://en.wikipedia.org/wiki/Reverse_DNS_lookup)

### Current Configuration

This is the current state of our internal network when your harddrive is plugged into a lab machine. Please note that if any of the listed services aren't working for you, you should then fix them (especially your iptables which may block DNS traffic needed for this lab):

![Lab2 Network](/img/Lab2network.png)

You can see in the diagram above that when one of your VMs does a name resolution request:

- The VM contacts the host, which is running a DNS proxy (a.k.a. stub resolver), not a full DNS server
- The DNS proxy on the host contacts the Seneca DNS server, which was assigned to be used on the host via DHCP
- Depending on the type of request, the Seneca DNS server may contact other DNS servers to get an answer to the request.

After you have completed this lab, your **host** VM will be running a full-featured DNS server (which is how you're going to get the **yoursenecaid.ops** domain without paying for it). Unfortunately, you will be the only one using your DNS server so no-one else will be able to resolve hosts under **yoursenecaid.ops**

### How DNS resolution works

We will review in class how the Domain Name Service works. You should also read in your own time [the DNS article on Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System#Address_resolution_mechanism) for an overview of a DNS query - especially the Address resolution mechanism section (including the **Recursive** and **caching name server** subsections). The diagram shown in the WIKI is also quite simple and easy to understand. Domain Name Service is a LARGE topic but this lab provides the basic principles and essentials for this course and DNS set-up for other courses.

## Investigation 1: Configuring The DNS Server

We will now be **installing, configuring and running a DNS server on our host**. In most networks, the gateway would **not** also be a DNS server, but if we placed ours on a separate virtual machine we would need that VM to always be running in order for the other VMs to retrieve updates, install software, or even communicate with each other.

### Preparation

First, ensure that the **host** and **vms** are running, and that none of your machines have entries for the host or any of the VMs in /etc/hosts. In previous courses you may have relied on the contents of /etc/hosts but you will not use them in this course so that you can see how vital a properly functioning DNS server is.

### Installation

Install **bind** on your **host** machine.

### Configuration

An [authoritative](https://en.wikipedia.org/wiki/Domain_Name_System#Authoritative_name_server) Bind server has a global configuration file (named.conf) and at least one zone file for the zone it's authoritative for.

#### /etc/named.conf

When you install Bind you'll get a default **/etc/named.conf**. Copy this file over to a backup location and empty the original (If you have SELinux enabled - do not delete or move the file as that will cause SELinux not to trust it). We will be writing one from scratch with only the following contents, but use your own XX value where applicable.

```bash
options {
        directory "/var/named/";
        allow-query {127.0.0.1; 192.168.XX.0/24;};
        forwarders { 208.67.222.222; }; # This one works at home
        #forwarders { 10.102.100.21; }; # This one works at Seneca
};
zone "localhost" {
        type master;
        file "named.localhost";
};
zone "yoursenecaid.ops" {
        type master;
        file "mydb-for-yoursenecaid-ops";
};
```

You need to understand all the options in this file except the localhost zone, so that in the future (for example in a practical test) you can quickly set up a DNS server for a new zone. So look up in [the reference](http://www.zytrax.com/books/dns/ch7/statements.html) these things and write down what they do:

- **directory**
- **allow-query**
- **forwarders**
- **type**
- **file**

Note: If you are using a drive an a removable bay, you will need to set the forwarders address differently. Pick any one of the DNS servers that are provided through DHCP.

#### Zone file

Now edit **/var/named/mydb-for-yoursenecaid-ops** and enter the following (use your own XX value and domain where applicable).

```bash
$TTL    3D
@       IN      SOA     host.yoursenecaid.ops.      hostmaster.yoursenecaid.ops.(
                2018042901       ; Serial
                8H      ; Refresh
                2H      ; Retry
                1W      ; Expire
                1D      ; Negative Cache TTL
);
@       IN      NS      host.yoursenecaid.ops.
host    IN      A       192.168.XX.1
```

Again, here's the [reference documentation](http://www.zytrax.com/books/dns/ch8/) for records in this file. Specifically pay attention to:

- **A** records
- **NS** records
- **SOA** records

Now that your DNS server (bind, a.k.a. named) is configured:

1. Start the **named** service with the **systemctl** command.
2. Check that the _named_ service is running using the **ps ax** command (perhaps combined with **grep**), and separately, the **systemctl** command (if necessary), or check the **/var/log/messages** file for troubleshooting purposes.
3. Once you are certain that the _named_ service had started and runs without errors, then set it to **start automatically** (i.e. enable the named service) when this virtual machine boots.
4. You also need to set it self (**127.0.0.1**) as the primary domain name server (**DNS1**) for your **host** machine to your **host machine's ifcfg file**
5. If your host's external facing interface (ens33) is on DHCP, you will need to also add PEERDNS=NO to ifcfg file to prevent DHCP server from assigning the original DNS server (i.e. 192.168.40.2 which is used as forwarder instead by the DNS server you are setting up)

  - **NOTE**: You should know how to do that, but if you forgot the procedure, refer to [Lab 1](./lab1.md#making-persistent-permanent-network-setting-changes).

6. Now that you know the service works, **add the resource records necessary for it to provide forward lookups of the other machines in your virtual network** (hint: You should only need three more records) and restart the service.


### Firewall rules update

Remember that you are supposed to have a working firewall on your **host** (and every other machine), but we will focus on our **host** machine for now. A working firewall will block requests to ports that you didn't explicitly allow. This means that at this point, your DNS server, even though it's perfectly configured, is **inaccessible** to any other machine because iptables won't allow the requests to come in (the machine can communicate with itself using the rule that allows all traffic on the **lo** interface).

**Perform the Following Steps:**

1. Note: Since you are going to save your firewall at the end of this step, you may wish to **stop libvirtd** and **restart iptables** now in order to avoid saving the rules the libvirtd automatically adds to your INPUT, FORWARD, and POSTROUTING chains.
2. You will need to update the firewall on **host** to allow incoming connections to **port 53 for both UDP and TCP** (i.e. the protocol and port that DNS uses).
3. After you have updated your firewall, save your iptables rules.
4. **Once you rules are saved, restart libvirtd to ensure NAT and forwarding rules are re-added.**

**NOTE**: You could just disable the firewall **but that is a poor workaround**! You are expected to be able to handle configuration (such as this) at this point in this course.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Configuring The DNS Client

Before proceeding, we need to set the primary DNS server (DNS1 ) in your **ifcfg-eth0** (or _ifcfg-en0_) file for your network interface cards for your virtual machines. Also it is a good idea to install the **bind-utils** package on those VMs as well in order to perform queries on your host domain name server.

**Perform the following Steps:**

1. Install the **bind-utils** package for your virtual machines.
2. You will need to configure your VMs to use your host's IPADDR as the **default DNS server** (DNS1) in your **ifcfg-eth0** (or _ifcfg-en0_) file for your network interface card.
    - You should know how to do that, but if you forgot the procedure, refer to [Lab 1](./lab1.md#making-persistent-permanent-network-setting-changes).
3. Modify the hostname of **each machine** (host and all three VMs) to match what the DNS server says it is (including the domain). This will be important for services we configure in later labs.

### Testing

**Perform the Following Steps:**

1. Issue the following commands to verify that you set-up your DNS server correctly on all of your VMs and google and your host machine:

```bash
host vm1.yoursenecaid.ops
host vm2.yoursenecaid.ops
host vm3.yoursenecaid.ops
host host.yoursenecaid.ops
host google.ca
```

2. Also try the following commands:

```bash
host vm1
host vm2
host vm3
host host
```

**Host Command Doesn't Work:** Your machines do not know what domain to automatically add to the end of hostnames (or believe they are still in the seneca domain). The **SEARCH** (or DOMAIN) parameter in the **ifcfg-eth0** file is used to specify your own domain (eg. **yoursenecaid.ops** ).

3. Add the **SEARCH** (or DOMAIN) parameter for your **ifcfg-eth0** file as shown above for your **host** machine.
4. Issue the **host** command for all vm names and host name to make certain that is works.
5. Also on all of the VMs, install and use a text-based browser called **lynx** to access the Web, and test-out to see if it works by issuing the command **lynx** with the URL as an argument.
6. Experiment with the following commands:

```bash
nslookup
dig
```

   - Use the **dig** command to query your DNS server for specific records (up to this point you only have NS, A, and SOA records).

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Investigation 3: Configuring The DNS Server For Reverse Lookups

As it stands now, your server will only handle forward resolution (converting names into addresses), but it is also sometimes necessary to convert addresses back into human readable names. For public IP addresses only your ISP can provide this service for you. For private networks you can set it up for your own organisation. But even if you're setting up reverse DNS on the public internet - you need to understand what information the ISP would require.

Issue the following commands on any of your VMs (once again replacing XX with your network octet):

```bash
host 192.168.XX.1
host 192.168.XX.2
host 192.168.XX.3
host 192.168.XX.4
```

Each one should have failed because there is currently nothing that will handle this reverse lookup for you. This requires another zone on your server.

Add the following entry to your **/etc/named.conf** (once again replacing XX with your own octet):

```bash
zone "XX.168.192.in-addr.arpa." {
        type master;
        file "mydb-for-192.168.XX";
};
```

And create the following zone file:

```bash
$TTL    3D
@       IN      SOA     host.yoursenecaid.ops.      hostmaster.yoursenecaid.ops.(
                2018042901       ; Serial
                8H      ; Refresh
                2H      ; Retry
                1W      ; Expire
                1D      ; Negative Cache TTL
);
@       IN      NS      host.yoursenecaid.ops.
1       IN      PTR     host.yoursenecaid.ops.
```

1. Refer to the [reference documentation](http://www.zytrax.com/books/dns/ch8/ptr.html) for **PTR** records.
2. Add the extra records needed to complete this zone (again, you should only need three more).
3. Restart the service and test these records to make sure they work.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

## Completing The Lab
Upon completion of this lab you have a DNS server in your network and every virtual machine is using it to resolve internal and external hostnames. You have now gained experience with some common configuration settings for named, as well as common resource records.

### Online Submission

Follow the instructions for lab 3 on blackboard.

## Exploration Questions

1. What iptables rules apply to DNS?
2. Under what circumstances does DNS use TCP vs UDP?
3. What is a zone file and what is it used for?
4. Name the zone files used in this lab, and their purpose.
5. What file did you edit to set a static IP address?
6. What parameter did you set in that file to tell the machine to refer to your own DNS server?
7. What is the purpose of the **/etc/resolv.conf** file?
8. What are type **A** records used for?
9. What security features are available for DNS?
