(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{478:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"minio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minio"}},[s._v("#")]),s._v(" minio")]),s._v(" "),t("AdSenseTitle"),s._v(" "),t("p",[t("strong",[s._v("MinIO")]),s._v(" 是一个基于 Apache License v2.0 开源协议的对象存储服务。它兼容亚马逊 S3 云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几 kb 到最大 5T 不等。")]),s._v(" "),t("p",[s._v("MinIO 是一个非常轻量的服务,可以很简单的和其他应用的结合，类似 NodeJS, Redis 或者 MySQL。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.min.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"简单使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[s._v("#")]),s._v(" 简单使用")]),s._v(" "),t("p",[s._v("测试、开发环境下不考虑数据存储的情况下可以使用下面的命令快速开启服务。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 minio/minio server /data --console-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':9090'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"离线部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线部署"}},[s._v("#")]),s._v(" 离线部署")]),s._v(" "),t("p",[s._v("许多生产环境是一般是没有公网资源的，这就需要从有公网资源的服务器上把镜像导出，然后导入到需要运行镜像的内网服务器。")]),s._v(" "),t("h3",{attrs:{id:"导出镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出镜像"}},[s._v("#")]),s._v(" 导出镜像")]),s._v(" "),t("p",[s._v("在有公网资源的服务器上下载好"),t("code",[s._v("minio/minio")]),s._v("镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save -o minio.tar minio/minio:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("使用docker save 的时候，也可以使用image id 来导出，但是那样导出的时候，就会丢失原来的镜像名称，推荐，还是使用镜像名字+tag来导出镜像")])]),s._v(" "),t("h3",{attrs:{id:"导入镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入镜像"}},[s._v("#")]),s._v(" 导入镜像")]),s._v(" "),t("p",[s._v("把压缩文件复制到内网服务器上，使用下面的命令导入镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load minio.tar \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"运行-minio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-minio"}},[s._v("#")]),s._v(" 运行 minio")]),s._v(" "),t("ul",[t("li",[s._v("把 "),t("code",[s._v("/mnt/data")]),s._v(" 改成要替换的数据目录")]),s._v(" "),t("li",[s._v("替换 "),t("code",[s._v("MINIO_ROOT_USER")]),s._v(" 的值")]),s._v(" "),t("li",[s._v("替换 "),t("code",[s._v("MINIO_ROOT_PASSWORD")]),s._v(" 的值")]),s._v(" "),t("li",[s._v("替换 name,minio1(可选)")]),s._v(" "),t("li",[s._v("如果 9000、9090 端口冲突,替换端口前面的如 "),t("code",[s._v("9009:9000")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 --name minio1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_ROOT_USER=改成自己需要的"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_ROOT_PASSWORD=改成自己需要的"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /mnt/data:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  minio/minio server /data --console-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':9090'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"访问-web-管理页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-web-管理页面"}},[s._v("#")]),s._v(" 访问 web 管理页面")]),s._v(" "),t("p",[s._v("http://x.x.x.x:9090")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);