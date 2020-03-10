(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{326:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装-docker-ce"}},[t._v("#")]),t._v(" Ubuntu 安装 Docker CE")]),t._v(" "),s("blockquote",[s("p",[t._v("警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.")])]),t._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("h3",{attrs:{id:"系统要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),s("p",[t._v("Docker CE 支持以下版本的 "),s("a",{attrs:{href:"https://ubuntu.com/server",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu"),s("OutboundLink")],1),t._v(" 操作系统：")]),t._v(" "),s("ul",[s("li",[t._v("Eoan 19.10")]),t._v(" "),s("li",[t._v("Bionic 18.04 (LTS)")]),t._v(" "),s("li",[t._v("Xenial 16.04 (LTS)")])]),t._v(" "),s("p",[t._v("Docker CE 可以安装在 64 位的 x86 平台或 ARM 平台上。Ubuntu 发行版中，LTS（Long-Term-Support）长期支持版本，会获得 5 年的升级维护支持，这样的版本会更稳定，因此在生产环境中推荐使用 LTS 版本。")]),t._v(" "),s("h3",{attrs:{id:"卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[t._v("#")]),t._v(" 卸载旧版本")]),t._v(" "),s("p",[t._v("旧版本的 Docker 称为 "),s("code",[t._v("docker")]),t._v(" 或者 "),s("code",[t._v("docker-engine")]),t._v("，使用以下命令卸载旧版本：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n               docker-engine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n               docker.io\n")])])]),s("h2",{attrs:{id:"使用-apt-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[t._v("#")]),t._v(" 使用 APT 安装")]),t._v(" "),s("p",[t._v("由于 "),s("code",[t._v("apt")]),t._v(" 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    apt-transport-https "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    ca-certificates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    software-properties-common\n")])])]),s("p",[t._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),t._v(" "),s("p",[t._v("为了确认所下载软件包的合法性，需要添加软件源的 "),s("code",[t._v("GPG")]),t._v(" 密钥。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -")]),t._v("\n")])])]),s("p",[t._v("然后，我们需要向 "),s("code",[t._v("source.list")]),t._v(" 中添加 Docker 软件源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \\\n    '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' \\\n    stable"')]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ sudo add-apt-repository \\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    $(lsb_release -cs) \\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#    stable"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("以上命令会添加稳定版本的 Docker CE APT 镜像源，如果需要测试或每日构建版本的 Docker CE 请将 stable 改为 test 或者 nightly。")])]),t._v(" "),s("h3",{attrs:{id:"安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[t._v("#")]),t._v(" 安装 Docker CE")]),t._v(" "),s("p",[t._v("更新 apt 软件包缓存，并安装 "),s("code",[t._v("docker-ce")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),s("h2",{attrs:{id:"使用脚本自动安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[t._v("#")]),t._v(" 使用脚本自动安装")]),t._v(" "),s("p",[t._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 "),s("code",[t._v("--mirror")]),t._v(" 选项使用国内源进行安装：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" get-docker.sh --mirror Aliyun\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),t._v("\n")])])]),s("p",[t._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的稳定(stable)版本安装在系统中。")]),t._v(" "),s("h2",{attrs:{id:"启动-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[t._v("#")]),t._v(" 启动 Docker CE")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" docker\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker\n")])])]),s("h2",{attrs:{id:"建立-docker-用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[t._v("#")]),t._v(" 建立 docker 用户组")]),t._v(" "),s("p",[t._v("默认情况下，"),s("code",[t._v("docker")]),t._v(" 命令会使用 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unix socket"),s("OutboundLink")],1),t._v(" 与 Docker 引擎通讯。而只有 "),s("code",[t._v("root")]),t._v(" 用户和 "),s("code",[t._v("docker")]),t._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),s("code",[t._v("root")]),t._v(" 用户。因此，更好地做法是将需要使用 "),s("code",[t._v("docker")]),t._v(" 的用户加入 "),s("code",[t._v("docker")]),t._v(" 用户组。")]),t._v(" "),s("p",[t._v("建立 "),s("code",[t._v("docker")]),t._v(" 组：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n")])])]),s("p",[t._v("将当前用户加入 "),s("code",[t._v("docker")]),t._v(" 组：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),s("p",[t._v("退出当前终端并重新登录，进行如下测试。")]),t._v(" "),s("h2",{attrs:{id:"测试-docker-是否安装正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[t._v("#")]),t._v(" 测试 Docker 是否安装正确")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker run hello-world\n\nUnable to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-world:latest'")]),t._v(" locally\nlatest: Pulling from library/hello-world\nd1725b59e92d: Pull complete\nDigest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788\nStatus: Downloaded newer image "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" hello-world:latest\n\nHello from Docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". The Docker client contacted the Docker daemon.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". The Docker daemon pulled the "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-world"')]),t._v(" image from the Docker Hub.\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". The Docker daemon created a new container from that image "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" runs the\n    executable that produces the output you are currently reading.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". The Docker daemon streamed that output to the Docker client, "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" sent it\n    to your terminal.\n\nTo try something "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\nShare images, automate workflows, and "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" with a "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),s("p",[t._v("若能正常输出以上信息，则说明安装成功。")]),t._v(" "),s("h2",{attrs:{id:"镜像加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[t._v("#")]),t._v(" 镜像加速")]),t._v(" "),s("p",[t._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),s("RouterLink",{attrs:{to:"/install/mirror.html"}},[t._v("国内镜像加速")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 官方 Ubuntu 安装文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);