(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{467:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"minio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minio"}},[a._v("#")]),a._v(" minio")]),a._v(" "),s("p",[a._v("[TOC]\nMinIO 是一个基于Apache License v2.0开源协议的对象存储服务。它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几kb到最大5T不等。")]),a._v(" "),s("p",[a._v("MinIO是一个非常轻量的服务,可以很简单的和其他应用的结合，类似 NodeJS, Redis 或者 MySQL。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://docs.min.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[a._v("#")]),a._v(" 简单使用")]),a._v(" "),s("p",[a._v("测试、开发环境下不考虑数据存储的情况下可以使用下面的命令快速开启服务。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull minio/minio\ndocker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 minio/minio server /data\n")])])]),s("h2",{attrs:{id:"离线部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离线部署"}},[a._v("#")]),a._v(" 离线部署")]),a._v(" "),s("p",[a._v("许多生产环境是一般是没有公网资源的，这就需要从有公网资源的服务器上把镜像导出，然后导入到需要运行镜像的内网服务器。")]),a._v(" "),s("h3",{attrs:{id:"导出镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出镜像"}},[a._v("#")]),a._v(" 导出镜像")]),a._v(" "),s("p",[a._v("在有公网资源的服务器上下载好"),s("code",[a._v("minio/minio")]),a._v("镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker save -o minio.tar minio/minio:latest\n")])])]),a._v(" "),s("h3",{attrs:{id:"导入镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入镜像"}},[a._v("#")]),a._v(" 导入镜像")]),a._v(" "),s("p",[a._v("把压缩文件复制到内网服务器上，使用下面的命令导入镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker load minio.tar \n")])])]),s("h3",{attrs:{id:"运行-minio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-minio"}},[a._v("#")]),a._v(" 运行 minio")]),a._v(" "),s("ul",[s("li",[a._v("把/mnt/data 改成要替换的数据目录")]),a._v(" "),s("li",[a._v("替换 MINIO_ACCESS_KEY")]),a._v(" "),s("li",[a._v("替换 MINIO_SECRET_KEY")]),a._v(" "),s("li",[a._v("替换 name,minio1(可选)")]),a._v(" "),s("li",[a._v("如果9000端口冲突,替换端口前面的如:9009:9000")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 --name minio1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MINIO_ACCESS_KEY=改成自己需要的"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MINIO_SECRET_KEY=改成自己需要的"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -v /mnt/data:/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --restart"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  minio/minio server /data\n")])])]),s("h3",{attrs:{id:"访问-web-管理页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问-web-管理页面"}},[a._v("#")]),a._v(" 访问 web 管理页面")]),a._v(" "),s("p",[a._v("http://x.x.x.x:9000/minio/")])])}),[],!1,null,null,null);t.default=n.exports}}]);