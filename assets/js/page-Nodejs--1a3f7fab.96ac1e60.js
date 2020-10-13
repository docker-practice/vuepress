(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{451:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://hub.docker.com/_/node/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),t("OutboundLink")],1)]),s._v(" "),t("AdSenseTitle"),s._v(" "),t("h2",{attrs:{id:"基本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[s._v("#")]),s._v(" 基本信息")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Node.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),t("OutboundLink")],1),s._v(" 是基于 JavaScript 的可扩展服务端和网络软件开发平台。")]),s._v(" "),t("p",[s._v("该仓库位于 "),t("code",[s._v("https://hub.docker.com/_/node/")]),s._v(" ，提供了 Node.js 0.10 ~ 14.x 各个版本的镜像。")]),s._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("p",[s._v("在项目中创建一个 Dockerfile。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("FROM node:12\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace this with your application's default port")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后创建镜像，并启动容器。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker build -t my-nodejs-app\n$ docker run -it --rm --name my-running-app my-nodejs-app\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("也可以直接运行一个简单容器。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -it --rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name my-running-script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# -v "$(pwd)":/usr/src/myapp \\')]),s._v("\n    --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(",target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/src/myapp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -w /usr/src/myapp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    node:12-alpine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    node your-daemon-or-script.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),t("p",[s._v("请到 https://github.com/docker-library/docs/tree/master/node 查看。")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);