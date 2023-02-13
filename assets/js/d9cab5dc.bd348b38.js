"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,g=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_label:"Configuration.downloadHost"},p="Configuration.downloadHost property",l={unversionedId:"api/puppeteer.configuration.downloadhost",id:"version-19.7.0/api/puppeteer.configuration.downloadhost",title:"Configuration.downloadHost property",description:"Specifies the URL prefix that is used to download Chromium.",source:"@site/versioned_docs/version-19.7.0/api/puppeteer.configuration.downloadhost.md",sourceDirName:"api",slug:"/api/puppeteer.configuration.downloadhost",permalink:"/api/puppeteer.configuration.downloadhost",draft:!1,tags:[],version:"19.7.0",frontMatter:{sidebar_label:"Configuration.downloadHost"},sidebar:"api",previous:{title:"Configuration.defaultProduct",permalink:"/api/puppeteer.configuration.defaultproduct"},next:{title:"Configuration.downloadPath",permalink:"/api/puppeteer.configuration.downloadpath"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"configurationdownloadhost-property"}),"Configuration.downloadHost property"),(0,n.kt)("p",null,"Specifies the URL prefix that is used to download Chromium."),(0,n.kt)("p",null,"Can be overridden by ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_DOWNLOAD_HOST"),"."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface Configuration {\n  downloadHost?: string;\n}\n")),(0,n.kt)("h4",o({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,"Either ",(0,n.kt)("a",o({parentName:"p"},{href:"https://storage.googleapis.com"}),"https://storage.googleapis.com")," or ",(0,n.kt)("a",o({parentName:"p"},{href:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"}),"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"),", depending on the product."),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"This must include the protocol and may even need a path prefix."))}f.isMDXComponent=!0}}]);