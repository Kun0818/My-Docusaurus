"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||v[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"[JS] \u5ba3\u544a Declarations(var vs let vs const)",keywords:["JS","js","JavaScript","var","let","const"],description:"\u5728\u5b78\u7fd2JavaScript\u8def\u4e0a\uff0c\u4e00\u5b9a\u6703\u5fc5\u7d93\u8b8a\u6578\u5ba3\u544a\u9019\u4e00\u689d\u8def\uff0c\u9019\u5c07\u6703\u662f\u67d0\u4e9b\u4eba\u5728\u8def\u4e0a\u7684\u67d0\u500b\u7d46\u8173\u77f3\uff0c\u5c31\u8b93\u6211\u5011\u4e86\u89e3\u4e00\u4e0b\u9019\u4e9b\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5427\u3002",author:"Kun0818","og:title":"\u5ba3\u544a Declarations(var vs let vs const)\u3002","og:description":"\u5728\u5b78\u7fd2JavaScript\u8def\u4e0a\uff0c\u4e00\u5b9a\u6703\u5fc5\u7d93\u8b8a\u6578\u5ba3\u544a\u9019\u4e00\u689d\u8def\uff0c\u9019\u5c07\u6703\u662f\u67d0\u4e9b\u4eba\u5728\u8def\u4e0a\u7684\u67d0\u500b\u7d46\u8173\u77f3\uff0c\u5c31\u8b93\u6211\u5011\u4e86\u89e3\u4e00\u4e0b\u9019\u4e9b\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5427\u3002",sidebar_position:2},i=void 0,c={unversionedId:"JavaScript/Declarations",id:"JavaScript/Declarations",title:"[JS] \u5ba3\u544a Declarations(var vs let vs const)",description:"\u5728\u5b78\u7fd2JavaScript\u8def\u4e0a\uff0c\u4e00\u5b9a\u6703\u5fc5\u7d93\u8b8a\u6578\u5ba3\u544a\u9019\u4e00\u689d\u8def\uff0c\u9019\u5c07\u6703\u662f\u67d0\u4e9b\u4eba\u5728\u8def\u4e0a\u7684\u67d0\u500b\u7d46\u8173\u77f3\uff0c\u5c31\u8b93\u6211\u5011\u4e86\u89e3\u4e00\u4e0b\u9019\u4e9b\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5427\u3002",source:"@site/docs/JavaScript/Declarations.md",sourceDirName:"JavaScript",slug:"/JavaScript/Declarations",permalink:"/My-Docusaurus/docs/JavaScript/Declarations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"[JS] \u5ba3\u544a Declarations(var vs let vs const)",keywords:["JS","js","JavaScript","var","let","const"],description:"\u5728\u5b78\u7fd2JavaScript\u8def\u4e0a\uff0c\u4e00\u5b9a\u6703\u5fc5\u7d93\u8b8a\u6578\u5ba3\u544a\u9019\u4e00\u689d\u8def\uff0c\u9019\u5c07\u6703\u662f\u67d0\u4e9b\u4eba\u5728\u8def\u4e0a\u7684\u67d0\u500b\u7d46\u8173\u77f3\uff0c\u5c31\u8b93\u6211\u5011\u4e86\u89e3\u4e00\u4e0b\u9019\u4e9b\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5427\u3002",author:"Kun0818","og:title":"\u5ba3\u544a Declarations(var vs let vs const)\u3002","og:description":"\u5728\u5b78\u7fd2JavaScript\u8def\u4e0a\uff0c\u4e00\u5b9a\u6703\u5fc5\u7d93\u8b8a\u6578\u5ba3\u544a\u9019\u4e00\u689d\u8def\uff0c\u9019\u5c07\u6703\u662f\u67d0\u4e9b\u4eba\u5728\u8def\u4e0a\u7684\u67d0\u500b\u7d46\u8173\u77f3\uff0c\u5c31\u8b93\u6211\u5011\u4e86\u89e3\u4e00\u4e0b\u9019\u4e9b\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5427\u3002",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[JS] \u5e38\u6578\u3001\u8b8a\u6578(Constant vs Variable)",permalink:"/My-Docusaurus/docs/JavaScript/ConstantVsVariable"}},l={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"const",id:"const",level:2},{value:"let",id:"let",level:2},{value:"var",id:"var",level:2}],p={toc:s},u="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"JavaScript \u6709\u4e09\u7a2e\u5ba3\u544a\u65b9\u5f0f"),(0,a.kt)("p",null,"\u8b8a\u6578\u5ba3\u544a\u5c0d\u4e00\u500b\u525b\u63a5\u89f8\u524d\u7aef\u958b\u767c\u4e0d\u4e45\u7684\u4eba\u4f86\u8aaa\uff0c\u53ef\u80fd\u6703\u5c0dvar\u3001let \u8207 const \u4e4b\u9593\u7684\u5dee\u7570\u597d\u50cf\u4f3c\u61c2\u975e\u61c2\uff0c\u4f46\u662f\u53c8\u597d\u50cf\u4e0d\u77e5\u9053\u54ea\u88e1\u4e0d\u4e00\u6a23\u3002"),(0,a.kt)("p",null,"\u4e26\u4e14\u5728 JavaScript ES6 \u4e2d\uff0clet\u3001const \u53d6\u4ee3\u4e86 var \u4f5c\u70ba\u65b0\u7684\u5ba3\u544a\u8b8a\u6578\u6642\u4f7f\u7528\u7684\u65b9\u6cd5\uff0c\u8b93\u8b8a\u6578\u5728\u88ab\u5ba3\u544a\u7684\u6642\u5019\uff0c\u53ef\u4ee5\u66f4\u56b4\u8b39\uff0c\u4e0d\u592a\u6703\u767c\u751f\u91cd\u8907\u5ba3\u544a\u4e8b\u60c5\u767c\u751f\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u5728\u76ee\u524d\u7684\u5c08\u6848\u4e2d\uff0c\u5927\u90e8\u5206\u7684\u4eba\u90fd\u662f\u4f7f\u7528\u9019\u4f86\u500blet\u53caconst\u95dc\u9375\u5b57\u4f86\u5ba3\u544a\u8b8a\u6578\u5c45\u591a\uff0c\u4e0d\u592a\u6703\u4f7f\u7528\u5230var\uff0c\u9664\u975e\u662f\u7dad\u8b77\u820a\u5c08\u6848\uff0c\u624d\u6709\u6a5f\u6703\u78b0\u5230\u3002"),(0,a.kt)("p",null,"\u9019\u4e00\u7bc7\u6211\u5011\u5148\u5927\u81f4\u8b1b\u4e00\u4e0b\u4e09\u8005\u7684\u57fa\u672c\u64cd\u4f5c\u5427!"),(0,a.kt)("p",null,"\u6709\u6a5f\u6703\u518d\u6709\u6a5f\u6703\u4ecb\u7d39\u66f4\u591a\u5730\u96f7!!"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"const"},"const"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5ba3\u544a\u4e00\u500b\u53ea\u53ef\u8b80\u53d6\u7684\u4e0d\u53ef\u8b8a\u5e38\u6578")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7a0b\u5f0f\u57f7\u884c\u904e\u7a0b\u4e2d\uff0c\u8a2d\u5b9a\u5f8c\u4e0d\u80fd\u518d\u4fee\u6539\u7684\u7a31\u70ba\u5e38\u6578\u3002")),(0,a.kt)("h2",{id:"let"},"let"),(0,a.kt)("h2",{id:"var"},"var"))}v.isMDXComponent=!0}}]);