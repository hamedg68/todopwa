(function(e){function t(t){for(var n,a,l=t[0],s=t[1],c=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==i[s]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("ac1f"),o("00b4");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-main",[o("router-view")],1)],1)},r=[],a={name:"App",data:function(){return{}}},l=a,s=o("2877"),c=o("6544"),u=o.n(c),d=o("7496"),f=o("f6c4"),v=Object(s["a"])(l,i,r,!1,null,null,null),p=v.exports;u()(v,{VApp:d["a"],VMain:f["a"]});var m=o("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=o("8c4f"),b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-snackbar",{attrs:{vertical:!1,timeout:e.installDialogTimeout},model:{value:e.installDialog,callback:function(t){e.installDialog=t},expression:"installDialog"}},[[o("p",{staticClass:"text-center"},[e._v(" آیا میخواهید app را نصب کنید؟")]),o("div",{staticClass:"d-flex justify-end"},[o("v-btn",{attrs:{color:"green",text:""},on:{click:e.installApp}},[e._v("بله نصب کن ")]),o("v-btn",{attrs:{color:"indigo",text:""},on:{click:e.dismissInstall}},[e._v("خیر ")])],1)]],2),o("v-row",{staticClass:"justify-center"},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-card",{staticClass:"pa-4",attrs:{elevation:"2"}},[o("v-card-title",[e._v(" TODO your works body ")]),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("v-text-field",{attrs:{label:"What is your work title?",placeholder:"write your work title here...",outlined:"",dense:"",clearable:""},model:{value:e.item.title,callback:function(t){e.$set(e.item,"title",t)},expression:"item.title"}}),o("v-text-field",{attrs:{label:"What to do?",placeholder:"write your work here...",outlined:"",dense:"",clearable:""},model:{value:e.item.content,callback:function(t){e.$set(e.item,"content",t)},expression:"item.content"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("v-btn",{attrs:{color:"green",block:"",dark:""},on:{click:function(t){return e.saveToDo()}}},[e._v(" save Todo ")])],1)],1),0!==e.items.length?o("div",[o("br"),o("v-divider"),o("v-list",{attrs:{flat:"",subheader:"","three-line":""}},[o("v-subheader",[e._v("Todo List")]),o("v-list-item-group",{attrs:{multiple:"","active-class":""}},[e._l(e.items,(function(t,n){return o("v-list-item",{key:n,scopedSlots:e._u([{key:"default",fn:function(n){n.active;return[o("v-list-item-action",[o("v-checkbox",{model:{value:t.active,callback:function(o){e.$set(t,"active",o)},expression:"item.active"}})],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(t.title))]),o("v-list-item-subtitle",[e._v(e._s(t.content))])],1)]}}],null,!0)})})),o("v-btn",{attrs:{color:"red",dark:"",block:""},on:{click:e.removeDoneTodos}},[e._v(" remove done todos ")])],2)],1)],1):e._e()],1)],1)],1)],1)},g=[],w=(o("a434"),o("e9c4"),{name:"Home",components:{},data:function(){return{item:{title:"",content:"",active:!1},items:[],installDialog:!1,installDialogTimeout:1e4,differedPrompt:null}},methods:{saveToDo:function(){""!==this.item.title&&(this.items.push(this.item),this.item={title:"",content:"",active:!1})},removeDoneTodos:function(){var e=this.items.length;while(e--)!0===this.items[e].active&&this.items.splice(e,1)},installApp:function(){var e=this;this.installDialog=!1,this.differedPrompt.prompt(),this.differedPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("user accepted the A2HS prompt"):console.log("user dismissed the A2HS prompt"),e.installDialog=!1,e.differedPrompt=null}))},dismissInstall:function(){this.installDialog=!1}},watch:{items:{handler:function(){localStorage.setItem("todos",JSON.stringify(this.items))}}},mounted:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.differedPrompt=t,e.isMobileCheck&&(e.installDialog=!0)})),localStorage.getItem("todos")&&(this.items=JSON.parse(localStorage.getItem("todos")))}}),k=w,y=o("8336"),_=o("b0af"),x=o("99d9"),V=o("ac7c"),O=o("62ad"),P=o("a523"),D=o("ce7e"),S=o("8860"),j=o("da13"),A=o("1800"),C=o("5d23"),T=o("1baa"),I=o("0fd9"),L=o("2db4"),M=o("e0c7"),$=o("8654"),N=Object(s["a"])(k,b,g,!1,null,null,null),E=N.exports;u()(N,{VBtn:y["a"],VCard:_["a"],VCardTitle:x["a"],VCheckbox:V["a"],VCol:O["a"],VContainer:P["a"],VDivider:D["a"],VList:S["a"],VListItem:j["a"],VListItemAction:A["a"],VListItemContent:C["a"],VListItemGroup:T["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VRow:I["a"],VSnackbar:L["a"],VSubheader:M["a"],VTextField:$["a"]}),n["a"].use(h["a"]);var H=[{path:"/",name:"Home",component:E},{path:"/about",name:"About"}],J=new h["a"]({mode:"history",base:"/",routes:H}),F=J,B=o("f309");n["a"].use(B["a"]);var W=new B["a"]({});n["a"].config.productionTip=!1,n["a"].mixin({data:function(){return{isMobileCheck:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}}}),window.isMobileCheck=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),new n["a"]({router:F,vuetify:W,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.6593e647.js.map