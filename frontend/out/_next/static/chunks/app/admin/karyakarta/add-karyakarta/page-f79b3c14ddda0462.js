(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2325],{78622:function(e,t,r){Promise.resolve().then(r.bind(r,9521))},16463:function(e,t,r){"use strict";var a=r(71169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},9521:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),s=r(39343),c=r(41942),o=r(84298),l=r(16463),u=r(60274),i=r(95650);let d=[{label:"User Name",name:"username",type:"text",placeholder:"User Name"},{label:"Name",name:"name",type:"text",placeholder:"Name"},{label:"Email",name:"email",type:"email",placeholder:"Email"},{label:"Password",name:"password",type:"password",placeholder:"Password"},{label:"Confirm Password",name:"confirm_password",type:"password",placeholder:"Confirm password"},{label:"AC_NO",name:"ac_no",type:"text",placeholder:"AC number"},{label:"BOOTH_NO",name:"booth_no",type:"text",placeholder:"Booth number"}];function m(){let[e,t]=(0,n.useState)([]),[r,m]=(0,n.useState)(1),[h,p]=(0,n.useState)(1),[f,g]=(0,n.useState)(),[y,b]=(0,n.useState)(""),[v,x]=(0,n.useState)(null),[w,S]=(0,n.useState)(null);console.log("user------------",v);let{register:j,watch:O,handleSubmit:N,setValue:P,formState:{errors:W}}=(0,s.cI)({defaultValues:f}),k=(0,l.useSearchParams)(),E=O("assigned_survey")||[],_=E.length===(null==e?void 0:e.length);(0,n.useEffect)(()=>{P("selectAll",_)},[E,P,_]),(0,n.useEffect)(()=>{x(k.get("_id"))},[]),(0,n.useEffect)(()=>{let e=(0,i.a_)();e&&S(e)},[]);let A=(0,l.useRouter)(),T=async e=>{delete e.confirm_password,w&&(e.created_by=w.email),await (0,o.Pl)(e)&&A.replace("/admin/karyakarta"),console.log("data----->",e)};async function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=await (0,u.tB)({page:e,filter:y,created_by:"rohitchand490@gmail.com"});p(r.totalPages),console.log("res::",r),t(r.survey)}async function C(){let e=await (0,o.PR)(v);console.log("ressese:://",e),e&&g(e)}return(0,n.useEffect)(()=>{M(r)},[r]),(0,n.useEffect)(()=>{v&&(console.log("user_id::"),C())},[v]),(0,n.useEffect)(()=>{f&&(console.log("userData::",f),Object.keys(f).forEach(e=>{P(e,f[e])}))},[f]),(0,a.jsxs)("div",{className:"w-full flex flex-col bg-my-gray-100 ",children:[(0,a.jsx)("nav",{className:"bg-my-gray-105 w-full py-3 px-8 shadow-md ",children:(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-2xl",children:"Add Karyakarta"})})}),(0,a.jsxs)("div",{className:"p-5 flex-1 text-sm text-[#797979]",children:[(0,a.jsx)("div",{className:"justify-center items-center min-h-screen bg-gray-100",children:(0,a.jsx)("form",{className:"bg-white shadow-lg p-6 rounded-lg h-full",children:(0,a.jsx)("div",{className:"flex justify-between space-x-4",children:(0,a.jsxs)("div",{className:"w-1/2 ",children:[(0,a.jsx)("div",{className:"w-full",children:d.map((e,t)=>(0,a.jsxs)("div",{className:"flex w-full space-y-2",children:[(0,a.jsx)("div",{className:"w-1/2 py-2",children:(0,a.jsx)("label",{className:"block  font-medium",children:e.label})}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsx)("input",{type:e.type,placeholder:e.placeholder,...j(e.name,{required:!0}),className:"border border-gray-300 rounded-md p-2 w-full"}),W[e.name]&&(0,a.jsx)("p",{className:"text-red-500",children:"This field is required"})]})]},t))}),(0,a.jsxs)("div",{className:"flex items-center mt-3 space-x-2 w-full",children:[(0,a.jsx)("div",{className:" w-1/2 font-medium",children:"User Status"}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsxs)("select",{...j("status",{required:!0}),className:"border border-gray-300 w-full text-center rounded-md p-2",children:[(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"})]}),W.status&&(0,a.jsx)("p",{className:"text-red-500",children:"User status is required"})]})]}),(0,a.jsxs)("div",{className:"flex space-x-3 mt-5 w-full",children:[(0,a.jsx)("div",{className:"w-1/2 font-medium",children:"Role"}),(0,a.jsxs)("div",{className:"flex flex-col gap-5 space-y-2 w-1/2",children:[[{label:"Panna Pramukh",name:"Panna Pramukh"},{label:"Booth Adhyaksh",name:"Booth Adhyaksh"},{label:"Mandal Adhyaksh",name:"Mandal Adhyaksh"}].map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"radio",id:e.name,value:e.name,...j("role",{required:!0}),className:"text-blue-500 h-5 w-5"}),(0,a.jsx)("label",{htmlFor:e.name,className:"font-medium flex items-center gap-3 cursor-pointer",children:e.label}),(0,a.jsx)(c.MXt,{className:"text-[#477BFF]"})]},e.name)),W.role&&(0,a.jsx)("p",{className:"text-red-500",children:"At least one role must be selected"})]})]})]})})})}),(0,a.jsxs)("div",{className:"sticky bottom-0 left-0 bg-white border-t p-2 flex justify-center space-x-5 mt-3",children:[(0,a.jsx)("button",{onClick:N(T),className:"bg-blue-500 text-white py-2 px-4 rounded-md ",children:v?"Update":"Save"}),(0,a.jsx)("button",{onClick:()=>A.back(),type:"button",className:"bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md ",children:"Cancel"})]})]})]})}t.default=()=>(0,a.jsx)(n.Suspense,{children:(0,a.jsx)(m,{})})},60274:function(e,t,r){"use strict";r.d(t,{Gn:function(){return i},LA:function(){return u},Vb:function(){return s},a2:function(){return l},ez:function(){return c},tB:function(){return o}});var a=r(1633),n=r(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.TK),data:e};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Dy,"?_id=").concat(e._id),data:e.formData};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=e.page||1,r=e.limit||10,s=e.filter||"",c=e.created_by,o=e.sortBy,l=e.sortOrder,u=e.published;"published"===e.published?u=!0:"unpublished"===e.published?u=!1:"all"===e.published&&(u=void 0);let i={method:"GET",url:"".concat(a.M6,"/").concat(a.it,"?filter=").concat(s,"&page=").concat(t,"&limit=").concat(r,"&sortBy=").concat(o,"&sortOrder=").concat(l,"&published=").concat(u,"&created_by=").concat(c)},d=await n.Z.request(i);return console.log(d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(a.M6,"/").concat(a.VJ),params:{survey_id:e.survey_id}},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.A5,"?_id=").concat(e._id)};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.dt),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},84298:function(e,t,r){"use strict";r.d(t,{AW:function(){return o},GK:function(){return s},PR:function(){return c},Pl:function(){return m},Sh:function(){return l},TJ:function(){return u},WC:function(){return d},sm:function(){return i}});var a=r(1633),n=r(38472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},d=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,r){"use strict";r.d(t,{Sg:function(){return c},aF:function(){return s},a_:function(){return o},p6:function(){return n}});let a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function n(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),n=a[t.getMonth()],s=t.getFullYear();return"".concat(r,"-").concat(n,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function c(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),n=a[t.getMonth()];return"".concat(r," ").concat(n)}function o(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return p},Dy:function(){return h},EK:function(){return l},HA:function(){return b},M6:function(){return a},SR:function(){return s},TK:function(){return m},Tp:function(){return n},Tv:function(){return c},VJ:function(){return x},dt:function(){return f},ht:function(){return d},it:function(){return g},jC:function(){return v},jV:function(){return j},q6:function(){return O},rO:function(){return w},rd:function(){return o},tm:function(){return u},tt:function(){return i},vx:function(){return y},x4:function(){return S}});let a="https://survey-3uf0.onrender.com",n="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",l="api/user/updateUsers",u="api/chatroom/getAllChatsData",i="api/user/getAllKaryakarta",d="api/user/createKaryakarta",m="api/survey/saveSurvey",h="api/survey/updateSurvey",p="api/survey/getSurvey",f="api/survey/deleteSurvey",g="api/survey/getAllSurveys",y="api/response/saveResponses",b="api/response/getAllSurveyResponses",v="api/response/getAllResponses",x="api/response/getSurveyResponseStats",w=["Contact Form","Address"],S="api/auth/login",j="api/auth/forgotPassword",O="api/auth/resetPassword"},91810:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var a=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,n;a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e){return t=>a.createElement(d,o({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:s,title:l}=e,i=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==s?a.createElement(s.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[7699,8472,9343,2971,7023,1744],function(){return e(e.s=78622)}),_N_E=e.O()}]);