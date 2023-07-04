"use strict";(self.webpackChunkOPS335=self.webpackChunkOPS335||[]).push([[974],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),g=r,k=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9289:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={id:"assignment1-part1",title:"Assignment 1 (Part 1)",sidebar_position:1,description:"Assignment 1 (Part 1)"},i="Assignment 1 (Part 1)",l={unversionedId:"B-Assignments/assignment1-part1",id:"B-Assignments/assignment1-part1",title:"Assignment 1 (Part 1)",description:"Assignment 1 (Part 1)",source:"@site/docs/B-Assignments/assignment1-part1.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment1-part1",permalink:"/OPS335/B-Assignments/assignment1-part1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS335/tree/main/docs/B-Assignments/assignment1-part1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assignment1-part1",title:"Assignment 1 (Part 1)",sidebar_position:1,description:"Assignment 1 (Part 1)"},sidebar:"courseNotesSidebar",previous:{title:"Lab 8",permalink:"/OPS335/A-Labs/lab8"},next:{title:"Assignment 1 (Part 2)",permalink:"/OPS335/B-Assignments/assignment1-part2"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"General Requirements",id:"general-requirements",level:2},{value:"Detailed Requirements",id:"detailed-requirements",level:2},{value:"Set-up a Virtual Network (335assign)",id:"set-up-a-virtual-network-335assign",level:3},{value:"Create a &quot;Cloning-Source&quot; VM (335assign Virtual Network)",id:"create-a-cloning-source-vm-335assign-virtual-network",level:3},{value:"Set-up Firewall Rules for your Cloning-Source",id:"set-up-firewall-rules-for-your-cloning-source",level:3},{value:"Create Full and Incremental Backups of cloning-source VM",id:"create-full-and-incremental-backups-of-cloning-source-vm",level:3},{value:"Assignment Submission",id:"assignment-submission",level:2},{value:"Assignment Evaluation Details",id:"assignment-evaluation-details",level:3},{value:"Evaluation Rubric",id:"evaluation-rubric",level:2}],p={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-1-part-1"},"Assignment 1 (Part 1)"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"For this portion of assignment 1, you will set up the basic functionality for a virtual machine to act as a ",(0,r.kt)("strong",{parentName:"p"},"cloning-source")," to make it easier for the student to create other servers (VMs) in later assignments. Whenever you clone another server (in later assignments), you MUST make certain to configure the cloned server in order to make it function in the network correctly and meet the requirements of future assignments. All of the assignments for this course are ",(0,r.kt)("strong",{parentName:"p"},"interdependent")," of each other and belong to the same Virtual Private Network called ",(0,r.kt)("strong",{parentName:"p"},"335assign"),"."),(0,r.kt)("h2",{id:"general-requirements"},"General Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight"),": ",(0,r.kt)("strong",{parentName:"p"},"2.5%")," of the overall grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date"),": check with your professor"),(0,r.kt)("h2",{id:"detailed-requirements"},"Detailed Requirements"),(0,r.kt)("h3",{id:"set-up-a-virtual-network-335assign"},"Set-up a Virtual Network (335assign)"),(0,r.kt)("p",null,"Create a new virtual network on your Host Machine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assign a newly-created virtual network the name: ",(0,r.kt)("strong",{parentName:"li"},"335assign"),", and set ",(0,r.kt)("strong",{parentName:"li"},"forwarding to any physical device")," (refer to ","[lab setup]",' (ADD LINK). You can have have 2 different network names: "335assign" and "ops335" without causing any problems).'),(0,r.kt)("li",{parentName:"ul"},"Addresses in this network will start with ",(0,r.kt)("strong",{parentName:"li"},"172.28.105"),". The subnet mask must be ",(0,r.kt)("strong",{parentName:"li"},"255.255.255.0")),(0,r.kt)("li",{parentName:"ul"},"There must ",(0,r.kt)("strong",{parentName:"li"},"NOT")," be a DHCP server running for this network!"),(0,r.kt)("li",{parentName:"ul"},"All the machines for this assignment will be connected to your newly-created virtual network called: ",(0,r.kt)("strong",{parentName:"li"},"335assign"))),(0,r.kt)("h3",{id:"create-a-cloning-source-vm-335assign-virtual-network"},'Create a "Cloning-Source" VM (335assign Virtual Network)'),(0,r.kt)("p",null,"Create a virtual machine that you will use as a cloning-source."),(0,r.kt)("p",null,"Details for the cloning-source"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The name of this cloning-source VM will be called: ",(0,r.kt)("strong",{parentName:"li"},"pangaea"),"."),(0,r.kt)("li",{parentName:"ol"},"You should use the options that you used in your lab1 to setup the static network, plus you should use the DOMAIN parameter to set the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," domain for your cloning-source."),(0,r.kt)("li",{parentName:"ol"},"The VM should have a command-line interface only."),(0,r.kt)("li",{parentName:"ol"},"Configure it to be a good cloning-source, ",(0,r.kt)("strong",{parentName:"li"},"making certain that the cloning-source has all the following elements prior to cloning"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don't make the virtual drive too big: you will need space for it as well as space for the clones you from your cloning-source (",(0,r.kt)("strong",{parentName:"li"},"5 GB")," should be enough for any cloning-source and clone VM that you create for this assignment)."),(0,r.kt)("li",{parentName:"ul"},"The hostname for this server will be called: ",(0,r.kt)("strong",{parentName:"li"},"pangaea")),(0,r.kt)("li",{parentName:"ul"},"Make certain that you can login to your cloning-source."),(0,r.kt)("li",{parentName:"ul"},"Configure your network interface for this cloning-source with a ",(0,r.kt)("strong",{parentName:"li"},"static")," configuration and is connected to the ",(0,r.kt)("strong",{parentName:"li"},"335assign")," network. Refer to the table below for IP address and hostname.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hostname / Domain"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(your existing host / source)"),(0,r.kt)("td",{parentName:"tr",align:null},"External Facing Address: ",(0,r.kt)("strong",{parentName:"td"},"DHCP assigned")," Internal Virtual Bridge (virbr1): ",(0,r.kt)("strong",{parentName:"td"},"172.28.105.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Your ",(0,r.kt)("strong",{parentName:"td"},"host")," machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pangaea.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cloning-source")," used to create other servers for other assignments.")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Make certain your cloning-source can connect to the Internet using the newer static configuration."),(0,r.kt)("li",{parentName:"ol"},"Run a ",(0,r.kt)("strong",{parentName:"li"},"yum update")," for this cloning-source."),(0,r.kt)("li",{parentName:"ol"},"Make certain that SELinux is set to ",(0,r.kt)("strong",{parentName:"li"},"enforcing")," (unless you're in Andrew or Hans' sections - then have it ",(0,r.kt)("strong",{parentName:"li"},"disabled"),")."),(0,r.kt)("li",{parentName:"ol"},'Set up an SSH server on this "cloning-source".'),(0,r.kt)("li",{parentName:"ol"},"Make sure that ",(0,r.kt)("strong",{parentName:"li"},"PermitRootLogin")," is set to ",(0,r.kt)("strong",{parentName:"li"},"yes")," for this server."),(0,r.kt)("li",{parentName:"ol"},"Make certain that the root account is permitted to login only using key authentication. If other users are required to be created in a later assignment, they should be permitted to log in with their username and password."),(0,r.kt)("li",{parentName:"ol"},"Copy the same public key (already generated for your ",(0,r.kt)("strong",{parentName:"li"},"Host Machine")," for your ",(0,r.kt)("strong",{parentName:"li"},"root")," account in lab1) to the ",(0,r.kt)("strong",{parentName:"li"},"root")," account on your cloning-source."),(0,r.kt)("li",{parentName:"ol"},'Test to make certain that you can login from root on your host machine to your root account on the cloning-course ("pangaea") ',(0,r.kt)("strong",{parentName:"li"},"without")," being prompted for a pass-phrase."),(0,r.kt)("li",{parentName:"ol"},"If you have created a ",(0,r.kt)("strong",{parentName:"li"},"regular user")," when you installed this machine, ",(0,r.kt)("strong",{parentName:"li"},"delete that regular user")," (make certain to ",(0,r.kt)("strong",{parentName:"li"},"remove the regular user's home directory!"),").")),(0,r.kt)("h3",{id:"set-up-firewall-rules-for-your-cloning-source"},"Set-up Firewall Rules for your Cloning-Source"),(0,r.kt)("p",null,"Perform the following steps for this section:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make certain that you have ",(0,r.kt)("strong",{parentName:"li"},"iptables")," services enabled and running instead of ",(0,r.kt)("em",{parentName:"li"},"Firewalld"),"."),(0,r.kt)("li",{parentName:"ol"},"Modify the ",(0,r.kt)("strong",{parentName:"li"},"iptables")," to meet the following conditions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All outgoing traffic is allowed."),(0,r.kt)("li",{parentName:"ul"},"Responses to any traffic the machine sends out are allowed."),(0,r.kt)("li",{parentName:"ul"},"Traffic on the loopback interface is allowed."),(0,r.kt)("li",{parentName:"ul"},"The host machine (and ",(0,r.kt)("strong",{parentName:"li"},"only")," the host machine) must be able to ssh to that cloning-source VM."),(0,r.kt)("li",{parentName:"ul"},"ICMP traffic is allowed if it originated with the local network only."),(0,r.kt)("li",{parentName:"ul"},"As this is acting as the secure basis for later machines, no other traffic should be allowed, and no response should be sent if any other traffic is received.")))),(0,r.kt)("h3",{id:"create-full-and-incremental-backups-of-cloning-source-vm"},"Create Full and Incremental Backups of cloning-source VM"),(0,r.kt)("p",null,"Perform the following steps for this section:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"This task is to be performed in your ",(0,r.kt)("strong",{parentName:"li"},"host")," machine."),(0,r.kt)("li",{parentName:"ol"},"Issue the command ",(0,r.kt)("strong",{parentName:"li"},"su -")),(0,r.kt)("li",{parentName:"ol"},"Create a Bash shell script called ",(0,r.kt)("strong",{parentName:"li"},"/root/bin/assnBackup.bash")," to perform a ",(0,r.kt)("strong",{parentName:"li"},"full backup")," using the ",(0,r.kt)("strong",{parentName:"li"},"gzip")," command to backup the entire file system of your cloning-source VM to save the compressed copy to the directory path: ",(0,r.kt)("strong",{parentName:"li"},"/backup/full/"),")."),(0,r.kt)("li",{parentName:"ol"},"This shell script should read each of any number of VM image files in the ",(0,r.kt)("strong",{parentName:"li"},"/var/lib/libvirt/images"),' directory that has the extension ".qcow2". In this way, this shell script will safely backup any new VMs that are created later in this course, yet backup the existing labs and assignment VMs.'),(0,r.kt)("li",{parentName:"ol"},"Perform a Net-search to use the ",(0,r.kt)("strong",{parentName:"li"},"pv")," (",(0,r.kt)("em",{parentName:"li"},"pipe-viewer"),") command to show a text-based indicator of backup for EACH VM image file. You need to add the ",(0,r.kt)("strong",{parentName:"li"},"EPEL repository")," to install the pv command."),(0,r.kt)("li",{parentName:"ol"},"Set execute permissions for this script, and ",(0,r.kt)("strong",{parentName:"li"},"run this Bash shell script prior to exiting your assignment work session to properly backup your cloning source"),". You should also make a copy of the backup on an external device (such as a USB key)."),(0,r.kt)("li",{parentName:"ol"},"Set-up via a crontab entry, an ",(0,r.kt)("strong",{parentName:"li"},"incremental backup")," of the ",(0,r.kt)("strong",{parentName:"li"},"/etc/")," directory of your cloning-source to be performed every hour to the ",(0,r.kt)("strong",{parentName:"li"},"/backup/incremental/cloning-source")," directory.")),(0,r.kt)("h2",{id:"assignment-submission"},"Assignment Submission"),(0,r.kt)("p",null,"The student is required to prove to their professor that their set-up works correctly during the regularly-scheduled lab period."),(0,r.kt)("h3",{id:"assignment-evaluation-details"},"Assignment Evaluation Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Demonstrate working assignment to your instructor in class:")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'Students can demonstrate their assignment functionality to their professor during a lab period (like you would for any lab for "sign-off").'),(0,r.kt)("li",{parentName:"ol"},"Students are required to prepare everything ahead of time so that you can quickly demonstrate to your instructor that all required parts of your assignment are working."),(0,r.kt)("li",{parentName:"ol"},"The idea of the demonstration of your assignment to your instructor is to check for errors that may cause problems when running the checking script."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download and run a shell script to check your work:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Login as ",(0,r.kt)("strong",{parentName:"li"},"root")," on your ",(0,r.kt)("strong",{parentName:"li"},"host")," machine."),(0,r.kt)("li",{parentName:"ol"},"Change to the ",(0,r.kt)("strong",{parentName:"li"},"/root/bin")," directory."),(0,r.kt)("li",{parentName:"ol"},"Make certain that your ",(0,r.kt)("strong",{parentName:"li"},"cloning-source VM is running.")),(0,r.kt)("li",{parentName:"ol"},"Issue the command to download a checking script for your assignment to your ",(0,r.kt)("strong",{parentName:"li"},"host")," machine: ",(0,r.kt)("inlineCode",{parentName:"li"},"wget https://matrix.senecacollege.ca/~ahad.mammadov/files/OPS335/check-assn1-p1.bash")),(0,r.kt)("li",{parentName:"ol"},"Set execute permissions and run the shell script. It will create a tar file for you to upload as your submission to blackboard.")))),(0,r.kt)("h2",{id:"evaluation-rubric"},"Evaluation Rubric"),(0,r.kt)("p",null,"Here is an evaluation rubric (in table form) showing you how you will be evaluated for this assignment. Part of the rubric is marked from professor observation from student demonstration of assignment in class, and the other part is based on output from the results of an assignment checking script that the student will download and run."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Student Demonstration (optional)"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Evaluation Item")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created Virtual Network: ",(0,r.kt)("strong",{parentName:"td"},"335assign")," (correct settings)"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can ",(0,r.kt)("strong",{parentName:"td"},"ping cloning-source from host machine")," with ",(0,r.kt)("strong",{parentName:"td"},"correct IPADDR")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root account on host machine can ",(0,r.kt)("strong",{parentName:"td"},"connect to cloning-source VM")," via ssh application ",(0,r.kt)("strong",{parentName:"td"},"without")," password"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloning-source VM can connect to the Internet (i.e. ",(0,r.kt)("strong",{parentName:"td"},"ping 8.8.8.8"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloning-source can SSH to student's ",(0,r.kt)("strong",{parentName:"td"},"Matrix")," account"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Configuration (Checking Script Output)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Evaluation Item")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname set to: ",(0,r.kt)("strong",{parentName:"td"},"pangaea")," only, domain name ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")," set as a network parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"yum update performed")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"No regular users on cloning source")," (just root)"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SELinux status set to: ",(0,r.kt)("strong",{parentName:"td"},"enforcing")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firewalld ",(0,r.kt)("strong",{parentName:"td"},"stopped")," and ",(0,r.kt)("strong",{parentName:"td"},"inactive")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables ",(0,r.kt)("strong",{parentName:"td"},"active")," and ",(0,r.kt)("strong",{parentName:"td"},"enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables - ",(0,r.kt)("strong",{parentName:"td"},"All outgoing traffic is allowed")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables - The ",(0,r.kt)("strong",{parentName:"td"},"host machine")," (and only the host machine) must be ",(0,r.kt)("strong",{parentName:"td"},"able to ssh to the cloning-source")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables - ",(0,r.kt)("strong",{parentName:"td"},"ICMP traffic is allowed")," if it originated with the ",(0,r.kt)("strong",{parentName:"td"},"local network only")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables - Other unexpected ",(0,r.kt)("strong",{parentName:"td"},"INPUT")," traffic is blocked without response"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iptables - all ",(0,r.kt)("strong",{parentName:"td"},"FORWARD")," traffic is blocked without response"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"correct static network configuration for cloning-source VM")," (half mark for each network config item)"),(0,r.kt)("td",{parentName:"tr",align:null},"/5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permitRootLogin set to ",(0,r.kt)("strong",{parentName:"td"},"yes")," for cloning-source VM"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup script ",(0,r.kt)("strong",{parentName:"td"},"assnBackup.bash")," structure"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use of ",(0,r.kt)("strong",{parentName:"td"},"PV")," command for backup script"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proof that ",(0,r.kt)("strong",{parentName:"td"},"VM full backup")," was run"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Crontab entries executed properly")),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Incremental Backup")," of ",(0,r.kt)("strong",{parentName:"td"},"/etc/")," directory of cloning-source to ",(0,r.kt)("strong",{parentName:"td"},"/backup/incremental/cloning-source")," directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TOTAL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"/30"))))))}m.isMDXComponent=!0}}]);