(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{833:function(e,t,r){Promise.resolve().then(r.bind(r,7432))},7432:function(e,t,r){"use strict";r.r(t);var a=r(7437);r(2265);var s=r(9343),n=r(1942),l=r(4298),c=r(6463);t.default=function(){let{register:e,handleSubmit:t,formState:{errors:r}}=(0,s.cI)(),i=(0,c.useRouter)(),o=async e=>{let t=[e];console.log(t),await (0,l.Sh)(t)&&i.replace("/admin/users")};return(0,a.jsxs)("div",{className:"w-full bg-my-gray-100",children:[(0,a.jsx)("nav",{className:"bg-my-gray-105 w-full py-3 px-8 shadow-md ",children:(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-2xl",children:"Add User"})})}),(0,a.jsx)("div",{className:"p-5 text-sm text-[#797979]",children:(0,a.jsx)("div",{className:"justify-center items-center min-h-screen bg-gray-100",children:(0,a.jsxs)("form",{onSubmit:t(o),className:"bg-white shadow-lg p-6 rounded-lg",children:[(0,a.jsx)("div",{className:"flex justify-between space-x-4",children:(0,a.jsxs)("div",{className:"w-1/2 ",children:[(0,a.jsx)("div",{className:"w-full",children:[{label:"User Name",name:"username",type:"text",placeholder:"User Name"},{label:"Name",name:"name",type:"text",placeholder:"Name"},{label:"Email",name:"email",type:"email",placeholder:"Email"},{label:"Password",name:"password",type:"password",placeholder:"Password"},{label:"Confirm Password",name:"confirmPassword",type:"password",placeholder:"Confirm password"}].map((t,s)=>(0,a.jsxs)("div",{className:"flex w-full space-y-2",children:[(0,a.jsx)("div",{className:"w-1/2 py-2",children:(0,a.jsx)("label",{className:"block  font-medium",children:t.label})}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsx)("input",{type:t.type,placeholder:t.placeholder,...e(t.name,{required:!0}),className:"border border-gray-300 rounded-md p-2 w-full"}),r[t.name]&&(0,a.jsx)("p",{className:"text-red-500",children:"This field is required"})]})]},s))}),(0,a.jsxs)("div",{className:"flex items-center mt-3 space-x-2 w-full",children:[(0,a.jsx)("div",{className:" w-1/2 font-medium",children:"User Status"}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsxs)("select",{...e("status",{required:!0}),className:"border border-gray-300 w-full text-center rounded-md p-2",children:[(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"})]}),r.status&&(0,a.jsx)("p",{className:"text-red-500",children:"User status is required"})]})]}),(0,a.jsxs)("div",{className:"flex space-x-3 mt-3 w-full",children:[(0,a.jsx)("div",{className:" w-1/2 font-medium",children:"Role"}),(0,a.jsxs)("div",{className:"space-y-2 w-1/2",children:[[{label:"Survey Manager",name:"surveyManager"},{label:"Booth Karyakarta",name:"boothKaryakarta"},{label:"Survey Collector",name:"surveyCollector"},{label:"Support Executive",name:"supportExecutive"},{label:"Data Handler",name:"dataHandler"}].map(t=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"radio",value:t.name,...e("role",{required:!0}),className:" text-blue-500"}),(0,a.jsx)("label",{htmlFor:t.name,className:" font-medium",children:t.label}),(0,a.jsx)(n.MXt,{className:"text-[#477BFF]"})]},t.name)),r.role&&(0,a.jsx)("p",{className:"text-red-500",children:"At least one role must be selected"})]})]}),(0,a.jsx)("div",{className:"space-y-2 mt-3 w-full",children:[{label:"Auto Assign Survey",name:"autoAssignSurvey"},{label:"View Own Collected Data",name:"viewCollectedData"},{label:"Prevent Data Download",name:"preventDataDownload"},{label:"Prevent Data Analytics",name:"preventDataAnalytics"},{label:"Prevent Spatial Report",name:"preventSpatialReport"},{label:"Remove Audio Recording Access",name:"removeAudioAccess"},{label:"View Pending Data",name:"viewPendingData"}].map(t=>(0,a.jsxs)("div",{className:"flex items-center w-full",children:[(0,a.jsxs)("div",{className:"flex space-x-2 items-center w-1/2",children:[(0,a.jsx)("label",{htmlFor:t.name,className:" font-medium",children:t.label}),(0,a.jsx)(n.MXt,{className:"text-[#477BFF]"})]}),(0,a.jsx)("input",{type:"checkbox",...e("".concat(t.name),{required:!1}),className:"rounded text-blue-500 float-end"})]},t.name))})]})}),(0,a.jsxs)("div",{className:"flex justify-center space-x-5 mt-3",children:[(0,a.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-md ",children:"Save"}),(0,a.jsx)("button",{type:"button",className:"bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md ",children:"Cancel"})]})]})})})]})}},4298:function(e,t,r){"use strict";r.d(t,{Rf:function(){return n},Sh:function(){return l}});var a=r(1633),s=r(8472);let n=async()=>{try{let e=localStorage.getItem("token"),t={method:"GET",url:"".concat(a.M6,"/").concat(a.Vf),headers:{Authorization:"Bearer ".concat(e)}};return(await s.Z.request(t)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},data:e};console.log(r);let n=await s.Z.request(r);return console.log(n),n.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{M6:function(){return a},TK:function(){return c},Tv:function(){return n},Vf:function(){return s},it:function(){return i},rO:function(){return l}});let a="http://localhost:6969",s="api/user/getUsers",n="api/user/addUsers",l=["Contact Form","Address"],c="api/survey/saveSurvey",i="api/survey/getAllSurveys"},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),l=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var a,s;a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,c({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:n,title:i}=e,u=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,l),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[699,236,343,971,23,744],function(){return e(e.s=833)}),_N_E=e.O()}]);