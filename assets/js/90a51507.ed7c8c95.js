"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[7455],{5680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>y});var i=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),p=function(e){var r=i.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=p(e.components);return i.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=t,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return n?i.createElement(g,o(o({ref:r},s),{},{components:n})):i.createElement(g,o({ref:r},s))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},429:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(8168),t=(n(6540),n(5680));const a={id:"usage",title:"Public API",sidebar_label:"Public API",slug:"/core-library/usage"},o=void 0,l={unversionedId:"core-library/usage",id:"core-library/usage",title:"Public API",description:"The public API of the H3 Core Library is defined in the file h3api.h.",source:"@site/docs/core-library/usage.md",sourceDirName:"core-library",slug:"/core-library/usage",permalink:"/docs/core-library/usage",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Public API",sidebar_label:"Public API",slug:"/core-library/usage"},sidebar:"someSidebar",previous:{title:"Memory allocation",permalink:"/docs/core-library/custom-alloc"},next:{title:"Conversion from latitude/longitude to containing H3 cell index",permalink:"/docs/core-library/latLngToCellDesc"}},c={},p=[{value:"API Versioning",id:"api-versioning",level:2},{value:"Header preprocessing",id:"header-preprocessing",level:2},{value:"API preconditions",id:"api-preconditions",level:2},{value:"Function renaming",id:"function-renaming",level:2}],s={toc:p};function u(e){let{components:r,...n}=e;return(0,t.yg)("wrapper",(0,i.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The public API of the H3 Core Library is defined in the file ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/uber/h3/blob/master/src/h3lib/include/h3api.h.in"},(0,t.yg)("inlineCode",{parentName:"a"},"h3api.h")),"."),(0,t.yg)("h2",{id:"api-versioning"},"API Versioning"),(0,t.yg)("p",null,"The functions defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"h3api.h")," adhere to ",(0,t.yg)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),"."),(0,t.yg)("h2",{id:"header-preprocessing"},"Header preprocessing"),(0,t.yg)("p",null,"The file ",(0,t.yg)("inlineCode",{parentName:"p"},"h3api.h.in")," is preprocessed into the file ",(0,t.yg)("inlineCode",{parentName:"p"},"h3api.h")," as part of H3's build process. The preprocessing inserts the correct values for the ",(0,t.yg)("inlineCode",{parentName:"p"},"H3_VERSION_MAJOR"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"H3_VERSION_MINOR"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"H3_VERSION_PATCH")," macros."),(0,t.yg)("h2",{id:"api-preconditions"},"API preconditions"),(0,t.yg)("p",null,"The H3 API expects valid input. Behavior of the library may be undefined when given invalid input. Indexes should be validated with ",(0,t.yg)("inlineCode",{parentName:"p"},"isValidCell")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"isValidDirectedEdge")," as appropriate."),(0,t.yg)("p",null,"The library attempts to validate inputs and return useful error codes if input is invalid. Which inputs are validated, and how precisely they are\nvalidated, may change between versions of the library. As a result the specific error code returned may change."),(0,t.yg)("h2",{id:"function-renaming"},"Function renaming"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"./compilation-options#H3_PREFIX"},(0,t.yg)("inlineCode",{parentName:"a"},"H3_PREFIX"))," exists to rename all functions in the H3 public API with a prefix chosen at compile time. The default is to have no prefix.\nThis can be needed when linking multiple copies of the H3 library in order to avoid naming collisions. Internal functions and symbols are not renamed."))}u.isMDXComponent=!0}}]);