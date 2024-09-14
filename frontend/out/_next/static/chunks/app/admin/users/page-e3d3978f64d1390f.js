(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{8735:function(e,t,r){Promise.resolve().then(r.bind(r,7980))},7980:function(e,t,r){"use strict";r.r(t);var s=r(7437),n=r(824),a=r(6965),c=r(4298),l=r(6463),i=r(2265),o=r(1942);t.default=function(){let[e,t]=(0,i.useState)([]),[r,u]=(0,i.useState)("");async function d(){let e=await (0,c.AW)(r);console.log("res::::",e),e.error||t(e)}(0,i.useEffect)(()=>{d()},[]);let m=(0,l.useRouter)();return(0,s.jsxs)("div",{className:"w-full bg-my-gray-100",children:[(0,s.jsxs)("nav",{className:"bg-my-gray-105 w-full py-3 px-8 flex justify-between shadow-md  ",children:[(0,s.jsx)("div",{className:"text-my-gray-200",children:(0,s.jsx)("h1",{className:"text-2xl",children:"Users"})}),(0,s.jsxs)("div",{className:"flex justify-end space-x-3",children:[(0,s.jsx)(n.Z,{className:"bg-my-blue-600 border-0 text-white",children:"Help"}),(0,s.jsx)(a.Z,{onClick:()=>{m.push("./users/add-multiple-users")},className:"bg-my-blue-400 text-white",children:"Add Multiple Users"}),(0,s.jsx)(a.Z,{onClick:()=>{m.push("./users/add-user")},className:"bg-my-blue-400 text-white",children:"Add User"}),(0,s.jsx)(a.Z,{className:"bg-my-blue-400 text-white",children:"Export Users"})]})]}),(0,s.jsxs)("div",{className:"pt-10 px-5",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"me-5",children:(0,s.jsx)("input",{className:"px-2 py-2 rounded w-[320px] placeholder:text-black placeholder:font-medium",onChange:e=>{u(e.target.value)},placeholder:"Name / Username / Role",type:"text"})}),(0,s.jsxs)("div",{className:"flex space-x-4 items-center me-20",children:[(0,s.jsx)("div",{className:"bg-[#2A4999] w-8 h-8  "}),(0,s.jsx)("p",{className:"text-sm font-medium",children:"Hide Disabled Users"})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(n.Z,{onClick:()=>{d()},className:"bg-my-blue-300 text-white me-3 px-8",children:"Search"}),(0,s.jsx)(n.Z,{className:"bg-white text-my-blue-3 px-8",children:"Reset"})]})]}),(0,s.jsx)("div",{className:"w-full mt-3 text-center text-sm",children:(0,s.jsxs)("div",{className:"w-full rounded-t-2xl overflow-hidden ",children:[(0,s.jsxs)("div",{className:"bg-my-gray-105 grid grid-cols-5 text-left",children:[(0,s.jsx)("p",{className:"rounded-tl-2xl p-3",children:"Name"}),(0,s.jsx)("p",{className:"p-3",children:"Username"}),(0,s.jsx)("p",{className:"p-3",children:"Email"}),(0,s.jsx)("p",{className:"p-3",children:"Role"}),(0,s.jsxs)("div",{className:"flex justify-center gap-5",children:[(0,s.jsx)("p",{className:"p-3",children:"Status"}),(0,s.jsx)("p",{className:"p-3",children:"Action"})]})]}),(0,s.jsx)("div",{children:e&&0!==e.length&&e.map((e,t)=>(0,s.jsxs)("div",{className:"bg-white border grid grid-cols-5 text-left",children:[(0,s.jsx)("p",{className:"p-3",children:e.name}),(0,s.jsx)("p",{className:"p-3",children:e.username}),(0,s.jsx)("p",{className:"p-3",children:e.email}),(0,s.jsx)("p",{className:"p-3",children:e.role.map(e=>(0,s.jsxs)("span",{children:[e,","]}))}),(0,s.jsx)("div",{className:"flex justify-center gap-5 items-center",children:(0,s.jsx)("p",{className:"p-3",onClick:()=>{var t;t=e._id,m.push("/admin/users/add-user?_id=".concat(t))},children:(0,s.jsx)(o.ffH,{className:"block mx-auto"})})})]},t))})]})})]})]})}},824:function(e,t,r){"use strict";var s=r(7437);r(2265);var n=r(6164);t.Z=function(e){let{children:t,className:r,...a}=e;return(0,s.jsx)("button",{...a,className:(0,n.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300",r),children:t})}},6965:function(e,t,r){"use strict";var s=r(7437);r(2265);var n=r(6164);t.Z=function(e){let{children:t,className:r,onClick:a}=e;return(0,s.jsx)("button",{onClick:a,className:(0,n.m6)("border text-white bg-primary-300 px-4 py-2 rounded-md",r),children:t})}},4298:function(e,t,r){"use strict";r.d(t,{AW:function(){return c},PR:function(){return a},Sh:function(){return l}});var s=r(1633),n=r(8472);let a=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(s.M6,"/").concat(s.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(s.M6,"/").concat(s.SR,"?filter=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return o},Dy:function(){return i},M6:function(){return s},SR:function(){return a},TK:function(){return l},Tp:function(){return n},Tv:function(){return c},dt:function(){return u},it:function(){return d},rO:function(){return m}});let s="https://survey-3uf0.onrender.com",n="api/user/getUser",a="api/user/getAllUsers",c="api/user/addUsers",l="api/survey/saveSurvey",i="api/survey/updateSurvey",o="api/survey/getSurvey",u="api/survey/deleteSurvey",d="api/survey/getAllSurveys",m=["Contact Form","Address"]},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var s=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=s.createContext&&s.createContext(n),c=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var s,n;s=t,n=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>s.createElement(d,l({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:a,title:i}=e,u=function(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return void 0!==a?s.createElement(a.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[699,164,236,971,23,744],function(){return e(e.s=8735)}),_N_E=e.O()}]);