(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{530:function(e,s,a){"use strict";a.r(s);var t=a(3),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"workdir-指定工作目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指定工作目录"}},[e._v("#")]),e._v(" WORKDIR 指定工作目录")]),e._v(" "),a("AdSenseTitle"),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("WORKDIR <工作目录路径>")]),e._v("。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("WORKDIR")]),e._v(" 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，"),a("code",[e._v("WORKDIR")]),e._v(" 会帮你建立目录。")]),e._v(" "),a("p",[e._v("之前提到一些初学者常犯的错误是把 "),a("code",[e._v("Dockerfile")]),e._v(" 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：")]),e._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" cd /app\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" world.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果将这个 "),a("code",[e._v("Dockerfile")]),e._v(" 进行构建镜像运行后，会发现找不到 "),a("code",[e._v("/app/world.txt")]),e._v(" 文件，或者其内容不是 "),a("code",[e._v("hello")]),e._v("。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 "),a("code",[e._v("Dockerfile")]),e._v(" 中，这两行 "),a("code",[e._v("RUN")]),e._v(" 命令的执行环境根本不同，是两个完全不同的容器。这就是对 "),a("code",[e._v("Dockerfile")]),e._v(" 构建分层存储的概念不了解所导致的错误。")]),e._v(" "),a("p",[e._v("之前说过每一个 "),a("code",[e._v("RUN")]),e._v(" 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 "),a("code",[e._v("RUN cd /app")]),e._v(" 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。")]),e._v(" "),a("p",[e._v("因此如果需要改变以后各层的工作目录的位置，那么应该使用 "),a("code",[e._v("WORKDIR")]),e._v(" 指令。")]),e._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" /app\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" world.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("如果你的 "),a("code",[e._v("WORKDIR")]),e._v(" 指令使用的相对路径，那么所切换的路径与之前的 "),a("code",[e._v("WORKDIR")]),e._v(" 有关：")]),e._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" /a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" b\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" c\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" pwd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("code",[e._v("pwd")]),e._v(" 输出的结果为 "),a("code",[e._v("/a/b/c")]),e._v("。")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);