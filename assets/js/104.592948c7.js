(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{451:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"entrypoint-入口点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-入口点"}},[s._v("#")]),s._v(" ENTRYPOINT 入口点")]),s._v(" "),a("p",[a("code",[s._v("ENTRYPOINT")]),s._v(" 的格式和 "),a("code",[s._v("RUN")]),s._v(" 指令格式一样，分为 "),a("code",[s._v("exec")]),s._v(" 格式和 "),a("code",[s._v("shell")]),s._v(" 格式。")]),s._v(" "),a("p",[a("code",[s._v("ENTRYPOINT")]),s._v(" 的目的和 "),a("code",[s._v("CMD")]),s._v(" 一样，都是在指定容器启动程序及参数。"),a("code",[s._v("ENTRYPOINT")]),s._v(" 在运行时也可以替代，不过比 "),a("code",[s._v("CMD")]),s._v(" 要略显繁琐，需要通过 "),a("code",[s._v("docker run")]),s._v(" 的参数 "),a("code",[s._v("--entrypoint")]),s._v(" 来指定。")]),s._v(" "),a("p",[s._v("当指定了 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 后，"),a("code",[s._v("CMD")]),s._v(" 的含义就发生了改变，不再是直接的运行其命令，而是将 "),a("code",[s._v("CMD")]),s._v(" 的内容作为参数传给 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 指令，换句话说实际执行时，将变为：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ENTRYPOINT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<CMD>"')]),s._v("\n")])])]),a("p",[s._v("那么有了 "),a("code",[s._v("CMD")]),s._v(" 后，为什么还要有 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 呢？这种 "),a("code",[s._v('<ENTRYPOINT> "<CMD>"')]),s._v(" 有什么好处么？让我们来看几个场景。")]),s._v(" "),a("h4",{attrs:{id:"场景一-让镜像变成像命令一样使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景一-让镜像变成像命令一样使用"}},[s._v("#")]),s._v(" 场景一：让镜像变成像命令一样使用")]),s._v(" "),a("p",[s._v("假设我们需要一个得知自己当前公网 IP 的镜像，那么可以先用 "),a("code",[s._v("CMD")]),s._v(" 来实现：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("18.04\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update \\\n    && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y curl \\\n    && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /var/lib/apt/lists/*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://ip.cn"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("假如我们使用 "),a("code",[s._v("docker build -t myip .")]),s._v(" 来构建镜像的话，如果我们需要查询当前公网 IP，只需要执行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run myip\n当前 IP：61.148.226.66 来自：北京市 联通\n")])])]),a("p",[s._v("嗯，这么看起来好像可以直接把镜像当做命令使用了，不过命令总有参数，如果我们希望加参数呢？比如从上面的 "),a("code",[s._v("CMD")]),s._v(" 中可以看到实质的命令是 "),a("code",[s._v("curl")]),s._v("，那么如果我们希望显示 HTTP 头信息，就需要加上 "),a("code",[s._v("-i")]),s._v(" 参数。那么我们可以直接加 "),a("code",[s._v("-i")]),s._v(" 参数给 "),a("code",[s._v("docker run myip")]),s._v(" 么？")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run myip -i\ndocker: Error response from daemon: invalid header field value "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oci runtime error: container_linux.go:247: starting container process caused '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("exec: "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("-i"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(": executable file not found in "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("我们可以看到可执行文件找不到的报错，"),a("code",[s._v("executable file not found")]),s._v("。之前我们说过，跟在镜像名后面的是 "),a("code",[s._v("command")]),s._v("，运行时会替换 "),a("code",[s._v("CMD")]),s._v(" 的默认值。因此这里的 "),a("code",[s._v("-i")]),s._v(" 替换了原来的 "),a("code",[s._v("CMD")]),s._v("，而不是添加在原来的 "),a("code",[s._v("curl -s http://ip.cn")]),s._v(" 后面。而 "),a("code",[s._v("-i")]),s._v(" 根本不是命令，所以自然找不到。")]),s._v(" "),a("p",[s._v("那么如果我们希望加入 "),a("code",[s._v("-i")]),s._v(" 这参数，我们就必须重新完整的输入这个命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run myip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s http://ip.cn -i\n")])])]),a("p",[s._v("这显然不是很好的解决方案，而使用 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 就可以解决这个问题。现在我们重新用 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 来实现这个镜像：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("18.04\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update \\\n    && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y curl \\\n    && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /var/lib/apt/lists/*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://ip.cn"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("这次我们再来尝试直接使用 "),a("code",[s._v("docker run myip -i")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run myip\n当前 IP：61.148.226.66 来自：北京市 联通\n\n$ docker run myip -i\nHTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\nServer: nginx/1.8.0\nDate: Tue, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v(" 05:12:40 GMT\nContent-Type: text/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF-8\nVary: Accept-Encoding\nX-Powered-By: PHP/5.6.24-1~dotdeb+7.1\nX-Cache: MISS from cache-2\nX-Cache-Lookup: MISS from cache-2:80\nX-Cache: MISS from proxy-2_6\nTransfer-Encoding: chunked\nVia: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" cache-2:80, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" proxy-2_6:8006\nConnection: keep-alive\n\n当前 IP：61.148.226.66 来自：北京市 联通\n")])])]),a("p",[s._v("可以看到，这次成功了。这是因为当存在 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 后，"),a("code",[s._v("CMD")]),s._v(" 的内容将会作为参数传给 "),a("code",[s._v("ENTRYPOINT")]),s._v("，而这里 "),a("code",[s._v("-i")]),s._v(" 就是新的 "),a("code",[s._v("CMD")]),s._v("，因此会作为参数传给 "),a("code",[s._v("curl")]),s._v("，从而达到了我们预期的效果。")]),s._v(" "),a("h4",{attrs:{id:"场景二-应用运行前的准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景二-应用运行前的准备工作"}},[s._v("#")]),s._v(" 场景二：应用运行前的准备工作")]),s._v(" "),a("p",[s._v("启动容器就是启动主进程，但有些时候，启动主进程前，需要一些准备工作。")]),s._v(" "),a("p",[s._v("比如 "),a("code",[s._v("mysql")]),s._v(" 类的数据库，可能需要一些数据库配置、初始化的工作，这些工作要在最终的 mysql 服务器运行之前解决。")]),s._v(" "),a("p",[s._v("此外，可能希望避免使用 "),a("code",[s._v("root")]),s._v(" 用户去启动服务，从而提高安全性，而在启动服务前还需要以 "),a("code",[s._v("root")]),s._v(" 身份执行一些必要的准备工作，最后切换到服务用户身份启动服务。或者除了服务外，其它命令依旧可以使用 "),a("code",[s._v("root")]),s._v(" 身份执行，方便调试等。")]),s._v(" "),a("p",[s._v("这些准备工作是和容器 "),a("code",[s._v("CMD")]),s._v(" 无关的，无论 "),a("code",[s._v("CMD")]),s._v(" 为什么，都需要事先进行一个预处理的工作。这种情况下，可以写一个脚本，然后放入 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 中去执行，而这个脚本会将接到的参数（也就是 "),a("code",[s._v("<CMD>")]),s._v("）作为命令，在脚本最后执行。比如官方镜像 "),a("code",[s._v("redis")]),s._v(" 中就是这么做的：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3.4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" addgroup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("S redis && adduser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("S "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("G redis redis\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 6379\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-server"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("可以看到其中为了 redis 服务创建了 redis 用户，并在最后指定了 "),a("code",[s._v("ENTRYPOINT")]),s._v(" 为 "),a("code",[s._v("docker-entrypoint.sh")]),s._v(" 脚本。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# allow the container to be started with `--user`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis-server'")]),s._v(" -a "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R redis "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" su-exec redis "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n")])])]),a("p",[s._v("该脚本的内容就是根据 "),a("code",[s._v("CMD")]),s._v(" 的内容来判断，如果是 "),a("code",[s._v("redis-server")]),s._v(" 的话，则切换到 "),a("code",[s._v("redis")]),s._v(" 用户身份启动服务器，否则依旧使用 "),a("code",[s._v("root")]),s._v(" 身份执行。比如：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run -it redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);