(function(e){function t(t){for(var r,s,c=t[0],l=t[1],i=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticClass:"text-uppercase",attrs:{router:"",to:"/"}},[n("v-btn",{attrs:{text:"",router:"",to:"/",color:"primary"}},[n("span",{staticClass:"white--text"},[e._v("LMS")])])],1),n("v-spacer"),e.$route.meta.is_login?e._e():n("v-btn",{attrs:{text:"",router:"",to:"/login",color:"primary"}},[n("span",{staticClass:"white--text"},[e._v("Sign In")])])],1)],1)},c=[],l={name:"Navbar",data:function(){return{drawer:!1,links:[{icon:"dashboard",text:"Dashboard",route:"/dashboard"},{icon:"folder",text:"Projects"},{icon:"person",text:"Team",route:"/team"}],expand_on_hover:!0}}},i=l,u=n("2877"),p=n("6544"),d=n.n(p),f=n("40dc"),v=n("8336"),b=n("2fa4"),h=n("2a7f"),m=Object(u["a"])(i,s,c,!1,null,"7d37e5e0",null),_=m.exports;d()(m,{VAppBar:f["a"],VBtn:v["a"],VSpacer:b["a"],VToolbarTitle:h["a"]});var w={name:"App",components:{Navbar:_},data:function(){return{}}},g=w,x=n("7496"),y=Object(u["a"])(g,a,o,!1,null,null,null),j=y.exports;d()(y,{VApp:x["a"]});var O=n("8c4f"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[e._v(" Home "+e._s(e.test)+" ")])},C=[],k={name:"Home",components:{},data:function(){return{test:"A"}}},S=k,T=n("a75b"),P=Object(u["a"])(S,V,C,!1,null,null,null),$=P.exports;d()(P,{VContent:T["a"]});var A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],M={},D=Object(u["a"])(M,A,E,!1,null,null,null),B=D.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("h1",[e._v("Dash")])])},L=[],N={name:"Dashboard",data:function(){return{}}},F=N,J=Object(u["a"])(F,H,L,!1,null,null,null),I=J.exports;d()(J,{VContent:T["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",[n("v-card-text",[e.show_error?n("v-alert",{attrs:{type:"error"}},[e._v(e._s(e.err))]):e._e(),n("v-form",[n("v-text-field",{attrs:{label:"Username",name:"usr","prepend-icon":"person",type:"text"},model:{value:e.usr,callback:function(t){e.usr=t},expression:"usr"}}),n("v-text-field",{attrs:{id:"password",label:"Password",name:"pwd","prepend-icon":"lock",type:"password"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("Sign in")])],1)],1)],1)],1)],1)],1)},U=[],q=n("d4ec"),z=n("bee2"),G=n("bc3a"),K=n.n(G),Q=function(){function e(){Object(q["a"])(this,e)}return Object(z["a"])(e,[{key:"login",value:function(e,t){return K.a.post("api/method/login",{usr:e,pwd:t,device:"desktop"},{headers:{"Content-Type":"application/json"}})}}]),e}(),W=new Q,X={name:"Login",data:function(){return{usr:"",pwd:"",err:"",show_error:!1}},methods:{login:function(){var e=this;this.show_error=!1,W.login(this.usr,this.pwd).then((function(e){console.log(e)})).catch((function(t){var n=t&&t.response&&t.response.data&&t.response.data.message;e.err=n,e.show_error=!0}))}}},Y=X,Z=n("0798"),ee=n("b0af"),te=n("99d9"),ne=n("62ad"),re=n("a523"),ae=n("4bd4"),oe=n("0fd9"),se=n("8654"),ce=Object(u["a"])(Y,R,U,!1,null,null,null),le=ce.exports;d()(ce,{VAlert:Z["a"],VBtn:v["a"],VCard:ee["a"],VCardActions:te["a"],VCardText:te["b"],VCol:ne["a"],VContainer:re["a"],VContent:T["a"],VForm:ae["a"],VRow:oe["a"],VSpacer:b["a"],VTextField:se["a"]}),r["a"].use(O["a"]);var ie=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:B},{path:"/dashboard",name:"Dashboard",component:I},{path:"/login",name:"Login",component:le,meta:{is_login:!0}}],ue=new O["a"]({routes:ie}),pe=ue,de=n("2f62");r["a"].use(de["a"]);var fe=new de["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ve=(n("1f54"),n("d1e78"),n("f309"));r["a"].use(ve["a"]);var be=new ve["a"]({icons:[{iconfont:"fa4"},{iconfont:"md"}]});r["a"].config.productionTip=!1,new r["a"]({router:pe,store:fe,vuetify:be,render:function(e){return e(j)}}).$mount("#app")}});