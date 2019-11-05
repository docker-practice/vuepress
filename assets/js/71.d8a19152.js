(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{272:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用-wordpress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-wordpress"}},[t._v("#")]),t._v(" 使用 WordPress")]),t._v(" "),a("blockquote",[a("p",[t._v("本小节内容适合 "),a("code",[t._v("PHP")]),t._v(" 开发人员阅读。")])]),t._v(" "),a("p",[a("code",[t._v("Compose")]),t._v(" 可以很便捷的让 "),a("code",[t._v("Wordpress")]),t._v(" 运行在一个独立的环境中。")]),t._v(" "),a("h3",{attrs:{id:"创建空文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建空文件夹"}},[t._v("#")]),t._v(" 创建空文件夹")]),t._v(" "),a("p",[t._v("假设新建一个名为 "),a("code",[t._v("wordpress")]),t._v(" 的文件夹，然后进入这个文件夹。")]),t._v(" "),a("h3",{attrs:{id:"创建-docker-compose-yml-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-docker-compose-yml-文件"}},[t._v("#")]),t._v(" 创建 "),a("code",[t._v("docker-compose.yml")]),t._v(" 文件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yeasy/docker_practice/blob/master/compose/demo/wordpress/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("docker-compose.yml")]),a("OutboundLink")],1),t._v(" 文件将开启一个 "),a("code",[t._v("wordpress")]),t._v(" 服务和一个独立的 "),a("code",[t._v("MySQL")]),t._v(" 实例：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("default_authentication_plugin=mysql_native_password\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server=utf8mb4\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("collation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server=utf8mb4_unicode_ci     \n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" db_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" somewordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" db\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8000:80"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h3",{attrs:{id:"构建并运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建并运行项目"}},[t._v("#")]),t._v(" 构建并运行项目")]),t._v(" "),a("p",[t._v("运行 "),a("code",[t._v("docker-compose up -d")]),t._v(" Compose 就会拉取镜像再创建我们所需要的镜像，然后启动 "),a("code",[t._v("wordpress")]),t._v(" 和数据库容器。 接着浏览器访问 "),a("code",[t._v("127.0.0.1:8000")]),t._v(" 端口就能看到 "),a("code",[t._v("WordPress")]),t._v(" 安装界面了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);