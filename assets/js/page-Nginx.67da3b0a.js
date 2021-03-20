(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{520:function(n,s,e){"use strict";e.r(s);var a=e(1),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" "),e("a",{attrs:{href:"https://hub.docker.com/_/nginx/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Nginx"),e("OutboundLink")],1)]),n._v(" "),e("AdSenseTitle"),n._v(" "),e("h2",{attrs:{id:"基本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[n._v("#")]),n._v(" 基本信息")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nginx",target:"_blank",rel:"noopener noreferrer"}},[n._v("Nginx"),e("OutboundLink")],1),n._v(" 是开源的高效的 Web 服务器实现，支持 HTTP、HTTPS、SMTP、POP3、IMAP 等协议。")]),n._v(" "),e("p",[n._v("该仓库位于 "),e("code",[n._v("https://hub.docker.com/_/nginx/")]),n._v(" ，提供了 Nginx 1.0 ~ 1.19.x 各个版本的镜像。")]),n._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[n._v("#")]),n._v(" 使用方法")]),n._v(" "),e("p",[n._v("下面的命令将作为一个静态页面服务器启动。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("用户也可以不使用这种映射方式，通过利用 Dockerfile 来直接将静态页面内容放到镜像中，内容为")]),n._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("FROM")]),n._v(" nginx\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("COPY")]),n._v(" static"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("-")]),n._v("html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("-")]),n._v("directory /usr/share/nginx/html\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("之后生成新的镜像，并启动一个容器。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ docker build -t some-content-nginx "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(".")]),n._v("\n$ docker run --name some-nginx -d some-content-nginx\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("开放端口，并映射到本地的 "),e("code",[n._v("8080")]),n._v(" 端口。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ docker run --name some-nginx -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v(":80 some-content-nginx\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("Nginx的默认配置文件路径为 "),e("code",[n._v("/etc/nginx/nginx.conf")]),n._v("，可以通过映射它来使用本地的配置文件，例如")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ docker run -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    --name some-nginx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -p "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v(":80 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /path/nginx.conf:/etc/nginx/nginx.conf:ro "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    nginx\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[n._v("#")]),n._v(" Dockerfile")]),n._v(" "),e("p",[n._v("请到 https://github.com/docker-library/docs/tree/master/nginx 查看。")])],1)}),[],!1,null,null,null);s.default=t.exports}}]);