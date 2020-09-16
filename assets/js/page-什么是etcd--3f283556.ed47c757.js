(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{532:function(e,t,r){"use strict";r.r(t);var o=r(3),_=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"什么是-etcd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-etcd"}},[e._v("#")]),e._v(" 什么是 etcd")]),e._v(" "),r("p",[r("img",{attrs:{src:"_images/etcd_logo.png",alt:""}})]),e._v(" "),r("p",[r("code",[e._v("etcd")]),e._v(" 是 "),r("code",[e._v("CoreOS")]),e._v(" 团队于 2013 年 6 月发起的开源项目，它的目标是构建一个高可用的分布式键值（"),r("code",[e._v("key-value")]),e._v("）数据库，基于 "),r("code",[e._v("Go")]),e._v(" 语言实现。我们知道，在分布式系统中，各种服务的配置信息的管理分享，服务的发现是一个很基本同时也是很重要的问题。"),r("code",[e._v("CoreOS")]),e._v(" 项目就希望基于 "),r("code",[e._v("etcd")]),e._v(" 来解决这一问题。")]),e._v(" "),r("p",[r("code",[e._v("etcd")]),e._v(" 目前在 "),r("a",{attrs:{href:"https://github.com/etcd-io/etcd",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/etcd-io/etcd"),r("OutboundLink")],1),e._v(" 进行维护。")]),e._v(" "),r("p",[e._v("受到 "),r("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),r("OutboundLink")],1),e._v(" 项目和 "),r("a",{attrs:{href:"https://github.com/ha/doozerd",target:"_blank",rel:"noopener noreferrer"}},[e._v("doozer"),r("OutboundLink")],1),e._v(" 项目的启发，"),r("code",[e._v("etcd")]),e._v(" 在设计的时候重点考虑了下面四个要素：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("简单：具有定义良好、面向用户的 "),r("code",[e._v("API")]),e._v(" ("),r("a",{attrs:{href:"https://github.com/grpc/grpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("li",[r("p",[e._v("安全：支持 "),r("code",[e._v("HTTPS")]),e._v(" 方式的访问")])]),e._v(" "),r("li",[r("p",[e._v("快速：支持并发 "),r("code",[e._v("10 k/s")]),e._v(" 的写操作")])]),e._v(" "),r("li",[r("p",[e._v("可靠：支持分布式结构，基于 "),r("code",[e._v("Raft")]),e._v(" 的一致性算法")])])]),e._v(" "),r("p",[r("em",[e._v("Apache ZooKeeper 是一套知名的分布式系统中进行同步和一致性管理的工具。")])]),e._v(" "),r("p",[r("em",[e._v("doozer 是一个一致性分布式数据库。")])]),e._v(" "),r("p",[r("em",[r("a",{attrs:{href:"https://raft.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raft"),r("OutboundLink")],1),e._v(" 是一套通过选举主节点来实现分布式系统一致性的算法，相比于大名鼎鼎的 Paxos 算法，它的过程更容易被人理解，由 Stanford 大学的 Diego Ongaro 和 John Ousterhout 提出。更多细节可以参考 "),r("a",{attrs:{href:"http://raftconsensus.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("raftconsensus.github.io"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("p",[e._v("一般情况下，用户使用 "),r("code",[e._v("etcd")]),e._v(" 可以在多个节点上启动多个实例，并添加它们为一个集群。同一个集群中的 "),r("code",[e._v("etcd")]),e._v(" 实例将会保持彼此信息的一致性。")])])}),[],!1,null,null,null);t.default=_.exports}}]);