(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{27116:function(e,t,r){Promise.resolve().then(r.bind(r,68157))},12375:function(e,t,r){"use strict";var n=r(2265),a=r(38936),s=r(65530),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},u=[(0,s.i)("PuffLoader","0% {transform: scale(0)} 100% {transform: scale(1.0)}","puff-1"),(0,s.i)("PuffLoader","0% {opacity: 1} 100% {opacity: 0}","puff-2")];t.Z=function(e){var t=e.loading,r=e.color,s=void 0===r?"#000000":r,c=e.speedMultiplier,l=void 0===c?1:c,d=e.cssOverride,p=e.size,f=void 0===p?60:p,m=i(e,["loading","color","speedMultiplier","cssOverride","size"]),g=o({display:"inherit",position:"relative",width:(0,a.E)(f),height:(0,a.E)(f)},void 0===d?{}:d),h=function(e){return{position:"absolute",height:(0,a.E)(f),width:(0,a.E)(f),border:"thick solid ".concat(s),borderRadius:"50%",opacity:"1",top:"0",left:"0",animationFillMode:"both",animation:"".concat(u[0],", ").concat(u[1]),animationDuration:"".concat(2/l,"s"),animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",animationDelay:1===e?"-1s":"0s"}};return void 0===t||t?n.createElement("span",o({style:g},m),n.createElement("span",{style:h(1)}),n.createElement("span",{style:h(2)})):null}},68157:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(57437),a=r(2265),s=r(16463),o=r(34755),i=r(7583),u=r.n(i),c=r(94962),l=r(76965),d=r(95650),p=r(1633);function f(){let[e,t]=(0,a.useState)(""),[r,i]=(0,a.useState)(""),[f,m]=(0,a.useState)(!1),g=(0,s.useRouter)(),[h,b]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(0,d.a_)()&&g.push("/admin")},[g]);let x=async e=>{console.log("Forgot Password for Email:",e);let t=(0,o.gF)({email:e});c.ZP.promise(t,{loading:"Sending email to reset password...",success:"Email sent successfully.",error:e=>e.message||"Failed to send email."}),m(!1)};return(0,n.jsxs)("div",{className:"flex items-center justify-between min-h-screen bg-primary-50",children:[(0,n.jsx)(c.x7,{position:"top-center",reverseOrder:!1}),(0,n.jsxs)(u(),{isOpen:f,onRequestClose:()=>m(!1),contentLabel:"Forgot Password",className:"bg-white p-8 rounded-lg shadow-lg max-w-md w-full",overlayClassName:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:[(0,n.jsx)("h2",{className:"text-xl mb-4 text-center font-semibold",children:"Forgot Password"}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 mb-2",children:"Enter your email"}),(0,n.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)("button",{className:"py-2 px-4 bg-primary-300 text-white rounded-md hover:bg-blue-600",onClick:()=>x(e),children:"Submit"}),(0,n.jsx)("button",{className:"py-2 px-4 ml-2 bg-gray-300 text-black rounded-md hover:bg-gray-400",onClick:()=>m(!1),children:"Cancel"})]})]}),(0,n.jsxs)("div",{className:"relative h-screen flex flex-col items-center justify-center bg-[url('/images/semi-circle.png')] bg-cover bg-center w-[55%]",children:[(0,n.jsx)("img",{src:"/images/map.png",className:"h-[450px] "}),(0,n.jsx)("h1",{className:"absolute bottom-8 left-4 w-[200px] text-[30px] text-white font-bold",children:"BHARAT DEMOGRAPHIC RESEARCH"})]}),(0,n.jsxs)("div",{id:"main",className:"relative bg-white flex flex-col justify-center items-center border rounded-[20px] shadow-lg p-12 min-h-[600px] w-full max-w-[450px] mr-16",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,n.jsx)("h2",{className:"text-center text-[25px] font-semibold",children:"WELCOME BACK"}),(0,n.jsx)("h2",{className:"text-center text-xl font-semibold mb-6",children:"Login"})]}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("input",{type:"text",value:e,placeholder:"Email address",onChange:e=>t(e.target.value),className:"w-full rounded-[13px] px-6 py-4 mt-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none focus:ring focus:ring-primary-50",required:!0})}),(0,n.jsxs)("div",{className:"mb-4 flex pr-2 gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white rounded-[13px] overflow-hidden focus:ring focus:ring-primary-50",children:[(0,n.jsx)("input",{type:h?"text":"password",value:r,placeholder:"Password",onChange:e=>i(e.target.value),className:"w-full px-6 py-4 h-full focus:outline-none",required:!0}),(0,n.jsx)("img",{onClick:()=>b(!h),src:"/images/eye.png",className:"w-[25px]  object-contain cursor-pointer"})]}),(0,n.jsx)("div",{className:"flex justify-between items-center mb-6",children:(0,n.jsx)("a",{onClick:()=>m(!0),className:"cursor-pointer text-sm hover:underline",children:"Forgot your password?"})}),(0,n.jsx)(l.Z,{onClick:()=>{(0,o.cW)({email:e,password:r}).then(e=>{if(e.success){c.ZP.success(e.message),localStorage.setItem("jwt",e.token);let t=(0,d.a_)();t.role[0].category,console.log("isAuthorized ----->",null==t?void 0:t.role.find(e=>p.pQ.includes(e._id.toString()))),g.push("/admin")}else console.log("res ----->",e),e.error?c.ZP.error(e.error.message):c.ZP.error("Invalid credentials or unauthorized user")}).catch(e=>{c.ZP.error("Failed to Login as Admin")})},className:"w-full py-2 bg-orange-500 text-white  hover:bg-orange-600",children:"Login"})]})]})]})}u().setAppElement("#main")},76965:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(12375),s=r(96164);t.Z=function(e){let{children:t,className:r,onClick:o,loading:i,...u}=e;return(0,n.jsx)("button",{...u,onClick:o,className:(0,s.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px] hover:bg-orange-500 transition-all duration-200 ease-ease-in-out",r),children:i?(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},34755:function(e,t,r){"use strict";r.d(t,{c0:function(){return u},cW:function(){return o},gF:function(){return i},pH:function(){return s}});var n=r(1633),a=r(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.x4),data:e};return(await a.Z.request(t)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}},o=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.r1),data:e};return(await a.Z.request(t)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}},i=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.jV),data:e},r=await a.Z.request(t);if(!r.data.success)throw Error(r.data.message||"Failed to send email.");return r.data}catch(e){if(e.response)throw Error(e.response.data.message||"Something went wrong");throw Error("Network error. Please try again.")}},u=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.q6),data:e};return(await a.Z.request(t)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}}},95650:function(e,t,r){"use strict";r.d(t,{Sg:function(){return o},aF:function(){return s},a_:function(){return i},p6:function(){return a}});let n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function a(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()],s=t.getFullYear();return"".concat(r,"-").concat(a,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function o(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()];return"".concat(r," ").concat(a)}function i(){{let e=localStorage.getItem("jwt");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return v},Dy:function(){return y},EK:function(){return c},HA:function(){return S},L5:function(){return E},M6:function(){return n},ND:function(){return D},Ny:function(){return R},Pn:function(){return f},SR:function(){return s},TK:function(){return x},Tp:function(){return a},Tv:function(){return o},UY:function(){return I},VH:function(){return L},VJ:function(){return O},Wy:function(){return W},Yn:function(){return g},d1:function(){return z},dt:function(){return w},ht:function(){return m},it:function(){return j},jC:function(){return P},jV:function(){return A},ls:function(){return H},mW:function(){return Z},nM:function(){return T},pQ:function(){return V},pX:function(){return h},py:function(){return J},q6:function(){return M},qJ:function(){return b},ql:function(){return q},r1:function(){return _},rO:function(){return k},rd:function(){return i},sC:function(){return u},sI:function(){return C},sN:function(){return d},tm:function(){return l},tt:function(){return p},vx:function(){return N},we:function(){return U},x4:function(){return F},xD:function(){return K}});let n="https://survey-3uf0.onrender.com",a="api/user/getUser",s="api/user/getAllUsers",o="api/user/addUsers",i="api/user/addMultipleUsers",u="api/user/updateUser",c="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getSupervisorCollectors",p="api/user/getAllKaryakarta",f="api/user/getKaryakarta",m="api/user/createKaryakarta",g="api/user/updateKaryakarta",h="api/user/getUsersByAcList",b="api/user/updateMultipleKaryakarta",x="api/survey/saveSurvey",y="api/survey/updateSurvey",v="api/survey/getSurvey",w="api/survey/deleteSurvey",j="api/survey/getAllSurveys",N="api/response/saveResponses",S="api/response/getAllSurveyResponses",P="api/response/getAllResponses",O="api/response/getSurveyResponseStats",E="api/response/updateResponse",k=["Contact Form","Address"],C="api/dashboard",F="api/auth/login",A="api/auth/forgotPassword",M="api/auth/resetPassword",_="api/auth/adminLogin",R="api/role/allRoles",Z="api/role/roles",q="api/role/create",D="api/role/update",L="api/role/delete",T="api/todo/create",K="api/todo/todo",U="api/todo/todos",z="api/todo/update",I="api/todo/delete",H="675985aaa6b36c1fa78d5517",J="671f997d38863c2bfc859e76",W="675a92c24bbe3577d16bcb64",V=["675985aaa6b36c1fa78d5517","672bbdbfbdbe172165452e7d","671f999c38863c2bfc859e7a","675a92c24bbe3577d16bcb64","675bece5305e5a3192324a7a","675bed08305e5a3192324a7c"]}},function(e){e.O(0,[8472,4962,9413,1181,2971,7023,1744],function(){return e(e.s=27116)}),_N_E=e.O()}]);