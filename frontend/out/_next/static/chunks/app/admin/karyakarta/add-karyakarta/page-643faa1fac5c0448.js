(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2325],{78622:function(e,t,r){Promise.resolve().then(r.bind(r,9521))},9521:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),s=r(39343),c=r(84298),o=r(16463),u=r(95650),i=r(88726),l=r(17148),d=r(75290);let m=[{label:"User Name",name:"username",type:"text",placeholder:"User Name"},{label:"Name",name:"name",type:"text",placeholder:"Name"},{label:"Email",name:"email",type:"email",placeholder:"Email"},{label:"Password",name:"password",type:"password",placeholder:"Password"},{label:"Confirm Password",name:"confirm_password",type:"password",placeholder:"Confirm password"},{label:"AC_NO",name:"ac_no",type:"text",placeholder:"AC number"},{label:"BOOTH_NO",name:"booth_no",type:"text",placeholder:"Booth number"}];function h(){let[e,t]=(0,n.useState)(),[r,h]=(0,n.useState)(null),[p,f]=(0,n.useState)(null),[g,y]=(0,n.useState)([]),[x,w]=(0,n.useState)(null),{register:S,watch:v,handleSubmit:N,setValue:b,formState:{errors:j}}=(0,s.cI)({defaultValues:e}),W=(0,o.useSearchParams)();v("ac_no"),v("booth_no");let k=v("role"),[P,q]=(0,n.useState)([]);console.log("role is -->","Panna Pramukh"===k),(0,n.useEffect)(()=>{(async()=>{try{let e=await (0,d.F3)({category:"karyakarta"});e.success?q(e.roles):i.ZP.error("something went wrong while fetching users")}catch(e){console.error("Error fetching roles:",e)}})()},[W]),(0,n.useEffect)(()=>{h(W.get("_id"))},[]),(0,n.useEffect)(()=>{let e=(0,u.a_)();e&&f(e)},[]);let T=(0,o.useRouter)(),A=async e=>{let t;if(x&&(e.survey_id=x),g&&(e.responses=g),e.password.trim().length>0&&e.password!==e.confirm_password){i.ZP.error("Passwords donot match!");return}delete e.confirm_password,p&&(e.created_by=p.email),r?(e.id=r,0===e.password.trim().length&&delete e.password,t=await (0,c.sE)(e)):t=await (0,c.Pl)(e),console.log("response after creating karyakarta --->",t),t.success?(i.ZP.success("Karyakarta created successfully!"),T.replace("/admin/karyakarta")):t.error?i.ZP.error(t.error.response.data.message):i.ZP.error("Failed to create karyakarta!"),console.log("data----->",e)};async function M(){let e=await (0,c.W6)(r);console.log("ressese:://",e),e&&t(e)}return(0,n.useEffect)(()=>{r&&(console.log("user_id::"),M())},[r]),(0,n.useEffect)(()=>{e&&(console.log("userData::",e),Object.keys(e).forEach(t=>{b(t,e[t])}),b("role",e.role[0]),b("password",""),b("confirm_password",""))},[e]),(0,a.jsxs)("div",{className:"w-full min-h-[calc(100vh-80px)] flex flex-col bg-my-gray-100 ",children:[(0,a.jsx)("nav",{className:"bg-my-gray-105 w-full py-3 px-8 ",children:(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-xl font-semibold",children:"Add Karyakarta"})})}),(0,a.jsxs)("div",{className:"p-5 flex-1 text-sm text-[#797979]",children:[(0,a.jsx)("div",{className:"justify-center items-center",children:(0,a.jsx)("form",{className:"bg-lighter-gray border-2 p-6 rounded-[20px] h-full",children:(0,a.jsxs)("div",{className:"flex gap-8 space-x-4",children:[(0,a.jsxs)("div",{className:"w-1/2 ",children:[(0,a.jsx)("div",{className:"w-full",children:m.map((e,t)=>(0,a.jsxs)("div",{className:"flex w-full space-y-2",children:[(0,a.jsx)("div",{className:"w-1/2 py-2",children:(0,a.jsx)("label",{className:"block  font-medium",children:e.label})}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsx)("input",{type:e.type,placeholder:e.placeholder,...S(e.name,{required:!r}),className:"border border-gray-300 rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-primary-50"}),j[e.name]&&(0,a.jsx)("p",{className:"text-red-500",children:"This field is required"})]})]},t))}),(0,a.jsxs)("div",{className:"flex items-center mt-3 space-x-2 w-full",children:[(0,a.jsx)("div",{className:" w-1/2 font-medium",children:"District"}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsxs)("select",{...S("district",{required:!r}),className:"border border-gray-300 w-full text-center rounded-md p-2 outline-none focus:ring-2 focus:ring-primary-50",children:[(0,a.jsx)("option",{value:"",selected:!0,disabled:!0,className:"disabled:bg-gray-200",children:"Select Value"}),l.$U.map(e=>(0,a.jsx)("option",{value:e,children:e}))]}),j.status&&(0,a.jsx)("p",{className:"text-red-500",children:"User status is required"})]})]}),(0,a.jsxs)("div",{className:"flex items-center mt-3 space-x-2 w-full",children:[(0,a.jsx)("div",{className:" w-1/2 font-medium",children:"User Status"}),(0,a.jsxs)("div",{className:"w-1/2",children:[(0,a.jsxs)("select",{...S("status",{required:!r}),className:"border border-gray-300 w-full text-center rounded-md p-2 outline-none focus:ring-2 focus:ring-primary-50",children:[(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"})]}),j.status&&(0,a.jsx)("p",{className:"text-red-500",children:"User status is required"})]})]})]}),(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Role"}),(0,a.jsxs)("div",{className:"flex flex-col gap-5 space-y-2 w-1/2",children:[P.map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"radio",id:e._id,value:e._id,...S("role",{required:!r}),className:"text-blue-500 h-5 w-5"}),(0,a.jsx)("label",{htmlFor:e._id,className:"font-medium flex items-center gap-3 cursor-pointer",children:e.name})]},e._id)),j.role&&(0,a.jsx)("p",{className:"text-red-500",children:"At least one role must be selected"})]})]})})]})})}),(0,a.jsxs)("div",{className:"sticky bottom-0 left-0  p-2 flex justify-center space-x-5 mt-3",children:[(0,a.jsx)("button",{onClick:N(A),className:"bg-primary-300 text-white py-2 px-4 rounded-md ",children:r?"Update":"Save"}),(0,a.jsx)("button",{onClick:()=>T.back(),type:"button",className:"bg-white border-[#7C7C7C] border-2  py-2 px-4 rounded-md ",children:"Cancel"})]})]})]})}t.default=()=>(0,a.jsx)(n.Suspense,{children:(0,a.jsx)(h,{})})},75290:function(e,t,r){"use strict";r.d(t,{F3:function(){return c},Rd:function(){return i},fA:function(){return o},ul:function(){return u},xJ:function(){return s}});var a=r(1633),n=r(38472);let s=async()=>{try{let e={method:"GET",url:"".concat(a.M6,"/").concat(a.Ny)},t=await n.Z.request(e);return console.log("response --->",t),t.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.mW),params:e},r=await n.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.ql),data:e},r=await n.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.ND),data:e},r=await n.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.VH),data:e},r=await n.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},84298:function(e,t,r){"use strict";r.d(t,{AW:function(){return u},GK:function(){return c},PR:function(){return o},Pl:function(){return h},Sh:function(){return i},TJ:function(){return l},W6:function(){return g},WC:function(){return m},Yx:function(){return y},eD:function(){return s},qq:function(){return f},sE:function(){return p},sm:function(){return d}});var a=r(1633),n=r(38472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},y=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.pX),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,r){"use strict";r.d(t,{Sg:function(){return c},aF:function(){return s},a_:function(){return o},p6:function(){return n}});let a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function n(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),n=a[t.getMonth()],s=t.getFullYear();return"".concat(r,"-").concat(n,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function c(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),n=a[t.getMonth()];return"".concat(r," ").concat(n)}function o(){{let e=localStorage.getItem("jwt");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return w},Dy:function(){return x},EK:function(){return i},HA:function(){return b},M6:function(){return a},ND:function(){return I},Ny:function(){return _},Pn:function(){return m},SR:function(){return s},TK:function(){return y},Tp:function(){return n},Tv:function(){return c},UY:function(){return R},VH:function(){return O},VJ:function(){return W},Yn:function(){return p},d1:function(){return B},dt:function(){return S},ht:function(){return h},it:function(){return v},jC:function(){return j},jV:function(){return T},mW:function(){return C},nM:function(){return Z},pX:function(){return f},q6:function(){return A},qJ:function(){return g},ql:function(){return E},r1:function(){return M},rO:function(){return k},rd:function(){return o},sC:function(){return u},sI:function(){return P},tm:function(){return l},tt:function(){return d},vx:function(){return N},we:function(){return U},x4:function(){return q},xD:function(){return D}});let a="https://survey-3uf0.onrender.com",n="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",u="api/user/updateUser",i="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",m="api/user/getKaryakarta",h="api/user/createKaryakarta",p="api/user/updateKaryakarta",f="api/user/getUsersByAcList",g="api/user/updateMultipleKaryakarta",y="api/survey/saveSurvey",x="api/survey/updateSurvey",w="api/survey/getSurvey",S="api/survey/deleteSurvey",v="api/survey/getAllSurveys",N="api/response/saveResponses",b="api/response/getAllSurveyResponses",j="api/response/getAllResponses",W="api/response/getSurveyResponseStats",k=["Contact Form","Address"],P="api/dashboard",q="api/auth/login",T="api/auth/forgotPassword",A="api/auth/resetPassword",M="api/auth/adminLogin",_="api/role/allRoles",C="api/role/roles",E="api/role/create",I="api/role/update",O="api/role/delete",Z="api/todo/create",D="api/todo/todo",U="api/todo/todos",B="api/todo/update",R="api/todo/delete"},17148:function(e,t,r){"use strict";r.d(t,{$U:function(){return c},Hf:function(){return n},Xl:function(){return a},wC:function(){return s}});let a=["Single line Text Input","Multiline Text Input","Number Input","Email","Phone Number","Radio Button","DropDown","DropDown With Other","Checkbox List","Checkbox List With Other","Number Input","Date"],n=["DropDown Grid","Single line Text Grid","Number Grid","Radio Grid","Checkbox Grid"],s={style:{background:"#ff4d4d",color:"#fff",maxWidth:"600px"},iconTheme:{primary:"#fff",secondary:"#ff4d4d"}},c=["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]}},function(e){e.O(0,[8472,8726,9527,2971,7023,1744],function(){return e(e.s=78622)}),_N_E=e.O()}]);