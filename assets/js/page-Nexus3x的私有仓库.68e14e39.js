(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{606:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nexus3-x-的私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexus3-x-的私有仓库"}},[s._v("#")]),s._v(" Nexus3.x 的私有仓库")]),s._v(" "),e("AdSenseTitle"),s._v(" "),e("p",[s._v("使用 Docker 官方的 Registry 创建的仓库面临一些维护问题。比如某些镜像删除以后空间默认是不会回收的，需要一些命令去回收空间然后重启 Registry。在企业中把内部的一些工具包放入 "),e("code",[s._v("Nexus")]),s._v(" 中是比较常见的做法，最新版本 "),e("code",[s._v("Nexus3.x")]),s._v(" 全面支持 Docker 的私有镜像。所以使用 "),e("a",{attrs:{href:"https://www.sonatype.com/product/repository-oss-download",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("Nexus3.x")]),e("OutboundLink")],1),s._v(" 一个软件来管理 "),e("code",[s._v("Docker")]),s._v(" , "),e("code",[s._v("Maven")]),s._v(" , "),e("code",[s._v("Yum")]),s._v(" , "),e("code",[s._v("PyPI")]),s._v(" 等是一个明智的选择。")]),s._v(" "),e("h2",{attrs:{id:"启动-nexus-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-nexus-容器"}},[s._v("#")]),s._v(" 启动 Nexus 容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name nexus3 --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --mount "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nexus-data,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/nexus-data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    sonatype/nexus3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("首次运行需等待 3-5 分钟，你可以使用 "),e("code",[s._v("docker logs nexus3 -f")]),s._v(" 查看日志：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs nexus3 -f\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-11 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":31:21,990+0000 INFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("jetty-main-1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" *SYSTEM org.sonatype.nexus.bootstrap.jetty.JettyServer -\n-------------------------------------------------\n\nStarted Sonatype Nexus OSS "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.30")]),s._v(".0-01\n\n-------------------------------------------------\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("如果你看到以上内容，说明 "),e("code",[s._v("Nexus")]),s._v(" 已经启动成功，你可以使用浏览器打开 "),e("code",[s._v("http://YourIP:8081")]),s._v(" 访问 "),e("code",[s._v("Nexus")]),s._v(" 了。")]),s._v(" "),e("p",[s._v("首次运行请通过以下命令获取初始密码：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" nexus3 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /nexus-data/admin.password\n\n9266139e-41a2-4abb-92ec-e4142a3532cb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("首次启动 Nexus 的默认帐号是 "),e("code",[s._v("admin")]),s._v(" ，密码则是上边命令获取到的，点击右上角登录，首次登录需更改初始密码。")]),s._v(" "),e("p",[s._v("登录之后可以点击页面上方的齿轮按钮按照下面的方法进行设置。")]),s._v(" "),e("h2",{attrs:{id:"创建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("#")]),s._v(" 创建仓库")]),s._v(" "),e("p",[s._v("创建一个私有仓库的方法： "),e("code",[s._v("Repository->Repositories")]),s._v(" 点击右边菜单 "),e("code",[s._v("Create repository")]),s._v(" 选择 "),e("code",[s._v("docker (hosted)")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("Name")]),s._v(": 仓库的名称")]),s._v(" "),e("li",[e("strong",[s._v("HTTP")]),s._v(": 仓库单独的访问端口（例如："),e("strong",[s._v("5001")]),s._v("）")]),s._v(" "),e("li",[e("strong",[s._v("Hosted -> Deployment pollcy")]),s._v(": 请选择 "),e("strong",[s._v("Allow redeploy")]),s._v(" 否则无法上传 Docker 镜像。")])]),s._v(" "),e("p",[s._v("其它的仓库创建方法请各位自己摸索，还可以创建一个 "),e("code",[s._v("docker (proxy)")]),s._v(" 类型的仓库链接到 DockerHub 上。再创建一个 "),e("code",[s._v("docker (group)")]),s._v(" 类型的仓库把刚才的 "),e("code",[s._v("hosted")]),s._v(" 与 "),e("code",[s._v("proxy")]),s._v(" 添加在一起。主机在访问的时候默认下载私有仓库中的镜像，如果没有将链接到 DockerHub 中下载并缓存到 Nexus 中。")]),s._v(" "),e("h2",{attrs:{id:"添加访问权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加访问权限"}},[s._v("#")]),s._v(" 添加访问权限")]),s._v(" "),e("p",[s._v("菜单 "),e("code",[s._v("Security->Realms")]),s._v(" 把 Docker Bearer Token Realm 移到右边的框中保存。")]),s._v(" "),e("p",[s._v("添加用户规则：菜单 "),e("code",[s._v("Security->Roles")]),s._v("->"),e("code",[s._v("Create role")]),s._v("  在 "),e("code",[s._v("Privlleges")]),s._v(" 选项搜索 docker 把相应的规则移动到右边的框中然后保存。")]),s._v(" "),e("p",[s._v("添加用户：菜单 "),e("code",[s._v("Security->Users")]),s._v("->"),e("code",[s._v("Create local user")]),s._v(" 在 "),e("code",[s._v("Roles")]),s._v(" 选项中选中刚才创建的规则移动到右边的窗口保存。")]),s._v(" "),e("h2",{attrs:{id:"nginx-加密代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-加密代理"}},[s._v("#")]),s._v(" NGINX 加密代理")]),s._v(" "),e("p",[s._v("证书的生成请参见 "),e("RouterLink",{attrs:{to:"/repository/registry_auth.html"}},[e("code",[s._v("私有仓库高级配置")])]),s._v(" 里面证书生成一节。")],1),s._v(" "),e("p",[s._v("NGINX 示例配置如下")]),s._v(" "),e("div",{staticClass:"language-nginx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" register")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YourHostName OR IP"')]),s._v(":5001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口为上面添加私有镜像仓库时设置的 HTTP 选项的端口号")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" interval=3000 rise=2 fall=10 timeout=1000 type=http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check_http_send")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HEAD / HTTP/1.0'),e("span",{pre:!0,attrs:{class:"token escape entity"}},[s._v("\\r")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[s._v("\\n")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[s._v("\\r")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[s._v("\\n")]),s._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check_http_expect_alive")]),s._v(" http_4xx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" YourDomainName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果没有 DNS 服务器做解析，请删除此选项使用本机 IP 地址访问")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" key/example.crt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" key/example.key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1.1 TLSv1.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v("  HIGH:!aNULL:!MD5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("large_client_header_buffers")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_max_body_size")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_body_buffer_size")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_connect_timeout")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_send_timeout")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffer_size")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("128k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffers")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_busy_buffers_size")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("128k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_temp_file_write_size")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Forwarded-Proto "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Forwarded-Port "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Forwarded-For "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_http_version")]),s._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Upgrade "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Connection "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$connection_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_redirect")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Real-IP "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("900s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("h2",{attrs:{id:"docker-主机访问镜像仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-主机访问镜像仓库"}},[s._v("#")]),s._v(" Docker 主机访问镜像仓库")]),s._v(" "),e("p",[s._v("如果不启用 SSL 加密可以通过 "),e("RouterLink",{attrs:{to:"/repository/registry.html"}},[s._v("前面章节")]),s._v(" 的方法添加非 https 仓库地址到 Docker 的配置文件中然后重启 Docker。")],1),s._v(" "),e("p",[s._v("使用 SSL 加密以后程序需要访问就不能采用修改配置的方式了。具体方法如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ openssl s_client -showcerts -connect YourDomainName OR HostIP:443 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("openssl x509 -outform PEM "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ca.crt\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ca.crt "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/ssl/certs/ca-certificates.crt\n$ systemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("使用 "),e("code",[s._v("docker login YourDomainName OR HostIP")]),s._v(" 进行测试，用户名密码填写上面 Nexus 中设置的。")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);