---
id: lab7
title: Lab 7
sidebar_position: 10
description: Lab 7
---

# Lab 7 - Encrypted connections and webmail

## Objective and Preparation

**Prerequistites:** This lab depends on changes made in several previous labs. You must have successfully completed labs 3, 4a, 4b, and 6 in order to be able to do this lab.

Below is the same diagram that we referred to over the previous 2 email labs:

![Email Servers](/img/Email-servers.png)

Note the two globes in the above diagram. Those globes represent the Internet that your emails travel through in order to be received by an e-mail recipient. The **smaller globe (the one your workstation is connected to) cannot be trusted to send mail messages unencrypted**. The **larger globe usually involves inter-ISP traffic, often through an internet trunk line, so it is also unencrypted, but it cannot be easily accessed by hackers, pen-testers, or evildoers**.

There are **two important general truths you need to understand about email encryption**:

- **Email (the way the vast majority of people use it) travels from SMTP server to SMTP server uncencrypted.**
    - That means that nothing sent over email is truly secure. But attempting to continually intercept SMTP server to SMTP server traffic is difficult and expensive, not worth doing for the little bit of money most of us have in our bank account.
- **Email travelling over a LAN (especially Wifi, but any local network) is always encrypted.**
    - If e-mail traffic on a LAN was not encrypted, it would be easy and inexpensive to intercept (in order to obtain your username and password). These days, unencrypted connections from your client to your SMTP/IMAP/POP3 server very rarely exist.

You see in our diagram that one of the SMTP connections is supposed to be encrypted (this is the one that would be "LAN" traffic) and the IMAP connection as well (this one is either LAN-like traffic or is connecting to localhost, which is a different scenario altogether).

We're going to secure the two connections that we left to be in plain text previously. Unfortunately encrypting things is rarely a straighforward process. Fortunately we have a whole week to spend on it.

### Online Resources

- [TSL, SSL Definition](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [Create a self signed SSL key for Postfix](https://www.e-rave.nl/create-a-self-signed-ssl-key-for-postfix)
- [Dovecot SSL configuration](http://wiki2.dovecot.org/SSL/DovecotConfiguration)

## Investigation 1: Generating A Self-Signed Certificate

**Transport Layer Security** (TLS) and its predecessor, **Secure Sockets Layer** (SSL), both of which are frequently referred to as 'SSL', are cryptographic protocols designed to provide communications security over a computer network.

Normally (in production), you would need to pay a "certificate authority" to issue a **certificate** for you. That is essentially **a "signed" public key** that will tell strangers on the internet that your server is really yours (i.e. the certificate authority says so). There is an obvious problem with the previous statement but that is mainly how public key encryption works on the Internet today.

We will be generating our own public keys, mainly in order to avoid paying for a certificate. We will not have enough time to get into the details of what all the following commands do in this section. They are from [this blog post](https://www.e-rave.nl/create-a-self-signed-ssl-key-for-postfix). If you don't understand what the blog post refers to but would like to understand in more details, a good recommended book for interest, called Crypto by Steven Levy, provides a more in-depth discussion of encryption and security.

The public key cryptography concepts in this lab are the same in a previous lab ([Lab1: SSH](http://zenit.senecac.on.ca/wiki/index.php/OPS335_Lab_1#SSH_Keys)), although the terminology is slightly different.

A simple way to summarize the differences is:

- The **.key** file is your private key.
- The **.crt** file is your public key.

### Encrypting Postfix with Transport Layer Security (TLS)

**Perform the following steps:**

1. Let's start with the "sending" SMTP server we have **on VM2**. Run the following, replacing andrewsmith.ops with **your domain name**:

```bash
mkdir -p /root/postfix-keys /etc/ssl/{private,certs}
cd /root/postfix-keys
openssl genrsa -des3 -out vm2.andrewsmith.ops.key 2048
chmod 600 vm2.andrewsmith.ops.key
openssl req -new -key vm2.andrewsmith.ops.key -out vm2.andrewsmith.ops.csr
openssl x509 -req -days 365 -in vm2.andrewsmith.ops.csr -signkey vm2.andrewsmith.ops.key -out vm2.andrewsmith.ops.crt
openssl rsa -in vm2.andrewsmith.ops.key -out vm2.andrewsmith.ops.key.nopass
mv vm2.andrewsmith.ops.key.nopass vm2.andrewsmith.ops.key
openssl req -new -x509 -extensions v3_ca -keyout cakey.pem -out cacert.pem -days 3650
chmod 600 vm2.andrewsmith.ops.key cakey.pem
cp vm2.andrewsmith.ops.key cakey.pem /etc/ssl/private
cp vm2.andrewsmith.ops.crt cacert.pem /etc/ssl/certs
```

   - **NOTE**: Those commands will create a certificate, a certificate signing request, a certificate authority, and sign your certificate with your certificate authority. This would be the same as in the real world except there you would contact a real CA, here you're making up your own.

2. Now, configure Postfix to use the generated certificate, by adding the following to your **main.cf** file:

```bash
# Settings to enable secure SMTP using my self-signed certificate:
smtpd_tls_auth_only = no
smtpd_use_tls = yes
smtp_use_tls = yes
smtpd_tls_key_file = /etc/ssl/private/vm2.andrewsmith.ops.key
smtpd_tls_cert_file = /etc/ssl/certs/vm2.andrewsmith.ops.crt
smtpd_tls_CAfile = /etc/ssl/certs/cacert.pem
tls_random_source = dev:/dev/urandom
smtpd_tls_loglevel = 1
```

### Setting Up and Testing Encryption with Thunderbird

**Perform the following steps:**

1. Currently your Thunderbird is set up to use **vm2.yoursenecaid.ops** for an SMTP server, with no security. Change that to use **STARTTLS** instead (you can change it under **account settings --\> Outgoing Server**).
2. We haven't set up any user authentication, just an encrypted channel; therefore, leave the **authentication method** at the value: **none**.
3. When you try to send an email Thunderbird will warn you about the self-signed certificate. You obviously know it's your certificate so you can tell Thunderbird to trust it:

![SMTP Certificate Warning](/img/SMTP-certificate-warning.png)

   - **NOTE**: Your message may look slightly different (This author, that created the diagram above, made a little mistake when generating the certificate).

4. After you confirm that security exception, send another email to yourself and make sure you receive it.
5. Notice that from the user's point of view nothing is different. But if you were an evildoer trying to steal an identity (the difference is huge). Before it was trivial and now it's computationally prohibitive.

### Encryption Dovecot with Secure Socket layer (SSL)

Now we will ensure that our **Dovecot** connection is secure, and enforce that policy. With SMTP, you will need to allow plain text connections since that is the only method to pass email from server-to-server. With IMAP, there is no server-to-server interaction, but rather only client-to-server interaction. The reason to have an unencrypted IMAP connection would be if your **IMAP server** and **IMAP client** were the same machine.

**Perform the following steps:**

1. Let's start by generating a new certificate for Dovecot **on your vm3** machine by issuing the following commands:

```bash
mkdir /etc/ssl/{private,certs}
openssl genrsa -des3 -out vm3.andrewsmith.ops.key 2048
chmod 600 vm3.andrewsmith.ops.key
openssl req -new -key vm3.andrewsmith.ops.key -out vm3.andrewsmith.ops.csr
openssl x509 -req -days 365 -in vm3.andrewsmith.ops.csr -signkey vm3.andrewsmith.ops.key -out vm3.andrewsmith.ops.crt
openssl rsa -in vm3.andrewsmith.ops.key -out vm3.andrewsmith.ops.key.nopass
mv vm3.andrewsmith.ops.key.nopass vm3.andrewsmith.ops.key
openssl req -new -x509 -extensions v3_ca -keyout cakey.pem -out cacert.pem -days 3650
chmod 600 vm3.andrewsmith.ops.key cakey.pem
cp vm3.andrewsmith.ops.key cakey.pem /etc/ssl/private
cp vm3.andrewsmith.ops.crt cacert.pem /etc/ssl/certs
```

   - **NOTE**: This process is identical to what you've done for the vm2 certificate. In fact if your IMAP and SMTP servers are on the same machine you can share the certificate between them. In our case, they are not on the same machine.

2. Next, we need to configure Dovecot to use this for encrypted connections and not allow any kind of plain text connections. Edit the **10-auth.conf**, and **10-ssl.conf** files and change the following settings (note: these parameters already exist in those files, just find them and set them to the correct value):

```bash
ssl = required
ssl_cert = < path_to_your_crt_file
ssl_key = < path_to_your_key_file
disable_plaintext_auth = yes
```

3. Now, we will disable normal imap connections, leaving only imaps (secured imap) allowed. Edit the **10-master.conf** file and set the port number in **inet_listener imap** to **0**.
4. Your key/certificate doesn't have a **.pem** extension but they are PEM-encoded files. You can confirm that using the **file** command. If you're interested, learning more about configuring Dovecot for SSL, refer to the following documentation: [Dovecot SSL configuration](http://wiki2.dovecot.org/SSL/DovecotConfiguration).

### Verifying that Mail Messages are Encrypted

**Perform the following steps:**

1. Use the **ss** command to confirm you're only listening on the **imaps** port, and not the plain imap port.
2. Next, reconfigure your account settings in Thunderbird to use the **SSL/TLS** connection security with your IMAP server, leaving the password as **Normal Password**.

      - **NOTE**: When you send your test email, you will get another warning because you're using a self-signed certificate on **vm3**. Make certain to authorize the exception.

**Record steps, commands, and your observations on this investigation in your OPS335 lab log-book**

## Investigation 2: Configure Webmail (Roundcube Mail) To Use Encryption

In the investigation, we will modify the **roundcube** webmail application to make use of the encrypted connections the email servers provide, and to allow clients to connect to it using an encrypted connection (**https**).

![Roundcube Logo](/img/Roundcube.png)

Roundcube webmail application Logo

![Roundcube Pic](/img/Roundcube-pic.png)

Screencapture of **roundcube** webmail application running in order to send and receive mail messages via a web-browser.

**Perform the following steps on vm1:**

First, we will modify the webserver to use the encrypted connections the email servers are now providing

1. Modify the roundcube configuration file so that the following parameters reflect the encrypted settings on the mail servers:

      - **$config\['smtp_server'\]**
      - **$config\['default_host'\]**
      - **$config\['default_port'\]**
      - **NOTE**: The last two entries above refer to your IMAPS server

2. You may wish to use the configuration tool in your Roundcube installer after making those changes. To do so, you will need to add

      - **$config\['enable_installer'\] = true;**
      - to your configuration file.

3. Next, test if the roundcube webmail application is working by sending and receiving e-mail messages.

Now that the webmail application is using an encrypted connection when communicating with the email servers, it is time to encrypt the client's connection to the web server.

4. First you need to generate a new certificate for apache **on your vm1** machine by issuing the following commands:

```bash
mkdir /etc/ssl/{private,certs}
openssl genrsa -des3 -out vm1.andrewsmith.ops.key 2048
chmod 600 vm1.andrewsmith.ops.key
openssl req -new -key vm1.andrewsmith.ops.key -out vm1.andrewsmith.ops.csr
openssl x509 -req -days 365 -in vm1.andrewsmith.ops.csr -signkey vm1.andrewsmith.ops.key -out vm1.andrewsmith.ops.crt
openssl rsa -in vm1.andrewsmith.ops.key -out vm1.andrewsmith.ops.key.nopass
mv vm1.andrewsmith.ops.key.nopass vm1.andrewsmith.ops.key
openssl req -new -x509 -extensions v3_ca -keyout cakey.pem -out cacert.pem -days 3650
chmod 600 vm1.andrewsmith.ops.key cakey.pem
cp vm1.andrewsmith.ops.key cakey.pem /etc/ssl/private
cp vm1.andrewsmith.ops.crt cacert.pem /etc/ssl/certs
```

   - **NOTE**: This process is identical to what you've done for the other two certificates.

5. Install the **mod_ssl** package to allow apache to use ssl.
6. Add the following parameters to the apache configuration file:

```bash
SSLEngine on
SSLCertificateFile "absolute_path_to_the_.crt_file"
SSLCertificateKeyFile "abolute_path_to_the_.key_file"
```

7. Restart apache and modify your firewall to allow traffic to **port 443**.
8. Open a web-browser on your host and try to connect to https://vm1.<yourdomain\>.ops/webmail

      - You should get a security exception similar to the one's you saw with the email, and for the same reason (the site you are trying to contact has a self-signed certificate). Add the exception and login to access your email.
      - Send an email to ensure everything is functioning properly.

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs.

**Record steps, commands, and your observations on this investigation in your OPS335 lab log-book**

## Completing The Lab

### Online Submission

Follow the instructions for lab 7 on blackboard.

## Exploration Questions

1. Briefly define the term **TSL**.
2. Briefly define the term **SSL**.
3. List the steps to setup Encryption for Postfix with TLS.
4. List the steps to setup Encryption for Dovecot with SSL.
5. List the steps to setup Encryption for the Thunderbird application.
6. Provide a brief description of the following terms as they relate to mail servers:

      - **Open Relay**
      - **SPF**
      - **DKIM**

7. How does a webmail application differ from using another MUA like Thunderbird?
8. List the additional Apache modules that are required in order to run the Roundcube web application?
