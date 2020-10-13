(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{429:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"容器访问控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问控制"}},[s._v("#")]),s._v(" 容器访问控制")]),s._v(" "),e("p",[s._v("容器的访问控制，主要通过 Linux 上的 "),e("code",[s._v("iptables")]),s._v(" 防火墙来进行管理和实现。"),e("code",[s._v("iptables")]),s._v(" 是 Linux 上默认的防火墙软件，在大部分发行版中都自带。\n"),e("AdSenseTitle")],1),s._v(" "),e("h2",{attrs:{id:"容器访问外部网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部网络"}},[s._v("#")]),s._v(" 容器访问外部网络")]),s._v(" "),e("p",[s._v("容器要想访问外部网络，需要本地系统的转发支持。在Linux 系统中，检查转发是否打开。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sysctl")]),s._v(" net.ipv4.ip_forward\nnet.ipv4.ip_forward "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果为 0，说明没有开启转发，则需要手动打开。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sysctl")]),s._v(" -w net.ipv4.ip_forward"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果在启动 Docker 服务的时候设定 "),e("code",[s._v("--ip-forward=true")]),s._v(", Docker 就会自动设定系统的 "),e("code",[s._v("ip_forward")]),s._v(" 参数为 1。")]),s._v(" "),e("h2",{attrs:{id:"容器之间访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器之间访问"}},[s._v("#")]),s._v(" 容器之间访问")]),s._v(" "),e("p",[s._v("容器之间相互访问，需要两方面的支持。")]),s._v(" "),e("ul",[e("li",[s._v("容器的网络拓扑是否已经互联。默认情况下，所有容器都会被连接到 "),e("code",[s._v("docker0")]),s._v(" 网桥上。")]),s._v(" "),e("li",[s._v("本地系统的防火墙软件 -- "),e("code",[s._v("iptables")]),s._v(" 是否允许通过。")])]),s._v(" "),e("h3",{attrs:{id:"访问所有端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问所有端口"}},[s._v("#")]),s._v(" 访问所有端口")]),s._v(" "),e("p",[s._v("当启动 Docker 服务（即 dockerd）的时候，默认会添加一条转发策略到本地主机 iptables 的 FORWARD 链上。策略为通过（"),e("code",[s._v("ACCEPT")]),s._v("）还是禁止（"),e("code",[s._v("DROP")]),s._v("）取决于配置"),e("code",[s._v("--icc=true")]),s._v("（缺省值）还是 "),e("code",[s._v("--icc=false")]),s._v("。当然，如果手动指定 "),e("code",[s._v("--iptables=false")]),s._v(" 则不会添加 "),e("code",[s._v("iptables")]),s._v(" 规则。")]),s._v(" "),e("p",[s._v("可见，默认情况下，不同容器之间是允许网络互通的。如果为了安全考虑，可以在 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v(" 文件中配置 "),e("code",[s._v('{"icc": false}')]),s._v(" 来禁止它。")]),s._v(" "),e("h3",{attrs:{id:"访问指定端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问指定端口"}},[s._v("#")]),s._v(" 访问指定端口")]),s._v(" "),e("p",[s._v("在通过 "),e("code",[s._v("-icc=false")]),s._v(" 关闭网络访问后，还可以通过 "),e("code",[s._v("--link=CONTAINER_NAME:ALIAS")]),s._v(" 选项来访问容器的开放端口。")]),s._v(" "),e("p",[s._v("例如，在启动 Docker 服务时，可以同时使用 "),e("code",[s._v("icc=false --iptables=true")]),s._v(" 参数来关闭允许相互的网络访问，并让 Docker 可以修改系统中的 "),e("code",[s._v("iptables")]),s._v(" 规则。")]),s._v(" "),e("p",[s._v("此时，系统中的 "),e("code",[s._v("iptables")]),s._v(" 规则可能是类似")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -nL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nChain FORWARD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nDROP       all  --  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("之后，启动容器（"),e("code",[s._v("docker run")]),s._v("）时使用 "),e("code",[s._v("--link=CONTAINER_NAME:ALIAS")]),s._v(" 选项。Docker 会在 "),e("code",[s._v("iptable")]),s._v(" 中为 两个容器分别添加一条 "),e("code",[s._v("ACCEPT")]),s._v(" 规则，允许相互访问开放的端口（取决于 "),e("code",[s._v("Dockerfile")]),s._v(" 中的 "),e("code",[s._v("EXPOSE")]),s._v(" 指令）。")]),s._v(" "),e("p",[s._v("当添加了 "),e("code",[s._v("--link=CONTAINER_NAME:ALIAS")]),s._v(" 选项后，添加了 "),e("code",[s._v("iptables")]),s._v(" 规则。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -nL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nChain FORWARD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget     prot opt "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\nACCEPT     tcp  --  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2           "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3           tcp spt:80\nACCEPT     tcp  --  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3           "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2           tcp dpt:80\nDROP       all  --  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("注意："),e("code",[s._v("--link=CONTAINER_NAME:ALIAS")]),s._v(" 中的 "),e("code",[s._v("CONTAINER_NAME")]),s._v(" 目前必须是 Docker 分配的名字，或使用 "),e("code",[s._v("--name")]),s._v(" 参数指定的名字。主机名则不会被识别。")])])}),[],!1,null,null,null);a.default=n.exports}}]);