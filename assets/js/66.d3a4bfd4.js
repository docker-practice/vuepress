(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{267:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用-django"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-django"}},[s._v("#")]),s._v(" 使用 Django")]),s._v(" "),a("blockquote",[a("p",[s._v("本小节内容适合 "),a("code",[s._v("Python")]),s._v(" 开发人员阅读。")])]),s._v(" "),a("p",[s._v("我们现在将使用 "),a("code",[s._v("Docker Compose")]),s._v(" 配置并运行一个 "),a("code",[s._v("Django/PostgreSQL")]),s._v(" 应用。")]),s._v(" "),a("p",[s._v("在一切工作开始前，需要先编辑好三个必要的文件。")]),s._v(" "),a("p",[s._v("第一步，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑 "),a("code",[s._v("Dockerfile")]),s._v(" 文件来指定 Docker 容器要安装内容。内容如下：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PYTHONUNBUFFERED 1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" requirements.txt /code/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /code/\n")])])]),a("p",[s._v("以上内容指定应用将使用安装了 Python 以及必要依赖包的镜像。更多关于如何编写 "),a("code",[s._v("Dockerfile")]),s._v(" 文件的信息可以查看 "),a("router-link",{attrs:{to:"/image/dockerfile/"}},[s._v(" Dockerfile 使用")]),s._v("。")],1),s._v(" "),a("p",[s._v("第二步，在 "),a("code",[s._v("requirements.txt")]),s._v(" 文件里面写明需要安装的具体依赖包名。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Django"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("\npsycopg"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("\n")])])]),a("p",[s._v("第三步，"),a("code",[s._v("docker-compose.yml")]),s._v(" 文件将把所有的东西关联起来。它描述了应用的构成（一个 web 服务和一个数据库）、使用的 Docker 镜像、镜像之间的连接、挂载到容器的卷，以及服务开放的端口。")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python manage.py runserver 0.0.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/code\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000:8000"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db\n")])])]),a("p",[s._v("查看 "),a("router-link",{attrs:{to:"/compose/compose_file.html"}},[a("code",[s._v("docker-compose.yml")]),s._v(" 章节")]),s._v(" 了解更多详细的工作机制。")],1),s._v(" "),a("p",[s._v("现在我们就可以使用 "),a("code",[s._v("docker-compose run")]),s._v(" 命令启动一个 "),a("code",[s._v("Django")]),s._v(" 应用了。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose run web django-admin startproject django_example "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("由于 web 服务所使用的镜像并不存在，所以 Compose 会首先使用 "),a("code",[s._v("Dockerfile")]),s._v(" 为 web 服务构建一个镜像，接着使用这个镜像在容器里运行 "),a("code",[s._v("django-admin startproject django_example")]),s._v(" 指令。")]),s._v(" "),a("p",[s._v("这将在当前目录生成一个 "),a("code",[s._v("Django")]),s._v(" 应用。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nDockerfile       docker-compose.yml          django_example       manage.py       requirements.txt\n")])])]),a("p",[s._v("如果你的系统是 Linux,记得更改文件权限。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("首先，我们要为应用设置好数据库的连接信息。用以下内容替换 "),a("code",[s._v("django_example/settings.py")]),s._v(" 文件中 "),a("code",[s._v("DATABASES = ...")]),s._v(" 定义的节点内容。")]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DATABASES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.postgresql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这些信息是在 "),a("a",{attrs:{href:"https://hub.docker.com/_/postgres/",target:"_blank",rel:"noopener noreferrer"}},[s._v("postgres"),a("OutboundLink")],1),s._v(" 镜像固定设置好的。然后，运行 "),a("code",[s._v("docker-compose up")]),s._v(" ：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose up\n\ndjango_db_1 is up-to-date\nCreating django_web_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nCreating django_web_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nAttaching to django_db_1, django_web_1\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The files belonging to this database system will be owned by user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" This user must also own the server process.\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The database cluster will be initialized with locale "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en_US.utf8"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The default database encoding has accordingly been "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF8"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndb_1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The default text search configuration will be "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"english"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Performing system checks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" System check identified no issues "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" silenced"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" November "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" - 06:21:19\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Django version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.11")]),s._v(".7, using settings "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_example.settings'")]),s._v("\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Starting development server at http://0.0.0.0:8000/\nweb_1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Quit the server with CONTROL-C.\n")])])]),a("p",[s._v("这个 "),a("code",[s._v("Django")]),s._v(" 应用已经开始在你的 Docker 守护进程里监听着 "),a("code",[s._v("8000")]),s._v(" 端口了。打开 "),a("code",[s._v("127.0.0.1:8000")]),s._v(" 即可看到 "),a("code",[s._v("Django")]),s._v(" 欢迎页面。")]),s._v(" "),a("p",[s._v("你还可以在 Docker 上运行其它的管理命令，例如对于同步数据库结构这种事，在运行完 "),a("code",[s._v("docker-compose up")]),s._v(" 后，在另外一个终端进入文件夹运行以下命令即可：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose run web python manage.py syncdb\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);