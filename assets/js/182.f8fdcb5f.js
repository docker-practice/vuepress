(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{380:function(e,v,_){"use strict";_.r(v);var r=_(28),a=Object(r.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),_("p",[_("code",[e._v("Swarm")]),e._v(" 是使用 "),_("a",{attrs:{href:"https://github.com/docker/swarmkit/",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("SwarmKit")]),_("OutboundLink")],1),e._v(" 构建的 Docker 引擎内置（原生）的集群管理和编排工具。")]),e._v(" "),_("p",[e._v("使用 "),_("code",[e._v("Swarm")]),e._v(" 集群之前需要了解以下几个概念。")]),e._v(" "),_("h2",{attrs:{id:"节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[e._v("#")]),e._v(" 节点")]),e._v(" "),_("p",[e._v("运行 Docker 的主机可以主动初始化一个 "),_("code",[e._v("Swarm")]),e._v(" 集群或者加入一个已存在的 "),_("code",[e._v("Swarm")]),e._v(" 集群，这样这个运行 Docker 的主机就成为一个 "),_("code",[e._v("Swarm")]),e._v(" 集群的节点 ("),_("code",[e._v("node")]),e._v(") 。")]),e._v(" "),_("p",[e._v("节点分为管理 ("),_("code",[e._v("manager")]),e._v(") 节点和工作 ("),_("code",[e._v("worker")]),e._v(") 节点。")]),e._v(" "),_("p",[e._v("管理节点用于 "),_("code",[e._v("Swarm")]),e._v(" 集群的管理，"),_("code",[e._v("docker swarm")]),e._v(" 命令基本只能在管理节点执行（节点退出集群命令 "),_("code",[e._v("docker swarm leave")]),e._v(" 可以在工作节点执行）。一个 "),_("code",[e._v("Swarm")]),e._v(" 集群可以有多个管理节点，但只有一个管理节点可以成为 "),_("code",[e._v("leader")]),e._v("，"),_("code",[e._v("leader")]),e._v(" 通过 "),_("code",[e._v("raft")]),e._v(" 协议实现。")]),e._v(" "),_("p",[e._v("工作节点是任务执行节点，管理节点将服务 ("),_("code",[e._v("service")]),e._v(") 下发至工作节点执行。管理节点默认也作为工作节点。你也可以通过配置让服务只运行在管理节点。")]),e._v(" "),_("p",[e._v("来自 Docker 官网的这张图片形象的展示了集群中管理节点与工作节点的关系。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://docs.docker.com/engine/swarm/images/swarm-diagram.png",alt:""}})]),e._v(" "),_("h2",{attrs:{id:"服务和任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务和任务"}},[e._v("#")]),e._v(" 服务和任务")]),e._v(" "),_("p",[e._v("任务 （"),_("code",[e._v("Task")]),e._v("）是 "),_("code",[e._v("Swarm")]),e._v(" 中的最小的调度单位，目前来说就是一个单一的容器。")]),e._v(" "),_("p",[e._v("服务 （"),_("code",[e._v("Services")]),e._v("） 是指一组任务的集合，服务定义了任务的属性。服务有两种模式：")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("replicated services")]),e._v(" 按照一定规则在各个工作节点上运行指定个数的任务。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("global services")]),e._v(" 每个工作节点上运行一个任务")])])]),e._v(" "),_("p",[e._v("两种模式通过 "),_("code",[e._v("docker service create")]),e._v(" 的 "),_("code",[e._v("--mode")]),e._v(" 参数指定。")]),e._v(" "),_("p",[e._v("来自 Docker 官网的这张图片形象的展示了容器、任务、服务的关系。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://docs.docker.com/engine/swarm/images/services-diagram.png",alt:""}})])])}),[],!1,null,null,null);v.default=a.exports}}]);