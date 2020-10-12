(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{588:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-kubeadm-部署-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-kubeadm-部署-kubernetes"}},[t._v("#")]),t._v(" 使用 kubeadm 部署 kubernetes")]),t._v(" "),a("p",[a("code",[t._v("kubeadm")]),t._v(" 提供了 "),a("code",[t._v("kubeadm init")]),t._v(" 以及 "),a("code",[t._v("kubeadm join")]),t._v(" 这两个命令作为快速创建 "),a("code",[t._v("kubernetes")]),t._v(" 集群的最佳实践。")]),t._v(" "),a("h2",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[t._v("#")]),t._v(" 安装 Docker")]),t._v(" "),a("p",[t._v("参考 "),a("a",{attrs:{href:"../../install"}},[t._v("安装 Docker")]),t._v(" 一节安装 Docker。")]),t._v(" "),a("h2",{attrs:{id:"安装-kubelet-kubeadm-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubelet-kubeadm-kubectl"}},[t._v("#")]),t._v(" 安装 "),a("strong",[t._v("kubelet")]),t._v(" "),a("strong",[t._v("kubeadm")]),t._v(" "),a("strong",[t._v("kubectl")])]),t._v(" "),a("h3",{attrs:{id:"ubuntu-debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian"}},[t._v("#")]),t._v(" Ubuntu/Debian")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apt-transport-https\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/kubernetes.list")]),t._v("\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y kubelet kubeadm kubectl\n")])])]),a("h3",{attrs:{id:"centos-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-fedora"}},[t._v("#")]),t._v(" CentOS/Fedora")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/yum.repos.d/kubernetes.repo")]),t._v("\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y kubelet kubeadm kubectl\n")])])]),a("h2",{attrs:{id:"修改内核的运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内核的运行参数"}},[t._v("#")]),t._v(" 修改内核的运行参数")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/sysctl.d/99-kubernetes-cri.conf")]),t._v("\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.ipv4.ip_forward                 = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用配置")]),t._v("\n$ sysctl --system\n")])])]),a("h2",{attrs:{id:"配置-kubelet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubelet"}},[t._v("#")]),t._v(" 配置 kubelet")]),t._v(" "),a("h3",{attrs:{id:"修改-kubelet-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-kubelet-service"}},[t._v("#")]),t._v(" 修改 "),a("code",[t._v("kubelet.service")])]),t._v(" "),a("p",[a("code",[t._v("/etc/systemd/system/kubelet.service.d/10-proxy-ipvs.conf")]),t._v(" 写入以下内容")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用 ipvs 相关内核模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/sbin/modprobe ip_vs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/sbin/modprobe ip_vs_rr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/sbin/modprobe ip_vs_wrr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/sbin/modprobe ip_vs_sh\n")])])]),a("p",[t._v("执行以下命令应用配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n")])])]),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("h3",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[t._v("#")]),t._v(" master")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubeadm init --image-repository registry.cn-hangzhou.aliyuncs.com/google_containers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --pod-network-cidr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.244")]),t._v(".0.0/16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --v "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --ignore-preflight-errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all\n")])])]),a("ul",[a("li",[a("code",[t._v("--pod-network-cidr 10.244.0.0/16")]),t._v(" 参数与后续 CNI 插件有关，这里以 "),a("code",[t._v("flannel")]),t._v(" 为例，若后续部署其他类型的网络插件请更改此参数。")])]),t._v(" "),a("blockquote",[a("p",[t._v("执行可能出现错误，例如缺少依赖包，根据提示安装即可。")])]),t._v(" "),a("p",[t._v("执行成功会输出")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Applied essential addon: CoreDNS\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":35:13.270407   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86677")]),t._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("181")]),t._v(".409184ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/serviceaccounts\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":35:13.470292   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86677")]),t._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("186")]),t._v(".088112ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/configmaps\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -i /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -g"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubectl apply -f [podnetwork].yaml"')]),t._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" any number of worker nodes by running the following on each as root:\n\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:6443 --token cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])])]),a("h3",{attrs:{id:"node-工作节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-工作节点"}},[t._v("#")]),t._v(" node 工作节点")]),t._v(" "),a("p",[t._v("在 "),a("strong",[t._v("另一主机")]),t._v(" 重复 "),a("strong",[t._v("部署")]),t._v(" 小节以前的步骤，安装配置好 kubelet。根据提示，加入到集群。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:6443 --token cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])])]),a("h2",{attrs:{id:"查看服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务"}},[t._v("#")]),t._v(" 查看服务")]),t._v(" "),a("p",[t._v("所有服务启动后，查看本地实际运行的 Docker 容器。这些服务大概分为三类：主节点服务、工作节点服务和其它服务。")]),t._v(" "),a("h3",{attrs:{id:"主节点服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主节点服务"}},[t._v("#")]),t._v(" 主节点服务")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("apiserver")]),t._v(" 是整个系统的对外接口，提供 RESTful 方式供客户端和其它组件调用；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("scheduler")]),t._v(" 负责对资源进行调度，分配某个 pod 到某个节点上；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("controller-manager")]),t._v(" 负责管理控制器，包括 endpoint-controller（刷新服务和 pod 的关联信息）和 replication-controller（维护某个 pod 的复制为配置的数值）。")])])]),t._v(" "),a("h3",{attrs:{id:"工作节点服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作节点服务"}},[t._v("#")]),t._v(" 工作节点服务")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("proxy")]),t._v(" 为 pod 上的服务提供访问的代理。")])]),t._v(" "),a("h3",{attrs:{id:"其它服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它服务"}},[t._v("#")]),t._v(" 其它服务")]),t._v(" "),a("ul",[a("li",[t._v("Etcd 是所有状态的存储数据库；")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("/etc/kubernetes/admin.conf")]),t._v(" 复制到 "),a("code",[t._v("~/.kube/config")])]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("$ kubectl get all -A")]),t._v(" 查看启动的服务。")]),t._v(" "),a("p",[t._v("由于未部署 CNI 插件，CoreDNS 未正常启动。如何使用 Kubernetes，请参考后续章节。")]),t._v(" "),a("h2",{attrs:{id:"部署-cni"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-cni"}},[t._v("#")]),t._v(" 部署 CNI")]),t._v(" "),a("p",[t._v("这里以 "),a("code",[t._v("flannel")]),t._v(" 为例进行介绍。")]),t._v(" "),a("h3",{attrs:{id:"flannel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flannel"}},[t._v("#")]),t._v(" flannel")]),t._v(" "),a("p",[t._v("检查 podCIDR 设置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl get node -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" CIDR\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出")]),t._v("\n    podCIDR: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.244")]),t._v(".0.0/16\n    podCIDRs:\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/v0.11.0/Documentation/kube-flannel.yml\n")])])]),a("h2",{attrs:{id:"master-节点默认不能运行-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-节点默认不能运行-pod"}},[t._v("#")]),t._v(" master 节点默认不能运行 pod")]),t._v(" "),a("p",[t._v("如果用 "),a("code",[t._v("kubeadm")]),t._v(" 部署一个单节点集群，默认情况下无法使用，请执行以下命令解除限制")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl taint nodes --all node-role.kubernetes.io/master-\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复默认值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ kubectl taint nodes NODE_NAME node-role.kubernetes.io/master=true:NoSchedule")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);