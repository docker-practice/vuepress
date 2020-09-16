(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{540:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"arg-构建参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg-构建参数"}},[t._v("#")]),t._v(" ARG 构建参数")]),t._v(" "),a("p",[t._v("格式："),a("code",[t._v("ARG <参数名>[=<默认值>]")])]),t._v(" "),a("p",[t._v("构建参数和 "),a("code",[t._v("ENV")]),t._v(" 的效果一样，都是设置环境变量。所不同的是，"),a("code",[t._v("ARG")]),t._v(" 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 "),a("code",[t._v("ARG")]),t._v(" 保存密码之类的信息，因为 "),a("code",[t._v("docker history")]),t._v(" 还是可以看到所有值的。")]),t._v(" "),a("p",[a("code",[t._v("Dockerfile")]),t._v(" 中的 "),a("code",[t._v("ARG")]),t._v(" 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令 "),a("code",[t._v("docker build")]),t._v(" 中用 "),a("code",[t._v("--build-arg <参数名>=<值>")]),t._v(" 来覆盖。")]),t._v(" "),a("p",[t._v("在 1.13 之前的版本，要求 "),a("code",[t._v("--build-arg")]),t._v(" 中的参数名，必须在 "),a("code",[t._v("Dockerfile")]),t._v(" 中用 "),a("code",[t._v("ARG")]),t._v(" 定义过了，换句话说，就是 "),a("code",[t._v("--build-arg")]),t._v(" 指定的参数，必须在 "),a("code",[t._v("Dockerfile")]),t._v(" 中使用了。如果对应参数没有被使用，则会报错退出构建。从 1.13 开始，这种严格的限制被放开，不再报错退出，而是显示警告信息，并继续构建。这对于使用 CI 系统，用同样的构建流程构建不同的 "),a("code",[t._v("Dockerfile")]),t._v(" 的时候比较有帮助，避免构建命令必须根据每个 Dockerfile 的内容修改。")]),t._v(" "),a("p",[t._v("ARG 指令有生效范围，如果在 "),a("code",[t._v("FROM")]),t._v(" 指令之前指定，那么只能用于 "),a("code",[t._v("FROM")]),t._v(" 指令中。")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用上述 Dockerfile 会发现无法输出 "),a("code",[t._v("${DOCKER_USERNAME}")]),t._v(" 变量的值，要想正常输出，你必须在 "),a("code",[t._v("FROM")]),t._v(" 之后再次指定 "),a("code",[t._v("ARG")])]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只在 FROM 中生效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要想在 FROM 之后使用，必须再次指定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于多阶段构建，尤其要注意这个问题")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个变量在每个 FROM 中都生效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo 1\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo 2\n")])])]),a("p",[t._v("对于上述 Dockerfile 两个 "),a("code",[t._v("FROM")]),t._v(" 指令都可以使用 "),a("code",[t._v("${DOCKER_USERNAME}")]),t._v("，对于在各个阶段中使用的变量都必须在每个阶段分别指定：")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在FROM 之后使用变量，必须在每个阶段分别指定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alpine\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在FROM 之后使用变量，必须在每个阶段分别指定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" DOCKER_USERNAME=library\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x ; echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);