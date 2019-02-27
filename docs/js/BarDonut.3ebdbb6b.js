(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BarDonut"],{"4dbf":function(t,e,a){},5903:function(t,e,a){"use strict";var r=a("4dbf"),n=a.n(r);n.a},"60dc":function(t,e,a){"use strict";var r=a("8eb2"),n=a.n(r);n.a},"8eb2":function(t,e,a){},d716:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar_donut"},[a("ChartWrapper",{attrs:{opts:t.barChartOptions,"ch-data":t.chartData,type:"bar"}}),a("ChartWrapper",{attrs:{opts:t.donutChartOptions,"ch-data":t.chartData,type:"donut"}})],1)},n=[],s=a("1da1"),o=(a("ac6a"),a("be94")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{barClass:"bar"===t.type,donutClass:"donut"===t.type}},[t._m(0),a("div",{style:{margin:"0 auto",width:"90%"}},[a("ul",{ref:"legend",style:t.legendStyles})]),"bar"===t.type?a("BarChart",{attrs:{options:t.opts,"chart-data":t.chData}}):a("DonutChart",{attrs:{options:t.opts,"chart-data":t.chData}})],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Natural events from\n    "),a("a",{staticClass:"newwindow",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://eonet.sci.gsfc.nasa.gov/eonet-project"}},[t._v("EONET")])])}],c=a("1fca");const d=c["d"].reactiveProp;var h,p,u={name:"BarChart",extends:c["a"],mixins:[d],props:{options:Object},watch:{options(){this.renderChart(this.chartData,this.options)}},mounted(){this.renderChart(this.chartData,this.options)}},b=u,m=a("2877"),f=Object(m["a"])(b,h,p,!1,null,"47bbba79",null),g=f.exports;const y=c["d"].reactiveProp;var C,w,x={name:"DonutChart",extends:c["b"],mixins:[y],props:{options:Object},mounted(){this.renderChart(this.chartData,this.options)}},v=x,k=Object(m["a"])(v,C,w,!1,null,null,null),O=k.exports,j={name:"ChartWrapper",components:{BarChart:g,DonutChart:O},props:{type:{type:String,required:!0},chData:Object,opts:Object},computed:{legendStyles(){return{display:"flex",flexFlow:"row wrap",margin:"auto",justifyContent:"space-around",minHeight:"70px"}}},watch:{chData(){this.legendCallback(this.chData)}},methods:{legendCallback(t){const e=t.datasets[0].backgroundColor;let a,r,n;for(let s=0;s<t.datasets[0].data.length;s+=1)a=document.createElement("li"),r=document.createElement("p"),n=document.createElement("div"),a.style.display="flex",a.style.alignItems="center",n.style.width="30px",n.style.height="16px",n.style.backgroundColor=e[s],n.style.marginRight="5px",r.textContent=t.labels[s],r.style.fontFamily="'Alegreya Sans', sans-serif",r.style.marginRight="4px",a.appendChild(n),a.appendChild(r),this.$refs.legend.appendChild(a)}}},D=j,S=(a("60dc"),Object(m["a"])(D,i,l,!1,null,"14f2fc41",null)),E=S.exports,M={name:"BarDonut",components:{ChartWrapper:E},data(){return{narrow:{type:"logarithmic",ticks:{min:0,fontSize:13,callback(t){return 10===t||t%20===0?t:""}},position:"left"},wide:{type:"logarithmic",ticks:{min:0,fontSize:13,callback(t){return t}},position:"left"},xs:{xAxes:[{barPercentage:1,categoryPercentage:1,ticks:{fontSize:1,fontColor:"transparent"},gridLines:{drawOnChartArea:!1,drawTicks:!1}}]},yright:{ticks:{callback(){return""}},position:"right",gridLines:{drawOnChartArea:!1,drawTicks:!1}},mQ:window.matchMedia("(max-width: 580px)"),mQon:null,chartData:{},baseBarChartOptions:{title:{display:!0,text:"Number of Events - past 60 days",fontSize:13},tooltips:{backgroundColor:"#000",displayColors:!1,titleFontSize:13,bodyFontSize:13,titleMarginBottom:6,callbacks:{title(t){return`${t[0].xLabel}:`},label(t){return t.yLabel}}},responsive:!0,layout:{padding:{left:0,right:0,top:0,bottom:0}},legend:{display:!1}},donutChartOptions:{title:{display:!0,text:"Share of Events - past 60 days",fontSize:13},responsive:!0,rotation:Math.floor(100*Math.random())/10*Math.PI,cutoutPercentage:54,animation:{animateScale:!0},tooltips:{backgroundColor:"#000",displayColors:!1,titleFontSize:13,bodyFontSize:13,titleMarginBottom:6,callbacks:{label(t,e){const a=e.datasets[0].data,r=a[t.index],n=a.reduce((t,e)=>t+e,0);return`${e.labels[t.index]}: ${Math.round(r/n*1e4)/100}%`}}},layout:{padding:{left:0,right:0,top:0,bottom:0}},legend:{display:!1,labels:{fontSize:13}}}}},computed:{barChartOptions(){return this.mQon?Object(o["a"])({},this.baseBarChartOptions,{scales:Object(o["a"])({yAxes:[this.narrow,this.yright]},this.xs)}):Object(o["a"])({},this.baseBarChartOptions,{scales:Object(o["a"])({yAxes:[this.wide,this.yright]},this.xs)})}},created(){this.makeAPICall(),this.mQ.addListener(this.handleMQ),this.handleMQ(this.mQ)},methods:{getColors(){const t=["#4a051c","#f6f930","#7a9e7e","#31493c","#ffa400","#85c7f2","#baa898","#848586","#c2847a","#d1603d","#c5dca0","#f65be3","#2a2a72"],e=new Set;let a;while(e.size<13)a=Math.floor(13*Math.random()),e.add(a);return[...e].map(e=>t[e])},handleMQ(t){t.matches?this.mQon=!0:this.mQon=!1},makeAPICall(){var t=this;return Object(s["a"])(function*(){try{let a=yield fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=60");if(!a.ok)throw new Error("Network problem - response not ok");if(a=yield a.json(),!a||!a.events||0===a.events.length)throw new Error("No data available");const r=a.events.reduce((t,e)=>{return t[e.categories[0].title]=++t[e.categories[0].title]||1,t},{}),n=[],s=[],o=t.getColors();Object.keys(r).forEach(t=>{n.push(t),s.push(r[t])}),t.chartData=Object.assign({},t.chartData,{labels:n,datasets:[{label:"",data:s,backgroundColor:o,borderWidth:Array(13).fill(0)}]})}catch(e){alert(`There was a problem grabbing the data: ${e}.  Please try again.`)}})()}}},z=M,_=(a("5903"),Object(m["a"])(z,r,n,!1,null,"04dad260",null));e["default"]=_.exports}}]);
//# sourceMappingURL=BarDonut.3ebdbb6b.js.map