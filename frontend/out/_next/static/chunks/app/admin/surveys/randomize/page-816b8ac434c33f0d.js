(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9989],{6203:function(e,t,n){Promise.resolve().then(n.bind(n,60572))},4815:function(e,t,n){"use strict";var r=n(2265),a=n(38936),s=n(65530),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},i=[(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];t.Z=function(e){var t=e.loading,n=e.color,s=void 0===n?"#000000":n,u=e.speedMultiplier,l=void 0===u?1:u,d=e.cssOverride,p=e.size,m=c(e,["loading","color","speedMultiplier","cssOverride","size"]),f=(0,a.h)(void 0===p?15:p),h=f.value,y=f.unit,g=o({display:"inherit",position:"relative"},void 0===d?{}:d),v=function(e){return{position:"absolute",fontSize:"".concat(h/3).concat(y),width:"".concat(h).concat(y),height:"".concat(h).concat(y),background:s,borderRadius:"50%",animation:"".concat(i[e]," ").concat(1.5/l,"s infinite"),animationFillMode:"forwards"}};return void 0===t||t?r.createElement("span",o({style:g},m),r.createElement("span",{style:v(0)}),r.createElement("span",{style:v(1)}),r.createElement("span",{style:v(2)}),r.createElement("span",{style:v(3)}),r.createElement("span",{style:v(4)}),r.createElement("span",{style:v(5)})):null}},65530:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var r=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),r}},38936:function(e,t,n){"use strict";n.d(t,{E:function(){return s},h:function(){return a}});var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function s(e){var t=a(e);return"".concat(t.value).concat(t.unit)}},60572:function(e,t,n){"use strict";n.r(t);var r=n(57437),a=n(91868),s=n(80106),o=n(60274),c=n(16463),i=n(2265),u=n(88726);function l(){let[e,t]=(0,i.useState)([]),[n,l]=(0,i.useState)(!1),d=(0,c.useSearchParams)(),p=d.get("id"),m=d.get("name"),f=d.get("created_by");async function h(){l(!0);let e=await (0,o.LA)({_id:p});l(!1),e.success?e.data.questions&&t(e.data.questions):u.ZP.error("Something went wrong while fetching survey data")}(0,i.useEffect)(()=>{h()},[]);let y=n=>r=>{let a=[...e];a[n].randomize=r.target.checked,t(a)},g=async()=>{l(!0);let t=await (0,o.ez)({_id:p,formData:{_id:p,created_by:f,questions:e}});l(!1),t.success?u.ZP.success("Questions randomization set successfully!"):u.ZP.error("Failed to randomize questions.")};return(0,r.jsxs)("main",{className:"relative h-full flex flex-col",children:[(0,r.jsx)(a.Z,{id:p||"",created_by:f||"",name:"Resequence",surveyName:m||""}),(0,r.jsxs)("div",{className:"flex-grow",children:[n&&(0,r.jsx)(s.Z,{className:"flex h-[50vh] justify-center items-center w-full"}),!n&&e&&e.length>0?(0,r.jsx)("ul",{className:"p-5",children:e.map((e,t)=>(0,r.jsxs)("label",{className:"border p-4 mb-2 border-secondary-200 text-secondary-300 cursor-pointer flex items-center gap-2",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.randomize,onChange:y(t)}),(0,r.jsxs)("div",{children:["Question: ",e.parameters.question||"Untitled Question"]})]},e.question_id))}):!n&&(0,r.jsx)("p",{className:"w-full h-[40vh] flex justify-center items-center",children:"No questions available."})]}),(0,r.jsx)("div",{className:"w-full bg-white p-4 border-t border-gray-200 flex justify-end sticky bottom-0 z-10",children:(0,r.jsx)("button",{onClick:g,className:"px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700",children:"Save Changes"})})]})}t.default=()=>(0,r.jsx)(i.Suspense,{children:(0,r.jsx)(l,{})})},91868:function(e,t,n){"use strict";var r=n(57437),a=n(16463);t.Z=function(e){let{id:t,created_by:n,name:s,surveyName:o}=e,c=(0,a.usePathname)(),i=(0,a.useRouter)();return(0,r.jsx)("header",{className:" top-0 left-0 w-full h-16 border-2 z-20",children:(0,r.jsxs)("div",{className:"bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-dark-gray font-semibold",children:"".concat(s,": ").concat(o)}),(0,r.jsxs)("div",{className:" flex gap-2",children:[(0,r.jsx)("button",{onClick:()=>i.push("/admin/surveys/questions?id=".concat(t,"&created_by=").concat(n,"&name=").concat(o)),className:"border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ".concat(c.includes("/admin/surveys/questions")?"bg-primary-300":"bg-dark-gray"),children:"Questionnaire"}),(0,r.jsx)("button",{onClick:()=>i.push("/admin/surveys/resequence?id=".concat(t,"&created_by=").concat(n,"&name=").concat(o)),className:"border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ".concat(c.includes("/admin/surveys/resequence")?"bg-primary-300":"bg-dark-gray"),children:"Resequence"}),(0,r.jsx)("button",{onClick:()=>i.push("/admin/surveys/conditional-display?id=".concat(t,"&created_by=").concat(n,"&name=").concat(o)),className:"border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ".concat("/admin/surveys/conditional-display"===c?"bg-primary-300":"bg-dark-gray"),children:"Conditional display"}),(0,r.jsx)("button",{onClick:()=>i.push("/admin/surveys/randomize?id=".concat(t,"&created_by=").concat(n,"&name=").concat(o)),className:"border px-4 py-2 rounded-md text-[14px] font-sem font-semibold text-white ".concat("/admin/surveys/randomize"===c?"bg-primary-300":"bg-dark-gray"),children:"Randomization"})]})]})})}},80106:function(e,t,n){"use strict";var r=n(57437),a=n(4815);t.Z=function(e){let{className:t}=e;return(0,r.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,r.jsx)(a.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,r.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},60274:function(e,t,n){"use strict";n.d(t,{Gn:function(){return l},LA:function(){return u},Vb:function(){return s},a2:function(){return i},ez:function(){return o},tB:function(){return c}});var r=n(1633),a=n(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.TK),headers:{"Content-Type":"application/json"},data:e},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=e.page||1,n=e.limit||10,s=e.filter||"",o=e.created_by,c=e.sortBy,i=e.sortOrder,u=e.published;"published"===e.published?u=!0:"unpublished"===e.published?u=!1:"all"===e.published&&(u=void 0);let l={method:"GET",url:"".concat(r.M6,"/").concat(r.it,"?filter=").concat(s,"&page=").concat(t,"&limit=").concat(n,"&sortBy=").concat(c,"&sortOrder=").concat(i,"&published=").concat(u,"&created_by=").concat(o)},d=await a.Z.request(l);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(r.M6,"/").concat(r.VJ),params:{survey_id:e.survey_id,filters:e.filters}},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"GET",url:"".concat(r.M6,"/").concat(r.A5,"?_id=").concat(e._id)};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.dt),data:e},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return b},Dy:function(){return v},EK:function(){return u},HA:function(){return S},M6:function(){return r},ND:function(){return Z},Ny:function(){return E},Pn:function(){return p},SR:function(){return s},TK:function(){return g},Tp:function(){return a},Tv:function(){return o},UY:function(){return L},VH:function(){return M},VJ:function(){return N},Yn:function(){return f},d1:function(){return T},dt:function(){return x},ht:function(){return m},it:function(){return w},jC:function(){return k},jV:function(){return q},mW:function(){return C},nM:function(){return A},pX:function(){return h},q6:function(){return P},qJ:function(){return y},ql:function(){return z},rO:function(){return _},rd:function(){return c},sC:function(){return i},sI:function(){return O},tm:function(){return l},tt:function(){return d},vx:function(){return j},we:function(){return W},x4:function(){return X},xD:function(){return R}});let r="https://survey-3uf0.onrender.com",a="api/user/getUser",s="api/user/getAllUsers",o="api/user/addUsers",c="api/user/addMultipleUsers",i="api/user/updateUser",u="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",m="api/user/createKaryakarta",f="api/user/updateKaryakarta",h="api/user/getUsersByAcList",y="api/user/updateMultipleKaryakarta",g="api/survey/saveSurvey",v="api/survey/updateSurvey",b="api/survey/getSurvey",x="api/survey/deleteSurvey",w="api/survey/getAllSurveys",j="api/response/saveResponses",S="api/response/getAllSurveyResponses",k="api/response/getAllResponses",N="api/response/getSurveyResponseStats",_=["Contact Form","Address"],O="api/dashboard",X="api/auth/login",q="api/auth/forgotPassword",P="api/auth/resetPassword",E="api/role/allRoles",C="api/role/roles",z="api/role/create",Z="api/role/update",M="api/role/delete",A="api/todo/create",R="api/todo/todo",W="api/todo/todos",T="api/todo/update",L="api/todo/delete"}},function(e){e.O(0,[8472,3004,2971,7023,1744],function(){return e(e.s=6203)}),_N_E=e.O()}]);