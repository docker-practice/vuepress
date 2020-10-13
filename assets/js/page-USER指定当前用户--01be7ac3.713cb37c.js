(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{613:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"user-指定当前用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-指定当前用户"}},[s._v("#")]),s._v(" USER 指定当前用户")]),s._v(" "),a("AdSenseTitle"),s._v(" "),a("p",[s._v("格式："),a("code",[s._v("USER <用户名>[:<用户组>]")])]),s._v(" "),a("p",[a("code",[s._v("USER")]),s._v(" 指令和 "),a("code",[s._v("WORKDIR")]),s._v(" 相似，都是改变环境状态并影响以后的层。"),a("code",[s._v("WORKDIR")]),s._v(" 是改变工作目录，"),a("code",[s._v("USER")]),s._v(" 则是改变之后层的执行 "),a("code",[s._v("RUN")]),s._v(", "),a("code",[s._v("CMD")]),s._v(" 以及 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 这类命令的身份。")]),s._v(" "),a("p",[s._v("当然，和 "),a("code",[s._v("WORKDIR")]),s._v(" 一样，"),a("code",[s._v("USER")]),s._v(" 只是帮助你切换到指定用户而已，这个用户必须是事先建立好的，否则无法切换。")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" groupadd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r redis && useradd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("g redis redis\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-server"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果以 "),a("code",[s._v("root")]),s._v(" 执行的脚本，在执行期间希望改变身份，比如希望以某个已经建立好的用户来运行某个服务进程，不要使用 "),a("code",[s._v("su")]),s._v(" 或者 "),a("code",[s._v("sudo")]),s._v("，这些都需要比较麻烦的配置，而且在 TTY 缺失的环境下经常出错。建议使用 "),a("a",{attrs:{href:"https://github.com/tianon/gosu",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("gosu")]),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立 redis 用户，并使用 gosu 换另一个用户执行命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" groupadd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r redis && useradd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("g redis redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载 gosu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("O /usr/local/bin/gosu "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/tianon/gosu/releases/download/1.12/gosu-amd64"')]),s._v(" \\\n    && chmod +x /usr/local/bin/gosu \\\n    && gosu nobody true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 CMD，并以另外的用户执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gosu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-server"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);