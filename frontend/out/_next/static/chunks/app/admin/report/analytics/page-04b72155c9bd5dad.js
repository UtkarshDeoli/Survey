(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{16888:function(e,s,t){Promise.resolve().then(t.bind(t,91683))},91683:function(e,s,t){"use strict";t.r(s);var l=t(57437),a=t(824),n=t(76965),r=t(60274),i=t(16463),o=t(2265),c=t(67048),d=t(85260),u=t(7432),p=t(97501),m=t(81173),x=t.n(m),h=t(41942),f=t(88726),b=t(17042);let j={text:["contains","equals","starts with","ends with"],number:["=","!=","<","<=",">",">="],choice:["equals","not equals"]};function N(){var e;let[s,t]=(0,o.useState)([]),[m,N]=(0,o.useState)(!1),[g,y]=(0,o.useState)(""),[v,w]=(0,o.useState)([]),[q,S]=(0,o.useState)([]),[k,C]=(0,o.useState)(""),[_,Z]=(0,o.useState)(!1),[R,D]=(0,o.useState)(null),[E,P]=(0,o.useState)(""),[O,A]=(0,o.useState)(""),[I,T]=(0,o.useState)(""),[F,J]=(0,o.useState)(!1),L=(0,b.Z)();console.log("user is --->",L);let M=null==L?void 0:L.role.map(e=>e.name).includes("Data Analyst"),B=(0,i.useSearchParams)().get("survey_id");(0,o.useEffect)(()=>{K(),H()},[]);let G=(0,i.useRouter)(),W=e=>{let s=R.find(s=>Number(s.question_id)===Number(e));s?(C(e),P(s.type),A(z(s.type))):P("")},$=e=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Checkbox List","Checkbox List With Other","Radio Grid"].includes(e)?j.text:["Number Input","Number Point","Rating","Date"].includes(e)?j.number:["Radio Button","DropDown","DropDown With Other"].includes(e)?j.choice:[],z=e=>{let s=$(e);return s.length>0?s[0]:""},Q=(0,o.useRef)(null),U=async()=>{if(J(!0),!Q.current){f.ZP.error("Report not found!");return}let e=new p.ZP("p","mm","a4"),s=Q.current.querySelectorAll(".chart-container"),t=10,l=0;for(let a of s)try{let s=await x()(a,{scale:1.5,useCORS:!0}),n=s.toDataURL("image/jpeg",.75),r=190*s.height/s.width;e.addImage(n,"JPEG",10,t,190,r),t+=r+10,l++,2===l&&(e.addPage(),t=10,l=0)}catch(e){console.error("Error capturing chart:",e)}e.save("question-charts.pdf"),J(!1)};async function H(){let e=await (0,r.a2)({survey_id:B,filters:v});console.log("response stats data--->",e.data),e.success&&t(e.data)}async function K(){let e=await (0,r.LA)({_id:B});console.log("res--------------------------------->",e),D(e.data.questions.map(e=>e))}return(0,l.jsxs)("div",{className:"w-full bg-[#ECF0FA]  min-h-[calc(100vh-80px)] font-medium ",children:[(0,l.jsxs)("nav",{className:"h-16 w-full py-3 px-8 flex justify-between font-semibold ",children:[(0,l.jsx)("div",{className:"text-my-gray-200 items-center my-auto",children:(0,l.jsx)("p",{className:"text-sm ",children:"Analytics"})}),(0,l.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,l.jsx)(n.Z,{onClick:()=>G.push("/admin/data/survey-responses?survey_id=".concat(B)),className:"bg-dark-gray",children:"Responses"}),(0,l.jsx)(n.Z,{onClick:()=>N(!m),className:"",children:"Filters"}),!M&&(0,l.jsx)("div",{className:"p-4",children:(0,l.jsxs)(n.Z,{className:"gap-2 min-w-52",loading:F,onClick:U,children:[(0,l.jsx)(h.u$v,{})," ",(0,l.jsx)("p",{children:"Export as PDF"})]})}),(0,l.jsx)(n.Z,{onClick:()=>G.back(),className:"bg-dark-gray",children:"Back"})]})]}),m&&(0,l.jsx)("div",{className:"p-4 w-full ",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center-center gap-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsx)(n.Z,{className:" flex justify-center items-center w-fit",onClick:()=>Z(!0),children:"Data filter +"}),(0,l.jsx)(n.Z,{onClick:()=>H(),className:"w-fit",children:"Apply"})]}),(0,l.jsxs)("select",{onChange:e=>{let s=JSON.parse(e.target.value);v.find(e=>e.question===s.question&&e.operator===s.operator&&e.response===s.response)||w(s=>[...s,JSON.parse(e.target.value)])},value:g,name:"filters",id:"filters",className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",children:[(0,l.jsx)("option",{className:"outline-none shadow-lg px-6 py-3 w-[30%] rounded-[20px]",value:"",disabled:!0,selected:!0,children:"Select filter"}),q&&q.length>0&&q.map(e=>{let s="";if(R){let t=null==R?void 0:R.find(s=>Number(s.question_id)===Number(e.question));t&&(s=t.parameters.question)}let t=JSON.stringify({question:e.question,operator:e.operator,response:e.response});return(0,l.jsx)("option",{value:t,children:"".concat(s," ").concat(e.operator," ").concat(e.response)},e.question)})]}),(0,l.jsx)("div",{className:"flex flex-col",children:v.map(e=>{let s;let t=null==R?void 0:R.find(s=>Number(s.question_id)===Number(e.question));return t&&(s=t.parameters.question),(0,l.jsxs)("div",{className:"flex justify-between mt-5 border border-secondary-200 bg-white rounded-[20px] w-1/2 px-4 py-2",children:[(0,l.jsx)("h2",{children:"".concat(s," ").concat(e.operator," ").concat(e.response)}),(0,l.jsx)("button",{onClick:()=>w(s=>s.filter(s=>!(s.question===e.question&&s.operator===e.operator&&s.response===e.response))),children:(0,l.jsx)(u.$iT,{})})]})})})]})}),(0,l.jsxs)("div",{ref:Q,className:"p-5 text-sm text-my-gray-200",children:[s&&s.length>0&&s.map((e,s)=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Number Input","Date"].includes(e.question_type)?null:(0,l.jsx)(c.Z,{questionTitle:e.question,responses:e.responses,totalResponses:e.total_responses},s)),(0,l.jsx)("div",{className:"flex justify-center items-center h-[20vh] w-full",children:(0,l.jsxs)("p",{className:"text-sm",children:[(0,l.jsx)("span",{className:"font-bold",children:"Note:"})," The charts are only visible for questions like Radio buttons, checkboxes etc"]})})]}),(0,l.jsx)(d.Z,{open:_,closeModal:()=>Z(!1),children:(0,l.jsxs)("div",{className:"min-w-[500px] h-[270px] flex flex-col",children:[(0,l.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Add filters"}),(0,l.jsxs)("form",{className:"w-full h-full p-4 flex gap-10 justify-center items-center",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,l.jsx)("label",{className:"text-my-gray-200",children:"Question"}),(0,l.jsxs)("select",{onChange:e=>W(e.target.value),value:k,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full",children:[(0,l.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select question"}),R&&R.map((e,s)=>(0,l.jsx)("option",{value:e.question_id,className:"text-secondary-300 px-4 py-2 text-left border-b min-w-24 whitespace-nowrap",children:e.parameters.question},s))]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,l.jsx)("label",{className:"text-my-gray-200",children:"Operator"}),(0,l.jsxs)("select",{disabled:0===k.trim().length,onChange:e=>A(e.target.value),value:O,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,l.jsx)("option",{disabled:!0,selected:!0,children:"Select operator"}),$(E).map(e=>(0,l.jsx)("option",{value:e,children:e}))]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,l.jsx)("label",{className:"text-my-gray-200",children:"Response"}),(0,l.jsx)("input",{disabled:0===E.trim().length||0===O.trim().length,onChange:e=>T(e.target.value),value:I,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",type:(null==R?void 0:null===(e=R.find(e=>Number(k)===Number(e.question_id)))||void 0===e?void 0:e.type)==="Date"?"date":"text",placeholder:"Enter response"})]})]}),(0,l.jsxs)("div",{className:"flex gap-3 items-center p-4",children:[(0,l.jsx)(a.Z,{className:"disabled:bg-primary-50 disabled:cursor-not-allowed disabled:text-secondary-100",disabled:0===k.trim().length||0===O.trim().length||0===I.trim().length,onClick:()=>{S([...q,{question:k,operator:O,response:I}]),Z(!1)},children:"Save Filter"}),(0,l.jsx)(a.Z,{className:"border-red-500 hover:bg-red-500 hover:text-white text-red-500",onClick:()=>Z(!1),children:"Cancel"})]})]})})]})}s.default=()=>(0,l.jsx)(o.Suspense,{children:(0,l.jsx)(N,{})})}},function(e){e.O(0,[7699,4574,7674,7337,2505,8472,8726,9413,1181,5746,477,6667,2971,7023,1744],function(){return e(e.s=16888)}),_N_E=e.O()}]);