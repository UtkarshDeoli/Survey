(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7116],{60773:function(e,t,r){Promise.resolve().then(r.bind(r,13141))},16463:function(e,t,r){"use strict";var n=r(71169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},80585:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2265),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0},s=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,c="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(c,0),n},c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},i=[s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),s("PropagateLoader","25% {transform: translateX(-".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    75% {transform: translateX(").concat(1,"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),s("PropagateLoader","25% {transform: translateX(".concat(1,"rem) scale(0.75)}\n    50% {transform: translateX(").concat(3,"rem) scale(0.6)}\n    75% {transform: translateX(").concat(5,"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")],l=function(e){var t=e.loading,r=e.color,s=void 0===r?"#000000":r,l=e.speedMultiplier,u=void 0===l?1:l,p=e.cssOverride,d=e.size,f=o(e,["loading","color","speedMultiplier","cssOverride","size"]),m=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return a[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(void 0===d?15:d),y=m.value,h=m.unit,x=c({display:"inherit",position:"relative"},void 0===p?{}:p),v=function(e){return{position:"absolute",fontSize:"".concat(y/3).concat(h),width:"".concat(y).concat(h),height:"".concat(y).concat(h),background:s,borderRadius:"50%",animation:"".concat(i[e]," ").concat(1.5/u,"s infinite"),animationFillMode:"forwards"}};return void 0===t||t?n.createElement("span",c({style:x},f),n.createElement("span",{style:v(0)}),n.createElement("span",{style:v(1)}),n.createElement("span",{style:v(2)}),n.createElement("span",{style:v(3)}),n.createElement("span",{style:v(4)}),n.createElement("span",{style:v(5)})):null}},13141:function(e,t,r){"use strict";r.r(t);var n=r(57437),a=r(824),s=r(76965),c=r(2265),o=r(16463),i=r(43781),l=r(80106),u=r(60152),p=r(95650);t.default=function(){let[e,t]=(0,c.useState)(!1),[r,d]=(0,c.useState)([]),[f,m]=(0,c.useState)(""),[y,h]=(0,c.useState)("desc"),[x,v]=(0,c.useState)(!1),g=(0,o.useRouter)();async function j(){t(!0);let e=await (0,u.sD)({search:f,sortOrder:y});e.success&&(console.log(e),d(e.data)),t(!1)}return console.log(r),(0,c.useEffect)(()=>{j()},[y,x]),(0,n.jsxs)("div",{className:"w-full font-medium bg-[#ECF0FA] h-full",children:[(0,n.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between",children:[(0,n.jsx)("div",{className:"text-my-gray-200",children:(0,n.jsx)("h1",{className:"text-2xl",children:"Surveys Data"})}),(0,n.jsx)(a.Z,{className:"bg-white font-semibold",children:"Uploaded Summary"})]}),(0,n.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("input",{value:f,onChange:e=>m(e.target.value),className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Search Surveys here"}),(0,n.jsxs)("div",{className:"flex space-x-3 ",children:[(0,n.jsx)(s.Z,{onClick:j,className:"text-[14px] font-semibold flex gap-2 items-center justify-center",children:(0,n.jsx)("p",{children:"Search"})}),(0,n.jsx)("div",{className:"flex space-x-3 ",children:(0,n.jsx)(a.Z,{onClick:()=>{m(""),v(!x)},children:"Reset"})})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-10 ",children:[(0,n.jsx)("p",{className:"",children:"Sort By:"}),(0,n.jsx)("div",{className:"rounded-md py-2 px-2 justify-between border-2 border-secondary-200",children:(0,n.jsxs)("select",{onChange:e=>h(e.target.value),name:"sortby",className:"w-fit px-2 bg-white focus:outline-none",id:"sortby",children:[(0,n.jsx)("option",{value:"asc",children:"Date DESC"}),(0,n.jsx)("option",{value:"desc",children:"Date ASC"})]})})]})]})}),(0,n.jsxs)("div",{className:"w-full px-5 py-5 text-sm",children:[(0,n.jsxs)("div",{className:"grid grid-cols-7 text-white bg-primary-300 font-semibold px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,n.jsx)("p",{className:"col-span-1",children:"Names"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Responses"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Analytics"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Daily Report"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Summary Report"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Spatial Report"}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:"Scoring Report"})]}),e&&(0,n.jsx)(l.Z,{className:"h-[50vh] w-full flex justify-center items-center text-primary-300"}),!e&&r.length>0?r.map((e,t)=>(0,n.jsxs)("div",{onClick:()=>g.push("/admin/data/survey-responses?survey_id=".concat(e.survey_id,"&ac_no=").concat(e.ac_no,"&booth_no=").concat(e.booth_no)),className:"grid cursor-pointer grid-cols-7 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white",children:[(0,n.jsxs)("div",{className:"col-span-1 flex flex-col",children:[(0,n.jsx)("p",{className:"",children:e.surveyName}),(0,n.jsx)("p",{className:"text-[13px] text-my-gray-200",children:(0,p.p6)(e.surveyCreatedAt)})]}),(0,n.jsx)("button",{onClick:()=>g.push("/admin/data/survey-responses?survey_id=".concat(e.survey_id)),className:"col-span-1 flex justify-center items-center",children:e.responseCount}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)(i.iJC,{size:24,onClick:t=>{t.stopPropagation(),g.push("/admin/data/analytics?survey_id=".concat(e.survey_id))},className:"cursor-pointer"})}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)(i.M7W,{size:24})}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)(i.y9N,{size:24})}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)(i.uhM,{size:24})}),(0,n.jsx)("p",{className:"col-span-1 flex justify-center items-center",children:(0,n.jsx)(i.pOt,{size:24})})]},t)):(0,n.jsx)("div",{className:"flex justify-center items-center h-[30vh] w-full",children:(0,n.jsx)("p",{children:"No survey with responses"})})]})]})}},80106:function(e,t,r){"use strict";var n=r(57437),a=r(80585);t.Z=function(e){let{className:t}=e;return(0,n.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,n.jsx)(a.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,n.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},824:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(96164);t.Z=function(e){let{children:t,className:r,...s}=e;return(0,n.jsx)("button",{...s,className:(0,a.m6)("border border-primary-300 px-4 py-2 rounded-[20px] text-primary-300 hover:text-white hover:bg-primary-300",r),children:t})}},76965:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(96164);t.Z=function(e){let{children:t,className:r,onClick:s,...c}=e;return(0,n.jsx)("button",{...c,onClick:s,className:(0,a.m6)("border text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",r),children:t})}},60152:function(e,t,r){"use strict";r.d(t,{Bl:function(){return i},K7:function(){return o},Pt:function(){return s},sD:function(){return c}});var n=r(1633),a=r(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.vx),data:e},r=await a.Z.request(t);return console.log(r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.HA),params:e};return(await a.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.jC),params:e},r=await a.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.n$),params:e},r=await a.Z.request(t);return console.log("response --->",r),r.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,r){"use strict";r.d(t,{Sg:function(){return c},aF:function(){return s},a_:function(){return o},p6:function(){return a}});let n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function a(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()],s=t.getFullYear();return"".concat(r,"-").concat(a,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function c(e){let t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=n[t.getMonth()];return"".concat(r," ").concat(a)}function o(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,r){"use strict";r.d(t,{A5:function(){return g},Dy:function(){return v},EK:function(){return l},HA:function(){return S},M6:function(){return n},ND:function(){return M},Ny:function(){return R},O1:function(){return w},Pn:function(){return d},SR:function(){return s},TK:function(){return x},Tp:function(){return a},Tv:function(){return c},UN:function(){return y},UY:function(){return K},VH:function(){return Z},VJ:function(){return P},Yn:function(){return m},d1:function(){return U},dt:function(){return j},ht:function(){return f},it:function(){return b},jC:function(){return O},jV:function(){return X},mW:function(){return _},n$:function(){return E},nM:function(){return z},q6:function(){return D},qJ:function(){return h},ql:function(){return A},rO:function(){return C},rd:function(){return o},sC:function(){return i},tm:function(){return u},tt:function(){return p},vx:function(){return N},we:function(){return W},x4:function(){return k},xD:function(){return F}});let n="http://localhost:6969",a="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",l="api/user/updateUsers",u="api/chatroom/getAllChatsData",p="api/user/getAllKaryakarta",d="api/user/getKaryakarta",f="api/user/createKaryakarta",m="api/user/updateKaryakarta",y="api/user/getPannaPramukh",h="api/user/updateMultipleKaryakarta",x="api/survey/saveSurvey",v="api/survey/updateSurvey",g="api/survey/getSurvey",j="api/survey/deleteSurvey",b="api/survey/getAllSurveys",w="api/survey/getSurveysByAcAndBooth",N="api/response/saveResponses",S="api/response/getAllSurveyResponses",O="api/response/getAllResponses",P="api/response/getSurveyResponseStats",E="api/response/getGroupedByFamily",C=["Contact Form","Address"],k="api/auth/login",X="api/auth/forgotPassword",D="api/auth/resetPassword",R="api/role/allRoles",_="api/role/roles",A="api/role/create",M="api/role/update",Z="api/role/delete",z="api/todo/create",F="api/todo/todo",W="api/todo/todos",U="api/todo/update",K="api/todo/delete"},91810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(p,o({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function p(e){var t=t=>{var r,{attr:a,size:s,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,c),p=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[1779,8472,6164,2971,7023,1744],function(){return e(e.s=60773)}),_N_E=e.O()}]);