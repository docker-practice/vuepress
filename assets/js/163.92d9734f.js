(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{508:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"外部访问容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部访问容器"}},[a._v("#")]),a._v(" 外部访问容器")]),a._v(" "),t("p",[a._v("容器中可以运行一些网络应用，要让外部也可以访问这些应用，可以通过 "),t("code",[a._v("-P")]),a._v(" 或 "),t("code",[a._v("-p")]),a._v(" 参数来指定端口映射。")]),a._v(" "),t("p",[a._v("当使用 "),t("code",[a._v("-P")]),a._v(" 标记时，Docker 会随机映射一个端口到内部容器开放的网络端口。")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("docker container ls")]),a._v(" 可以看到，本地主机的 32768 被映射到了容器的 80 端口。此时访问本机的 32768 端口即可访问容器内 NGINX 默认页面。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d -P nginx:alpine\n\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                   NAMES\nfae320d08268        nginx:alpine        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/docker-entrypoint.…"')]),a._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v(" seconds ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" seconds       "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:32768-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp   bold_mcnulty\n")])])]),t("p",[a._v("同样的，可以通过 "),t("code",[a._v("docker logs")]),a._v(" 命令来查看访问记录。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker logs fa\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.17")]),a._v(".0.1 - - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v("/Aug/2020:08:34:04 +0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"GET / HTTP/1.1"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("612")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-"')]),a._v("\n")])])]),t("p",[t("code",[a._v("-p")]),a._v(" 则可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器。支持的格式有 "),t("code",[a._v("ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"映射所有接口地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#映射所有接口地址"}},[a._v("#")]),a._v(" 映射所有接口地址")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("hostPort:containerPort")]),a._v(" 格式本地的 80 端口映射到容器的 80 端口，可以执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 nginx:alpine\n")])])]),t("p",[a._v("此时默认会绑定本地所有接口上的所有地址。")]),a._v(" "),t("h2",{attrs:{id:"映射到指定地址的指定端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#映射到指定地址的指定端口"}},[a._v("#")]),a._v(" 映射到指定地址的指定端口")]),a._v(" "),t("p",[a._v("可以使用 "),t("code",[a._v("ip:hostPort:containerPort")]),a._v(" 格式指定映射使用一个特定地址，比如 localhost 地址 127.0.0.1")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:80:80 nginx:alpine\n")])])]),t("h2",{attrs:{id:"映射到指定地址的任意端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#映射到指定地址的任意端口"}},[a._v("#")]),a._v(" 映射到指定地址的任意端口")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("ip::containerPort")]),a._v(" 绑定 localhost 的任意端口到容器的 80 端口，本地主机会自动分配一个端口。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1::80 nginx:alpine\n")])])]),t("p",[a._v("还可以使用 "),t("code",[a._v("udp")]),a._v(" 标记来指定 "),t("code",[a._v("udp")]),a._v(" 端口")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:80:80/udp nginx:alpine\n")])])]),t("h2",{attrs:{id:"查看映射端口配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看映射端口配置"}},[a._v("#")]),a._v(" 查看映射端口配置")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("docker port")]),a._v(" 来查看当前映射的端口配置，也可以查看到绑定的地址")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker port fa "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:32768\n")])])]),t("p",[a._v("注意：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("容器有自己的内部网络和 ip 地址（使用 "),t("code",[a._v("docker inspect")]),a._v(" 查看，Docker 还可以有一个可变的网络配置。）")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("-p")]),a._v(" 标记可以多次使用来绑定多个端口")])])]),a._v(" "),t("p",[a._v("例如")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    nginx:alpine\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);