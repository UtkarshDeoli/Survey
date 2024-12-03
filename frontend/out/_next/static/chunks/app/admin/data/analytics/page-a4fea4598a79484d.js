(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4847],{7171:function(e,t,s){Promise.resolve().then(s.bind(s,7817))},6463:function(e,t,s){"use strict";var n=s(1169);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}}),s.o(n,"useSearchParams")&&s.d(t,{useSearchParams:function(){return n.useSearchParams}})},7817:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(7437),r=s(824),a=s(6965),l=s(1382),o=s(855),i=s(274),c=s(6463),u=s(2265),d=s(1942),p=function(e){let{question:t,onChartTypeChange:s}=e;return(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,n.jsx)(d.ffH,{className:"cursor-pointer"}),t]}),(0,n.jsxs)("div",{className:"flex space-x-5",children:[(0,n.jsxs)("div",{className:"space-x-1",children:[(0,n.jsx)("label",{className:"text-secondary-300",children:"Chart Type:"}),(0,n.jsxs)("select",{className:"border border-secondary-200 rounded-md p-2 col-span-8 bg-white",id:"chartType",onChange:e=>s(e.target.value),children:[(0,n.jsx)("option",{value:"column",children:"Column"}),(0,n.jsx)("option",{value:"bar",children:"Bar"}),(0,n.jsx)("option",{value:"pie",children:"Pie"}),(0,n.jsx)("option",{value:"line",children:"Line"})]})]}),(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Pin to Dashboard"}),(0,n.jsxs)("div",{className:"space-x-1",children:[(0,n.jsx)("label",{className:"text-secondary-300",children:"Exclude in PDF:"}),(0,n.jsxs)("select",{className:"border border-secondary-200 rounded-md p-2 col-span-8 bg-white",id:"excludeInPDF",children:[(0,n.jsx)("option",{value:"no",children:"No"}),(0,n.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Export"}),(0,n.jsx)(a.Z,{className:"px-2 py-2",children:"⌄"})]})]})]})},x=s(7346),m=s(4228);m.kL.register(m.uw,m.f$,m.ZL,m.Dx,m.u,m.De,m.qi,m.od,m.jn);var h=function(e){let{responses:t,chartType:s}=e;console.log(s);let r={labels:t.map(e=>e.response_value),datasets:[{data:t.map(e=>e.count),backgroundColor:["#EF9595","#EFB495","#EFD595","#EBEF95","#A5DD9B","#BB9AB1","#EECEB9"],borderColor:"line"===s?"#EF9595":"",borderWidth:"line"===s?2:0}]},a={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:"pie"===s}},scales:{x:{display:"pie"!==s,ticks:{autoSkip:!1,maxRotation:0,minRotation:0}},y:{display:"pie"!==s,beginAtZero:!0}},barThickness:40};return(0,n.jsx)("div",{className:"h-[30vh] w-[70vw]",children:"bar"===s?(0,n.jsx)(x.$Q,{data:r,options:{...a,indexAxis:"x"}}):"column"===s?(0,n.jsx)(x.$Q,{data:r,options:{...a,indexAxis:"y"}}):"pie"===s?(0,n.jsx)(x.by,{data:r,options:a}):"line"===s?(0,n.jsx)(x.x1,{data:r,options:a}):void 0})},f=function(e){let{questionTitle:t,responses:s,totalResponses:r}=e,[a,l]=(0,u.useState)("column");return(0,n.jsxs)("div",{className:"flex flex-col w-full h-full bg-white p-5 mb-5 rounded-lg gap-4",children:[(0,n.jsx)(p,{question:t,onChartTypeChange:l}),(0,n.jsx)("div",{className:"flex justify-center ",children:(0,n.jsx)(h,{responses:s,chartType:a})}),(0,n.jsxs)("table",{className:"bg-white border border-gray-300",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"bg-gray-100",children:[(0,n.jsx)("th",{className:"py-2 px-4 border-b"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b text-center",children:"Responses"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b text-center",children:"Percent"})]})}),(0,n.jsxs)("tbody",{children:[s.map((e,t)=>{let s=(100*e.count/r).toFixed(2);return(0,n.jsxs)("tr",{className:t%2==0?"bg-gray-50":"bg-white",children:[(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:e.response_value}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.count}),(0,n.jsxs)("td",{className:"py-2 px-4 border-b text-center",children:[s,"%"]})]},t)}),(0,n.jsxs)("tr",{className:"font-bold",children:[(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:"Total"}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:r}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-center",children:"100.00%"})]})]})]})]})},y=s(5260),b=s(5424);let g={text:["contains","equals","starts with","ends with"],number:["=","!=","<","<=",">",">="],choice:["equals","not equals"]};function j(){var e;let[t,s]=(0,u.useState)([]),[d,p]=(0,u.useState)(!1),[x,m]=(0,u.useState)(null),[h,j]=(0,u.useState)(null),[v,N]=(0,u.useState)(""),[w,S]=(0,u.useState)([]),[C,q]=(0,u.useState)([]),[D,Z]=(0,u.useState)(""),[k,E]=(0,u.useState)(!1),[_,A]=(0,u.useState)(null),[R,T]=(0,u.useState)(""),[M,P]=(0,u.useState)(""),[F,W]=(0,u.useState)(""),O=(0,c.useSearchParams)().get("survey_id");(0,u.useEffect)(()=>{L(),K()},[]);let B=e=>{let t=_.find(t=>Number(t.question_id)===Number(e));t?(Z(e),T(t.type),P(U(t.type))):T("")},I=e=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Checkbox List","Checkbox List With Other","Radio Grid"].includes(e)?g.text:["Number Input","Number Point","Rating","Date"].includes(e)?g.number:["Radio Button","DropDown","DropDown With Other"].includes(e)?g.choice:[],U=e=>{let t=I(e);return t.length>0?t[0]:""};async function K(){let e=await (0,i.a2)({survey_id:O,filters:w});console.log("response stats data--->",e.data),e.success&&s(e.data)}async function L(){let e=await (0,i.LA)({_id:O});console.log("res--------------------------------->",e),A(e.data.questions.map(e=>e))}return(0,n.jsxs)("div",{className:"w-full bg-[#ECF0FA]  font-medium ",children:[(0,n.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between font-semibold ",children:[(0,n.jsx)("div",{className:"text-my-gray-200 items-center my-auto",children:(0,n.jsx)("p",{className:"text-sm ",children:"Analytics"})}),(0,n.jsxs)("div",{className:"flex space-x-2 text-black text-base",children:[(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Response"}),(0,n.jsx)(a.Z,{className:"px-4 py-2",children:"Analytics"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Daily Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Summary Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Spatial Report"}),(0,n.jsx)(l.Z,{className:"px-4 py-2",children:"Scoring Report"})]})]}),(0,n.jsx)("div",{className:"p-5 font-semibold text-sm text-my-gray-200",children:(0,n.jsxs)("div",{className:"bg-white rounded-lg flex justify-between items-center px-4",children:[(0,n.jsx)("div",{className:"p-2 h-16 flex items-center rounded-lg",children:(0,n.jsx)(o.Z,{startDate:x,endDate:h,setStartDate:m,setEndDate:j})}),(0,n.jsx)("div",{className:"flex space-x-2 items-center",children:(0,n.jsx)(a.Z,{onClick:()=>p(!d),className:"",children:"Filters"})})]})}),d&&(0,n.jsx)("div",{className:"p-4 w-full ",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center-center gap-3",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(a.Z,{className:" flex justify-center items-center w-fit",onClick:()=>E(!0),children:"Data filter +"}),(0,n.jsx)(a.Z,{onClick:()=>K(),className:"w-fit",children:"Apply"})]}),(0,n.jsxs)("select",{onChange:e=>{let t=JSON.parse(e.target.value);w.find(e=>e.question===t.question&&e.operator===t.operator&&e.response===t.response)||S(t=>[...t,JSON.parse(e.target.value)])},value:v,name:"filters",id:"filters",className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",children:[(0,n.jsx)("option",{className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",value:"",disabled:!0,selected:!0,children:"Select filter"}),C&&C.length>0&&C.map(e=>{let t="";if(_){let s=null==_?void 0:_.find(t=>Number(t.question_id)===Number(e.question));s&&(t=s.parameters.question)}let s=JSON.stringify({question:e.question,operator:e.operator,response:e.response});return(0,n.jsx)("option",{value:s,children:"".concat(t," ").concat(e.operator," ").concat(e.response)},e.question)})]}),(0,n.jsx)("div",{className:"flex flex-col",children:w.map(e=>{let t;let s=null==_?void 0:_.find(t=>Number(t.question_id)===Number(e.question));return s&&(t=s.parameters.question),(0,n.jsxs)("div",{className:"flex justify-between mt-5 border border-secondary-200 bg-white rounded-[20px] w-1/2 px-4 py-2",children:[(0,n.jsx)("h2",{children:"".concat(t," ").concat(e.operator," ").concat(e.response)}),(0,n.jsx)("button",{onClick:()=>S(t=>t.filter(t=>!(t.question===e.question&&t.operator===e.operator&&t.response===e.response))),children:(0,n.jsx)(b.$iT,{})})]})})})]})}),(0,n.jsx)("div",{className:"p-5 text-sm text-my-gray-200",children:t&&t.length>0&&t.map((e,t)=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Number Input","Date"].includes(e.question_type)?null:(0,n.jsx)(f,{questionTitle:e.question,responses:e.responses,totalResponses:e.total_responses},t))}),(0,n.jsx)(y.Z,{open:k,closeModal:()=>E(!1),children:(0,n.jsxs)("div",{className:"min-w-[500px] h-[270px] flex flex-col",children:[(0,n.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Add filters"}),(0,n.jsxs)("form",{className:"w-full h-full p-4 flex gap-10 justify-center items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Question"}),(0,n.jsxs)("select",{onChange:e=>B(e.target.value),value:D,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full",children:[(0,n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select question"}),_&&_.map((e,t)=>(0,n.jsx)("option",{value:e.question_id,className:"text-secondary-300 px-4 py-2 text-left border-b min-w-24 whitespace-nowrap",children:e.parameters.question},t))]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Operator"}),(0,n.jsxs)("select",{disabled:0===D.trim().length,onChange:e=>P(e.target.value),value:M,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,n.jsx)("option",{disabled:!0,selected:!0,children:"Select operator"}),I(R).map(e=>(0,n.jsx)("option",{value:e,children:e}))]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsx)("label",{className:"text-my-gray-200",children:"Response"}),(0,n.jsx)("input",{disabled:0===R.trim().length||0===M.trim().length,onChange:e=>W(e.target.value),value:F,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",type:(null==_?void 0:null===(e=_.find(e=>Number(D)===Number(e.question_id)))||void 0===e?void 0:e.type)==="Date"?"date":"text",placeholder:"Enter response"})]})]}),(0,n.jsxs)("div",{className:"flex gap-3 items-center p-4",children:[(0,n.jsx)(r.Z,{className:"disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-secondary-100",disabled:0===D.trim().length||0===M.trim().length||0===F.trim().length,onClick:()=>{q([...C,{question:D,operator:M,response:F}]),E(!1)},children:"Save Filter"}),(0,n.jsx)(r.Z,{className:"border-red-500 hover:bg-red-500 hover:text-white text-red-500",onClick:()=>E(!1),children:"Cancel"})]})]})})]})}var v=()=>(0,n.jsx)(u.Suspense,{children:(0,n.jsx)(j,{})})},5260:function(e,t,s){"use strict";var n=s(7437),r=s(7583),a=s.n(r);let l={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};a().setAppElement("body"),t.Z=function(e){let{children:t,open:s,closeModal:r}=e;return(0,n.jsx)(a(),{isOpen:s,onRequestClose:r,style:l,contentLabel:"Example Modal",children:t})}},824:function(e,t,s){"use strict";var n=s(7437);s(2265);var r=s(6164);t.Z=function(e){let{children:t,className:s,...a}=e;return(0,n.jsx)("button",{...a,className:(0,r.m6)("border border-primary-300 px-4 py-2 rounded-[20px] text-primary-300 hover:text-white hover:bg-primary-300",s),children:t})}},6965:function(e,t,s){"use strict";var n=s(7437);s(2265);var r=s(2375),a=s(6164);t.Z=function(e){let{children:t,className:s,onClick:l,loading:o,...i}=e;return(0,n.jsx)("button",{...i,onClick:l,className:(0,a.m6)("flex border justify-center items-center text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",s),children:o?(0,n.jsx)(r.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},1382:function(e,t,s){"use strict";var n=s(7437);s(2265);var r=s(6164);t.Z=function(e){let{children:t,className:s,onClick:a,...l}=e;return(0,n.jsx)("button",{...l,onClick:a,className:(0,r.m6)("border text-black bg-[#E0DCDC] rounded-[20px] h-[50px]  px-10 py-3",s),children:t})}},855:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(7437),r=s(6235),a=s(245),l=s.n(a),o=s(6164);s(4575);var i=function(e){let{startDate:t,setStartDate:s,endDate:a,setEndDate:i,className:c}=e,u=e=>e?(0,r.WU)(e,"dd-MMM-yyyy"):"",d=e=>{if(!e)return null;let t=new Date(e);return t.setHours(0,0,0,0),t};return(0,n.jsx)("div",{className:(0,o.m6)("w-fit flex font-medium text-lg py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer",c),children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l(),{selected:t,onChange:e=>s(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("input",{type:"text",value:t?u(t):"",onChange:e=>{console.log("inside input")},placeholder:"Select start",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating  text-center outline-none font-normal text-sm"})})}),(0,n.jsx)("img",{src:"/_next/static/media/doubleArrow.03752eee.png",className:"object-contain w-[30px] mx-4"}),(0,n.jsx)(l(),{selected:a,onChange:e=>i(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("input",{type:"text",value:a?u(a):"",onChange:e=>{console.log("inside input")},placeholder:"Select end",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating text-center outline-none font-normal text-sm"})})})]})})}},274:function(e,t,s){"use strict";s.d(t,{Gn:function(){return u},LA:function(){return c},T0:function(){return d},Vb:function(){return a},a2:function(){return i},ez:function(){return l},tB:function(){return o}});var n=s(1633),r=s(8472);let a=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.TK),headers:{"Content-Type":"application/json"},data:e},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=e.page||1,s=e.limit||10,a=e.filter||"",l=e.created_by,o=e.sortBy,i=e.sortOrder,c=e.published;"published"===e.published?c=!0:"unpublished"===e.published?c=!1:"all"===e.published&&(c=void 0);let u={method:"GET",url:"".concat(n.M6,"/").concat(n.it,"?filter=").concat(a,"&page=").concat(t,"&limit=").concat(s,"&sortBy=").concat(o,"&sortOrder=").concat(i,"&published=").concat(c,"&created_by=").concat(l)},d=await r.Z.request(u);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(n.M6,"/").concat(n.VJ),params:{survey_id:e.survey_id,filters:e.filters}},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.A5,"?_id=").concat(e._id)};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(n.M6,"/").concat(n.dt),data:e},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(n.M6,"/").concat(n.O1),params:e},s=await r.Z.request(t);return console.log(s),s.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,t,s){"use strict";s.d(t,{A5:function(){return g},Dy:function(){return b},EK:function(){return c},HA:function(){return S},M6:function(){return n},ND:function(){return P},Ny:function(){return R},O1:function(){return N},Pn:function(){return p},SR:function(){return a},TK:function(){return y},Tp:function(){return r},Tv:function(){return l},UN:function(){return h},UY:function(){return U},VH:function(){return F},VJ:function(){return q},Yn:function(){return m},d1:function(){return I},dt:function(){return j},ht:function(){return x},it:function(){return v},jC:function(){return C},jV:function(){return _},mW:function(){return T},n$:function(){return D},nM:function(){return W},q6:function(){return A},qJ:function(){return f},ql:function(){return M},rO:function(){return Z},rd:function(){return o},sC:function(){return i},sI:function(){return k},tm:function(){return u},tt:function(){return d},vx:function(){return w},we:function(){return B},x4:function(){return E},xD:function(){return O}});let n="http://localhost:6969",r="api/user/getUser",a="api/user/getAllUsers",l="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",c="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",x="api/user/createKaryakarta",m="api/user/updateKaryakarta",h="api/user/getPannaPramukh",f="api/user/updateMultipleKaryakarta",y="api/survey/saveSurvey",b="api/survey/updateSurvey",g="api/survey/getSurvey",j="api/survey/deleteSurvey",v="api/survey/getAllSurveys",N="api/survey/getSurveysByAcAndBooth",w="api/response/saveResponses",S="api/response/getAllSurveyResponses",C="api/response/getAllResponses",q="api/response/getSurveyResponseStats",D="api/response/getGroupedByFamily",Z=["Contact Form","Address"],k="api/dashboard",E="api/auth/login",_="api/auth/forgotPassword",A="api/auth/resetPassword",R="api/role/allRoles",T="api/role/roles",M="api/role/create",P="api/role/update",F="api/role/delete",W="api/todo/create",O="api/todo/todo",B="api/todo/todos",I="api/todo/update",U="api/todo/delete"}},function(e){e.O(0,[5223,7699,4574,1544,7674,8472,9413,7583,8143,2359,5746,2971,7023,1744],function(){return e(e.s=7171)}),_N_E=e.O()}]);