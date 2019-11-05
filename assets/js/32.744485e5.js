(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{233:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://hub.docker.com/_/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"基本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[s._v("#")]),s._v(" 基本信息")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/MySQL",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),t("OutboundLink")],1),s._v(" 是开源的关系数据库实现。")]),s._v(" "),t("p",[s._v("该仓库位于 "),t("code",[s._v("https://hub.docker.com/_/mysql/")]),s._v(" ，提供了 MySQL 5.5 ~ 8.x 各个版本的镜像。")]),s._v(" "),t("h3",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("p",[s._v("默认会在 "),t("code",[s._v("3306")]),s._v(" 端口启动数据库。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run --name some-mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysecretpassword -d mysql\n")])])]),t("p",[s._v("之后就可以使用其它应用来连接到该容器。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run --name some-app --link some-mysql:mysql -d application-that-uses-mysql\n")])])]),t("p",[s._v("或者通过 "),t("code",[s._v("mysql")]),s._v(" 命令行连接。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -it --rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --link some-mysql:mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec mysql -h\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_PORT_3306_TCP_ADDR")]),s._v('" -P"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_PORT_3306_TCP_PORT")]),s._v('" -uroot -p"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ENV_MYSQL_ROOT_PASSWORD")]),s._v("\"'")]),s._v("\n")])])]),t("h3",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),t("p",[s._v("请到 https://github.com/docker-library/docs/tree/master/mysql 查看")])])}),[],!1,null,null,null);a.default=r.exports}}]);