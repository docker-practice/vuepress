(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{526:function(s,e,n){"use strict";n.r(e);var a=n(1),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"后台运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台运行"}},[s._v("#")]),s._v(" 后台运行")]),s._v(" "),n("AdSenseTitle"),s._v(" "),n("p",[s._v("更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 "),n("code",[s._v("-d")]),s._v(" 参数来实现。")]),s._v(" "),n("p",[s._v("下面举两个例子来说明一下。")]),s._v(" "),n("p",[s._v("如果不使用 "),n("code",[s._v("-d")]),s._v(" 参数运行容器。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run ubuntu:18.04 /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\nhello world\nhello world\nhello world\nhello world\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("容器会把输出的结果 (STDOUT) 打印到宿主机上面")]),s._v(" "),n("p",[s._v("如果使用了 "),n("code",[s._v("-d")]),s._v(" 参数运行容器。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d ubuntu:18.04 /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\n77b2dc01fe0f3f1265df143181e7b9af5e05279a884f4776ee75350ea9d8017a\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 "),n("code",[s._v("docker logs")]),s._v(" 查看)。")]),s._v(" "),n("p",[n("strong",[s._v("注：")]),s._v(" 容器是否会长久运行，是和 "),n("code",[s._v("docker run")]),s._v(" 指定的命令有关，和 "),n("code",[s._v("-d")]),s._v(" 参数无关。")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("-d")]),s._v(" 参数启动后会返回一个唯一的 id，也可以通过 "),n("code",[s._v("docker container ls")]),s._v(" 命令来查看容器信息。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker container ls\nCONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES\n77b2dc01fe0f  ubuntu:18.04  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        agitated_wright\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("要获取容器的输出信息，可以通过 "),n("code",[s._v("docker container logs")]),s._v(" 命令。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container ID or NAMES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nhello world\nhello world\nhello world\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])],1)}),[],!1,null,null,null);e.default=t.exports}}]);