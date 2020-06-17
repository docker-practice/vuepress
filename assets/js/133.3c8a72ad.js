(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{478:function(e,r,o){"use strict";o.r(r);var t=o(42),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"什么是-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[e._v("#")]),e._v(" 什么是 Docker")]),e._v(" "),o("p",[o("strong",[e._v("Docker")]),e._v(" 最初是 "),o("code",[e._v("dotCloud")]),e._v(" 公司创始人 "),o("a",{attrs:{href:"https://github.com/shykes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solomon Hykes"),o("OutboundLink")],1),e._v(" 在法国期间发起的一个公司内部项目，它是基于 "),o("code",[e._v("dotCloud")]),e._v(" 公司多年云服务技术的一次革新，并于 "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Docker_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("2013 年 3 月以 Apache 2.0 授权协议开源"),o("OutboundLink")],1),e._v("，主要项目代码在 "),o("a",{attrs:{href:"https://github.com/moby/moby",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("OutboundLink")],1),e._v(" 上进行维护。"),o("code",[e._v("Docker")]),e._v(" 项目后来还加入了 Linux 基金会，并成立推动 "),o("a",{attrs:{href:"https://opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("开放容器联盟（OCI）"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[o("strong",[e._v("Docker")]),e._v(" 自开源后受到广泛的关注和讨论，至今其 "),o("a",{attrs:{href:"https://github.com/moby/moby",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub 项目"),o("OutboundLink")],1),e._v(" 已经超过 5 万 4 千个星标和一万多个 "),o("code",[e._v("fork")]),e._v("。甚至由于 "),o("code",[e._v("Docker")]),e._v(" 项目的火爆，在 "),o("code",[e._v("2013")]),e._v(" 年底，"),o("a",{attrs:{href:"https://www.docker.com/blog/dotcloud-is-becoming-docker-inc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotCloud 公司决定改名为 Docker"),o("OutboundLink")],1),e._v("。"),o("code",[e._v("Docker")]),e._v(" 最初是在 "),o("code",[e._v("Ubuntu 12.04")]),e._v(" 上开发实现的；"),o("code",[e._v("Red Hat")]),e._v(" 则从 "),o("code",[e._v("RHEL 6.5")]),e._v(" 开始对 "),o("code",[e._v("Docker")]),e._v(" 进行支持；"),o("code",[e._v("Google")]),e._v(" 也在其 "),o("code",[e._v("PaaS")]),e._v(" 产品中广泛应用 "),o("code",[e._v("Docker")]),e._v("。")]),e._v(" "),o("p",[o("strong",[e._v("Docker")]),e._v(" 使用 "),o("code",[e._v("Google")]),e._v(" 公司推出的 "),o("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go 语言"),o("OutboundLink")],1),e._v(" 进行开发实现，基于 "),o("code",[e._v("Linux")]),e._v(" 内核的 "),o("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Cgroups",target:"_blank",rel:"noopener noreferrer"}},[e._v("cgroup"),o("OutboundLink")],1),e._v("，"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("namespace"),o("OutboundLink")],1),e._v("，以及 "),o("a",{attrs:{href:"https://docs.docker.com/storage/storagedriver/overlayfs-driver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OverlayFS"),o("OutboundLink")],1),e._v(" 类的 "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"}},[e._v("Union FS"),o("OutboundLink")],1),e._v(" 等技术，对进程进行封装隔离，属于 "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Operating-system-level_virtualization",target:"_blank",rel:"noopener noreferrer"}},[e._v("操作系统层面的虚拟化技术"),o("OutboundLink")],1),e._v("。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 "),o("a",{attrs:{href:"https://linuxcontainers.org/lxc/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LXC"),o("OutboundLink")],1),e._v("，从 0.7 版本以后开始去除 "),o("code",[e._v("LXC")]),e._v("，转而使用自行开发的 "),o("a",{attrs:{href:"https://github.com/docker/libcontainer",target:"_blank",rel:"noopener noreferrer"}},[e._v("libcontainer"),o("OutboundLink")],1),e._v("，从 1.11 开始，则进一步演进为使用 "),o("a",{attrs:{href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"}},[e._v("runC"),o("OutboundLink")],1),e._v(" 和 "),o("a",{attrs:{href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"}},[e._v("containerd"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/media/docker-on-linux.png",alt:"Docker 架构"}})]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("runc")]),e._v(" 是一个 Linux 命令行工具，用于根据 "),o("a",{attrs:{href:"https://github.com/opencontainers/runtime-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI容器运行时规范"),o("OutboundLink")],1),e._v(" 创建和运行容器。")])]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("containerd")]),e._v(" 是一个守护程序，它管理容器生命周期，提供了在一个节点上执行容器和管理镜像的最小功能集。")])]),e._v(" "),o("p",[o("strong",[e._v("Docker")]),e._v(" 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 "),o("code",[e._v("Docker")]),e._v(" 技术比虚拟机技术更为轻便、快捷。")]),e._v(" "),o("p",[e._v("下面的图片比较了 "),o("strong",[e._v("Docker")]),e._v(" 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),e._v(" "),o("p",[o("img",{attrs:{src:"_images/virtualization.png",alt:"传统虚拟化"}})]),e._v(" "),o("p",[o("img",{attrs:{src:"_images/docker.png",alt:"Docker"}})])])}),[],!1,null,null,null);r.default=n.exports}}]);