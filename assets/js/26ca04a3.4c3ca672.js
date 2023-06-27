"use strict";(self.webpackChunkOPS335=self.webpackChunkOPS335||[]).push([[81],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),h=o,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4969:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return m}});var n=a(3117),o=(a(7294),a(3905));const r={id:"lab4a",title:"Lab 4a",sidebar_position:6,description:"Lab 4a"},i="Lab 4a - Simple Mail Server Setup",l={unversionedId:"A-Labs/lab4a",id:"A-Labs/lab4a",title:"Lab 4a",description:"Lab 4a",source:"@site/docs/A-Labs/lab4a.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab4a",permalink:"/OPS335/A-Labs/lab4a",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS335/tree/main/docs/A-Labs/lab4a.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"lab4a",title:"Lab 4a",sidebar_position:6,description:"Lab 4a"},sidebar:"courseNotesSidebar",previous:{title:"Lab 3",permalink:"/OPS335/A-Labs/lab3"},next:{title:"Lab 4b",permalink:"/OPS335/A-Labs/lab4b"}},s={},m=[{value:"Overview and Preparation",id:"overview-and-preparation",level:2},{value:"Online References",id:"online-references",level:3},{value:"Investigation 1: Install, Set-Uo, And Use The Mail User Agent (MUA)",id:"investigation-1-install-set-uo-and-use-the-mail-user-agent-mua",level:2},{value:"Installing the Mail User Agent (MUA)",id:"installing-the-mail-user-agent-mua",level:3},{value:"Sending a Mail Message from your vm2 Machine to your Seneca Email Account",id:"sending-a-mail-message-from-your-vm2-machine-to-your-seneca-email-account",level:3},{value:"Sending a Mail Message within your vm2 Machine",id:"sending-a-mail-message-within-your-vm2-machine",level:3},{value:"Investigation 2: Setup MTA To Send Mail Messages (No Encryption)",id:"investigation-2-setup-mta-to-send-mail-messages-no-encryption",level:2},{value:"Verify the Postfix Service Status",id:"verify-the-postfix-service-status",level:3},{value:"Testing the connection to the Postfix Service",id:"testing-the-connection-to-the-postfix-service",level:3},{value:"Listening on all interfaces",id:"listening-on-all-interfaces",level:3},{value:"Investigation 3: Sending Email Between MTAs for vm2 and vm3 (No Encryption)",id:"investigation-3-sending-email-between-mtas-for-vm2-and-vm3-no-encryption",level:2},{value:"Completing The Lab",id:"completing-the-lab",level:2},{value:"Online Submission",id:"online-submission",level:3},{value:"Exploration Questions",id:"exploration-questions",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-4a---simple-mail-server-setup"},"Lab 4a - Simple Mail Server Setup"),(0,o.kt)("h2",{id:"overview-and-preparation"},"Overview and Preparation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Your lab 3 must be complete with a functioning DNS server for your domain before this lab will work."),(0,o.kt)("p",null,"You may not be aware of it as an user, but email is a very complex system to administer. In fact, the more modern e-mail systems (eg. web-based mail applications, etc) are more technically involved than the other archaic, hard-to-configure, and sometimes inter-operable mail systems."),(0,o.kt)("p",null,"We are going to spread the remaining email labs over a few weeks, so that by the end of this topic, you will have a sufficient understanding of what services are involved in sending, filtering, and reading email. You will also have the skills to configure a basic mail setup using the default services provided for your Centos7 Linux distribution."),(0,o.kt)("p",null,"Believe it or not, this is a simple diagram of you sending an email to someone else:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Email Server Diagram of You sending an email to someone else",src:a(8311).Z,width:"800",height:"580"})),(0,o.kt)("p",null,"This lab will show you how to set up a Mail User Agent (",(0,o.kt)("strong",{parentName:"p"},"MUA"),"), using the ",(0,o.kt)("strong",{parentName:"p"},"mailx")," package on your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," machine to send and receive e-mails on your local VM. In this case, the ",(0,o.kt)("strong",{parentName:"p"},"Postfix")," package which represents your ",(0,o.kt)("strong",{parentName:"p"},"MTA")," is most likely already installed and running on your local VM. In addition to sending and receiving emails on your Local VM, you will also be able to send a text-based e-mail from your ",(0,o.kt)("strong",{parentName:"p"},"vm2 machine")," to your ",(0,o.kt)("strong",{parentName:"p"},"Seneca mail account"),". You will also learn how to make multiple MTAs in the same network collaborate in sending emails. In addition, you will learn where the message store (MS) is located that stores mail messages until they are viewed and either deleted or transferred to other folders."),(0,o.kt)("p",null,"Although, you will not be able to receive mail messages from outside sources (such as your Seneca email account), this lab acts as a starting point in order to run a basic email server. You are NOT required to go into tremendous depth (just the minimum requirements). For example, we will not go over every aspect of the Postfix MTA service, but you should know what it represents and what is its main purpose, as opposed to the following: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Postfix_%28software%29#Architecture"},"complex diagram 1")," , ",(0,o.kt)("a",{parentName:"p",href:"https://www.credativ.de/blog/postfix-architecture-overview"},"complex diagram 2"),"."),(0,o.kt)("h3",{id:"online-references"},"Online References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/"},"Mail Send Command")," (examples how to send e-mail using mail command)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.johnkerl.org/doc/mail-how-to.html#prompt_commands"},"View and Manage Received e-mail Mesages")," (Common commands to view and manage received email messages)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/mail/answer/29436?hl=en"},"Reading Full Email Headers")," (Explanation of message header information)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://wiki.dovecot.org/MailServerOverview"},"Here's an overview")," (common mail server terms)")),(0,o.kt)("h2",{id:"investigation-1-install-set-uo-and-use-the-mail-user-agent-mua"},"Investigation 1: Install, Set-Uo, And Use The Mail User Agent (MUA)"),(0,o.kt)("p",null,"We will be using a simple text-based ",(0,o.kt)("strong",{parentName:"p"},"Mail User Agent (MUA)")," called ",(0,o.kt)("strong",{parentName:"p"},"mailx")," in this lab to ",(0,o.kt)("strong",{parentName:"p"},"both send and receive")," mail messages within your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," machine and to ",(0,o.kt)("strong",{parentName:"p"},"only send")," mail messages from your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," machine to your Seneca e-mail account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Because you're using private IP addresses and no external DNS servers are pointing to your network, you ",(0,o.kt)("strong",{parentName:"p"},"cannot")," send e-mail messages from outside your environment to your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," machine."),(0,o.kt)("h3",{id:"installing-the-mail-user-agent-mua"},"Installing the Mail User Agent (MUA)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following Steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make certain you are in your ",(0,o.kt)("strong",{parentName:"li"},"vm2")," machine."),(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("strong",{parentName:"li"},"mailx")," application (MUA) using yum",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": You can refer to the link below to acquaint yourself on how to send e-mail messages using ",(0,o.kt)("strong",{parentName:"li"},"mailx")," application: ",(0,o.kt)("a",{parentName:"li",href:"http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/"},"Mail Send Command Examples"))))),(0,o.kt)("h3",{id:"sending-a-mail-message-from-your-vm2-machine-to-your-seneca-email-account"},"Sending a Mail Message from your vm2 Machine to your Seneca Email Account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," These instructions no longer work reliably. You can still send email to your own email server, and look at the server logs to see that it did really get sent. But it probably won't be accepted for one of a multitude of good reasons. If it doesn't work for you: don't worry about it for lab submission purposes."),(0,o.kt)("p",null,"We will now test to see if your MTA for your vm2 machine is correctly running by sending email messages from your vm2 machine to your Seneca e-mail account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make certain you are still in your ",(0,o.kt)("strong",{parentName:"li"},"vm2")," machine."),(0,o.kt)("li",{parentName:"ol"},"Test email from your machine by sending an email to your ",(0,o.kt)("strong",{parentName:"li"},"Seneca email account")," using the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mail -s "Lab4a - test1" <Your Seneca email address>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": after you type in the body of the mail message, move to an empty line, and then press the key combination ",(0,o.kt)("strong",{parentName:"li"},"<ctrl",">","<d",">")," to send the message.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check your Seneca email account (Inbox / Junk Email Folder) to see if you got the email (note that it may take a few minutes to arrive, so you may also wish to try an alternate email account if you have one like gmail, etc). When you do receive that email, make a note of the return address."),(0,o.kt)("li",{parentName:"ol"},"If you did not receive the mail, check the mail logs on your vm2 machine to determine any errors messages that would indicate a mail server setup problem."),(0,o.kt)("li",{parentName:"ol"},"Once you have succeeded in sending the first email, send a second email to the same destination using the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mail -r "someone@hacker.com (Canadian Revenue Agency)" -s "Lab4a - test2" <Your Seneca email address>\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check your email to see if you got the email. If you did, make a note of the return address. How would you think that including the ",(0,o.kt)("strong",{parentName:"li"},"-r")," option could be used by penetration hackers to gain access to a computer system? What sort of steps do you think should be taken to help prevent this type of attack from happening?")),(0,o.kt)("h3",{id:"sending-a-mail-message-within-your-vm2-machine"},"Sending a Mail Message within your vm2 Machine"),(0,o.kt)("p",null,"We will now test both your MUA (mailx) and MTA (postfix) by sending and receiving e-mail messages on the local vm2 machine only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following Steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send an email message locally (i.e. only within your vm2 machine) by issuing the command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mail -s "Lab4a - Local - Test1" <yourSenecaID>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'After you type in the body of the mail message, move to an empty line, type period "." and press the ENTER key to send the message.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login with your ",(0,o.kt)("strong",{parentName:"p"},"regular user")," and issue the following command to read the mail message you send to yourself: ",(0,o.kt)("strong",{parentName:"p"},"mail")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": You can refer to the link below to view a reference chart on how to read and delete received e-mail messages at the mail command prompt: ",(0,o.kt)("a",{parentName:"li",href:"http://www.johnkerl.org/doc/mail-how-to.html#prompt_commands"},"Commands to View and Manage Received e-mail Mesages")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue the following command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/spool/mail/<yourSenecaID>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What do you see? What does this show you in terms of where mail is stored on your e-mail server?")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you received an e-mail message, the message and subject line should appear as a listing in your mail command."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": If you did not receive a mail message, check your mail server settings, check to see if your mail server is running and also check ",(0,o.kt)("strong",{parentName:"li"},"/var/log/maillog")," and ",(0,o.kt)("strong",{parentName:"li"},"/var/log/messages")," (this step requires ",(0,o.kt)("strong",{parentName:"li"},"root")," privilege)."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have received the message, type the mail message number that is displayed in your e-mail message list in the prompt and press ENTER. You should be able to confirm the message body that you sent.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Exit the mail program by typing the letter ",(0,o.kt)("strong",{parentName:"p"},"q")," and press ENTER.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Re-issue the ",(0,o.kt)("strong",{parentName:"p"},"mail")," command. What happened? Issue the command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/spool/mail/<yourSenecaID>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What do you notice?")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Exit the mail command.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record steps, commands, and your observations in INVESTIGATION 1 in your OPS335 lab log-book")),(0,o.kt)("h2",{id:"investigation-2-setup-mta-to-send-mail-messages-no-encryption"},"Investigation 2: Setup MTA To Send Mail Messages (No Encryption)"),(0,o.kt)("p",null,"We will be using the ",(0,o.kt)("strong",{parentName:"p"},"Postfix")," application as the ",(0,o.kt)("strong",{parentName:"p"},"MTA"),", and we will be setting it up on your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," and ",(0,o.kt)("strong",{parentName:"p"},"vm3"),' machines. They will act as the "sending" email servers for your internal network. You will be able to send email out of your network, and receive email from within your network, but you will ',(0,o.kt)("strong",{parentName:"p"},"not")," receive email from outside of your network due to the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Individuals outside of your domain will never find the MX records because there are no other DNS servers pointing to your DNS server (i.e. you haven't paid for it)."),(0,o.kt)("li",{parentName:"ul"},"Even if the individuals could read your MX records, your local network is using IP addresses on a ",(0,o.kt)("strong",{parentName:"li"},"private subnet"),", which is not routeable on the Internet, so it cannot be reached from outside of your system.")),(0,o.kt)("h3",{id:"verify-the-postfix-service-status"},"Verify the Postfix Service Status"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"postfix")," application should be installed by default. If it isn't, install it."),(0,o.kt)("li",{parentName:"ol"},"Postfix is capable of sending email with the default configuration, so start and enable this service, and verify that the postfix service is running."),(0,o.kt)("li",{parentName:"ol"},"Look for the running postfix service in the list of listening ports by issuing the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ss -atnp\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Which service is postfix running? Locate the port used by SMTP, and look for connections with the state LISTEN (i.e. currently listening)."),(0,o.kt)("li",{parentName:"ol"},"Write your observations in your lab logbook.")),(0,o.kt)("h3",{id:"testing-the-connection-to-the-postfix-service"},"Testing the connection to the Postfix Service"),(0,o.kt)("p",null,"We will be demonstrating the use of the ",(0,o.kt)("strong",{parentName:"p"},"nc")," application to test that the postfix service is running and listening."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the ",(0,o.kt)("strong",{parentName:"li"},"nc")," command is not installed on your vm2 machine, install it (install ",(0,o.kt)("strong",{parentName:"li"},"nc")," command for your ",(0,o.kt)("strong",{parentName:"li"},"vm3")," as well)."),(0,o.kt)("li",{parentName:"ol"},"Connect from your ",(0,o.kt)("strong",{parentName:"li"},"vm2")," to itself using the ",(0,o.kt)("strong",{parentName:"li"},"nc")," command by issuing the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nc localhost 25\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You should see a response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"220 vm2.yourdomain.ops ESMTP Postfix\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You could theoretically use SMTP commands to send an email here, but this would be a very unusual use of your mail server. You have an ",(0,o.kt)("strong",{parentName:"li"},"MUA")," for a reason."),(0,o.kt)("li",{parentName:"ol"},"Enter the command ",(0,o.kt)("strong",{parentName:"li"},"QUIT")," to close the connection to the server, then ",(0,o.kt)("strong",{parentName:"li"},"<ctrl",">","-c")," to terminate the nc command.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- **NOTE**: If it worked, this indicates that the postfix service is running, listening, and responding to connections.\n"))),(0,o.kt)("li",{parentName:"ol"},"Let's see if it works from other machines. Use ",(0,o.kt)("strong",{parentName:"li"},"nc")," to connect to ",(0,o.kt)("strong",{parentName:"li"},"vm2")," from ",(0,o.kt)("strong",{parentName:"li"},"vm3")," and see if it works. If your firewall is set up properly, the nc command should not permit a connection (i.e. ",(0,o.kt)("em",{parentName:"li"},"no route to host"),")."),(0,o.kt)("li",{parentName:"ol"},"Create an iptables rule to allow incoming connections to your ",(0,o.kt)("strong",{parentName:"li"},"SMTP")," server on your ",(0,o.kt)("strong",{parentName:"li"},"vm2"),"."),(0,o.kt)("li",{parentName:"ol"},"Once you open the port in the firewall, retry the ",(0,o.kt)("strong",{parentName:"li"},"nc")," command. You should get a different error this time (e.g. ",(0,o.kt)("em",{parentName:"li"},"connection refused"),"). This time the problem is that your service isn't listening on the outside interface, it's currently configured to listen only on the loopback (lo) interface."),(0,o.kt)("li",{parentName:"ol"},"Make sure the new iptables rule gets saved so that it will be loaded automatically from startup.")),(0,o.kt)("h3",{id:"listening-on-all-interfaces"},"Listening on all interfaces"),(0,o.kt)("p",null,'We need to configure the MTA not only to listen to connections from other (separate) MTAs, but to set the domain name and server name in order to allow the user to issue emails in the "standard way", and allow mail messages to provide a correct email address for replies.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("strong",{parentName:"li"},"vm2")," machine, launch in editing session for the postfix configuration file called: ",(0,o.kt)("strong",{parentName:"li"},"/etc/postfix/main.cf")),(0,o.kt)("li",{parentName:"ol"},'Our first editing change to the Postfix configuration will be to make the service "listen" for incoming connections on the external interface (i.e ',(0,o.kt)("strong",{parentName:"li"},"eth0")," from the VMs point of view). Change the value of the following parameter to what is displayed below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inet_interfaces = all\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"We should also set the string that will end up in the ",(0,o.kt)("strong",{parentName:"li"},"From"),": header in messages sent by this server. Change the ",(0,o.kt)("strong",{parentName:"li"},"mydomain")," option to YOUR domain name (shown below):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mydomain = yoursenecaid.ops\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Also you must set the ",(0,o.kt)("strong",{parentName:"li"},"hostname")," for this server so that will correctly specify the hostname in the ",(0,o.kt)("strong",{parentName:"li"},"From"),": header in a sent mail message. Make certain the following parameter only appears once (shown below):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"myorigin = $myhostname\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Ensure that your ",(0,o.kt)("strong",{parentName:"li"},"hostname")," and ",(0,o.kt)("strong",{parentName:"li"},"DOMAIN")," name is properly set on your machine, otherwise you will need to set the ",(0,o.kt)("strong",{parentName:"li"},"myhostname")," parameter.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Make sure there are no other un-commented copies of those above-mentioned parameters in the Postfix configuration file."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Restart the postfix service, then use the ",(0,o.kt)("strong",{parentName:"li"},"ss")," command to confirm that the your MTA is now listening on all interfaces (not just loopback)"),(0,o.kt)("li",{parentName:"ol"},"Test by connecting to it (using the ",(0,o.kt)("strong",{parentName:"li"},"nc")," command) from your ",(0,o.kt)("strong",{parentName:"li"},"vm3")," machine.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book")),(0,o.kt)("h2",{id:"investigation-3-sending-email-between-mtas-for-vm2-and-vm3-no-encryption"},"Investigation 3: Sending Email Between MTAs for vm2 and vm3 (No Encryption)"),(0,o.kt)("p",null,"Your ",(0,o.kt)("strong",{parentName:"p"},"vm2")," server should now be capable of ",(0,o.kt)("strong",{parentName:"p"},"sending")," and ",(0,o.kt)("strong",{parentName:"p"},"receiving")," email, but we can't be certain until we test it. This also would not help the users on the other machines in the network, which are still not capable of receiving email."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Repeat the configuration from investigation 2 on ",(0,o.kt)("strong",{parentName:"li"},"vm3")," (swap vm2 and vm3 when issuing command so that you are configuring vm3, and using your vm2 server to test the connections)."),(0,o.kt)("li",{parentName:"ol"},"Once that is complete, send an email from ",(0,o.kt)("strong",{parentName:"li"},"root on vm2")," to ",(0,o.kt)("strong",{parentName:"li"},"root on vm3"),", and then reply ",(0,o.kt)("strong",{parentName:"li"},"from vm3 to vm2"),"."),(0,o.kt)("li",{parentName:"ol"},"If both messages arrive, both MTAs are working. If not, use the troubleshooting tools and techniques you have already learned to diagnose and fix the problem.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backup your VMs!:")," You MUST perform a ",(0,o.kt)("strong",{parentName:"p"},"full backup")," of ALL of your VMs whenever you complete your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 labs")," or when working on your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 assignments"),". You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record steps, commands, and your observations in INVESTIGATION 3 in your OPS335 lab log-book")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing The Lab"),(0,o.kt)("p",null,"Upon completion of this lab you should have postfix mail servers running on two machines, and starting automatically when they do. These servers must have sent email both ways between each other (from vm2 to vm3, and from vm3 to vm2), and to your seneca email (or other external mail server)."),(0,o.kt)("h3",{id:"online-submission"},"Online Submission"),(0,o.kt)("p",null,"Follow the instructions for lab 4a on blackboard."),(0,o.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Briefly list the steps to install the MUA on your server for text-based messaging.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Briefly list the steps to trouble-shoot your server if you could not send e-mail messages from your vm2 machine to an external e-mail server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the command to send an e-mail message from your vm2 to your Seneca College e-mail account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What are the commands to issue in the mail prompt to:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read the first e-mail message displayed"),(0,o.kt)("li",{parentName:"ul"},"Save the 4th e-mail message to the file pathname: ~/maildir/3.msg.txt"),(0,o.kt)("li",{parentName:"ul"},"Delete the 3rd e-mail message displayed"),(0,o.kt)("li",{parentName:"ul"},"Exit the mail command prompt and return to the shell"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What were the results of sending emails locally on your vm2 machine? Show log segments to verify your answers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What is the purpose of an MTA?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What is the purpose of an MUA?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Draw a simple diagram showing how an MUA and an MTA are used to send e-mail messages between different servers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"List the steps to test a running postfix service using the nc application."))))}u.isMDXComponent=!0},8311:function(e,t,a){t.Z=a.p+"assets/images/Email-servers-a743910280dcb75edc5d46c6f7f1c345.png"}}]);