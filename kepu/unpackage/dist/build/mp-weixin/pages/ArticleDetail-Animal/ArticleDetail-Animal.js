(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ArticleDetail-Animal/ArticleDetail-Animal"],{"2d8c":function(t,e,n){},5919:function(t,e,n){"use strict";(function(t){n("4ffc");i(n("66fd"));var e=i(n("e0d9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"666b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a")),a=n("4029"),r=n("261d");u(n("a9f4"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,a,r,u){try{var o=t[r](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function u(t){o(r,i,a,u,s,"next",t)}function s(t){o(r,i,a,u,s,"throw",t)}u(void 0)}))}}var c={data:function(){return{id:"",lists:[],content:"",htmlNodes:[],sharedata:"",Videos:[],Lists:[],flag:!1}},onLoad:function(t){this.id=t.id,this.getNewsDetail(),this.getDetailContent(),this.getVideos(),this.getList()},methods:{open:function(){this.$refs.sharepopup.open()},one:function(){this.flag=!this.flag},addone:function(t){0==this.flag?(this.lists.praise_num=parseInt(this.lists.praise_num)+1,this.flag=!0):(this.lists.praise_num=this.lists.praise_num-1,this.flag=!1)},getNewsDetail:function(){var t=this;return s(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.myRequestGet)("/api/v1/fatiao/article/detail?id=\t"+t.id);case 2:n=e.sent,console.log(n),t.lists=n;case 5:case"end":return e.stop()}}),e)})))()},getDetailContent:function(){var t=this;return s(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.myRequestGet)("/api/v1/fatiao/article/detail?id="+t.id);case 2:n=e.sent,t.content=(0,r.formatRichText)(n.info.content);case 4:case"end":return e.stop()}}),e)})))()},getVideos:function(){var t=this;return s(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.myRequestGet)("/api/v1/fatiao/index/more-detail",{channel_id:3,articleLimit:8,videoLimit:1,clearcache:"redis",limit:1});case 2:n=e.sent,t.Videos=n.list;case 4:case"end":return e.stop()}}),e)})))()},getList:function(){var t=this;return s(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.myRequestGet)("/api/v1/fatiao/article/more-article",{channel_id:3,articleLimit:8,videoLimit:1,clearcache:"redis",limit:8});case 2:n=e.sent,console.log(n),t.Lists=n.list;case 5:case"end":return e.stop()}}),e)})))()},goLists4:function(e){t.navigateTo({url:"/pages/ArticleDetail-Animal/ArticleDetail-Animal?id=".concat(e.id)})},goVideos4:function(e){t.navigateTo({url:"/pages/VideoDetail-Animal/VideoDetail-Animal?id=".concat(e.id)})}}};e.default=c}).call(this,n("543d")["default"])},"6ed1":function(t,e,n){"use strict";var i=n("2d8c"),a=n.n(i);a.a},b52e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"36f2"))},shareBtn:function(){return n.e("components/share-btn/share-btn").then(n.bind(null,"228d"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},c11f:function(t,e,n){"use strict";n.r(e);var i=n("666b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e0d9:function(t,e,n){"use strict";n.r(e);var i=n("b52e"),a=n("c11f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6ed1");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports}},[["5919","common/runtime","common/vendor"]]]);