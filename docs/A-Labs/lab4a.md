---
id: lab4a
title: Lab 4a
sidebar_position: 6
description: Lab 4a
---

# Lab 4a - Simple Mail Server Setup

## Overview and Preparation

**Warning:** Your lab 3 must be complete with a functioning DNS server for your domain before this lab will work.

You may not be aware of it as an user, but email is a very complex system to administer. In fact, the more modern e-mail systems (eg. web-based mail applications, etc) are more technically involved than the other archaic, hard-to-configure, and sometimes inter-operable mail systems.

We are going to spread the remaining email labs over a few weeks, so that by the end of this topic, you will have a sufficient understanding of what services are involved in sending, filtering, and reading email. You will also have the skills to configure a basic mail setup using the default services provided for your Centos7 Linux distribution.

Believe it or not, this is a simple diagram of you sending an email to someone else:

![Email Server Diagram of You sending an email to someone else](/img/Email-servers.png)

This lab will show you how to set up a Mail User Agent (**MUA**), using the **mailx** package on your **vm2** machine to send and receive e-mails on your local VM. In this case, the **Postfix** package which represents your **MTA** is most likely already installed and running on your local VM. In addition to sending and receiving emails on your Local VM, you will also be able to send a text-based e-mail from your **vm2 machine** to your **Seneca mail account**. You will also learn how to make multiple MTAs in the same network collaborate in sending emails. In addition, you will learn where the message store (MS) is located that stores mail messages until they are viewed and either deleted or transferred to other folders.

Although, you will not be able to receive mail messages from outside sources (such as your Seneca email account), this lab acts as a starting point in order to run a basic email server. You are NOT required to go into tremendous depth (just the minimum requirements). For example, we will not go over every aspect of the Postfix MTA service, but you should know what it represents and what is its main purpose, as opposed to the following: [complex diagram 1](https://en.wikipedia.org/wiki/Postfix_%28software%29#Architecture) , [complex diagram 2](https://www.credativ.de/blog/postfix-architecture-overview).

### Online References

- [Mail Send Command](http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/) (examples how to send e-mail using mail command)
- [View and Manage Received e-mail Mesages](http://www.johnkerl.org/doc/mail-how-to.html#prompt_commands) (Common commands to view and manage received email messages)
- [Reading Full Email Headers](https://support.google.com/mail/answer/29436?hl=en) (Explanation of message header information)
- [Here's an overview](http://wiki.dovecot.org/MailServerOverview) (common mail server terms)

## Investigation 1: Install, Set-Up, And Use The Mail User Agent (MUA)

We will be using a simple text-based **Mail User Agent (MUA)** called **mailx** in this lab to **both send and receive** mail messages within your **vm2** machine and to **only send** mail messages from your **vm2** machine to your Seneca e-mail account.

**NOTE**: Because you're using private IP addresses and no external DNS servers are pointing to your network, you **cannot** send e-mail messages from outside your environment to your **vm2** machine.

### Installing the Mail User Agent (MUA)

**Perform the following Steps:**

1. Make certain you are in your **vm2** machine.
2. Install the **mailx** application (MUA) using yum
    - **NOTE**: You can refer to the link below to acquaint yourself on how to send e-mail messages using **mailx** application: [Mail Send Command Examples](http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/)

### Sending a Mail Message from your vm2 Machine to your Seneca Email Account

**Note:** These instructions no longer work reliably. You can still send email to your own email server, and look at the server logs to see that it did really get sent. But it probably won't be accepted for one of a multitude of good reasons. If it doesn't work for you: don't worry about it for lab submission purposes.

We will now test to see if your MTA for your vm2 machine is correctly running by sending email messages from your vm2 machine to your Seneca e-mail account.

**Perform the following steps:**

1. Make certain you are still in your **vm2** machine.
2. Test email from your machine by sending an email to your **Seneca email account** using the following command:

```bash
mail -s "Lab4a - test1" <Your Seneca email address>
```

   - **NOTE**: after you type in the body of the mail message, move to an empty line, and then press the key combination **<ctrl\><d\>** to send the message.

3. Check your Seneca email account (Inbox / Junk Email Folder) to see if you got the email (note that it may take a few minutes to arrive, so you may also wish to try an alternate email account if you have one like gmail, etc). When you do receive that email, make a note of the return address.
4. If you did not receive the mail, check the mail logs on your vm2 machine to determine any errors messages that would indicate a mail server setup problem.
5. Once you have succeeded in sending the first email, send a second email to the same destination using the following command:

```bash
mail -r "someone@hacker.com (Canadian Revenue Agency)" -s "Lab4a - test2" <Your Seneca email address>
```

6. Check your email to see if you got the email. If you did, make a note of the return address. How would you think that including the **-r** option could be used by penetration hackers to gain access to a computer system? What sort of steps do you think should be taken to help prevent this type of attack from happening?

### Sending a Mail Message within your vm2 Machine

We will now test both your MUA (mailx) and MTA (postfix) by sending and receiving e-mail messages on the local vm2 machine only.

**Perform the following Steps:**

1. Send an email message locally (i.e. only within your vm2 machine) by issuing the command:

```bash
mail -s "Lab4a - Local - Test1" <yourSenecaID>
```

2. After you type in the body of the mail message, move to an empty line, type period "." and press the ENTER key to send the message.
3. Login with your **regular user** and issue the following command to read the mail message you send to yourself: **mail**

    - **NOTE**: You can refer to the link below to view a reference chart on how to read and delete received e-mail messages at the mail command prompt: [Commands to View and Manage Received e-mail Mesages](http://www.johnkerl.org/doc/mail-how-to.html#prompt_commands)

4. Issue the following command:

```bash
cat /var/spool/mail/<yourSenecaID>
```

   - What do you see? What does this show you in terms of where mail is stored on your e-mail server?

5. If you received an e-mail message, the message and subject line should appear as a listing in your mail command.

    - **NOTE**: If you did not receive a mail message, check your mail server settings, check to see if your mail server is running and also check **/var/log/maillog** and **/var/log/messages** (this step requires **root** privilege).

6. Once you have received the message, type the mail message number that is displayed in your e-mail message list in the prompt and press ENTER. You should be able to confirm the message body that you sent.
7. Exit the mail program by typing the letter **q** and press ENTER.
8. Re-issue the **mail** command. What happened? Issue the command:

```bash
cat /var/spool/mail/<yourSenecaID>
```

   - What do you notice?
9. Exit the mail command.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Setup MTA To Send Mail Messages (No Encryption)

We will be using the **Postfix** application as the **MTA**, and we will be setting it up on your **vm2** and **vm3** machines. They will act as the "sending" email servers for your internal network. You will be able to send email out of your network, and receive email from within your network, but you will **not** receive email from outside of your network due to the following reasons:

- Individuals outside of your domain will never find the MX records because there are no other DNS servers pointing to your DNS server (i.e. you haven't paid for it).
- Even if the individuals could read your MX records, your local network is using IP addresses on a **private subnet**, which is not routeable on the Internet, so it cannot be reached from outside of your system.

### Verify the Postfix Service Status

**Perform the following steps:**

1. The **postfix** application should be installed by default. If it isn't, install it.
2. Postfix is capable of sending email with the default configuration, so start and enable this service, and verify that the postfix service is running.
3. Look for the running postfix service in the list of listening ports by issuing the following command:

```bash
ss -atnp
```

4. Which service is postfix running? Locate the port used by SMTP, and look for connections with the state LISTEN (i.e. currently listening).
5. Write your observations in your lab logbook.

### Testing the connection to the Postfix Service

We will be demonstrating the use of the **nc** application to test that the postfix service is running and listening.

**Perform the following steps:**

1. If the **nc** command is not installed on your vm2 machine, install it (install **nc** command for your **vm3** as well).
2. Connect from your **vm2** to itself using the **nc** command by issuing the following command:

```bash
nc localhost 25
```

3. You should see a response:

```bash
220 vm2.yourdomain.ops ESMTP Postfix
```

4. You could theoretically use SMTP commands to send an email here, but this would be a very unusual use of your mail server. You have an **MUA** for a reason.
5. Enter the command **QUIT** to close the connection to the server, then **<ctrl\>-c** to terminate the nc command.

      - **NOTE**: If it worked, this indicates that the postfix service is running, listening, and responding to connections.

6. Let's see if it works from other machines. Use **nc** to connect to **vm2** from **vm3** and see if it works. If your firewall is set up properly, the nc command should not permit a connection (i.e. _no route to host_).
7. Create an iptables rule to allow incoming connections to your **SMTP** server on your **vm2**.
8. Once you open the port in the firewall, retry the **nc** command. You should get a different error this time (e.g. _connection refused_). This time the problem is that your service isn't listening on the outside interface, it's currently configured to listen only on the loopback (lo) interface.
9. Make sure the new iptables rule gets saved so that it will be loaded automatically from startup.

### Listening on all interfaces

We need to configure the MTA not only to listen to connections from other (separate) MTAs, but to set the domain name and server name in order to allow the user to issue emails in the "standard way", and allow mail messages to provide a correct email address for replies.

**Perform the following steps:**

1. In your **vm2** machine, launch in editing session for the postfix configuration file called: **/etc/postfix/main.cf**
2. Our first editing change to the Postfix configuration will be to make the service "listen" for incoming connections on the external interface (i.e **eth0** from the VMs point of view). Change the value of the following parameter to what is displayed below:

```bash
inet_interfaces = all
```

3. We should also set the string that will end up in the **From**: header in messages sent by this server. Change the **mydomain** option to YOUR domain name (shown below):

```bash
mydomain = yoursenecaid.ops
```

4. Also you must set the **hostname** for this server so that will correctly specify the hostname in the **From**: header in a sent mail message. Make certain the following parameter only appears once (shown below):

```bash
myorigin = $myhostname
```

5. Ensure that your **hostname** and **DOMAIN** name is properly set on your machine, otherwise you will need to set the **myhostname** parameter.

**Warning:** Make sure there are no other un-commented copies of those above-mentioned parameters in the Postfix configuration file.

6. Restart the postfix service, then use the **ss** command to confirm that the your MTA is now listening on all interfaces (not just loopback)
7. Test by connecting to it (using the **nc** command) from your **vm3** machine.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Investigation 3: Sending Email Between MTAs for vm2 and vm3 (No Encryption)

Your **vm2** server should now be capable of **sending** and **receiving** email, but we can't be certain until we test it. This also would not help the users on the other machines in the network, which are still not capable of receiving email.

**Perform the following steps:**

1. Repeat the configuration from investigation 2 on **vm3** (swap vm2 and vm3 when issuing command so that you are configuring vm3, and using your vm2 server to test the connections).
2. Once that is complete, send an email from **root on vm2** to **root on vm3**, and then reply **from vm3 to vm2**.
3. If both messages arrive, both MTAs are working. If not, use the troubleshooting tools and techniques you have already learned to diagnose and fix the problem.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record steps, commands, and your observations in INVESTIGATION 3 in your OPS335 lab log-book**

## Completing The Lab

Upon completion of this lab you should have postfix mail servers running on two machines, and starting automatically when they do. These servers must have sent email both ways between each other (from vm2 to vm3, and from vm3 to vm2), and to your seneca email (or other external mail server).

### Online Submission

Follow the instructions for lab 4a on blackboard.

## Exploration Questions

1. Briefly list the steps to install the MUA on your server for text-based messaging.
2. Briefly list the steps to trouble-shoot your server if you could not send e-mail messages from your vm2 machine to an external e-mail server.
3. Write the command to send an e-mail message from your vm2 to your Seneca College e-mail account.
4. What are the commands to issue in the mail prompt to:

   - Read the first e-mail message displayed
   - Save the 4th e-mail message to the file pathname: ~/maildir/3.msg.txt
   - Delete the 3rd e-mail message displayed
   - Exit the mail command prompt and return to the shell

5. What were the results of sending emails locally on your vm2 machine? Show log segments to verify your answers.
6. What is the purpose of an MTA?
7. What is the purpose of an MUA?
8. Draw a simple diagram showing how an MUA and an MTA are used to send e-mail messages between different servers.
9. List the steps to test a running postfix service using the nc application.
