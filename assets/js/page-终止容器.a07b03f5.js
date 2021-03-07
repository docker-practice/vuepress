(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{561:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"终止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#终止容器"}},[t._v("#")]),t._v(" 终止容器")]),t._v(" "),e("AdSenseTitle"),t._v(" "),e("p",[t._v("可以使用 "),e("code",[t._v("docker container stop")]),t._v(" 来终止一个运行中的容器。")]),t._v(" "),e("p",[t._v("此外，当 Docker 容器中指定的应用终结时，容器也自动终止。")]),t._v(" "),e("p",[t._v("例如对于上一章节中只启动了一个终端的容器，用户通过 "),e("code",[t._v("exit")]),t._v(" 命令或 "),e("code",[t._v("Ctrl+d")]),t._v(" 来退出终端时，所创建的容器立刻终止。")]),t._v(" "),e("p",[t._v("终止状态的容器可以用 "),e("code",[t._v("docker container ls -a")]),t._v(" 命令看到。例如")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker container "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -a\nCONTAINER ID        IMAGE                    COMMAND                CREATED             STATUS                          PORTS               NAMES\nba267838cc1b        ubuntu:18.04             "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/bash"')]),t._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" minutes ago      Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" About a minute ago                       trusting_newton\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("处于终止状态的容器，可以通过 "),e("code",[t._v("docker container start")]),t._v(" 命令来重新启动。")]),t._v(" "),e("p",[t._v("此外，"),e("code",[t._v("docker container restart")]),t._v(" 命令会将一个运行态的容器终止，然后再重新启动它。")])],1)}),[],!1,null,null,null);s.default=a.exports}}]);