(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3504:function(e,t,r){Promise.resolve().then(r.bind(r,8726)),Promise.resolve().then(r.bind(r,9455)),Promise.resolve().then(r.bind(r,8569))},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},9455:function(e,t,r){"use strict";var n=r(7437),s=r(6463),o=r(824);t.default=function(){let e=(0,s.useRouter)();return(0,n.jsxs)("nav",{className:"z-50 relative flex justify-between px-8 py-[18px] shadow-md",children:[(0,n.jsx)("h1",{onClick:()=>e.push("/"),className:"font-bold text-primary-300 text-2xl cursor-pointer",children:"SURVEY LOGO"}),(0,n.jsxs)("div",{className:"flex gap-9 justify-center items-center",children:[(0,n.jsx)(o.Z,{className:"text-[14px] font-semibold",children:"Notifications"}),(0,n.jsxs)("h3",{className:"text-primary-300 text-[12px]",children:["Welcome ",(0,n.jsx)("span",{className:"font-semibold text-[16px]",children:"user!"})]})]})]})}},8569:function(e,t,r){"use strict";var n=r(7437),s=r(3781),o=r(8554),a=r(6463);let i=["/admin/data/analytics","/admin/surveys/questions"];t.default=function(){let e=(0,a.usePathname)(),t=!i.includes(e),r=(0,a.useRouter)(),c=[{icon:(0,n.jsx)(s.qwN,{size:24}),name:"Dashboard"},{icon:(0,n.jsx)(s.yrZ,{size:24}),name:"Surveys"},{icon:(0,n.jsx)(s.VEC,{size:24}),name:"Data"},{icon:(0,n.jsx)(o.Bmn,{size:24}),name:"Users"},{icon:(0,n.jsx)(s.y0W,{size:24}),name:"Reports"},{icon:(0,n.jsx)(s.VJk,{size:24}),name:"Settings"}];return(0,n.jsx)("aside",{className:"h-screen  border-2 sticky left-0 top-0 ".concat(t?"min-w-[243px]":"min-w-[75px]"),children:(0,n.jsx)("div",{className:"flex flex-col items-start pt-6 ".concat(t?"px-2":""),children:c.map((s,o)=>(0,n.jsxs)("button",{onClick:()=>{"Dashboard"===s.name?r.push("/admin"):r.push("/admin/".concat(s.name.toLowerCase()))},className:"rounded-md px-8 py-4 flex gap-2 items-center text-[16px] text-secondary-300 font-semibold w-full ".concat(e==="/admin/".concat(s.name.toLowerCase())?"border-2 bg-primary-300 bg-opacity-10 border-primary-300":""),children:[s.icon,t&&s.name]},o))})})}},824:function(e,t,r){"use strict";var n=r(7437);r(2265);var s=r(6164);t.Z=function(e){let{children:t,className:r,...o}=e;return(0,n.jsx)("button",{...o,className:(0,s.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300",r),children:t})}},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(s),a=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(m,i({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:s,size:o,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,a),m=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[779,280,164,726,971,23,744],function(){return e(e.s=3504)}),_N_E=e.O()}]);