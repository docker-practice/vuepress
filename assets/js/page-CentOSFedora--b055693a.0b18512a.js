(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{495:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"centos-fedora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-fedora"}},[t._v("#")]),t._v(" CentOS/Fedora")]),t._v(" "),e("h2",{attrs:{id:"centos-系统简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-系统简介"}},[t._v("#")]),t._v(" CentOS 系统简介")]),t._v(" "),e("p",[e("code",[t._v("CentOS")]),t._v(" 和 "),e("code",[t._v("Fedora")]),t._v(" 都是基于 "),e("code",[t._v("Redhat")]),t._v(" 的常见 Linux 分支。"),e("code",[t._v("CentOS")]),t._v(" 是目前企业级服务器的常用操作系统；"),e("code",[t._v("Fedora")]),t._v(" 则主要面向个人桌面用户。")]),t._v(" "),e("p",[e("img",{attrs:{src:"_images/centos-logo.png",alt:"CentOS 操作系统"}})]),t._v(" "),e("p",[t._v("CentOS（Community Enterprise Operating System，中文意思是：社区企业操作系统），它是基于 "),e("code",[t._v("Red Hat Enterprise Linux")]),t._v(" 源代码编译而成。由于 "),e("code",[t._v("CentOS")]),t._v(" 与 "),e("code",[t._v("Redhat Linux")]),t._v(" 源于相同的代码基础，所以很多成本敏感且需要高稳定性的公司就使用 "),e("code",[t._v("CentOS")]),t._v(" 来替代商业版 "),e("code",[t._v("Red Hat Enterprise Linux")]),t._v("。"),e("code",[t._v("CentOS")]),t._v(" 自身不包含闭源软件。")]),t._v(" "),e("h3",{attrs:{id:"使用-centos-官方镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-centos-官方镜像"}},[t._v("#")]),t._v(" 使用 CentOS 官方镜像")]),t._v(" "),e("p",[t._v("首先使用 "),e("code",[t._v("docker search")]),t._v(" 命令来搜索标星至少为 "),e("code",[t._v("25")]),t._v(" 的 "),e("code",[t._v("CentOS")]),t._v(" 相关镜像。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker search -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("stars")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" centos\nNAME      DESCRIPTION      STARS     OFFICIAL   AUTOMATED\ncentos    The official"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2543")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\njdeathe/centos-ssh         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("docker run")]),t._v(" 直接运行最新的 "),e("code",[t._v("CentOS")]),t._v(" 镜像，并登录 "),e("code",[t._v("bash")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run -it centos "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\nUnable to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" image "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'centos:latest'")]),t._v(" locally\nlatest: Pulling from library/centos\n3d8673bd162a: Pull complete\nDigest: sha256:a66ffcb73930584413de83311ca11a4cb4938c9b2521d331026dad970c19adf4\nStatus: Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" centos:latest\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@43eb3b194d48 /"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/redhat-release")]),t._v("\nCentOS Linux release "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1511 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"fedora-系统简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fedora-系统简介"}},[t._v("#")]),t._v(" Fedora 系统简介")]),t._v(" "),e("p",[e("img",{attrs:{src:"_images/fedora-logo.png",alt:"Fedora 操作系统"}})]),t._v(" "),e("p",[e("code",[t._v("Fedora")]),t._v(" 由 "),e("code",[t._v("Fedora Project")]),t._v(" 社区开发，红帽公司赞助的 "),e("code",[t._v("Linux")]),t._v(" 发行版。它的目标是创建一套新颖、多功能并且自由和开源的操作系统。"),e("code",[t._v("Fedora")]),t._v(" 的功能对于用户而言，它是一套功能完备的，可以更新的免费操作系统，而对赞助商 "),e("code",[t._v("Red Hat")]),t._v(" 而言，它是许多新技术的测试平台。被认为可用的技术最终会加入到 "),e("code",[t._v("Red Hat Enterprise Linux")]),t._v(" 中。")]),t._v(" "),e("h3",{attrs:{id:"使用-fedora-官方镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-fedora-官方镜像"}},[t._v("#")]),t._v(" 使用 Fedora 官方镜像")]),t._v(" "),e("p",[t._v("首先使用 "),e("code",[t._v("docker search")]),t._v(" 命令来搜索标星至少为 "),e("code",[t._v("2")]),t._v(" 的 "),e("code",[t._v("Fedora")]),t._v(" 相关镜像，结果如下。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker search -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("stars")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" fedora\nNAME                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\nfedora                   Official Docker builds of Fedora                "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("433")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndockingbay/fedora-rust   Trusted build of Rust programming language"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngluster/gluster-fedora   Official GlusterFS image "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" Fedora "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" + Glu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nstartx/fedora            Simple container used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all startx based"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("docker run")]),t._v(" 命令直接运行 "),e("code",[t._v("Fedora")]),t._v(" 官方镜像，并登录 "),e("code",[t._v("bash")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run -it fedora "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\nUnable to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" image "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fedora:latest'")]),t._v(" locally\nlatest: Pulling from library/fedora\n2bf01635e2a0: Pull complete\nDigest: sha256:64a02df6aac27d1200c2572fe4b9949f1970d05f74d367ce4af994ba5dc3669e\nStatus: Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fedora:latest\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@196ca341419b /"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/redhat-release")]),t._v("\nFedora release "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Twenty Four"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"相关资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关资源"}},[t._v("#")]),t._v(" 相关资源")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Fedora")]),t._v(" 官网：https://getfedora.org/")]),t._v(" "),e("li",[e("code",[t._v("Fedora")]),t._v(" 官方仓库：https://github.com/fedora-infra")]),t._v(" "),e("li",[e("code",[t._v("Fedora")]),t._v(" 官方镜像：https://hub.docker.com/_/fedora/")]),t._v(" "),e("li",[e("code",[t._v("Fedora")]),t._v(" 官方镜像仓库：https://github.com/fedora-cloud/docker-brew-fedora")]),t._v(" "),e("li",[e("code",[t._v("CentOS")]),t._v(" 官网：https://www.centos.org")]),t._v(" "),e("li",[e("code",[t._v("CentOS")]),t._v(" 官方仓库：https://github.com/CentOS")]),t._v(" "),e("li",[e("code",[t._v("CentOS")]),t._v(" 官方镜像：https://hub.docker.com/_/centos/")]),t._v(" "),e("li",[e("code",[t._v("CentOS")]),t._v(" 官方镜像仓库：https://github.com/CentOS/CentOS-Dockerfiles")])])])}),[],!1,null,null,null);a.default=n.exports}}]);