---
id: lab8
title: Lab 8
sidebar_position: 11
description: Lab 8
---

# Lab 8 - OpenLDAP

## Objective and Preparation

- Learn some fundamental concepts and terminology used with LDAP.
- Practice creating users in OpenLDAP.
- Set up linux machines to authenticate against an OpenLDAP server.
- Learn to update LDAP information with ldif files.

### Online Resources

We'll use OpenLDAP in this course.

The purpose of LDAP the way it's used most of the time is relatively intuitive, but the implementation details will take longer to understand.

LDAP is a generic directory access protocol, but we'll look at it specifically as a server containing user credentials that can be used for authorization on multiple machines.

You should read as much of the [OpenLDAP Administration Guide](https://www.openldap.org/doc/admin24/) as you can handle. You'll find that parts of it make no sense at first, but as you get more practice with the software and the concepts they become easier to understand. As a minimum, read:

- The introduction.
- The quick start guide.
- The configuration layout part of "Configuring slapd".
- There is a glossary at the end of the guide. It's not complete and it doesn't have any details, but it's a good place to look when you get confused by weird-looking shorthands like dc, dn, or cn.

## Investigation 1: Connecting a Client Machine to an LDAP server

You won't be asked to set up an OpenLDAP server from scratch, we don't have time for that. So you can start with a VM I made for you.

Download [the disk image here](https://scs.senecacollege.ca/~andrew.smith/ops335/vm4.qcow2.gz), extract it into **images** directory and set it up by "Importing existing disk image":

- You only need 512MB of RAM.
- Connect it to your ops335 network.
- Change its IP address, gateway, DNS server address, hostname (FQDN) and DOMAIN/SEARCH parameter to match your network configuration.
- You may find it helpful to add a record for vm4 in your DNS, and set up ssh-keys login to vm4.

The **root** password is **seneca99**.

OpenLDAP has been set up on it using [this itzgeek guide](https://www.itzgeek.com/how-tos/linux/centos-how-tos/step-step-openldap-server-configuration-centos-7-rhel-7.html). You should read that guide even though you don't need to perform all those steps yourself.

This OpenLDAP server (vm4) has been set up with:

- The Domain Components `dc=andrew,dc=ops`
- The admin username `ldaproot` and the password `seneca99ldap`
- An Organisation Unit named `People`, for regular users.
- With one regular user `john`, whose password you should change using the **ldappasswd** command.

The rest of your tasks for this section of the lab are to set up your vm1/vm2/vm3 to authenticate using the LDAP service hosted on vm4.

## Investigation 2: Adding Users to LDAP

Perform the Following steps on your LDAP server VM:

- Before we start adding users, we need to tell the tool that is going to translate between normal user accounts and LDAP structure a little about our domain.
- Make a backup of the **/usr/share/migrationtools/migrate_common.ph** to the **/root** directory.

Modify the following parameters in the **original** file to the values shown below:

```bash
$DEFAULT_MAIL_DOMAIN = "andrew.ops";
$DEFAULT_BASE = "dc=andrew,dc=ops";
$EXTENDED_SCHEMA = 1;
```

- Add/Create a new user to this machine with your senecaID and a UID of 10000. Set their password as well.
- Migrating them into LDAP will take several steps:
- Extract the passwd entries of your new user from /etc/passwd to a file called ldapusers.entry

```bash
grep -w <your username> /etc/passwd > /root/ldapusers.entry
```

- Use the **migrate_passwd.pl** file to convert the user information you extracted earlier into an ldif file:

```bash
/usr/share/migrationtools/migrate_passwd.pl /root/ldapusers.entry /root/ldapusers.ldif
```

This should generate an ldif file similar to the following:

```bash
dn: uid=<your username>,ou=People,dc=andrew,dc=ops
uid: <your username>
cn: <your username>
sn: <your username>
mail: <your username>@andrew.ops
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword: {crypt}
$6$PBqQXRo/ugCCjBe0.ZgvmJl8U2tVjpdR8X9bh4OZ1cl3mv4xf0Hv1HSDavkxusO8R3lI
uuJ7skrfqpTQpbZ6hbd3e3BGB.
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 10000
gidNumber: 10000
homeDirectory: /home/<your username>
```

- Use the **ldapadd** command to enter this new information into the database (see the Itzgeek [tutorial](https://www.itzgeek.com/how-tos/linux/centos-how-tos/step-step-openldap-server-configuration-centos-7-rhel-7.html/2) for an example). Use simple authentication, the distinguished name of the ldap administrator, and get prompted for a password.
- Use **ldapsearch** to confirm that the new users have been added to the database. You should get output similar to the following:

```bash
# extended LDIF
#
# LDAPv3
# base <dc=andrew,dc=ops> with scope subtree
# filter: (objectClass=*)
# requesting: ALL
#

# andrew.ops
dn: dc=andrew,dc=ops
objectClass: top
objectClass: dcObject
objectClass: organization
o: andrew ops
dc: andrew

# ldaproot, andrew.ops
dn: cn=ldaproot,dc=andrew,dc=ops
objectClass: organizationalRole
cn: ldaproot
description: LDAP Manager

# People, andrew.ops
dn: ou=People,dc=andrew,dc=ops
objectClass: organizationalUnit
ou: People

# <your username>, People, andrew.ops
dn: uid=<your username>,ou=People,dc=andrew,dc=ops
uid: <your username>
cn: <your username>
sn: <your username>
mail: <your username>@andrew.ops
objectClass: personobjectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword:: e2NyeXB0fSQ2JFBCcVFYUm8vJHVnQ0NqQmUwLlpndm1KbDhVMnRWanBkUjhYOWJ
oNE9aMWNsM212NHhmMEh2MUhTRGF2a3h1c084UjNsSXV1Sjdza3JmcXBUUXBiWjZoYmQzZTNCR0Iu
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 10000
gidNumber: 10000
homeDirectory: /home/<your username>

# search result
search: 2
result: 0 Success

# numResponses: 10
# numEntries: 5
```

- Repeat the process to create two more users:
    + jane with the UID 10001 and full name Jane Greystoke
    + guest with the uid 10002 and full name Andrew's Guests
 
## Investigation 3: Authenticating against LDAP

- Read the [second](https://www.itzgeek.com/how-tos/linux/centos-how-tos/step-step-openldap-server-configuration-centos-7-rhel-7.html/2) page of the **Itzgeek guide** for instructions on how to configure a CentOS machine to authenticate against an LDAP server.
- Prior to doing anything with it, backup your current configuration
- Follow those instructions for **vm1**, **vm2**, and **vm3**. Make sure that you update the IP address of your server in the arguments to the **authconfig** command.
- Confirm that you can log in using all three usernames on all your nested VMs (except vm4).

## Investigation 4: Using Ldif Files

An important capability of ldap is the ability to update the information in the database.

- Most updates will be run with specially formatted ldif files. These use the same structure as the files you created to add users, but will be shorter as they will only be changing one attribute.
- Each entry in an ldif file identifies an object to work with, and a changetype (which is an action to take on that object). Depending on the changetype, there might be an extra line for information to be changed or added.
- Write an ldif file called **update1.ldif** that will **add** the attribute **roomNumber** to the user with your username. Set the value of roomNumber to be the room your class takes place in (or any room number if you are taking the course online).
- Use **ldapmodify** to apply this file to your database, then run **ldapsearch** to confirm the new entry has been added.
- Write a new ldif file called **update2.ldif** that will **replace** the **mail** address of the user with your username so that it has your actual Seneca email address. Use **ldapmodify** again to apply this change to the database.
- Write a third ldif file called **update3.ldif** to **delete** the user **john** from the database, then apply that change using **ldapmodify** again.
- Use **ldapsearch** to confirm that these changes have taken place.
- Note that it is possible to write ldif files to make multiple changes at once, but that is beyond this course.

**Record steps, commands, and your observations in all INVESTIGATIONS here in your OPS335 lab log-book**

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were advised to create in order to backup all of your VMs.

## Completing The Lab

You have now learned how to connect a client machine to an existing LDAP server for centralized authentication, as well as how to update the information held in that server.

### Online Submission

Follow the instructions for lab 8 on blackboard.

## Exploration Questions
