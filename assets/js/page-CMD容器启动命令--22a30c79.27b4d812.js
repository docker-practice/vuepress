(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{521:function(e,s,t){"use strict";t.r(s);var v=t(3),a=Object(v.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"cmd-容器启动命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd-容器启动命令"}},[e._v("#")]),e._v(" CMD 容器启动命令")]),e._v(" "),t("AdSenseTitle"),e._v(" "),t("p",[t("code",[e._v("CMD")]),e._v(" 指令的格式和 "),t("code",[e._v("RUN")]),e._v(" 相似，也是两种格式：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("shell")]),e._v(" 格式："),t("code",[e._v("CMD <命令>")])]),e._v(" "),t("li",[t("code",[e._v("exec")]),e._v(" 格式："),t("code",[e._v('CMD ["可执行文件", "参数1", "参数2"...]')])]),e._v(" "),t("li",[e._v("参数列表格式："),t("code",[e._v('CMD ["参数1", "参数2"...]')]),e._v("。在指定了 "),t("code",[e._v("ENTRYPOINT")]),e._v(" 指令后，用 "),t("code",[e._v("CMD")]),e._v(" 指定具体的参数。")])]),e._v(" "),t("p",[e._v("之前介绍容器的时候曾经说过，Docker 不是虚拟机，容器就是进程。既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。"),t("code",[e._v("CMD")]),e._v(" 指令就是用于指定默认的容器主进程的启动命令的。")]),e._v(" "),t("p",[e._v("在运行时可以指定新的命令来替代镜像设置中的这个默认命令，比如，"),t("code",[e._v("ubuntu")]),e._v(" 镜像默认的 "),t("code",[e._v("CMD")]),e._v(" 是 "),t("code",[e._v("/bin/bash")]),e._v("，如果我们直接 "),t("code",[e._v("docker run -it ubuntu")]),e._v(" 的话，会直接进入 "),t("code",[e._v("bash")]),e._v("。我们也可以在运行时指定运行别的命令，如 "),t("code",[e._v("docker run -it ubuntu cat /etc/os-release")]),e._v("。这就是用 "),t("code",[e._v("cat /etc/os-release")]),e._v(" 命令替换了默认的 "),t("code",[e._v("/bin/bash")]),e._v(" 命令了，输出了系统版本信息。")]),e._v(" "),t("p",[e._v("在指令格式上，一般推荐使用 "),t("code",[e._v("exec")]),e._v(" 格式，这类格式在解析时会被解析为 JSON 数组，因此一定要使用双引号 "),t("code",[e._v('"')]),e._v("，而不要使用单引号。")]),e._v(" "),t("p",[e._v("如果使用 "),t("code",[e._v("shell")]),e._v(" 格式的话，实际的命令会被包装为 "),t("code",[e._v("sh -c")]),e._v(" 的参数的形式进行执行。比如：")]),e._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CMD")]),e._v(" echo $HOME\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("在实际执行中，会将其变更为：")]),e._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CMD")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo $HOME"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这就是为什么我们可以使用环境变量的原因，因为这些环境变量会被 shell 进行解析处理。")]),e._v(" "),t("p",[e._v("提到 "),t("code",[e._v("CMD")]),e._v(" 就不得不提容器中应用在前台执行和后台执行的问题。这是初学者常出现的一个混淆。")]),e._v(" "),t("p",[e._v("Docker 不是虚拟机，容器中的应用都应该以前台执行，而不是像虚拟机、物理机里面那样，用 "),t("code",[e._v("systemd")]),e._v(" 去启动后台服务，容器内没有后台服务的概念。")]),e._v(" "),t("p",[e._v("一些初学者将 "),t("code",[e._v("CMD")]),e._v(" 写为：")]),e._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CMD")]),e._v(" service nginx start\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("然后发现容器执行后就立即退出了。甚至在容器内去使用 "),t("code",[e._v("systemctl")]),e._v(" 命令结果却发现根本执行不了。这就是因为没有搞明白前台、后台的概念，没有区分容器和虚拟机的差异，依旧在以传统虚拟机的角度去理解容器。")]),e._v(" "),t("p",[e._v("对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出，其它辅助进程不是它需要关心的东西。")]),e._v(" "),t("p",[e._v("而使用 "),t("code",[e._v("service nginx start")]),e._v(" 命令，则是希望 upstart 来以后台守护进程形式启动 "),t("code",[e._v("nginx")]),e._v(" 服务。而刚才说了 "),t("code",[e._v("CMD service nginx start")]),e._v(" 会被理解为 "),t("code",[e._v('CMD [ "sh", "-c", "service nginx start"]')]),e._v("，因此主进程实际上是 "),t("code",[e._v("sh")]),e._v("。那么当 "),t("code",[e._v("service nginx start")]),e._v(" 命令结束后，"),t("code",[e._v("sh")]),e._v(" 也就结束了，"),t("code",[e._v("sh")]),e._v(" 作为主进程退出了，自然就会令容器退出。")]),e._v(" "),t("p",[e._v("正确的做法是直接执行 "),t("code",[e._v("nginx")]),e._v(" 可执行文件，并且要求以前台形式运行。比如：")]),e._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CMD")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-g"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"daemon off;"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);