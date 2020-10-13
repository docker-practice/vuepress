(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{493:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-wordpress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-wordpress"}},[s._v("#")]),s._v(" 使用 WordPress")]),s._v(" "),a("AdSenseTitle"),s._v(" "),a("blockquote",[a("p",[s._v("本小节内容适合 "),a("code",[s._v("PHP")]),s._v(" 开发人员阅读。")])]),s._v(" "),a("p",[a("code",[s._v("Compose")]),s._v(" 可以很便捷的让 "),a("code",[s._v("Wordpress")]),s._v(" 运行在一个独立的环境中。")]),s._v(" "),a("h2",{attrs:{id:"创建空文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建空文件夹"}},[s._v("#")]),s._v(" 创建空文件夹")]),s._v(" "),a("p",[s._v("假设新建一个名为 "),a("code",[s._v("wordpress")]),s._v(" 的文件夹，然后进入这个文件夹。")]),s._v(" "),a("h2",{attrs:{id:"创建-docker-compose-yml-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-docker-compose-yml-文件"}},[s._v("#")]),s._v(" 创建 "),a("code",[s._v("docker-compose.yml")]),s._v(" 文件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yeasy/docker_practice/blob/master/compose/demo/wordpress/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("docker-compose.yml")]),a("OutboundLink")],1),s._v(" 文件将开启一个 "),a("code",[s._v("wordpress")]),s._v(" 服务和一个独立的 "),a("code",[s._v("MySQL")]),s._v(" 实例：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("default_authentication_plugin=mysql_native_password\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server=utf8mb4\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("collation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server=utf8mb4_unicode_ci     \n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" somewordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000:80"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h2",{attrs:{id:"构建并运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建并运行项目"}},[s._v("#")]),s._v(" 构建并运行项目")]),s._v(" "),a("p",[s._v("运行 "),a("code",[s._v("docker-compose up -d")]),s._v(" Compose 就会拉取镜像再创建我们所需要的镜像，然后启动 "),a("code",[s._v("wordpress")]),s._v(" 和数据库容器。 接着浏览器访问 "),a("code",[s._v("127.0.0.1:8000")]),s._v(" 端口就能看到 "),a("code",[s._v("WordPress")]),s._v(" 安装界面了。")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);