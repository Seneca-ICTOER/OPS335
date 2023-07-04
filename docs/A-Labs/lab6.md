---
id: lab6
title: Lab 6
sidebar_position: 9
description: Lab 6
---

# Lab 6 - Web Server

## Objective and Preparation

In this lab, we will look at several separate technologies that are used with the Apache web server to install, configure and run web applications.

The basic purpose of the Apache web server is to serve text pages, images, and other static files. You can format those web-pages to appear nice, but they would lack dynamic functionality (i.e. the ability to change colors or font-size when the mouse moves over a link, button, etc). In other words using Apache web-server as a sole application would not make your web-pages more interesting.

If we want to add more features for our web-page (eg. dynamic functionality, security, e-commerce, etc), your webserver would need additional help. To provide additional help requires several resources - more than just the web server itself. A popular acronym to represent these foundations and servers is referred to as **LAMP**. It stands for **Linux**, **Apache**, **MySQL**, and **PHP** (or _Python_).

![LAMP](/img/Lamp.png)

Image by Shmuel Csaba Otto Traian, https://commons.wikimedia.org/w/index.php?curid=28224098) (via: [Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0))

In your previous OPS235 course, your second assignment may have required you setup a similar series of services in order to run a Wiki on one of your virtual machines. In this lab, we will set up another example of a "**LAMP solution**" that will allow the user to run webmail in a web-browser to send and receive e-mail messages.

### Online Resources

- [Installing Apache Webserver on Centos7](http://www.liquidweb.com/kb/how-to-install-apache-on-centos-7/)
- [PHP Tutorial](http://www.w3schools.com/php/default.asp) (w3schools.com)
- [MySQL / SQL Language Resources](http://www.w3schools.com/sql/) (w3schools.com)

## Investigation 1: Setting Up A Webserver With Dynamic Webpages

### Install, Configure & Run a Webserver (Apache)

Next we need to install, configure and run a webserver on one of our Linux VMs.

**Perform the following steps:**

1. Make certain you are in your **VM1** machine.
2. Install the Apache package (the name of the package is **httpd**).
3. Start the httpd service, and enable this service to start automatically upon system startup.
4. Using a text browser such as **lynx** on vm1 go to http://localhost. You should get the Apache Test Page which indicates your web server is running on the local virtual machine.
5. Make certain to configure your firewall to allow access to the httpd service (i.e. the Apache serves HTTP traffic which goes over TCP port **80**) and keep the changes past rebooting.
6. Open a web-browser in your **host** machine and enter the following URL: **vm1.youruserid.ops**.

      - If you setup your Apache webserver correctly, you should be able to view the Apache Test page.

7. Although we will not be exploring webservers in depth, we will have you create a simple webpage for testing purposes, then later setup a web resource for webmail.
8. The term **DocumentRoot** specifies where the Apache webserver will search for documents to serve. Create the file **index.html** in your **DocumentRoot** directory with the following contents (replace the date with the current one):

```text
Hello, this is a web page on vm1.youruserid.ops and the current time is Mar 28 22:16:27 EDT 2016!
```

9. If you refresh your web-browser page in your browser, you should see the contents of your _index.html_ document. If you wish, you can specify the filename index.html in the address, but it is not necessary, since the file index.html is automatically loaded by default when the URL refers to that directory containing that file.

**Using the** index.html **file:** It is considered to be a "best practice" to create **index.html** files for newly-created subdirectories within the **DocumentRoot** (or users' **public_html** directories) to force a display of a web-page, instead of viewing the directories "index" listing of files (from "curious eyes"): that is why the name of the file is called "_index.html_".

10. Refresh your web-page by issuing the keycombination: **ctrl-r**. Notice that the time doesn't change as you refresh the page. This indicates that the page is static (not dynamic) indicating that the page does not change (i.e. boring!).

### Creating a PHP Script

In order to allow us to run a webserver application in a web-browser, we need a scripting language that will allow the web-browser to function dynamically (i.e. being able to change frequently, as opposed to being "static" or unchanging). In this section, we will demonstrate how a scripting language (PHP) can be used for the web-browser to react in a more dynamic fashion.

**PHP Scripting Language**

PHP code is considered to be a language that runs on the web-server (i.e. "server-side programming"). PHP code can be embedded in an HTML document (HTML code), and use the resources on the "server-side" to make the web document or resource more dynamic (eg. database access, etc). Although it is not the purpose of this course to learn about and create PHP documents, here is a quick resource on PHP: [PHP Tutorial](http://www.w3schools.com/php/default.asp)

**Perform the following steps:**

1. **Copy** the **index.html** file as **index.php** and modify it to contain:

```text
Hello, this is a web page on vm1.youruserid.ops and the current time is <?php system("date"); ?>!
```

2. On your host machine, in the web-browser manually add **/index.php**. Notice that in a web browser the _index.php_ file isn't treated as a default page and the contents don't contain the date, but instead are displaying the text in the php code you entered into the index.php file (refer to above code).
3. The reason this occurs is that the PHP interpreter hasn't been installed on your vm by default.
4. Install the **php** package on your vm1 machine, and restart your webserver. NOTE: The php package comes with a working default Apache configuration so you don't need to enable it manually.
5. Refresh the webpage in your web-browser on your host machine. You should now notice that you see the date instead of the call to the date command. Refresh your webpage several times to see how the time changes. This is simply a "trivial example" of dynamic web content does it does provide a simple demonstration of how scripting languages can be used to create more dynamic webpages.

### Controlling Access to Pages

For security, it is important to allow access to general areas of your webpage, but also limit access to other sub-directories that contain other webpages or documents. Penetration Testers or hackers may be able to navigate your file systems within your html directory to obtain unauthorised information.

There are many common-sense safeguards, such as creating an index.html file in your default directory that will display a webpage instead of the directory index. On the other hand, there are also safeguards that you can setup to provide additional protection to your data on your web server.

**Perform the following steps:**

1. As the root user on your gateway/host, try to forward incoming http connections that arrive on your host to the web server on vm1. Use an iptables command something like this:

```bash
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to 192.168.X.2
```

   - OR this (whichever works):

```bash
iptables -t nat -A PREROUTING -i *externalinterface* -p tcp --dport 80 -j DNAT --to 192.168.X.2
```

**Do not save these rules:** The PREROUTING rule above will redirect all HTTP requests to vm1. That will be a problem in the future when you run yum install or yum update, which downloads things over HTTP.

2. You will also need to create a rule in the FORWARD chain in the default table to accept connections to port 80.
3. To test this setup you'll need to use another machine outside your own network. For this purpose you can simply use the host (machine running Vmware).
4. Have the external machine view both **index.html** and **index.php**
5. Create a new directory called **private** inside your **DocumentRoot** and move index.php inside it.
6. View both files again.

      - You will now modify the settings on the web-server to prevent machines outside our network from accessing the private directory.

7. Add the following directory statement to your apache configuration file. The default pathname for the apache configuration file is: **/etc/httpd/conf/httpd.conf** (NOTE: replace the X with your own network octet):

**Do not overwrite existing settings:** There should already be two Directory statements in that file. One for **/var/www** and one for **/var/www/html**. Add your new Directory statement after them. Do not overwrite them.

```html
<Directory "/var/www/html/private">
  AllowOverride None
  Require ip 192.168.X.0/24
</Directory>
```

This sets up separate rules and access permissions for that subdirectory. Your should no longer be able to access any pages in the private directory (or any sub-directories of it) from external machines, but your internal machines (including your host) should still have access.

**Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book**

## Investigation 2: Setting Up An Online Database

The next piece of the puzzle is installing, configuring, and running a database server to support your webmail application that will be installed and setup later in this lab.

### Install, Configure and Run MySQL Database Server

MySQL is used to allow storage and retrieval of structured data. SQL is a command language (used by scripting languages such as PHP) to allow programmers to access databases contained within a server (or other servers via a network) to be used within web-based applications via the web-browser.

We won't spend much time learning the details of MySQL configuration but you need a basic server set up. You may remember when setting up MySQL from OPS235 - it is basically the same concept.

**MySQL / SQL Language Resources:** Again, MySQL can be a complex topic: Seneca has an entire course that concentrates on using SQL commands! Here is a link to [MySQL / SQL Language resources: MySQL / SQL Language Resources](http://www.w3schools.com/sql/).

**Perform the following steps:**

1. Install **mariadb-server**.

      - The MySQL and MariaDB are actually two separate projects run by different groups, yet they are compatible; therefore, you can use documentation from one to configure the other.

2. **NOTE**: When installing mariadb, make certain that you have not just the **client** but also the **server software**.
3. When you start the MySQL service, check the system log file for instructions regarding how to set the root password. Even though we will **not** configure our MySQL service to be **accessible over the network**, it is accepted as a "best practice" configuring for network access for each MySQL installation.
4. Note that the MySQL service has two root passwords:

      - For the localhost
      - For external requests

5. Start the mariadb server, then refer to the log file (by running **journalctl -xe**) to learn how to run the two commands in order to generate the appropriate passwords.

      - NOTE: Use a password you make up yourself, but do not use your own secret password, since you will be storing that password in a plain text file for later reference.

6. Start the service and ensure that it will start automatically every time the machine boots.

### Test Connection to MySQL Database Server

While the web server (with php), and MySQL server may be working individually, we need to ensure that they can connect to each other. Since this test will involve storing the database password in a plain-text html file, we want to make sure no one else can access it.

**Perform the following steps:**

1. Modify the Directory statement for your **private** directory to prevent any machine other than your vm1 from accessing it.
2. Re-start the web-server and try to access the page from another machine. Make sure that you can **not** do so before you continue.
3. Install the **php-mysql** module so that the installation of php your web server is using can execute sql statements. You will have to restart the service after installing it.
4. Modify the **index.php** page in your **private** directory to match the code below. This will test that your web server can connect to the database (replace the <user\> and <password\> with values appropriate for your machine):

```php
<?php
$mysqli = new mysqli("localhost", "<user>", "<password>");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";
?>
```

5. Once that page shows a successful connection on your VM (**Localhost via UNIX socket** via the **lynx** application) this step is complete.

You have now established that the web server is able to run code which can interract with the database. This will allow dynamic pages to make use of information stored there when providing resources to your users.

**Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book**

## Investigation 3: Install, Configure and Run Webmail Application (Roundcube Mail)

In the investigation, we will simply install, configure and run the **roundcube** webmail application. 

![Roundcube Logo](/img/Roundcube.png)

**Roundcube** webmail application Logo GPL, https://commons.wikimedia.org/w/index.php?curid=1772791

**Perform the following steps on vm1**:

1. Download the lastest **Complete** "zipped tarball" from their website (https://roundcube.net/download/) using wget on the download link
2. Extract the "zipped tarball" and rename the generated directory that contains download source code to: **webmail**. Also make sure that **webmail** is a sub-directory of your **DocumentRoot**.

      - Use the **--no-same-owner** option when extracting the tar achive to ensure that the files do not keep the original owner (who will not exist on your system).

![Roundcube Pic](/img/Roundcube-pic.png)

Screencapture of **roundcube** webmail application running in order to send and receive mail messages via a web-browser.

3. Change the ownership of the **temp** and **logs** directories so they belong to **apache**.
4. If you're not in Andrew's sections and you have SELinux enabled: This service needs to be able to write to several directories (**temp** and **logs**) that SELinux prevents write access to. If you are in a section that has SELinux set to **enforcing**, run the following commands to let it know that apache should be allowed to write to files in those directories.

```bash
semanage fcontext -a -t httpd_log_t '/var/www/html/webmail/temp(/.*)?'
semanage fcontext -a -t httpd_log_t '/var/www/html/webmail/logs(/.*)?'
restorecon -v -R /var/www/html/webmail
```

   - NOTE: If your machine does not have the **semanage** command, use yum to install the **policycoreutils-python** package.
   - You will also need to tell selinux to allow the webserver to open connections to the MTAs with

```bash
setsebool -P httpd_can_network_connect 1
```

5. In the directory now named "webmail", there will be a file named **INSTALL** which will walk you through the rest of the Roundcube installation.

    - Some installation tips to consider:
      + Be careful about copying & pasting the MySQL setup part: take time and pay attention to detail: do not try to "rush it".
      + You will need to install additional Apache modules including: **php-xml** and **php-mbstring**.
      + Don't forget to set the password in the roundcube configuration.

6. To make things easier, RoundCube has a well configured installation page available through your local web browser (You will see a note about it in the **INSTALL** file).

    - Go onto your host, open Firefox and on the address bar type **vm1.<yourSenecaID\>.ops/webmail/installer**, make sure your dns on host can resolve the web address. Alternatively, instead of "vm1.<yourSenecaID\>.ops" you can input the ip address of your vm1, **192.168.X.2/webmail/installer**, change X to your own IP octet.
    - Inside the web browser installer, ensure all required options are "**ok**", if "**DOM: not ok**" it means you need to install additional php packages (yum install php-xml php-mbstring). Once everything is ready (it will not let you continue otherwise) click next go to the next page.
    - On the next page, under the **IMAP settings** insert **vm3.<yourSenecaID\>.ops** in **default_host** field and **143** in **default_port** field. Under **SMTP settings** insert **vm2.<yourSenecaID\>.ops** in **smtp_server** field, and **25** in **smtp_port** field. Ensure **smtp_user/smtp_pass** is **empty** and **uncheck** the "Use the current IMAP username and password for SMTP authentication" checkbox.
    - Under **Database setup db_dsnw**, enter "localhost" as your database server, "roundcubemail" for database name. Put "roundcube" as Database user, and the password you set for the roundcube user when you configured that in the previous step for database password. Everything else can be left as default.
    - Click Next to create the configuration file, then download it to your **host**. By default it will be saved under **~yourSenecaID/Downloads**. Transfer that file **to vm1** using **scp** and place it inside **/var/www/html/webmail/config** folder.
    - Go to test config page if you are not there already and "Check config file" should be ok. "Check DB config" should also be ok, if not check your mysql settings.
    - Make sure your SMTP and IMAP servers are running, then finally test your configuration by sending email using your smtp server through test field provided by webmail installer, you should receive a test email sent by RoundCube. Test your IMAP settings by simply loging in with your SenecaID and vm3 password on the same webpage.
    - If everything works properly you can **skip to** step 9. *Remember you can edit the configuration file manually by editing "/var/www/html/webmail/config/config.inc.php".

7. Note that both of your IMAP and SMTP servers are on different machines (i.e. not on vm1). Therefore, you should see custom values in the following parameters in the Roundcube configuration file:

```bash
$config['smtp_server']
$config['smtp_user'] = '';
$config['smtp_pass'] = '';
$config['default_host']
$config['default_port']
```

   - **NOTE**: The last two entries above refer to your IMAP server

8. Now that you have Roundcube installed it is time to test if the roundcube webmail application is working by logging on, then sending and receiving e-mail messages:
    - Using the Firefox webbrowser, navigate to **vm1.<yourdomain\>.ops/webmail** and login (using the username only).
    - Use the interface provided to send and receive email.

9. If mail sent through roundcube is sending from the wrong domain (i.e. user@vm3.yourdomain.ops instead of user@yourdomain.ops), each user can override it in the settings tab, or you can set:

```bash
$config['mail_domain']
```

**Record steps, commands, and your observations in INVESTIGATION 3 in your OPS335 lab log-book**

**Backup your VMs!:** You MUST perform a **full backup** of ALL of your VMs whenever you complete your **OPS335 labs** or when working on your **OPS335 assignments**. You should be using the dump or rsync command, and you should use the Bash shell script that you were advised to create in order to backup all of your VMs.

## Completing The Lab

You now have a complete LAMP stack and could host a variety of web-pages that could include dynamically generated content and database access. You also have a webpage that is relying on a number of different services cooperating in order for it to work properly.

### Online Submission

Follow the instructions for lab 6 on blackboard.

## Exploration Questions

1. What does the term LAMP stand for? Briefly describe the purpose of each of the following items in LAMP.
2. What is the major difference between a static web document and a dynamic document?
3. What does the term "server-side programming" mean?
4. What is the purpose of creating and using an index.html file?
5. What is the purpose of creating and using an index.php file?
