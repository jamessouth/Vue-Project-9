(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MembersActivity"],{"11e9":function(t,e,a){var i=a("52a7"),n=a("4630"),r=a("6821"),s=a("6a99"),c=a("69a8"),o=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=r(t),e=s(e,!0),o)try{return l(t,e)}catch(a){}if(c(t,e))return n(!i.f.call(t,e),t[e])}},"3b2b":function(t,e,a){var i=a("7726"),n=a("5dbc"),r=a("86cc").f,s=a("9093").f,c=a("aae3"),o=a("0bfb"),l=i.RegExp,m=l,p=l.prototype,u=/a/g,h=/a/g,f=new l(u)!==u;if(a("9e1e")&&(!f||a("79e5")(function(){return h[a("2b4c")("match")]=!1,l(u)!=u||l(h)==h||"/a/i"!=l(u,"i")}))){l=function(t,e){var a=this instanceof l,i=c(t),r=void 0===e;return!a&&i&&t.constructor===l&&r?t:n(f?new m(i&&!r?t.source:t,e):m((i=t instanceof l)?t.source:t,i&&r?o.call(t):e),a?this:p,l)};for(var b=function(t){t in l||r(l,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},v=s(m),d=0;v.length>d;)b(v[d++]);p.constructor=l,l.prototype=p,a("2aba")(i,"RegExp",l)}a("7a56")("RegExp")},"405a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members_activity",attrs:{id:"members"}},[a("div",{staticClass:"new-members"},[a("p",[t._v("new members")]),t._l(t.newMembersActivityData.slice(0,5),function(t,e){return a("NewMemberRecActivity",{key:e,attrs:{name:t.name,email:t.email,photo:t.photo,date:t.date,isArabic:t.isArabic}})})],2),a("div",{staticClass:"rec-activity"},[a("p",[t._v("recent activity")]),t._l(t.activityData,function(t,e){return a("NewMemberRecActivity",{key:e,attrs:{name:t.name,action:t.action,photo:t.photo,isArabic:t.isArabic,time:t.time}})})],2)])},n=[],r=(a("a481"),a("3b2b"),a("be94")),s=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"member",style:t.divMrgn},[a("img",{staticClass:"m-a-imgs",attrs:{src:t.imgSrc,alt:"user face or avatar"}}),a("div",{staticClass:"mem-act"},[a("div",[a("p",{style:t.nameFont},[t._v(t._s(t.name))]),t.date?a("p",[t._v(t._s(t._f("moment")(t.date,"M/DD/YY")))]):a("p",[t._v(t._s(t._f("moment")(t.time,"h:mm:ss a M/DD/YY")))])]),a("p",{style:t.emailActStyle,attrs:{tabindex:"0"}},[t._v(t._s(t.emailOrAction))])])])},o=[],l={name:"Member",props:["name","email","photo","isArabic","action","date","time"],computed:{divMrgn(){return{margin:this.email?"1em 0 0 0":"1em auto 0",height:this.email?"80px":"100px"}},emailActStyle(){return{color:this.email?"#7377bf":"#676666",fontFamily:"'Josefin Slab', serif",fontWeight:"600"}},emailOrAction(){return this.email?this.email:this.action.comment?`${this.action.long} - "${this.action.comment}"`:this.action.long},nameFont(){return{fontFamily:this.isArabic?"'Amiri', serif":"'Alegreya Sans SC', sans-serif",letterSpacing:this.isArabic?"2px":"normal",lineHeight:this.isArabic?"21px":"normal",fontSize:this.isArabic?"21px":"16px"}},imgSrc(){return this.photo?this.photo:"../assets/loading.png"}}},m=l,p=(a("8b15"),a("2877")),u=Object(p["a"])(m,c,o,!1,null,"198a3381",null);u.options.__file="NewMemberRecActivity.vue";var h=u.exports,f={name:"MembersActivity",data(){return{count:0,act:null,timer:null,lastTime:7195,newMembersActivityData:[],activityData:[]}},components:{NewMemberRecActivity:h},created(){this.getUserData()},methods:Object(r["a"])({},Object(s["b"])(["setUsers"]),{rando(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*t)+e},loadActivitiesData(t){this.timer=requestAnimationFrame(this.loadActivitiesData);const e=this.rando(2494,379);t>this.lastTime&&(this.lastTime+=e,this.count+=1,this.act=Object(r["a"])({},this.newMembersActivityData[this.rando(this.newMembersActivityData.length)],{action:this.makeAction(),time:this.$moment()}),this.activityData.unshift(this.act),this.count>10&&cancelAnimationFrame(this.timer))},isArabic(t){return!new RegExp(/[A-zÀ-ÿğŞı]+/gim).test(t)},makeAction(){const t=["commented on a post","posted","liked a post","shared a post","tweeted a post","retweeted a post"],e=["Is Vue the awesomest framework? Prolly","Linting for Fun and Profit","SEO Tips","Facebook's Changes for 2018","Moving to AWS","Mobile Web Update"],a=["Amazing!","Awesome!","Excellent!","Wow! This is great!","Nice work!","Sweet!"],i=t[this.rando(t.length)],n={long:`${i}: ${e[this.rando(t.length)]}`};return n.long.includes("comment")?Object(r["a"])({},n,{comment:`${a[this.rando(t.length)]}`}):n},caps(t){return`${t[0].toUpperCase()}${t.substring(1)}`},makeName(t){let e=t.first.trim(),a=t.last.trim();return e=e.replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi,this.caps).replace(/jean-/,"Jean-").replace(/filipe/,"Filipe").replace(/hans-/,"Hans-").replace(/zine-/,"Zine-").replace(/sue-/,"Sue-").replace(/ernst-/,"Ernst-").replace(/klaus-/,"Klaus-").replace(/aart-/,"Aart-").replace(/anne-/,"Anne-").replace(/franz-/,"Franz-"),a=a.replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi,this.caps).replace(/cdonal/,"cDonal").replace(/toole/,"'Toole").replace(/brien/,"'Brien").replace(/donoghue/,"'Donoghue").replace(/mahony/,"'Mahony").replace(/(\w)\1{2}/g,"$1$1").replace(/jean-/,"Jean-").replace(/^mccoy/i,"McCoy").replace(/^mckinney/i,"McKinney"),`${e} ${a}`},processData(t,e){const a={name:this.makeName(t.name),photo:t.picture.thumbnail,isArabic:this.isArabic(t.name.first)};return e<5?Object(r["a"])({},a,{email:t.email,date:this.$moment().subtract(e,"days")}):a},async getUserData(){const t=10;try{let a=await fetch(`https://randomuser.me/api/?results=${t}&inc=name,email,picture&noinfo`);if(!a.ok)throw new Error("Network problem - response not ok");a=await a.json();for(let e=0;e<t;e+=1)this.$set(this.newMembersActivityData,e,this.processData(a.results[e],e));this.setUsers(this.newMembersActivityData),this.timer=requestAnimationFrame(this.loadActivitiesData)}catch(e){alert(`There was a problem grabbing the data: ${e}.  Please try again.`)}}})},b=f,v=(a("acc2"),Object(p["a"])(b,i,n,!1,null,"4153f4eb",null));v.options.__file="MembersActivity.vue";e["default"]=v.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var i=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var r,s=e.constructor;return s!==a&&"function"==typeof s&&(r=s.prototype)!==a.prototype&&i(r)&&n&&n(t,r),t}},"7a56":function(t,e,a){"use strict";var i=a("7726"),n=a("86cc"),r=a("9e1e"),s=a("2b4c")("species");t.exports=function(t){var e=i[t];r&&e&&!e[s]&&n.f(e,s,{configurable:!0,get:function(){return this}})}},"8b15":function(t,e,a){"use strict";var i=a("bb74"),n=a.n(i);n.a},"8b97":function(t,e,a){var i=a("d3f4"),n=a("cb7c"),r=function(t,e){if(n(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return r(t,a),e?t.__proto__=a:i(t,a),t}}({},!1):void 0),check:r}},9093:function(t,e,a){var i=a("ce10"),n=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},a618:function(t,e,a){},aae3:function(t,e,a){var i=a("d3f4"),n=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},acc2:function(t,e,a){"use strict";var i=a("a618"),n=a.n(i);n.a},bb74:function(t,e,a){}}]);
//# sourceMappingURL=MembersActivity.7ba5e2a6.js.map