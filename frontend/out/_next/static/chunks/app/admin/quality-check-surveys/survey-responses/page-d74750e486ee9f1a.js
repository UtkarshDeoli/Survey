(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2343],{93300:function(e,s,t){Promise.resolve().then(t.bind(t,64768))},64768:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return R}});var a=t(57437),l=t(76965),n=t(81382),r=t(40855),i=t(2265),d=t(60152),c=t(16463),o=t(84298),u=t(94962),p=t(80106),x=t(77744),m=t(56617),h=t(60274),f=t(78731),b=t(55691),j=t(95673),g=t(50336),w=t(66648),y=t(554),N=t(69824),v=t(1633),S=t(17042),k=t(95650),_=t(63872),D=t(22221),P=t(29721),Z=function(e){let{responses:s,users:t,setSelectedResponse:l,setResponseModalIsOpen:n,setMore:r,more:i,getUserResponses:o}=e;async function p(e,s,t){t.stopPropagation(),(await (0,d.Bu)({response_id:e,status:s})).success?(u.ZP.success("Successfully updated!"),o()):u.ZP.error("Failed to update!")}return(0,c.useSearchParams)().get("survey_id"),(0,a.jsx)("div",{id:"scrollableDiv",className:"w-[96%] mx-auto max-h-[80vh] overflow-auto vertical-scrollbar rounded-t-2xl border border-secondary-200",children:(0,a.jsxs)("table",{className:"w-full table-auto",children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsxs)("tr",{className:"bg-dark-gray text-white sticky top-0 left-0 z-10",children:[(0,a.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center"}),(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Panna pramukh"}),(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Status"}),(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Remark"}),(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Response date"}),(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"User"}),s&&s.length>0&&s[0].responses.map((e,s)=>(0,a.jsxs)("td",{className:"gap-2 font-semibold px-4 py-2 border-b min-w-32 whitespace-nowrap text-center",children:[i!==e.question_id?(0,k.aF)(e.question,10):e.question,(0,a.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>r(e.question_id),children:i!==e.question_id&&e.question.length>10?"More":""}),(0,a.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>r(null),children:i===e.question_id&&e.question.length>10?"Less":""})]},s))]})}),(0,a.jsx)("tbody",{className:"bg-white",children:s&&s.map((e,s)=>{var r;return(0,a.jsxs)("tr",{onClick:()=>{l(e),n(!0)},className:"cursor-pointer",children:[(0,a.jsx)("td",{className:"min-w-32 px-4 py-4 border-b h-full sticky left-0 bg-white w-full text-center",children:"Pending"===e.status?(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("button",{onClick:s=>p(e._id,"Approved",s),className:"bg-green-500 p-2 rounded-md text-white",children:(0,a.jsx)(P.KJd,{})}),(0,a.jsx)("button",{onClick:s=>p(e._id,"Rejected",s),className:"bg-red-400 p-2 rounded-md text-white",children:(0,a.jsx)(_.hKd,{})})]}):"Approved"===e.status?(0,a.jsxs)("p",{className:"bg-green-500 p-2 rounded-md flex gap-2 items-center w-fit text-white",children:[(0,a.jsx)(P.KJd,{})," Approved"]}):(0,a.jsxs)("p",{className:"bg-red-400 p-2 rounded-md flex gap-2 items-center w-fit text-white",children:[(0,a.jsx)(_.hKd,{})," Rejected"]})}),(0,a.jsx)("td",{className:"min-w-32 px-4 py-4 border-b text-center",children:e.panna_pramukh_assigned?e.panna_pramukh_assigned.name:"--"}),(0,a.jsx)("td",{className:"min-w-32 px-4 py-4 border-b text-center",children:e.contacted?(0,a.jsx)("p",{className:"w-full p-2 bg-green-200 rounded-md",children:"Complete"}):e.panna_pramukh_assigned?(0,a.jsx)("p",{className:"w-full p-2 bg-amber-300 rounded-md",children:"Pending"}):"---"}),(0,a.jsx)("td",{className:"min-w-32 px-4 py-4 border-b text-center",children:e.remark?(0,k.aF)(e.remark,15):"---"}),(0,a.jsx)("td",{className:"min-w-32 px-4 py-4 border-b text-center",children:(0,k.p6)(e.createdAt)}),(0,a.jsx)("td",{className:"min-w-44 whitespace-nowrap px-4 py-2 border-b text-center",children:(null===(r=t.find(s=>s._id===e.user_id))||void 0===r?void 0:r.name)||"-"}),e.responses.map((e,s)=>(0,a.jsx)(D.Z,{expand:!1,questionType:e.question_type,response:e.response}))]},s)})})]})})};function C(){let[e,s]=(0,i.useState)(null),[t,k]=(0,i.useState)(null),[_,D]=(0,i.useState)([]),[P,C]=(0,i.useState)(!1),[R,q]=(0,i.useState)(!1),[A,M]=(0,i.useState)(""),[E,F]=(0,i.useState)([]),[O,I]=(0,i.useState)(""),[K,U]=(0,i.useState)(""),[J,B]=(0,i.useState)(""),[L,Q]=(0,i.useState)(""),[z,T]=(0,i.useState)(""),[G,W]=(0,i.useState)([]),[Y,H]=(0,i.useState)([]),[V,X]=(0,i.useState)(!0),[$,ee]=(0,i.useState)(!1),[es,et]=(0,i.useState)(null),[ea,el]=(0,i.useState)(null),[en,er]=(0,i.useState)(!1),[ei,ed]=(0,i.useState)(null),[ec,eo]=(0,i.useState)(!1),[eu,ep]=(0,i.useState)(!1),[ex,em]=(0,i.useState)(null),[eh,ef]=(0,i.useState)(null),[eb,ej]=(0,i.useState)(null),[eg,ew]=(0,i.useState)(null),[ey,eN]=(0,i.useState)(1),[ev,eS]=(0,i.useState)(10),[ek,e_]=(0,i.useState)(1),[eD,eP]=(0,i.useState)(!1),[eZ,eC]=(0,i.useState)([]),eR=(0,c.useSearchParams)();(0,S.Z)();let eq=eR.get("survey_id"),eA=(0,c.useRouter)(),{isLoaded:eM}=(0,x.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyAAOwDBvpg5ZDv5JFG-CoDW23GsKkOPeuA"});async function eE(){let s,a;e&&t&&(s=new Date(e||""),a=new Date(t||""),s.setDate(s.getDate()+1),a.setDate(a.getDate()+1));let l={surveyId:eq,startDate:s,endDate:a,userId:O,filters:G,limit:ev,page:ek};ee(!0);let n=await (0,d.K7)(l);H(n.data),eN(n.totalPages),console.log("responses of responses ------>",n),n.data&&n.data.length>0&&ed(n.data[0].responses.map(e=>({question:e.question,question_id:e.question_id}))),ee(!1)}async function eF(){let e=await (0,h.LA)({_id:eq});console.log("current survey-->",e),e.success?(console.log("setting ac_list",e.data.ac_list),eC(e.data.ac_list),ew(e.data.questions.map(e=>e))):u.ZP.error("Error fetching the survey!")}async function eO(){ee(!0);let e=await (0,o.AW)({selectedRole:v.py});console.log("users-------->",e.data),D(e.data),ee(!1)}async function eI(){ee(!0),console.log("ac list is coming  --->",eZ);let e=await (0,o.Yx)({ac_list:eZ,filter:ex});console.log("panna below-------->",e),ef(e),ee(!1)}(0,i.useEffect)(()=>{eF(),eE(),eO()},[V,ek,ev]),(0,i.useEffect)(()=>{eZ.length>0&&eI()},[ex,eZ]);let eK=()=>{C(!1),eU()},eU=()=>{U(""),B(""),Q("")},eJ=async()=>{try{let s,a;eP(!0),e&&t&&(s=new Date(e||""),a=new Date(t||""),s.setDate(s.getDate()+1),a.setDate(a.getDate()+1));let l={surveyId:eq,startDate:s,endDate:a,userId:O,filters:G,download:!0},n="response.xlsx",r=await (0,d.kz)(l),i=r.headers["content-disposition"];console.log("header ======>",i);let c=i.split("filename=")[1].replace(/"/g,"");c&&(n=c);let o=window.URL.createObjectURL(new Blob([r.data])),u=document.createElement("a");u.href=o,u.setAttribute("download",n),document.body.appendChild(u),u.click(),document.body.removeChild(u)}catch(e){u.ZP.error("Failed to export to Excel")}finally{eP(!1)}},eB=null==_?void 0:_.map(e=>({value:e._id,label:e.name}));return(0,a.jsxs)("div",{className:"flex flex-col w-full font-medium bg-light-gray",children:[(0,a.jsxs)("nav",{className:"w-full py-3 px-8 flex flex-col gap-10 font-semibold",children:[(0,a.jsx)("h3",{className:"text-[24px] font-semibold",children:"Survey Response"}),(0,a.jsxs)("div",{className:"flex w-full gap-12",children:[(0,a.jsx)(f.Z,{appliedFilters:G,filters:E,responses:Y,selectedFilter:z,setAppliedFilters:W,setSelectedFilter:T,surveyQuestions:eg}),(0,a.jsxs)("div",{className:"flex space-x-2 text-black text-base font-semibold",children:[(0,a.jsx)(l.Z,{loading:eD,onClick:eJ,className:"rounded-[20px] h-fit px-4 py-2 w-44 justify-center",children:"Export to Excel"}),(0,a.jsx)(n.Z,{onClick:()=>eA.back(),className:"rounded-[20px] h-fit px-4 py-2",children:"Back"})]})]})]}),(0,a.jsx)("div",{className:"p-5 font-semibold text-sm ",children:(0,a.jsx)("div",{className:"bg-light-gray space-y-4 w-full rounded-lg px-4 py-6",children:(0,a.jsxs)("div",{className:"w-[780px] space-y-8 pb-6 ",children:[(0,a.jsxs)("div",{className:"flex gap-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center mb-5",children:[(0,a.jsx)("h1",{className:"",children:"Date Range"}),(0,a.jsx)(w.default,{src:y.Z.src,alt:"calender",height:18,width:18})]}),(0,a.jsx)("div",{className:"w-fit",children:(0,a.jsx)(r.Z,{className:"w-[352px] h-10",startDate:e,endDate:t,setStartDate:s,setEndDate:k})})]}),(0,a.jsx)(l.Z,{className:" flex justify-center items-center h-fit self-end",onClick:()=>{C(!0)},children:"Data filter +"})]}),(0,a.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,a.jsx)("div",{className:"flex flex-col space-y-2 w-[352px]",children:(0,a.jsx)(m.ZP,{value:eB.find(e=>e.value===O),onChange:e=>I((null==e?void 0:e.value)||""),options:eB,placeholder:"Select user",classNamePrefix:"react-select",isSearchable:!0})}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)(n.Z,{onClick:()=>{s(null),k(null),I(""),W([]),X(!V)},className:"bg-dark-gray text-white",children:"Reset"}),(0,a.jsx)(l.Z,{disabled:0===G.length&&!O.trim()&&!e&&!t,onClick:()=>{if(e&&!t||t&&!e){u.ZP.error("Please select a complete date range!");return}eE()},className:"disabled:cursor-not-allowed disabled:bg-primary-100 disabled:text-secondary-100",children:"Apply"})]})]})]})})}),$&&(0,a.jsx)(p.Z,{className:"h-[30vh] w-full flex justify-center items-center"}),!$&&Y&&Y.length>0?(0,a.jsx)(Z,{selectedPanna:eb,more:es,responses:Y,setMapModalIsOpen:er,setMore:et,setResponseModalIsOpen:q,setSelectedResponse:el,users:_,assignMode:ec,setAssignedMode:eo,getUserResponses:eE,setSelectedPanna:ej}):!$&&(0,a.jsx)("div",{className:"flex w-full justify-center items-center h-[30vh]",children:(0,a.jsx)("p",{children:"No responses found"})}),!$&&(0,a.jsxs)("div",{className:"flex gap-3 items-center my-4 ml-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,a.jsxs)("select",{id:"limit-select",value:ev,onChange:e=>{eS(parseInt(e.target.value,10))},className:"p-2 border rounded-md",children:[(0,a.jsx)("option",{value:10,children:"10"}),(0,a.jsx)("option",{value:20,children:"20"}),(0,a.jsx)("option",{value:50,children:"50"}),(0,a.jsx)("option",{value:100,children:"100"})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("button",{onClick:()=>{e_(ek-1)},disabled:1===ek,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(N.u1R,{})}),(0,a.jsxs)("span",{children:["Page ",ek," of ",ey]}),(0,a.jsx)("button",{onClick:()=>{e_(ek+1)},disabled:ek===ey,className:"p-2 border rounded-md disabled:opacity-50",children:(0,a.jsx)(N.hjJ,{})})]})]}),(0,a.jsx)(b.Z,{modalIsOpen:P,closeModal:eK,surveyQuestions:eg,question:K,questionType:A,operator:J,response:L,setQuestionType:M,setQuestion:U,setOperator:B,setResponse:Q,saveFilter:()=>{F([...E,{question:K,operator:J,response:L}]),eK()}}),(0,a.jsx)(j.Z,{responseModalIsOpen:R,selectedResponse:ea,setResponseModalIsOpen:q,users:_}),(0,a.jsx)(g.Z,{assignMode:ec,pannaPramukh:eh,selectedPanna:eb,setAssignMode:eo,setSelectedPanna:ej,setUserModal:ep,setUserSearch:em,userModal:eu,userSearch:ex||""})]})}var R=()=>(0,a.jsx)(i.Suspense,{children:(0,a.jsx)(C,{})})},17042:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var a=t(95650),l=t(2265);function n(){let[e,s]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=(0,a.a_)();e&&s(e)},[]),e}}},function(e){e.O(0,[5223,5452,4574,1544,7240,1910,6305,8472,4962,9413,1181,4049,8143,7961,2527,1805,6617,663,2971,7023,1744],function(){return e(e.s=93300)}),_N_E=e.O()}]);