(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g,h="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var n={ca:!0},p={};try{p.__proto__=n;l=p.ca;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var q=k,goog=goog||{},r=this||self,t=Date.now,u=function(a,b){a=a.split(".");var c=r;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var v=function(){this.A={}};v.prototype.add=function(a,b){a="string"===typeof a?a:a.getString();this.A[a]||(this.A[a]=[]);this.A[a].push(b)};var w=function(a){var b=[],c="object"==typeof gwd&&"GwdId"in gwd,d;for(d in a.A)b.push(c?new gwd.GwdId(d):d);return b},x=function(a,b){return b?a.A["string"===typeof b?b:b.getString()]||[]:[]};var y=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},z=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},A=function(a){if(z(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&z(a))return a;return null};var B=function(a,b){this.i=a;this.da=b;this.H=this.M.bind(this)};B.prototype.observe=function(a){if(a.nodeType==Node.ELEMENT_NODE)for(var b=w(this.i),c=0;c<b.length;c++){var d=D(b[c]);if(d&&y(a,d)){var e=x(this.i,b[c]);if(e)for(var f=0;f<e.length;f++)d.addEventListener(e[f].event,this.H,!1)}}};B.prototype.M=function(a){this.da(a)};var D=function(a){return"string"===typeof a?document.getElementById(a):a.getElement(document)};var E=function(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};var F=function(){this.aa=""};F.prototype.toString=function(){return"SafeStyle{"+this.aa+"}"};F.prototype.N=function(a){this.aa=a};(new F).N("");var G=function(){this.$=""};G.prototype.toString=function(){return"SafeStyleSheet{"+this.$+"}"};G.prototype.N=function(a){this.$=a};(new G).N("");Object.freeze&&Object.freeze([]);var H=function(a,b){var c=(c=r.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):t();a={label:a,type:9,value:c};b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)};var I={},J=!1,K=!1;I.W=function(a){J||(J=!0,H("11",a))};I.pa=function(a){K||(K=!0,H("12",a))};I.qa=function(a,b,c){c=void 0===c?0:c;var d=b;d=void 0===d?r:d;if(d=(d=d.performance)&&d.now?d.now():null)a={label:a,type:c,value:d},b=b.google_js_reporting_queue=b.google_js_reporting_queue||[],2048>b.length&&b.push(a)};I.reset=function(a){K=J=!1;(a.google_js_reporting_queue=a.google_js_reporting_queue||[]).length=0};u("gwd.rumUtil",I);u("gwd.rumUtil.logContentLoading",I.W);
u("gwd.rumUtil.logContentRendered",I.pa);u("gwd.rumUtil.logTimingEvent",I.qa);u("gwd.rumUtil.reset",I.reset);var L=function(){var a=HTMLElement.call(this)||this;a.T=a.ja.bind(a);a.K=a.la.bind(a);a.U=a.ka.bind(a);a.D=a.ia.bind(a);a.C=a.ga.bind(a);a.F=E.bind(null,"expandfinish",a);a.B=E.bind(null,"collapsefinish",a);a.S=a.ha.bind(a);a.m=a.oa.bind(a);a.H=a.M.bind(a);a.Y=a.ma.bind(a);a.ba=a.na.bind(a);a.h=null;a.c=null;a.v=!1;a.u=!1;a.O=[];a.s=!1;a.J=!1;a.o=null;a.j=!1;a.G=!1;a.I=window.innerHeight>=window.innerWidth?1:2;a.b=null;a.g=null;a.V=!1;return a},M=HTMLElement;L.prototype=h(M.prototype);
L.prototype.constructor=L;if(q)q(L,M);else for(var N in M)if("prototype"!=N)if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(M,N);O&&Object.defineProperty(L,N,O)}else L[N]=M[N];g=L.prototype;
g.connectedCallback=function(){var a=this;this.V||(this.J=this.hasAttribute("fullscreen"),document.body.style.opacity="0",this.V=!0);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,this.D);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,this.C);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.D);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,this.C);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,
this.F);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.B);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.F);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.B);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.S);window.addEventListener("resize",this.ba,!1);(0,I.W)(window);setTimeout(function(){a.a=a.querySelector("gwd-pagedeck");a.a.addEventListener("pagetransitionend",a.Y,!1);
a.b=document.getElementById(a.getAttribute("data-provider"));a.g=document.querySelector("gwd-data-binder");var b=a.querySelector("gwd-metric-configuration"),c=new v;if(b){b=Array.prototype.slice.call(b.getElementsByTagName("gwd-metric-event"));for(var d=0;d<b.length;d++){var e=b[d],f=e.getAttribute("source");if(f){var m=e.getAttribute("exit");e={event:e.getAttribute("event"),ra:e.getAttribute("metric")||m,ea:e.hasAttribute("cumulative"),exit:m};c.add(P(f),e)}}}a.i=c;a.X=new B(a.i,a.H)},0)};
g.disconnectedCallback=function(){Enabler.removeEventListener(studio.events.StudioEvent.INIT,this.T);Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE,this.K);Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED,this.U);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_START,this.D);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_START,this.C);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.D);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,
this.C);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.F);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.B);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.F);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.B);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.S);this.a.removeEventListener("pagetransitionend",this.Y,!1);window.removeEventListener("resize",
this.ba,!1);this.b&&this.h&&this.b.removeEventListener("ready",this.h);this.g&&this.c&&this.g.removeEventListener("bindingfinished",this.c);Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,this.m,!1);window.removeEventListener("message",this.m,!1)};g.initAd=function(){this.s=!1;var a=this.T;Enabler.removeEventListener(studio.events.StudioEvent.INIT,a);Enabler.addEventListener(studio.events.StudioEvent.INIT,a);Enabler.isInitialized()&&a()};
g.exit=function(a,b,c,d,e){c=void 0===c?!1:c;d=void 0===d?!0:d;Enabler.exit(a,b);d&&Q(this);c&&this.goToPage(e)};g.exitOverride=function(a,b,c,d,e){c=void 0===c?!1:c;d=void 0===d?!0:d;Enabler.exitOverride(a,b);d&&Q(this);c&&this.goToPage(e)};g.incrementCounter=function(a,b){Enabler.counter(a,b)};g.startTimer=function(a){Enabler.startTimer(a)};g.stopTimer=function(a){Enabler.stopTimer(a)};g.reportManualClose=function(){Enabler.reportManualClose()};
g.M=function(a){var b=a.target,c=P(b),d=c+": "+a.type;a:{var e=x(this.i,c);for(var f=0;f<e.length;f++)if(e[f].event==a.type){e=e[f];break a}e=void 0}e.exit&&a.detail&&a.detail.url?(d=c+": "+e.exit,a.detail["exit-id"]&&(d=a.detail["exit-id"]),b="",null!=a.detail["product-index"]&&(b=a.detail["product-index"]),this.b&&0==(this.b.getAttribute("gwd-schema-id")||"").indexOf("dynamic_remarketing")?(c=a.detail["action-event"],e={},c&&(e.clickX=c.clientX||c.changedTouches[0].clientX,e.clickY=c.clientY||c.changedTouches[0].clientY),
Enabler.dynamicExit(d,a.detail.url,b,void 0,e)):Enabler.exitOverride(d,a.detail.url),a.detail.handled=!0,a.detail.collapse&&this.goToPage()):(a=A(b))&&a.gwdIsActive()&&this.incrementCounter(e.ra||d,e.ea)};
g.ja=function(){var a=this;Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,this.m,!1);window.removeEventListener("message",this.m,!1);Enabler.isServingInLiveEnvironment()?Enabler.addEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,this.m,!1):window.addEventListener("message",this.m,!1);var b=function(){if(a.hasAttribute("polite-load")){var d=a.U;Enabler.isPageLoaded()?d():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,d)}else d=a.K,Enabler.isVisible()?
d():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,d)};if(this.J){var c=function(d){a.o=!!d.supported;a.o&&E("fullscreensupport",a);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,c);b()};Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,c);Enabler.queryFullscreenSupport()}else b()};
g.la=function(a){var b=this;if(this.s)this.b&&this.R(null);else{var c;a&&(c=a.detail);var d=this.ta.bind(this,c);this.b&&(d=this.fa.bind(this,d));if(this.J){Enabler.setResponsiveExpanding(!0);var e=function(f){b.G=f;d()};Enabler.loadModule(studio.module.ModuleId.GDN,function(){var f=studio.sdk.gdn.getConfig();f.isInCreativeToolsetContext()?f.isInterstitial(e):d()})}else d()}};g.ka=function(){var a=this.K;Enabler.isVisible()?a():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,a)};
g.fa=function(a){this.b?(this.h&&this.b.removeEventListener("ready",this.h),this.h=this.R.bind(this,a),this.b.isDataLoaded()&&this.h(),this.b.addEventListener("ready",this.h)):a()};
g.R=function(a){var b=!!a;if(this.g){this.c&&(this.g.removeEventListener("bindingfinished",this.c),this.c=null);var c=this.b.getData();c&&(b=this.a.getElementsBySelector("*"),b=b.concat(this.a.getPages()),this.g.bindData(c,b)?this.Z(a):(this.c=this.Z.bind(this,a),this.g.addEventListener("bindingfinished",this.c)),b=!1)}b&&a()};
g.Z=function(a){this.c&&(this.g.removeEventListener("bindingfinished",this.c),this.c=null);if(this.s){var b=document.getElementsByTagName("gwd-text-helper");0<b.length&&b[0].refitAll()}E("dynamicelementsready",this);a&&a()};g.ta=function(a){this.s||(this.s=!0,document.body.style.opacity="",E("adinitialized",this,a),this.G?(a=this.a.getPage(this.a.findPageIndexByAttributeValue("expanded",!0)),this.goToPage(a.id)):this.goToPage())};
g.goToPage=function(a,b,c,d,e){var f=this.a.getPage(this.a.currentIndex);if(a=a?this.a.getPage(a):this.a.getDefaultPage()){var m=!!f&&!!a&&!this.v&&!this.G&&!f.hasAttribute("expanded")&&a.hasAttribute("expanded");f=!!f&&!!a&&!this.u&&!this.G&&f.hasAttribute("expanded")&&!a.hasAttribute("expanded");m&&this.u||f&&this.v||((this.f=a.id,b&&(this.l={transition:b,duration:c,easing:d,direction:e}),m)?this.J&&!1!==this.o?this.o&&(this.j=!0,Enabler.requestFullscreenExpand()):Enabler.requestExpand():f?this.j?
Enabler.requestFullscreenCollapse():Enabler.requestCollapse():(this.u=this.v=!1,this.L()))}};g.ia=function(){E("expandstart",this);this.o?(this.j=!0,Enabler.finishFullscreenExpand()):Enabler.finishExpand();if(!this.f){var a=this.a.getPage(this.a.findPageIndexByAttributeValue("expanded",!0));a&&(this.f=a.id)}a=this.a.getPage(this.a.currentIndex);this.v=!!a&&this.f!=a.id;window.setTimeout(this.L.bind(this),30)};
g.ga=function(){E("collapsestart",this);this.j?(Enabler.finishFullscreenCollapse(),this.j=!1):Enabler.finishCollapse();this.f||(this.reportManualClose(),this.f=this.a.getDefaultPage().id);var a=this.a.getPage(this.a.currentIndex);this.u=!!a&&this.f!=a.id;window.setTimeout(this.L.bind(this),30)};
g.oa=function(a){if(Enabler.isServingInLiveEnvironment())var b=a;else{if(!a.data||"string"!==typeof a.data)return;try{b=JSON.parse(a.data)}catch(c){return}if(b.eventType!==studio.events.StudioEvent.HOSTPAGE_SCROLL)return}E("hostpagescroll",this,b)};g.na=function(){if(!this.f){var a=window.innerHeight>=window.innerWidth?1:2;this.I!=a&&(this.I=a,(a=this.a.getPage(this.a.currentIndex))&&window.setTimeout(this.goToPage.bind(this,a.id),0))}};g.ha=function(a){a&&Enabler.setResponsiveSize(a.width,a.height)};
g.L=function(){if(this.f){this.I=window.innerHeight>=window.innerWidth?1:2;var a=this.a.getOrientationSpecificPage(this.I,this.f);this.l?this.a.goToPage(a.id,this.l.transition,this.l.duration,this.l.easing,this.l.direction):this.a.goToPage(a.id);this.j&&a.classList.add("fs")}this.l=this.f=void 0};
g.ma=function(a){this.u=this.v=!1;if(a.target==this.a){var b=a.detail;a=b.outgoingPage;b=b.incomingPage;if(a){var c=this.X;if(a.nodeType==Node.ELEMENT_NODE)for(var d=w(c.i),e=0;e<d.length;e++){var f=D(d[e]);if(f&&y(a,f))for(var m=x(c.i,d[e]),C=0;C<m.length;C++)f.removeEventListener(m[C].event,c.H,!1)}if((a=a.querySelectorAll("video, gwd-video"))&&0<a.length)for(this.P=[];this.O.length;)studio.video.Reporter.detach(this.O.shift())}this.X.observe(b);(a=b.querySelectorAll("video, gwd-video"))&&0<a.length&&
(b=studio.video&&studio.video.Reporter,c=this.sa.bind(this),this.P=Array.prototype.slice.call(a),b?c():Enabler.loadModule(studio.module.ModuleId.VIDEO,c))}};g.sa=function(){for(var a,b;this.P.length;)if(b=this.P.shift(),a=P(b))studio.video.Reporter.attach(a,"gwd-video"==b.tagName.toLowerCase()?b.nativeElement:b,b.autoplay),this.O.push(a)};
var P=function(a){return"object"==typeof gwd&&"GwdId"in gwd?(new gwd.GwdId(a)).getString():"string"==typeof a?a:a.id},Q=function(a){a=Array.prototype.slice.call(a.a.querySelectorAll("audio, video, gwd-video, gwd-youtube, gwd-youtube-livestream, gwd-audio"));for(var b=0;b<a.length;b++)a[b].pause()};customElements.define("gwd-google-ad",L);}).call(this);
