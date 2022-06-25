(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{527:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"导出和导入容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出和导入容器"}},[s._v("#")]),s._v(" 导出和导入容器")]),s._v(" "),t("AdSenseTitle"),s._v(" "),t("h2",{attrs:{id:"导出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出容器"}},[s._v("#")]),s._v(" 导出容器")]),s._v(" "),t("p",[s._v("如果要导出本地某个容器，可以使用 "),t("code",[s._v("docker export")]),s._v(" 命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                    PORTS               NAMES\n7691a814370e        ubuntu:18.04        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" hours ago        Exited "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" hours ago                       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 7691a814370e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ubuntu.tar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这样将导出容器快照到本地文件。")]),s._v(" "),t("h2",{attrs:{id:"导入容器快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入容器快照"}},[s._v("#")]),s._v(" 导入容器快照")]),s._v(" "),t("p",[s._v("可以使用 "),t("code",[s._v("docker import")]),s._v(" 从容器快照文件中再导入为镜像，例如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ubuntu.tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/ubuntu:v1.0\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY          TAG                 IMAGE ID            CREATED              VIRTUAL SIZE\ntest/ubuntu         v1.0                9d37a6082e97        About a minute ago   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("171.3")]),s._v(" MB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("此外，也可以通过指定 URL 或者某个目录来导入，例如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" http://example.com/exampleimage.tgz example/imagerepo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("em",[s._v("注：用户既可以使用 "),t("code",[s._v("docker load")]),s._v(" 来导入镜像存储文件到本地镜像库，也可以使用 "),t("code",[s._v("docker import")]),s._v(" 来导入一个容器快照到本地镜像库。这两者的区别在于容器快照文件将丢弃所有的历史记录和元数据信息（即仅保存容器当时的快照状态），而镜像存储文件将保存完整记录，体积也要大。此外，从容器快照文件导入时可以重新指定标签等元数据信息。")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);