(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8830],{25410:function(e,t,n){Promise.resolve().then(n.bind(n,62871))},62871:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var s=n(57437),r=n(76965),a=n(81382),l=n(40855),o=n(2265),c=n(60152),i=n(16463),u=n(84298),d=n(88726),p=n(80106),m=n(77744),h=n(38982),x=n(60274),f=n(7432),g=function(e){let{filters:t,responses:n,surveyQuestions:r,appliedFilters:a,setAppliedFilters:l,selectedFilter:o}=e;return(0,s.jsxs)("div",{className:"w-[30%]",children:[(0,s.jsx)("div",{className:"space-y-2",children:(0,s.jsxs)("select",{onChange:e=>{let t=JSON.parse(e.target.value);a.find(e=>e.question===t.question&&e.operator===t.operator&&e.response===t.response)||l(t=>[...t,JSON.parse(e.target.value)])},value:o,name:"filters",id:"filters",className:"outline-none shadow-floating w-full  rounded-[20px]  px-4 py-2",children:[(0,s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select filter"}),t&&t.length>0&&t.map(e=>{let t="";if(n&&n.length>0){let n=null==r?void 0:r.find(t=>Number(t.question_id)===Number(e.question));n&&(t=n.parameters.question)}let a=JSON.stringify({question:e.question,operator:e.operator,response:e.response});return(0,s.jsx)("option",{value:a,children:"".concat(t," ").concat(e.operator," ").concat(e.response)},e.question)})]})}),(0,s.jsx)("div",{className:"flex flex-col gap-2 mt-2",children:a.map(e=>{let t;let n=null==r?void 0:r.find(t=>Number(t.question_id)===Number(e.question));return n&&(t=n.parameters.question),(0,s.jsxs)("div",{className:"flex justify-between w-full border border-secondary-200 rounded-[20px] px-4 py-2 bg-white",children:[(0,s.jsx)("h2",{children:"".concat(t," ").concat(e.operator," ").concat(e.response)}),(0,s.jsx)("button",{onClick:()=>l(t=>t.filter(t=>!(t.question===e.question&&t.operator===e.operator&&t.response===e.response))),children:(0,s.jsx)(f.$iT,{})})]})})})]})},y=n(824),b=n(85260),j=function(e){var t;let n,{question:r,surveyQuestions:a,setResponse:l,operator:o,questionType:c,response:i}=e,u=null==a?void 0:a.find(e=>Number(r)===Number(e.question_id));if(u&&(n=u.type),console.log("qtype from response input --->",n),n&&["Radio Grid","Number Grid"].includes(n)){let e=u.parameters.row_options.split("\n"),t=u.parameters.column_options.split("\n"),n=e.flatMap(e=>t.map(t=>"".concat(e,": ").concat(t)));return console.log("result from radio grid --->",n),(0,s.jsxs)("select",{onChange:e=>l(e.target.value),className:"flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,s.jsx)("option",{value:"",children:"select"}),n.map((e,t)=>(0,s.jsx)("option",{value:e,children:e},t))]})}return(0,s.jsx)("input",{disabled:0===c.trim().length||0===o.trim().length,onChange:e=>l(e.target.value),value:i,className:"flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed",type:(null==a?void 0:null===(t=a.find(e=>Number(r)===Number(e.question_id)))||void 0===t?void 0:t.type)==="Date"?"date":"text",placeholder:"Enter response"})};let w={text:["contains","equals","starts with","ends with"],number:["=","!=","<","<=",">",">="],choice:["equals","not equals"]};var v=function(e){let{modalIsOpen:t,closeModal:n,surveyQuestions:r,question:a,questionType:l,operator:o,response:c,setQuestion:i,setQuestionType:u,setResponse:d,setOperator:p,saveFilter:m}=e,h=e=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Checkbox List","Checkbox List With Other","Radio Grid","DropDown Grid","Single line Text Grid","Number Grid","Checkbox Grid"].includes(e)?w.text:["Number Input","Number Point","Rating","Date"].includes(e)?w.number:["Radio Button","DropDown","DropDown With Other"].includes(e)?w.choice:[],x=e=>{let t=h(e);return t.length>0?t[0]:""},f=e=>{let t=r.find(t=>Number(t.question_id)===Number(e));t?(i(e),u(t.type),p(x(t.type))):u("")};return(0,s.jsx)(b.Z,{open:t,closeModal:n,children:(0,s.jsxs)("div",{className:"min-w-[500px] h-[270px] flex flex-col",children:[(0,s.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Add filters"}),(0,s.jsxs)("form",{className:"w-full h-full p-4 flex gap-10 justify-center items-center",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)("label",{className:"text-my-gray-200",children:"Question"}),(0,s.jsxs)("select",{onChange:e=>f(e.target.value),value:a,className:"flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Select question"}),r&&r.map((e,t)=>(0,s.jsx)("option",{value:e.question_id,className:"text-secondary-300 px-4 py-2 text-left border-b min-w-32 whitespace-nowrap",children:e.parameters.question},t))]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)("label",{className:"text-my-gray-200",children:"Operator"}),(0,s.jsxs)("select",{disabled:0===a.trim().length,onChange:e=>p(e.target.value),value:o,className:"flex items-center border border-secondary-200 rounded-[20px] outline-none focus:ring focus:ring-primary-50 px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,s.jsx)("option",{disabled:!0,children:"Select operator"}),h(l).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},t))]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)("label",{className:"text-my-gray-200",children:"Response"}),(0,s.jsx)(j,{operator:o,question:a,questionType:l,response:c,setResponse:d,surveyQuestions:r})]})]}),(0,s.jsxs)("div",{className:"flex gap-3 items-center p-4",children:[(0,s.jsx)(y.Z,{className:"disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-secondary-100",disabled:0===a.trim().length||0===o.trim().length||0===c.trim().length,onClick:m,children:"Save Filter"}),(0,s.jsx)(y.Z,{className:"border-red-500 hover:bg-red-500 hover:text-white text-red-500",onClick:n,children:"Cancel"})]})]})})},N=n(95650),S=function(e){let{questionType:t,response:n,expand:r}=e;if(["Radio Grid","DropDown Grid","Single line Text Grid","Number Grid","Checkbox Grid"].includes(t)){let e=n.split("\n");return(0,s.jsxs)("td",{className:"px-4 py-2 border-b min-w-44 whitespace-nowrap text-center",children:[r?e.map((e,t)=>(0,s.jsx)("p",{children:e},t)):e.slice(0,2).map((e,t)=>(0,s.jsx)("p",{children:e},t)),!r&&e.length>2&&(0,s.jsx)("p",{children:"..."},"ellipsis")]})}return"Date"===t?(0,N.p6)(n):(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-44 whitespace-nowrap text-center",children:r?n:(0,N.aF)(n,20)})},q=function(e){var t;let{selectedResponse:n,users:r,setResponseModalIsOpen:a,responseModalIsOpen:l}=e;return(0,s.jsx)(b.Z,{open:l,closeModal:()=>a(!1),children:n&&(0,s.jsx)("div",{className:"p-4 h-[80vh] flex justify-center items-center w-[60vw]",children:(0,s.jsxs)("div",{className:"flex h-full w-full justify-center items-center flex-col gap-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,s.jsxs)("h2",{className:"w-full h-full text-center text-xl font-semibold border-b-2 pb-2",children:[" ","Question"," "]}),(0,s.jsx)("p",{className:"w-full h-full text-center text-xl font-semibold border-b-2 pb-2",children:"Response"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,s.jsx)("p",{className:"py-4 bg-primary-100 w-full h-full text-center font-medium",children:"Status"}),(0,s.jsx)("p",{className:"py-4 bg-primary-100 w-full h-full flex justify-center font-medium",children:n.contacted?(0,s.jsx)("p",{className:"bg-green-200 p-2 rounded-md w-fit",children:"Completed"}):(0,s.jsx)("p",{children:"Pending"})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,s.jsx)("p",{className:"py-4 bg-primary-100 w-full h-full text-center font-medium",children:"Remark"}),(0,s.jsx)("p",{className:"py-4 bg-primary-100 w-full h-full flex justify-center font-medium",children:n.remark?n.remark:"---"})]}),(0,s.jsxs)("div",{className:"flex h-full w-full flex-col overflow-y-auto vertical-scrollbar",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,s.jsx)("h2",{className:"py-4 bg-primary-100 w-full h-full text-center font-medium",children:"Response by"}),(0,s.jsx)("p",{className:"py-4 bg-primary-100 w-full h-full text-center font-medium",children:(null===(t=r.find(e=>e._id===n.user_id))||void 0===t?void 0:t.name)||"-"})]}),n.responses.map((e,t)=>(0,s.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,s.jsx)("h2",{className:"w-full py-4 h-full text-center ".concat(t%2==0?"bg-primary-50":"bg-primary-100"),children:e.question}),(0,s.jsx)("p",{className:"w-full py-4 h-full text-center ".concat(t%2==0?"bg-primary-50":"bg-primary-100"),children:(0,s.jsx)(S,{questionType:e.question_type,response:e.response,expand:!0})})]},t))]})]})})})},k=function(e){let{pannaPramukh:t,setUserModal:n,selectedPanna:a,setSelectedPanna:l,setAssignMode:o,userModal:c,userSearch:i,setUserSearch:u}=e;return(0,s.jsx)(b.Z,{open:c,closeModal:()=>{n(!1),l(null)},children:(0,s.jsxs)("div",{className:"relative flex flex-col h-[60vh] w-[30vw] p-4",children:[(0,s.jsx)("h1",{className:"self-center text-lg font-semibold mb-5",children:"Assign to Panna Pramukh"}),(0,s.jsx)("input",{placeholder:"Search by name",className:"sticky top-5 left-0 px-4 py-2 border-2 outline-none rounded-md",value:i||"",onChange:e=>u(e.target.value),type:"text"}),(0,s.jsx)("div",{className:"grid mt-5 grid-cols-2 gap-3",children:t&&t.map(e=>(0,s.jsxs)("label",{className:"flex gap-5",children:[(0,s.jsx)("input",{onChange:()=>l(e._id),type:"radio",name:"panna",className:"h-5 w-5"}),(0,s.jsx)("p",{children:e.name})]}))}),(0,s.jsx)(r.Z,{onClick:()=>{o(!0),n(!1)},className:"mt-auto disabled:bg-blue-100 disabled:cursor-not-allowed",disabled:!a,children:"Proceed"})]})})},M=function(e){let{mapModalIsOpen:t,isLoaded:n,setMapModalIsOpen:r}=e;return(0,s.jsx)(b.Z,{open:t,closeModal:()=>r(!1),children:(0,s.jsx)("div",{className:"p-4 h-[60vh] flex justify-center items-center w-[50vw]",children:(0,s.jsx)("div",{className:"flex h-full w-full justify-center items-center flex-col gap-4",children:n?(0,s.jsx)(m.b6,{mapContainerStyle:{width:"400px",height:"400px"},center:{lat:-3.745,lng:-38.523},zoom:10,onLoad:e=>{console.log("gmap--->",e);let t=new window.google.maps.LatLngBounds;e.fitBounds(t)},onUnmount:e=>{},children:(0,s.jsx)(s.Fragment,{})}):(0,s.jsx)(s.Fragment,{})})})})},C=n(41942),_=n(63872),D=function(e){let{responses:t,users:n,assignMode:a,setSelectedResponse:l,setResponseModalIsOpen:c,setMapModalIsOpen:p,setMore:m,more:h,setAssignedMode:x,selectedPanna:f,getUserResponses:g,setSelectedPanna:y}=e;console.log("all responses /////////////// ",t);let[b,j]=(0,o.useState)(null),[w,v]=(0,o.useState)(null),[q,k]=(0,o.useState)([]),M=(0,i.useSearchParams)().get("survey_id");async function D(){let e=await (0,u.qq)({id:f,responses:q,surveyId:M});console.log("after updation ----->",e),e.success?(d.ZP.success("Data assigned successfully"),x(!1),k([]),y(null),g()):(console.log("error response --->",e),d.ZP.error(e.message))}return console.log("selectedResponses are from outside --->",q),(0,s.jsxs)("div",{id:"scrollableDiv",className:"w-[calc(100vw-250px)] max-h-[80vh] overflow-auto vertical-scrollbar rounded-t-2xl border border-secondary-200 mx-4",children:[(0,s.jsxs)("table",{className:"w-full table-auto",children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsxs)("tr",{className:"bg-dark-gray text-white sticky top-0",children:[(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center"}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center"}),(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Panna pramukh"}),(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Status"}),(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Remark"}),(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"Response date"}),(0,s.jsx)("td",{className:"px-4 py-2 border-b min-w-32 whitespace-nowrap text-center font-semibold",children:"User"}),t&&t.length>0&&t[0].responses.map((e,t)=>(0,s.jsxs)("td",{className:"gap-2 font-semibold px-4 py-2 border-b min-w-32 whitespace-nowrap text-center",children:[h!==e.question_id?(0,N.aF)(e.question,10):e.question,(0,s.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>m(e.question_id),children:h!==e.question_id&&e.question.length>10?"More":""}),(0,s.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>m(null),children:h===e.question_id&&e.question.length>10?"Less":""})]},t))]})}),(0,s.jsx)("tbody",{className:"bg-white",children:t&&t.map((e,o)=>{var i;return(0,s.jsxs)("tr",{onClick:()=>{l(e),c(!0)},className:"cursor-pointer",children:[a&&(0,s.jsx)("td",{onClick:e=>e.stopPropagation(),className:"min-w-32 px-4 py-2 border-b text-center",children:(0,s.jsx)("input",{disabled:e.panna_pramukh_assigned,onChange:()=>(function(e,n){if(null===b)j(n),k([e]);else{if(n===b){j(null),v(null),k([]);return}if(n<b){j(n),v(null),k([e]);return}if(n>b){if(v(n),Math.abs(n-b)+1>60){d.ZP.error("Maximum of 60 responses are allowed");return}console.log("all responses are ------>",t);let e=[];for(let s=b;s<=n;s++)t[s].panna_pramukh_assigned||e.push(t[s]._id);k(e)}if(null!==w&&n<w){v(n);let e=[];for(let s=b;s<=n;s++)e.push(t[s]._id);k(e)}}})(e._id,o),checked:q.includes(e._id),className:"h-5 w-5",type:"checkbox"})}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:(0,s.jsx)(r.Z,{className:"w-10 p-0 flex justify-center items-center rounded-full h-10",onClick:e=>{e.stopPropagation(),p(!0)},children:(0,s.jsx)(_.GUT,{})})}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:(0,s.jsx)(C.dSq,{})}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:e.panna_pramukh_assigned?e.panna_pramukh_assigned.name:"--"}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:e.contacted?(0,s.jsx)("p",{className:"w-full p-2 bg-green-200 rounded-md",children:"Complete"}):e.panna_pramukh_assigned?(0,s.jsx)("p",{className:"w-full p-2 bg-amber-300 rounded-md",children:"Pending"}):"---"}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:e.remark?(0,N.aF)(e.remark,15):"---"}),(0,s.jsx)("td",{className:"min-w-32 px-4 py-2 border-b text-center",children:(0,N.p6)(e.createdAt)}),(0,s.jsx)("td",{className:"min-w-44 whitespace-nowrap px-4 py-2 border-b text-center",children:(null===(i=n.find(t=>t._id===e.user_id))||void 0===i?void 0:i.name)||"-"}),e.responses.map((e,t)=>(0,s.jsx)(S,{expand:!1,questionType:e.question_type,response:e.response}))]},o)})})]}),a&&(0,s.jsxs)("div",{className:"flex gap-2 mt-5 ml-3 sticky left-3",children:[(0,s.jsx)(r.Z,{onClick:()=>{D()},children:"Assign"}),(0,s.jsx)(r.Z,{onClick:()=>{x(!1),k([]),j(null),v(null)},children:"Cancel"})]})]})},W=n(66648),Z=n(69824);function P(){let[e,t]=(0,o.useState)(null),[n,f]=(0,o.useState)(null),[y,b]=(0,o.useState)([]),[j,w]=(0,o.useState)(!1),[N,S]=(0,o.useState)(!1),[C,_]=(0,o.useState)(""),[P,T]=(0,o.useState)([]),[A,O]=(0,o.useState)(""),[R,E]=(0,o.useState)(""),[G,I]=(0,o.useState)(""),[F,B]=(0,o.useState)(""),[U,z]=(0,o.useState)(""),[J,K]=(0,o.useState)([]),[L,Y]=(0,o.useState)([]),[Q,V]=(0,o.useState)(!0),[H,$]=(0,o.useState)(!1),[X,ee]=(0,o.useState)(null),[et,en]=(0,o.useState)(null),[es,er]=(0,o.useState)(!1),[ea,el]=(0,o.useState)(null),[eo,ec]=(0,o.useState)(!1),[ei,eu]=(0,o.useState)(!1),[ed,ep]=(0,o.useState)(null),[em,eh]=(0,o.useState)(null),[ex,ef]=(0,o.useState)(null),[eg,ey]=(0,o.useState)(null),[eb,ej]=(0,o.useState)([]),[ew,ev]=(0,o.useState)(null),[eN,eS]=(0,o.useState)(1),[eq,ek]=(0,o.useState)(10),[eM,eC]=(0,o.useState)(1),[e_,eD]=(0,o.useState)(!1),eW=(0,i.useSearchParams)(),eZ=eW.get("survey_id"),eP=eW.get("ac_no"),eT=eW.get("booth_no"),eA=(0,i.useRouter)(),{isLoaded:eO}=(0,m.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyAAOwDBvpg5ZDv5JFG-CoDW23GsKkOPeuA"});async function eR(){let t,s;e&&n&&(t=new Date(e||""),s=new Date(n||""),t.setDate(t.getDate()+1),s.setDate(s.getDate()+1));let r={surveyId:eZ,startDate:t,endDate:s,userId:A,filters:J,limit:eq,page:eM};$(!0);let a=await (0,c.K7)(r);Y(a.data),eS(a.totalPages),console.log("responses of responses ------>",a),a.data&&a.data.length>0&&(el(a.data[0].responses.map(e=>({question:e.question,question_id:e.question_id}))),ev(a.data.map(e=>e.responses.map(e=>({[e.question]:e.response}))).flat())),$(!1)}async function eE(){ey((await (0,x.LA)({_id:eZ})).data.questions.map(e=>e))}async function eG(){$(!0);let e=await (0,u.AW)({});console.log("users-------->",e.data),b(e.data),$(!1)}async function eI(){$(!0);let e=await (0,u.sr)({ac_no:eP,booth_no:eT,filter:ed});console.log("panna below-------->",e),eh(e),$(!1)}(0,o.useEffect)(()=>{eE(),eR(),eG()},[Q,eM,eq]),(0,o.useEffect)(()=>{eI()},[ed]);let eF=()=>{w(!1),eB()},eB=()=>{E(""),I(""),B("")},eU=async()=>{try{let t,s;eD(!0),e&&n&&(t=new Date(e||""),s=new Date(n||""),t.setDate(t.getDate()+1),s.setDate(s.getDate()+1));let r={surveyId:eZ,startDate:t,endDate:s,userId:A,filters:J,download:!0},a="response.xlsx",l=await (0,c.kz)(r),o=l.headers["content-disposition"];console.log("header ======>",o);let i=o.split("filename=")[1].replace(/"/g,"");i&&(a=i);let u=window.URL.createObjectURL(new Blob([l.data])),d=document.createElement("a");d.href=u,d.setAttribute("download",a),document.body.appendChild(d),d.click(),document.body.removeChild(d)}catch(e){d.ZP.error("Failed to export to Excel")}finally{eD(!1)}},ez=null==y?void 0:y.map(e=>({value:e._id,label:e.name}));return(0,s.jsxs)("div",{className:"flex flex-col w-full font-medium bg-light-gray",children:[(0,s.jsxs)("nav",{className:"w-full py-3 px-8 flex flex-col gap-10 font-semibold",children:[(0,s.jsx)("h3",{className:"text-[24px] font-semibold",children:"Survey Response"}),(0,s.jsxs)("div",{className:"flex w-full gap-12",children:[(0,s.jsx)(g,{appliedFilters:J,filters:P,responses:L,selectedFilter:U,setAppliedFilters:K,setSelectedFilter:z,surveyQuestions:eg}),(0,s.jsxs)("div",{className:"flex space-x-2 text-black text-base font-semibold",children:[(0,s.jsx)(r.Z,{loading:e_,onClick:eU,className:"rounded-[20px] h-fit px-4 py-2 w-44 justify-center",children:"Export to Excel"}),(0,s.jsx)(a.Z,{onClick:()=>eA.back(),className:"rounded-[20px] h-fit px-4 py-2",children:"Back"})]})]})]}),(0,s.jsx)("div",{className:"p-5 font-semibold text-sm ",children:(0,s.jsx)("div",{className:"bg-light-gray space-y-4 w-full rounded-lg px-4 py-6",children:(0,s.jsxs)("div",{className:"w-[780px] space-y-8 pb-6 ",children:[(0,s.jsxs)("div",{className:"flex gap-10",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex gap-3 items-center mb-5",children:[(0,s.jsx)("h1",{className:"",children:"Date Range"}),(0,s.jsx)(W.default,{src:"/_next/static/media/calendar_new.defda661.png",alt:"calender",height:18,width:18})]}),(0,s.jsx)("div",{className:"w-fit",children:(0,s.jsx)(l.Z,{className:"w-[352px] h-10",startDate:e,endDate:n,setStartDate:t,setEndDate:f})})]}),(0,s.jsx)(r.Z,{className:" flex justify-center items-center h-fit self-end",onClick:()=>{w(!0)},children:"Data filter +"})]}),(0,s.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,s.jsx)("div",{className:"flex flex-col space-y-2 w-[352px]",children:(0,s.jsx)(h.ZP,{value:ez.find(e=>e.value===A),onChange:e=>O((null==e?void 0:e.value)||""),options:ez,placeholder:"Select user",classNamePrefix:"react-select",isSearchable:!0})}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)(a.Z,{onClick:()=>{t(null),f(null),O(""),K([]),V(!Q)},className:"bg-dark-gray text-white",children:"Reset"}),(0,s.jsx)(r.Z,{disabled:0===J.length&&!A.trim()&&!e&&!n,onClick:()=>{if(e&&!n||n&&!e){d.ZP.error("Please select a complete date range!");return}eR()},className:"disabled:cursor-not-allowed disabled:bg-primary-100 disabled:text-secondary-100",children:"Apply"})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{onClick:()=>eu(!0),children:"Assign Data"})})]})})}),H&&(0,s.jsx)(p.Z,{className:"h-[30vh] w-full flex justify-center items-center"}),!H&&L&&L.length>0?(0,s.jsx)(D,{selectedPanna:ex,more:X,responses:L,setMapModalIsOpen:er,setMore:ee,setResponseModalIsOpen:S,setSelectedResponse:en,users:y,assignMode:eo,setAssignedMode:ec,getUserResponses:eR,setSelectedPanna:ef}):!H&&(0,s.jsx)("div",{className:"flex w-full justify-center items-center h-[30vh]",children:(0,s.jsx)("p",{children:"No responses found"})}),!H&&(0,s.jsxs)("div",{className:"flex gap-3 items-center my-4 ml-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,s.jsxs)("select",{id:"limit-select",value:eq,onChange:e=>{ek(parseInt(e.target.value,10))},className:"p-2 border rounded-md",children:[(0,s.jsx)("option",{value:10,children:"10"}),(0,s.jsx)("option",{value:20,children:"20"}),(0,s.jsx)("option",{value:50,children:"50"}),(0,s.jsx)("option",{value:100,children:"100"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("button",{onClick:()=>{eC(eM-1)},disabled:1===eM,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(Z.u1R,{})}),(0,s.jsxs)("span",{children:["Page ",eM," of ",eN]}),(0,s.jsx)("button",{onClick:()=>{eC(eM+1)},disabled:eM===eN,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(Z.hjJ,{})})]})]}),(0,s.jsx)(v,{modalIsOpen:j,closeModal:eF,surveyQuestions:eg,question:R,questionType:C,operator:G,response:F,setQuestionType:_,setQuestion:E,setOperator:I,setResponse:B,saveFilter:()=>{T([...P,{question:R,operator:G,response:F}]),eF()}}),(0,s.jsx)(q,{responseModalIsOpen:N,selectedResponse:et,setResponseModalIsOpen:S,users:y}),(0,s.jsx)(M,{isLoaded:eO,mapModalIsOpen:es,setMapModalIsOpen:er}),(0,s.jsx)(k,{assignMode:eo,pannaPramukh:em,selectedPanna:ex,setAssignMode:ec,setSelectedPanna:ef,setUserModal:eu,setUserSearch:ep,userModal:ei,userSearch:ed||""})]})}var T=()=>(0,s.jsx)(o.Suspense,{children:(0,s.jsx)(P,{})})},80106:function(e,t,n){"use strict";var s=n(57437),r=n(4815);t.Z=function(e){let{className:t}=e;return(0,s.jsx)("div",{className:"fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-center items-center overflow-hidden z-50 ",children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-10",children:[(0,s.jsx)(r.Z,{speedMultiplier:1.25,color:"#FF8437"}),(0,s.jsx)("h3",{className:"text-white font-semibold",children:"Loading, please wait..."})]})})}},85260:function(e,t,n){"use strict";var s=n(57437),r=n(7583),a=n.n(r);let l={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};a().setAppElement("body"),t.Z=function(e){let{children:t,open:n,closeModal:r}=e;return(0,s.jsx)(a(),{isOpen:n,onRequestClose:r,style:l,contentLabel:"Example Modal",children:t})}},824:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,...a}=e;return(0,s.jsx)("button",{...a,className:(0,r.m6)("border border-primary-300 px-4 py-2 rounded-[20px] text-primary-300 hover:text-white hover:bg-primary-300",n),children:t})}},76965:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(12375),a=n(96164);t.Z=function(e){let{children:t,className:n,onClick:l,loading:o,...c}=e;return(0,s.jsx)("button",{...c,onClick:l,className:(0,a.m6)("flex border text-white bg-primary-300 px-10 h-[50px] py-3 rounded-[20px]",n),children:o?(0,s.jsx)(r.Z,{speedMultiplier:1.25,color:"#FFFFFF",size:26}):t})}},81382:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,onClick:a,...l}=e;return(0,s.jsx)("button",{...l,onClick:a,className:(0,r.m6)("border text-black bg-[#E0DCDC] rounded-[20px] h-[50px]  px-10 py-3",n),children:t})}},40855:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(57437),r=n(76235),a=n(36463),l=n.n(a),o=n(96164);n(54575);var c=function(e){let{startDate:t,setStartDate:n,endDate:a,setEndDate:c,className:i}=e,u=e=>e?(0,r.WU)(e,"dd-MMM-yyyy"):"",d=e=>{if(!e)return null;let t=new Date(e);return t.setHours(0,0,0,0),t};return(0,s.jsx)("div",{className:(0,o.m6)("w-fit flex font-medium text-lg py-2 items-center space-x-2 rounded-md focus:outline-none cursor-pointer",i),children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(l(),{selected:t,onChange:e=>n(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{type:"text",value:t?u(t):"",onChange:e=>{console.log("inside input")},placeholder:"Select start",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating  text-center outline-none font-normal text-sm"})})}),(0,s.jsx)("img",{src:"/_next/static/media/doubleArrow.03752eee.png",className:"object-contain w-[30px] mx-4"}),(0,s.jsx)(l(),{selected:a,onChange:e=>c(d(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{type:"text",value:a?u(a):"",onChange:e=>{console.log("inside input")},placeholder:"Select end",className:"my-2 w-[150px] px-4 py-2 rounded-[20px] shadow-floating text-center outline-none font-normal text-sm"})})})]})})}},60152:function(e,t,n){"use strict";n.d(t,{Bl:function(){return c},K7:function(){return o},Pt:function(){return a},kz:function(){return i},sD:function(){return l}});var s=n(1633),r=n(38472);let a=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.vx),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.HA),params:e};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.jC),params:e},n=await r.Z.request(t);return console.log("response --->",n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.n$),params:e},n=await r.Z.request(t);return console.log("response --->",n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.jC),params:e,responseType:"blob"},n=await r.Z.request(t);return console.log("response --->",n),n}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},60274:function(e,t,n){"use strict";n.d(t,{Gn:function(){return u},LA:function(){return i},T0:function(){return d},Vb:function(){return a},a2:function(){return c},ez:function(){return l},tB:function(){return o}});var s=n(1633),r=n(38472);let a=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.TK),headers:{"Content-Type":"application/json"},data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Dy,"?_id=").concat(e._id),headers:{"Content-Type":"application/json"},data:e.formData};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=e.page||1,n=e.limit||10,a=e.filter||"",l=e.created_by,o=e.sortBy,c=e.sortOrder,i=e.published;"published"===e.published?i=!0:"unpublished"===e.published?i=!1:"all"===e.published&&(i=void 0);let u={method:"GET",url:"".concat(s.M6,"/").concat(s.it,"?filter=").concat(a,"&page=").concat(t,"&limit=").concat(n,"&sortBy=").concat(o,"&sortOrder=").concat(c,"&published=").concat(i,"&created_by=").concat(l)},d=await r.Z.request(u);return console.log("response from networks---->",d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(s.M6,"/").concat(s.VJ),params:{survey_id:e.survey_id,filters:e.filters}},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.A5,"?_id=").concat(e._id)};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.dt),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.O1),params:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},84298:function(e,t,n){"use strict";n.d(t,{AW:function(){return c},GK:function(){return l},PR:function(){return o},Pl:function(){return m},Sh:function(){return i},TJ:function(){return u},W6:function(){return f},WC:function(){return p},eD:function(){return a},qq:function(){return x},sE:function(){return h},sm:function(){return d},sr:function(){return g}});var s=n(1633),r=n(38472);let a=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await r.Z.request(n)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(s.M6,"/").concat(s.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{var t;let n=localStorage.getItem("token"),a={method:"GET",url:"".concat(s.M6,"/").concat(s.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(n)}};return(await r.Z.request(a)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Tv),data:e};console.log(t);let n=await r.Z.request(t);return console.log(n),n.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.rd),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(s.M6,"/").concat(s.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},x=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return console.log("error in network",e),{success:!1,message:e.response.data.message,error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(s.M6,"/").concat(s.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(s.M6,"/").concat(s.UN),headers:{Authorization:"Bearer ".concat(t)},params:e};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,n){"use strict";n.d(t,{Sg:function(){return l},aF:function(){return a},a_:function(){return o},p6:function(){return r}});let s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function r(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=s[t.getMonth()],a=t.getFullYear();return"".concat(n,"-").concat(r,"-").concat(a)}function a(e,t){return e.length>t?e.slice(0,t)+"...":e}function l(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=s[t.getMonth()];return"".concat(n," ").concat(r)}function o(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return b},Dy:function(){return y},EK:function(){return i},HA:function(){return S},M6:function(){return s},ND:function(){return A},Ny:function(){return Z},O1:function(){return v},Pn:function(){return p},SR:function(){return a},TK:function(){return g},Tp:function(){return r},Tv:function(){return l},UN:function(){return x},UY:function(){return F},VH:function(){return O},VJ:function(){return k},Yn:function(){return h},d1:function(){return I},dt:function(){return j},ht:function(){return m},it:function(){return w},jC:function(){return q},jV:function(){return D},mW:function(){return P},n$:function(){return M},nM:function(){return R},q6:function(){return W},qJ:function(){return f},ql:function(){return T},rO:function(){return C},rd:function(){return o},sC:function(){return c},tm:function(){return u},tt:function(){return d},vx:function(){return N},we:function(){return G},x4:function(){return _},xD:function(){return E}});let s="http://localhost:6969",r="api/user/getUser",a="api/user/getAllUsers",l="api/user/addUsers",o="api/user/addMultipleUsers",c="api/user/updateUser",i="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",m="api/user/createKaryakarta",h="api/user/updateKaryakarta",x="api/user/getPannaPramukh",f="api/user/updateMultipleKaryakarta",g="api/survey/saveSurvey",y="api/survey/updateSurvey",b="api/survey/getSurvey",j="api/survey/deleteSurvey",w="api/survey/getAllSurveys",v="api/survey/getSurveysByAcAndBooth",N="api/response/saveResponses",S="api/response/getAllSurveyResponses",q="api/response/getAllResponses",k="api/response/getSurveyResponseStats",M="api/response/getGroupedByFamily",C=["Contact Form","Address"],_="api/auth/login",D="api/auth/forgotPassword",W="api/auth/resetPassword",Z="api/role/allRoles",P="api/role/roles",T="api/role/create",A="api/role/update",O="api/role/delete",R="api/todo/create",E="api/todo/todo",G="api/todo/todos",I="api/todo/update",F="api/todo/delete"}},function(e){e.O(0,[5223,7699,5452,4574,1544,7240,1910,8472,3004,9413,7583,6648,8143,2359,5612,2971,7023,1744],function(){return e(e.s=25410)}),_N_E=e.O()}]);