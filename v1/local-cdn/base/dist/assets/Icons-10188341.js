(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const $={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},F=$.themes.default,mt=$.themes.all,v=$.languages.default,h=$.locales.default,ge=$.locales.all,Ut=typeof document>"u",yt=()=>{if(Ut)return v;const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||v};var xe={},Fe=xe.hasOwnProperty,wt=xe.toString,Be=Fe.toString,St=Be.call(Object),me=function(e){var t,n;return!e||wt.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=Fe.call(t,"constructor")&&t.constructor,typeof n=="function"&&Be.call(n)===St):!0)},_t=Object.create(null),ze=function(e,t,n,s){var r,o,a,i,f,y,p=arguments[2]||{},K=3,pt=arguments.length,pe=arguments[0]||!1,gt=arguments[1]?void 0:_t;for(typeof p!="object"&&typeof p!="function"&&(p={});K<pt;K++)if((f=arguments[K])!=null)for(i in f)r=p[i],a=f[i],!(i==="__proto__"||p===a)&&(pe&&a&&(me(a)||(o=Array.isArray(a)))?(o?(o=!1,y=r&&Array.isArray(r)?r:[]):y=r&&me(r)?r:{},p[i]=ze(pe,arguments[1],y,a)):a!==gt&&(p[i]=a));return p};const je=function(e,t){return ze(!0,!1,...arguments)},Ve=new Map,os=(e,t)=>{Ve.set(e,t)},A=e=>Ve.get(e),At=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},Et=e=>{const t=At("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},bt=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},Ne=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),s=n.origin;s&&Et(s)?t=n.toString():t=bt(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var oe;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(oe||(oe={}));const Ct=oe;let Ue=!1,u={animationMode:Ct.Full,theme:F,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const as=()=>(m(),u.animationMode),Tt=()=>(m(),u.theme),vt=()=>(m(),u.themeRoot),Lt=()=>(m(),u.language),Pt=()=>(m(),u.fetchDefaultLanguage),is=()=>(m(),u.noConflict),cs=()=>(m(),u.calendarType),us=()=>(m(),u.formatSettings),B=new Map;B.set("true",!0);B.set("false",!1);const $t=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(u=je(u,t))}},Rt=()=>{const e=new URLSearchParams(window.location.search);e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||ye(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&ye(n,t,"sap-ui")})},Ot=e=>{const t=e.split("@")[1];return Ne(t)},It=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,ye=(e,t,n)=>{const s=t.toLowerCase(),r=e.split(`${n}-`)[1];B.has(t)&&(t=B.get(s)),r==="theme"?(u.theme=It(r,t),t&&t.includes("@")&&(u.themeRoot=Ot(t))):u[r]=t},Dt=()=>{const e=A("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();u=je(u,t)},m=()=>{typeof document>"u"||Ue||($t(),Rt(),Dt(),Ue=!0)};class R{constructor(){this._eventRegistry=new Map}attachEvent(t,n){const s=this._eventRegistry,r=s.get(t);if(!Array.isArray(r)){s.set(t,[n]);return}r.includes(n)||r.push(n)}detachEvent(t,n){const s=this._eventRegistry,r=s.get(t);if(!r)return;const o=r.indexOf(n);o!==-1&&r.splice(o,1),r.length===0&&s.delete(t)}fireEvent(t,n){const r=this._eventRegistry.get(t);return r?r.map(o=>o.call(this,n)):[]}fireEventAsync(t,n){return Promise.all(this.fireEvent(t,n))}isHandlerAttached(t,n){const r=this._eventRegistry.get(t);return r?r.includes(n):!1}hasListeners(t){return!!this._eventRegistry.get(t)}}const We=new R,Ze="languageChange",He=e=>{We.attachEvent(Ze,e)},Mt=e=>We.fireEventAsync(Ze,e),we=10;class kt{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const r=s.get(n)||0;if(r>we)throw new Error(`Web component processed too many times this task, max allowed is: ${we}`);t(n),s.set(n,r+1),n=this.shift()}}}const xt=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},Ft=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},Bt=()=>typeof document>"u"?null:xt('meta[name="ui5-shared-resources"]',document.head,Ft),N=(e,t)=>{const n=e.split(".");let s=Bt();if(!s)return t;for(let r=0;r<n.length;r++){const o=n[r],a=r===n.length-1;Object.prototype.hasOwnProperty.call(s,o)||(s[o]=a?t:{}),s=s[o]}return s},zt={version:"1.24.0",major:1,minor:24,patch:0,suffix:"",isNext:!1,buildTime:1712749043};let M,jt="";const J=new Map,L=N("Runtimes",[]),Vt=()=>{if(M===void 0){M=L.length;const e=zt;L.push({...e,alias:jt,description:`Runtime ${M} - ver ${e.version}`})}},b=()=>M,qe=(e,t)=>{const n=`${e},${t}`;if(J.has(n))return J.get(n);const s=L[e],r=L[t];if(!s||!r)throw new Error("Invalid runtime index supplied");if(s.isNext||r.isNext)return s.buildTime-r.buildTime;const o=s.major-r.major;if(o)return o;const a=s.minor-r.minor;if(a)return a;const i=s.patch-r.patch;if(i)return i;const y=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,r.suffix);return J.set(n,y),y},Nt=()=>L,Ge=N("Tags",new Map),ce=new Set;let U=new Map,X;const Ke=-1,ls=e=>{ce.add(e),Ge.set(e,b())},fs=e=>ce.has(e),Wt=()=>[...ce.values()],ds=e=>{let t=Ge.get(e);t===void 0&&(t=Ke),U.has(t)||U.set(t,new Set),U.get(t).add(e),X||(X=setTimeout(()=>{Zt(),U=new Map,X=void 0},1e3))},Zt=()=>{const e=Nt(),t=b(),n=e[t];let s="Multiple UI5 Web Components instances detected.";e.length>1&&(s=`${s}
Loading order (versions before 1.1.0 not listed): ${e.map(r=>`
${r.description}`).join("")}`),[...U.keys()].forEach(r=>{let o,a;r===Ke?(o=1,a={description:"Older unknown runtime"}):(o=qe(t,r),a=e[r]);let i;o>0?i="an older":o<0?i="a newer":i="the same",s=`${s}

"${n.description}" failed to define ${U.get(r).size} tag(s) as they were defined by a runtime of ${i} version "${a.description}": ${[...U.get(r)].sort().join(", ")}.`,o>0?s=`${s}
WARNING! If your code uses features of the above web components, unavailable in ${a.description}, it might not work as expected!`:s=`${s}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),s=`${s}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(s)},Je=new Set,hs=e=>{Je.add(e)},Ht=e=>Je.has(e),ue=new Set,qt=new R,E=new kt;let w,k,Y,I;const Gt=async e=>{E.add(e),await Jt()},Kt=e=>{qt.fireEvent("beforeComponentRender",e),ue.add(e),e._render()},ps=e=>{E.remove(e),ue.delete(e)},Jt=async()=>{I||(I=new Promise(e=>{window.requestAnimationFrame(()=>{E.process(Kt),I=null,e(),Y||(Y=setTimeout(()=>{Y=void 0,E.isEmpty()&&en()},200))})})),await I},Xt=()=>w||(w=new Promise(e=>{k=e,window.requestAnimationFrame(()=>{E.isEmpty()&&(w=void 0,e())})}),w),Yt=()=>{const e=Wt().map(t=>customElements.whenDefined(t));return Promise.all(e)},Qt=async()=>{await Yt(),await Xt()},en=()=>{E.isEmpty()&&k&&(k(),k=void 0,w=void 0)},Xe=async e=>{ue.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),r=Ht(n),o=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&r||e.languageAware&&o||e.themeAware&&a)&&Gt(t)}),await Qt()},tn=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),nn=(e,t)=>{const n=document.createElement("style");return n.type="text/css",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.textContent=e,document.head.appendChild(n),n},sn=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.href=e,document.head.appendChild(n),new Promise(s=>{n.addEventListener("load",s),n.addEventListener("error",s)})},l=typeof document>"u",c={get userAgent(){return l?"":navigator.userAgent},get touch(){return l?!1:"ontouchstart"in window||navigator.maxTouchPoints>0},get ie(){return l?!1:/(msie|trident)/i.test(c.userAgent)},get chrome(){return l?!1:!c.ie&&/(Chrome|CriOS)/.test(c.userAgent)},get firefox(){return l?!1:/Firefox/.test(c.userAgent)},get safari(){return l?!1:!c.ie&&!c.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(c.userAgent)},get webkit(){return l?!1:!c.ie&&/webkit/.test(c.userAgent)},get windows(){return l?!1:navigator.platform.indexOf("Win")!==-1},get macOS(){return l?!1:!!navigator.userAgent.match(/Macintosh|Mac OS X/i)},get iOS(){return l?!1:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(c.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return l?!1:!c.windows&&/Android/.test(c.userAgent)},get androidPhone(){return l?!1:c.android&&/(?=android)(?=.*mobile)/i.test(c.userAgent)},get ipad(){return l?!1:/ipad/i.test(c.userAgent)||/Macintosh/i.test(c.userAgent)&&"ontouchend"in document}},W=()=>c.safari,rn=typeof document>"u",Z=(e,t)=>t?`${e}|${t}`:e,Se=e=>e===void 0?!0:qe(b(),parseInt(e))===1,H=(e,t,n="",s)=>{const r=typeof e=="string"?e:e.content,o=b();if(document.adoptedStyleSheets&&!W()){const a=new CSSStyleSheet;a.replaceSync(r),a._ui5StyleId=Z(t,n),s&&(a._ui5RuntimeIndex=o,a._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]}else{const a={};a[t]=n,s&&(a["data-ui5-runtime-index"]=o,a["data-ui5-theme"]=s),nn(r,a)}},on=(e,t,n="",s)=>{const r=typeof e=="string"?e:e.content,o=b();if(document.adoptedStyleSheets&&!W()){const a=document.adoptedStyleSheets.find(i=>i._ui5StyleId===Z(t,n));if(!a)return;if(!s)a.replaceSync(r||"");else{const i=a._ui5RuntimeIndex;(a._ui5Theme!==s||Se(i))&&(a.replaceSync(r||""),a._ui5RuntimeIndex=String(o),a._ui5Theme=s)}}else{const a=document.querySelector(`head>style[${t}="${n}"]`);if(!a)return;if(!s)a.textContent=r||"";else{const i=a.getAttribute("data-ui5-runtime-index")||void 0;(a.getAttribute("data-ui5-theme")!==s||Se(i))&&(a.textContent=r||"",a.setAttribute("data-ui5-runtime-index",String(o)),a.setAttribute("data-ui5-theme",s))}}},q=(e,t="")=>{if(rn)return!0;const n=document.querySelector(`head>style[${e}="${t}"]`);return document.adoptedStyleSheets&&!W()?!!n||!!document.adoptedStyleSheets.find(s=>s._ui5StyleId===Z(e,t)):!!n},an=(e,t="")=>{var n;if(document.adoptedStyleSheets&&!W())document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s._ui5StyleId!==Z(e,t));else{const s=document.querySelector(`head > style[${e}="${t}"]`);(n=s==null?void 0:s.parentElement)==null||n.removeChild(s)}},Ye=(e,t,n="",s)=>{q(t,n)?on(e,t,n,s):H(e,t,n,s)},cn=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},un={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},ln={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},fn=()=>{const e=A("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&dn(),hn()},dn=()=>{q("data-ui5-font-face")||H(un,"data-ui5-font-face")},hn=()=>{q("data-ui5-font-face-override")||H(ln,"data-ui5-font-face-override")},pn={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},gn=()=>{q("data-ui5-system-css-vars")||H(pn,"data-ui5-system-css-vars")},Qe=new R,et="themeRegistered",mn=e=>{Qe.attachEvent(et,e)},Un=e=>Qe.fireEvent(et,e),_e=new Map,tt=new Map,yn=new Map,nt=new Set,z=new Set,gs=(e,t,n)=>{tt.set(`${e}/${t}`,n),nt.add(e),z.add(t),Un(t)},st=async(e,t,n)=>{const s=`${e}_${t}_${n||""}`,r=_e.get(s);if(r!==void 0)return r;if(!z.has(t)){const f=[...z.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${F}. Registered themes are: ${f}`),Q(e,F)}const[o,a]=await Promise.all([Q(e,t),n?Q(e,n,!0):void 0]),i=cn(o,a);return i&&_e.set(s,i),i},Q=async(e,t,n=!1)=>{const r=(n?yn:tt).get(`${e}/${t}`);if(!r){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let o;try{o=await r(t)}catch(i){console.error(e,i.message);return}return o._||o},rt=()=>nt,wn=e=>z.has(e),S=new Set,Sn=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},_n=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{S.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),S.add("decode"));return}try{return JSON.parse(n)}catch{S.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),S.add("parse"))}}},An=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{S.has("object")||(console.warn("Malformed theme metadata Object",e),S.add("object"));return}return{themeName:t,baseThemeName:n}},ae=()=>{const e=Sn();if(!e||e==="none")return;const t=_n(e);if(t)return An(t)},En=new R,bn="themeLoaded",Cn=e=>En.fireEvent(bn,e);let C;const ot=()=>(C===void 0&&(C=vt()),C),ms=e=>{if(C!==e){if(C=e,!Ne(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return at(O())}},Tn=e=>`${ot()}Base/baseLib/${e}/css_variables.css`,at=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await sn(Tn(e),{"sap-ui-webcomponents-theme":e})},P="@ui5/webcomponents-theming",vn=()=>rt().has(P),Ln=async e=>{if(!vn())return;const t=await st(P,e);t&&Ye(t,"data-ui5-theme-properties",P,e)},Pn=()=>{an("data-ui5-theme-properties",P)},$n=async(e,t)=>{const s=[...rt()].map(async r=>{if(r===P)return;const o=await st(r,e,t);o&&Ye(o,`data-ui5-component-properties-${b()}`,r)});return Promise.all(s)},Rn=async e=>{var s;const t=ae();if(t)return t;const n=A("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(s=n.getConfigurationSettingsObject())==null?void 0:s.theme,baseThemeName:""}}else if(ot())return await at(e),ae()},le=async e=>{const t=await Rn(e);!t||e!==t.themeName?await Ln(e):Pn();const n=wn(e)?e:t&&t.baseThemeName;await $n(n||F,t&&t.themeName===e?e:void 0),Cn(e)};let _;const O=()=>(_===void 0&&(_=Tt()),_),Us=async e=>{_!==e&&(_=e,ct()&&(await le(_),await Xe({themeAware:!0})))},On=()=>{var t,n;const e=O();return In(e)?!e.startsWith("sap_horizon"):!((n=(t=ae())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},In=e=>mt.includes(e);let G=!1,D;const it=new R,ct=()=>G,ys=e=>{if(!G){it.attachEvent("boot",e);return}e()},ws=async()=>{if(D!==void 0)return D;const e=async t=>{if(typeof document>"u"){t();return}mn(Dn),Vt();const n=A("OpenUI5Support"),s=n?n.isOpenUI5Detected():!1,r=A("F6Navigation");n&&await n.init(),r&&!s&&r.init(),await tn(),await le(O()),n&&n.attachListeners(),fn(),gn(),t(),G=!0,await it.fireEventAsync("boot")};return D=new Promise(e),D},Dn=e=>{const t=O();G&&e===t&&le(t)};let T,ie;const Mn=()=>(T===void 0&&(T=Lt()),T),Ss=async e=>{T!==e&&(T=e,ct()&&(await Mt(e),await Xe({languageAware:!0})))},kn=e=>{ie=e},xn=()=>(ie===void 0&&kn(Pt()),ie),Fn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class ut{constructor(t){const n=Fn.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||v,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const ee=new Map,lt=e=>(ee.has(e)||ee.set(e,new ut(e)),ee.get(e)),Ae=e=>{try{if(e&&typeof e=="string")return lt(e)}catch{}return new ut(h)},x=e=>{if(e)return Ae(e);const t=Mn();return t?lt(t):Ae(yt())},Bn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,Ee=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,zn={he:"iw",yi:"ji",nb:"no",sr:"sh"},jn=e=>{let t;if(!e)return h;if(typeof e=="string"&&(t=Bn.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const r=t[2]?t[2].toLowerCase():void 0,o=t[4]?t[4].slice(1):void 0,a=t[6];return n=zn[n]||n,a&&(t=Ee.exec(a))||o&&(t=Ee.exec(o))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(r==="hans"?s="CN":r==="hant"&&(s="TW")),n+(s?"_"+s+(o?"_"+o.replace("-","_"):""):""))}return h},Vn=e=>{if(!e)return h;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==h?h:""},be=new Set,Ce=new Set,fe=new Map,te=new Map,de=new Map,_s=(e,t,n)=>{const s=`${e}/${t}`;de.set(s,n)},Te=(e,t)=>{fe.set(e,t)},As=e=>fe.get(e),ft=(e,t)=>{const n=`${e}/${t}`;return de.has(n)},Nn=(e,t)=>{const n=`${e}/${t}`,s=de.get(n);return s&&!te.get(n)&&te.set(n,s(t)),te.get(n)},Wn=e=>{be.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),be.add(e))},ve=(e,t)=>t!==v&&!ft(e,t),Zn=async e=>{const t=x().getLanguage(),n=x().getRegion(),s=x().getVariant();let r=t+(n?`-${n}`:"")+(s?`-${s}`:"");if(ve(e,r))for(r=jn(r);ve(e,r);)r=Vn(r);const o=xn();if(r===v&&!o){Te(e,null);return}if(!ft(e,r)){Wn(e);return}try{const a=await Nn(e,r);Te(e,a)}catch(a){const i=a;Ce.has(i.message)||(Ce.add(i.message),console.error(i.message))}};He(e=>{const t=[...fe.keys()];return Promise.all(t.map(Zn))});const Hn=new Map,j=new Map,ne=new Map,Le=new Set;let Pe=!1;const qn={iw:"he",ji:"yi",in:"id"},$e=e=>{Pe||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),Pe=!0)},Gn=(e,t,n)=>{e=e&&qn[e]||e,e==="no"&&(e="nb"),e==="zh"&&!t&&(n==="Hans"?t="CN":n==="Hant"&&(t="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",t="Latn");let s=`${e}_${t}`;return ge.includes(s)||(s=e,ge.includes(s))?j.has(s)?s:($e(s),h):h},Re=(e,t)=>{Hn.set(e,t)},Kn=e=>{if(!ne.get(e)){const t=j.get(e);if(!t)throw new Error(`CLDR data for locale ${e} is not loaded!`);ne.set(e,t(e))}return ne.get(e)},Jn=async(e,t,n)=>{const s=Gn(e,t,n),r=A("OpenUI5Support");if(r){const o=r.getLocaleDataObject();if(o){Re(s,o);return}}try{const o=await Kn(s);Re(s,o)}catch(o){const a=o;Le.has(a.message)||(Le.add(a.message),console.error(a.message))}},Xn=(e,t)=>{j.set(e,t)};Xn("en",async()=>(await fetch("https://sdk.openui5.org/1.120.5/resources/sap/ui/core/cldr/en.json")).json());He(()=>{const e=x();return Jn(e.getLanguage(),e.getRegion(),e.getScript())});var V;(function(e){e["SAP-icons"]="SAP-icons-v4",e.horizon="SAP-icons-v5",e["SAP-icons-TNT"]="tnt",e.BusinessSuiteInAppSymbols="business-suite"})(V||(V={}));const dt=e=>V[e]?V[e]:e;var g;(function(e){e.SAPIconsV4="SAP-icons-v4",e.SAPIconsV5="SAP-icons-v5",e.SAPIconsTNTV2="tnt-v2",e.SAPIconsTNTV3="tnt-v3",e.SAPBSIconsV1="business-suite-v1",e.SAPBSIconsV2="business-suite-v2"})(g||(g={}));const d=new Map;d.set("SAP-icons",{legacy:g.SAPIconsV4,sap_horizon:g.SAPIconsV5});d.set("tnt",{legacy:g.SAPIconsTNTV2,sap_horizon:g.SAPIconsTNTV3});d.set("business-suite",{legacy:g.SAPBSIconsV1,sap_horizon:g.SAPBSIconsV2});const Yn=(e,t)=>{if(d.has(e)){d.set(e,{...t,...d.get(e)});return}d.set(e,t)},Oe=e=>{const t=On()?"legacy":"sap_horizon";return d.has(e)?d.get(e)[t]:e},Qn=new Map,es=e=>Qn.get(e),ht=e=>{const t=es(O());return!e&&t?dt(t):Oe(e||"SAP-icons")},ts="legacy",Ie=new Map,he=N("SVGIcons.registry",new Map),se=N("SVGIcons.promises",new Map),De="ICON_NOT_FOUND",ns=async e=>{if(!se.has(e)){if(!Ie.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=Ie.get(e);se.set(e,t(e))}return se.get(e)},Me=e=>{Object.keys(e.data).forEach(t=>{const n=e.data[t];ss(t,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:e.collection,packageName:e.packageName})})},ss=(e,t)=>{const n=`${t.collection}/${e}`;he.set(n,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},rs=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=dt(t)),{name:e,collection:t}},re=async e=>{const{name:t,collection:n}=rs(e);let s=De;try{s=await ns(ht(n))}catch(o){console.error(o.message)}if(s===De)return s;const r=ke(n,t);return r||(Array.isArray(s)?s.forEach(o=>{Me(o),Yn(n,{[o.themeFamily||ts]:o.collection})}):Me(s),ke(n,t))},ke=(e,t)=>{const n=`${ht(e)}/${t}`;return he.get(n)},Es=async()=>(await re("edit"),await re("tnt/arrow"),await re("business-suite/3d"),Array.from(he.keys()));export{Ss as A,O as B,ot as C,ms as D,R as E,b as F,_s as G,Es as _,ys as a,ws as b,N as c,os as d,Xe as e,Zn as f,As as g,A as h,W as i,Qt as j,is as k,Kt as l,ps as m,hs as n,xt as o,fs as p,ds as q,gs as r,Us as s,ls as t,je as u,Gt as v,as as w,cs as x,us as y,Mn as z};