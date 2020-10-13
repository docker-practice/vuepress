(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{604:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在-swarm-集群中管理敏感数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-swarm-集群中管理敏感数据"}},[s._v("#")]),s._v(" 在 Swarm 集群中管理敏感数据")]),s._v(" "),t("p",[s._v("在动态的、大规模的分布式集群上，管理和分发 "),t("code",[s._v("密码")]),s._v("、"),t("code",[s._v("证书")]),s._v(" 等敏感信息是极其重要的工作。传统的密钥分发方式（如密钥放入镜像中，设置环境变量，volume 动态挂载等）都存在着潜在的巨大的安全风险。")]),s._v(" "),t("p",[s._v("Docker 目前已经提供了 "),t("code",[s._v("secrets")]),s._v(" 管理功能，用户可以在 Swarm 集群中安全地管理密码、密钥证书等敏感数据，并允许在多个 Docker 容器实例之间共享访问指定的敏感数据。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意： "),t("code",[s._v("secret")]),s._v(" 也可以在 "),t("code",[s._v("Docker Compose")]),s._v(" 中使用。")])]),s._v(" "),t("p",[s._v("我们可以用 "),t("code",[s._v("docker secret")]),s._v(" 命令来管理敏感信息。接下来我们在上面章节中创建好的 Swarm 集群中介绍该命令的使用。")]),s._v(" "),t("p",[s._v("这里我们以在 Swarm 集群中部署 "),t("code",[s._v("mysql")]),s._v(" 和 "),t("code",[s._v("wordpress")]),s._v(" 服务为例。")]),s._v(" "),t("h2",{attrs:{id:"创建-secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-secret"}},[s._v("#")]),s._v(" 创建 secret")]),s._v(" "),t("p",[s._v("我们使用 "),t("code",[s._v("docker secret create")]),s._v(" 命令以管道符的形式创建 "),t("code",[s._v("secret")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl rand -base64 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" docker secret create mysql_password -\n\n$ openssl rand -base64 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" docker secret create mysql_root_password -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"查看-secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-secret"}},[s._v("#")]),s._v(" 查看 secret")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("docker secret ls")]),s._v(" 命令来查看 "),t("code",[s._v("secret")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker secret "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nID                          NAME                  CREATED             UPDATED\nl1vinzevzhj4goakjap5ya409   mysql_password        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" seconds ago      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" seconds ago\nyvsczlx9votfw3l0nz5rlidig   mysql_root_password   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" seconds ago      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" seconds ago\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"创建-mysql-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-mysql-服务"}},[s._v("#")]),s._v(" 创建 MySQL 服务")]),s._v(" "),t("p",[s._v("创建服务相关命令已经在前边章节进行了介绍，这里直接列出命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker network create -d overlay mysql_private\n\n$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --name mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --replicas "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --network mysql_private "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("volume,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mydata,destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --secret "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_root_password,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_root_password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --secret "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_password,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD_FILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run/secrets/mysql_root_password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_PASSWORD_FILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run/secrets/mysql_password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     mysql:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("如果你没有在 "),t("code",[s._v("target")]),s._v(" 中显式的指定路径时，"),t("code",[s._v("secret")]),s._v(" 默认通过 "),t("code",[s._v("tmpfs")]),s._v(" 文件系统挂载到容器的 "),t("code",[s._v("/run/secrets")]),s._v(" 目录中。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --name wordpress "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --replicas "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --network mysql_private "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --publish "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("target")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v(",port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("volume,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wpdata,destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/www/html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --secret "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_password,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wp_db_password,mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0400 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORDPRESS_DB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORDPRESS_DB_PASSWORD_FILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run/secrets/wp_db_password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORDPRESS_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql:3306"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORDPRESS_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     wordpress:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("查看服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nID            NAME   MODE        REPLICAS  IMAGE\nwvnh0siktqr3  mysql      replicated  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       mysql:latest\nnzt5xzae4n62  wordpress  replicated  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       wordpress:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("现在浏览器访问 "),t("code",[s._v("IP:30000")]),s._v("，即可开始 "),t("code",[s._v("WordPress")]),s._v(" 的安装与使用。")]),s._v(" "),t("p",[s._v("通过以上方法，我们没有像以前通过设置环境变量来设置 MySQL 密码， 而是采用 "),t("code",[s._v("docker secret")]),s._v(" 来设置密码，防范了密码泄露的风险。")])])}),[],!1,null,null,null);a.default=r.exports}}]);