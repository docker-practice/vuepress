(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{311:function(e,t,v){"use strict";v.r(t);var _=v(0),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"workdir-指定工作目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指定工作目录"}},[e._v("#")]),e._v(" WORKDIR 指定工作目录")]),e._v(" "),v("p",[e._v("格式为 "),v("code",[e._v("WORKDIR <工作目录路径>")]),e._v("。")]),e._v(" "),v("p",[e._v("使用 "),v("code",[e._v("WORKDIR")]),e._v(" 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，"),v("code",[e._v("WORKDIR")]),e._v(" 会帮你建立目录。")]),e._v(" "),v("p",[e._v("之前提到一些初学者常犯的错误是把 "),v("code",[e._v("Dockerfile")]),e._v(" 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：")]),e._v(" "),v("div",{staticClass:"language-docker extra-class"},[v("pre",{pre:!0,attrs:{class:"language-docker"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" cd /app\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),v("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello"')]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" world.txt\n")])])]),v("p",[e._v("如果将这个 "),v("code",[e._v("Dockerfile")]),e._v(" 进行构建镜像运行后，会发现找不到 "),v("code",[e._v("/app/world.txt")]),e._v(" 文件，或者其内容不是 "),v("code",[e._v("hello")]),e._v("。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 "),v("code",[e._v("Dockerfile")]),e._v(" 中，这两行 "),v("code",[e._v("RUN")]),e._v(" 命令的执行环境根本不同，是两个完全不同的容器。这就是对 "),v("code",[e._v("Dockerfile")]),e._v(" 构建分层存储的概念不了解所导致的错误。")]),e._v(" "),v("p",[e._v("之前说过每一个 "),v("code",[e._v("RUN")]),e._v(" 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 "),v("code",[e._v("RUN cd /app")]),e._v(" 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。")]),e._v(" "),v("p",[e._v("因此如果需要改变以后各层的工作目录的位置，那么应该使用 "),v("code",[e._v("WORKDIR")]),e._v(" 指令。")])])}),[],!1,null,null,null);t.default=o.exports}}]);