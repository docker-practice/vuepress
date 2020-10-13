(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{449:function(s,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://hub.docker.com/_/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),e("OutboundLink")],1)]),s._v(" "),e("AdSenseTitle"),s._v(" "),e("h2",{attrs:{id:"基本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[s._v("#")]),s._v(" 基本信息")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/MySQL",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),e("OutboundLink")],1),s._v(" 是开源的关系数据库实现。")]),s._v(" "),e("p",[s._v("该仓库位于 "),e("code",[s._v("https://hub.docker.com/_/mysql/")]),s._v(" ，提供了 MySQL 5.5 ~ 8.x 各个版本的镜像。")]),s._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),e("p",[s._v("默认会在 "),e("code",[s._v("3306")]),s._v(" 端口启动数据库。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run --name some-mysql -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysecretpassword -d mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("之后就可以使用其它应用来连接到该容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run --name some-app --link some-mysql:mysql -d application-that-uses-mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者通过 "),e("code",[s._v("mysql")]),s._v(" 命令行连接。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --link some-mysql:mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysql -h\""),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_PORT_3306_TCP_ADDR")]),s._v('" -P"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_PORT_3306_TCP_PORT")]),s._v('" -uroot -p"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ENV_MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),e("p",[s._v("请到 https://github.com/docker-library/docs/tree/master/mysql 查看")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);