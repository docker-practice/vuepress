(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{535:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"挂载主机目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载主机目录"}},[s._v("#")]),s._v(" 挂载主机目录")]),s._v(" "),t("AdSenseTitle"),s._v(" "),t("h2",{attrs:{id:"挂载一个主机目录作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个主机目录作为数据卷"}},[s._v("#")]),s._v(" 挂载一个主机目录作为数据卷")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("--mount")]),s._v(" 标记可以指定挂载一个本地主机的目录到容器中去。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -P "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name web "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /src/webapp:/usr/share/nginx/html \\")]),s._v("\n    --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/src/webapp,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/nginx/html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    nginx:alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面的命令加载主机的 "),t("code",[s._v("/src/webapp")]),s._v(" 目录到容器的 "),t("code",[s._v("/usr/share/nginx/html")]),s._v("目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，以前使用 "),t("code",[s._v("-v")]),s._v(" 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 "),t("code",[s._v("--mount")]),s._v(" 参数时如果本地目录不存在，Docker 会报错。")]),s._v(" "),t("p",[s._v("Docker 挂载主机目录的默认权限是 "),t("code",[s._v("读写")]),s._v("，用户也可以通过增加 "),t("code",[s._v("readonly")]),s._v(" 指定为 "),t("code",[s._v("只读")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -P "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name web "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /src/webapp:/usr/share/nginx/html:ro \\")]),s._v("\n    --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/src/webapp,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/nginx/html,readonly "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    nginx:alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("加了 "),t("code",[s._v("readonly")]),s._v(" 之后，就挂载为 "),t("code",[s._v("只读")]),s._v(" 了。如果你在容器内 "),t("code",[s._v("/usr/share/nginx/html")]),s._v(" 目录新建文件，会显示如下错误")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/usr/share/nginx/html "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch new.txt")]),s._v("\ntouch: new.txt: Read-only "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"查看数据卷的具体信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷的具体信息"}},[s._v("#")]),s._v(" 查看数据卷的具体信息")]),s._v(" "),t("p",[s._v("在主机里使用以下命令可以查看 "),t("code",[s._v("web")]),s._v(" 容器的信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect web\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("挂载主机目录")]),s._v(' 的配置信息在 "Mounts" Key 下面')]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mounts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bind"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/src/webapp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Destination"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/nginx/html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"RW"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Propagation"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rprivate"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"挂载一个本地主机文件作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个本地主机文件作为数据卷"}},[s._v("#")]),s._v(" 挂载一个本地主机文件作为数据卷")]),s._v(" "),t("p",[t("code",[s._v("--mount")]),s._v(" 标记也可以从主机挂载单个文件到容器中")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --rm -it "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v $HOME/.bash_history:/root/.bash_history \\")]),s._v("\n   --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.bash_history,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.bash_history "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   ubuntu:18.04 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nroot@2affd44b4667:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# history")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  diskutil list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这样就可以记录在容器输入过的命令了。")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);