(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/share-btn/share-btn"],{"228d":function(e,t,a){"use strict";a.r(t);var n=a("689e"),r=a("4022");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("e5a3");var i,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=o.exports},4022:function(e,t,a){"use strict";a.r(t);var n=a("477c"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},"477c":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{bottomData:[{text:"微信",icon:"/static/weixin.png",name:"wx"},{text:"朋友圈",icon:"/static/cirfrend.png",name:"copy"},{text:"QQ",icon:"/static/QQ.png",name:"qq"},{text:"复制",icon:"/static/copylink.png",name:"copy"}]}},props:["sharedataTemp"],onLoad:function(){console.log("sharedataTemp",this.sharedataTemp)},methods:{btnShare:function(t){console.log(t);var a="",n="",r="";switch(t){case 0:a="weixin",n="WXSceneSession",r=0;break;case 1:a="weixin",n="WXSenceTimeline",r=0;break;case 2:a="qq",r=1;break;case 3:e.setClipboardData({data:this.sharedataTemp.strShareUrl,complete:function(){e.showToast({title:"已复制到剪贴板"})}});break}""!=a&&e.share({provider:a,scene:n,type:r,href:this.sharedataTemp.strShareUrl,title:this.sharedataTemp.strShareTitle,summary:this.sharedataTemp.strShareSummary,imageUrl:this.sharedataTemp.strShareImageUrl,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})}}};t.default=a}).call(this,a("543d")["default"])},"689e":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},s=[]},a3ab:function(e,t,a){},e5a3:function(e,t,a){"use strict";var n=a("a3ab"),r=a.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/share-btn/share-btn-create-component',
    {
        'components/share-btn/share-btn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("228d"))
        })
    },
    [['components/share-btn/share-btn-create-component']]
]);