(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,e,l){"use strict";l.r(e);var o={name:"Home",data:function(){return{globalStats:null}},mounted:function(){this.getGlobalStats()},methods:{getGlobalStats:function(){var t=this;this.$store.dispatch("global/getGlobalStatistics").then((function(e){t.globalStats=e.results[0]})).catch((function(t){return console.error("Something went wrong fetching the latest results",t)}))}}},n=l(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-screen h-screen p-6 overflow-hidden stats-global bg-background text-textColor"},[l("div",{staticClass:"mt-12 align-middle country-detail__today"},[l("div",{staticClass:"relative float-left w-1/3"},[l("p",{staticClass:"text-3xl text-center"},[t._v("Confirmed cases")]),t._v(" "),t.globalStats?l("p",{staticClass:"text-6xl text-center"},[t._v(t._s(t.globalStats.total_cases))]):t._e()]),t._v(" "),l("div",{staticClass:"relative float-left w-1/3"},[l("p",{staticClass:"text-3xl text-center"},[t._v("Recovered")]),t._v(" "),t.globalStats?l("p",{staticClass:"text-6xl text-center"},[t._v(t._s(t.globalStats.total_recovered))]):t._e()]),t._v(" "),l("div",{staticClass:"relative float-left w-1/3"},[l("p",{staticClass:"text-3xl text-center"},[t._v("Deaths")]),t._v(" "),t.globalStats?l("p",{staticClass:"text-6xl text-center"},[t._v(t._s(t.globalStats.total_deaths))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);