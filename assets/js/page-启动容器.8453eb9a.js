(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{560:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),e("AdSenseTitle"),s._v(" "),e("p",[s._v("启动容器有两种方式，一种是基于镜像新建一个容器并启动，另外一个是将在终止状态（"),e("code",[s._v("exited")]),s._v("）的容器重新启动。")]),s._v(" "),e("p",[s._v("因为 Docker 的容器实在太轻量级了，很多时候用户都是随时删除和新创建容器。")]),s._v(" "),e("h2",{attrs:{id:"新建并启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建并启动"}},[s._v("#")]),s._v(" 新建并启动")]),s._v(" "),e("p",[s._v("所需要的命令主要为 "),e("code",[s._v("docker run")]),s._v("。")]),s._v(" "),e("p",[s._v("例如，下面的命令输出一个 “Hello World”，之后终止容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run ubuntu:18.04 /bin/echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world'")]),s._v("\nHello world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这跟在本地直接执行 "),e("code",[s._v("/bin/echo 'hello world'")]),s._v(" 几乎感觉不出任何区别。")]),s._v(" "),e("p",[s._v("下面的命令则启动一个 bash 终端，允许用户进行交互。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run -t -i ubuntu:18.04 /bin/bash\nroot@af8bae53bdd3:/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("其中，"),e("code",[s._v("-t")]),s._v(" 选项让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上， "),e("code",[s._v("-i")]),s._v(" 则让容器的标准输入保持打开。")]),s._v(" "),e("p",[s._v("在交互模式下，用户可以通过所创建的终端来输入命令，例如")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root@af8bae53bdd3:/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/\nroot@af8bae53bdd3:/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nbin boot dev etc home lib lib64 media mnt opt proc root run sbin srv sys tmp usr var\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("当利用 "),e("code",[s._v("docker run")]),s._v(" 来创建容器时，Docker 在后台运行的标准操作包括：")]),s._v(" "),e("ul",[e("li",[s._v("检查本地是否存在指定的镜像，不存在就从 "),e("RouterLink",{attrs:{to:"/repository/"}},[e("code",[s._v("registry")])]),s._v(" 下载")],1),s._v(" "),e("li",[s._v("利用镜像创建并启动一个容器")]),s._v(" "),e("li",[s._v("分配一个文件系统，并在只读的镜像层外面挂载一层可读写层")]),s._v(" "),e("li",[s._v("从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去")]),s._v(" "),e("li",[s._v("从地址池配置一个 ip 地址给容器")]),s._v(" "),e("li",[s._v("执行用户指定的应用程序")]),s._v(" "),e("li",[s._v("执行完毕后容器被终止")])]),s._v(" "),e("h2",{attrs:{id:"启动已终止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动已终止容器"}},[s._v("#")]),s._v(" 启动已终止容器")]),s._v(" "),e("p",[s._v("可以利用 "),e("code",[s._v("docker container start")]),s._v(" 命令，直接将一个已经终止的容器启动运行。")]),s._v(" "),e("p",[s._v("容器的核心为所执行的应用程序，所需要的资源都是应用程序运行所必需的。除此之外，并没有其它的资源。可以在伪终端中利用 "),e("code",[s._v("ps")]),s._v(" 或 "),e("code",[s._v("top")]),s._v(" 来查看进程信息。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root@ba267838cc1b:/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps")]),s._v("\n  PID TTY          TIME CMD\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ?        00:00:00 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" ?        00:00:00 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("可见，容器中仅运行了指定的 bash 应用。这种特点使得 Docker 对资源的利用率极高，是货真价实的轻量级虚拟化。")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);