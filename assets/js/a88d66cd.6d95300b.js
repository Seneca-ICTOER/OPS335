"use strict";(self.webpackChunkOPS335=self.webpackChunkOPS335||[]).push([[761],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5569:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=a(3117),o=(a(7294),a(3905));const i={id:"installation-lab0",title:"Installation Prep Lab 0",sidebar_position:1,description:"Installation Prep Lab 0"},r="Installation Lab 0",l={unversionedId:"A-Labs/installation-lab0",id:"A-Labs/installation-lab0",title:"Installation Prep Lab 0",description:"Installation Prep Lab 0",source:"@site/docs/A-Labs/installation-lab0.md",sourceDirName:"A-Labs",slug:"/A-Labs/installation-lab0",permalink:"/OPS335/A-Labs/installation-lab0",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS335/tree/main/docs/A-Labs/installation-lab0.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation-lab0",title:"Installation Prep Lab 0",sidebar_position:1,description:"Installation Prep Lab 0"},sidebar:"courseNotesSidebar",previous:{title:"Weekly Schedule",permalink:"/OPS335/weekly-schedule"},next:{title:"Lab 1",permalink:"/OPS335/A-Labs/lab1"}},s={},u=[{value:"Objective and Preparation",id:"objective-and-preparation",level:2},{value:"Required materials",id:"required-materials",level:3},{value:"Online Resources",id:"online-resources",level:3},{value:"Investigation 1: Host Installation",id:"investigation-1-host-installation",level:2},{value:"Installation instructions for CentOS 7",id:"installation-instructions-for-centos-7",level:3},{value:"First Boot",id:"first-boot",level:3},{value:"Using iptables",id:"using-iptables",level:3},{value:"Investigation 2: Virtual Machine Installation",id:"investigation-2-virtual-machine-installation",level:2},{value:"Configuring a VM host",id:"configuring-a-vm-host",level:3},{value:"VM Installation",id:"vm-installation",level:3},{value:"First Boot",id:"first-boot-1",level:3},{value:"Cloning a Virtual Machine",id:"cloning-a-virtual-machine",level:3},{value:"Completing The Lab",id:"completing-the-lab",level:2},{value:"Online Submission",id:"online-submission",level:3},{value:"Exploration Questions",id:"exploration-questions",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-lab-0"},"Installation Lab 0"),(0,o.kt)("h2",{id:"objective-and-preparation"},"Objective and Preparation"),(0,o.kt)("p",null,"This lab is a repeat of a portion of lab1 (and some of lab2) that you already performed in OPS235 plus some newer content that relates to this week's notes. You are expected to be able to complete all this using your existing skills and knowledge or refer back to your OPS235 lab-book or OPS235 WIKI notes."),(0,o.kt)("p",null,"In this is lab, you will install your ",(0,o.kt)("strong",{parentName:"p"},"host machine")," (Centos7), ",(0,o.kt)("strong",{parentName:"p"},"install virtualization software"),", and ",(0,o.kt)("strong",{parentName:"p"},"create and install 3 nested virtual machines"),"."),(0,o.kt)("h3",{id:"required-materials"},"Required materials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centos 7 Full Installation DVD."),(0,o.kt)("li",{parentName:"ul"},"One Solid State Drive (SSD), mininmum capacity: 240 GB (USB 3.0). It is strongly advised you dedicate a drive for this course only.")),(0,o.kt)("h3",{id:"online-resources"},"Online Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.centos.org/TipsAndTricks#head-4c9ee55a5c9dc051bd32e795b46a3856e41a0335"},"Centos7 Install Tips"))),(0,o.kt)("h2",{id:"investigation-1-host-installation"},"Investigation 1: Host Installation"),(0,o.kt)("h3",{id:"installation-instructions-for-centos-7"},"Installation instructions for CentOS 7"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It may be advisable to obtain the latest version of the CentOS 7 Full Installation DVD since there may be improvements since the last version from when you took OPS235.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and burn on a DVD a copy of the CentOS 7 installation DVD (64 bit edition) from the CentOS web site or the Belmont server.\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": we'll be using the 64 bit version of CentOS because all of our lab computers are equipped with Intel 64 bit mainboards and CPUs, and any computer you bought in the last few years for yourself will be 64bit as well."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- **Seneca's mirror of CentOS**: https://mirror.senecacollege.ca/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso\n    - This is very fast, but is only accessible from within Seneca's network - you can't access this from home. You can burn this disc on the machines in the Open Lab.)\n\n- **Outside Seneca College link (available from any Internet connection):** https://mirror.netflash.net/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You need to refer to your OPS235 notes in order to install your host machine. Here is a direct link: OPS245 - Lab1 (ADD LINK)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize your installation following these guidelines:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Turn on networking")," and use ",(0,o.kt)("strong",{parentName:"li"},"host")," as the ",(0,o.kt)("strong",{parentName:"li"},"hostname"),"."),(0,o.kt)("li",{parentName:"ul"},"Under software selection, choose ",(0,o.kt)("strong",{parentName:"li"},"Gnome desktop.")),(0,o.kt)("li",{parentName:"ul"},"The partition setup is similar to what you had in OPS235:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Delete any old partitions."),(0,o.kt)("li",{parentName:"ul"},'Select the hard disk and indicate "I will configure partitions" and click done.'),(0,o.kt)("li",{parentName:"ul"},"Click the link to ",(0,o.kt)("strong",{parentName:"li"},"create them (partitions) automatically")," (this will give a typical layout with /, /boot, /boot/efi, /home, etc)."),(0,o.kt)("li",{parentName:"ul"},"Free up at least ",(0,o.kt)("strong",{parentName:"li"},"100GB")," of disk space by shrinking the /home partition (At least ",(0,o.kt)("strong",{parentName:"li"},"40")," GB for root (/) and ",(0,o.kt)("strong",{parentName:"li"},"40GB")," for /home). Since your machine will have far fewer users and more virtual machines than a typical installation, we will need that space elsewhere."),(0,o.kt)("li",{parentName:"ul"},"Create a new logical volume for ",(0,o.kt)("strong",{parentName:"li"},"/var/lib/libvirt/images")," and give it the space made available by shrinking /home (You will need enough space for up to 10 virtual machines at 8GB each plus room to compress/extract images)."),(0,o.kt)("li",{parentName:"ul"},"Make certain that the existing partitions ",(0,o.kt)("strong",{parentName:"li"},"except swap, /boot and /boot/efi")," have the file system type ",(0,o.kt)("strong",{parentName:"li"},"ext4")," (not xfs)."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the installation starts you will also have the opportunity to create users."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set the root password"),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"user account")," named with your ",(0,o.kt)("strong",{parentName:"li"},"MySeneca ID"))))),(0,o.kt)("h3",{id:"first-boot"},"First Boot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the current version of CentOS the first time you boot your system a graphical licence prompt comes up."),(0,o.kt)("li",{parentName:"ol"},"Log in and check that you have access to the internet. If you don't - you need to get the network interface to come up on boot. Edit the appropriate config file and configure your main network interface to come up at boot.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can then use the ",(0,o.kt)("strong",{parentName:"li"},"ifup"),"/",(0,o.kt)("strong",{parentName:"li"},"ifdown")," commands to reset your network configuration or you can just reboot."))),(0,o.kt)("li",{parentName:"ol"},"Make certain that ",(0,o.kt)("strong",{parentName:"li"},"SELinux")," is ",(0,o.kt)("strong",{parentName:"li"},"enforcing")," for security reasons (this should be the default). To make it ",(0,o.kt)("em",{parentName:"li"},"enforcing"),", simply edit the ",(0,o.kt)("strong",{parentName:"li"},"/etc/selinux/config")," file and follow the instructions inside.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SELinux in Andrew's sections:")," If you're in one of Andrew's sections - please disable SELinux (i.e. do the opposite of the bullet above). This will give you some extra freedom in the rest of the course to learn and experiment without being bogged down by inexplicable permission denied errors."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install all updates using the ",(0,o.kt)("strong",{parentName:"li"},"yum update")," command.")),(0,o.kt)("h3",{id:"using-iptables"},"Using iptables"),(0,o.kt)("p",null,"The most recent variants of Centos and Fedora are using a service called ",(0,o.kt)("strong",{parentName:"p"},"firewalld")," that is intended to replace ",(0,o.kt)("strong",{parentName:"p"},"iptables"),", however the ",(0,o.kt)("em",{parentName:"p"},"iptables")," service is still in relatively common usage. In this course we will concentrate on ",(0,o.kt)("em",{parentName:"p"},"iptables"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disable firewalld:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl disable firewalld\nsystemctl stop firewalld\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install and enable the IPTables services:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install iptables-services\nsystemctl enable iptables\nsystemctl start iptables\n")),(0,o.kt)("p",null,"At this point you have a basic Centos system installed and updated. This will serve as a host for the virtual machines where you will do the majority of the work in this course. All the rest of our labs will assume you have this basic system running. If, for any reason, your system becomes corrupted during the semester, you'll have to redo this lab to be able to continue with the remaining uncompleted labs. You are responsible for YOUR system. If you do not perform back-ups you have taken this risk on yourself. Poor planning on your part does not constitute an emergency for anyone else."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record steps, commands, and your observations in INVESTIGATION 1 in your OPS235 lab log-book")),(0,o.kt)("h2",{id:"investigation-2-virtual-machine-installation"},"Investigation 2: Virtual Machine Installation"),(0,o.kt)("h3",{id:"configuring-a-vm-host"},"Configuring a VM host"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will need to install some software to allow your machine to act as a host for virtual machines. We'll be using the same ",(0,o.kt)("strong",{parentName:"p"},"libvirt")," and ",(0,o.kt)("strong",{parentName:"p"},"virt-manager")," you used in OPS235 - Lab2 (ADD LINK)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You may find it helpful to refer back to the ",(0,o.kt)("strong",{parentName:"li"},"OPS235 notes")," to perform the following operations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Install the required virtualization software"),(0,o.kt)("li",{parentName:"ul"},"Start and enable the virtualization service"),(0,o.kt)("li",{parentName:"ul"},"Reboot your host machine"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the graphical virtual machine manager (",(0,o.kt)("em",{parentName:"p"},"virt-manager"),"). Do this as you regular user, and don't run virt-manager from a terminal where you're logged in as root.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We will be creating our own virtual network. A default virtual network has been created for you, but you will be using a custom one in this course."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Right click ",(0,o.kt)("strong",{parentName:"li"},"localhost (QEMU)")," and select ",(0,o.kt)("strong",{parentName:"li"},"Details"),"."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Networks")," tab."),(0,o.kt)("li",{parentName:"ul"},"Stop and delete the ",(0,o.kt)("strong",{parentName:"li"},"default")," network."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("strong",{parentName:"li"},"plus sign")," to add a new virtual network using the following options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Name your virtual network ",(0,o.kt)("strong",{parentName:"li"},"ops335")),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("strong",{parentName:"li"},"last two digits of your student number for the third octet of network IP address")," (for example, if your student number is 000-000-0",(0,o.kt)("strong",{parentName:"li"},"90"),", the network address would be 192.168.",(0,o.kt)("strong",{parentName:"li"},"90"),".0/24."),(0,o.kt)("li",{parentName:"ul"},"Ensure the DHCP range will allow you to assign ",(0,o.kt)("strong",{parentName:"li"},"at least 10 static IP addresses outside it")," (note: leave the low numbers available for static addresses)."),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Forwarding to physical network")," radio button, ",(0,o.kt)("strong",{parentName:"li"},"Destination: Any physical device")," and ",(0,o.kt)("strong",{parentName:"li"},"Mode: NAT")),(0,o.kt)("li",{parentName:"ul"},"Ensure the network is ",(0,o.kt)("strong",{parentName:"li"},"started at boot"),".")))))),(0,o.kt)("h3",{id:"vm-installation"},"VM Installation"),(0,o.kt)("p",null,"With the virtualization software installed and your personal network created, you are now ready to create your first virtual machine. First, It is a good idea to make certain that your host machine has been set up correctly prior to creating your first virtual machine:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a separate terminal and issue the ",(0,o.kt)("inlineCode",{parentName:"li"},"ip address show")," command on your host machine to know your physical network and your virtual network. Note this information for the next few steps."),(0,o.kt)("li",{parentName:"ol"},"Issue the following command to download Bash shell script to check your host machine's set-up prior to proceeding with this lab:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://ict.senecacollege.ca/~andrew.smith/ops335/labcheck_install.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Assign execute permissions, and run the script to check your work:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"labcheck_install.sh\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Use the information from the ",(0,o.kt)("strong",{parentName:"li"},"ip address show")," command to correctly specify the ",(0,o.kt)("strong",{parentName:"li"},"physical network interface")," and the ",(0,o.kt)("strong",{parentName:"li"},"virtual network interface"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE"),": You will need an ISO file for CentOS 7 (the same one you burned your DVD from). It is recommended to use the command to download this image onto your host machine. In this way, you can keep it on your host machine for the remainder of this course in case you need it:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://mirror.csclub.uwaterloo.ca/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso\n")),(0,o.kt)("p",null,"Perform the following steps to create your first VM on your Virtual Machine Manager application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new virtual machine named vm1."),(0,o.kt)("li",{parentName:"ol"},"Accept the default file type (which is ",(0,o.kt)("strong",{parentName:"li"},"qcow2"),"). You are NOT required to specify the VM file pathname as you did in OPS235.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"VM File Types")," ( .qcow2 ",(0,o.kt)("strong",{parentName:"p"},"vs"),' .img ): In OPS235, you selected the VM images as a "',(0,o.kt)("strong",{parentName:"p"},"raw"),'" image. In OPS335, you will be accepting the default image file "',(0,o.kt)("strong",{parentName:"p"},".qcow2"),'" (which stands for "QMENU Copy on Write version 2" ) that provides more features when manipulating stored VM images.'),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Since you will be installing a Linux server (as opposed to a Gnome Desktop workstation), you can ",(0,o.kt)("strong",{parentName:"p"},"use the default memory and CPU options for use with lab computers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the disk image size set to ",(0,o.kt)("strong",{parentName:"p"},"8GB")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: Since you already setup your virtual network to OPS335, your VM will be automatically connected to your new ops335 virtual network."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the following installation steps when you install your created VM:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the correct ",(0,o.kt)("em",{parentName:"li"},"location")," / ",(0,o.kt)("em",{parentName:"li"},"Time Zone"),"."),(0,o.kt)("li",{parentName:"ul"},"For Software Selection: Accept the default ",(0,o.kt)("strong",{parentName:"li"},"minimum install"),". None of your VMs in this course will have a GUI since GUIs needlessly consume resources and image space.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Installation Destination"),", and then click ",(0,o.kt)("strong",{parentName:"li"},"Done")," to confirm that an ",(0,o.kt)("strong",{parentName:"li"},"automatic install")," will be performed."),(0,o.kt)("li",{parentName:"ol"},"Click Network & Hostname and set hostname to: ",(0,o.kt)("strong",{parentName:"li"},"vm1.localdomain")," and make certain the ",(0,o.kt)("em",{parentName:"li"},"Ethernet connection")," is set to ",(0,o.kt)("strong",{parentName:"li"},"ON"),"."),(0,o.kt)("li",{parentName:"ol"},"During installation you will be prompted to set the root password and an ",(0,o.kt)("strong",{parentName:"li"},"initial user account"),". For the ",(0,o.kt)("em",{parentName:"li"},"initial user"),", enter the same information you entered on your host machine.")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First user created:")," For successful completion of the labs, please ensure the first user created is named using your Seneca username."),(0,o.kt)("h3",{id:"first-boot-1"},"First Boot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You will notice that the server installation defaults to a command-line interface. This is normal, and we will only be using this interface during this course."),(0,o.kt)("li",{parentName:"ol"},"Ensure your machine has a network connection by running the command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh your_seneca_id@matrix.senecacollege.ca\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If that did not work - make sure GlobalProtect VPN is installed on your Windows/Mac and connected. If it is, ensure your CentOS network interface is started automatically on boot.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default for network config for onboot:")," If you've turned on your networking interface during installation - it will be turned on by default. If you've left the network interface off during the installation - it will be off by default."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Once you have a working connection - update your machine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," yum update\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("strong",{parentName:"li"},"bind-utils")," package. The commands it provides (e.g. nslookup) will be useful in troubleshooting your network connection."),(0,o.kt)("li",{parentName:"ol"},"You may also want to install the ",(0,o.kt)("strong",{parentName:"li"},"nmap"),", ",(0,o.kt)("strong",{parentName:"li"},"telnet")," and ",(0,o.kt)("strong",{parentName:"li"},"net-tools")," packages to help you troubleshoot connectivity issues."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"firewalld"),", ",(0,o.kt)("strong",{parentName:"li"},"iptables")," and (if required) ",(0,o.kt)("strong",{parentName:"li"},"SELinux")," the same way you did for the host."),(0,o.kt)("li",{parentName:"ol"},"Reboot the virtual machine once it is updated.")),(0,o.kt)("h3",{id:"cloning-a-virtual-machine"},"Cloning a Virtual Machine"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now that you have one virtual machine working, you will create two more. If you struggled with the previous steps, repeat them to create two more virtual machines.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you are confident with what you have done so far, you may clone your existing machine to create the others by performing the following steps:")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Make certain that your ",(0,o.kt)("strong",{parentName:"li"},"vm1")," virtual machine is shutdown."),(0,o.kt)("li",{parentName:"ol"},"For your ",(0,o.kt)("strong",{parentName:"li"},"vm1")," machine, go to the details section and remove the device ",(0,o.kt)("strong",{parentName:"li"},"Channel qemu-ga"),"."),(0,o.kt)("li",{parentName:"ol"},"In the virtual machine manager, ",(0,o.kt)("strong",{parentName:"li"},"right click")," on ",(0,o.kt)("em",{parentName:"li"},"vm1")," and select ",(0,o.kt)("strong",{parentName:"li"},"Clone"),"...."),(0,o.kt)("li",{parentName:"ol"},"Set the Name to be: ",(0,o.kt)("strong",{parentName:"li"},"vm2")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once successfully created, boot the new VM and correct the host name. This can be done using the ",(0,o.kt)("strong",{parentName:"p"},"hostnamectl")," command-line tool.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record in your notes the steps for cloning a vm.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the host command to check for connectivity")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After creating ",(0,o.kt)("strong",{parentName:"p"},"vm2")," repeat the above steps to create ",(0,o.kt)("strong",{parentName:"p"},"vm3")," and correct the hostname (",(0,o.kt)("strong",{parentName:"p"},"vm2.localdomain")," and ",(0,o.kt)("strong",{parentName:"p"},"vm3.localdomain")," respectively)."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backup your VMs!")),(0,o.kt)("p",null,"You MUST backup ALL of your VMs whenever you complete your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 labs")," or when working on your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 assignments"),":\n","[ Backing up Your Virtual Machines ]"," (ADD LINK). Refer to OPS235 lab2 notes on how to backup your VMs. You should backup your VMs to a USB key in case something happens to your host machine. Note: VM files contained in the ",(0,o.kt)("strong",{parentName:"p"},"/var/lib/libvirt/images")," directory have the extension in ",(0,o.kt)("strong",{parentName:"p"},".qcow2")," and instead of ",(0,o.kt)("strong",{parentName:"p"},".img")," (eg. for OPS235 courses prior to Fall 2016."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record steps, commands, and your observations in INVESTIGATION 2 in your OPS335 lab log-book")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing The Lab"),(0,o.kt)("p",null,"Upon completion of this lab you should have 4 installed machines. One machine running Centos 7 and acting as a host and gateway for three virtual machines running minimal installations of Centos 7. Each machine must be fully updated and have access to the network (for example, to get further updates) and be able ping the others. Each machine must be using iptables for the firewall."),(0,o.kt)("h3",{id:"online-submission"},"Online Submission"),(0,o.kt)("p",null,"Follow the instructions for lab 0 on blackboard."),(0,o.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What kernel release is your host system running?"),(0,o.kt)("li",{parentName:"ol"},"What kernel release are your virtual machines running?"),(0,o.kt)("li",{parentName:"ol"},"What is the UUID (Universally Unique Identifier) of your root file system? What command was used to obtain this information?"),(0,o.kt)("li",{parentName:"ol"},"What is the size and type of the /boot file system on your host?"),(0,o.kt)("li",{parentName:"ol"},"What file was edited to change the host name on your VM's? Are there other ways to change the hostname?")))}m.isMDXComponent=!0}}]);