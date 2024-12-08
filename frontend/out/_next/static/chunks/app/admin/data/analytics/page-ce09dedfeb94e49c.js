(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4847],{7171:function(e,t,s){Promise.resolve().then(s.bind(s,27817))},16463:function(e,t,s){"use strict";var n=s(71169);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}}),s.o(n,"useSearchParams")&&s.d(t,{useSearchParams:function(){return n.useSearchParams}})},27817:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(57437),r=s(824),a=s(76965),l=s(81382),i=s(40855),o=s(60274),c=s(16463),u=s(2265),d=s(41942),p=function(e){let{question:t,onChartTypeChange:s}=e;return(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,n.jsx)(d.ffH,{className:"cursor-pointer"}),t]}),(0,n.jsxs)("div",{className:"flex space-x-5",children:[(0,n.jsxs)("div",{className:"space-x-1",children:[(0,n.jsx)("label",{className:"text-secondary-300",children:"Chart Type:"}),(0,n.jsxs)("select",{className:"border border-secondary-200 rounded-md p-2 col-span-8 bg-white",id:"chartType",onChange:e=>s(e.target.value),children:[(0,n.jsx)("option",{value:"column",children:"Column"}),(0,n.jsx)("option",{value:"bar",children:"Bar"}),(0,n.jsx)("option",{value:"pie",children:"Pie"}),(0,n.jsx)("option",{value:"line",children:"Line"})]})]}),(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Pin to Dashboard"}),(0,n.jsxs)("div",{className:"space-x-1",children:[(0,n.jsx)("label",{className:"text-secondary-300",children:"Exclude in PDF:"}),(0,n.jsxs)("select",{className:"border border-secondary-200 rounded-md p-2 col-span-8 bg-white",id:"excludeInPDF",children:[(0,n.jsx)("option",{value:"no",children:"No"}),(0,n.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Export"}),(0,n.jsx)(a.Z,{className:"px-2 py-2",children:"⌄"})]})]})]})},x=s(37346),m=s(55211);m.kL.register(m.uw,m.f$,m.ZL,m.Dx,m.u,m.De,m.qi,m.od,m.jn);var h=function(e){let{responses:t,chartType:s}=e;console.log(s);let r={labels:t.map(e=>e.response_value),datasets:[{data:t.map(e=>e.count),backgroundColor:["#EF9595","#EFB495","#EFD595","#EBEF95","#A5DD9B","#BB9AB1","#EECEB9"],borderColor:"line"===s?"#EF9595":"",borderWidth:"line"===s?2:0}]},a={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:"pie"===s}},scales:{x:{display:"pie"!==s,ticks:{autoSkip:!1,maxRotation:0,minRotation:0}},y:{display:"pie"!==s,beginAtZero:!0}},barThickness:40};return(0,n.jsx)("div",{className:"h-[30vh] w-[70vw]",children:"bar"===s?(0,n.jsx)(x.$Q,{data:r,options:{...a,indexAxis:"x"}}):"column"===s?(0,n.jsx)(x.$Q,{data:r,options:{...a,indexAxis:"y"}}):"pie"===s?(0,n.jsx)(x.by,{data:r,options:a}):"line"===s?(0,n.jsx)(x.x1,{data:r,options:a}):void 0})},f=function(e){let{questionTitle:t,responses:s,totalResponses:r}=e,[a,l]=(0,u.useState)("column");return(0,n.jsxs)("div",{className:"flex flex-col w-full h-full bg-white p-5 mb-5 rounded-lg gap-4",children:[(0,n.jsx)(p,{question:t,onChartTypeChange:l}),(0,n.jsx)("div",{className:"flex justify-center ",children:(0,n.jsx)(h,{responses:s,chartType:a})}),(0,n.jsxs)("table",{className:"bg-white border border-gray-300",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"bg-gray-100",children:[(0,n.jsx)("th",{className:"py-2 px-4 border-b"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b text-center",children:"Responses"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b text-center",children:"Percent"})]})}),(0,n.jsxs)("tbody",{children:[s.map((e,t)=>{let s=(100*e.count/r).toFixed(2);return(0,n.jsxs)("tr",{className:t%2==0?"bg-gray-50":"bg-white",children:[(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:e.response_value}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.count}),(0,n.jsxs)("td",{className:"py-2 px-4 border-b text-center",children:[s,"%"]})]},t)}),(0,n.jsxs)("tr",{className:"font-bold",children:[(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:"Total"}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:r}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:"100.00%"})]})]})]})]})},y=s(85260),b=s(7432);let g={text:["contains","equals","starts with","ends with"],number:["=","!=","<","<=",">",">="],choice:["equals","not equals"]};function j(){var e;let[t,s]=(0,u.useState)([]),[d,p]=(0,u.useState)(!1),[x,m]=(0,u.useState)(null),[h,j]=(0,u.useState)(null),[v,N]=(0,u.useState)(""),[w,S]=(0,u.useState)([]),[C,q]=(0,u.useState)([]),[D,Z]=(0,u.useState)(""),[k,_]=(0,u.useState)(!1),[E,A]=(0,u.useState)(null),[R,M]=(0,u.useState)(""),[T,P]=(0,u.useState)(""),[F,W]=(0,u.useState)(""),O=(0,c.useSearchParams)().get("survey_id");(0,u.useEffect)(()=>{K(),U()},[]);let B=e=>{let t=E.find(t=>Number(t.question_id)===Number(e));t?(Z(e),M(t.type),P(L(t.type))):M("")},I=e=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Checkbox List","Checkbox List With Other","Radio Grid"].includes(e)?g.text:["Number Input","Number Point","Rating","Date"].includes(e)?g.number:["Radio Button","DropDown","DropDown With Other"].includes(e)?g.choice:[],L=e=>{let t=I(e);return t.length>0?t[0]:""};async function U(){let e=await (0,o.a2)({survey_id:O,filters:w});console.log("response stats data--->",e.data),e.success&&s(e.data)}async function K(){let e=await (0,o.LA)({_id:O});console.log("res--------------------------------->",e),A(e.data.questions.map(e=>e))}return(0,n.jsxs)("div",{className:"w-full bg-[#ECF0FA]  font-medium ",children:[(0,n.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between font-semibold ",children:[(0,n.jsx)("div",{className:"text-my-gray-200 items-center my-auto",children:(0,n.jsx)("p",{className:"text-sm ",children:"Analytics"})}),(0,n.jsxs)("div",{className:"flex space-x-2 text-black text-base",children:[(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Response"}),(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Analytics"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Daily Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Summary Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Spatial Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Scoring Report"})]})]}),(0,n.jsx)("div",{className:"p-5 font-semibold text-sm text-my-gray-200",children:(0,n.jsxs)("div",{className:"bg-white rounded-lg flex justify-between items-center px-4",children:[(0,n.jsx)("div",{className:"p-2 h-16 flex items-center rounded-lg",children:(0,n.jsx)(i.Z,{startDate:x,endDate:h,setStartDate:m,setEndDate:j})}),(0,n.jsx)("div",{className:"flex space-x-2 items-center",children:(0,n.jsx)(a.Z,{onClick:()=>p(!d),className:"",children:"Filters"})})]})}),d&&(0,n.jsx)("div",{className:"p-4 w-full ",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center-center gap-3",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(a.Z,{className:" flex justify-center items-center w-fit",onClick:()=>_(!0),children:"Data filter +"}),(0,n.jsx)(a.Z,{onClick:()=>U(),className:"w-fit",children:"Apply"})]}),(0,n.jsxs)("select",{onChange:e=>{let t=JSON.parse(e.target.value);w.find(e=>e.question===t.question&&e.operator===t.operator&&e.response===t.response)||S(t=>[...t,JSON.parse(e.target.value)])},value:v,name:"filters",id:"filters",className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",children:[(0,n.jsx)("option",{className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",value:"",disabled:!0,selected:!0,children:"Select filter"}),C&&C.length>0&&C.map(e=>{let t="";if(E){let s=null==E?void 0:E.find(t=>Number(t.question_id)===Number(e.question));s&&(t=s.parameters.question)}let s=JSON.stringify({question:e.question,operator:e.operator,response:e.response});return(0,n.jsx)("option",{value:s,children:"".concat(t," ").concat(e.operator," ").concat(e.response)},e.question)})]}),(0,n.jsx)("div",{className:"flex flex-col",children:w.map(e=>{let t;let s=null==E?void 0:E.find(t=>Number(t.question_id)===Number(e.question));return s&&(t=s.parameters.question),(0,n.jsxs)("div",{className:"flex justify-between mt-5 border border-secondary-200 bg-white rounded-[20px] w-1/2 px-4 py-2",children:[(0,n.jsx)("h2",{children:"".concat(t," ").concat(e.operator," ").concat(e.response)}),(0,n.jsx)("button",{onClick:()=>S(t=>t.filter(t=>!(t.question===e.question&&t.operator===e.operator&&t.response===e.response))),children:(0,n.jsx)(b.$iT,{})})]})})})]})}),(0,n.jsx)("div",{className:"p-5 text-sm text-my-gray-200",children:t&&t.length>0&&t.map((e,t)=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Number Input","Date"].includes(e.question_type)?null:(0,n.jsx)(f,{questionTitle:e.question,responses:e.responses,totalResponses:e.total_responses},t))}),(0,n.jsx)(y.Z,{open:k,closeModal:()=>_(!1),children:(0,n.jsxs)("div",{className:"min-w-[500px] h-[270px] flex flex-col",children:[(0,n.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Add filters"}),(0,n.jsxs)("form",{className:"w-full h-full p-4 flex gap-10 justify-center items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Question"}),(0,n.jsxs)("select",{onChange:e=>B(e.target.value),value:D,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full",children:[(0,n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select question"}),E&&E.map((e,t)=>(0,n.jsx)("option",{value:e.question_id,className:"text-secondary-300 px-4 py-2 text-left border-b min-w-24 whitespace-nowrap",children:e.parameters.question},t))]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Operator"}),(0,n.jsxs)("select",{disabled:0===D.trim().length,onChange:e=>P(e.target.value),value:T,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,n.jsx)("option",{disabled:!0,selected:!0,children:"Select operator"}),I(R).map(e=>(0,n.jsx)("option",{value:e,children:e}))]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Response"}),(0,n.jsx)("input",{disabled:0===R.trim().length||0===T.trim().length,onChange:e=>W(e.target.value),value:F,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",type:(null==E?void 0:null===(e=E.find(e=>Number(D)===Number(e.question_id)))||void 0===e?void 0:e.type)==="Date"?"date":"text",placeholder:"Enter response"})]})]}),(0,n.jsxs)("div",{className:"flex gap-3 items-center p-4",children:[(0,n.jsx)(r.Z,{className:"disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-secondary-100",disabled:0===D.trim().length||0===T.trim().length||0===F.trim().length,onClick:()=>{q([...C,{question:D,operator:T,response:F}]),_(!1)},children:"Save Filter"}),(0,n.jsx)(r.Z,{className:"border-red-500 hover:bg-red-500 hover:text-white text-red-500",onClick:()=>_(!1),children:"Cancel"})]})]})})]})}var v=()=>(0,n.jsx)(u.Suspense,{children:(0,n.jsx)(j,{})})},85260:function(e,t,s){"use strict";var n=s(57437),r=s(7583),a=s.n(r);let l={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};a().setAppElement("body"),t.Z=function(e){let{children:t,open:s,closeModal:r}=e;return(0,n.jsx)(a(),{isOpen:s,onRequestClose:r,style:l,contentLabel:"Example Modal",children:t})}},824:function(e,t,s){"use strict";var n=s(57437);s(2265);var r=s(96164);t.Z=function(e){let{children:t,className:s,...a}=e;return(0,n.jsx)("button",{...a,className:(0,r.m6)("border border-primary-300 px-4 py-2 rounded-[20px] text-primary-300 hover:text-white hover:bg-primary-300",s),children:t})}},76965:function(e,t,s){"use strict";var n=s(57437);s(2265);var r=s(12375),a=s(96164);t.Z=function(e){let{children:t,className:s,onClick:l,loading:i,...o}=e;return(0,n.jsx)("button",{...o,onClick:l,className:(0,a.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",s),children:i?(0,n.jsx)(r.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},81382:function(e,t,s){"use strict";var n=s(57437);s(2265);var r=s(96164);t.Z=function(e){let{children:t,className:s,onClick:a,...l}=e;return(0,n.jsx)("button",{...l,onClick:a,className:(0,r.m6)("border text-black bg-[#E0DCDC] rounded-[20px] h-[50px]  px-10 py-3",s),children:t})}},40855:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(57437),r=s(44114),a=s(36463),l=s.n(a),i=s(96164);s(54575);var o=function(e){let{startDate:t,setStartDate:s,endDate:a,setEndDate:o,className:c}=e,u=e=>e?(0,r.WU)(e,"dd-MMM-yyyy"):"",d=e=>{if(!e)return null;let t=new Date(e);return t.setHours(0,0,0,0),t};return(0,n.jsx)("div",{className:(0,i.m6)("w-fit flex font-medium text-lg py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer",c),children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l(),{selected:t,onChange:e=>s(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("input",{type:"text",value:t?u(t):"",onChange:e=>{console.log("inside input")},placeholder:"Select start",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating  text-center outline-none font-normal text-sm"})})}),(0,n.jsx)("img",{src:"/_next/static/media/doubleArrow.03752eee.png",className:"object-contain w-[30px] mx-4"}),(0,n.jsx)(l(),{selected:a,onChange:e=>o(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("input",{type:"text",value:a?u(a):"",onChange:e=>{console.log("inside input")},placeholder:"Select end",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating text-center outline-none font-normal text-sm"})})})]})})}},60274:function(e,t,s){"use strict";s.d(t,{Gn:function(){return u},LA:function(){return c},Vb:function(){return a},a2:function(){return o},ez:function(){return l},tB:function(){return i}});var n=s(1633),r=s(38472);let a=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.TK),headers:{"Content-Type":"application/json"},data:e},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t=e.page||1,s=e.limit||10,a=e.filter||"",l=e.created_by,i=e.sortBy,o=e.sortOrder,c=e.published;"published"===e.published?c=!0:"unpublished"===e.published?c=!1:"all"===e.published&&(c=void 0);let u={method:"GET",url:"".concat(n.M6,"/").concat(n.it,"?filter=").concat(a,"&page=").concat(t,"&limit=").concat(s,"&sortBy=").concat(i,"&sortOrder=").concat(o,"&published=").concat(c,"&created_by=").concat(l)},d=await r.Z.request(u);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(n.M6,"/").concat(n.VJ),params:{survey_id:e.survey_id,filters:e.filters}},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.A5,"?_id=").concat(e._id)};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.dt),data:e},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,s){"use strict";s.d(t,{A5:function(){return g},Dy:function(){return b},EK:function(){return c},HA:function(){return w},M6:function(){return n},ND:function(){return M},Ny:function(){return E},Pn:function(){return p},SR:function(){return a},TK:function(){return y},Tp:function(){return r},Tv:function(){return l},UY:function(){return B},VH:function(){return T},VJ:function(){return C},Yn:function(){return m},d1:function(){return O},dt:function(){return j},ht:function(){return x},it:function(){return v},jC:function(){return S},jV:function(){return k},mW:function(){return A},nM:function(){return P},pX:function(){return h},q6:function(){return _},qJ:function(){return f},ql:function(){return R},rO:function(){return q},rd:function(){return i},sC:function(){return o},sI:function(){return D},tm:function(){return u},tt:function(){return d},vx:function(){return N},we:function(){return W},x4:function(){return Z},xD:function(){return F}});let n="https://survey-3uf0.onrender.com",r="api/user/getUser",a="api/user/getAllUsers",l="api/user/addUsers",i="api/user/addMultipleUsers",o="api/user/updateUser",c="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",x="api/user/createKaryakarta",m="api/user/updateKaryakarta",h="api/user/getUsersByAcList",f="api/user/updateMultipleKaryakarta",y="api/survey/saveSurvey",b="api/survey/updateSurvey",g="api/survey/getSurvey",j="api/survey/deleteSurvey",v="api/survey/getAllSurveys",N="api/response/saveResponses",w="api/response/getAllSurveyResponses",S="api/response/getAllResponses",C="api/response/getSurveyResponseStats",q=["Contact Form","Address"],D="api/dashboard",Z="api/auth/login",k="api/auth/forgotPassword",_="api/auth/resetPassword",E="api/role/allRoles",A="api/role/roles",R="api/role/create",M="api/role/update",T="api/role/delete",P="api/todo/create",F="api/todo/todo",W="api/todo/todos",O="api/todo/update",B="api/todo/delete"}},function(e){e.O(0,[5223,7699,4574,1544,7674,8472,9413,7583,4076,2274,1805,5746,2971,7023,1744],function(){return e(e.s=7171)}),_N_E=e.O()}]);