(function(t){function e(e){for(var s,n,o=e[0],c=e[1],d=e[2],p=0,b=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&b.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(b.length)b.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio-gabin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0045":function(t,e,a){t.exports=a.p+"img/shcontents.0233a7b2.png"},"167e":function(t,e,a){t.exports=a.p+"img/web01.96b08acd.png"},"311a":function(t,e,a){"use strict";var s=a("516a"),i=a.n(s);i.a},"516a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(a("5c0b"),a("2877")),o={},c=Object(n["a"])(o,i,r,!1,null,null,null),d=c.exports,l=a("f309");s["a"].use(l["a"]);var p=new l["a"]({}),b=a("8c4f"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("header",{attrs:{id:"header"}},[s("div",{staticClass:"h-container mw1440"},[s("div",{staticClass:"nav-box"},[s("button",{staticClass:"nav-item b-text",class:{active:1==t.selectedNav},on:{click:function(e){return t.clickedIntro(1)}}},[t._v("Home")]),s("button",{staticClass:"nav-item b-text",class:{active:2==t.selectedNav},on:{click:function(e){return t.clickedProjects(2)}}},[t._v("Project")]),s("button",{staticClass:"nav-item b-text",class:{active:3==t.selectedNav},on:{click:function(e){return t.clickedContact(3)}}},[t._v("Contact")])])])]),s("main",[t._m(0),s("div",{staticClass:"padding-40",attrs:{id:"projects-container"}},[s("div",{staticClass:"projects mw1280"},[s("div",{staticClass:"b-head"},[t._v("Project")]),s("div",{staticClass:"group"},[s("div",{staticClass:"project-box web-kakao"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("c7fe"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(1),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web-kakao",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web-kakao/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web-ms"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("img",{attrs:{src:a("e8f7"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(2),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web-ms",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web-ms/blob/master/src/views/Main.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web01"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("167e"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web01",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web01/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web02"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("img",{attrs:{src:a("8ac6"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(3),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web02",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web02/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web03"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("ebe0"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(4),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web03",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web03/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web04"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("img",{attrs:{src:a("8b93"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(5),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web04",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web04/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web05"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("a555"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),t._m(6),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web05",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web05/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web06"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("img",{attrs:{src:a("a720"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web06",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web06/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])]),s("div",{staticClass:"project-box web-dashboard01"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("9493"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://gabinlee.github.io/web-dashboard01",target:"_blank"}},[t._v("페이지 보기")])]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"https://github.com/GabinLee/web-dashboard01/blob/master/src/views/Home.vue",target:"_blank"}},[s("v-icon",[t._v("mdi-github")]),s("span",[t._v("소스 보기")])],1)])])])])])])]),s("div",{staticClass:"padding-40",attrs:{id:"practical-work-container"}},[s("div",{staticClass:"practical-work mw1280"},[s("div",{staticClass:"b-head"},[t._v("외주 참여")]),s("div",{staticClass:"group"},[s("div",{staticClass:"project-box"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("img",{attrs:{src:a("0045"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"http://shcontents.com/",_blank:""}},[t._v("view more")])])])]),s("div",{staticClass:"project-box"},[s("div",{staticClass:"img-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeLeft:t.fadeUp}},[s("img",{attrs:{src:a("ca3b"),alt:""}})]),s("div",{staticClass:"text-box padding-40",attrs:{"data-aos":"web"==t.responsiveMode?t.fadeRight:t.fadeUp}},[s("p",{staticClass:"b-text"},[t._v("퍼블리싱 업무 담당")]),s("p",{staticClass:"b-text"},[t._v("반응형")]),s("p",{staticClass:"b-text"},[t._v("Vue.js 프레임워크")]),s("div",{staticClass:"btn-bx"},[s("div",{staticClass:"bg-bx"}),s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"fs16",attrs:{href:"http://sj-ez.com/",_blank:""}},[t._v("view more")])])])])])])]),s("div",{staticClass:"padding-40",attrs:{id:"contact-container"}},[s("div",{staticClass:"contact mw1280"},[s("div",{staticClass:"b-head"},[t._v("contact")]),s("div",{staticClass:"group"},[s("div",{staticClass:"content-box padding-40"},[s("p",{staticClass:"b-title"},[t._v("email")]),s("div",{staticClass:"icon-box"},[s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{href:"mailto:leegb0621@gmail.com"}},[s("v-icon",[t._v("mdi-email")])],1)]),s("p",{staticClass:"b-text"},[t._v("leegb0621@gmail.com")])]),s("div",{staticClass:"content-box padding-40"},[s("p",{staticClass:"b-title"},[t._v("phone")]),s("div",{staticClass:"icon-box"},[s("a",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{href:"tel:010-5302-7943"}},[s("v-icon",[t._v("mdi-cellphone-iphone")])],1)]),s("p",{staticClass:"b-text"},[t._v("010-5302-7943")])])])])])]),t._m(7)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"intro"}},[a("p",{staticClass:"padding-40"},[t._v("I'm Gabin")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"b-text"},[t._v("크로스 브라우징 "),a("span",[t._v("(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"padding-40"},[a("div",{staticClass:"f-container mw1440"},[a("p",{staticClass:"fs24"},[t._v("Lee Gabin")]),a("span",[t._v("1994.06.21")]),a("span",[t._v("경기도 시흥시")]),a("br"),a("span",[t._v("HTML5, CSS3, JAVA 공부 중")])])])}],g={data:function(){return{selectedNav:1,fadeRight:"fade-right",fadeLeft:"fade-left",fadeUp:"fade-up",responsiveMode:"web"}},created:function(){window.onscroll=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?document.getElementById("header").style.boxShadow="0 2px 2px 0 #eee":document.getElementById("header").style.boxShadow="none"}},mounted:function(){var t=this;window.innerWidth<769?this.responsiveMode="mobile":this.responsiveMode="web",window.addEventListener("resize",this.resizedWindow),window.addEventListener("scroll",(function(){console.log(window.scrollY),window.scrollY<694?t.selectedNav=1:window.scrollY<4528?t.selectedNav=2:t.selectedNav=3}))},methods:{clickedIntro:function(t){this.selectedNav=t,window.scroll({top:document.getElementById("intro").offsetTop+-60,behavior:"smooth"})},clickedProjects:function(t){this.selectedNav=t,window.scroll({top:document.getElementById("projects-container").offsetTop+-60,behavior:"smooth"})},clickedContact:function(t){this.selectedNav=t,window.scroll({top:document.getElementById("contact-container").offsetTop+-60,behavior:"smooth"})}}},m=g,u=(a("311a"),a("6544")),C=a.n(u),x=a("132d"),h=a("269a"),w=a.n(h),_=a("5607"),j=Object(n["a"])(m,v,f,!1,null,"7a014b9c",null),k=j.exports;C()(j,{VIcon:x["a"]}),w()(j,{Ripple:_["a"]}),s["a"].use(b["a"]);var M=[{path:"/",name:"Home",component:k}],N=new b["a"]({mode:"history",base:"/portfolio-gabin/",routes:M}),E=N;s["a"].config.productionTip=!1,new s["a"]({vuetify:p,router:E,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("7694"),i=a.n(s);i.a},7694:function(t,e,a){},"8ac6":function(t,e,a){t.exports=a.p+"img/web02.1a1ff6ba.png"},"8b93":function(t,e,a){t.exports=a.p+"img/web04.249bda70.png"},9493:function(t,e,a){t.exports=a.p+"img/web-dashboard01.3af31f0f.png"},a555:function(t,e,a){t.exports=a.p+"img/web05.5ee67576.png"},a720:function(t,e,a){t.exports=a.p+"img/web06.c3c6ecd6.png"},c7fe:function(t,e,a){t.exports=a.p+"img/web-kakao.9f15ae4e.png"},ca3b:function(t,e,a){t.exports=a.p+"img/sj-ez.347015ad.png"},e8f7:function(t,e,a){t.exports=a.p+"img/web-ms.3a011ee9.png"},ebe0:function(t,e,a){t.exports=a.p+"img/web03.47b318ad.png"}});
//# sourceMappingURL=app.ac09d67e.js.map