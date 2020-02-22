(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{388:function(t,r,e){"use strict";e.r(r);var a=e(28),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[t._v("#")]),t._v(" 命名空间")]),t._v(" "),e("p",[t._v("命名空间是 Linux 内核一个强大的特性。每个容器都有自己单独的命名空间，运行在其中的应用都像是在独立的操作系统中运行一样。命名空间保证了容器之间彼此互不影响。")]),t._v(" "),e("h2",{attrs:{id:"pid-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pid-命名空间"}},[t._v("#")]),t._v(" pid 命名空间")]),t._v(" "),e("p",[t._v("不同用户的进程就是通过 pid 命名空间隔离开的，且不同命名空间中可以有相同 pid。所有的 LXC 进程在 Docker 中的父进程为 Docker 进程，每个 LXC 进程具有不同的命名空间。同时由于允许嵌套，因此可以很方便的实现嵌套的 Docker 容器。")]),t._v(" "),e("h2",{attrs:{id:"net-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#net-命名空间"}},[t._v("#")]),t._v(" net 命名空间")]),t._v(" "),e("p",[t._v("有了 pid 命名空间，每个命名空间中的 pid 能够相互隔离，但是网络端口还是共享 host 的端口。网络隔离是通过 net 命名空间实现的， 每个 net 命名空间有独立的 网络设备，IP 地址，路由表，/proc/net 目录。这样每个容器的网络就能隔离开来。Docker 默认采用 veth 的方式，将容器中的虚拟网卡同 host 上的一 个Docker 网桥 docker0 连接在一起。")]),t._v(" "),e("h2",{attrs:{id:"ipc-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ipc-命名空间"}},[t._v("#")]),t._v(" ipc 命名空间")]),t._v(" "),e("p",[t._v("容器中进程交互还是采用了 Linux 常见的进程间交互方法(interprocess communication - IPC)， 包括信号量、消息队列和共享内存等。然而同 VM 不同的是，容器的进程间交互实际上还是 host 上具有相同 pid 命名空间中的进程间交互，因此需要在 IPC 资源申请时加入命名空间信息，每个 IPC 资源有一个唯一的 32 位 id。")]),t._v(" "),e("h2",{attrs:{id:"mnt-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mnt-命名空间"}},[t._v("#")]),t._v(" mnt 命名空间")]),t._v(" "),e("p",[t._v("类似 chroot，将一个进程放到一个特定的目录执行。mnt 命名空间允许不同命名空间的进程看到的文件结构不同，这样每个命名空间 中的进程所看到的文件目录就被隔离开了。同 chroot 不同，每个命名空间中的容器在 /proc/mounts 的信息只包含所在命名空间的 mount point。")]),t._v(" "),e("h2",{attrs:{id:"uts-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uts-命名空间"}},[t._v("#")]),t._v(" uts 命名空间")]),t._v(" "),e("p",[t._v('UTS("UNIX Time-sharing System") 命名空间允许每个容器拥有独立的 hostname 和 domain name， 使其在网络上可以被视作一个独立的节点而非 主机上的一个进程。')]),t._v(" "),e("h2",{attrs:{id:"user-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-命名空间"}},[t._v("#")]),t._v(" user 命名空间")]),t._v(" "),e("p",[t._v("每个容器可以有不同的用户和组 id， 也就是说可以在容器内用容器内部的用户执行程序而非主机上的用户。")]),t._v(" "),e("p",[t._v("*注：更多关于 Linux 上命名空间的信息，请阅读 "),e("a",{attrs:{href:"https://blog.scottlowe.org/2013/09/04/introducing-linux-network-namespaces/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);r.default=s.exports}}]);