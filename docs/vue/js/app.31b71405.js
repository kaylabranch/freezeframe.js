(function(t){function e(e){for(var r,c,i=e[0],o=e[1],f=e[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,f||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/freezeframe.js/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("p",{staticClass:"bold title"},[t._v("vue-freezeframe")]),a("div",{staticClass:"section"},[t._m(0),a("vue-freezeframe",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w"},on:{toggle:function(e,a,r){return t.logEvent("toggle",e,a,r)},start:function(e,a,r){return t.logEvent("start",e,a,r)},stop:function(e,a,r){return t.logEvent("stop",e,a,r)}}})],1),a("div",{staticClass:"section"},[a("p",[t._v("start/stop manually, with overlay")]),a("button",{on:{click:t.start}},[t._v("Start")]),a("button",{on:{click:t.stop}},[t._v("Stop")]),a("button",{on:{click:t.toggle}},[t._v("Toggle")]),a("vue-freezeframe",{ref:"freeze",attrs:{src:"http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif",options:{trigger:!1,overlay:!0}},on:{toggle:function(e,a,r){return t.logEvent("toggle",e,a,r)},start:function(e,a,r){return t.logEvent("start",e,a,r)},stop:function(e,a,r){return t.logEvent("stop",e,a,r)}}})],1),a("div",{staticClass:"section"},[a("p",[t._v("using slot & overlay")]),a("vue-freezeframe",{staticClass:"grid",attrs:{options:{overlay:!0}}},[a("div",{staticClass:"cell"},[a("img",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e801085229b264ca29fc/1519577337605/download.gif?format=1000w"}})]),a("div",{staticClass:"cell"},[a("img",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e904c830257a34734ff5/1519577373504/Armani-Central-Park-6151.gif?format=1000w"}})]),a("div",{staticClass:"cell"},[a("img",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a95c231419202eb9a763970/1519814094692/tumblr_nfro6qnt591qzcq51o1_500.gif?format=750w"}})]),a("div",{staticClass:"cell"},[a("img",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w"}})])])],1),a("div",{staticClass:"section"},[a("p",[t._v("destroy, remove event listeners")]),a("button",{on:{click:function(e){t.visible=!1}}},[t._v("Destroy")]),t.visible?a("vue-freezeframe",{attrs:{src:"https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w"},on:{toggle:function(e,a,r){return t.logEvent("toggle",e,a,r)},start:function(e,a,r){return t.logEvent("start",e,a,r)},stop:function(e,a,r){return t.logEvent("stop",e,a,r)}}}):t._e()],1),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("basic,"),a("br"),t._v("animate on hover.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("cinemagraphs by "),a("a",{attrs:{href:"http://www.cinemagraphs.com/"}},[t._v("cinemagraphs.com")])])}],c=a("d4ec"),i=a("bee2"),o=a("262e"),f=a("2caf"),l=a("9ab4"),u=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-freezeframe"},[t.$slots.default?t._t("default"):t.src?a("img",{ref:"img",attrs:{src:t.src}}):t._e()],2)},v=[],b=a("5233"),d=a.n(b),g=function(t){Object(o["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isPlaying=!1,t}return Object(i["a"])(a,[{key:"mounted",value:function(){this.$slots.default?this.$freezeframe=new d.a(this.$el,this.options):this.src&&(this.$freezeframe=new d.a(this.$refs.img,this.options)),this.addEventListeners()}},{key:"addEventListeners",value:function(){var t=this;this.$freezeframe&&this.$freezeframe.on("toggle",(function(e,a){var r=a?"start":"stop";t.$emit(r,e,a),t.$emit("toggle",e,a)}))}},{key:"start",value:function(){this.$freezeframe&&(this.$freezeframe.start(),this.isPlaying=!0)}},{key:"stop",value:function(){var t;this.$freezeframe&&(null===(t=this.$freezeframe)||void 0===t||t.stop(),this.isPlaying=!1)}},{key:"toggle",value:function(){this.isPlaying?this.stop():this.start()}}]),a}(u["b"]);g=Object(l["a"])([Object(u["a"])({props:{src:{type:[String,Object],default:null},options:Object}})],g);var m=g,h=m,y=a("2877"),_=Object(y["a"])(h,p,v,!1,null,null,null),O=_.exports,j=function(t){Object(o["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.visible=!0,t}return Object(i["a"])(a,[{key:"toggle",value:function(){this.$refs.freeze.toggle()}},{key:"start",value:function(){this.$refs.freeze.start()}},{key:"stop",value:function(){this.$refs.freeze.stop()}},{key:"logEvent",value:function(t,e,a){console.log("Event emitted:",t,e,a)}}]),a}(u["b"]);j=Object(l["a"])([Object(u["a"])({components:{VueFreezeframe:O}})],j);var w=j,$=w,z=(a("5c0b"),a("cdc0"),Object(y["a"])($,n,s,!1,null,"19b8ea15",null)),k=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},cdc0:function(t,e,a){"use strict";var r=a("f656"),n=a.n(r);n.a},f656:function(t,e,a){}});
//# sourceMappingURL=app.31b71405.js.map