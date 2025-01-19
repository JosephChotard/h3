"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[3837],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?i.createElement(h,o(o({ref:t},g),{},{components:n})):i.createElement(h,o({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(8168),r=(n(6540),n(5680));const a={id:"joining",title:"Joining",sidebar_label:"Joining",slug:"/highlights/joining"},o=void 0,s={unversionedId:"highlights/joining",id:"highlights/joining",title:"Joining",description:"H3, acting as a standard unit of analysis, can be used to join disparate data sets.",source:"@site/docs/highlights/joining.md",sourceDirName:"highlights",slug:"/highlights/joining",permalink:"/docs/highlights/joining",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/joining.md",tags:[],version:"current",frontMatter:{id:"joining",title:"Joining",sidebar_label:"Joining",slug:"/highlights/joining"},sidebar:"someSidebar",previous:{title:"Aggregation",permalink:"/docs/highlights/aggregation"},next:{title:"Flow Modelling",permalink:"/docs/highlights/flowmodel"}},l={},c=[{value:"References",id:"references",level:2}],g={toc:c};function p(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,i.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"H3, acting as a standard unit of analysis, can be used to join disparate data sets."),(0,r.yg)("p",null,"The H3 library contains support for indexing points, lines, and regions into the grid. Other data formats, such as rasters, can be indexed into H3 using combinations of these basic indexing operations. Once data is indexed into H3 indexes, it can be easily joined with other datasets on the H3 index."),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("a",{parentName:"li",href:"https://www.placekey.io/"},"Placekey")),(0,r.yg)("li",{parentName:"ul"},"Jupyter notebook example: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/uber/h3-py-notebooks/blob/master/notebooks/unified_data_layers.ipynb"},"Unified Data Layers")),(0,r.yg)("li",{parentName:"ul"},"Observable notebook example: ",(0,r.yg)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-tutorial-suitability-analysis?collection=@nrabinowitz/h3-tutorial"},"Suitability Analysis"))))}p.isMDXComponent=!0}}]);