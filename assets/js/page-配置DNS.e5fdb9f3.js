(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{600:function(s,t,e){"use strict";e.r(t);var n=e(1),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"配置-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-dns"}},[s._v("#")]),s._v(" 配置 DNS")]),s._v(" "),e("AdSenseTitle"),s._v(" "),e("p",[s._v("如何自定义配置容器的主机名和 DNS 呢？秘诀就是 Docker 利用虚拟文件来挂载容器的 3 个相关配置文件。")]),s._v(" "),e("p",[s._v("在容器中使用 "),e("code",[s._v("mount")]),s._v(" 命令可以看到挂载信息：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("\n/dev/disk/by-uuid/1fec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".ebdf on /etc/hostname "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n/dev/disk/by-uuid/1fec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".ebdf on /etc/hosts "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ntmpfs on /etc/resolv.conf "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" tmpfs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这种机制可以让宿主主机 DNS 信息发生更新后，所有 Docker 容器的 DNS 配置通过 "),e("code",[s._v("/etc/resolv.conf")]),s._v(" 文件立刻得到更新。")]),s._v(" "),e("p",[s._v("配置全部容器的 DNS ，也可以在 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v(" 文件中增加以下内容来设置。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dns"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"114.114.114.114"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.8.8"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("这样每次启动的容器 DNS 自动配置为 "),e("code",[s._v("114.114.114.114")]),s._v(" 和 "),e("code",[s._v("8.8.8.8")]),s._v("。使用以下命令来证明其已经生效。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm ubuntu:18.04  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" etc/resolv.conf\n\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("如果用户想要手动指定容器的配置，可以在使用 "),e("code",[s._v("docker run")]),s._v(" 命令启动容器时加入如下参数：")]),s._v(" "),e("p",[e("code",[s._v("-h HOSTNAME")]),s._v(" 或者 "),e("code",[s._v("--hostname=HOSTNAME")]),s._v(" 设定容器的主机名，它会被写到容器内的 "),e("code",[s._v("/etc/hostname")]),s._v(" 和 "),e("code",[s._v("/etc/hosts")]),s._v("。但它在容器外部看不到，既不会在 "),e("code",[s._v("docker container ls")]),s._v(" 中显示，也不会在其他的容器的 "),e("code",[s._v("/etc/hosts")]),s._v(" 看到。")]),s._v(" "),e("p",[e("code",[s._v("--dns=IP_ADDRESS")]),s._v(" 添加 DNS 服务器到容器的 "),e("code",[s._v("/etc/resolv.conf")]),s._v(" 中，让容器用这个服务器来解析所有不在 "),e("code",[s._v("/etc/hosts")]),s._v(" 中的主机名。")]),s._v(" "),e("p",[e("code",[s._v("--dns-search=DOMAIN")]),s._v(" 设定容器的搜索域，当设定搜索域为 "),e("code",[s._v(".example.com")]),s._v(" 时，在搜索一个名为 host 的主机时，DNS 不仅搜索 host，还会搜索 "),e("code",[s._v("host.example.com")]),s._v("。")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：如果在容器启动时没有指定最后两个参数，Docker 会默认用主机上的 "),e("code",[s._v("/etc/resolv.conf")]),s._v(" 来配置容器。")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);