(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2236],{2590:function(e,t,r){Promise.resolve().then(r.bind(r,8023))},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},8023:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(6965),s=r(4298),c=r(6463),o=r(2265),i=r(1942),u=r(9005),l=r(9824),d=r(106);t.default=function(){let[e,t]=(0,o.useState)([]),[r,m]=(0,o.useState)(""),[h,p]=(0,o.useState)(10),[f,x]=(0,o.useState)(1),[g,y]=(0,o.useState)(0),[j,v]=(0,o.useState)(!1),[S,N]=(0,o.useState)(!1);async function k(){v(!0);let e=await (0,s.WC)({searchBarInput:r,page:f,limit:h});v(!1),console.log("res::::",e),e.error||(t(e.data),y(e.totalPages))}(0,o.useEffect)(()=>{k()},[h,f,S]);let w=(0,c.useRouter)(),b=async e=>{let{id:t,status:r,role:a}=e;await (0,s.sE)({id:t,status:r,role:a}),k()};return(0,a.jsxs)("div",{className:"w-full bg-[#ECF0FA] text-sm",children:[(0,a.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between",children:[(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-2xl",children:"All Karyakarta"})}),(0,a.jsx)("div",{className:"flex justify-end space-x-3 text-xs",children:(0,a.jsx)(n.Z,{onClick:()=>{w.push("./karyakarta/add-karyakarta")},children:"Add Karyakarta"})})]}),(0,a.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("input",{className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Name / Username / Role",value:r,onChange:e=>m(e.target.value)}),(0,a.jsxs)("div",{className:"flex space-x-3",children:[(0,a.jsx)(n.Z,{onClick:()=>{k()},className:"text-[14px] font-semibold flex gap-2 items-center justify-center",children:"Search"}),(0,a.jsx)("div",{className:"flex space-x-3",children:(0,a.jsx)(n.Z,{className:"bg-dark-gray",onClick:()=>{m(""),N(!S)},children:"Reset"})})]})]})}),(0,a.jsxs)("div",{className:"w-[96%] mx-auto text-sm h-[70vh] overflow-auto vertical-scrollbar",children:[(0,a.jsxs)("div",{className:"grid grid-cols-5 text-white bg-dark-gray sticky top-0 left-0 z-10 font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Name"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Username"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Email"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Role"}),(0,a.jsxs)("div",{className:"flex col-span-1 gap-12 justify-center",children:[(0,a.jsx)("p",{className:"flex justify-center items-center",children:"Status"}),(0,a.jsx)("p",{className:"flex justify-center items-center",children:"Action"})]})]}),j&&(0,a.jsx)(d.Z,{className:"h-[50vh] flex justify-center items-center w-full"}),!j&&e&&0!==e.length&&e.map((e,t)=>(0,a.jsxs)("div",{className:"bg-mid-gray border-2 grid p-2 grid-cols-5 text-center text-black",children:[(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center font-semibold",children:e.name}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.username}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.email}),(0,a.jsx)("div",{className:"col-span-1 flex justify-center items-center",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-1 justify-center",children:e.role.map((t,r)=>(0,a.jsxs)("span",{className:"whitespace-nowrap",children:[t.name,r<e.role.length-1?",":""]},r))})}),(0,a.jsxs)("div",{className:"flex justify-center gap-12 items-center",children:[(0,a.jsx)(u.Z,{onChange:()=>b({id:e._id,status:"active"===e.status?"inactive":"active",role:e.role[0]._id}),checked:"active"===e.status,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,a.jsx)("p",{className:"p-3 cursor-pointer",onClick:()=>{var t;t=e._id,w.push("/admin/karyakarta/add-karyakarta?_id=".concat(t))},children:(0,a.jsx)(i.ffH,{className:"block mx-auto"})})]})]},t))]}),!j&&(0,a.jsxs)("div",{className:"flex gap-3 items-center mt-4 ml-4 pb-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,a.jsxs)("select",{id:"limit-select",value:h,onChange:e=>{p(parseInt(e.target.value,10)),x(1)},className:"p-2 border rounded-md",children:[(0,a.jsx)("option",{value:10,children:"10"}),(0,a.jsx)("option",{value:20,children:"20"}),(0,a.jsx)("option",{value:50,children:"50"}),(0,a.jsx)("option",{value:100,children:"100"})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("button",{onClick:()=>{f>1&&x(f-1)},disabled:1===f,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(l.u1R,{})}),(0,a.jsxs)("span",{children:["Page ",f," of ",g]}),(0,a.jsx)("button",{onClick:()=>{f<g&&x(f+1)},disabled:f===g,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(l.hjJ,{})})]})]})]})}},106:function(e,t,r){"use strict";var a=r(7437),n=r(4815);t.Z=function(e){let{className:t}=e;return(0,a.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,a.jsx)(n.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,a.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},6965:function(e,t,r){"use strict";var a=r(7437);r(2265);var n=r(2375),s=r(6164);t.Z=function(e){let{children:t,className:r,onClick:c,loading:o,...i}=e;return(0,a.jsx)("button",{...i,onClick:c,className:(0,s.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",r),children:o?(0,a.jsx)(n.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},4298:function(e,t,r){"use strict";r.d(t,{AW:function(){return i},GK:function(){return c},PR:function(){return o},Pl:function(){return h},Sh:function(){return u},TJ:function(){return l},W6:function(){return x},WC:function(){return m},Yx:function(){return g},eD:function(){return s},qq:function(){return f},sE:function(){return p},sm:function(){return d}});var a=r(1633),n=r(8472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},x=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.pX),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return j},Dy:function(){return y},EK:function(){return u},HA:function(){return k},M6:function(){return a},ND:function(){return T},Ny:function(){return I},Pn:function(){return m},SR:function(){return s},TK:function(){return g},Tp:function(){return n},Tv:function(){return c},UY:function(){return U},VH:function(){return R},VJ:function(){return b},Yn:function(){return p},d1:function(){return F},dt:function(){return v},ht:function(){return h},it:function(){return S},jC:function(){return w},jV:function(){return C},mW:function(){return q},nM:function(){return E},pX:function(){return f},q6:function(){return Z},qJ:function(){return x},ql:function(){return M},rO:function(){return W},rd:function(){return o},sC:function(){return i},sI:function(){return P},tm:function(){return l},tt:function(){return d},vx:function(){return N},we:function(){return z},x4:function(){return A},xD:function(){return B}});let a="https://survey-3uf0.onrender.com",n="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",u="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",m="api/user/getKaryakarta",h="api/user/createKaryakarta",p="api/user/updateKaryakarta",f="api/user/getUsersByAcList",x="api/user/updateMultipleKaryakarta",g="api/survey/saveSurvey",y="api/survey/updateSurvey",j="api/survey/getSurvey",v="api/survey/deleteSurvey",S="api/survey/getAllSurveys",N="api/response/saveResponses",k="api/response/getAllSurveyResponses",w="api/response/getAllResponses",b="api/response/getSurveyResponseStats",W=["Contact Form","Address"],P="api/dashboard",A="api/auth/login",C="api/auth/forgotPassword",Z="api/auth/resetPassword",I="api/role/allRoles",q="api/role/roles",M="api/role/create",T="api/role/update",R="api/role/delete",E="api/todo/create",B="api/todo/todo",z="api/todo/todos",F="api/todo/update",U="api/todo/delete"}},function(e){e.O(0,[7699,5452,8472,9413,938,2971,7023,1744],function(){return e(e.s=2590)}),_N_E=e.O()}]);