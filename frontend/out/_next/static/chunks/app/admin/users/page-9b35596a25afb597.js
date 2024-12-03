(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9674],{1180:function(e,t,r){Promise.resolve().then(r.bind(r,7980))},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},7980:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(824),s=r(6965),c=r(4298),o=r(6463),i=r(2265),u=r(1942),l=r(9005),d=r(9824),m=r(106);t.default=function(){let[e,t]=(0,i.useState)([]),[r,h]=(0,i.useState)(""),[p,f]=(0,i.useState)(10),[x,g]=(0,i.useState)(1),[y,j]=(0,i.useState)(0),[v,N]=(0,i.useState)(!1);async function S(){N(!0);let e=await (0,c.AW)({searchBarInput:r,page:x,limit:p});N(!1),console.log("res::::",e),e.error||(t(e.data),j(e.totalPages))}(0,i.useEffect)(()=>{S()},[p,x]);let w=(0,o.useRouter)(),b=()=>{};return(0,n.jsxs)("div",{className:"w-full bg-[#ECF0FA] text-sm h-full",children:[(0,n.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between",children:[(0,n.jsx)("div",{className:"text-my-gray-200",children:(0,n.jsx)("h1",{className:"text-2xl",children:"Users"})}),(0,n.jsxs)("div",{className:"flex justify-end space-x-3 text-xs",children:[(0,n.jsx)(s.Z,{onClick:()=>w.push("/admin/users/manage-roles"),className:"bg-my-blue-600",children:"Manage Roles"}),(0,n.jsx)(s.Z,{onClick:()=>{w.push("./users/add-multiple-users")},children:"Add Multiple Users"}),(0,n.jsx)(s.Z,{onClick:()=>{w.push("./users/add-user")},children:"Add User"}),(0,n.jsx)(s.Z,{children:"Export Users"})]})]}),(0,n.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("input",{className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Name / Username / Role",value:r,onChange:e=>h(e.target.value)}),(0,n.jsxs)("div",{className:"flex space-x-3",children:[(0,n.jsx)(s.Z,{onClick:()=>{S()},className:"text-[14px] font-semibold flex gap-2 items-center justify-center",children:"Search"}),(0,n.jsx)("div",{className:"flex space-x-3",children:(0,n.jsx)(a.Z,{children:"Reset"})})]})]})}),(0,n.jsxs)("div",{className:"w-full px-5 py-5 text-sm",children:[(0,n.jsxs)("div",{className:"grid grid-cols-5 text-white bg-primary-300 font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Name"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Username"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Email"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Role"}),(0,n.jsxs)("div",{className:"flex col-span-1 gap-12 justify-center",children:[(0,n.jsx)("p",{className:"flex justify-center items-center",children:"Status"}),(0,n.jsx)("p",{className:"flex justify-center items-center",children:"Action"})]})]}),v&&(0,n.jsx)(m.Z,{className:"h-[50vh] flex justify-center items-center w-full"}),!v&&e&&0!==e.length&&e.map((e,t)=>(0,n.jsxs)("div",{className:"bg-white border grid px-8 py-[16px] grid-cols-5 text-center text-black",children:[(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.name}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.username}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.email}),(0,n.jsx)("div",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)("div",{className:"flex flex-wrap gap-1 justify-center",children:e.role.map((t,r)=>(0,n.jsxs)("span",{className:"whitespace-nowrap",children:[t.name,r<e.role.length-1?",":""]},r))})}),(0,n.jsxs)("div",{className:"flex justify-center gap-12 items-center",children:[(0,n.jsx)(l.Z,{onChange:()=>b(),checked:"active"===e.status,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,n.jsx)("p",{className:"p-3",onClick:()=>{var t;t=e._id,w.push("/admin/users/add-user?_id=".concat(t))},children:(0,n.jsx)(u.ffH,{className:"block mx-auto"})})]})]},t)),!v&&(0,n.jsxs)("div",{className:"flex gap-3 items-center mt-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,n.jsxs)("select",{id:"limit-select",value:p,onChange:e=>{f(parseInt(e.target.value,10)),g(1)},className:"p-2 border rounded-md",children:[(0,n.jsx)("option",{value:10,children:"10"}),(0,n.jsx)("option",{value:20,children:"20"}),(0,n.jsx)("option",{value:50,children:"50"}),(0,n.jsx)("option",{value:100,children:"100"})]})]}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)("button",{onClick:()=>{x>1&&g(x-1)},disabled:1===x,className:"p-2 border rounded-md disabled:opacity-50",children:(0,n.jsx)(d.u1R,{})}),(0,n.jsxs)("span",{children:["Page ",x," of ",y]}),(0,n.jsx)("button",{onClick:()=>{x<y&&g(x+1)},disabled:x===y,className:"p-2 border rounded-md disabled:opacity-50",children:(0,n.jsx)(d.hjJ,{})})]})]})]})]})}},106:function(e,t,r){"use strict";var n=r(7437),a=r(4815);t.Z=function(e){let{className:t}=e;return(0,n.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,n.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},824:function(e,t,r){"use strict";var n=r(7437);r(2265);var a=r(6164);t.Z=function(e){let{children:t,className:r,...s}=e;return(0,n.jsx)("button",{...s,className:(0,a.m6)("border border-primary-300 px-4 py-2 rounded-[20px] text-primary-300 hover:text-white hover:bg-primary-300",r),children:t})}},6965:function(e,t,r){"use strict";var n=r(7437);r(2265);var a=r(2375),s=r(6164);t.Z=function(e){let{children:t,className:r,onClick:c,loading:o,...i}=e;return(0,n.jsx)("button",{...i,onClick:c,className:(0,s.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",r),children:o?(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},4298:function(e,t,r){"use strict";r.d(t,{AW:function(){return i},GK:function(){return c},PR:function(){return o},Pl:function(){return h},Sh:function(){return u},TJ:function(){return l},W6:function(){return x},WC:function(){return m},eD:function(){return s},qq:function(){return f},sE:function(){return p},sm:function(){return d},sr:function(){return g}});var n=r(1633),a=r(8472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(n.M6,"/").concat(n.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await a.Z.request(r)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(n.M6,"/").concat(n.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await a.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(n.M6,"/").concat(n.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(n.M6,"/").concat(n.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await a.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.Tv),data:e};console.log(t);let r=await a.Z.request(t);return console.log(r),r.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.rd),data:e},r=await a.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(n.M6,"/").concat(n.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(n.M6,"/").concat(n.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(n.M6,"/").concat(n.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(n.M6,"/").concat(n.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},x=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(n.M6,"/").concat(n.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await a.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(n.M6,"/").concat(n.UN),headers:{Authorization:"Bearer ".concat(t)},params:e};return(await a.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return j},Dy:function(){return y},EK:function(){return u},HA:function(){return b},M6:function(){return n},ND:function(){return U},Ny:function(){return q},O1:function(){return S},Pn:function(){return m},SR:function(){return s},TK:function(){return g},Tp:function(){return a},Tv:function(){return c},UN:function(){return f},UY:function(){return O},VH:function(){return B},VJ:function(){return W},Yn:function(){return p},d1:function(){return D},dt:function(){return v},ht:function(){return h},it:function(){return N},jC:function(){return k},jV:function(){return M},mW:function(){return R},n$:function(){return A},nM:function(){return E},q6:function(){return I},qJ:function(){return x},ql:function(){return T},rO:function(){return P},rd:function(){return o},sC:function(){return i},sI:function(){return Z},tm:function(){return l},tt:function(){return d},vx:function(){return w},we:function(){return z},x4:function(){return C},xD:function(){return F}});let n="http://localhost:6969",a="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",u="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",m="api/user/getKaryakarta",h="api/user/createKaryakarta",p="api/user/updateKaryakarta",f="api/user/getPannaPramukh",x="api/user/updateMultipleKaryakarta",g="api/survey/saveSurvey",y="api/survey/updateSurvey",j="api/survey/getSurvey",v="api/survey/deleteSurvey",N="api/survey/getAllSurveys",S="api/survey/getSurveysByAcAndBooth",w="api/response/saveResponses",b="api/response/getAllSurveyResponses",k="api/response/getAllResponses",W="api/response/getSurveyResponseStats",A="api/response/getGroupedByFamily",P=["Contact Form","Address"],Z="api/dashboard",C="api/auth/login",M="api/auth/forgotPassword",I="api/auth/resetPassword",q="api/role/allRoles",R="api/role/roles",T="api/role/create",U="api/role/update",B="api/role/delete",E="api/todo/create",F="api/todo/todo",z="api/todo/todos",D="api/todo/update",O="api/todo/delete"}},function(e){e.O(0,[7699,5452,8472,9413,938,2971,7023,1744],function(){return e(e.s=1180)}),_N_E=e.O()}]);