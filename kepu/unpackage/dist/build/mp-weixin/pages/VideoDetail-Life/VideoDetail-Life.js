(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/VideoDetail-Life/VideoDetail-Life"],{"0364":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a")),a=n("4029");function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,a,r,u){try{var o=e[r](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(i,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){u(r,i,a,o,c,"next",e)}function c(e){u(r,i,a,o,c,"throw",e)}o(void 0)}))}}var c={data:function(){return{id:"",xqsj:{},sharedata:"",detailInfo:{},flag:!1,xqsjj:[],xqlb:[]}},onLoad:function(e){this.id=e.id,this.getSwipers(),this.getNewsDetail(),this.getSwiperss()},methods:{getSwipers:function(){var e=this;return o(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/index/more-detail",{channel_id:1,articleLimit:8,videoLimit:1,clearcache:"redis",limit:1});case 2:n=t.sent,e.xqsjj=n.list;case 4:case"end":return t.stop()}}),t)})))()},getSwiperss:function(){var e=this;return o(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/article/more-article",{channel_id:1,articleLimit:8,videoLimit:1,clearcache:"redis",limit:8});case 2:n=t.sent,e.xqlb=n.list;case 4:case"end":return t.stop()}}),t)})))()},goshp:function(t){e.navigateTo({url:"/pages/VideoDetail-Life/VideoDetail-Life?id=".concat(t.id)})},goDet:function(t){e.navigateTo({url:"/pages/ArticleDetail-Life/ArticleDetail-Life?id=".concat(t.id)})},one:function(){this.flag=!this.flag},addone:function(e){0==this.flag?(this.xqsj.play_num=parseInt(this.xqsj.play_num)+1,this.flag=!0):(this.xqsj.play_num=this.xqsj.play_num-1,this.flag=!1)},getNewsDetail:function(){var e=this;return o(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/index/detail?id="+e.id);case 2:n=t.sent,e.xqsj=n;case 4:case"end":return t.stop()}}),t)})))()},open:function(){this.$refs.sharepopup.open()}}};t.default=c}).call(this,n("543d")["default"])},"055e":function(e,t,n){},4695:function(e,t,n){"use strict";var i=n("055e"),a=n.n(i);a.a},"5b4b":function(e,t,n){"use strict";(function(e){n("4ffc");i(n("66fd"));var t=i(n("dff3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"78ce":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"36f2"))},shareBtn:function(){return n.e("components/share-btn/share-btn").then(n.bind(null,"228d"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},d78c:function(e,t,n){"use strict";n.r(t);var i=n("0364"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},dff3:function(e,t,n){"use strict";n.r(t);var i=n("78ce"),a=n("d78c");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("4695");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"fbe71f7e",null,!1,i["a"],u);t["default"]=c.exports}},[["5b4b","common/runtime","common/vendor"]]]);