(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{365:function(s,t,a){"use strict";a.r(t);var e=a(28),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nexus3-x-的私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus3-x-的私有仓库"}},[s._v("#")]),s._v(" Nexus3.x 的私有仓库")]),s._v(" "),a("p",[s._v("使用 Docker 官方的 Registry 创建的仓库面临一些维护问题。比如某些镜像删除以后空间默认是不会回收的，需要一些命令去回收空间然后重启 Registry 程序。在企业中把内部的一些工具包放入 Nexus 中是比较常见的做法，最新版本 "),a("code",[s._v("Nexus3.x")]),s._v(" 全面支持 Docker 的私有镜像。所以使用 "),a("a",{attrs:{href:"https://www.sonatype.com/download-oss-sonatype/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("Nexus3.x")]),a("OutboundLink")],1),s._v(" 一个软件来管理 "),a("code",[s._v("Docker")]),s._v(" , "),a("code",[s._v("Maven")]),s._v(" , "),a("code",[s._v("Yum")]),s._v(" , "),a("code",[s._v("PyPI")]),s._v(" 等是一个明智的选择。")]),s._v(" "),a("h2",{attrs:{id:"启动-nexus-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-nexus-容器"}},[s._v("#")]),s._v(" 启动 Nexus 容器")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run -d --name nexus3 --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --mount "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nexus-data,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/nexus-data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    sonatype/nexus3\n")])])]),a("p",[s._v("等待 3-5 分钟，如果 "),a("code",[s._v("nexus3")]),s._v(" 容器没有异常退出，那么你可以使用浏览器打开 "),a("code",[s._v("http://YourIP:8081")]),s._v(" 访问 Nexus 了。")]),s._v(" "),a("p",[s._v("第一次启动 Nexus 的默认帐号是 "),a("code",[s._v("admin")]),s._v(" 密码是 "),a("code",[s._v("admin123")]),s._v(" 登录以后点击页面上方的齿轮按钮进行设置。")]),s._v(" "),a("h2",{attrs:{id:"创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("#")]),s._v(" 创建仓库")]),s._v(" "),a("p",[s._v("创建一个私有仓库的方法： "),a("code",[s._v("Repository->Repositories")]),s._v(" 点击右边菜单 "),a("code",[s._v("Create repository")]),s._v(" 选择 "),a("code",[s._v("docker (hosted)")])]),s._v(" "),a("ul",[a("li",[s._v("Name: 仓库的名称")]),s._v(" "),a("li",[s._v("HTTP: 仓库单独的访问端口")]),s._v(" "),a("li",[s._v("Enable Docker V1 API: 如果需要同时支持 V1 版本请勾选此项（不建议勾选）。")]),s._v(" "),a("li",[s._v("Hosted -> Deployment pollcy: 请选择 Allow redeploy 否则无法上传 Docker 镜像。")])]),s._v(" "),a("p",[s._v("其它的仓库创建方法请各位自己摸索，还可以创建一个 docker (proxy) 类型的仓库链接到 DockerHub 上。再创建一个 docker (group) 类型的仓库把刚才的 hosted 与 proxy 添加在一起。主机在访问的时候默认下载私有仓库中的镜像，如果没有将链接到 DockerHub 中下载并缓存到 Nexus 中。")]),s._v(" "),a("h2",{attrs:{id:"添加访问权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加访问权限"}},[s._v("#")]),s._v(" 添加访问权限")]),s._v(" "),a("p",[s._v("菜单 "),a("code",[s._v("Security->Realms")]),s._v(" 把 Docker Bearer Token Realm 移到右边的框中保存。")]),s._v(" "),a("p",[s._v("添加用户规则：菜单 "),a("code",[s._v("Security->Roles")]),s._v("->"),a("code",[s._v("Create role")]),s._v("  在 "),a("code",[s._v("Privlleges")]),s._v(" 选项搜索 docker 把相应的规则移动到右边的框中然后保存。")]),s._v(" "),a("p",[s._v("添加用户：菜单 "),a("code",[s._v("Security->Users")]),s._v("->"),a("code",[s._v("Create local user")]),s._v(" 在 "),a("code",[s._v("Roles")]),s._v(" 选项中选中刚才创建的规则移动到右边的窗口保存。")]),s._v(" "),a("h2",{attrs:{id:"nginx-加密代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-加密代理"}},[s._v("#")]),s._v(" NGINX 加密代理")]),s._v(" "),a("p",[s._v("证书的生成请参见 "),a("RouterLink",{attrs:{to:"/repository/registry_auth.html"}},[a("code",[s._v("私有仓库高级配置")])]),s._v(" 里面证书生成一节。")],1),s._v(" "),a("p",[s._v("NGINX 示例配置如下")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" register\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YourHostName OR IP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口为上面添加的私有镜像仓库是设置的 HTTP 选项的端口号")]),s._v("\n    check interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" rise"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" fall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    check_http_send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HEAD / HTTP/1.0\\r\\n\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    check_http_expect_alive http_4xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" YourDomainName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果没有 DNS 服务器做解析，请删除此选项使用本机 IP 地址访问")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v("  HIGH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v("   on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("large_client_header_buffers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_max_body_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_body_buffer_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_connect_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_send_timeout")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffer_size")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffers")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_busy_buffers_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_temp_file_write_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Port "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_http_version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Connection "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$connection_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_redirect")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"docker-主机访问镜像仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-主机访问镜像仓库"}},[s._v("#")]),s._v(" Docker 主机访问镜像仓库")]),s._v(" "),a("p",[s._v("如果不启用 SSL 加密可以通过前面章节的方法添加信任地址到 Docker 的配置文件中然后重启 Docker")]),s._v(" "),a("p",[s._v("使用 SSL 加密以后程序需要访问就不能采用修改配置的访问了。具体方法如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl s_client -showcerts -connect YourDomainName OR HostIP:443 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("openssl x509 -outform PEM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ca.crt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ca.crt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/ssl/certs/ca-certificates.crt\n$ systemctl restart docker\n")])])]),a("p",[s._v("使用 "),a("code",[s._v("docker login YourDomainName OR HostIP")]),s._v(" 进行测试，用户名密码填写上面 Nexus 中生成的。")])])}),[],!1,null,null,null);t.default=r.exports}}]);