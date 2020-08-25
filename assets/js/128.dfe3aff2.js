(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{472:function(s,a,t){"use strict";t.r(a);var r=t(42),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"离线部署docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线部署docker"}},[s._v("#")]),s._v(" 离线部署Docker")]),s._v(" "),t("p",[s._v("[TOC]")]),s._v(" "),t("p",[s._v("生产环境中一般都是没有公网资源的，本文介绍如何在生产服务器上离线部署"),t("code",[s._v("Docker")])]),s._v(" "),t("p",[s._v("括号内的字母表示该操作需要在哪些服务器上执行")]),s._v(" "),t("img",{staticStyle:{zoom:"30%"},attrs:{src:"_images/image-20200412202617411.png",alt:"Docker-offile-install-top"}}),s._v(" "),t("h2",{attrs:{id:"centos7-离线安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-离线安装docker"}},[s._v("#")]),s._v(" Centos7 离线安装Docker")]),s._v(" "),t("h3",{attrs:{id:"yum本地文件安装-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum本地文件安装-推荐"}},[s._v("#")]),s._v(" YUM本地文件安装（推荐）")]),s._v(" "),t("p",[s._v("推荐这种方式，是因为在生产环境种一般会选定某个指定的文档软件版本使用。")]),s._v(" "),t("h4",{attrs:{id:"查询可用的软件版本-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询可用的软件版本-a"}},[s._v("#")]),s._v(" 查询可用的软件版本(A)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载清华的镜像源文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/docker-ce.repo https://download.docker.com/linux/centos/docker-ce.repo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s+download.docker.com+mirrors.tuna.tsinghua.edu.cn/docker-ce+'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n\nyum update\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum list docker-ce --showduplicates"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\nLoading mirror speeds from cached hostfile\nLoaded plugins: fastestmirror\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.8-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.7-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.6-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.5-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.4-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.3-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.2-3.el7                     docker-ce-stable\ndocker-ce.x86_64            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.1-3.el7                     docker-ce-stable\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("h4",{attrs:{id:"下载到指定文件夹-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载到指定文件夹-a"}},[s._v("#")]),s._v(" 下载到指定文件夹(A)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --downloadonly --downloaddir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/docker-19.03 docker-ce-19.03.8-3.el7 docker-ce-cli-19.03.8-3.el7 \n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Dependencies Resolved\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n Package                                          Arch                                  Version                                         Repository                             Size\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nInstalling:\n docker-ce                                        x86_64                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":19.03.8-3.el7                                 docker                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" M\nInstalling "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" dependencies:\n container-selinux                                noarch                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":2.107-3.el7                                   extras                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" k\n containerd.io                                    x86_64                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".13-3.1.el7                                  docker                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" M\n docker-ce-cli                                    x86_64                                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":19.03.8-3.el7                                 docker                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" M\n\nTransaction Summary\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nInstall  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Package "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+3 Dependent packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nTotal download size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v(" M\nInstalled size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("363")]),s._v(" M\nBackground downloading packages, "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" exiting:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": container-selinux-2.107-3.el7.noarch.rpm                                                                                                              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" kB  00:00:00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": containerd.io-1.2.13-3.1.el7.x86_64.rpm                                                                                                               "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" MB  00:00:00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": docker-ce-19.03.8-3.el7.x86_64.rpm                                                                                                                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" MB  00:00:00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": docker-ce-cli-19.03.8-3.el7.x86_64.rpm                                                                                                                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" MB  00:00:00\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\nTotal                                                                                                                                               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("118")]),s._v(" MB/s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v(" MB  00:00:00\nexiting because "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Download Only"')]),s._v(" specified\n")])])]),t("h4",{attrs:{id:"复制到目标服务器之后进入文件夹安装-c-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制到目标服务器之后进入文件夹安装-c-n"}},[s._v("#")]),s._v(" 复制到目标服务器之后进入文件夹安装(C-N)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" *.rpm\n")])])]),t("h4",{attrs:{id:"锁定软件版本-c-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁定软件版本-c-n"}},[s._v("#")]),s._v(" 锁定软件版本(C-N)")]),s._v(" "),t("h5",{attrs:{id:"下载锁定版本软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载锁定版本软件"}},[s._v("#")]),s._v(" 下载锁定版本软件")]),s._v(" "),t("p",[s._v("可参考下文的网络源搭建")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-plugin-versionlock\n")])])]),t("h5",{attrs:{id:"锁定软件版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁定软件版本"}},[s._v("#")]),s._v(" 锁定软件版本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum versionlock "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" docker\n")])])]),t("h5",{attrs:{id:"查看锁定列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看锁定列表"}},[s._v("#")]),s._v(" 查看锁定列表")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum versionlock list\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Loaded plugins: fastestmirror, versionlock\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":docker-ce-18.09.9-3.el7.*\nversionlock list "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("h5",{attrs:{id:"锁定后无法再更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁定后无法再更新"}},[s._v("#")]),s._v(" 锁定后无法再更新")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\nLoaded plugins: fastestmirror, versionlock\nLoading mirror speeds from cached hostfile\nExcluding "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" update due to versionlock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yum versionlock status"')]),s._v(" to show it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPackage "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":docker-ce-18.09.9-3.el7.x86_64 already installed and latest version\nNothing to "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n")])])]),t("h5",{attrs:{id:"解锁指定软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁指定软件"}},[s._v("#")]),s._v(" 解锁指定软件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum versionlock delete docker-ce\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Loaded plugins: fastestmirror, versionlock\nDeleting versionlock for: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":docker-ce-18.09.9-3.el7.*\nversionlock deleted: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("h5",{attrs:{id:"解锁所有软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁所有软件"}},[s._v("#")]),s._v(" 解锁所有软件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum versionlock delete all\n")])])]),t("h3",{attrs:{id:"yum-本地源服务器搭建安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-本地源服务器搭建安装docker"}},[s._v("#")]),s._v(" YUM 本地源服务器搭建安装Docker")]),s._v(" "),t("h4",{attrs:{id:"挂载-iso-镜像搭建本地-file-源-ab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载-iso-镜像搭建本地-file-源-ab"}},[s._v("#")]),s._v(" 挂载 ISO 镜像搭建本地 File 源（AB）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除其他网络源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f /etc/yum.repo.d/*\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载光盘或者iso镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/cdrom /mnt\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加本地源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/yum.repos.d/local_files.repo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Local_Files]\nname=Local_Files\nbaseurl=file:///mnt\nenable=1\ngpgcheck=0\ngpgkey=file:///mnt/RPM-GPG-KEY-CentOS-7\nEOF")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试刚才的本地源,安装createrepo软件")]),s._v("\nyum clean all \nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" createrepo -y\n")])])]),t("h4",{attrs:{id:"根据本地文件搭建base网络源-b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据本地文件搭建base网络源-b"}},[s._v("#")]),s._v(" 根据本地文件搭建BASE网络源（B）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装apache 服务器")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载光盘")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/cdrom /mnt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建centos目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www/html/base\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制光盘内的文件到刚才新建的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R /mnt/Packages/* /var/www/html/base/\ncreaterepo  /var/www/html/centos/\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd\nsystemctl start httpd\n")])])]),t("h4",{attrs:{id:"下载docker-ce-镜像仓库-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载docker-ce-镜像仓库-a"}},[s._v("#")]),s._v(" 下载Docker-CE 镜像仓库（A）")]),s._v(" "),t("p",[s._v("在有网络的服务器上下载Docker-ce镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载清华的镜像源文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/docker-ce.repo https://download.docker.com/linux/centos/docker-ce.repo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s+download.docker.com+mirrors.tuna.tsinghua.edu.cn/docker-ce+'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建 docker-ce目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /tmp/docker-ce/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把镜像源同步到镜像文件中")]),s._v("\nreposync -r docker-ce-stable -p /tmp/docker-ce/\n")])])]),t("h4",{attrs:{id:"创建仓库索引-b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库索引-b"}},[s._v("#")]),s._v(" 创建仓库索引（B）")]),s._v(" "),t("p",[s._v("把下载的 docker-ce 文件夹复制到离线的服务器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把docker-ce 文件夹复制到/var/www/html/docker-ce")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重建索引")]),s._v("\ncreaterepo  /var/www/html/docker-ce/\n")])])]),t("h4",{attrs:{id:"yum-客户端设置-c-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-客户端设置-c-n"}},[s._v("#")]),s._v(" YUM 客户端设置（C...N）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f /etc/yum.repo.d/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/yum.repos.d/local_files.repo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[local_base]\nname=local_base\n# 改成B服务器地址\nbaseurl=http://x.x.x.x/base\nenable=1\ngpgcheck=0\nproxy=_none_\n[docker_ce]\nname=docker_ce\n# 改成B服务器地址\nbaseurl=http://x.x.x.x/base\nenable=1\ngpgcheck=0\nproxy=_none_\nEOF")]),s._v("\n\n")])])]),t("h4",{attrs:{id:"docker-安装-c-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-c-n"}},[s._v("#")]),s._v(" Docker 安装（C...N）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache fast\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);