(function(e){function t(t){for(var r,n,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);y&&y(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,n=1;n<o.length;n++){var i=o[n];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({AlertBox:"AlertBox",BarDonut:"BarDonut",MembersActivity:"MembersActivity",MessageSettings:"MessageSettings",NavBar:"NavBar",SocialElement:"SocialElement"}[e]||e)+"."+{AlertBox:"df2d7edf",BarDonut:"091bfdd3",MembersActivity:"50697899",MessageSettings:"b67e1084",NavBar:"58e01f0f",SocialElement:"3dbf519f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o={AlertBox:1,BarDonut:1,MembersActivity:1,MessageSettings:1,NavBar:1,SocialElement:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var r="css/"+({AlertBox:"AlertBox",BarDonut:"BarDonut",MembersActivity:"MembersActivity",MessageSettings:"MessageSettings",NavBar:"NavBar",SocialElement:"SocialElement"}[e]||e)+"."+{AlertBox:"1ddecfde",BarDonut:"6fc58578",MembersActivity:"4409e640",MessageSettings:"9995aae5",NavBar:"7e1a82ce",SocialElement:"0651f663"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var y=document.createElement("link");y.rel="stylesheet",y.type="text/css",y.onload=t,y.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete n[e],y.parentNode.removeChild(y),o(c)},y.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(y)})).then((function(){n[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(y);var o=a[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,o[1](l)}a[e]=void 0}};var y=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dashboard/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var y=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"091d":function(e,t,o){},"0e64":function(e,t,o){"use strict";var r=o("091d"),n=o.n(r);n.a},2771:function(e,t,o){},4099:function(e,t,o){e.exports=o.p+"img/nodata.8d0aea6f.png"},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),n=o("2ead"),a=o.n(n),c=o("c1df"),i=o.n(c),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("HeaderBar",{on:{a2hs:function(t){e.alert=!0},a2hsOffered:function(t){e.alert=!1},head:e.header}}),o("div",{attrs:{id:"hold"}},[e.showNav?o("NavBar",{attrs:{alert:e.alert,"head-shown":e.headShown}}):e._e(),o("MainElement",{on:{"show-nav":function(t){e.showNav=!0}}})],1)],1)},u=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{ref:"head"},[e._m(0),r("div",[r("button",{class:{unclickable:!e.a2hsPrompt},attrs:{disabled:!e.a2hsPrompt},on:{click:function(t){e.openAlert=!e.openAlert}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[r("path",{staticClass:"st0",attrs:{d:"M24 18v-8c0-5.5-4.5-10-10-10S4 4.5 4 10v8l-4 8h9.1c0.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H28L24 18zM14 28c-1.3 0-2.4-0.8-2.8-2h5.6C16.4 27.2 15.3 28 14 28zM3 24l3-6v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8l3 6H3z"}})])]),r("div",{staticClass:"triangle",style:e.alertStyles}),r("div",{staticClass:"dropdown",style:e.alertStyles},[r("button",{ref:"pbut",on:{click:e.a2hs}},[e._v("Add to Home Screen")])]),r("span",{class:{blink:e.a2hsPrompt}},[e._v(".")]),r("p",[e._v("|")]),r("img",{attrs:{src:o("753c"),alt:"user face or avatar"}}),r("p",[e._v(e._s(e.name))])])])},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("MyApp"),o("span",[e._v("™")])])}],y=o("1da1"),h={name:"HeaderBar",data(){return{name:this.$store.state.name,openAlert:!1,a2hsPrompt:null,IOoptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:.5}}},computed:{alertStyles(){return{display:this.openAlert&&this.a2hsPrompt?"block":"none"}}},beforeCreate(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.a2hsPrompt=e,this.$emit("a2hs")})},mounted(){window.IntersectionObserver&&this.IOobserve()},methods:{IOcallback(e){this.$emit("head",e[0].isIntersecting)},IOobserve(){const e=new IntersectionObserver(this.IOcallback,this.IOoptions);e.observe(this.$refs.head)},a2hs(){var e=this;return Object(y["a"])((function*(){e.a2hsPrompt.prompt(),yield e.a2hsPrompt.userChoice,e.a2hsPrompt=null,e.openAlert=!1,e.$emit("a2hsOffered")}))()}}},p=h,m=(o("0e64"),o("2877")),g=Object(m["a"])(p,d,l,!1,null,"5d9b1247",null),b=g.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[e._m(0),e.newAlert?o("AlertBox",{attrs:{"reg-obj":e.rego}}):e._e(),o("router-view",[o("LineChartWrapper")],1),o("p",{ref:"BarDonut",staticClass:"IOsentinel",attrs:{id:"BarDonut"}}),e.IOflags.BarDonut?o("BarDonut"):e._e(),o("p",{ref:"Social",staticClass:"IOsentinel",attrs:{id:"Social"}}),e.IOflags.Social?o("SocialElement"):e._e(),o("p",{ref:"MembersActivity",staticClass:"IOsentinel",attrs:{id:"MembersActivity"}}),e.IOflags.MembersActivity?o("MembersActivity"):e._e(),o("p",{ref:"MessageSettings",staticClass:"IOsentinel",attrs:{id:"MessageSettings"}}),e.IOflags.MessageSettings?o("MessageSettings"):e._e()],1)},v=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-title"},[o("h1",[e._v("Dashboard")]),o("div")])}],S=(o("ac6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LineChartControls",{attrs:{country:e.country,indicator:e.indicator}}),!this.$store.state.loading&&e.isData?r("line-chart",{attrs:{"chart-data":e.chartData,options:e.chartOptions}}):this.$store.state.loading||e.isData?r("div",[e._v("Loading...")]):r("img",{attrs:{width:"300",height:"360",src:o("4099"),alt:"no data"}})],1)}),C=[],O=o("3835"),w=(o("a481"),o("ade3"));const M=[{code:"AF",country:"Afghanistan"},{code:"AL",country:"Albania"},{code:"DZ",country:"Algeria"},{code:"AS",country:"American Samoa"},{code:"AD",country:"Andorra"},{code:"AO",country:"Angola"},{code:"AG",country:"Antigua and Barbuda"},{code:"AR",country:"Argentina"},{code:"AM",country:"Armenia"},{code:"AW",country:"Aruba"},{code:"AU",country:"Australia"},{code:"AT",country:"Austria"},{code:"AZ",country:"Azerbaijan"},{code:"BS",country:"Bahamas, The"},{code:"BH",country:"Bahrain"},{code:"BD",country:"Bangladesh"},{code:"BB",country:"Barbados"},{code:"BY",country:"Belarus"},{code:"BE",country:"Belgium"},{code:"BZ",country:"Belize"},{code:"BJ",country:"Benin"},{code:"BM",country:"Bermuda"},{code:"BT",country:"Bhutan"},{code:"BO",country:"Bolivia"},{code:"BA",country:"Bosnia and Herzegovina"},{code:"BW",country:"Botswana"},{code:"BR",country:"Brazil"},{code:"VG",country:"British Virgin Islands"},{code:"BN",country:"Brunei Darussalam"},{code:"BG",country:"Bulgaria"},{code:"BF",country:"Burkina Faso"},{code:"BI",country:"Burundi"},{code:"CV",country:"Cabo Verde"},{code:"KH",country:"Cambodia"},{code:"CM",country:"Cameroon"},{code:"CA",country:"Canada"},{code:"KY",country:"Cayman Islands"},{code:"CF",country:"Central African Republic"},{code:"TD",country:"Chad"},{code:"JG",country:"Channel Islands"},{code:"CL",country:"Chile"},{code:"CN",country:"China"},{code:"CO",country:"Colombia"},{code:"KM",country:"Comoros"},{code:"CD",country:"Congo, Dem. Rep."},{code:"CG",country:"Congo, Rep."},{code:"CR",country:"Costa Rica"},{code:"CI",country:"Cote d'Ivoire"},{code:"HR",country:"Croatia"},{code:"CU",country:"Cuba"},{code:"CW",country:"Curacao"},{code:"CY",country:"Cyprus"},{code:"CZ",country:"Czech Republic"},{code:"DK",country:"Denmark"},{code:"DJ",country:"Djibouti"},{code:"DM",country:"Dominica"},{code:"DO",country:"Dominican Republic"},{code:"EC",country:"Ecuador"},{code:"EG",country:"Egypt"},{code:"SV",country:"El Salvador"},{code:"GQ",country:"Equatorial Guinea"},{code:"ER",country:"Eritrea"},{code:"EE",country:"Estonia"},{code:"ET",country:"Ethiopia"},{code:"FO",country:"Faroe Islands"},{code:"FJ",country:"Fiji"},{code:"FI",country:"Finland"},{code:"FR",country:"France"},{code:"PF",country:"French Polynesia"},{code:"GA",country:"Gabon"},{code:"GM",country:"Gambia, The"},{code:"GE",country:"Georgia"},{code:"DE",country:"Germany"},{code:"GH",country:"Ghana"},{code:"GI",country:"Gibraltar"},{code:"GR",country:"Greece"},{code:"GL",country:"Greenland"},{code:"GD",country:"Grenada"},{code:"GU",country:"Guam"},{code:"GT",country:"Guatemala"},{code:"GN",country:"Guinea"},{code:"GW",country:"Guinea-Bissau"},{code:"GY",country:"Guyana"},{code:"HT",country:"Haiti"},{code:"HN",country:"Honduras"},{code:"HK",country:"Hong Kong"},{code:"HU",country:"Hungary"},{code:"IS",country:"Iceland"},{code:"IN",country:"India"},{code:"ID",country:"Indonesia"},{code:"IR",country:"Iran"},{code:"IQ",country:"Iraq"},{code:"IE",country:"Ireland"},{code:"IM",country:"Isle of Man"},{code:"IL",country:"Israel"},{code:"IT",country:"Italy"},{code:"JM",country:"Jamaica"},{code:"JP",country:"Japan"},{code:"JO",country:"Jordan"},{code:"KZ",country:"Kazakhstan"},{code:"KE",country:"Kenya"},{code:"KI",country:"Kiribati"},{code:"XK",country:"Kosovo"},{code:"KW",country:"Kuwait"},{code:"KG",country:"Kyrgyz Republic"},{code:"LA",country:"Laos"},{code:"LV",country:"Latvia"},{code:"LB",country:"Lebanon"},{code:"LS",country:"Lesotho"},{code:"LR",country:"Liberia"},{code:"LY",country:"Libya"},{code:"LI",country:"Liechtenstein"},{code:"LT",country:"Lithuania"},{code:"LU",country:"Luxembourg"},{code:"MO",country:"Macao"},{code:"MK",country:"Macedonia"},{code:"MG",country:"Madagascar"},{code:"MW",country:"Malawi"},{code:"MY",country:"Malaysia"},{code:"MV",country:"Maldives"},{code:"ML",country:"Mali"},{code:"MT",country:"Malta"},{code:"MH",country:"Marshall Islands"},{code:"MR",country:"Mauritania"},{code:"MU",country:"Mauritius"},{code:"MX",country:"Mexico"},{code:"FM",country:"Micronesia, Fed. Sts."},{code:"MD",country:"Moldova"},{code:"MC",country:"Monaco"},{code:"MN",country:"Mongolia"},{code:"ME",country:"Montenegro"},{code:"MA",country:"Morocco"},{code:"MZ",country:"Mozambique"},{code:"MM",country:"Myanmar"},{code:"NA",country:"Namibia"},{code:"NR",country:"Nauru"},{code:"NP",country:"Nepal"},{code:"NL",country:"Netherlands"},{code:"NC",country:"New Caledonia"},{code:"NZ",country:"New Zealand"},{code:"NI",country:"Nicaragua"},{code:"NE",country:"Niger"},{code:"NG",country:"Nigeria"},{code:"KP",country:"North Korea"},{code:"MP",country:"Northern Mariana Islands"},{code:"NO",country:"Norway"},{code:"OM",country:"Oman"},{code:"PK",country:"Pakistan"},{code:"PW",country:"Palau"},{code:"PA",country:"Panama"},{code:"PG",country:"Papua New Guinea"},{code:"PY",country:"Paraguay"},{code:"PE",country:"Peru"},{code:"PH",country:"Philippines"},{code:"PL",country:"Poland"},{code:"PT",country:"Portugal"},{code:"PR",country:"Puerto Rico"},{code:"QA",country:"Qatar"},{code:"RO",country:"Romania"},{code:"RU",country:"Russian Federation"},{code:"RW",country:"Rwanda"},{code:"WS",country:"Samoa"},{code:"SM",country:"San Marino"},{code:"ST",country:"Sao Tome and Principe"},{code:"SA",country:"Saudi Arabia"},{code:"SN",country:"Senegal"},{code:"RS",country:"Serbia"},{code:"SC",country:"Seychelles"},{code:"SL",country:"Sierra Leone"},{code:"SG",country:"Singapore"},{code:"SX",country:"Sint Maarten (Dutch part)"},{code:"SK",country:"Slovak Republic"},{code:"SI",country:"Slovenia"},{code:"SB",country:"Solomon Islands"},{code:"SO",country:"Somalia"},{code:"ZA",country:"South Africa"},{code:"KR",country:"South Korea"},{code:"SS",country:"South Sudan"},{code:"ES",country:"Spain"},{code:"LK",country:"Sri Lanka"},{code:"KN",country:"St. Kitts and Nevis"},{code:"LC",country:"St. Lucia"},{code:"MF",country:"St. Martin (French part)"},{code:"VC",country:"St. Vincent and the Grenadines"},{code:"SD",country:"Sudan"},{code:"SR",country:"Suriname"},{code:"SZ",country:"Swaziland"},{code:"SE",country:"Sweden"},{code:"CH",country:"Switzerland"},{code:"SY",country:"Syria"},{code:"TW",country:"Taiwan"},{code:"TJ",country:"Tajikistan"},{code:"TZ",country:"Tanzania"},{code:"TH",country:"Thailand"},{code:"TL",country:"Timor-Leste"},{code:"TG",country:"Togo"},{code:"TO",country:"Tonga"},{code:"TT",country:"Trinidad and Tobago"},{code:"TN",country:"Tunisia"},{code:"TR",country:"Turkey"},{code:"TM",country:"Turkmenistan"},{code:"TC",country:"Turks and Caicos Islands"},{code:"TV",country:"Tuvalu"},{code:"UG",country:"Uganda"},{code:"UA",country:"Ukraine"},{code:"AE",country:"United Arab Emirates"},{code:"GB",country:"United Kingdom"},{code:"US",country:"United States"},{code:"UY",country:"Uruguay"},{code:"UZ",country:"Uzbekistan"},{code:"VU",country:"Vanuatu"},{code:"VE",country:"Venezuela"},{code:"VN",country:"Vietnam"},{code:"VI",country:"Virgin Islands (U.S.)"},{code:"PS",country:"West Bank and Gaza"},{code:"YE",country:"Yemen"},{code:"ZM",country:"Zambia"},{code:"ZW",country:"Zimbabwe"}];var A=M,I=o("1fca");const B=I["d"].reactiveProp;var D,P,E={name:"LineChart",extends:I["c"],mixins:[B],props:{options:Object},watch:{chartOptions(e){this.renderChart(this.chartData,e)}},mounted(){this.renderChart(this.chartData,this.options)}},k=E,L=Object(m["a"])(k,D,P,!1,null,"faf1fb42",null),N=L.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"line-controls",attrs:{id:"charts"}},[o("div",{staticClass:"dropdown"},[o("label",{attrs:{for:"sel_country"}},[e._v("select country")]),e._m(0),o("button",{on:{click:e.changeCountry_Route}},[e._v("GO!")])]),o("div",{ref:"linebuttons",staticClass:"line-buttons",on:{click:e.changeIndicator_Subroute}},e._l(e.indicators,(function(t,r){return o("button",{key:r,class:{lineSelected:t.toLowerCase()===e.indicator},attrs:{value:t.toLowerCase()}},[e._v("\n      "+e._s(t)+"\n    ")])})),0),o("p",[o("a",{staticClass:"newwindow",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://data.worldbank.org/"}},[e._v("world bank data")]),e._v("  "),o("span",{style:e.spanCols},[e._v(e._s(e.loadingOrCountry))])])])},_=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("select",{attrs:{name:"sel_country",id:"sel_country"}},[o("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("Select Country")])])}],x={name:"LineChartControls",props:{country:String,indicator:String},data(){return{selectedIndicatorIndex:0,indicators:["GDP","Population","Regulation","Tax"]}},computed:{spanCols(){return{color:this.$store.state.loading?"red":"#111775"}},loadingOrCountry(){return this.$store.state.loading?"Loading...":` for: ${this.country.replace(/-/g," ")}`}},watch:{$route(e){const t=[...this.$refs.linebuttons.children].filter(t=>t.value===e.params.indicator)[0];t!==document.activeElement&&t.focus()}},mounted(){for(let e=0;e<A.length;e+=1){const t=document.createElement("option");t.textContent=`${A[e].country}`,document.querySelector("select").appendChild(t)}},methods:{changeCountry_Route(){const e=document.querySelector("select").value;this.$router.push(`/${e}`.toLowerCase().replace(/ /g,"-"))},changeIndicator_Subroute(e){const t=e.target.innerText.toLowerCase().trim();this.$router.push(`/${this.country}/${t}`)}}},j=x,F=(o("9c59"),Object(m["a"])(j,T,_,!1,null,"4fbadbca",null)),G=F.exports;function $(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function R(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?$(o,!0).forEach((function(t){Object(w["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):$(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var U={name:"LineChartWrapper",components:{LineChart:N,LineChartControls:G},props:{country:String,indicator:String},data(){return{baseToolTipOpts:{backgroundColor:"#000",displayColors:!1,titleFontColor:"#d5d5ec",titleFontSize:13,bodyFontColor:"#ecd5d5",bodyFontStyle:"bold",bodyFontSize:13,titleMarginBottom:6,callbacks:{title(e){return`${e[0].xLabel}:`}}},error:!1,indicatorDetails:{gdp:"GDP per capita (constant 2010 US$)",population:"Total population",regulation:"Time required to start a business (days)",tax:"Total tax rate (% of commercial profits)"},countryData:{},chartData:null,masterOptions:{gdp:{tooltips:{callbacks:{label(e){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return t.format(e.yLabel)}}},scales:{yAxes:[{ticks:{callback(e){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return t.format(e)}}}]}},population:{tooltips:{callbacks:{label(e){const t=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return t.format(e.yLabel)}}},scales:{yAxes:[{ticks:{callback(e){const t=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return t.format(e)}}}]}},regulation:{tooltips:{callbacks:{label(e){const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1});return t.format(e.yLabel)}}},scales:{yAxes:[{ticks:{callback(e){const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1});return t.format(e)}}}]}},tax:{tooltips:{callbacks:{label(e){const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return`${t.format(e.yLabel)}%`}}},scales:{yAxes:[{ticks:{callback(e){const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return`${t.format(e)}%`}}}]}}}}},computed:{isData(){return this.chartData&&this.chartData.datasets[0].data.length>0},chartOptions(){return{scales:this.masterOptions[this.indicator].scales,tooltips:R({},this.baseToolTipOpts,{callbacks:R({},this.masterOptions[this.indicator].tooltips.callbacks,{},this.baseToolTipOpts.callbacks)})}}},beforeRouteEnter(e,t,o){o(function(){var e=Object(y["a"])((function*(e){const t=e.lookupCountryCode(e.country),o=e.getIndicatorName(e.indicator);yield e.getData(t),e.setProps(o)}));return function(t){return e.apply(this,arguments)}}())},beforeRouteUpdate(e,t,o){var r=this;return Object(y["a"])((function*(){r.$store.commit("toggleLoadingStatus");const t=r.lookupCountryCode(e.params.country),n=r.getIndicatorName(e.params.indicator);t instanceof Error||t.message||"error"===n?(r.error=!0,r.$store.commit("toggleLoadingStatus"),o(!1)):(r.error=!1,r.$store.getters.dataIsCached(t)?(r.$store.commit("toggleLoadingStatus"),r.countryData=yield r.$store.getters.getDataFromCache(t)):yield r.getData(t),r.setProps(n),o())}))()},methods:{setProps(e){const t=this.countryData[e];this.chartData={labels:t.labels,datasets:[{label:this.indicatorDetails[e],data:t.data,backgroundColor:"rgba(115,119,191,0.3)",lineTension:0,borderColor:"#7377BF",borderWidth:1,pointRadius:4,pointBorderWidth:2,pointBorderColor:"#7377BF",pointBackgroundColor:"#fbfbfb",pointHoverRadius:4}]}},getIndicatorName(e){return["gdp","population","regulation","tax"].includes(e)?e:"error"},lookupCountryCode(e){const t=A.filter(t=>t.country.toLowerCase().replace(/ /g,"-")===e);try{return t[0].code.toLowerCase()}catch(o){return o}},makeAPICall(e,t){return Object(y["a"])((function*(){const o={labels:[],data:[]};try{let r=yield fetch(`https://api.worldbank.org/v2/countries/${e}/indicators/${t}?MRV=5&format=json`);if(!r.ok)throw new Error("Network problem - response not ok");if(r=yield r.json(),null===r[1])throw new Error("No data available for this location or series");yield r[1].forEach(e=>{o.labels.unshift(e.date),o.data.unshift(e.indicator.id.includes("POP")?e.value:(Math.round(100*e.value)/100).toFixed(2))})}catch(r){alert(`There was a problem grabbing the data: ${r}.  Please try again.`)}return o}))()},getData(e){var t=this;return Object(y["a"])((function*(){const o=yield Promise.all([t.makeAPICall(e,"NY.GDP.PCAP.KD"),t.makeAPICall(e,"SP.POP.TOTL"),t.makeAPICall(e,"IC.REG.DURS"),t.makeAPICall(e,"IC.TAX.TOTL.CP.ZS")]),r=Object(O["a"])(o,4),n=r[0],a=r[1],c=r[2],i=r[3],s={gdp:n,population:a,regulation:c,tax:i,code:e};t.$store.commit("cacheData",s),t.countryData=s,t.$store.commit("toggleLoadingStatus")}))()}}},K=U,H=(o("9117"),Object(m["a"])(K,S,C,!1,null,"7ac7a232",null)),z=H.exports,V={name:"MainElement",components:{AlertBox:()=>o.e("AlertBox").then(o.bind(null,"d6df")).catch(e=>console.log(e)),LineChartWrapper:z,BarDonut:()=>o.e("BarDonut").then(o.bind(null,"d716")).catch(e=>console.log(e)),SocialElement:()=>o.e("SocialElement").then(o.bind(null,"e272")).catch(e=>console.log(e)),MembersActivity:()=>o.e("MembersActivity").then(o.bind(null,"405a")).catch(e=>console.log(e)),MessageSettings:()=>o.e("MessageSettings").then(o.bind(null,"8e73")).catch(e=>console.log(e))},data(){return{newAlert:!1,rego:null,IOoptions:{root:null,rootMargin:"0px 0px 180px 0px",threshold:.1},IOflags:{BarDonut:!1,Social:!1,MembersActivity:!1,MessageSettings:!1}}},mounted(){document.addEventListener("swUpdated",this.changeAlert),window.addEventListener("load",()=>{window.IntersectionObserver?setTimeout(this.IOobserve,600):(Object.keys(this.IOflags).forEach(e=>{this.IOflags[e]=!0}),document.querySelectorAll("p.IOsentinel").forEach(e=>{e.style.display="none"}),this.$emit("show-nav"))})},methods:{IOcallback(e,t){e.filter(e=>e.isIntersecting).forEach(e=>{this.IOflags[e.target.id]=!0,t.unobserve(e.target),e.target.classList.add("hide"),setTimeout(()=>e.target.style.display="none",920),/MessageSettings/.test(e.target.id)&&this.$emit("show-nav")})},IOobserve(){const e=new IntersectionObserver(this.IOcallback,this.IOoptions);Object.keys(this.$refs).forEach(t=>e.observe(this.$refs[t]))},changeAlert(e){this.newAlert=!0,this.rego=e.detail}}},W=V,Z=(o("c10c"),Object(m["a"])(W,f,v,!1,null,"5ccc167a",null)),J=Z.exports,Y={components:{HeaderBar:b,NavBar:()=>o.e("NavBar").then(o.bind(null,"d000")).catch(e=>console.log(e)),MainElement:J},data(){return{showNav:!1,alert:!1,headShown:null}},methods:{header(e){this.headShown=e}}},q=Y,Q=(o("034f"),Object(m["a"])(q,s,u,!1,null,null,null)),X=Q.exports,ee=o("8c4f");r["a"].use(ee["a"]);var te=new ee["a"]({routes:[{path:"(/|/charts|/members|/settings)",redirect:"/united-states/gdp"},{path:"/:country",redirect:"/:country/gdp"},{path:"/:country/:indicator",name:"country",props:!0,component:z}]}),oe=o("2f62");function re(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function ne(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?re(o,!0).forEach((function(t){Object(w["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):re(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}r["a"].use(oe["a"]);var ae=new oe["a"].Store({state:{name:"James South",loading:!0,cache:{},settings:{},users:[]},getters:{dataIsCached:e=>t=>Object.prototype.hasOwnProperty.call(e.cache,t),getDataFromCache:e=>t=>e.cache[t],getSettings:e=>e.settings},mutations:{toggleLoadingStatus(e){e.loading=!e.loading},cacheData(e,t){const o={[t.code]:t};e.cache=ne({},e.cache,{},o)},setSettings(e,t){e.settings=t},setUsers(e,t){e.users=t}},actions:{setSettings(e,t){let o=e.commit;o("setSettings",t),localStorage.setItem("settings",JSON.stringify(t))},setUsers(e,t){let o=e.commit;o("setUsers",t)}}}),ce=o("9483");Object(ce["a"])("/dashboard/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){let e;console.log("New content is downloading."),navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(window.location.reload(),e=!0)})},updated(e){console.log("New content is available; please refresh.");const t=new CustomEvent("swUpdated",{detail:e});document.dispatchEvent(t)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].use(a.a,{moment:i.a}),new r["a"]({router:te,store:ae,render:e=>e(X)}).$mount("#app")},"64a9":function(e,t,o){},"753c":function(e,t,o){e.exports=o.p+"img/face.69232788.jpg"},9117:function(e,t,o){"use strict";var r=o("2771"),n=o.n(r);n.a},"95d7":function(e,t,o){},"9c59":function(e,t,o){"use strict";var r=o("95d7"),n=o.n(r);n.a},c10c:function(e,t,o){"use strict";var r=o("d9ac"),n=o.n(r);n.a},d9ac:function(e,t,o){}});
//# sourceMappingURL=app.4856ce37.js.map