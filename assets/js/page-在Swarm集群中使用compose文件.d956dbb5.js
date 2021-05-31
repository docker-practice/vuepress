(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{449:function(s,a,t){s.exports=t.p+"assets/img/wordpress.45232da8.png"},632:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"在-swarm-集群中使用-compose-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-swarm-集群中使用-compose-文件"}},[s._v("#")]),s._v(" 在 Swarm 集群中使用 compose 文件")]),s._v(" "),n("p",[s._v("正如之前使用 "),n("code",[s._v("docker-compose.yml")]),s._v(" 来一次配置、启动多个容器，在 "),n("code",[s._v("Swarm")]),s._v(" 集群中也可以使用 "),n("code",[s._v("compose")]),s._v(" 文件 （"),n("code",[s._v("docker-compose.yml")]),s._v("） 来配置、启动多个服务。")]),s._v(" "),n("p",[s._v("上一节中，我们使用 "),n("code",[s._v("docker service create")]),s._v(" 一次只能部署一个服务，使用 "),n("code",[s._v("docker-compose.yml")]),s._v(" 我们可以一次启动多个关联的服务。")]),s._v(" "),n("p",[s._v("我们以在 "),n("code",[s._v("Swarm")]),s._v(" 集群中部署 "),n("code",[s._v("WordPress")]),s._v(" 为例进行说明。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" overlay\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" replicated\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" overlay\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" somewordpress\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_DATABASE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_USER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("placement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("constraints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("node.role == manager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("visualizer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dockersamples/visualizer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stable\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:8080"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stop_grace_period")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1m30s\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/docker.sock:/var/run/docker.sock"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("placement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("constraints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("node.role == manager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db-data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("overlay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("p",[s._v("在 "),n("code",[s._v("Swarm")]),s._v(" 集群管理节点新建该文件，其中的 "),n("code",[s._v("visualizer")]),s._v(" 服务提供一个可视化页面，我们可以从浏览器中很直观的查看集群中各个服务的运行节点。")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("Swarm")]),s._v(" 集群中使用 "),n("code",[s._v("docker-compose.yml")]),s._v(" 我们用 "),n("code",[s._v("docker stack")]),s._v(" 命令，下面我们对该命令进行详细讲解。")]),s._v(" "),n("h2",{attrs:{id:"部署服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署服务"}},[s._v("#")]),s._v(" 部署服务")]),s._v(" "),n("p",[s._v("部署服务使用 "),n("code",[s._v("docker stack deploy")]),s._v("，其中 "),n("code",[s._v("-c")]),s._v(" 参数指定 compose 文件名。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker stack deploy -c docker-compose.yml wordpress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("现在我们打开浏览器输入 "),n("code",[s._v("任一节点IP:8080")]),s._v(" 即可看到各节点运行状态。如下图所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(449),alt:""}})]),s._v(" "),n("p",[s._v("在浏览器新的标签页输入 "),n("code",[s._v("任一节点IP")]),s._v(" 即可看到 "),n("code",[s._v("WordPress")]),s._v(" 安装界面，安装完成之后，输入 "),n("code",[s._v("任一节点IP")]),s._v(" 即可看到 "),n("code",[s._v("WordPress")]),s._v(" 页面。")]),s._v(" "),n("h2",{attrs:{id:"查看服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务"}},[s._v("#")]),s._v(" 查看服务")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker stack "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nNAME                SERVICES\nwordpress           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"移除服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#移除服务"}},[s._v("#")]),s._v(" 移除服务")]),s._v(" "),n("p",[s._v("要移除服务，使用 "),n("code",[s._v("docker stack down")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker stack down wordpress\nRemoving "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" wordpress_db\nRemoving "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" wordpress_visualizer\nRemoving "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" wordpress_wordpress\nRemoving network wordpress_overlay\nRemoving network wordpress_default\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("该命令不会移除服务所使用的 "),n("code",[s._v("数据卷")]),s._v("，如果你想移除数据卷请使用 "),n("code",[s._v("docker volume rm")])])])}),[],!1,null,null,null);a.default=e.exports}}]);