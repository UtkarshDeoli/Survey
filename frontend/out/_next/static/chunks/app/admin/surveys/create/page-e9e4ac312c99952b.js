(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1070],{97121:function(e,t,n){Promise.resolve().then(n.bind(n,27110))},80585:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2265),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0},s=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),r},o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},i=[s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")],l=function(e){var t=e.loading,n=e.color,s=void 0===n?"#000000":n,l=e.speedMultiplier,u=void 0===l?1:l,d=e.cssOverride,p=e.size,m=c(e,["loading","color","speedMultiplier","cssOverride","size"]),f=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return a[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(void 0===p?15:p),y=f.value,h=f.unit,g=o({display:"inherit",position:"relative"},void 0===d?{}:d),x=function(e){return{position:"absolute",fontSize:"".concat(y/3).concat(h),width:"".concat(y).concat(h),height:"".concat(y).concat(h),background:s,borderRadius:"50%",animation:"".concat(i[e]," ").concat(1.5/u,"s infinite"),animationFillMode:"forwards"}};return void 0===t||t?r.createElement("span",o({style:g},m),r.createElement("span",{style:x(0)}),r.createElement("span",{style:x(1)}),r.createElement("span",{style:x(2)}),r.createElement("span",{style:x(3)}),r.createElement("span",{style:x(4)}),r.createElement("span",{style:x(5)})):null}},27110:function(e,t,n){"use strict";n.r(t);var r=n(57437),a=n(76965),s=n(80106),o=n(60274),c=n(16463),i=n(2265),l=n(39343),u=n(88726);function d(){let[e,t]=(0,i.useState)(!1),[n,d]=(0,i.useState)(null),[p,m]=(0,i.useState)(null),f=(0,c.useSearchParams)(),y=f.get("name"),h=f.get("ac_no"),g=f.get("booth_no"),x=(0,c.useRouter)(),{register:b,handleSubmit:v,setValue:w,formState:{errors:j,isSubmitting:_}}=(0,l.cI)();async function N(e){console.log("Submitting form",e);let n=new FormData;for(let t in e)if("welcome_image"!==t&&"thankyou_image"!==t){var r;let a=null!==(r=e[t])&&void 0!==r?r:"";n.append(t,a)}e.welcome_image&&e.welcome_image[0]&&n.append("welcome_image",e.welcome_image[0]),e.thankyou_image&&e.thankyou_image[0]&&n.append("thankyou_image",e.thankyou_image[0]),n.append("created_by","rohitchand490@gmail.com"),t(!0);try{let e=await (0,o.Vb)(n);console.log(e),e.success?(u.ZP.success("Survey created successfully!"),x.replace("/admin/surveys/questions?id=".concat(e.survey._id,"&created_by=").concat(encodeURIComponent(e.survey.created_by)))):u.ZP.error("Failed to create survey.")}catch(e){u.ZP.error("Something went wrong.")}finally{t(!1)}}return((0,i.useEffect)(()=>{y&&w("name",y),h&&w("ac_no",h),g&&w("booth_no",g)},[y,h,g]),e)?(0,r.jsx)("div",{className:"fixed h-screen w-screen flex justify-center items-center bg-black bg-opacity-35 z-50",children:(0,r.jsx)(s.Z,{})}):(0,r.jsxs)("section",{className:"w-full",children:[(0,r.jsx)("header",{className:"w-full h-16 border-2",children:(0,r.jsx)("div",{className:"bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center",children:(0,r.jsx)("h3",{className:"text-secondary-300",children:"Create Surveys"})})}),(0,r.jsxs)("form",{className:"grid grid-cols-2 m-10",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-5 w-full",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)("label",{className:"text-secondary-300 font-medium",children:"Name"}),(0,r.jsx)("input",{value:y||"",disabled:!0,...b("name"),className:"col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)("label",{className:"text-secondary-300 font-medium",children:"AC_NO"}),(0,r.jsx)("input",{disabled:!0,...b("ac_no"),type:"text",className:"col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)("label",{className:"text-secondary-300 font-medium",children:"BOOTH_NO"}),(0,r.jsx)("input",{disabled:!0,...b("booth_no"),type:"text",className:"col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md "})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-5 w-full",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)("label",{className:"text-secondary-300 font-medium",children:"Access pin"}),(0,r.jsx)("input",{type:"number",...b("access_pin"),className:"col-span-2 w-[352px] h-[41px] border-secondary-200 px-4 py-[10px] focus:outline-none border rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)("label",{className:"text-secondary-300 font-medium",children:"Background location capture"}),(0,r.jsx)("input",{type:"checkbox",...b("background_location_capture"),className:"border-secondary-200 focus:outline-none border rounded-md"})]})]})]}),(0,r.jsxs)("div",{className:"sticky bottom-0 left-0 py-2 px-5 bg-white col-span-2 flex gap-4 justify-end mt-[10%] border-t border-gray-200",children:[(0,r.jsx)(a.Z,{onClick:v(N),className:"px-4 py-[10px] w-[95px]",children:"Save"}),(0,r.jsx)("button",{onClick:()=>x.back(),type:"button",className:"px-4 py-[10px] w-[95px] border border-secondary-200 rounded-md",children:"Cancel"})]})]})}t.default=()=>(0,r.jsx)(i.Suspense,{children:(0,r.jsx)(d,{})})},80106:function(e,t,n){"use strict";var r=n(57437),a=n(80585);t.Z=function(e){let{className:t}=e;return(0,r.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,r.jsx)(a.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,r.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},76965:function(e,t,n){"use strict";var r=n(57437);n(2265);var a=n(96164);t.Z=function(e){let{children:t,className:n,onClick:s,...o}=e;return(0,r.jsx)("button",{...o,onClick:s,className:(0,a.m6)("border text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",n),children:t})}},60274:function(e,t,n){"use strict";n.d(t,{Gn:function(){return u},LA:function(){return l},T0:function(){return d},Vb:function(){return s},a2:function(){return i},ez:function(){return o},tB:function(){return c}});var r=n(1633),a=n(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.TK),headers:{"Content-Type":"application/json"},data:e},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=e.page||1,n=e.limit||10,s=e.filter||"",o=e.created_by,c=e.sortBy,i=e.sortOrder,l=e.published;"published"===e.published?l=!0:"unpublished"===e.published?l=!1:"all"===e.published&&(l=void 0);let u={method:"GET",url:"".concat(r.M6,"/").concat(r.it,"?filter=").concat(s,"&page=").concat(t,"&limit=").concat(n,"&sortBy=").concat(c,"&sortOrder=").concat(i,"&published=").concat(l,"&created_by=").concat(o)},d=await a.Z.request(u);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(r.M6,"/").concat(r.VJ),params:{survey_id:e.survey_id,filters:e.filters}},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"GET",url:"".concat(r.M6,"/").concat(r.A5,"?_id=").concat(e._id)};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(r.M6,"/").concat(r.dt),data:e},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(r.M6,"/").concat(r.O1),params:e},n=await a.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return b},Dy:function(){return x},EK:function(){return l},HA:function(){return N},M6:function(){return r},ND:function(){return T},Ny:function(){return Z},O1:function(){return j},Pn:function(){return p},SR:function(){return s},TK:function(){return g},Tp:function(){return a},Tv:function(){return o},UN:function(){return y},UY:function(){return D},VH:function(){return W},VJ:function(){return k},Yn:function(){return f},d1:function(){return U},dt:function(){return v},ht:function(){return m},it:function(){return w},jC:function(){return S},jV:function(){return E},mW:function(){return A},n$:function(){return O},nM:function(){return q},q6:function(){return C},qJ:function(){return h},ql:function(){return M},rO:function(){return P},rd:function(){return c},sC:function(){return i},tm:function(){return u},tt:function(){return d},vx:function(){return _},we:function(){return B},x4:function(){return X},xD:function(){return R}});let r="http://localhost:6969",a="api/user/getUser",s="api/user/getAllUsers",o="api/user/addUsers",c="api/user/addMultipleUsers",i="api/user/updateUser",l="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",m="api/user/createKaryakarta",f="api/user/updateKaryakarta",y="api/user/getPannaPramukh",h="api/user/updateMultipleKaryakarta",g="api/survey/saveSurvey",x="api/survey/updateSurvey",b="api/survey/getSurvey",v="api/survey/deleteSurvey",w="api/survey/getAllSurveys",j="api/survey/getSurveysByAcAndBooth",_="api/response/saveResponses",N="api/response/getAllSurveyResponses",S="api/response/getAllResponses",k="api/response/getSurveyResponseStats",O="api/response/getGroupedByFamily",P=["Contact Form","Address"],X="api/auth/login",E="api/auth/forgotPassword",C="api/auth/resetPassword",Z="api/role/allRoles",A="api/role/roles",M="api/role/create",T="api/role/update",W="api/role/delete",q="api/todo/create",R="api/todo/todo",B="api/todo/todos",U="api/todo/update",D="api/todo/delete"}},function(e){e.O(0,[8472,3004,6164,9343,2971,7023,1744],function(){return e(e.s=97121)}),_N_E=e.O()}]);