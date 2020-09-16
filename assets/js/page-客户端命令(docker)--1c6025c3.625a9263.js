(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{439:function(v,_,e){v.exports=e.p+"assets/img/cmd_logic.5970ea4d.png"},461:function(v,_,e){"use strict";e.r(_);var o=e(3),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"客户端命令-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令-docker"}},[v._v("#")]),v._v(" 客户端命令(docker)")]),v._v(" "),o("h2",{attrs:{id:"客户端命令选项"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令选项"}},[v._v("#")]),v._v(" 客户端命令选项")]),v._v(" "),o("ul",[o("li",[o("code",[v._v('--config=""')]),v._v("：指定客户端配置文件，默认为 "),o("code",[v._v("~/.docker")]),v._v("；")]),v._v(" "),o("li",[o("code",[v._v("-D=true|false")]),v._v("：是否使用 debug 模式。默认不开启；")]),v._v(" "),o("li",[o("code",[v._v("-H, --host=[]")]),v._v("：指定命令对应 Docker 守护进程的监听接口，可以为 unix 套接字 "),o("code",[v._v("unix:///path/to/socket")]),v._v("，文件句柄 "),o("code",[v._v("fd://socketfd")]),v._v(" 或 tcp 套接字 "),o("code",[v._v("tcp://[host[:port]]")]),v._v("，默认为 "),o("code",[v._v("unix:///var/run/docker.sock")]),v._v("；")]),v._v(" "),o("li",[o("code",[v._v('-l, --log-level="debug|info|warn|error|fatal"')]),v._v("：指定日志输出级别；")]),v._v(" "),o("li",[o("code",[v._v("--tls=true|false")]),v._v("：是否对 Docker 守护进程启用 TLS 安全机制，默认为否；")]),v._v(" "),o("li",[o("code",[v._v("--tlscacert=/.docker/ca.pem")]),v._v("：TLS CA 签名的可信证书文件路径；")]),v._v(" "),o("li",[o("code",[v._v("--tlscert=/.docker/cert.pem")]),v._v("：TLS 可信证书文件路径；")]),v._v(" "),o("li",[o("code",[v._v("--tlscert=/.docker/key.pem")]),v._v("：TLS 密钥文件路径；")]),v._v(" "),o("li",[o("code",[v._v("--tlsverify=true|false")]),v._v("：启用 TLS 校验，默认为否。")])]),v._v(" "),o("h2",{attrs:{id:"客户端命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令"}},[v._v("#")]),v._v(" 客户端命令")]),v._v(" "),o("p",[v._v("可以通过 "),o("code",[v._v("docker COMMAND --help")]),v._v(" 来查看这些命令的具体用法。")]),v._v(" "),o("ul",[o("li",[o("code",[v._v("attach")]),v._v("：依附到一个正在运行的容器中；")]),v._v(" "),o("li",[o("code",[v._v("build")]),v._v("：从一个 Dockerfile 创建一个镜像；")]),v._v(" "),o("li",[o("code",[v._v("commit")]),v._v("：从一个容器的修改中创建一个新的镜像；")]),v._v(" "),o("li",[o("code",[v._v("cp")]),v._v("：在容器和本地宿主系统之间复制文件中；")]),v._v(" "),o("li",[o("code",[v._v("create")]),v._v("：创建一个新容器，但并不运行它；")]),v._v(" "),o("li",[o("code",[v._v("diff")]),v._v("：检查一个容器内文件系统的修改，包括修改和增加；")]),v._v(" "),o("li",[o("code",[v._v("events")]),v._v("：从服务端获取实时的事件；")]),v._v(" "),o("li",[o("code",[v._v("exec")]),v._v("：在运行的容器内执行命令；")]),v._v(" "),o("li",[o("code",[v._v("export")]),v._v("：导出容器内容为一个 "),o("code",[v._v("tar")]),v._v(" 包；")]),v._v(" "),o("li",[o("code",[v._v("history")]),v._v("：显示一个镜像的历史信息；")]),v._v(" "),o("li",[o("code",[v._v("images")]),v._v("：列出存在的镜像；")]),v._v(" "),o("li",[o("code",[v._v("import")]),v._v("：导入一个文件（典型为 "),o("code",[v._v("tar")]),v._v(" 包）路径或目录来创建一个本地镜像；")]),v._v(" "),o("li",[o("code",[v._v("info")]),v._v("：显示一些相关的系统信息；")]),v._v(" "),o("li",[o("code",[v._v("inspect")]),v._v("：显示一个容器的具体配置信息；")]),v._v(" "),o("li",[o("code",[v._v("kill")]),v._v("：关闭一个运行中的容器 (包括进程和所有相关资源)；")]),v._v(" "),o("li",[o("code",[v._v("load")]),v._v("：从一个 tar 包中加载一个镜像；")]),v._v(" "),o("li",[o("code",[v._v("login")]),v._v("：注册或登录到一个 Docker 的仓库服务器；")]),v._v(" "),o("li",[o("code",[v._v("logout")]),v._v("：从 Docker 的仓库服务器登出；")]),v._v(" "),o("li",[o("code",[v._v("logs")]),v._v("：获取容器的 log 信息；")]),v._v(" "),o("li",[o("code",[v._v("network")]),v._v("：管理 Docker 的网络，包括查看、创建、删除、挂载、卸载等；")]),v._v(" "),o("li",[o("code",[v._v("node")]),v._v("：管理 swarm 集群中的节点，包括查看、更新、删除、提升/取消管理节点等；")]),v._v(" "),o("li",[o("code",[v._v("pause")]),v._v("：暂停一个容器中的所有进程；")]),v._v(" "),o("li",[o("code",[v._v("port")]),v._v("：查找一个 nat 到一个私有网口的公共口；")]),v._v(" "),o("li",[o("code",[v._v("ps")]),v._v("：列出主机上的容器；")]),v._v(" "),o("li",[o("code",[v._v("pull")]),v._v("：从一个Docker的仓库服务器下拉一个镜像或仓库；")]),v._v(" "),o("li",[o("code",[v._v("push")]),v._v("：将一个镜像或者仓库推送到一个 Docker 的注册服务器；")]),v._v(" "),o("li",[o("code",[v._v("rename")]),v._v("：重命名一个容器；")]),v._v(" "),o("li",[o("code",[v._v("restart")]),v._v("：重启一个运行中的容器；")]),v._v(" "),o("li",[o("code",[v._v("rm")]),v._v("：删除给定的若干个容器；")]),v._v(" "),o("li",[o("code",[v._v("rmi")]),v._v("：删除给定的若干个镜像；")]),v._v(" "),o("li",[o("code",[v._v("run")]),v._v("：创建一个新容器，并在其中运行给定命令；")]),v._v(" "),o("li",[o("code",[v._v("save")]),v._v("：保存一个镜像为 tar 包文件；")]),v._v(" "),o("li",[o("code",[v._v("search")]),v._v("：在 Docker index 中搜索一个镜像；")]),v._v(" "),o("li",[o("code",[v._v("service")]),v._v("：管理 Docker 所启动的应用服务，包括创建、更新、删除等；")]),v._v(" "),o("li",[o("code",[v._v("start")]),v._v("：启动一个容器；")]),v._v(" "),o("li",[o("code",[v._v("stats")]),v._v("：输出（一个或多个）容器的资源使用统计信息；")]),v._v(" "),o("li",[o("code",[v._v("stop")]),v._v("：终止一个运行中的容器；")]),v._v(" "),o("li",[o("code",[v._v("swarm")]),v._v("：管理 Docker swarm 集群，包括创建、加入、退出、更新等；")]),v._v(" "),o("li",[o("code",[v._v("tag")]),v._v("：为一个镜像打标签；")]),v._v(" "),o("li",[o("code",[v._v("top")]),v._v("：查看一个容器中的正在运行的进程信息；")]),v._v(" "),o("li",[o("code",[v._v("unpause")]),v._v("：将一个容器内所有的进程从暂停状态中恢复；")]),v._v(" "),o("li",[o("code",[v._v("update")]),v._v("：更新指定的若干容器的配置信息；")]),v._v(" "),o("li",[o("code",[v._v("version")]),v._v("：输出 Docker 的版本信息；")]),v._v(" "),o("li",[o("code",[v._v("volume")]),v._v("：管理 Docker volume，包括查看、创建、删除等；")]),v._v(" "),o("li",[o("code",[v._v("wait")]),v._v("：阻塞直到一个容器终止，然后输出它的退出符。")])]),v._v(" "),o("h2",{attrs:{id:"一张图总结-docker-的命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一张图总结-docker-的命令"}},[v._v("#")]),v._v(" 一张图总结 Docker 的命令")]),v._v(" "),o("p",[o("img",{attrs:{src:e(439),alt:"Docker 命令总结"}})]),v._v(" "),o("h2",{attrs:{id:"参考"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/cli/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方文档"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=c.exports}}]);