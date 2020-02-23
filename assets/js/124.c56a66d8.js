(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{322:function(e,a,t){"use strict";t.r(a);var s=t(28),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fedora-安装-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fedora-安装-docker-ce"}},[e._v("#")]),e._v(" Fedora 安装 Docker CE")]),e._v(" "),t("blockquote",[t("p",[e._v("警告：切勿在没有配置 Docker dnf 源的情况下直接使用 dnf 命令安装 Docker.")])]),e._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),t("h3",{attrs:{id:"系统要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[e._v("#")]),e._v(" 系统要求")]),e._v(" "),t("p",[e._v("Docker CE 支持以下版本的 "),t("a",{attrs:{href:"https://getfedora.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fedora"),t("OutboundLink")],1),e._v(" 操作系统：")]),e._v(" "),t("ul",[t("li",[e._v("28")]),e._v(" "),t("li",[e._v("29")]),e._v(" "),t("li",[e._v("30")])]),e._v(" "),t("h3",{attrs:{id:"卸载旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[e._v("#")]),e._v(" 卸载旧版本")]),e._v(" "),t("p",[e._v("旧版本的 Docker 称为 "),t("code",[e._v("docker")]),e._v(" 或者 "),t("code",[e._v("docker-engine")]),e._v("，使用以下命令卸载旧版本：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                  docker-engine\n")])])]),t("h2",{attrs:{id:"使用-dnf-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dnf-安装"}},[e._v("#")]),e._v(" 使用 dnf 安装")]),e._v(" "),t("p",[e._v("执行以下命令安装依赖包：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf -y "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" dnf-plugins-core\n")])])]),t("p",[e._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),e._v(" "),t("p",[e._v("执行下面的命令添加 "),t("code",[e._v("dnf")]),e._v(" 软件源：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf config-manager "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --add-repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    https://mirrors.ustc.edu.cn/docker-ce/linux/fedora/docker-ce.repo\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 官方源")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $ sudo dnf config-manager \\")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    --add-repo \\")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    https://download.docker.com/linux/fedora/docker-ce.repo")]),e._v("\n")])])]),t("p",[e._v("如果需要测试版本的 Docker CE 请使用以下命令：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf config-manager --set-enabled docker-ce-test\n")])])]),t("p",[e._v("如果需要每日构建版本的 Docker CE 请使用以下命令：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf config-manager --set-enabled docker-ce-nightly\n")])])]),t("p",[e._v("你也可以禁用测试版本的 Docker CE")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf config-manager --set-disabled docker-ce-test\n")])])]),t("h3",{attrs:{id:"安装-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[e._v("#")]),e._v(" 安装 Docker CE")]),e._v(" "),t("p",[e._v("更新 "),t("code",[e._v("dnf")]),e._v(" 软件源缓存，并安装 "),t("code",[e._v("docker-ce")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf update\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-ce\n")])])]),t("p",[e._v("你也可以使用以下命令安装指定版本的 Docker")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ dnf list docker-ce  --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sort")]),e._v(" -r\n\ndocker-ce.x86_64          "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("18.06")]),e._v(".1.ce-3.fc28                     docker-ce-stable\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dnf -y "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-ce-18.06.1.ce\n")])])]),t("h2",{attrs:{id:"使用脚本自动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[e._v("#")]),e._v(" 使用脚本自动安装")]),e._v(" "),t("p",[e._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Debian 系统上可以使用这套脚本安装，另外可以通过 "),t("code",[e._v("--mirror")]),e._v(" 选项使用国内源进行安装：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" get-docker.sh --mirror Aliyun\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),e._v("\n")])])]),t("p",[e._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 最新稳定(stable)版本安装在系统中。")]),e._v(" "),t("h2",{attrs:{id:"启动-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[e._v("#")]),e._v(" 启动 Docker CE")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" docker\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start docker\n")])])]),t("h2",{attrs:{id:"建立-docker-用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[e._v("#")]),e._v(" 建立 docker 用户组")]),e._v(" "),t("p",[e._v("默认情况下，"),t("code",[e._v("docker")]),e._v(" 命令会使用 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unix socket"),t("OutboundLink")],1),e._v(" 与 Docker 引擎通讯。而只有 "),t("code",[e._v("root")]),e._v(" 用户和 "),t("code",[e._v("docker")]),e._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),t("code",[e._v("root")]),e._v(" 用户。因此，更好地做法是将需要使用 "),t("code",[e._v("docker")]),e._v(" 的用户加入 "),t("code",[e._v("docker")]),e._v(" 用户组。")]),e._v(" "),t("p",[e._v("建立 "),t("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("groupadd")]),e._v(" docker\n")])])]),t("p",[e._v("将当前用户加入 "),t("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),t("p",[e._v("退出当前终端并重新登录，进行如下测试。")]),e._v(" "),t("h2",{attrs:{id:"测试-docker-是否安装正确"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[e._v("#")]),e._v(" 测试 Docker 是否安装正确")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker run hello-world\n\nUnable to "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" image "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hello-world:latest'")]),e._v(" locally\nlatest: Pulling from library/hello-world\nd1725b59e92d: Pull complete\nDigest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788\nStatus: Downloaded newer image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" hello-world:latest\n\nHello from Docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". The Docker client contacted the Docker daemon.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". The Docker daemon pulled the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-world"')]),e._v(" image from the Docker Hub.\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". The Docker daemon created a new container from that image "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" runs the\n    executable that produces the output you are currently reading.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". The Docker daemon streamed that output to the Docker client, "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" sent it\n    to your terminal.\n\nTo try something "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\nShare images, automate workflows, and "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" with a "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),t("p",[e._v("若能正常输出以上信息，则说明安装成功。")]),e._v(" "),t("h2",{attrs:{id:"镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[e._v("#")]),e._v(" 镜像加速")]),e._v(" "),t("p",[e._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),t("RouterLink",{attrs:{to:"/install/mirror.html"}},[e._v("国内镜像加速")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/fedora",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 官方 Fedora 安装文档"),t("OutboundLink")],1),e._v("。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);