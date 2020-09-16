(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{488:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"drone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drone"}},[t._v("#")]),t._v(" Drone")]),t._v(" "),s("p",[t._v("基于 "),s("code",[t._v("Docker")]),t._v(" 的 "),s("code",[t._v("CI/CD")]),t._v(" 工具 "),s("code",[t._v("Drone")]),t._v(" 所有编译、测试的流程都在 "),s("code",[t._v("Docker")]),t._v(" 容器中进行。")]),t._v(" "),s("p",[t._v("开发者只需在项目中包含 "),s("code",[t._v(".drone.yml")]),t._v(" 文件，将代码推送到 git 仓库，"),s("code",[t._v("Drone")]),t._v(" 就能够自动化的进行编译、测试、发布。")]),t._v(" "),s("p",[t._v("本小节以 "),s("code",[t._v("GitHub")]),t._v(" + "),s("code",[t._v("Drone")]),t._v(" 来演示 "),s("code",[t._v("Drone")]),t._v(" 的工作流程。当然在实际开发过程中，你的代码也许不在 GitHub 托管，那么你可以尝试使用 "),s("code",[t._v("Gogs")]),t._v(" + "),s("code",[t._v("Drone")]),t._v(" 来进行 "),s("code",[t._v("CI/CD")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"drone-关联项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drone-关联项目"}},[t._v("#")]),t._v(" Drone 关联项目")]),t._v(" "),s("p",[t._v("在 Github 新建一个名为 "),s("code",[t._v("drone-demo")]),t._v(" 的仓库。")]),t._v(" "),s("p",[t._v("打开我们已经 "),s("RouterLink",{attrs:{to:"/cases/ci/drone/install.html"}},[t._v("部署好的 Drone 网站")]),t._v(" 或者 "),s("a",{attrs:{href:"https://cloud.drone.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone Cloud"),s("OutboundLink")],1),t._v("，使用 GitHub 账号登录，在界面中关联刚刚新建的 "),s("code",[t._v("drone-demo")]),t._v(" 仓库。")],1),t._v(" "),s("h2",{attrs:{id:"编写项目源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写项目源代码"}},[t._v("#")]),t._v(" 编写项目源代码")]),t._v(" "),s("p",[t._v("初始化一个 git 仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" drone-demo\n\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" drone-demo\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:username/drone-demo.git\n")])])]),s("p",[t._v("这里以一个简单的 "),s("code",[t._v("Go")]),t._v(" 程序为例，该程序输出 "),s("code",[t._v("Hello World!")])]),t._v(" "),s("p",[t._v("编写 "),s("code",[t._v("app.go")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("编写 "),s("code",[t._v(".drone.yml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pipeline\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" golang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("alpine\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("not"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exists "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# always never")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VALUE\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" echo $KEY\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pwd\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ls\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" CGO_ENABLED=0 GOOS=linux go build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("installsuffix cgo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o app .\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./app\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])]),s("p",[t._v("现在目录结构如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── .drone.yml\n└── app.go\n")])])]),s("h2",{attrs:{id:"推送项目源代码到-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送项目源代码到-github"}},[t._v("#")]),t._v(" 推送项目源代码到 GitHub")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test drone ci"')]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("h2",{attrs:{id:"查看项目构建过程及结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看项目构建过程及结果"}},[t._v("#")]),t._v(" 查看项目构建过程及结果")]),t._v(" "),s("p",[t._v("打开我们部署好的 "),s("code",[t._v("Drone")]),t._v(" 网站或者 Drone Cloud，即可看到构建结果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"_images/drone-build.png",alt:""}})]),t._v(" "),s("p",[t._v("当然我们也可以把构建结果上传到 GitHub，Docker Registry，云服务商提供的对象存储，或者生产环境中。")]),t._v(" "),s("p",[t._v("本书 GitBook 也使用 Drone 进行 CI/CD，具体配置信息请查看本书根目录 "),s("a",{attrs:{href:"https://github.com/yeasy/docker_practice/blob/master/.drone.yml",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v(".drone.yml")]),s("OutboundLink")],1),t._v(" 文件。")]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/drone/drone",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone Github"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone 文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/docker-practice/drone-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone 示例"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);