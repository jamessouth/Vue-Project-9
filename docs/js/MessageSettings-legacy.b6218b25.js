(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MessageSettings"],{"07d8":function(e,t,n){"use strict";var r=n("5aee"),i=n("9f79"),o="Set";e.exports=n("ada4")(o,function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(i(this,o),e=0===e?0:e,e)}},r)},"0b64":function(e,t,n){var r=n("f772"),i=n("9003"),o=n("5168")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),r(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},2728:function(e,t,n){},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),s=n("0390"),a=n("9def"),c=n("5f1b"),u=n("520a"),l=Math.min,f=[].push,p="split",d="length",h="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("214f")("split",2,function(e,t,n,m){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var o,s,a,c=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=void 0===t?4294967295:t>>>0,m=new RegExp(e.source,l+"g");while(o=u.call(m,i)){if(s=m[h],s>p&&(c.push(i.slice(p,o.index)),o[d]>1&&o.index<i[d]&&f.apply(c,o.slice(1)),a=o[0][d],p=s,c[d]>=v))break;m[h]===o.index&&m[h]++}return p===i[d]?!a&&m.test("")||c.push(""):c.push(i.slice(p)),c[d]>v?c.slice(0,v):c}:"0"[p](void 0,0)[d]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):g.call(String(i),n,r)},function(e,t){var r=m(g,e,this,t,g!==n);if(r.done)return r.value;var u=i(e),f=String(this),p=o(u,RegExp),d=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),_=new p(v?u:"^(?:"+u.source+")",h),b=void 0===t?4294967295:t>>>0;if(0===b)return[];if(0===f.length)return null===c(_,f)?[f]:[];var w=0,O=0,S=[];while(O<f.length){_.lastIndex=v?O:0;var x,y=c(_,v?f:f.slice(O));if(null===y||(x=l(a(_.lastIndex+(v?0:O)),f.length))===w)O=s(f,O,d);else{if(S.push(f.slice(w,O)),S.length===b)return S;for(var I=1;I<=y.length-1;I++)if(S.push(y[I]),S.length===b)return S;O=w=x}}return S.push(f.slice(w)),S}]})},"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},4517:function(e,t,n){var r=n("a22a");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},"48aa":function(e,t,n){"use strict";var r=n("9750"),i=n.n(r);i.a},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d8e8"),o=n("4bf8"),s=n("79e5"),a=[].sort,c=[1,2,3];r(r.P+r.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!n("2f21")(a)),"Array",{sort:function(e){return void 0===e?a.call(o(this)):a.call(o(this),i(e))}})},"57b1":function(e,t,n){var r=n("d864"),i=n("335c"),o=n("241e"),s=n("b447"),a=n("bfac");e.exports=function(e,t){var n=1==e,c=2==e,u=3==e,l=4==e,f=6==e,p=5==e||f,d=t||a;return function(t,a,h){for(var v,m,g=o(t),_=i(g),b=r(a,h,3),w=s(_.length),O=0,S=n?d(t,w):c?d(t,0):void 0;w>O;O++)if((p||O in _)&&(v=_[O],m=b(v,O,g),e))if(n)S[O]=m;else if(m)switch(e){case 3:return!0;case 5:return v;case 6:return O;case 2:S.push(v)}else if(l)return!1;return f?-1:u||l?l:S}}},"57e3":function(e,t,n){n("68f7")("Set")},"5aee":function(e,t,n){"use strict";var r=n("d9f6").f,i=n("a159"),o=n("5c95"),s=n("d864"),a=n("1173"),c=n("a22a"),u=n("30f1"),l=n("50ed"),f=n("4c95"),p=n("8e60"),d=n("ebfd").fastKey,h=n("9f79"),v=p?"_s":"size",m=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,u){var l=e(function(e,r){a(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=r&&c(r,n,e[u],e)});return o(l.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=h(this,t),r=m(n,e);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(e){h(this,t);var n,r=s(e,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){r(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(e){return!!m(h(this,t),e)}}),p&&r(l.prototype,"size",{get:function(){return h(this,t)[v]}}),l},def:function(e,t,n){var r,i,o=m(e,t);return o?o.v=n:(e._l=o={i:i=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[v]++,"F"!==i&&(e._i[i]=o)),e},getEntry:m,setStrong:function(e,t,n){u(e,t,function(e,n){this._t=h(e,t),this._k=n,this._l=void 0},function(){var e=this,t=e._k,n=e._l;while(n&&n.r)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(e._t=void 0,l(1))},n?"entries":"values",!n,!0),f(t)}}},"68f7":function(e,t,n){"use strict";var r=n("63b6"),i=n("79aa"),o=n("d864"),s=n("a22a");e.exports=function(e){r(r.S,e,{from:function(e){var t,n,r,a,c=arguments[1];return i(this),t=void 0!==c,t&&i(c),void 0==e?new this:(n=[],t?(r=0,a=o(c,arguments[2],2),s(e,!1,function(e){n.push(a(e,r++))})):s(e,!1,n.push,n),new this(n))}})}},7075:function(e,t,n){"use strict";var r=n("63b6");e.exports=function(e){r(r.S,e,{of:function(){var e=arguments.length,t=new Array(e);while(e--)t[e]=arguments[e];return new this(t)}})}},"74be":function(e,t,n){var r=n("63b6");r(r.P+r.R,"Set",{toJSON:n("f228")("Set")})},7655:function(e,t,n){"use strict";var r=n("b563"),i=n.n(r);i.a},"8e73":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Message"),n("Settings")],1)},i=[],o=(n("cadf"),n("551c"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"messages"},[n("form",{attrs:{autocomplete:"off"}},[n("fieldset",[n("legend",[e._v("message user")]),n("label",{attrs:{for:"user_search"}},[e._v("search for user")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameInput,expression:"nameInput"}],attrs:{spellcheck:"false",list:"names",id:"user_search",name:"search",type:"search",placeholder:"Search for User"},domProps:{value:e.nameInput},on:{input:function(t){t.target.composing||(e.nameInput=t.target.value)}}}),n("datalist",{attrs:{id:"names"}},e._l(e.userList,function(t,r){return n("option",{key:r},[e._v(e._s(t.name))])}),0),n("label",{attrs:{for:"message"}},[e._v("message for user")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageInput,expression:"messageInput"}],attrs:{name:"message",placeholder:"Message for User",id:"message"},domProps:{value:e.messageInput},on:{input:function(t){t.target.composing||(e.messageInput=t.target.value)}}})]),n("transition",{attrs:{name:"sent"},on:{"after-enter":e.afterEnter,"before-leave":e.beforeLeave}},[e.sent?n("p",[e._v(e._s(e.popupMessage))]):e._e()]),n("BigButton",{attrs:{text:"Send"},nativeOn:{click:function(t){return e.handleClick(t)}}})],1)])}),s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{attrs:{type:"button"}},[e._v(e._s(e.text))])},c=[],u={props:["text"],name:"BigButton"},l=u,f=(n("e631"),n("2877")),p=Object(f["a"])(l,a,c,!1,null,"8d32c876",null);p.options.__file="BigButton.vue";var d=p.exports,h={name:"Message",data:function(){return{nameInput:null,messageInput:null,sent:!1}},computed:{userList:function(){return this.$store.state.users},popupMessage:function(){return this.nameInput&&this.messageInput?"Message sent!":"Both fields required"}},methods:{handleClick:function(){this.sent=!0},afterEnter:function(){this.sent=!1},beforeLeave:function(){this.nameInput&&this.messageInput&&(this.nameInput="",this.messageInput="")}},components:{BigButton:d}},v=h,m=(n("7655"),Object(f["a"])(v,o,s,!1,null,"47baadc8",null));m.options.__file="Message.vue";var g=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("form",[n("fieldset",[n("legend",[e._v("settings")]),n("SwitchTwoWay",{attrs:{label:"Send Email",name:"email"},on:{"store-onOff":function(t){e.email=t}}}),n("SwitchTwoWay",{attrs:{label:"Set Profile",name:"profile"},on:{"store-onOff":function(t){e.profile=t}}}),n("DropDownMenu",{attrs:{name:"Timezone"},on:{"store-timezone":function(t){e.timezone=t}}})],1),n("transition",{attrs:{name:"saved"},on:{"after-enter":e.afterEnter}},[e.saved?n("p",[e._v(e._s(e.popupMessage))]):e._e()]),n("BigButton",{attrs:{text:"Save"},nativeOn:{click:function(t){e.timezone&&e.setSettings({timezone:e.timezone,email:e.email,profile:e.profile}),e.handleClick()}}})],1)])},b=[],w=n("cebc"),O=n("2f62"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v(e._s(e.label))]),n("div",{style:{background:e.switchOn?"linear-gradient(to bottom right, #a6aaf2, #40448c)":"linear-gradient(to bottom right, #ea4e51, #840000)"},on:{click:e.handleClick}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.switchOn,expression:"switchOn"}],attrs:{id:e.onID,type:"radio",value:"true"},domProps:{checked:e._q(e.switchOn,"true")},on:{change:function(t){e.switchOn="true"}}}),n("label",{style:{display:e.switchOn?"block":"none"},attrs:{for:e.onID},on:{click:function(e){e.preventDefault()}}},[e._v("on")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.switchOn,expression:"switchOn"}],attrs:{id:e.offID,type:"radio",value:"false"},domProps:{checked:e._q(e.switchOn,"false")},on:{change:function(t){e.switchOn="false"}}}),n("label",{style:e.offLabel,attrs:{for:e.offID},on:{click:function(e){e.preventDefault()}}},[e._v("off")])])])},x=[],y=(n("7f7f"),{name:"SwitchTwoWay",props:["label","name"],data:function(){return{switchOn:!0}},methods:{handleClick:function(){this.switchOn=!this.switchOn,this.$emit("store-onOff",this.switchOn)}},mounted:function(){localStorage.getItem("settings")&&(this.switchOn=JSON.parse(localStorage.getItem("settings"))[this.name])},computed:{offID:function(){return"off-".concat(this.name)},onID:function(){return"on-".concat(this.name)},offLabel:function(){return{display:this.switchOn?"none":"block",right:"10px",left:"inherit"}}}}),I=y,k=(n("9526"),Object(f["a"])(I,S,x,!1,null,"0d10ce46",null));k.options.__file="SwitchTwoWay.vue";var C=k.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.forAttr}},[e._v("select "+e._s(e.name.toLowerCase()))]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{required:"",name:e.forAttr,id:e.forAttr},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]},function(t){e.$emit("store-timezone",e.selected)}]}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select "+e._s(e.name))]),e._l(e.tzOptions,function(t,r){return n("option",{key:r,style:{color:"#676666"},domProps:{value:t}},[e._v(e._s(t)+"\n    ")])})],2)])},z=[],N=(n("96cf"),n("3b8d")),D=n("b6d0"),M=n.n(D),T=(n("55dd"),n("75fc")),j=(n("a481"),n("28a5"),{name:"DropDownMenu",data:function(){return{tzOptions:[],selected:"",timezoneFetch:"https://en.wikipedia.org/w/api.php?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=*"}},props:["name"],created:function(){this.loadOptions()},mounted:function(){localStorage.getItem("settings")&&(this.selected=JSON.parse(localStorage.getItem("settings")).timezone)},computed:{forAttr:function(){return this.name.toLowerCase()}},methods:{cutOutTable:function(e){return e.substring(e.indexOf("<tr>"),e.lastIndexOf("</tr>")+5)},splitIntoRows:function(e){return e.split("</tr>\n<tr>")},removeColumnHeaders:function(e){return e.splice(1)},pipe:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},splitIntoColumns:function(e){return e.split("</td>\n<td>")},removeUnneededColumns:function(e){return e[2].trim()?e[3].trim()?[e[0],"".concat(e[2],",").concat(e[3])]:[e[0],e[2]]:[e[0],e[3]]},removeHTMLandParens:function(e){return e.map(function(e){return e.replace(/\n*<([^>]*)>\n*/g,"").replace(/ *\(([^)]*)\)/g,"")})},splitCountries:function(e){return[e[0]].concat(Object(T["a"])(e[1].split(/, ?/)))},trimCountryNames:function(e){return e.map(function(e){return e.trim()})},finalTouches:function(e){return[e[0]].concat(Object(T["a"])(e.slice(1).map(function(e){return e.replace(/South Georgia and the South Sandwich Islands/,"S Georgia/S Sandwich Islands").replace(/British Indian Ocean Territory/,"BIOT").replace(/,/,"").replace(/Democratic Republic of the Congo/,"DR Congo").replace(/[&#\d;]/g,"")})))},sortNames:function(e){return[e[0]].concat(Object(T["a"])(e.slice(1).sort(function(e,t){return e>t?1:-1})))},removeBlanks:function(e){return e.filter(function(e){return!!e})},deDupe:function(e){return Object(T["a"])(new M.a(e))},makeOptions:function(e){return e.slice(1).map(function(t,n,r){return"".concat(e[0],"  ").concat(r[n])})},loadOptions:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.timezoneFetch);case 3:if(t=e.sent,!t.ok){e.next=10;break}return e.next=7,t.json();case 7:t=e.sent,e.next=11;break;case 10:throw new Error("Network problem - response not ok");case 11:this.tzOptions=[this.cutOutTable,this.splitIntoRows,this.removeColumnHeaders].reduce(function(e,t){return t(e)},t.parse.text["*"]).map(this.pipe(this.splitIntoColumns,this.removeUnneededColumns,this.removeHTMLandParens,this.splitCountries,this.trimCountryNames,this.finalTouches,this.sortNames,this.removeBlanks,this.deDupe,this.makeOptions)).reduce(function(e,t){return[].concat(Object(T["a"])(e),Object(T["a"])(t))}),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),alert("There was a problem grabbing the data: ".concat(e.t0,".  Please try again."));case 17:case"end":return e.stop()}},e,this,[[0,14]])}));function t(){return e.apply(this,arguments)}return t}()}}),B=j,J=(n("48aa"),Object(f["a"])(B,E,z,!1,null,"0a9f7bce",null));J.options.__file="DropDownMenu.vue";var P=J.exports,A={name:"Settings",data:function(){return{saved:!1,timezone:JSON.parse(localStorage.getItem("settings"))?JSON.parse(localStorage.getItem("settings")).timezone:null,email:!JSON.parse(localStorage.getItem("settings"))||JSON.parse(localStorage.getItem("settings")).email,profile:!JSON.parse(localStorage.getItem("settings"))||JSON.parse(localStorage.getItem("settings")).profile}},methods:Object(w["a"])({},Object(O["b"])(["setSettings"]),{handleClick:function(){this.saved=!0},afterEnter:function(){this.saved=!1}}),computed:{popupMessage:function(){return this.timezone?"Your settings have been saved":"Please select a timezone"}},components:{BigButton:d,SwitchTwoWay:C,DropDownMenu:P}},L=A,R=(n("f8d6"),Object(f["a"])(L,_,b,!1,null,"93ee21ca",null));R.options.__file="Settings.vue";var $=R.exports,F={name:"MessageSettings",components:{Message:g,Settings:$}},W=F,q=(n("d302"),Object(f["a"])(W,r,i,!1,null,"558acbfd",null));q.options.__file="MessageSettings.vue";t["default"]=q.exports},9526:function(e,t,n){"use strict";var r=n("d7bf"),i=n.n(r);i.a},9750:function(e,t,n){},"9f79":function(e,t,n){var r=n("f772");e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},ada4:function(e,t,n){"use strict";var r=n("e53d"),i=n("63b6"),o=n("ebfd"),s=n("294c"),a=n("35e8"),c=n("5c95"),u=n("a22a"),l=n("1173"),f=n("f772"),p=n("45f2"),d=n("d9f6").f,h=n("57b1")(0),v=n("8e60");e.exports=function(e,t,n,m,g,_){var b=r[e],w=b,O=g?"set":"add",S=w&&w.prototype,x={};return v&&"function"==typeof w&&(_||S.forEach&&!s(function(){(new w).entries().next()}))?(w=t(function(t,n){l(t,w,e,"_c"),t._c=new b,void 0!=n&&u(n,g,t[O],t)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in S&&(!_||"clear"!=e)&&a(w.prototype,e,function(n,r){if(l(this,w,e),!t&&_&&!f(n))return"get"==e&&void 0;var i=this._c[e](0===n?0:n,r);return t?this:i})}),_||d(w.prototype,"size",{get:function(){return this._c.size}})):(w=m.getConstructor(t,e,g,O),c(w.prototype,n),o.NEED=!0),p(w,e),x[e]=w,i(i.G+i.W+i.F,x),_||m.setStrong(w,e,g),w}},b563:function(e,t,n){},b6d0:function(e,t,n){e.exports=n("fa2b")},bfac:function(e,t,n){var r=n("0b64");e.exports=function(e,t){return new(r(e))(t)}},c6fb:function(e,t,n){n("7075")("Set")},d302:function(e,t,n){"use strict";var r=n("dc14"),i=n.n(r);i.a},d7bf:function(e,t,n){},dc14:function(e,t,n){},df5c:function(e,t,n){},e631:function(e,t,n){"use strict";var r=n("df5c"),i=n.n(r);i.a},f228:function(e,t,n){var r=n("40c3"),i=n("4517");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},f8d6:function(e,t,n){"use strict";var r=n("2728"),i=n.n(r);i.a},fa2b:function(e,t,n){n("c207"),n("1654"),n("6c1c"),n("07d8"),n("74be"),n("c6fb"),n("57e3"),e.exports=n("584a").Set}}]);
//# sourceMappingURL=MessageSettings-legacy.b6218b25.js.map