(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{581:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"arg-构建参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arg-构建参数"}},[s._v("#")]),s._v(" ARG 构建参数")]),s._v(" "),n("AdSenseTitle"),s._v(" "),n("p",[s._v("格式："),n("code",[s._v("ARG <参数名>[=<默认值>]")])]),s._v(" "),n("p",[s._v("构建参数和 "),n("code",[s._v("ENV")]),s._v(" 的效果一样，都是设置环境变量。所不同的是，"),n("code",[s._v("ARG")]),s._v(" 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 "),n("code",[s._v("ARG")]),s._v(" 保存密码之类的信息，因为 "),n("code",[s._v("docker history")]),s._v(" 还是可以看到所有值的。")]),s._v(" "),n("p",[n("code",[s._v("Dockerfile")]),s._v(" 中的 "),n("code",[s._v("ARG")]),s._v(" 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令 "),n("code",[s._v("docker build")]),s._v(" 中用 "),n("code",[s._v("--build-arg <参数名>=<值>")]),s._v(" 来覆盖。")]),s._v(" "),n("p",[s._v("灵活的使用 "),n("code",[s._v("ARG")]),s._v(" 指令，能够在不修改 Dockerfile 的情况下，构建出不同的镜像。")]),s._v(" "),n("p",[s._v("ARG 指令有生效范围，如果在 "),n("code",[s._v("FROM")]),s._v(" 指令之前指定，那么只能用于 "),n("code",[s._v("FROM")]),s._v(" 指令中。")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("使用上述 Dockerfile 会发现无法输出 "),n("code",[s._v("${DOCKER_USERNAME}")]),s._v(" 变量的值，要想正常输出，你必须在 "),n("code",[s._v("FROM")]),s._v(" 之后再次指定 "),n("code",[s._v("ARG")])]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只在 FROM 中生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要想在 FROM 之后使用，必须再次指定")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("对于多阶段构建，尤其要注意这个问题")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个变量在每个 FROM 中都生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo 1\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("对于上述 Dockerfile 两个 "),n("code",[s._v("FROM")]),s._v(" 指令都可以使用 "),n("code",[s._v("${DOCKER_USERNAME}")]),s._v("，对于在各个阶段中使用的变量都必须在每个阶段分别指定：")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在FROM 之后使用变量，必须在每个阶段分别指定")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/alpine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在FROM 之后使用变量，必须在每个阶段分别指定")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" DOCKER_USERNAME=library\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x ; echo $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_USERNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);