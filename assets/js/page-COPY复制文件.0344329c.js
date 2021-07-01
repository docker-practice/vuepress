(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{555:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"copy-复制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-复制文件"}},[s._v("#")]),s._v(" COPY 复制文件")]),s._v(" "),a("AdSenseTitle"),s._v(" "),a("p",[s._v("格式：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("COPY [--chown=<user>:<group>] <源路径>... <目标路径>")])]),s._v(" "),a("li",[a("code",[s._v('COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]')])])]),s._v(" "),a("p",[s._v("和 "),a("code",[s._v("RUN")]),s._v(" 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。")]),s._v(" "),a("p",[a("code",[s._v("COPY")]),s._v(" 指令将从构建上下文目录中 "),a("code",[s._v("<源路径>")]),s._v(" 的文件/目录复制到新的一层的镜像内的 "),a("code",[s._v("<目标路径>")]),s._v(" 位置。比如：")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" package.json /usr/src/app/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("<源路径>")]),s._v(" 可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 "),a("a",{attrs:{href:"https://golang.org/pkg/path/filepath/#Match",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("filepath.Match")]),a("OutboundLink")],1),s._v(" 规则，如：")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hom* /mydir/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hom?.txt /mydir/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("<目标路径>")]),s._v(" 可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用 "),a("code",[s._v("WORKDIR")]),s._v(" 指令来指定）。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。")]),s._v(" "),a("p",[s._v("此外，还需要注意一点，使用 "),a("code",[s._v("COPY")]),s._v(" 指令，源文件的各种元数据都会保留。比如读、写、执行权限、文件变更时间等。这个特性对于镜像定制很有用。特别是构建相关文件都在使用 Git 进行管理的时候。")]),s._v(" "),a("p",[s._v("在使用该指令的时候还可以加上 "),a("code",[s._v("--chown=<user>:<group>")]),s._v(" 选项来改变文件的所属用户及所属组。")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--chown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("55:mygroup")])]),s._v(" files* /mydir/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--chown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("bin")])]),s._v(" files* /mydir/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--chown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("1")])]),s._v(" files* /mydir/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--chown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("10:11")])]),s._v(" files* /mydir/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果源路径为文件夹，复制的时候不是直接复制该文件夹，而是将文件夹中的内容复制到目标路径。")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);