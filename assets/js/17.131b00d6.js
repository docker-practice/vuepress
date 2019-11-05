(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{217:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"自定义网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义网桥"}},[s._v("#")]),s._v(" 自定义网桥")]),s._v(" "),a("p",[s._v("除了默认的 "),a("code",[s._v("docker0")]),s._v(" 网桥，用户也可以指定网桥来连接各个容器。")]),s._v(" "),a("p",[s._v("在启动 Docker 服务的时候，使用 "),a("code",[s._v("-b BRIDGE")]),s._v("或"),a("code",[s._v("--bridge=BRIDGE")]),s._v(" 来指定使用的网桥。")]),s._v(" "),a("p",[s._v("如果服务已经运行，那需要先停止服务，并删除旧的网桥。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop docker\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev docker0 down\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brctl delbr docker0\n")])])]),a("p",[s._v("然后创建一个网桥 "),a("code",[s._v("bridge0")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brctl addbr bridge0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".5.1/24 dev bridge0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev bridge0 up\n")])])]),a("p",[s._v("查看确认网桥创建并启动。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr show bridge0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": bridge0: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc noop state UP group default\n    link/ether "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66")]),s._v(":38:d0:0d:76:18 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".5.1/24 scope global bridge0\n       valid_lft forever preferred_lft forever\n")])])]),a("p",[s._v("在 Docker 配置文件 "),a("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中添加如下内容，即可将 Docker 默认桥接到创建的网桥上。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bridge"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("启动 Docker 服务。")]),s._v(" "),a("p",[s._v("新建一个容器，可以看到它已经桥接到了 "),a("code",[s._v("bridge0")]),s._v(" 上。")]),s._v(" "),a("p",[s._v("可以继续用 "),a("code",[s._v("brctl show")]),s._v(" 命令查看桥接的信息。另外，在容器中可以使用 "),a("code",[s._v("ip addr")]),s._v(" 和 "),a("code",[s._v("ip route")]),s._v(" 命令来查看 IP 地址配置和路由信息。")])])}),[],!1,null,null,null);t.default=n.exports}}]);