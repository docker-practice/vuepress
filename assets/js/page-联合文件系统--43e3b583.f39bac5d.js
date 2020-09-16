(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{632:function(e,t,v){"use strict";v.r(t);var r=v(3),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"联合文件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联合文件系统"}},[e._v("#")]),e._v(" 联合文件系统")]),e._v(" "),v("p",[e._v("联合文件系统（"),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("UnionFS"),v("OutboundLink")],1),e._v("）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。")]),e._v(" "),v("p",[e._v("联合文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。")]),e._v(" "),v("p",[e._v("另外，不同 Docker 容器就可以共享一些基础的文件系统层，同时再加上自己独有的改动层，大大提高了存储的效率。")]),e._v(" "),v("p",[e._v("Docker 中使用的 AUFS（Advanced Multi-Layered Unification Filesystem）就是一种联合文件系统。 "),v("code",[e._v("AUFS")]),e._v(" 支持为每一个成员目录（类似 Git 的分支）设定只读（readonly）、读写（readwrite）和写出（whiteout-able）权限, 同时 "),v("code",[e._v("AUFS")]),e._v(" 里有一个类似分层的概念, 对只读权限的分支可以逻辑上进行增量地修改(不影响只读部分的)。")]),e._v(" "),v("p",[e._v("Docker 目前支持的联合文件系统包括 "),v("code",[e._v("OverlayFS")]),e._v(", "),v("code",[e._v("AUFS")]),e._v(", "),v("code",[e._v("Btrfs")]),e._v(", "),v("code",[e._v("VFS")]),e._v(", "),v("code",[e._v("ZFS")]),e._v(" 和 "),v("code",[e._v("Device Mapper")]),e._v("。")]),e._v(" "),v("p",[e._v("各 Linux 发行版 Docker 推荐使用的存储驱动如下表。")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[e._v("Linux 发行版")]),e._v(" "),v("th",{staticStyle:{"text-align":"left"}},[e._v("Docker 推荐使用的存储驱动")])])]),e._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("Docker CE on Ubuntu")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("code",[e._v("overlay2")]),e._v(" (16.04 +)")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("Docker CE on Debian")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("code",[e._v("overlay2")]),e._v(" (Debian Stretch), "),v("code",[e._v("aufs")]),e._v(", "),v("code",[e._v("devicemapper")])])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("Docker CE on CentOS")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("code",[e._v("overlay2")])])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("Docker CE on Fedora")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("code",[e._v("overlay2")])])])])]),e._v(" "),v("p",[e._v("在可能的情况下，"),v("a",{attrs:{href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("推荐"),v("OutboundLink")],1),e._v(" 使用 "),v("code",[e._v("overlay2")]),e._v(" 存储驱动，"),v("code",[e._v("overlay2")]),e._v(" 是目前 Docker 默认的存储驱动，以前则是 "),v("code",[e._v("aufs")]),e._v("。你可以通过配置来使用以上提到的其他类型的存储驱动。")])])}),[],!1,null,null,null);t.default=o.exports}}]);