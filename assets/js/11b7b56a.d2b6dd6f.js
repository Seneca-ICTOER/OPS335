"use strict";(self.webpackChunkOPS335=self.webpackChunkOPS335||[]).push([[690],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9912:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var n=a(3117),o=(a(7294),a(3905));const r={id:"lab2b",title:"Lab 2b",sidebar_position:4,description:"Lab 2b"},l="Lab 2b - Additional iptables Troubleshooting",i={unversionedId:"A-Labs/lab2b",id:"A-Labs/lab2b",title:"Lab 2b",description:"Lab 2b",source:"@site/docs/A-Labs/lab2b.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab2b",permalink:"/OPS335/A-Labs/lab2b",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS335/tree/main/docs/A-Labs/lab2b.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"lab2b",title:"Lab 2b",sidebar_position:4,description:"Lab 2b"},sidebar:"courseNotesSidebar",previous:{title:"Lab 2a",permalink:"/OPS335/A-Labs/lab2a"},next:{title:"Lab 3",permalink:"/OPS335/A-Labs/lab3"}},s={},p=[{value:"Objective and Preparation",id:"objective-and-preparation",level:2},{value:"Online Resources",id:"online-resources",level:3},{value:"Investigation 1: Custom iptables Rules On A VM",id:"investigation-1-custom-iptables-rules-on-a-vm",level:2},{value:"Investigation 2: iptables Troubleshooting Checklist",id:"investigation-2-iptables-troubleshooting-checklist",level:2},{value:"Investigation 3: Hands-On iptables Troubleshooting",id:"investigation-3-hands-on-iptables-troubleshooting",level:2},{value:"Completing The Lab",id:"completing-the-lab",level:2},{value:"Online Submission",id:"online-submission",level:3},{value:"Exploration Questions",id:"exploration-questions",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-2b---additional-iptables-troubleshooting"},"Lab 2b - Additional iptables Troubleshooting"),(0,o.kt)("h2",{id:"objective-and-preparation"},"Objective and Preparation"),(0,o.kt)("p",null,"In Lab 2a, we set the firewall rules for your ",(0,o.kt)("strong",{parentName:"p"},"host")," machine. In this lab, we will ",(0,o.kt)("strong",{parentName:"p"},"create firewall rules for our virtual machines")," within our virtual private network. This lab will also apply ",(0,o.kt)("strong",{parentName:"p"},"best practices")," and ",(0,o.kt)("strong",{parentName:"p"},"troubleshooting techniques")," using iptables."),(0,o.kt)("h3",{id:"online-resources"},"Online Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.microhowto.info/troubleshooting/troubleshooting_iptables.html"},"Troubleshooting iptables"))),(0,o.kt)("h2",{id:"investigation-1-custom-iptables-rules-on-a-vm"},"Investigation 1: Custom iptables Rules On A VM"),(0,o.kt)("p",null,"We will now ",(0,o.kt)("strong",{parentName:"p"},"set iptables rules for your vm1 machine.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following Steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your ",(0,o.kt)("strong",{parentName:"p"},"host")," machine, and launch your ",(0,o.kt)("strong",{parentName:"p"},"vm1")," machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your ",(0,o.kt)("strong",{parentName:"p"},"root account")," on your ",(0,o.kt)("strong",{parentName:"p"},"vm1")," machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue a command (like you did in lab2a) to copy your default iptables rules to the file pathname: ",(0,o.kt)("strong",{parentName:"p"},"/etc/sysconfig/iptables.original"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an ",(0,o.kt)("em",{parentName:"p"},"iptables command")," to set the policy to disable ",(0,o.kt)("strong",{parentName:"p"},"all forwarding traffic"),", and remove the rule that is rejecting it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, set the default policy to drop ",(0,o.kt)("strong",{parentName:"p"},"all inbound traffic"),", and remove the rule that is rejecting traffic.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an iptables command to list rules for verification."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The remaining tasks will relate to that same ",(0,o.kt)("strong",{parentName:"li"},"inbound")," traffic chain:"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an ",(0,o.kt)("em",{parentName:"p"},"iptables command")," to delete the default ssh rule.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an ",(0,o.kt)("em",{parentName:"p"},"iptables command")," to add a rule that allows ssh traffic (i.e. tcp packets with destination port 22) that originates from any machine within your virtual network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an ",(0,o.kt)("em",{parentName:"p"},"iptables command")," to delete the default icmp rule.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an ",(0,o.kt)("em",{parentName:"p"},"iptables command")," to allow icmp traffic from addresses in your virtual network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test that your machines can still use ping and ssh to communicate with each other.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save your rules in the location that iptables will automatically read from when it starts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reboot your machine and check that the new rules are being applied. If they are not, resolve this issue before moving on.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now copy the file to your other VMs and make it apply to them when they boot as well.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reboot each machine and make sure this works before you move on."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record your observations in this section on your OPS335 lab log-book")),(0,o.kt)("h2",{id:"investigation-2-iptables-troubleshooting-checklist"},"Investigation 2: iptables Troubleshooting Checklist"),(0,o.kt)("p",null,"By now, you have probably discovered that a simple mistake in your iptables rules can have very serious and unexpected consequences for not only your services, but the network connectivity in general. There is a general process (checklist) that you can following to help troubleshoot iptables in order to fix the problem."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Refer to the following IPTABLES Troubleshooting Checklist:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Test Network Connectivity")),(0,o.kt)("td",{parentName:"tr",align:null},"You can use the ",(0,o.kt)("a",{parentName:"td",href:"/OPS335/A-Labs/lab1#linux-network-connection-configuration-troubleshooting"},"steps in lab 1")," as a guide, but keep in mind the firewall may be blocking pings and DNS requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Verify Service is Running & listening on the correct interfaces")),(0,o.kt)("td",{parentName:"tr",align:null},"You should learn to read the output of ",(0,o.kt)("strong",{parentName:"td"},"ss -atnp")," and ",(0,o.kt)("strong",{parentName:"td"},"ss -aunp")," to complement the ",(0,o.kt)("strong",{parentName:"td"},"systemctl status")," command.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},'List your iptables Rules & Perform a "Walk-Thru"')),(0,o.kt)("td",{parentName:"tr",align:null},'For many decades, when troubleshooting programs that don\'t run properly, programmers will resort to reading their "source-code" line-by-line and pretend they are the computer to perform the operation. The programmer "walks-through" the code to force them to think like a computer in order to spot and fix subtle problems. Therefore, you can follow a packet\'s path as you understand it should follow. Keep in mind ',(0,o.kt)("a",{parentName:"td",href:"/OPS335/A-Labs/lab2a#how-firewalls-iptables-relate-to-the-labs-in-this-course"},"the diagram from the lecture last week"),". What chain applies first on which machine? What's the first rule that matches the packet? What happens if no rules match the packet? Don't forget that even if you're tracing the path of outgoing traffic - the INPUT chain on your machine still applies (for the response that comes back to your request).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"4")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Use the log target to list unexpected traffic")),(0,o.kt)("td",{parentName:"tr",align:null},"Add a final rule to your input chain to log all traffic. Any traffic you are allowing will have already been accepted and will not reach this rule, so you will start a log of all the packets you are not allowing. Observing the logs while you attempt to use the service that is not being allowed will show you the type of traffic you need to allow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"5")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Verify Network Connectivity by Deleting iptables Rules")),(0,o.kt)("td",{parentName:"tr",align:null},"As a last resort, if you have no idea what's going on and need to confirm that you're still sane - clear all the iptables rules and check your configuration then. Keep in mind that the ",(0,o.kt)("strong",{parentName:"td"},"iptables -F")," command will delete all your rules but will not set the default policies to ACCEPT. This will tell you for sure whether your problem was (or was not) caused by iptables. Stopping the iptable service with ",(0,o.kt)("strong",{parentName:"td"},"systemctl stop iptables")," will also clear all iptables rules. Additionally, it will reset all policy to ACCEPT. If you do this - have a ready way to restore the rules you just deleted. Restarting the iptables service is usually a good start and a ",(0,o.kt)("strong",{parentName:"td"},"shell script")," to add your custom rules is a reasonable next step. Don't forget to restart libvirtd service as well if this is being done on a kvm host")))),(0,o.kt)("p",null,"At this point, you should be able to understand any iptables rules you experience in this course, including the default ones in CentOS. If you see a iptables rule that you don't understand, you can delete it and see what happens. But if you simply delete this rule, take the time to figure out what that rule did and why you needed to delete it. It was likely there for a purpose (other than to drive you crazy)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record the troubleshooting checklist in your OPS335 lab log-book")),(0,o.kt)("h2",{id:"investigation-3-hands-on-iptables-troubleshooting"},"Investigation 3: Hands-On iptables Troubleshooting"),(0,o.kt)("p",null,"You will now get additional practice on troubleshooting iptables by downloading a running a shell script that will create iptables rules that will cause problems. You will then need to use tools and procedures (IPTABLES Troubleshooting Checklist) to determine the cause of the problem and fix that problem."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps on your HOST:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and run the following script: ",(0,o.kt)("a",{parentName:"p",href:"http://scs.senecacollege.ca/~andrew.smith/ops335/lab_practice_iptables.sh"},"http://scs.senecacollege.ca/~andrew.smith/ops335/lab_practice_iptables.sh")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This will display a menu of exercises. You can choose any of the items in order, but you should attempt all of them. The script will first reset the firewall settings to CentOS defaults and then make some modifications from those defaults."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Troubleshoot and fix the problem as you would on a real server. The point of the exercises is for you to find the problem using regular troubleshooting tools, not to reverse-engineer the shell script.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finish the exercises, and record any information you feel you'll need to remember to solve problems like this in the future (e.g. in an assignment and/or in a practical test)."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backup your VMs!:")," You MUST perform a ",(0,o.kt)("strong",{parentName:"p"},"full backup")," of ALL of your VMs whenever you complete your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 labs")," or when working on your ",(0,o.kt)("strong",{parentName:"p"},"OPS335 assignments"),". You should be using the dump or rsync command, and you should use the Bash shell script that you were adviced to create in order to backup all of your VMs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Record your observations in this section on your OPS335 lab log-book")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing The Lab"),(0,o.kt)("p",null,"In completing this lab you have gained further practice using iptables. Each of your machines should now be protected by a custom firewall that we will continue to build on throughout the course. You have also gained experience troubleshooting iptables and determining what rules might need to be changed to allow desired traffic (or block undesired traffic)."),(0,o.kt)("h3",{id:"online-submission"},"Online Submission"),(0,o.kt)("p",null,"Follow the instructions for lab 2b on blackboard."),(0,o.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"List 3 separate techniques that you used to help troubleshoot to detect and fix iptables from running the shell script in the previous section."),(0,o.kt)("li",{parentName:"ol"},"Without looking at the table above, list tips for troubleshooting iptables."),(0,o.kt)("li",{parentName:"ol"},"After completing this lab, how does the above-mentioned shell script work to cause problems with iptables?")))}c.isMDXComponent=!0}}]);