(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2731],{74633:function(e,t,r){Promise.resolve().then(r.bind(r,39266))},4815:function(e,t,r){"use strict";var n=r(2265),a=r(38936),s=r(65530),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},i=[(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];t.Z=function(e){var t=e.loading,r=e.color,s=void 0===r?"#000000":r,l=e.speedMultiplier,u=void 0===l?1:l,p=e.cssOverride,d=e.size,f=c(e,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,a.h)(void 0===d?15:d),g=m.value,h=m.unit,y=o({display:"inherit",position:"relative"},void 0===p?{}:p),x=function(e){return{position:"absolute",fontSize:"".concat(g/3).concat(h),width:"".concat(g).concat(h),height:"".concat(g).concat(h),background:s,borderRadius:"50%",animation:"".concat(i[e]," ").concat(1.5/u,"s infinite"),animationFillMode:"forwards"}};return void 0===t||t?n.createElement("span",o({style:y},f),n.createElement("span",{style:x(0)}),n.createElement("span",{style:x(1)}),n.createElement("span",{style:x(2)}),n.createElement("span",{style:x(3)}),n.createElement("span",{style:x(4)}),n.createElement("span",{style:x(5)})):null}},39266:function(e,t,r){"use strict";r.d(t,{default:function(){return x}});var n=r(57437),a=r(2300),s=r(2265),o=r(88726),c=r(80106),i=r(95650),l=r(76965),u=r(69824),p=r(85260),d=r(60274),f=r(4815),m=r(16356),g=function(e){let{open:t,closeModal:r,refetch:a}=e,[c,i]=(0,s.useState)([]),[u,g]=(0,s.useState)(!1),[h,y]=(0,s.useState)(!1),[x,b]=(0,s.useState)(1),[v,j]=(0,s.useState)(1),[S,w]=(0,s.useState)(null);async function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;g(!0);let t=await (0,d.tB)({page:e,limit:10});t.success?(i(t.surveys),j(t.totalPages)):o.ZP.error("Error fetching surveys"),g(!1)}async function k(){y(!0),(await (0,d.ez)({formData:{sampling:!0},_id:S})).success?o.ZP.success("Survey sampled successfully"):o.ZP.error("Error sampling survey"),y(!1),O(),a()}function P(e){e>0&&e<=v&&b(e)}console.log("selected survey -->",S),(0,s.useEffect)(()=>{t&&N(x)},[t,x]);let O=()=>{w(null),r()};return(0,n.jsx)(p.Z,{open:t,closeModal:O,children:(0,n.jsxs)("div",{className:"flex relative flex-col gap-5 w-[40vw] min-h-[50vh] p-5",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-primary-300 text-center",children:"Select Surveys"}),u||h?(0,n.jsxs)("div",{className:"absolute inset-0 z-30 bg-black/65 flex flex-col justify-center items-center gap-10 h-full w-full",children:[(0,n.jsx)(f.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,n.jsx)("h3",{className:"text-white font-semibold",children:"".concat(u?"Loading":"Sampling"," surveys...")})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"grid grid-cols-2 gap-8",children:c&&c.map(e=>(0,n.jsxs)("label",{className:"flex items-center gap-2  ".concat(e.sampling?"opacity-50 cursor-not-allowed":"cursor-pointer"),children:[(0,n.jsx)("input",{disabled:e.sampling,type:"radio",name:"survey",value:e._id,checked:S===e._id,onChange:()=>{w(e._id)},className:"cursor-pointer disabled:cursor-not-allowed text-gray-400 appearance-none w-4 h-4 border-2 border-primary-300 checked:bg-primary-100 checked:text-white rounded-full"}),e.name]},e._id))})}),(0,n.jsxs)("div",{className:"flex justify-between items-center mt-auto",children:[(0,n.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,n.jsx)("button",{className:"btn btn-secondary cursor-pointer text-2xl",disabled:1===x,onClick:()=>P(x-1),children:(0,n.jsx)(m.D68,{})}),(0,n.jsxs)("p",{className:"text-secondary-500",children:["Page ",x," of ",v]}),(0,n.jsx)("button",{className:"btn btn-secondary cursor-pointer text-2xl",disabled:x===v,onClick:()=>P(x+1),children:(0,n.jsx)(m.sOJ,{})})]}),(0,n.jsx)(l.Z,{className:"btn btn-primary w-fit",disabled:!S,onClick:k,children:"Confirm Selection"})]})]})})},h=r(16463),y=r(83389),x=function(){let[e,t]=(0,s.useState)(null),[r,p]=(0,s.useState)(!1),[d,f]=(0,s.useState)(!1),[m,x]=(0,s.useState)(!1),[b,v]=(0,s.useState)(1),[j,S]=(0,s.useState)(10),[w,N]=(0,s.useState)(0),k=(0,h.useRouter)(),P=()=>{f(!0)};async function O(){p(!0);let e=await (0,a.d2)({page:b,limit:j});e.success?(t(e.data),v(e.pagination.currentPage),S(e.pagination.limit),N(e.pagination.totalPages)):o.ZP.error("Error fetching sample surveys"),p(!1)}return(0,s.useEffect)(()=>{O()},[m,b,j]),(0,n.jsxs)("div",{className:"w-[96%] mt-1 mx-auto text-sm py-5 flex flex-col overflow-y-auto vertical-scrollbar",children:[e&&e.length>0&&(0,n.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold",children:"Sample Surveys"}),(0,n.jsxs)(l.Z,{onClick:P,className:"flex gap-3 items-center",children:[(0,n.jsx)(u.S$f,{className:"text-2xl"})," Add Sample"]})]}),r&&(0,n.jsx)(c.Z,{className:"h-[40vh] w-full flex justify-center items-center text-primary-300"}),e&&e.length>0&&(0,n.jsxs)("div",{className:"sticky top-0 z-10 grid grid-cols-6 text-white font-semibold bg-dark-gray px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,n.jsx)("p",{className:"col-span-2",children:"All surveys"}),(0,n.jsx)("p",{className:"col-span-2",children:"Total responses"}),(0,n.jsx)("p",{className:"col-span-2",children:"Date created"})]}),!r&&e&&e.length>0?e.map((e,t)=>(0,n.jsxs)("div",{onClick:()=>{k.push("/admin/survey-sampling/samples?survey_id=".concat(e._id))},className:"cursor-pointer grid grid-cols-6 px-8 py-6 border-l border-r border-b border-secondary-200 w-full bg-mid-gray",children:[(0,n.jsx)("p",{className:"col-span-2 cursor-pointer font-semibold",children:e.name}),(0,n.jsx)("p",{className:"col-span-2 pl-8",children:e.response_count||0}),(0,n.jsx)("p",{className:"col-span-2",children:(0,i.p6)(e.createdAt)})]},t)):!r&&(0,n.jsxs)("div",{className:"w-full h-[calc(100vh-156px)] flex justify-center items-center font-semibold text-secondary-300 flex-col gap-5",children:[(0,n.jsx)("img",{src:"/icons/no-data.png",className:"object-contain h-20"}),(0,n.jsx)("p",{children:"No sample surveys"}),(0,n.jsxs)(l.Z,{onClick:P,className:"flex gap-3 items-center",children:[(0,n.jsx)(u.S$f,{className:"text-2xl"})," Add Sample"]})]}),(0,n.jsx)(y.Z,{page:b,pageLimit:j,setPage:v,setPageLimit:S,totalResponsePages:w}),(0,n.jsx)(g,{refetch:()=>x(!m),open:d,closeModal:()=>f(!1)})]})}},80106:function(e,t,r){"use strict";var n=r(57437),a=r(4815);t.Z=function(e){let{className:t}=e;return(0,n.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,n.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},85260:function(e,t,r){"use strict";var n=r(57437),a=r(7583),s=r.n(a);let o={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};s().setAppElement("body"),t.Z=function(e){let{children:t,open:r,closeModal:a,preventOutsideClose:c=!1}=e;return(0,n.jsx)(s(),{isOpen:r,onRequestClose:a,shouldCloseOnOverlayClick:!c,style:o,contentLabel:"Example Modal",children:t})}},76965:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(12375),s=r(96164);t.Z=function(e){let{children:t,className:r,onClick:o,loading:c,...i}=e;return(0,n.jsx)("button",{...i,onClick:o,className:(0,s.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px] hover:bg-orange-500 transition-all duration-200 ease-ease-in-out",r),children:c?(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},60274:function(e,t,r){"use strict";r.d(t,{Gn:function(){return u},LA:function(){return l},Vb:function(){return s},a2:function(){return i},ez:function(){return o},tB:function(){return c}});var n=r(1633),a=r(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.TK),headers:{"Content-Type":"application/json"},data:e},r=await a.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=e.page||1,r=e.limit||10,s=e.filter||"",o=e.created_by,c=e.sortBy,i=e.sortOrder,l=e.published;"published"===e.published?l=!0:"unpublished"===e.published?l=!1:"all"===e.published&&(l=void 0);let u={method:"GET",url:"".concat(n.M6,"/").concat(n.it,"?filter=").concat(s,"&page=").concat(t,"&limit=").concat(r,"&sortBy=").concat(c,"&sortOrder=").concat(i,"&published=").concat(l,"&created_by=").concat(o)},p=await a.Z.request(u);return console.log("response from networks---->",p),p.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(n.M6,"/").concat(n.VJ),params:{survey_id:e.survey_id,filters:e.filters}},r=await a.Z.request(t);return console.log("survey response stats from networks ------>",r),console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.A5,"?_id=").concat(e._id)},r=await a.Z.request(t);return console.log("stats response is ====>",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.dt),data:e},r=await a.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,r){"use strict";r.d(t,{Sg:function(){return o},aF:function(){return s},a_:function(){return c},mr:function(){return i},p6:function(){return a}});let n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function a(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()],s=t.getFullYear();return"".concat(r,"-").concat(a,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function o(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()];return"".concat(r," ").concat(a)}function c(){{let e=localStorage.getItem("jwt");return e?JSON.parse(atob(e.split(".")[1])):null}}let i=e=>{let t=new Date(e);return new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}).format(t)}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return S},Dy:function(){return j},EK:function(){return l},GR:function(){return V},Gb:function(){return E},HA:function(){return P},L5:function(){return _},M6:function(){return n},ND:function(){return W},Ny:function(){return R},Pn:function(){return m},RJ:function(){return I},SR:function(){return s},TK:function(){return v},Tp:function(){return a},Tv:function(){return o},UY:function(){return B},VH:function(){return q},VJ:function(){return M},Vy:function(){return d},Wy:function(){return et},XP:function(){return Y},Yn:function(){return h},ZL:function(){return er},aA:function(){return es},a_:function(){return H},af:function(){return en},d1:function(){return U},dJ:function(){return G},dt:function(){return w},hE:function(){return b},ht:function(){return g},il:function(){return ea},it:function(){return N},jC:function(){return O},jV:function(){return A},ls:function(){return $},mW:function(){return L},nM:function(){return z},pQ:function(){return eo},pX:function(){return y},py:function(){return ee},q6:function(){return D},qJ:function(){return x},ql:function(){return T},r1:function(){return F},rO:function(){return X},rd:function(){return c},sC:function(){return i},sI:function(){return Z},sN:function(){return p},tm:function(){return u},tt:function(){return f},vx:function(){return k},wK:function(){return Q},we:function(){return K},x4:function(){return C},xD:function(){return J}});let n="https://survey-3uf0.onrender.com",a="api/user/getUser",s="api/user/getAllUsers",o="api/user/addUsers",c="api/user/addMultipleUsers",i="api/user/updateUser",l="api/user/updateUsers",u="api/chatroom/getAllChatsData",p="api/user/getSupervisorCollectors",d="api/user/assignBooth",f="api/user/getAllKaryakarta",m="api/user/getKaryakarta",g="api/user/createKaryakarta",h="api/user/updateKaryakarta",y="api/user/getUsersByAcList",x="api/user/updateMultipleKaryakarta",b="api/user/importKaryakartas",v="api/survey/saveSurvey",j="api/survey/updateSurvey",S="api/survey/getSurvey",w="api/survey/deleteSurvey",N="api/survey/getAllSurveys",k="api/response/saveResponses",P="api/response/getAllSurveyResponses",O="api/response/getAllResponses",M="api/response/getSurveyResponseStats",_="api/response/updateResponse",E="api/response/saveQualityRemark",X=["Contact Form","Address"],Z="api/dashboard",C="api/auth/login",A="api/auth/forgotPassword",D="api/auth/resetPassword",F="api/auth/adminLogin",R="api/role/allRoles",L="api/role/roles",T="api/role/create",W="api/role/update",q="api/role/delete",z="api/todo/create",J="api/todo/todo",K="api/todo/todos",U="api/todo/update",B="api/todo/delete",V="api/sampling/assign-sample-responses",G="api/sampling/sample-responses",I="api/sampling/sample-surveys",Q="api/sampling/groups",Y="api/sampling/delete",H="api/call-rating/dashboard",$="675985aaa6b36c1fa78d5517",ee="671f997d38863c2bfc859e76",et="675a92c24bbe3577d16bcb64",er="67713c803e1c10c39195a9cc",en="67713c9a3e1c10c39195a9ce",ea="671f99d938863c2bfc859e7f",es="6793cb217ad0c3539d615831",eo=["Supervisor","Panna Pramukh","Survey Manager","Quality Check","Data Analyst","Data Manager","Support Executive","VRM Team Manager"]}},function(e){e.O(0,[5452,6051,8472,8726,9413,1181,1668,2971,7023,1744],function(){return e(e.s=74633)}),_N_E=e.O()}]);