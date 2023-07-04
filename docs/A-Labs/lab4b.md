---
id: lab4b
title: Lab 4b
sidebar_position: 7
description: Lab 4b
---

# Lab 4b - Mail Server Setup: LDA

## Overview

**Warning:** Your lab 4a must be complete before you can start this lab.

In Lab 4a, you configured and ran the **Postfix** application for our MTA (a.k.a. SMTP server) on your **vm2** and **vm3** machines.

That setup has some major drawbacks:

- It required an SMTP server (**MTA**) to be configured on each machine.
- The Message Store (**MS**) would also be unique to each machine - what a user received on one server would not exist on any other.

In this lab you will centralize some of this information, so that a user can send email from any machine in the network, and have incoming mail sent to a centralized messages store.

**The a diagram below (duplicate to lab 4a) shows your basic setup of your email system:**

![Email Servers](/img/Email-servers.png)

You will begin by modifying the existing **Postfix** (**MTA**) servers to make mail they send come from your domain (instead of each machine). Then you will add a record to your DNS server to allow mail to be sent to the domain itself, instead of the individual machines. Next, you will add a Local Delivery Agent (**LDA**) to your **vm3** by installing **dovecot-lda**, configure it, and test it to make sure that is is working correctly.

Finally, you will set up an **IMAP** server called **Dovecot** on your **vm3** machine, so you can read your email from an MUA such as _Thunderbird_ or a _Webmail_ application. You will set up a webmail application called **Roundcube** in a later lab).

### Learning About the Services Involved in an Email Delivery

In reality, the terms **MTA**, **MDA**, **MUA**, **LDA** can actually be considered misleading since some of those services can be combined together to form a single entity (application), while other applications may operate as separate entities. There may be overlap, so if you don't find those acronyms helpful, don't worry too much about them. On the other hand, when referred to in diagrams, they can help to visualize those processes when trying to understand how an e-mail system works.

[Here is an overview](http://wiki.dovecot.org/MailServerOverview) of those terms (from the Dovecot wiki). It is worth viewing this link.

In the diagram displayed above, the elements include:

- **User Account**. The individual who wants to send or receive mail messages.
- **MUA** (email client). This is the application that the individual uses to send or receive mail messages. It can be a **native application** or a **web application**. You will learn how to setup and use both types of these applications throughout the remainder of this course.
- Two **MTA** servers. These are the servers responsible for getting your emails to the destination server.
    - They are similar to routers (which route packets) but work on the application layer rather than the network layer.
    - In our example, there are only two MTAs - but there can be several.
    - You connect to your MTA over a secure connection, so your emails can't be read by the operators of the network you're connected to.
    - The mail message then travels the rest of the way to the destination MTA unencrypted, so anyone with access to the routers in-between can read all your emails. That is why many organizations will refuse to send you confidential information over email.
- **LDA/MDA** Server. This server will receive the email from the MTA, and will store it on disk in some format. **MailDir** and **MBOX** are the most popular mailbox formats.
- **IMAP/POP3** server(s). When sending an email, you send it to the destination using your MTA, but you also want to save it in your "**Sent**" folder for yourself. This is accomplished by a separate connection to either your **IMAP** or **POP3** server.
    - Thus, a situation can occur that although you sent your email successfully, it may never make it to your "Sent" folder - the second connection to your IMAP server is quite unrelated to the first connection to the **SMTP** server.
- **DNS** Server. A DNS server is also involved - it is needed to retrieve the address of the email server responsible for email for a particular domain. This is done with **MX** records.

### Online References

- [Dovecot Community Documentation](https://help.ubuntu.com/community/Dovecot)
- [Dovecot-lda](http://wiki.dovecot.org/LDA)
- [Configuring dovecot-lda with postfix](http://wiki.dovecot.org/LDA/Postfix)

## Investigation 1: Install Thunderbird (MUA) and Setup A Reference Client

Unlike the **mailx** (MUA) application you installed and used in Lab 4a, this lab will be using the **Thunderbird** (MUA) application instead which is a graphical application that uses a **centralized Message Store** (MS) to retrieve and read mail messages.

Although we will be eventually setting up the Thunderbird application to perform all the mail operations discussed above, you need to learn to "**walk before you can run**". Eventually, you are going to set up all those mail services, but to begin with, you will set up an email client to connect to an already working server which is the **Seneca email server**. Once we learn how to do this for our Seneca email account, then we can use it for our mail servers for our VM2 and VM3.

**Perform the following steps:**

1. Switch to your **host** machine, and install the **Thunderbird** email application.
2. When you first launch the Thunderbird application, a configuration dialog should appear as shown in the diagram below:

![Thunderbird Email Setup](/img/Seneca-student-thunderbird-email-setup.png)

3. Use the data in the table below to configure the Thunderbird settings dialog box for YOUR Seneca e-mail account:

| Setting	| Incoming: IMAP	| Outgoing: SMTP |
| --- | --- | --- |
| **Username**	| yoursenecauserid@myseneca.ca	| yoursenecauserid@myseneca.ca |
| **servername**	| outlook.office365.com	| outlook.office365.com |
| **port**	| 993	| 587 |
| **security**	| SSL/TLS	| STARTTLS |
| **References**	| \[1\] [ITS - Configuring other Email Clients](https://employees.senecacollege.ca/spaces/77/it-services/wiki/view/2394/other-email-clients) |  |

Note that your username is your full email address(_yourid\@myseneca.ca_) and not just _yourid_.

**Unencrypted Options**

Notice that there are unencrypted options available to connect to your SMTP/IMAP servers but those are rarely used these days - the potential for abuse is too great. On a free wifi network, the operator would be able to not only read your email, but also obtain your password without any password/encryption cracking tools. In fact, even on a private wired network, it is not uncommon for an employer to use a packet sniffer utility to monitor all the traffic going over their network (Packet Sniffing applications were actually found to be legally acceptable practice if used by the management of organizations)

3. After you create your **Thunderbird** account, you should be able to read your existing email and send new email within the Thunderbird application.
4. Take time to view your _Account Settings_ and _Preferences_ to get a feel for what settings exist. For example:
    - How often will Thunderbird check for new messages?
    - Will the messages you write be in HTML or plain text?
    - How do you change your SMTP server settings? Why are they in a different section?
5. The main objective of this section was to learn how to setup your Thunderbird application to read your Seneca email, so in the next section you can use the exact type of setup for your own email server.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Setup A Centralized Message Store

### Setup Your MTA to Use Correct Domain

In Lab 4a, both of your email servers were sending mail messages addressed from users of the actual machines themselves. This would be confusing for the receiver who might get emails from the same user @vm1, vm2, and vm3. Which would they respond to? To avoid this problem from occurring, we can make all servers make the sent mail appear to come from a central location (usually the **domain**), and make incoming email sent to that address to be accessible from machines within our network.

**Perform the following steps:**

1. Issue the **mail** command to view the email messages you sent between your **vm2** and **vm3** in your lab 4a. Notice that each is addressed from root on whichever machine sent it.
2. On both machines (vm2 and vm3), edit the **/etc/postfix/main.cf** file to change the **myorigin** parameter from **$myhostname** to **$mydomain**. Restart the **postfix** service.
3. Now, send emails messages (via the **mail** command) between both of your vm2 and vm3 machines, and view the mail messages by issuing **mail** in each vm. The sender address should now read that the received mail messages came from **root@yourdomain.ops**.

    - The next step is to configure what addresses that the server will receive email for. This is done using postfix by setting the **mydestination** parameter (configuration variable) to include **$mydomain** (this is assuming you've set up **mydomain**, **myorigin** , and **inet_interfaces** properly).

4. Edit the **/etc/postfix/main.cf** file for **vm3 ONLY**, scroll down to the line containing: **mydestination** and change line to the text shown below:

```bash
mydestination = $mydomain, $myhostname, localhost.$mydomain, localhost
```

   - **Note**: Even though your machine's name is _vm3.yoursenecaid.ops_, your postfix MTA will also receive emails addressed to the domain called: yoursenecaid.ops
   - In order for this to work, we need to add a DNS record that will point mail sent to the domain towards one of the SMTP servers configured to accept it.

5. Add an **MX** record to the forward lookup zone on **host** so that all incoming mail addressed to the domain is sent to your vm3.
6. Restart the service and use the **dig** command to confirm that it works.
7. Send an email from your **vm2** to **root@yourdomain.ops**
8. Confirm that it arrives on your **vm3** machine

### Relay Email Through Another Server

When email is sent from either vm, it is addressed from the domain, but receiving MTAs might query why mail sent from vm2 doesn't match the address of the MX record for the domain. This would be a red-flag for potential spam. To avoid this, we can relay all mail sent from vm2 (or any other machine in our network) through vm3 so that it properly appears to come from the mail server that matches the MX record for the domain.

**Perform the following steps:**

1. Move to your vm2 machine.
2. Direct your **vm2** MTA to relay mail through vm3, by making the following editing change for the **/etc/postfix/main.cf** file:

```bash
relayhost = vm3.<yourdomain>.ops
```

3. Restart the **postfix** service.
4. Next, you must instruct your **vm3** machine to allow your vm2 machine to pass email through it by making the following editing change to the **/etc/postfix/main.cf** file:

```bash
mynetworks = 192.168.X.0/24
```

   - NOTE: Substitute in your **own network** for X

5. Restart the **postfix** service.

All mail is now being delivered to a centralized location (and also appears to be coming from that same location), but a user would still have to access that server to retrieve it.

### Install and Configure the Local Delivery Agent (LDA/MDA)

Postfix is capable of performing the function of an LDA, but its LDA capabilities are limited, thus postfix is generally not used for that purpose. Currently, the most popular LDA is _LMTP_, but we will be installing, configuring, and using an LDA called **Dovecot** since it is also popular and we will setting up Dovecot as an **IMAP** server later in this lab. Using both Postfix and Dovecot will actually increase the performance of our IMAP server.

**Perform the following steps:**

1. Move to your **vm3** machine.
2. Dovecot is not installed when you installed your Virtual machines in previous labs. Install the Dovecot application by issuing the following command:

```bash
yum install dovecot
```

3. Edit your **/etc/postfix/main.cf** file and scroll down to (or search for) **mailbox_command**. Add the following line:

```bash
mailbox_command = /usr/libexec/dovecot/dovecot-lda -f "$SENDER" -a "$RECIPIENT"
```

   - NOTE: Do **not** replace any variables, those are set automatically by Postfix when it runs the LDA. If you are interested in learning more about the Dovecot application, you can read about dovecot-lda [here](http://wiki.dovecot.org/LDA/Postfix) and [here](http://wiki.dovecot.org/LDA).

4. Finally, edit the **/etc/dovecot/conf.d/10-mail.conf** file and indicate where you want your mail delivered by including the following line:

```bash
mail_location = maildir:~/Maildir
```

5. Restart your postfix service.
6. While the emails are still stored only on VM3, they will now be easier for other machines/services to access.
7. Due to permissions on the directories where mail will now be stored, root will no longer receive mail. Check the logs for an indication as to why.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Investigation 3: Using Thunderbird (MUA) For VM2 and VM3 Machines

### Accessing Received Mail Messages on VM3 VIA IMAP

First, we will set up the IMAP server so we can read email. The current way we have configured our mail server on our VM3 machine should allow all the email for anyaccount@yoursenecaid.ops should be delivered to our **vm3** machine. We will set up Dovecot with IMAP to get easy access to that email.

**Perform the following steps:**

1. The configuration file for the Dovecot service (which is not the same thing as dovecot-lda) is: **/etc/dovecot/dovecot.conf**. Modify the **protocols** option so that Dovecot will work with IMAP connections, no POP3 or LMTP.
2. Start the dovecot service, and ensure it will always start automatically when the machine boots.
3. Use the **ss** command to confirm the service is listening, and use **nc** on the **host** to confirm you can connect to it.
4. You'll probably fail, so using the information gathered from **ss**, modify the firewall on vm3 to allow IMAP connections from your local network and try **nc** again. Once it works, do not forget to save this change so it will still be there the next time you reboot.
5. If you can connect - it's now time to do something wrong, that is allow connections to our IMAP server over an unencrypted connection.
6. Edit the **/etc/dovecot/conf.d/10-auth.conf** file and set **disable_plaintext_auth** to **no**.
7. Then edit the **/etc/dovecot/conf.d/10-ssl.conf** file and set **ssl** to **yes**.

      - **Note**: This combination of parameters will allow your username and password to be sent over the internet in plain text, for anyone interested to look at. In a later lab we'll set up secure SMTP and IMAP connections, for now this is all we have time for.

8. Restart dovecot so the changes take effect.

### Connecting to IMAP Servers Using Thunderbird

**Perform the following steps:**

1. On your **host** machine, return to the Mail Account Setup dialog box (eg. near top of lab).
2. Set up a **new email account**. You will be using account settings to connect to your **vm2** for **SMTP** and **vm3** for **IMAP**. Use no encryption, and use normal password authentication for IMAP. Refer to the diagram below for reference:

![Email Step 1](/img/Ops335-email-step1.png)

3. Try to connect to your IMAP server with Thunderbird by clicking on your **Inbox**.
4. If nothing happens, then check the Thunderbird Activity Manager for any errors. If the connection is successful, you should see the **Trash** box appear below Inbox.
5. Use the Thunderbird application to send an email to your myseneca address. If you've done everything right, it will send the message successfully
6. Verify that your message has been sent. Check your myseneca email and look at **/var/log/maillog** on vm2 (your email server).

### Sending a Mail Message from VM2 (Using Thunderbird)

**Perform the following steps:**

1. Use the **ss** and **nc** commands (like you did in lab 4a) to confirm your service is listening on the correct ports/interfaces. You will probably have to open the appropriate firewall port on **vm3** to allow incoming **SMTP** connections.

      - **Note**: You should be able to send email to any regular user on **vm3** using the email address **yourusername@yoursenecaid.ops** using the Thunderbird application on your host machine (which is configured to use the account on your vm2).

2. Create a new account on your **vm3** machine using only your first name. We will use this account as a one-time "test" if the mail message has been received on your VM3 machine (from your VM2 machine).

      - **Note**: It is **important** that you **don't** create this same account name on your vm2 machine, since you want to easily identify the difference between the sending and receiving SMTP servers.

3. Use the new account in Thunderbird to send an email to **firstname@yoursenecaid.ops** and then check the contents of **/home/firstname/Maildir/new/** on your **vm3** machine. There should be a file there with the contents of your email.
4. If there is no file, then check the log file **/var/log/maillog** to see what went wrong.
5. If you can see a file in the **/home/firstname/Maildir/new/** directory, then review the procedures on how you got the email server working (since you have performed many steps and set up many services).
6. Refer to the diagram at the top of this lab. Which services have you currently set up? Record your findings in your lab Logbook.

**Encountering error messages when sending email:** If you cannot properly receive sent e-mail messages, check the **/var/log/syslog** file for errors. If you locate an error message in that file such as: **Fatal: Error reading configuration: Invalid settings...**, then add the following parameter in **/etc/dovecot/dovecot.conf**: **postmaster_address = DOMAIN** (where DOMAIN is actually your domain). After you have saved those changes, then **restart** your dovecot service. This problem can also be resolved by properly setting the hostname of your machine to include the domain.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record steps, commands, and your observations in INVESTIGATION 3 in your OPS335 lab log-book**

## Completing The Lab

### Online Submission

Follow the instructions for lab 4b on blackboard.

## EXPLORATION QUESTIONS

1. What is the purpose of the Thunderbird application?
2. List the steps to configure your DNS to allow your Thunderbird application to connect to your mail server.
3. What is the purpose of the **Dovecot** package?
4. What is the purpose of the **mydestination** parameter contained in the **/etc/postfix/main.cf** file?
5. Why are **IMAP** and **POP** email servers placed on separate machines (vms)?
6. What is the purpose of the **mail_location** parameter contained in the **/etc/dovecot/conf.d/10-mail.conf** file?
7. Why is root not able to receive mail with the changed mail location? What could you change to allow mail to be sent to root again?
