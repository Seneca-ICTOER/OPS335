"use strict";(self.webpackChunkOPS335=self.webpackChunkOPS335||[]).push([[299],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8170:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m}});var n=a(3117),r=(a(7294),a(3905));const l={id:"assignment1-part2",title:"Assignment 1 (Part 2)",sidebar_position:2,description:"Assignment 1 (Part 2)"},o="Assignment 1 (Part 2)",i={unversionedId:"B-Assignments/assignment1-part2",id:"B-Assignments/assignment1-part2",title:"Assignment 1 (Part 2)",description:"Assignment 1 (Part 2)",source:"@site/docs/B-Assignments/assignment1-part2.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment1-part2",permalink:"/OPS335/B-Assignments/assignment1-part2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS335/tree/main/docs/B-Assignments/assignment1-part2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"assignment1-part2",title:"Assignment 1 (Part 2)",sidebar_position:2,description:"Assignment 1 (Part 2)"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1 (Part 1)",permalink:"/OPS335/B-Assignments/assignment1-part1"},next:{title:"Assignment 2",permalink:"/OPS335/B-Assignments/assignment2"}},s={},m=[{value:"Purpose",id:"purpose",level:2},{value:"General Requirements",id:"general-requirements",level:2},{value:"Detailed Requirements",id:"detailed-requirements",level:2},{value:"Set-up Master Name Server (australinea)",id:"set-up-master-name-server-australinea",level:3},{value:"Set-up Slave Name Server (antarctica)",id:"set-up-slave-name-server-antarctica",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Table of Virtual Machines / DNS Records",id:"table-of-virtual-machines--dns-records",level:3},{value:"Set-up Firewall Policies",id:"set-up-firewall-policies",level:3},{value:"Assignment Submission",id:"assignment-submission",level:2},{value:"Assignment Evaluation Details",id:"assignment-evaluation-details",level:3},{value:"Evaluation Rubric",id:"evaluation-rubric",level:2}],p={toc:m};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-1-part-2"},"Assignment 1 (Part 2)"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"In this assignment, you will use the ",(0,r.kt)("strong",{parentName:"p"},"335assign")," virtual network and the ",(0,r.kt)("strong",{parentName:"p"},"pangaea")," cloning-source that you created in assignment 1 (part 1) to create two name-servers. One of the cloned VMs (hostname: ",(0,r.kt)("strong",{parentName:"p"},"australinea"),") will be a ",(0,r.kt)("strong",{parentName:"p"},"master")," name server, and the other VM (hostname: ",(0,r.kt)("strong",{parentName:"p"},"antarctica"),") will be a ",(0,r.kt)("strong",{parentName:"p"},"slave")," name server. You will install and setup the master and slave servers in order to provide various domain name resolutions for existing servers, and for servers that will be created and used in assignment #2."),(0,r.kt)("h2",{id:"general-requirements"},"General Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight"),": ",(0,r.kt)("strong",{parentName:"p"},"7.5%")," of the overall grade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date"),": check with your professor"),(0,r.kt)("h2",{id:"detailed-requirements"},"Detailed Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is YOUR responsibility to Backup all of your VMs for this Assignment!")),(0,r.kt)("p",null,"You are required to frequently backup your VMs prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs."),(0,r.kt)("h3",{id:"set-up-master-name-server-australinea"},"Set-up Master Name Server (australinea)"),(0,r.kt)("p",null,"Perform the following steps for this section:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a clone virtual machine called ",(0,r.kt)("strong",{parentName:"li"},"australinea")," from the ",(0,r.kt)("strong",{parentName:"li"},"pangaea")," cloning-source. Refer to the table below for ",(0,r.kt)("strong",{parentName:"li"},"address")," and ",(0,r.kt)("strong",{parentName:"li"},"hostname"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("strong",{parentName:"li"},"regular user")," for this virtual machine using ",(0,r.kt)("strong",{parentName:"li"},"your Seneca userID"),"."),(0,r.kt)("li",{parentName:"ol"},"Setup a DNS server on your ",(0,r.kt)("strong",{parentName:"li"},"australinea")," virtual machine noting the following items below:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"This virtual machine will be the ",(0,r.kt)("strong",{parentName:"li"},"Master DNS server")," for ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops"),"."),(0,r.kt)("li",{parentName:"ol"},"Only ",(0,r.kt)("strong",{parentName:"li"},"antarctica")," will be allowed to obtain zone transfers of this zone."),(0,r.kt)("li",{parentName:"ol"},"This machine will provide ",(0,r.kt)("strong",{parentName:"li"},"forward")," and ",(0,r.kt)("strong",{parentName:"li"},"reverse")," lookups of ALL virtual machines in the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops"),". zone, including resource"),(0,r.kt)("li",{parentName:"ol"},"records for virtual machines that do not currently exist."),(0,r.kt)("li",{parentName:"ol"},"You MUST use the following names for both the forward and reverse zone files in ",(0,r.kt)("strong",{parentName:"li"},"/var/named")," directory: ",(0,r.kt)("strong",{parentName:"li"},"mydb-for-continents.earth.ops")," and ",(0,r.kt)("strong",{parentName:"li"},"mydb-for-172.28.105")),(0,r.kt)("li",{parentName:"ol"},"Any machine in the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," network may use this machine to perform queries of machines outside the network, however it will route all such queries through the DNS server you created in lab #3."),(0,r.kt)("li",{parentName:"ol"},"For machines outside the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," domain, it will only answer queries about machines inside the network. They may not use it to query other machines.")))),(0,r.kt)("h3",{id:"set-up-slave-name-server-antarctica"},"Set-up Slave Name Server (antarctica)"),(0,r.kt)("p",null,"Perform the following steps for this section:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a clone virtual machine called ",(0,r.kt)("strong",{parentName:"li"},"antarctica")," from the ",(0,r.kt)("strong",{parentName:"li"},"pangaea")," cloning-source. Refer to the table below for ",(0,r.kt)("strong",{parentName:"li"},"address")," and ",(0,r.kt)("strong",{parentName:"li"},"hostname"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("strong",{parentName:"li"},"regular user")," for this virtual machine using ",(0,r.kt)("strong",{parentName:"li"},"your Seneca userID"),"."),(0,r.kt)("li",{parentName:"ol"},"Setup a DNS server on your ",(0,r.kt)("strong",{parentName:"li"},"antarctica")," virtual machine noting the following items below:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"This virtual machine will be the ",(0,r.kt)("strong",{parentName:"li"},"Slave DNS server")," (in case the Master Name Server goes down)."),(0,r.kt)("li",{parentName:"ol"},"This virtual machine will obtain its zone files by copying them from the Master Name Server."),(0,r.kt)("li",{parentName:"ol"},"This Slave DNS server will check for updated records from the Master DNS server every three days. If the initial attempt fails, then it will attempt every twenty-four hours until it succeeds, or three weeks have passed."),(0,r.kt)("li",{parentName:"ol"},"This machine will provide ",(0,r.kt)("strong",{parentName:"li"},"forward")," and ",(0,r.kt)("strong",{parentName:"li"},"reverse")," lookups of ALL machines in the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," zone, the zone files for which will be obtained from ",(0,r.kt)("strong",{parentName:"li"},"australinea.continents.earth.ops"),"."),(0,r.kt)("li",{parentName:"ol"},"Only machines within the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," domain will be allowed to query this machine."),(0,r.kt)("li",{parentName:"ol"},"This machine will not provide recursive lookup capabilities for any machines.")))),(0,r.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,r.kt)("p",null,"As you will now have functioning primary and secondary DNS servers, modify your network configuration file on these machines and on the ",(0,r.kt)("strong",{parentName:"p"},"cloning source")," to specify the correct IPADDR."),(0,r.kt)("h3",{id:"table-of-virtual-machines--dns-records"},"Table of Virtual Machines / DNS Records"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All")," the machines in the following table ",(0,r.kt)("strong",{parentName:"p"},"require DNS records"),". The rows not shaded represent future servers that will be created in Assignment #2."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hostname / Domain"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"africa.continents.earth.ops"),"' (your existing host)\tExternal Facing Address: ",(0,r.kt)("strong",{parentName:"td"},"DHCP assigned")," Internal Virtual Bridge (virbr1): ",(0,r.kt)("strong",{parentName:"td"},"172.28.105.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Your ",(0,r.kt)("strong",{parentName:"td"},"host")," machine"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pangaea.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cloning-source")," used to create other servers for other assignments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"australinea.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Master")," Name Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"antarctica.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Slave")," Name Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"asia.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.5")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SMTP")," mail Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"europe.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.6")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"IMAP")," mail Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"southamerica.continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"172.28.105.8")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Samba")," Server")))),(0,r.kt)("h3",{id:"set-up-firewall-policies"},"Set-up Firewall Policies"),(0,r.kt)("p",null,"In addition to the basic firewall established in assignment 1, ensure the following restrictions are met:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Any machine may query ",(0,r.kt)("strong",{parentName:"li"},"australinea")),(0,r.kt)("li",{parentName:"ol"},"Only the machines in the ",(0,r.kt)("strong",{parentName:"li"},"continents.earth.ops")," network may query ",(0,r.kt)("strong",{parentName:"li"},"antarctica"),".")),(0,r.kt)("h2",{id:"assignment-submission"},"Assignment Submission"),(0,r.kt)("p",null,"The student is required to prove to their professor that their set-up works correctly during the regularly-scheduled lab period."),(0,r.kt)("h3",{id:"assignment-evaluation-details"},"Assignment Evaluation Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Demonstrate working assignment to your instructor in class:")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'Students need to demonstrate their assignment functionality to their professor during a lab period (like you would for any lab for "sign-off").'),(0,r.kt)("li",{parentName:"ol"},"Students are required to prepare everything ahead of time so that you can quickly demonstrate to your instructor that all required parts of your assignment are working."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Do not proceed to the next step")," until you have demonstrated your assignment to your instructor to check for errors that may cause problems when running the checking script."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download and run a shell script to check your work:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Login as ",(0,r.kt)("strong",{parentName:"li"},"root")," on your ",(0,r.kt)("strong",{parentName:"li"},"host")," machine."),(0,r.kt)("li",{parentName:"ol"},"Change to the ",(0,r.kt)("strong",{parentName:"li"},"/root/bin")," directory."),(0,r.kt)("li",{parentName:"ol"},"Make certain that your ",(0,r.kt)("strong",{parentName:"li"},"assignment VMs are running"),"."),(0,r.kt)("li",{parentName:"ol"},"Issue the command to download a checking script for your assignment to your host machine: ",(0,r.kt)("inlineCode",{parentName:"li"},"wget https://matrix.senecacollege.ca/~peter.callaghan/files/OPS335/check-assn1-p2.bash")),(0,r.kt)("li",{parentName:"ol"},"Set execute permissions and run the shell script."),(0,r.kt)("li",{parentName:"ol"},"Upload the resulting file to blackboard.")))),(0,r.kt)("h2",{id:"evaluation-rubric"},"Evaluation Rubric"),(0,r.kt)("p",null,"Here is an evaluation rubric (in table form) showing you how you will be evaluated for this assignment. Part of the rubric is marked from professor observation from student demonstration of assignment in class, and the other part is based on output from the results of an assignment checking script that the student will download and run."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Student Demonstration (in class)"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Evaluation Item")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"australinea")," and ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," VMs created"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"australinea")," and ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," VMs can perform ",(0,r.kt)("strong",{parentName:"td"},"DNS queries of vm1, vm2, vm3")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"australinea")," and ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," VMs can perform ",(0,r.kt)("strong",{parentName:"td"},"forward DNS lookups")," for ALL machines within network (listed in the table above)"),(0,r.kt)("td",{parentName:"tr",align:null},"/3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"australinea")," and ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," VMs can perform ",(0,r.kt)("strong",{parentName:"td"},"reverse DNS lookups")," for ALL machines within network (listed in the table above)"),(0,r.kt)("td",{parentName:"tr",align:null},"/3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Zone transfer occurs"),(0,r.kt)("td",{parentName:"tr",align:null},"/3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Configuration (Checking Script Output)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Evaluation Item")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Master Name Server (australinea) - Network Configuration")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"correct static network configuration")," (one mark for each network config item)"),(0,r.kt)("td",{parentName:"tr",align:null},"/5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Master Name Server (australinea) - Named Configuration Options / Zone Declarations")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Zone transfer (i.e. to slave DNS server) limited to ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," only"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Allows forward and reverse lookups to ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"Recursion")," limited to ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")," only"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- australinea server is the ",(0,r.kt)("strong",{parentName:"td"},"master")," name-server for continents.earth.ops"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Master Name Server (australinea) - Zone Record")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"SOA")," - three common options (determined by instructor at time of marking)"),(0,r.kt)("td",{parentName:"tr",align:null},"/3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Correct ",(0,r.kt)("strong",{parentName:"td"},"NS")," records in forward zone"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Correct ",(0,r.kt)("strong",{parentName:"td"},"NS")," records in reverse zone"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Slave Name Server (antarctica) - Network Configuration")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"correct static network configuration")," (one mark for each network config item)"),(0,r.kt)("td",{parentName:"tr",align:null},"/5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Slave Name Server (antarctica) - Named Configuration Options")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Queries are limited to ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Slave server is ",(0,r.kt)("strong",{parentName:"td"},"Non-recursive")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Allows forward and reverse lookup for ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- antarctica server is ",(0,r.kt)("strong",{parentName:"td"},"slave")," name-server for ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Firewall policies")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"australinea")," allows queries from any machine (i.e. will work with ",(0,r.kt)("strong",{parentName:"td"},"vm1"),", ",(0,r.kt)("strong",{parentName:"td"},"vm2"),", ",(0,r.kt)("strong",{parentName:"td"},"vm3"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"antarctica")," limits queries to ",(0,r.kt)("strong",{parentName:"td"},"continents.earth.ops")," (i.e. won't work with ",(0,r.kt)("strong",{parentName:"td"},"vm1"),", ",(0,r.kt)("strong",{parentName:"td"},"vm2"),", ",(0,r.kt)("strong",{parentName:"td"},"vm3"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Less Deductions (1 mark per issue for EACH VM):")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Not using zone filenames: ",(0,r.kt)("strong",{parentName:"td"},"mydb-for-continents.earth.ops")," and ",(0,r.kt)("strong",{parentName:"td"},"mydb-for-172.28.105")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"VM hostname")," NOT set"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- firewalld ",(0,r.kt)("strong",{parentName:"td"},"enabled")," / ",(0,r.kt)("strong",{parentName:"td"},"running")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- iptables ",(0,r.kt)("strong",{parentName:"td"},"disabled")," / ",(0,r.kt)("strong",{parentName:"td"},"not running")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- No ",(0,r.kt)("strong",{parentName:"td"},"Yum update")),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("strong",{parentName:"td"},"Named")," NOT active"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Local hostname resolution appears in ",(0,r.kt)("strong",{parentName:"td"},"/etc/hosts")," (1 mark per entry, per vm)"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Neglecting major safeguards (e.g. no firewall present, firewall allowing all traffic, no active SELinux) (",(0,r.kt)("strong",{parentName:"td"},"4 marks per issue, per VM"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- Failing to backup VMs (",(0,r.kt)("strong",{parentName:"td"},"1 mark deduction for each VM not backed up"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"/1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TOTAL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"/40"))))))}d.isMDXComponent=!0}}]);