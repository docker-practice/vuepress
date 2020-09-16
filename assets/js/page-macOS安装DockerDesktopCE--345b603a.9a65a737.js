(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{566:function(e,r,a){"use strict";a.r(r);var t=a(3),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"macos-安装-docker-desktop-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-安装-docker-desktop-ce"}},[e._v("#")]),e._v(" macOS 安装 Docker Desktop CE")]),e._v(" "),a("h2",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[e._v("#")]),e._v(" 系统要求")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop for Mac"),a("OutboundLink")],1),e._v(" 要求系统最低为 macOS Catalina 10.13。")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("h3",{attrs:{id:"使用-homebrew-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-homebrew-安装"}},[e._v("#")]),e._v(" 使用 Homebrew 安装")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),a("OutboundLink")],1),e._v(" 的 "),a("a",{attrs:{href:"https://github.com/Homebrew/homebrew-cask",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cask"),a("OutboundLink")],1),e._v(" 已经支持 Docker Desktop for Mac，因此可以很方便的使用 Homebrew Cask 来进行安装：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker\n")])])]),a("h3",{attrs:{id:"手动下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动下载安装"}},[e._v("#")]),e._v(" 手动下载安装")]),e._v(" "),a("p",[e._v("如果需要手动下载，请点击以下链接下载 "),a("a",{attrs:{href:"https://download.docker.com/mac/stable/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stable"),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"https://download.docker.com/mac/edge/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Edge"),a("OutboundLink")],1),e._v(" 版本的 Docker Desktop for Mac。")]),e._v(" "),a("p",[e._v("如同 macOS 其它软件一样，安装也非常简单，双击下载的 "),a("code",[e._v(".dmg")]),e._v(" 文件，然后将那只叫 "),a("a",{attrs:{href:"https://www.docker.com/blog/call-me-moby-dock/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moby"),a("OutboundLink")],1),e._v(" 的鲸鱼图标拖拽到 "),a("code",[e._v("Application")]),e._v(" 文件夹即可（其间需要输入用户密码）。")]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-dmg.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),a("p",[e._v("从应用中找到 Docker 图标并点击运行。")]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-apps.png",alt:""}})]),e._v(" "),a("p",[e._v("运行之后，会在右上角菜单栏看到多了一个鲸鱼图标，这个图标表明了 Docker 的运行状态。")]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-menubar.png",alt:""}})]),e._v(" "),a("p",[e._v('第一次点击图标，可能会看到这个安装成功的界面，点击 "Got it!" 可以关闭这个窗口。')]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-success.png",alt:""}})]),e._v(" "),a("p",[e._v("以后每次点击鲸鱼图标会弹出操作菜单。")]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-menu.png",alt:""}})]),e._v(" "),a("p",[e._v("启动终端后，通过命令可以检查安装后的 Docker 版本。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker --version\nDocker version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8, build afacb8b\n$ docker-compose --version\ndocker-compose version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.25")]),e._v(".5, build 8a1c60f6\n$ docker-machine --version\ndocker-machine version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.16")]),e._v(".1, build cce350d7\n")])])]),a("p",[e._v("如果 "),a("code",[e._v("docker version")]),e._v("、"),a("code",[e._v("docker info")]),e._v(" 都正常的话，可以尝试运行一个 "),a("a",{attrs:{href:"https://hub.docker.com/_/nginx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx 服务器"),a("OutboundLink")],1),e._v("：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(":80 --name webserver nginx\n")])])]),a("p",[e._v("服务运行后，可以访问 "),a("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost"),a("OutboundLink")],1),e._v('，如果看到了 "Welcome to nginx!"，就说明 Docker Desktop for Mac 安装成功了。')]),e._v(" "),a("p",[a("img",{attrs:{src:"_images/install-mac-example-nginx.png",alt:""}})]),e._v(" "),a("p",[e._v("要停止 Nginx 服务器并删除执行下面的命令：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker stop webserver\n$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" webserver\n")])])]),a("h2",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[e._v("#")]),e._v(" 镜像加速")]),e._v(" "),a("p",[e._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),a("RouterLink",{attrs:{to:"/install/mirror.html"}},[e._v("国内镜像加速")]),e._v("。")],1),e._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);