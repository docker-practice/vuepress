(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{345:function(e,_,v){"use strict";v.r(_);var s=v(0),o=Object(s.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"mesos-配置项解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mesos-配置项解析"}},[e._v("#")]),e._v(" Mesos 配置项解析")]),e._v(" "),v("p",[e._v("Mesos 支持在运行时通过命令行参数形式提供的配置项。如果是通过系统服务方式启动，也支持以配置文件或环境变量方式给出。当然，实际上最终是提取为命令行参数传递给启动命令。")]),e._v(" "),v("p",[e._v("Mesos 的配置项分为三种类型：通用项（master 和 slave 都支持），只有 master 支持的，以及只有 slave 支持的。")]),e._v(" "),v("p",[e._v("Mesos 配置项比较多，下面对一些重点配置进行描述。少数为必备项，意味着必须给出配置值；另外一些是可选配置，自己带有默认值。")]),e._v(" "),v("h3",{attrs:{id:"通用项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用项"}},[e._v("#")]),e._v(" 通用项")]),e._v(" "),v("p",[e._v("通用项数量不多，主要涉及到服务绑定地址和日志信息等，包括：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--advertise_ip=VALUE")]),e._v(" 可以通过该地址访问到服务，比如应用框架访问到 master 节点；")]),e._v(" "),v("li",[v("code",[e._v("--advertise_port=VALUE")]),e._v(" 可以通过该端口访问到服务；")]),e._v(" "),v("li",[v("code",[e._v("--external_log_file=VALUE")]),e._v(" 指定存储日志的外部文件，可通过 Web 界面查看；")]),e._v(" "),v("li",[v("code",[e._v("--firewall_rules=VALUE")]),e._v(" endpoint 防火墙规则，"),v("code",[e._v("VALUE")]),e._v(" 可以是 JSON 格式或者存有 JSON 格式的文件路径；")]),e._v(" "),v("li",[v("code",[e._v("--ip=VALUE")]),e._v(" 服务绑定到的IP 地址，用来监听外面过来的请求；")]),e._v(" "),v("li",[v("code",[e._v("--log_dir=VALUE")]),e._v(" 日志文件路径，如果为空（默认值）则不存储日志到本地；")]),e._v(" "),v("li",[v("code",[e._v("--logbufsecs=VALUE")]),e._v("  buffer 多少秒的日志，然后写入本地；")]),e._v(" "),v("li",[v("code",[e._v("--logging_level=VALUE")]),e._v(" 日志记录的最低级别；")]),e._v(" "),v("li",[v("code",[e._v("--port=VALUE")]),e._v(" 绑定监听的端口，master 默认是 5050，slave 默认是 5051。")])]),e._v(" "),v("h3",{attrs:{id:"master-专属配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#master-专属配置项"}},[e._v("#")]),e._v(" master 专属配置项")]),e._v(" "),v("p",[e._v("这些配置项是针对主节点上的 Mesos master 服务的，围绕高可用、注册信息、对应用框架的资源管理等。用户应该根据本地主节点资源情况来合理的配置这些选项。")]),e._v(" "),v("p",[e._v("用户可以通过 "),v("code",[e._v("mesos-master --help")]),e._v(" 命令来获取所有支持的配置项信息。")]),e._v(" "),v("p",[e._v("必须指定的配置项有三个：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--quorum=VALUE")]),e._v(" 必备项，使用基于 replicated-Log 的注册表（即利用 ZooKeeper 实现 HA）时，参与投票时的最少节点个数；")]),e._v(" "),v("li",[v("code",[e._v("--work_dir=VALUE")]),e._v(" 必备项，注册表持久化信息存储位置；")]),e._v(" "),v("li",[v("code",[e._v("--zk=VALUE")]),e._v(" 如果主节点为 HA 模式，此为必备项，指定 ZooKeepr 的服务地址，支持多个地址，之间用逗号隔离，例如 "),v("code",[e._v("zk://username:password@host1:port1,host2:port2,.../path")]),e._v("。还可以为存有路径信息的文件路径。")])]),e._v(" "),v("p",[e._v("可选的配置项有：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--acls=VALUE")]),e._v(" ACL 规则或所在文件；")]),e._v(" "),v("li",[v("code",[e._v("--allocation_interval=VALUE")]),e._v(" 执行 allocation 的间隔，默认为 1sec；")]),e._v(" "),v("li",[v("code",[e._v("--allocator=VALUE")]),e._v(" 分配机制，默认为 HierarchicalDRF；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]authenticate")]),e._v(" 是否允许非认证过的 framework 注册；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]authenticate_slaves")]),e._v(" 是否允许非认证过的 slaves 注册；")]),e._v(" "),v("li",[v("code",[e._v("--authenticators=VALUE")]),e._v(" 对 framework 或 salves 进行认证时的实现机制；")]),e._v(" "),v("li",[v("code",[e._v("--cluster=VALUE")]),e._v(" 集群别名，显示在 Web 界面上供用户识别的；")]),e._v(" "),v("li",[v("code",[e._v("--credentials=VALUE")]),e._v(" 存储加密后凭证的文件的路径；")]),e._v(" "),v("li",[v("code",[e._v("--external_log_file=VALUE")]),e._v(" 采用外部的日志文件；")]),e._v(" "),v("li",[v("code",[e._v("--framework_sorter=VALUE")]),e._v(" 给定 framework 之间的资源分配策略；")]),e._v(" "),v("li",[v("code",[e._v("--hooks=VALUE")]),e._v(" master 中安装的 hook 模块；")]),e._v(" "),v("li",[v("code",[e._v("--hostname=VALUE")]),e._v(" master 节点使用的主机名，不配置则从系统中获取；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]log_auto_initialize")]),e._v(" 是否自动初始化注册表需要的 replicated 日志；")]),e._v(" "),v("li",[v("code",[e._v("--modules=VALUE")]),e._v(" 要加载的模块，支持文件路径或者 JSON；")]),e._v(" "),v("li",[v("code",[e._v("--offer_timeout=VALUE")]),e._v(" offer 撤销的超时；")]),e._v(" "),v("li",[v("code",[e._v("--rate_limits=VALUE")]),e._v(" framework 的速率限制，即 query per second (qps)；")]),e._v(" "),v("li",[v("code",[e._v("--recovery_slave_removal_limit=VALUE")]),e._v(" 限制注册表恢复后可以移除或停止的 slave 数目，超出后 master 会失败，默认是 100%；")]),e._v(" "),v("li",[v("code",[e._v("--slave_removal_rate_limit=VALUE slave")]),e._v(" 没有完成健康度检查时候被移除的速率上限，例如 1/10mins 代表每十分钟最多有一个；")]),e._v(" "),v("li",[v("code",[e._v("--registry=VALUE")]),e._v(" 注册表信息的持久化策略，默认为 "),v("code",[e._v("replicated_log")]),e._v(" 存放本地，还可以为 "),v("code",[e._v("in_memory")]),e._v(" 放在内存中；")]),e._v(" "),v("li",[v("code",[e._v("--registry_fetch_timeout=VALUE")]),e._v(" 访问注册表失败超时；")]),e._v(" "),v("li",[v("code",[e._v("--registry_store_timeout=VALUE")]),e._v(" 存储注册表失败超时；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]registry_strict")]),e._v(" 是否按照注册表中持久化信息执行操作，默认为 false；")]),e._v(" "),v("li",[v("code",[e._v("--roles=VALUE")]),e._v(" 集群中 framework 可以所属的分配角色；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]root_submissions")]),e._v(" root 是否可以提交 framework，默认为 true；")]),e._v(" "),v("li",[v("code",[e._v("--slave_reregister_timeout=VALUE")]),e._v(" 新的 lead master 节点选举出来后，多久之内所有的 slave 需要注册，超时的 salve 将被移除并关闭，默认为 10mins；")]),e._v(" "),v("li",[v("code",[e._v("--user_sorter=VALUE")]),e._v(" 在用户之间分配资源的策略，默认为 drf；")]),e._v(" "),v("li",[v("code",[e._v("--webui_dir=VALUE")]),e._v(" webui 实现的文件目录所在，默认为 "),v("code",[e._v("/usr/local/share/mesos/webui")]),e._v("；")]),e._v(" "),v("li",[v("code",[e._v("--weights=VALUE")]),e._v(" 各个角色的权重；")]),e._v(" "),v("li",[v("code",[e._v("--whitelist=VALUE")]),e._v(" 文件路径，包括发送 offer 的 slave 名单，默认为 None；")]),e._v(" "),v("li",[v("code",[e._v("--zk_session_timeout=VALUE")]),e._v(" session 超时，默认为 10secs；")]),e._v(" "),v("li",[v("code",[e._v("--max_executors_per_slave=VALUE")]),e._v(" 配置了 "),v("code",[e._v("--with-network-isolator")]),e._v(" 时可用，限制每个 slave 同时执行任务个数。")])]),e._v(" "),v("p",[e._v("下面给出一个由三个节点组成的 master 集群典型配置，工作目录指定为 "),v("code",[e._v("/tmp/mesos")]),e._v("，集群名称为 "),v("code",[e._v("mesos_cluster")]),e._v("。")]),e._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("mesos-master "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--zk"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk://10.0.0.2:2181,10.0.0.3:2181,10.0.0.4:2181/mesos "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--quorum"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--work_dir"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/tmp/mesos "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--cluster"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mesos_cluster\n")])])]),v("h3",{attrs:{id:"slave-专属配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slave-专属配置项"}},[e._v("#")]),e._v(" slave 专属配置项")]),e._v(" "),v("p",[e._v("slave 节点支持的配置项是最多的，因为它所完成的事情也最复杂。这些配置项既包括跟主节点打交道的一些参数，也包括对本地资源的配置，包括隔离机制、本地任务的资源限制等。")]),e._v(" "),v("p",[e._v("用户可以通过 "),v("code",[e._v("mesos-slave --help")]),e._v(" 命令来获取所有支持的配置项信息。")]),e._v(" "),v("p",[e._v("必备项就一个：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--master=VALUE")]),e._v(" 必备项，master 所在地址，或对应 ZooKeeper 服务地址，或文件路径，可以是列表。")])]),e._v(" "),v("p",[e._v("以下为可选配置项：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--attributes=VALUE")]),e._v(" 机器属性；")]),e._v(" "),v("li",[v("code",[e._v("--authenticatee=VALUE")]),e._v(" 跟 master 进行认证时候的认证机制；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]cgroups_enable_cfs")]),e._v(" 采用 CFS 进行带宽限制时候对 CPU 资源进行限制，默认为 false；")]),e._v(" "),v("li",[v("code",[e._v("--cgroups_hierarchy=VALUE")]),e._v(" cgroups 的目录根位置，默认为 "),v("code",[e._v("/sys/fs/cgroup")]),e._v("；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]cgroups_limit_swap")]),e._v(" 限制内存和 swap，默认为 false，只限制内存；")]),e._v(" "),v("li",[v("code",[e._v("--cgroups_root=VALUE")]),e._v(" 根 cgroups 的名称，默认为 mesos；")]),e._v(" "),v("li",[v("code",[e._v("--container_disk_watch_interval=VALUE")]),e._v(" 为容器进行硬盘配额查询的时间间隔；")]),e._v(" "),v("li",[v("code",[e._v("--containerizer_path=VALUE")]),e._v(" 采用外部隔离机制（"),v("code",[e._v("--isolation=external")]),e._v("）时候，外部容器机制执行文件路径；")]),e._v(" "),v("li",[v("code",[e._v("--containerizers=VALUE")]),e._v(" 可用的容器实现机制，包括 mesos、external、docker；")]),e._v(" "),v("li",[v("code",[e._v("--credential=VALUE")]),e._v(" 加密后凭证，或者所在文件路径；")]),e._v(" "),v("li",[v("code",[e._v("--default_container_image=VALUE")]),e._v(" 采用外部容器机制时，任务缺省使用的镜像；")]),e._v(" "),v("li",[v("code",[e._v("--default_container_info=VALUE")]),e._v(" 容器信息的缺省值；")]),e._v(" "),v("li",[v("code",[e._v("--default_role=VALUE")]),e._v(" 资源缺省分配的角色；")]),e._v(" "),v("li",[v("code",[e._v("--disk_watch_interval=VALUE")]),e._v(" 硬盘使用情况的周期性检查间隔，默认为 1mins；")]),e._v(" "),v("li",[v("code",[e._v("--docker=VALUE")]),e._v(" docker 执行文件的路径；")]),e._v(" "),v("li",[v("code",[e._v("--docker_remove_delay=VALUE")]),e._v(" 删除容器之前的等待时间，默认为 6hrs；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]docker_kill_orphans")]),e._v(" 清除孤儿容器，默认为 true；")]),e._v(" "),v("li",[v("code",[e._v("--docker_sock=VALUE")]),e._v(" docker sock 地址，默认为 "),v("code",[e._v("/var/run/docker.sock")]),e._v("；")]),e._v(" "),v("li",[v("code",[e._v("--docker_mesos_image=VALUE")]),e._v(" 运行 slave 的 docker 镜像，如果被配置，docker 会假定 slave 运行在一个 docker 容器里；")]),e._v(" "),v("li",[v("code",[e._v("--docker_sandbox_directory=VALUE")]),e._v(" sandbox 映射到容器里的哪个路径；")]),e._v(" "),v("li",[v("code",[e._v("--docker_stop_timeout=VALUE")]),e._v(" 停止实例后等待多久执行 kill 操作，默认为 0secs；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]enforce_container_disk_quota")]),e._v(" 是否启用容器配额限制，默认为 false；")]),e._v(" "),v("li",[v("code",[e._v("--executor_registration_timeout=VALUE")]),e._v(" 执行应用最多可以等多久再注册到 slave，否则停止它，默认为 1mins；")]),e._v(" "),v("li",[v("code",[e._v("--executor_shutdown_grace_period=VALUE")]),e._v(" 执行应用停止后，等待多久，默认为 5secs；")]),e._v(" "),v("li",[v("code",[e._v("--external_log_file=VALUE")]),e._v(" 外部日志文件；")]),e._v(" "),v("li",[v("code",[e._v("--fetcher_cache_size=VALUE")]),e._v(" fetcher 的 cache 大小，默认为 2 GB；")]),e._v(" "),v("li",[v("code",[e._v("--fetcher_cache_dir=VALUE")]),e._v(" fetcher cache 文件存放目录，默认为 /tmp/mesos/fetch；")]),e._v(" "),v("li",[v("code",[e._v("--frameworks_home=VALUE")]),e._v(" 执行应用前添加的相对路径，默认为空；")]),e._v(" "),v("li",[v("code",[e._v("--gc_delay=VALUE")]),e._v(" 多久清理一次执行应用目录，默认为 1weeks；")]),e._v(" "),v("li",[v("code",[e._v("--gc_disk_headroom=VALUE")]),e._v(" 调整计算最大执行应用目录年龄的硬盘留空量，默认为 0.1；")]),e._v(" "),v("li",[v("code",[e._v("--hadoop_home=VALUE")]),e._v(" hadoop 安装目录，默认为空，会自动查找 HADOOP_HOME 或者从系统路径中查找；")]),e._v(" "),v("li",[v("code",[e._v("--hooks=VALUE")]),e._v(" 安装在 master 中的 hook 模块列表；")]),e._v(" "),v("li",[v("code",[e._v("--hostname=VALUE")]),e._v(" slave 节点使用的主机名；")]),e._v(" "),v("li",[v("code",[e._v("--isolation=VALUE")]),e._v(" 隔离机制，例如 "),v("code",[e._v("posix/cpu,posix/mem")]),e._v("（默认）或者 "),v("code",[e._v("cgroups/cpu,cgroups/mem")]),e._v("、"),v("code",[e._v("external")]),e._v(" 等；")]),e._v(" "),v("li",[v("code",[e._v("--launcher_dir=VALUE")]),e._v(" mesos 可执行文件的路径，默认为 "),v("code",[e._v("/usr/local/lib/mesos")]),e._v("；")]),e._v(" "),v("li",[v("code",[e._v("--image_providers=VALUE")]),e._v(" 支持的容器镜像机制，例如 'APPC,DOCKER'；")]),e._v(" "),v("li",[v("code",[e._v("--oversubscribed_resources_interval=VALUE")]),e._v(" slave 节点定期汇报超配资源状态的周期；")]),e._v(" "),v("li",[v("code",[e._v("--modules=VALUE")]),e._v(" 要加载的模块，支持文件路径或者 JSON；")]),e._v(" "),v("li",[v("code",[e._v("--perf_duration=VALUE")]),e._v(" perf 采样时长，必须小于 perf_interval，默认为 10secs；")]),e._v(" "),v("li",[v("code",[e._v("--perf_events=VALUE")]),e._v(" perf 采样的事件；")]),e._v(" "),v("li",[v("code",[e._v("--perf_interval=VALUE")]),e._v(" perf 采样的时间间隔；")]),e._v(" "),v("li",[v("code",[e._v("--qos_controller=VALUE")]),e._v(" 超配机制中保障 QoS 的控制器名；")]),e._v(" "),v("li",[v("code",[e._v("--qos_correction_interval_min=VALUE")]),e._v(" Qos 控制器纠正超配资源的最小间隔，默认为 0secs；")]),e._v(" "),v("li",[v("code",[e._v("--recover=VALUE")]),e._v(" 回复后是否重连旧的执行应用，reconnect（默认值）是重连，cleanup 清除旧的执行器并退出；")]),e._v(" "),v("li",[v("code",[e._v("--recovery_timeout=VALUE")]),e._v(" slave 恢复时的超时，太久则所有相关的执行应用将自行退出，默认为 15mins；")]),e._v(" "),v("li",[v("code",[e._v("--registration_backoff_factor=VALUE")]),e._v(" 跟 master 进行注册时候的重试时间间隔算法的因子，默认为 1secs，采用随机指数算法，最长 1mins；")]),e._v(" "),v("li",[v("code",[e._v("--resource_monitoring_interval=VALUE")]),e._v(" 周期性监测执行应用资源使用情况的间隔，默认为 1secs；")]),e._v(" "),v("li",[v("code",[e._v("--resources=VALUE")]),e._v(" 每个 slave 可用的资源，比如主机端口默认为 [31000, 32000]；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]revocable_cpu_low_priority")]),e._v(" 运行在可撤销 CPU 上容器将拥有较低优先级，默认为 true。")]),e._v(" "),v("li",[v("code",[e._v("--slave_subsystems=VALUE")]),e._v(" slave 运行在哪些 cgroup 子系统中，包括 memory，cpuacct 等，缺省为空；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]strict")]),e._v(" 是否认为所有错误都不可忽略，默认为 true；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]switch_user")]),e._v(" 用提交任务的用户身份来运行，默认为 true；")]),e._v(" "),v("li",[v("code",[e._v("--work_dir=VALUE")]),e._v(" framework 的工作目录，默认为 /tmp/mesos。")])]),e._v(" "),v("p",[e._v("下面这些选项需要配置 "),v("code",[e._v("--with-network-isolator")]),e._v(" 一起使用（编译时需要启用 "),v("code",[e._v("--with-network-isolator")]),e._v(" 参数）。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("--ephemeral_ports_per_container=VALUE")]),e._v(" 分配给一个容器的临时端口的最大数目，需要为 2 的整数幂（默认为 1024）；")]),e._v(" "),v("li",[v("code",[e._v("--eth0_name=VALUE")]),e._v(" public 网络的接口名称，如果不指定，根据主机路由进行猜测；")]),e._v(" "),v("li",[v("code",[e._v("--lo_name=VALUE")]),e._v(" loopback 网卡名称；")]),e._v(" "),v("li",[v("code",[e._v("--egress_rate_limit_per_container=VALUE")]),e._v(" 每个容器的输出流量限制速率限制（采用 fq_codel 算法来限速），单位是字节每秒；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]-egress_unique_flow_per_container")]),e._v(" 是否把不同容器的流量当作彼此不同的流，避免彼此影响（默认为 false）；")]),e._v(" "),v("li",[v("code",[e._v("--[no-]network_enable_socket_statistics")]),e._v(" 是否采集每个容器的 socket 统计信息，默认为 false。")])]),e._v(" "),v("p",[e._v("下面给出一个典型的 slave 配置，容器为 Docker，监听在 "),v("code",[e._v("10.0.0.10")]),e._v(" 地址；节点上限制 16 个 CPU、64 GB 内存，容器的非临时端口范围指定为 [31000-32000]，临时端口范围指定为 [32768-57344]；每个容器临时端口最多为 512 个，并且外出流量限速为 50 MB/s。")]),e._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("mesos-slave "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--master"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk://10.0.0.2:2181,10.0.0.3:2181,10.0.0.4:2181/mesos "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--containerizers"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("docker "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--ip"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.10 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--isolation"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cgroups/cpu,cgroups/mem,network/port_mapping "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--resources"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cpus:16"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("mem:64000"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("ports:"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("31000")]),e._v("-32000"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("ephemeral_ports:"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("32768")]),e._v("-57344"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--ephemeral_ports_per_container"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("512")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--egress_rate_limit_per_container"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("50000KB "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--egress_unique_flow_per_container\n")])])]),v("p",[e._v("为了避免主机分配的临时端口跟我们指定的临时端口范围冲突，需要在主机节点上进行配置。")]),e._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("$ "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[e._v('"57345 61000"')]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /proc/sys/net/ipv4/ip_local_port_range\n")])])]),v("p",[v("em",[e._v("注：非临时端口是 Mesos 分配给框架，绑定到任务使用的，端口号往往有明确意义；临时端口是系统分配的，往往不太关心具体端口号。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);