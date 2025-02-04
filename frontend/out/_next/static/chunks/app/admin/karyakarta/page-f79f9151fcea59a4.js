(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2236],{91495:function(e,t,r){Promise.resolve().then(r.bind(r,33140))},33140:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(57437),n=r(76965),s=r(84298),c=r(16463),o=r(2265),i=r(41942),l=r(79005),u=r(69824),d=r(80106),m=r(50731),p=r(85260),f=r(4815),h=r(88726),g=function(e){let{setReset:t}=e,r=(0,c.useRouter)(),[i,l]=(0,o.useState)(null),[d,g]=(0,o.useState)(!1),[x,y]=(0,o.useState)(!1),j=async()=>{if(y(!0),!i){alert("Please select a file");return}let e=new FormData;e.append("file",i);try{let t=await (0,s.wi)(e);console.log("Import Response:",t.data),h.ZP.success("Karyakartas imported successfully!"),g(!1)}catch(e){var r;console.error("Import Error:",null===(r=e.response)||void 0===r?void 0:r.data),h.ZP.error("Error importing Karyakartas")}y(!1),t(e=>!e)};return(0,a.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between",children:[(0,a.jsx)("div",{className:"text-my-gray-200",children:(0,a.jsx)("h1",{className:"text-2xl",children:"All Karyakarta"})}),(0,a.jsxs)("div",{className:"flex justify-end space-x-3 text-xs",children:[(0,a.jsxs)(n.Z,{className:"flex gap-2 items-center",onClick:()=>{r.push("./karyakarta/add-karyakarta")},children:[(0,a.jsx)(u.S$f,{className:"text-2xl"}),"Add Karyakarta"]}),(0,a.jsxs)(n.Z,{className:"flex gap-2 items-center",onClick:()=>g(!0),children:[(0,a.jsx)(m.o5r,{className:"text-2xl"}),"Import from Excel"]})]}),(0,a.jsx)(p.Z,{open:d,closeModal:()=>g(!1),children:(0,a.jsxs)("div",{className:"relative min-h-[50vh] max-h-[90vh] w-[40vw] flex items-center gap-5 p-8 flex-col bg-secondary-100 overflow-y-auto",children:[x&&(0,a.jsxs)("div",{className:"absolute inset-0 z-30 bg-black/65 flex flex-col justify-center items-center gap-10 h-full w-full",children:[(0,a.jsx)(f.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,a.jsx)("h3",{className:"text-white font-semibold",children:"Importing karyakartas, please wait..."})]}),(0,a.jsx)("h1",{className:"text-xl font-bold text-primary-300",children:"Import Karyakartas"}),(0,a.jsxs)("div",{className:"w-full h-40 border-dashed border-2 border-primary-300 flex justify-center items-center cursor-pointer",onClick:()=>{var e;return null===(e=document.getElementById("file-upload"))||void 0===e?void 0:e.click()},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];t&&l(t)},children:[(0,a.jsx)("span",{children:"Drag & Drop or Click to Upload Excel File"}),(0,a.jsx)("input",{id:"file-upload",type:"file",accept:".xlsx, .xls",onChange:e=>{e.target.files&&e.target.files[0]&&l(e.target.files[0])},className:"hidden"})]}),i&&(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsxs)("p",{children:["Selected file: ",i.name]})}),(0,a.jsx)(n.Z,{className:"mt-6 disabled:bg-primary-100",onClick:j,disabled:!i,children:"Upload File"})]})})]})},x=function(){let[e,t]=(0,o.useState)([]),[r,m]=(0,o.useState)(""),[p,f]=(0,o.useState)(10),[h,x]=(0,o.useState)(1),[y,j]=(0,o.useState)(0),[v,b]=(0,o.useState)(!1),[k,S]=(0,o.useState)(!1);async function N(){b(!0);let e=await (0,s.WC)({searchBarInput:r,page:h,limit:p});b(!1),console.log("res::::",e),e.error||(t(e.data),j(e.totalPages))}(0,o.useEffect)(()=>{N()},[p,h,k]);let w=(0,c.useRouter)(),W=async e=>{let{id:t,status:r,role:a}=e;await (0,s.sE)({id:t,status:r,role:a}),N()};return(0,a.jsxs)("div",{className:"w-full bg-[#ECF0FA] text-sm min-h-[calc(100vh-80px)]",children:[(0,a.jsx)(g,{setReset:S}),(0,a.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("input",{className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Name / Username / Role",value:r,onChange:e=>m(e.target.value)}),(0,a.jsxs)("div",{className:"flex space-x-3",children:[(0,a.jsx)(n.Z,{onClick:()=>{N()},className:"text-[14px] font-semibold flex gap-2 items-center justify-center",children:"Search"}),(0,a.jsx)("div",{className:"flex space-x-3",children:(0,a.jsx)(n.Z,{className:"bg-dark-gray",onClick:()=>{m(""),S(!k)},children:"Reset"})})]})]})}),(0,a.jsxs)("div",{className:"w-[96%] mx-auto text-sm max-h-[60vh] overflow-auto vertical-scrollbar",children:[(0,a.jsxs)("div",{className:"grid grid-cols-5 text-white bg-dark-gray sticky top-0 left-0 z-10 font-semibold py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Name"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Username"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Email"}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Role"}),(0,a.jsxs)("div",{className:"flex col-span-1 gap-12 justify-center",children:[(0,a.jsx)("p",{className:"flex justify-center items-center",children:"Status"}),(0,a.jsx)("p",{className:"flex justify-center items-center",children:"Action"})]})]}),v&&(0,a.jsx)(d.Z,{className:"h-[50vh] flex justify-center items-center w-full"}),!v&&e&&0!==e.length?e.map((e,t)=>(0,a.jsxs)("div",{className:"bg-mid-gray border-2 grid p-2 grid-cols-5 text-center text-black",children:[(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center font-semibold",children:e.name}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.username}),(0,a.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:e.email}),(0,a.jsx)("div",{className:"col-span-1 flex justify-center items-center",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-1 justify-center",children:e.role.map((t,r)=>(0,a.jsxs)("span",{className:"whitespace-nowrap",children:[t.name,r<e.role.length-1?",":""]},r))})}),(0,a.jsxs)("div",{className:"flex justify-center gap-12 items-center",children:[(0,a.jsx)(l.Z,{onChange:()=>W({id:e._id,status:"active"===e.status?"inactive":"active",role:e.role[0]._id}),checked:"active"===e.status,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,a.jsx)("p",{className:"p-3 cursor-pointer",onClick:()=>{var t;t=e._id,w.push("/admin/karyakarta/add-karyakarta?_id=".concat(t))},children:(0,a.jsx)(i.ffH,{className:"block mx-auto"})})]})]},t)):(0,a.jsx)("div",{className:"flex justify-center items-center h-[20vh] w-full",children:"No karyakartas found"})]}),!v&&(0,a.jsxs)("div",{className:"flex gap-3 items-center mt-4 pl-4 pb-4 sticky bottom-0 left-0 bg-[#ECF0FA]",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,a.jsxs)("select",{id:"limit-select",value:p,onChange:e=>{f(parseInt(e.target.value,10)),x(1)},className:"p-2 border rounded-md",children:[(0,a.jsx)("option",{value:10,children:"10"}),(0,a.jsx)("option",{value:20,children:"20"}),(0,a.jsx)("option",{value:50,children:"50"}),(0,a.jsx)("option",{value:100,children:"100"})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("button",{onClick:()=>{h>1&&x(h-1)},disabled:1===h,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(u.u1R,{})}),(0,a.jsxs)("span",{children:["Page ",h," of ",y]}),(0,a.jsx)("button",{onClick:()=>{h<y&&x(h+1)},disabled:h===y,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(u.hjJ,{})})]})]})]})}},80106:function(e,t,r){"use strict";var a=r(57437),n=r(4815);t.Z=function(e){let{className:t}=e;return(0,a.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,a.jsx)(n.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,a.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},85260:function(e,t,r){"use strict";var a=r(57437),n=r(7583),s=r.n(n);let c={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};s().setAppElement("body"),t.Z=function(e){let{children:t,open:r,closeModal:n,preventOutsideClose:o=!1}=e;return(0,a.jsx)(s(),{isOpen:r,onRequestClose:n,shouldCloseOnOverlayClick:!o,style:c,contentLabel:"Example Modal",children:t})}},76965:function(e,t,r){"use strict";var a=r(57437);r(2265);var n=r(12375),s=r(96164);t.Z=function(e){let{children:t,className:r,onClick:c,loading:o,...i}=e;return(0,a.jsx)("button",{...i,onClick:c,className:(0,s.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px] hover:bg-orange-500 transition-all duration-200 ease-ease-in-out",r),children:o?(0,a.jsx)(n.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},84298:function(e,t,r){"use strict";r.d(t,{AW:function(){return i},GK:function(){return c},J2:function(){return m},KU:function(){return j},PR:function(){return o},Pl:function(){return f},Sh:function(){return l},TJ:function(){return u},W6:function(){return x},WC:function(){return p},Yx:function(){return y},eD:function(){return s},qq:function(){return g},sE:function(){return h},sm:function(){return d},wi:function(){return v}});var a=r(1633),n=r(38472);let s=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp),headers:{Authorization:"Bearer ".concat(t)},params:e};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{console.log("params from network --- >",e);try{var t;let r=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(r)}};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await n.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},m=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Vy),data:e},r=await n.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},x=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},y=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.pX),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await n.Z.request(r)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},j=async e=>{try{let t=localStorage.getItem("token"),r={method:"GET",url:"".concat(a.M6,"/").concat(a.sN),headers:{Authorization:"Bearer ".concat(t)},params:e},s=await n.Z.request(r);return console.log("from network--->",s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},v=async e=>{try{let t=localStorage.getItem("token"),r={method:"POST",url:"".concat(a.M6,"/").concat(a.hE),headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:e},s=await n.Z.request(r);return console.log("from network--->",s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return k},Dy:function(){return b},EK:function(){return l},GR:function(){return L},Gb:function(){return M},HA:function(){return W},L5:function(){return A},M6:function(){return a},ND:function(){return z},Ny:function(){return D},Pn:function(){return f},RJ:function(){return Y},SR:function(){return s},TK:function(){return v},Tp:function(){return n},Tv:function(){return c},UY:function(){return J},VH:function(){return K},VJ:function(){return Z},Vy:function(){return m},Wy:function(){return et},XP:function(){return Q},Yn:function(){return g},ZL:function(){return er},aA:function(){return es},a_:function(){return X},af:function(){return ea},d1:function(){return G},dJ:function(){return V},dt:function(){return S},hE:function(){return j},ht:function(){return h},il:function(){return en},it:function(){return N},jC:function(){return C},jV:function(){return R},ls:function(){return $},mW:function(){return F},nM:function(){return O},pQ:function(){return ec},pX:function(){return x},py:function(){return ee},q6:function(){return T},qJ:function(){return y},ql:function(){return B},r1:function(){return q},rO:function(){return P},rd:function(){return o},sC:function(){return i},sI:function(){return I},sN:function(){return d},tm:function(){return u},tt:function(){return p},vx:function(){return w},wK:function(){return H},we:function(){return _},x4:function(){return E},xD:function(){return U}});let a="https://survey-3uf0.onrender.com",n="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",l="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getSupervisorCollectors",m="api/user/assignBooth",p="api/user/getAllKaryakarta",f="api/user/getKaryakarta",h="api/user/createKaryakarta",g="api/user/updateKaryakarta",x="api/user/getUsersByAcList",y="api/user/updateMultipleKaryakarta",j="api/user/importKaryakartas",v="api/survey/saveSurvey",b="api/survey/updateSurvey",k="api/survey/getSurvey",S="api/survey/deleteSurvey",N="api/survey/getAllSurveys",w="api/response/saveResponses",W="api/response/getAllSurveyResponses",C="api/response/getAllResponses",Z="api/response/getSurveyResponseStats",A="api/response/updateResponse",M="api/response/saveQualityRemark",P=["Contact Form","Address"],I="api/dashboard",E="api/auth/login",R="api/auth/forgotPassword",T="api/auth/resetPassword",q="api/auth/adminLogin",D="api/role/allRoles",F="api/role/roles",B="api/role/create",z="api/role/update",K="api/role/delete",O="api/todo/create",U="api/todo/todo",_="api/todo/todos",G="api/todo/update",J="api/todo/delete",L="api/sampling/assign-sample-responses",V="api/sampling/sample-responses",Y="api/sampling/sample-surveys",H="api/sampling/groups",Q="api/sampling/delete",X="api/call-rating/dashboard",$="675985aaa6b36c1fa78d5517",ee="671f997d38863c2bfc859e76",et="675a92c24bbe3577d16bcb64",er="67713c803e1c10c39195a9cc",ea="67713c9a3e1c10c39195a9ce",en="671f99d938863c2bfc859e7f",es="6793cb217ad0c3539d615831",ec=["Supervisor","Panna Pramukh","Survey Manager","Quality Check","Data Analyst","Data Manager","Support Executive","VRM Team Manager"]}},function(e){e.O(0,[5452,7699,1694,8472,8726,9413,1181,938,2971,7023,1744],function(){return e(e.s=91495)}),_N_E=e.O()}]);