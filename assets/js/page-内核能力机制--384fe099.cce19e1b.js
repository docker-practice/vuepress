(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{613:function(t,e,r){"use strict";r.r(e);var o=r(3),_=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"内核能力机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内核能力机制"}},[t._v("#")]),t._v(" 内核能力机制")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/capabilities.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("能力机制（Capability）"),r("OutboundLink")],1),t._v(" 是 Linux 内核一个强大的特性，可以提供细粒度的权限访问控制。\nLinux 内核自 2.2 版本起就支持能力机制，它将权限划分为更加细粒度的操作能力，既可以作用在进程上，也可以作用在文件上。")]),t._v(" "),r("p",[t._v("例如，一个 Web 服务进程只需要绑定一个低于 1024 的端口的权限，并不需要 root 权限。那么它只需要被授权 "),r("code",[t._v("net_bind_service")]),t._v(" 能力即可。此外，还有很多其他的类似能力来避免进程获取 root 权限。")]),t._v(" "),r("p",[t._v("默认情况下，Docker 启动的容器被严格限制只允许使用内核的一部分能力。")]),t._v(" "),r("p",[t._v("使用能力机制对加强 Docker 容器的安全有很多好处。通常，在服务器上会运行一堆需要特权权限的进程，包括有 ssh、cron、syslogd、硬件管理工具模块（例如负载模块）、网络配置工具等等。容器跟这些进程是不同的，因为几乎所有的特权进程都由容器以外的支持系统来进行管理。")]),t._v(" "),r("ul",[r("li",[t._v("ssh 访问被主机上ssh服务来管理；")]),t._v(" "),r("li",[t._v("cron 通常应该作为用户进程执行，权限交给使用它服务的应用来处理；")]),t._v(" "),r("li",[t._v("日志系统可由 Docker 或第三方服务管理；")]),t._v(" "),r("li",[t._v("硬件管理无关紧要，容器中也就无需执行 udevd 以及类似服务；")]),t._v(" "),r("li",[t._v("网络管理也都在主机上设置，除非特殊需求，容器不需要对网络进行配置。")])]),t._v(" "),r("p",[t._v("从上面的例子可以看出，大部分情况下，容器并不需要“真正的” root 权限，容器只需要少数的能力即可。为了加强安全，容器可以禁用一些没必要的权限。")]),t._v(" "),r("ul",[r("li",[t._v("完全禁止任何 mount 操作；")]),t._v(" "),r("li",[t._v("禁止直接访问本地主机的套接字；")]),t._v(" "),r("li",[t._v("禁止访问一些文件系统的操作，比如创建新的设备、修改文件属性等；")]),t._v(" "),r("li",[t._v("禁止模块加载。")])]),t._v(" "),r("p",[t._v("这样，就算攻击者在容器中取得了 root 权限，也不能获得本地主机的较高权限，能进行的破坏也有限。")]),t._v(" "),r("p",[t._v("默认情况下，Docker采用 "),r("a",{attrs:{href:"https://github.com/moby/moby/blob/master/oci/caps/defaults.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("白名单"),r("OutboundLink")],1),t._v(" 机制，禁用必需功能之外的其它权限。\n当然，用户也可以根据自身需求来为 Docker 容器启用额外的权限。")])])}),[],!1,null,null,null);e.default=_.exports}}]);