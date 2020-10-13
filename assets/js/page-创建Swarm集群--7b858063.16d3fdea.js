(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{600:function(s,a,n){"use strict";n.r(a);var e=n(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"创建-swarm-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-swarm-集群"}},[s._v("#")]),s._v(" 创建 Swarm 集群")]),s._v(" "),n("p",[s._v("阅读 "),n("RouterLink",{attrs:{to:"/swarm_mode/overview.html"}},[s._v("基本概念")]),s._v(" 一节我们知道 "),n("code",[s._v("Swarm")]),s._v(" 集群由 "),n("strong",[s._v("管理节点")]),s._v(" 和 "),n("strong",[s._v("工作节点")]),s._v(" 组成。本节我们来创建一个包含一个管理节点和两个工作节点的最小 "),n("code",[s._v("Swarm")]),s._v(" 集群。")],1),s._v(" "),n("h2",{attrs:{id:"初始化集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化集群"}},[s._v("#")]),s._v(" 初始化集群")]),s._v(" "),n("p",[s._v("在 "),n("a",{attrs:{href:"../machine"}},[n("code",[s._v("Docker Machine")])]),s._v(" 一节中我们了解到 "),n("code",[s._v("Docker Machine")]),s._v(" 可以在数秒内创建一个虚拟的 Docker 主机，下面我们使用它来创建三个 Docker 主机，并加入到集群中。")]),s._v(" "),n("p",[s._v("我们首先创建一个 Docker 主机作为管理节点。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker-machine create -d virtualbox manager\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("我们使用 "),n("code",[s._v("docker swarm init")]),s._v(" 在管理节点初始化一个 "),n("code",[s._v("Swarm")]),s._v(" 集群。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker-machine "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" manager\n\ndocker@manager:~$ docker swarm init --advertise-addr "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.100\nSwarm initialized: current node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dxn1zf6l61qsb1josjja83ngz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is now a manager.\n\nTo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" a worker to this swarm, run the following command:\n\n    docker swarm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.100:2377\n\nTo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" a manager to this swarm, run "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker swarm join-token manager'")]),s._v(" and follow the instructions.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("如果你的 Docker 主机有多个网卡，拥有多个 IP，必须使用 "),n("code",[s._v("--advertise-addr")]),s._v(" 指定 IP。")]),s._v(" "),n("blockquote",[n("p",[s._v("执行 "),n("code",[s._v("docker swarm init")]),s._v(" 命令的节点自动成为管理节点。")])]),s._v(" "),n("h2",{attrs:{id:"增加工作节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加工作节点"}},[s._v("#")]),s._v(" 增加工作节点")]),s._v(" "),n("p",[s._v("上一步我们初始化了一个 "),n("code",[s._v("Swarm")]),s._v(" 集群，拥有了一个管理节点，下面我们继续创建两个 Docker 主机作为工作节点，并加入到集群中。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker-machine create -d virtualbox worker1\n\n$ docker-machine "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" worker1\n\ndocker@worker1:~$ docker swarm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.100:2377\n\nThis node joined a swarm as a worker.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker-machine create -d virtualbox worker2\n\n$ docker-machine "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" worker2\n\ndocker@worker1:~$ docker swarm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.100:2377\n\nThis node joined a swarm as a worker.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("blockquote",[n("p",[s._v("注意：一些细心的读者可能通过 "),n("code",[s._v("docker-machine create --help")]),s._v(" 查看到 "),n("code",[s._v("--swarm*")]),s._v(" 等一系列参数。该参数是用于旧的 "),n("code",[s._v("Docker Swarm")]),s._v("，与本章所讲的 "),n("code",[s._v("Swarm mode")]),s._v(" 没有关系。")])]),s._v(" "),n("h2",{attrs:{id:"查看集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看集群"}},[s._v("#")]),s._v(" 查看集群")]),s._v(" "),n("p",[s._v("经过上边的两步，我们已经拥有了一个最小的 "),n("code",[s._v("Swarm")]),s._v(" 集群，包含一个管理节点和两个工作节点。")]),s._v(" "),n("p",[s._v("在管理节点使用 "),n("code",[s._v("docker node ls")]),s._v(" 查看集群。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker node "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nID                           "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")]),s._v("  STATUS  AVAILABILITY  MANAGER STATUS\n03g1y59jwfg7cf99w4lt0f662    worker2   Ready   Active\n9j68exjopxe7wfl6yuxml7a7j    worker1   Ready   Active\ndxn1zf6l61qsb1josjja83ngz *  manager   Ready   Active        Leader\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);