(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3887],{4049:function(e,t,r){Promise.resolve().then(r.bind(r,9019))},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},9019:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265),s=r(9343),c=r(1942),o=r(4298),l=r(6463),i=r(274);function u(){let[e,t]=(0,n.useState)([]),[r,u]=(0,n.useState)(1),[d,m]=(0,n.useState)(1),[h,p]=(0,n.useState)(),[f,g]=(0,n.useState)(),[y,v]=(0,n.useState)([]),[x,b]=(0,n.useState)(""),[w,j]=(0,n.useState)(null),{register:S,watch:N,handleSubmit:P,setValue:O,formState:{errors:_}}=(0,s.cI)({defaultValues:h}),W=(0,l.useSearchParams)(),k=N("assigned_survey")||[],A=k.length===(null==e?void 0:e.length);(0,n.useEffect)(()=>{O("selectAll",A)},[k,O,A]),(0,n.useEffect)(()=>{j(W.get("_id"))},[]);let E=(0,l.useRouter)(),q=e=>e.trim().split("\n").map(e=>e.split(",").map(e=>e.trim())),C=async e=>{delete e.confirm_password;let t=q(f);v(t),e.userDetails=t;for(let e=0;e<t.length;e++){if(4!==t[e].length){alert("Please enter user details in correct format");return}if(""===t[e][0]||""===t[e][1]||""===t[e][2]||""===t[e][3]){alert("Some Fields are empty");return}}await (0,o.TJ)(e)&&E.replace("/admin/users")};async function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=await (0,i.tB)({page:e,filter:x,created_by:"rohitchand490@gmail.com"});m(r.totalPages),console.log("res::----",r),t(r.survey)}async function M(){let e=await (0,o.PR)(w);console.log("ressese:://",e),e&&p(e)}return(0,n.useEffect)(()=>{T(r)},[r]),(0,n.useEffect)(()=>{w&&(console.log("user_id::"),M())},[w]),(0,n.useEffect)(()=>{h&&(console.log("userData::",h),Object.keys(h).forEach(e=>{O(e,h[e])}))},[h]),(0,a.jsxs)("div",{className:"w-full bg-my-gray-100",children:[(0,a.jsx)("nav",{className:"bg-my-gray-105 w-full py-3 px-8 shadow-md ",children:(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-2xl",children:"Add User"})})}),(0,a.jsx)("div",{className:"p-5 text-sm text-[#797979]",children:(0,a.jsx)("div",{className:"justify-center items-center min-h-screen bg-gray-100",children:(0,a.jsxs)("form",{onSubmit:P(C),className:"bg-white shadow-lg p-6 rounded-lg",children:[(0,a.jsxs)("div",{className:"flex justify-between space-x-4",children:[(0,a.jsxs)("div",{className:"w-[60%] ",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex w-full space-y-2",children:[(0,a.jsx)("div",{className:"w-[40%] py-2",children:(0,a.jsx)("label",{className:"block  font-medium",children:"User Details"})}),(0,a.jsxs)("div",{className:"w-[60%]",children:[(0,a.jsx)("textarea",{onChange:e=>{g(e.target.value)},placeholder:"John Doe, johndoe, john@example.com, password123",rows:5,className:"border border-gray-300 rounded-md p-2 w-full",required:!0}),(0,a.jsx)("p",{className:"text-xs",children:"Enter Values As Name, Username, Email, Password. One Row will have one User Detail."})]})]})}),(0,a.jsxs)("div",{className:"flex items-center mt-3  w-full",children:[(0,a.jsx)("div",{className:" w-[40%] font-medium",children:"User Status"}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsxs)("select",{...S("status",{required:!0}),className:"border border-gray-300 w-full text-center rounded-md p-2",children:[(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"})]}),_.status&&(0,a.jsx)("p",{className:"text-red-500",children:"User status is required"})]})]}),(0,a.jsxs)("div",{className:"flex mt-3 w-full",children:[(0,a.jsx)("div",{className:" w-[40%] font-medium",children:"Role"}),(0,a.jsxs)("div",{className:"space-y-2 w-1/2",children:[[{label:"Survey Manager",name:"Survey Manager"},{label:"Booth Karyakarta",name:"Booth Karyakarta"},{label:"Survey Collector",name:"Survey Collector"},{label:"Support Executive",name:"Support Executive"}].map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"Checkbox",value:e.name,...S("role",{required:!0}),className:" text-blue-500"}),(0,a.jsx)("label",{htmlFor:e.name,className:" font-medium",children:e.label}),(0,a.jsx)(c.MXt,{className:"text-[#477BFF]"})]},e.name)),_.role&&(0,a.jsx)("p",{className:"text-red-500",children:"At least one role must be selected"})]})]}),(0,a.jsx)("div",{className:"space-y-2 mt-3 w-full",children:[{label:"Auto Assign Survey",name:"auto_assign_survey"},{label:"View Own Collected Data",name:"view_own_collected_data"},{label:"Prevent Data Download",name:"prevent_data_download"},{label:"Prevent Data Analytics",name:"prevent_data_analytics"},{label:"Prevent Spatial Report",name:"prevent_spatial_report"},{label:"Remove Audio Recording Access",name:"remove_audio_recording_access"},{label:"View Pending Data",name:"view_pending_data"}].map(e=>(0,a.jsxs)("div",{className:"flex items-center w-full",children:[(0,a.jsxs)("div",{className:"flex space-x-2 items-center w-[40%]",children:[(0,a.jsx)("label",{htmlFor:e.name,className:" font-medium",children:e.label}),(0,a.jsx)(c.MXt,{className:"text-[#477BFF]"})]}),(0,a.jsx)("input",{type:"checkbox",...S("".concat(e.name),{required:!1}),className:"rounded text-blue-500 float-end"})]},e.name))})]}),(0,a.jsx)("div",{className:"w-[40%]",children:(0,a.jsxs)("div",{className:"space-y-4 p-2 rounded-lg border border-[#939393] max-h-fit",children:[(0,a.jsx)("p",{className:"text-gray-700 font-medium",children:"Assign Survey"}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("input",{type:"text",onChange:e=>b(e.target.value),placeholder:"Search survey",className:"border border-gray-300 rounded-md px-2 py-1 w-4/5"}),(0,a.jsx)("button",{type:"button",className:"text-white bg-primary-300 p-1 px-4 rounded-md",onClick:()=>{u(1),T()},children:"Search"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"checkbox",id:"selectAllUsers",checked:A,onChange:t=>{O("assigned_survey",t.target.checked?e.map(e=>e._id):[])},className:"rounded text-blue-500"}),(0,a.jsx)("label",{htmlFor:"selectAllUsers",className:"text-gray-700 font-semibold",children:"Select All"})]}),null==e?void 0:e.map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"checkbox",...S("assigned_survey"),value:e._id,checked:k.includes(e._id),onChange:t=>{t.target.checked?O("assigned_survey",[...k,e._id]):O("assigned_survey",k.filter(t=>t!==e._id))},className:"rounded text-blue-500"}),(0,a.jsx)("label",{className:"text-gray-700",children:e.name})]},e._id))]}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("button",{type:"button",onClick:()=>{r>1&&u(r-1)},className:"text-white bg-primary-300 p-1 px-4 rounded-md",children:"Previous"}),(0,a.jsxs)("p",{className:"text-xs",children:[r," of ",d," Pages"]}),(0,a.jsx)("button",{type:"button",onClick:()=>{r<d&&u(r+1)},className:"text-white bg-primary-300 p-1 px-4 rounded-md",children:"Next"})]})]})})]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-5 mt-3",children:[(0,a.jsx)("button",{type:"submit",className:"bg-primary-300 text-white py-2 px-4 rounded-md ",children:w?"Update":"Save"}),(0,a.jsx)("button",{type:"button",className:"bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md ",children:"Cancel"})]})]})})})]})}t.default=()=>(0,a.jsx)(n.Suspense,{children:(0,a.jsx)(u,{})})},274:function(e,t,r){"use strict";r.d(t,{Gn:function(){return u},LA:function(){return i},Vb:function(){return s},a2:function(){return l},ez:function(){return c},tB:function(){return o}});var a=r(1633),n=r(8472);let s=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.TK),headers:{"Content-Type":"application/json"},data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=e.page||1,r=e.limit||10,s=e.filter||"",c=e.created_by,o=e.sortBy,l=e.sortOrder,i=e.published;"published"===e.published?i=!0:"unpublished"===e.published?i=!1:"all"===e.published&&(i=void 0);let u={method:"GET",url:"".concat(a.M6,"/").concat(a.it,"?filter=").concat(s,"&page=").concat(t,"&limit=").concat(r,"&sortBy=").concat(o,"&sortOrder=").concat(l,"&published=").concat(i,"&created_by=").concat(c)},d=await n.Z.request(u);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(a.M6,"/").concat(a.VJ),params:{survey_id:e.survey_id,filters:e.filters}},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.A5,"?_id=").concat(e._id)};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.dt),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},4298:function(e,t,r){"use strict";r.d(t,{AW:function(){return l},GK:function(){return c},PR:function(){return o},Pl:function(){return h},Sh:function(){return i},TJ:function(){return u},W6:function(){return g},WC:function(){return m},Yx:function(){return y},eD:function(){return s},qq:function(){return f},sE:function(){return p},sm:function(){return d}});var a=r(1633),n=r(8472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},y=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.pX),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return x},Dy:function(){return v},EK:function(){return i},HA:function(){return S},M6:function(){return a},ND:function(){return T},Ny:function(){return E},Pn:function(){return m},SR:function(){return s},TK:function(){return y},Tp:function(){return n},Tv:function(){return c},UY:function(){return U},VH:function(){return M},VJ:function(){return P},Yn:function(){return p},d1:function(){return R},dt:function(){return b},ht:function(){return h},it:function(){return w},jC:function(){return N},jV:function(){return k},mW:function(){return q},nM:function(){return B},pX:function(){return f},q6:function(){return A},qJ:function(){return g},ql:function(){return C},rO:function(){return O},rd:function(){return o},sC:function(){return l},sI:function(){return _},tm:function(){return u},tt:function(){return d},vx:function(){return j},we:function(){return I},x4:function(){return W},xD:function(){return D}});let a="https://survey-3uf0.onrender.com",n="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",l="api/user/updateUser",i="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",m="api/user/getKaryakarta",h="api/user/createKaryakarta",p="api/user/updateKaryakarta",f="api/user/getUsersByAcList",g="api/user/updateMultipleKaryakarta",y="api/survey/saveSurvey",v="api/survey/updateSurvey",x="api/survey/getSurvey",b="api/survey/deleteSurvey",w="api/survey/getAllSurveys",j="api/response/saveResponses",S="api/response/getAllSurveyResponses",N="api/response/getAllResponses",P="api/response/getSurveyResponseStats",O=["Contact Form","Address"],_="api/dashboard",W="api/auth/login",k="api/auth/forgotPassword",A="api/auth/resetPassword",E="api/role/allRoles",q="api/role/roles",C="api/role/create",T="api/role/update",M="api/role/delete",B="api/todo/create",D="api/todo/todo",I="api/todo/todos",R="api/todo/update",U="api/todo/delete"},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var a=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,n;a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,o({attr:i({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,i({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:s,title:l}=e,u=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==s?a.createElement(s.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[7699,8472,9343,2971,7023,1744],function(){return e(e.s=4049)}),_N_E=e.O()}]);