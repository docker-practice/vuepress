(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{252:function(t,s,e){},441:function(t,s){t.exports=[{name:"腾讯云",description:"【腾讯云】星星海 SA2 云服务器。",strong:"1 核 2G 首年 99 元起，高性价比首选",action:"立即抢购",url:"https://cloud.tencent.com/act/cps/redirect?redirect=1063&cps_key=3a5255852d5db99dcd5da4c72f05df61&from=console",weight:100},{name:"腾讯云",description:"【腾讯云】云产品限时秒杀。",strong:"1 核 2G 云服务器，首年 99 元",action:"立即抢购",url:"https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=3a5255852d5db99dcd5da4c72f05df61&from=console",weight:100},{name:"阿里云",description:"云服务器 精选特惠，",strong:"低至 0.95 折起",action:"去抢",url:"https://www.aliyun.com/product/ecs?source=5176.11533457&userCode=8lx5zmtu",weight:100},{name:"加入微信群聊",description:"与 1100+ Docker 使用者交流",strong:"",action:"点击加入",url:"https://yewm28.coding-pages.com/wechat.jpg",weight:100}]},442:function(t,s,e){"use strict";var n=e(252);e.n(n).a},467:function(t,s,e){"use strict";e.r(s);var n={data:()=>({ads:e(441)}),mounted(){},computed:{random(){if(this.$isSharing)return this.ads[0];let t=0;for(let s of this.ads)t+=s.weight;let s=0,e=Math.random();for(let n of this.ads){if(e>s/t&&e<=(s+n.weight)/t)return n;s+=n.weight}return this.ads[0]}},methods:{clickAds(){this.$sendGaEvent(this.random.name,this.random.name+"--"+this.$page.path,this.random.name+"--"+this.$page.path)}}},a=(e(442),e(3)),o=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{style:""},[e("blockquote",{directives:[{name:"show",rawName:"v-show",value:t.$themeConfig.showAds,expression:"$themeConfig.showAds"}]},[e("a",{staticStyle:{"text-decoration":"none",width:"100%"},attrs:{href:t.random.url,target:"_blank",rel:"nofollow"},on:{click:t.clickAds}},[e("div",{staticClass:"ads"},[e("div",[e("span",{staticClass:"name"},[t._v("\n              "+t._s(t.random.name)+"\n            ")]),t._v(" "),e("span",{staticClass:"description"},[t._v("\n              "+t._s(t.random.description)+"\n            ")]),t._v(" "),e("span",{staticClass:"description-strong"},[t._v("\n              "+t._s(t.random.strong)+"\n            ")]),t._v(" "),e("span",{staticClass:"action"},[t._v("\n              "+t._s(t.random.action)+"\n            ")]),t._v(" "),e("span",{staticClass:"ads-text"},[t._v("广告")])])])])]),t._v(" "),t._t("default")],2)}),[],!1,null,"1a9df5cc",null);s.default=o.exports}}]);