(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8830],{25410:function(e,t,n){Promise.resolve().then(n.bind(n,8877))},94057:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a,r,s=n(2265);(a=r||(r={})).maroon="#800000",a.red="#FF0000",a.orange="#FFA500",a.yellow="#FFFF00",a.olive="#808000",a.green="#008000",a.purple="#800080",a.fuchsia="#FF00FF",a.lime="#00FF00",a.teal="#008080",a.aqua="#00FFFF",a.blue="#0000FF",a.navy="#000080",a.black="#000000",a.gray="#808080",a.silver="#C0C0C0",a.white="#FFFFFF";var c=function(e,t){if(e.includes("/"))return e.replace("rgb(","rgba(");var n=e.substring(e.startsWith("rgba(")?5:4,e.length-1).trim(),a=n.split(",");return 4===a.length?e.replace("rgb(","rgba("):3===a.length?"rgba(".concat(n,", ").concat(t,")"):"rgba(".concat(n," / ").concat(t,")")},o=function(e,t){if(e.startsWith("rgb"))return c(e,t);if(Object.keys(r).includes(e)&&(e=r[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var n="";e.split("").forEach(function(e){n+=e+e}),e=n}var a=(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(", ");return"rgba(".concat(a,", ").concat(t,")")},l={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return l[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function u(e){var t=i(e);return"".concat(t.value).concat(t.unit)}var d=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,c="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(c,0),a},p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},m=function(e){var t=e.loading,n=e.color,a=void 0===n?"#000000":n,r=e.speedMultiplier,c=void 0===r?1:r,l=e.cssOverride,m=e.size,x=void 0===m?50:m,g=h(e,["loading","color","speedMultiplier","cssOverride","size"]),f=i(x),y=f.value,b=f.unit,v=p({display:"inherit",position:"relative",width:u(x),height:u(x),transform:"rotate(165deg)"},void 0===l?{}:l),w=y/5,j=(y-w)/2,N=j-w,S=o(a,.75),q=d("HashLoader","0% {width: ".concat(w,"px; box-shadow: ").concat(j,"px ").concat(-N,"px ").concat(S,", ").concat(-j,"px ").concat(N,"px ").concat(S,"}\n    35% {width: ").concat(u(x),"; box-shadow: 0 ").concat(-N,"px ").concat(S,", 0 ").concat(N,"px ").concat(S,"}\n    70% {width: ").concat(w,"px; box-shadow: ").concat(-j,"px ").concat(-N,"px ").concat(S,", ").concat(j,"px ").concat(N,"px ").concat(S,"}\n    100% {box-shadow: ").concat(j,"px ").concat(-N,"px ").concat(S,", ").concat(-j,"px ").concat(N,"px ").concat(S,"}"),"before"),k=d("HashLoader","0% {height: ".concat(w,"px; box-shadow: ").concat(N,"px ").concat(j,"px ").concat(a,", ").concat(-N,"px ").concat(-j,"px ").concat(a,"}\n    35% {height: ").concat(u(x),"; box-shadow: ").concat(N,"px 0 ").concat(a,", ").concat(-N,"px 0 ").concat(a,"}\n    70% {height: ").concat(w,"px; box-shadow: ").concat(N,"px ").concat(-j,"px ").concat(a,", ").concat(-N,"px ").concat(j,"px ").concat(a,"}\n    100% {box-shadow: ").concat(N,"px ").concat(j,"px ").concat(a,", ").concat(-N,"px ").concat(-j,"px ").concat(a,"}"),"after"),C=function(e){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(y/5).concat(b),height:"".concat(y/5).concat(b),borderRadius:"".concat(y/10).concat(b),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===e?q:k," ").concat(2/c,"s infinite")}};return void 0===t||t?s.createElement("span",p({style:v},g),s.createElement("span",{style:C(1)}),s.createElement("span",{style:C(2)})):null}},8877:function(e,t,n){"use strict";n.r(t);var a=n(57437),r=n(76965),s=n(81382),c=n(61316),o=n(2265),l=n(60152),i=n(16463),u=n(41942),d=n(84298),p=n(824),h=n(85260),m=n(88726),x=n(95650),g=n(80106),f=n(63872),y=n(77744),b=n(7432);let v={text:["contains","equals","starts with","ends with"],number:["=","!=","<","<=",">",">="],choice:["equals","not equals"]};function w(){var e;let[t,n]=(0,o.useState)(null),[w,j]=(0,o.useState)(null),[N,S]=(0,o.useState)([]),[q,k]=(0,o.useState)(!1),[C,Z]=(0,o.useState)(!1),[M,F]=(0,o.useState)(""),[W,D]=(0,o.useState)([]),[P,_]=(0,o.useState)(""),[O,A]=(0,o.useState)(""),[E,R]=(0,o.useState)(""),[I,T]=(0,o.useState)(""),[B,z]=(0,o.useState)(""),[G,U]=(0,o.useState)([]),[J,K]=(0,o.useState)([]),[L,Y]=(0,o.useState)(!0),[H,V]=(0,o.useState)(!1),[$,Q]=(0,o.useState)(null),[X,ee]=(0,o.useState)(null),[et,en]=(0,o.useState)(!1),[ea,er]=(0,o.useState)(null),[es,ec]=(0,o.useState)(null),[eo,el]=(0,o.useState)(!1),[ei,eu]=(0,o.useState)(!1),[ed,ep]=(0,o.useState)(null),[eh,em]=(0,o.useState)(null),[ex,eg]=(0,o.useState)(null),[ef,ey]=(0,o.useState)(null),[eb,ev]=(0,o.useState)(null),[ew,ej]=(0,o.useState)([]),[eN,eS]=(0,o.useState)(1),[eq,ek]=(0,o.useState)(1);console.log("selected Responses ------>",ew),console.log("applied filters------>",G);let eC=(0,i.useSearchParams)(),eZ=eC.get("survey_id"),eM=eC.get("ac_no"),eF=eC.get("booth_no"),eW=(0,i.useRouter)(),{isLoaded:eD}=(0,y.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyAAOwDBvpg5ZDv5JFG-CoDW23GsKkOPeuA"});async function eP(){let e,n;t&&w&&(e=new Date(t||""),n=new Date(w||""),e.setDate(e.getDate()+1),n.setDate(n.getDate()+1));let a={surveyId:eZ,startDate:e,endDate:n,userId:P,filters:G,page:eN,limit:5};V(!0);let r=await (0,l.K7)(a);K(r.data),ek(r.totalPages),console.log("responses ------>",r.data),r.data&&r.data.length>0&&er(r.data[0].responses.map(e=>({question:e.question,question_id:e.question_id}))),V(!1)}async function e_(){(await (0,d.qq)({ids:ex,responses:ew,surveyId:eZ})).success?(m.ZP.success("Data assigned successfully"),el(!1),ej([]),eg(null)):m.ZP.error("Error assigning data")}async function eO(){V(!0);let e=await (0,d.AW)({});console.log("users-------->",e.data),S(e.data),V(!1)}async function eA(){V(!0);let e=await (0,d.sr)({ac_no:eM,booth_no:eF,filter:ed});console.log("panna below-------->",e),em(e),V(!1)}(0,o.useEffect)(()=>{eP(),eO()},[L]),(0,o.useEffect)(()=>{eA()},[ed]);let eE=()=>{k(!1),eR()},eR=()=>{A(""),R(""),T("")},eI=e=>["Single line Text Input","Multiline Text Input","Email","Phone Number","Checkbox List","Checkbox List With Other"].includes(e)?v.text:["Number Input","Number Point","Rating","Date"].includes(e)?v.number:["Radio Button","DropDown","DropDown With Other"].includes(e)?v.choice:[],eT=e=>{let t=eI(e);return t.length>0?t[0]:""},eB=e=>{var t;let n=null===(t=J[0])||void 0===t?void 0:t.responses.find(t=>t.question_id===Number(e));n?(A(e),F(n.question_type),R(eT(n.question_type))):F("")};return(0,a.jsxs)("div",{className:"w-full bg-my-gray-100 font-medium",children:[(0,a.jsxs)("nav",{className:"h-16 bg-white w-full py-3 px-8 flex justify-between shadow-md font-semibold",children:[(0,a.jsx)("div",{className:"text-my-gray-200 items-center my-auto",children:(0,a.jsx)("p",{className:"text-sm",children:"Survey Response"})}),(0,a.jsxs)("div",{className:"flex space-x-2 text-black text-base font-semibold",children:[(0,a.jsx)(r.Z,{className:"rounded-lg px-4 py-2",children:"Export to Excel"}),(0,a.jsx)(r.Z,{className:"rounded-lg px-4 py-2",children:"Export to CSV"}),(0,a.jsx)(r.Z,{className:"rounded-lg px-4 py-2",children:"Configure Fields"}),(0,a.jsx)(s.Z,{onClick:()=>eW.back(),className:"rounded-lg px-4 py-2",children:"Back"})]})]}),(0,a.jsx)("div",{className:"p-5 font-semibold text-sm text-my-gray-200",children:(0,a.jsx)("div",{className:"bg-white space-y-4 rounded-lg px-4 py-6 shadow-md",children:(0,a.jsxs)("div",{className:"w-[780px] space-y-8 pb-6 ",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h1",{className:"text-my-gray-200",children:"Filters"}),(0,a.jsxs)("select",{onChange:e=>{let t=JSON.parse(e.target.value);G.find(e=>e.question===t.question&&e.operator===t.operator&&e.response===t.response)||U(t=>[...t,JSON.parse(e.target.value)])},value:B,name:"filters",id:"filters",className:"border w-full shadow-lg rounded-lg px-4 py-2",children:[(0,a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select filter"}),W&&W.length>0&&W.map(e=>{let t="";if(J&&J.length>0){let n=J[0].responses.find(t=>Number(t.question_id)===Number(e.question));n&&(t=n.question)}let n=JSON.stringify({question:e.question,operator:e.operator,response:e.response});return(0,a.jsx)("option",{value:n,children:"".concat(t," ").concat(e.operator," ").concat(e.response)},e.question)})]})]}),(0,a.jsx)("div",{className:"flex flex-col gap-2",children:G.map(e=>{var t;let n;let r=null===(t=J[0])||void 0===t?void 0:t.responses.find(t=>Number(t.question_id)===Number(e.question));return r&&(n=r.question),(0,a.jsxs)("div",{className:"flex justify-between w-full border border-secondary-200 rounded-sm px-4 py-2",children:[(0,a.jsx)("h2",{children:"".concat(n," ").concat(e.operator," ").concat(e.response)}),(0,a.jsx)("button",{onClick:()=>U(t=>t.filter(t=>!(t.question===e.question&&t.operator===e.operator&&t.response===e.response))),children:(0,a.jsx)(b.$iT,{})})]})})}),(0,a.jsxs)("div",{className:"flex justify-between space-x-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-my-gray-200 mb-2",children:"Date Range"}),(0,a.jsx)("div",{className:"w-full border border-my-gray-200 flex items-center rounded-lg",children:(0,a.jsx)(c.Z,{className:"w-[352px] h-10",startDate:t,endDate:w,setStartDate:n,setEndDate:j})})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-[352px]",children:[(0,a.jsx)("h1",{className:"text-my-gray-200",children:"Selected User"}),(0,a.jsxs)("select",{onChange:e=>_(e.target.value),value:P,name:"selected-user",id:"selected-user",className:"border h-10 w-[352px] border-my-gray-200 rounded-lg px-4 py-2",children:[(0,a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select user"}),N&&N.length>0&&N.map(e=>(0,a.jsx)("option",{value:e._id,children:e.name},e._id))]})]})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("h1",{className:"text-my-gray-200",children:"Data Filter"}),(0,a.jsx)(r.Z,{className:"w-10 h-10 flex justify-center items-center",onClick:()=>{k(!0)},children:"+"})]}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)(s.Z,{onClick:()=>{n(null),j(null),_(""),U([]),Y(!L)},className:"rounded-lg border-my-gray-200 bg-white px-4 py-2",children:"Reset"}),(0,a.jsx)(r.Z,{disabled:0===G.length&&!P.trim()&&!t&&!w,onClick:()=>{if(t&&!w||w&&!t){m.ZP.error("Please select a complete date range!");return}eP()},className:"rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:bg-blue-100 disabled:text-secondary-100",children:"Apply"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{onClick:()=>eu(!0),children:"Assign Data"})})]})})}),H&&(0,a.jsx)(g.Z,{className:"h-[30vh] w-full flex justify-center items-center"}),!H&&J&&J.length>0?(0,a.jsxs)("div",{id:"scrollableDiv",className:"w-[1250px] overflow-scroll rounded-t-2xl border border-secondary-200 mx-4",children:[(0,a.jsxs)("table",{className:"w-full table-auto",children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsxs)("tr",{className:"bg-secondary-100",children:[(0,a.jsx)("td",{className:"min-w-24 px-4 py-2 border-b text-center"}),(0,a.jsx)("td",{className:"min-w-24 px-4 py-2 border-b text-center"}),(0,a.jsx)("td",{className:"text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center",children:"Response date"}),(0,a.jsx)("td",{className:"text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center",children:"User"}),J&&J.length>0&&J[0].responses.map((e,t)=>(0,a.jsxs)("td",{className:"gap-2 text-secondary-300 px-4 py-2 border-b min-w-24 whitespace-nowrap text-center",children:[$!==e.question_id?(0,x.aF)(e.question,10):e.question,(0,a.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>Q(e.question_id),children:$!==e.question_id&&e.question.length>10?"More":""}),(0,a.jsx)("button",{className:"text-primary-300 text-sm ml-2",onClick:()=>Q(null),children:$===e.question_id&&e.question.length>10?"Less":""})]},t))]})}),(0,a.jsx)("tbody",{className:"bg-white",children:J&&J.map((e,t)=>{var n;return(0,a.jsxs)("tr",{onClick:()=>{ee(e),Z(!0)},className:"cursor-pointer",children:[eo&&(0,a.jsx)("td",{onClick:e=>e.stopPropagation(),className:"min-w-24 px-4 py-2 border-b text-center",children:(0,a.jsx)("input",{onChange:()=>(function(e,t){if(null===ef)ey(t),ej([e]);else{if(t===ef){ey(null),ev(null),ej([]);return}if(t<ef){ey(t),ev(null),ej([e]);return}if(t>ef){if(ev(t),Math.abs(t-ef)+1>60){m.ZP.error("Maximum of 60 responses are allowed");return}let e=[];for(let n=ef;n<=t;n++)e.push(J[n]._id);ej(e)}if(null!==eb&&t<eb){ev(t);let e=[];for(let n=ef;n<=t;n++)e.push(J[n]._id);ej(e)}}})(e._id,t),checked:ew.includes(e._id),className:"h-5 w-5",type:"checkbox"})}),(0,a.jsx)("td",{className:"min-w-24 px-4 py-2 border-b text-center",children:(0,a.jsx)(r.Z,{onClick:e=>{e.stopPropagation(),en(!0)},children:(0,a.jsx)(f.GUT,{})})}),(0,a.jsx)("td",{className:"min-w-24 px-4 py-2 border-b text-center",children:(0,a.jsx)(u.dSq,{})}),(0,a.jsx)("td",{className:"min-w-24 px-4 py-2 border-b text-center",children:(0,x.p6)(e.createdAt)}),(0,a.jsx)("td",{className:"min-w-44 whitespace-nowrap px-4 py-2 border-b text-center",children:(null===(n=N.find(t=>t._id===e.user_id))||void 0===n?void 0:n.name)||"-"}),e.responses.map((e,t)=>(0,a.jsx)("td",{className:"px-4 py-2 border-b min-w-44 whitespace-nowrap text-center",children:"Radio Grid"===e.question_type?e.response.split("\n").slice(0,2).map((e,t)=>(0,a.jsx)("p",{children:e},t)).concat(e.response.split("\n").length>2?(0,a.jsx)("p",{children:"..."},"ellipsis"):null):(0,x.aF)(e.response,20)||"-"},t))]},t)})})]}),eo&&(0,a.jsx)(r.Z,{className:"mt-5",onClick:e_,children:"Assign"})]}):!H&&(0,a.jsx)("div",{className:"flex w-full justify-center items-center h-[30vh]",children:(0,a.jsx)("p",{children:"No responses found"})}),(0,a.jsx)(h.Z,{open:q,closeModal:eE,children:(0,a.jsxs)("div",{className:"min-w-[500px] h-[270px] flex flex-col",children:[(0,a.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Create surveys"}),(0,a.jsxs)("form",{className:"w-full h-full p-4 flex gap-10 justify-center items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,a.jsx)("label",{className:"text-my-gray-200",children:"Question"}),(0,a.jsxs)("select",{onChange:e=>eB(e.target.value),value:O,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full",children:[(0,a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select question"}),J&&J.length>0&&J[0].responses.map((e,t)=>(0,a.jsx)("option",{value:e.question_id,className:"text-secondary-300 px-4 py-2 text-left border-b min-w-24 whitespace-nowrap",children:e.question},t))]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,a.jsx)("label",{className:"text-my-gray-200",children:"Operator"}),(0,a.jsxs)("select",{disabled:0===O.trim().length,onChange:e=>R(e.target.value),value:E,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",children:[(0,a.jsx)("option",{disabled:!0,selected:!0,children:"Select operator"}),eI(M).map(e=>(0,a.jsx)("option",{value:e,children:e}))]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,a.jsx)("label",{className:"text-my-gray-200",children:"Response"}),(0,a.jsx)("input",{disabled:0===M.trim().length||0===E.trim().length,onChange:e=>T(e.target.value),value:I,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-full disabled:cursor-not-allowed",type:"text",placeholder:"Enter response"})]})]}),(0,a.jsxs)("div",{className:"flex gap-3 items-center p-4",children:[(0,a.jsx)(p.Z,{className:"disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-secondary-100",disabled:0===O.trim().length||0===E.trim().length||0===I.trim().length,onClick:()=>{D([...W,{question:O,operator:E,response:I}]),eE()},children:"Save Filter"}),(0,a.jsx)(p.Z,{className:"border-red-500 hover:bg-red-500 hover:text-white text-red-500",onClick:eE,children:"Cancel"})]})]})}),(0,a.jsx)(h.Z,{open:C,closeModal:()=>Z(!1),children:X&&(0,a.jsx)("div",{className:"p-4 h-[60vh] flex justify-center items-center w-[50vw]",children:(0,a.jsxs)("div",{className:"flex h-full w-full justify-center items-center flex-col gap-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,a.jsxs)("h2",{className:"w-full h-full text-center text-xl font-semibold border-b-2 pb-2",children:[" ","Question"," "]}),(0,a.jsx)("p",{className:"w-full h-full text-center text-xl font-semibold border-b-2 pb-2",children:"Response"})]}),(0,a.jsxs)("div",{className:"flex h-full w-full flex-col overflow-y-auto",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,a.jsx)("h2",{className:"py-4 bg-blue-100 w-full h-full text-center font-medium",children:"Response by"}),(0,a.jsx)("p",{className:"py-4 bg-blue-100 w-full h-full text-center font-medium",children:(null===(e=N.find(e=>e._id===X.user_id))||void 0===e?void 0:e.name)||"-"})]}),X.responses.map((e,t)=>(0,a.jsxs)("div",{className:"grid grid-cols-2 w-full",children:[(0,a.jsx)("h2",{className:"w-full py-4 h-full text-center ".concat(t%2==0?"bg-blue-50":"bg-blue-100"),children:e.question}),(0,a.jsx)("p",{className:"w-full py-4 h-full text-center ".concat(t%2==0?"bg-blue-50":"bg-blue-100"),children:"Radio Grid"===e.question_type?e.response.split("\n").map((e,t)=>(0,a.jsx)("p",{children:e},t)):e.response})]},t))]})]})})}),(0,a.jsx)(h.Z,{open:et,closeModal:()=>en(!1),children:(0,a.jsx)("div",{className:"p-4 h-[60vh] flex justify-center items-center w-[50vw]",children:(0,a.jsx)("div",{className:"flex h-full w-full justify-center items-center flex-col gap-4",children:eD?(0,a.jsx)(y.b6,{mapContainerStyle:{width:"400px",height:"400px"},center:{lat:-3.745,lng:-38.523},zoom:10,onLoad:e=>{console.log("gmap--->",e);let t=new window.google.maps.LatLngBounds;e.fitBounds(t)},onUnmount:e=>{},children:(0,a.jsx)(a.Fragment,{})}):(0,a.jsx)(a.Fragment,{})})})}),(0,a.jsx)(h.Z,{open:ei,closeModal:()=>{eu(!1),eg(null)},children:(0,a.jsxs)("div",{className:"relative flex flex-col h-[60vh] w-[30vw] p-4",children:[(0,a.jsx)("h1",{className:"self-center text-lg font-semibold mb-5",children:"Assign to Panna Pramukh"}),(0,a.jsx)("input",{placeholder:"Search by name",className:"sticky top-5 left-0 px-4 py-2 border-2 outline-none rounded-md",value:ed||"",onChange:e=>ep(e.target.value),type:"text"}),(0,a.jsx)("div",{className:"grid mt-5 grid-cols-2 gap-3",children:eh&&eh.map(e=>(0,a.jsxs)("label",{className:"flex gap-5",children:[(0,a.jsx)("input",{onChange:()=>eg(t=>{let n=t||[];return n.includes(e._id)?n.filter(t=>t!==e._id):[...n,e._id]}),type:"checkbox",className:"h-5 w-5"}),(0,a.jsx)("p",{children:e.name})]}))}),(0,a.jsx)(r.Z,{onClick:()=>{el(!0),eu(!1)},className:"mt-auto disabled:bg-blue-100 disabled:cursor-not-allowed",disabled:!ex||ex&&0===ex.length,children:"Proceed"})]})})]})}t.default=()=>(0,a.jsx)(o.Suspense,{children:(0,a.jsx)(w,{})})},80106:function(e,t,n){"use strict";var a=n(57437),r=n(94057);t.Z=function(e){let{className:t}=e;return(0,a.jsx)("div",{className:t,children:(0,a.jsx)(r.Z,{color:"#477BFF"})})}},85260:function(e,t,n){"use strict";var a=n(57437),r=n(7583),s=n.n(r);let c={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};s().setAppElement("body"),t.Z=function(e){let{children:t,open:n,closeModal:r}=e;return(0,a.jsx)(s(),{isOpen:n,onRequestClose:r,style:c,contentLabel:"Example Modal",children:t})}},824:function(e,t,n){"use strict";var a=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,...s}=e;return(0,a.jsx)("button",{...s,className:(0,r.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300 hover:text-white hover:bg-primary-300",n),children:t})}},76965:function(e,t,n){"use strict";var a=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,onClick:s,...c}=e;return(0,a.jsx)("button",{...c,onClick:s,className:(0,r.m6)("border text-white bg-primary-300 px-4 py-2 rounded-md",n),children:t})}},81382:function(e,t,n){"use strict";var a=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,onClick:s,...c}=e;return(0,a.jsx)("button",{...c,onClick:s,className:(0,r.m6)("border text-black bg-[#E0DCDC] rounded-lg px-4 py-2",n),children:t})}},61316:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(57437),r=n(76235),s=n(36463),c=n.n(s),o=n(28196),l=n(96164),i=n(66648);n(54575);var u=function(e){let{startDate:t,setStartDate:n,endDate:s,setEndDate:u,className:d}=e,p=e=>e?(0,r.WU)(e,"dd-MMM-yyyy"):"",h=e=>{if(!e)return null;let t=new Date(e);return t.setHours(0,0,0,0),t};return(0,a.jsxs)("div",{className:(0,l.m6)("w-fit flex font-medium text-lg px-4 py-2 items-center space-x-2 rounded-lg focus:outline-none cursor-pointer",d),children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(i.default,{src:"/_next/static/media/survey_analytics_calender.a8f69bf6.png",alt:"calender",height:24,width:24})}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(c(),{selected:t,onChange:e=>n(h(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",value:t?p(t):"",onChange:e=>{console.log("inside input")},placeholder:"Select start",className:"my-2 w-[120px] text-center"})})}),(0,a.jsx)(o.OEZ,{className:"inline-block pt-1 text-2xl"}),(0,a.jsx)(c(),{selected:s,onChange:e=>u(h(e)),dateFormat:"dd.MM.yyyy",scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",value:s?p(s):"",onChange:e=>{console.log("inside input")},placeholder:"Select end",className:"my-2 w-[120px] text-center"})})})]})]})}},60152:function(e,t,n){"use strict";n.d(t,{Bl:function(){return l},K7:function(){return o},Pt:function(){return s},sD:function(){return c}});var a=n(1633),r=n(38472);let s=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.vx),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.HA),params:e};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.jC),params:e},n=await r.Z.request(t);return console.log("response --->",n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.n$),params:e},n=await r.Z.request(t);return console.log("response --->",n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},84298:function(e,t,n){"use strict";n.d(t,{AW:function(){return l},GK:function(){return c},PR:function(){return o},Pl:function(){return h},Sh:function(){return i},TJ:function(){return u},W6:function(){return g},WC:function(){return p},eD:function(){return s},qq:function(){return x},sE:function(){return m},sm:function(){return d},sr:function(){return f}});var a=n(1633),r=n(38472);let s=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(a.M6,"/").concat(a.sC),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await r.Z.request(n)).data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(a.M6,"/").concat(a.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(a.M6,"/").concat(a.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{var t;let n=localStorage.getItem("token"),s={method:"GET",url:"".concat(a.M6,"/").concat(a.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(n)}};return(await r.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.Tv),data:e};console.log(t);let n=await r.Z.request(t);return console.log(n),n.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(a.M6,"/").concat(a.rd),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},d=async e=>{try{let t={method:"GET",url:"".concat(a.M6,"/").concat(a.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}},p=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(a.M6,"/").concat(a.tt),params:{filter:e.searchBarInput||"",role:e.role||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},h=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(a.M6,"/").concat(a.ht),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},m=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(a.M6,"/").concat(a.Yn),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},x=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(a.M6,"/").concat(a.qJ),data:e,headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},g=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(a.M6,"/").concat(a.Pn,"?id=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},f=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(a.M6,"/").concat(a.UN),headers:{Authorization:"Bearer ".concat(t)},params:e};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,n){"use strict";n.d(t,{Sg:function(){return c},aF:function(){return s},a_:function(){return o},p6:function(){return r}});let a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function r(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=a[t.getMonth()],s=t.getFullYear();return"".concat(n,"-").concat(r,"-").concat(s)}function s(e,t){return e.length>t?e.slice(0,t)+"...":e}function c(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=a[t.getMonth()];return"".concat(n," ").concat(r)}function o(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return b},Dy:function(){return y},EK:function(){return i},HA:function(){return S},M6:function(){return a},ND:function(){return O},Ny:function(){return D},O1:function(){return j},Pn:function(){return p},SR:function(){return s},TK:function(){return f},Tp:function(){return r},Tv:function(){return c},UN:function(){return x},UY:function(){return B},VH:function(){return A},VJ:function(){return k},Yn:function(){return m},d1:function(){return T},dt:function(){return v},ht:function(){return h},it:function(){return w},jC:function(){return q},jV:function(){return F},mW:function(){return P},n$:function(){return C},nM:function(){return E},q6:function(){return W},qJ:function(){return g},ql:function(){return _},rO:function(){return Z},rd:function(){return o},sC:function(){return l},tm:function(){return u},tt:function(){return d},vx:function(){return N},we:function(){return I},x4:function(){return M},xD:function(){return R}});let a="https://survey-3uf0.onrender.com",r="api/user/getUser",s="api/user/getAllUsers",c="api/user/addUsers",o="api/user/addMultipleUsers",l="api/user/updateUser",i="api/user/updateUsers",u="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",h="api/user/createKaryakarta",m="api/user/updateKaryakarta",x="api/user/getPannaPramukh",g="api/user/updateMultipleKaryakarta",f="api/survey/saveSurvey",y="api/survey/updateSurvey",b="api/survey/getSurvey",v="api/survey/deleteSurvey",w="api/survey/getAllSurveys",j="api/survey/getSurveysByAcAndBooth",N="api/response/saveResponses",S="api/response/getAllSurveyResponses",q="api/response/getAllResponses",k="api/response/getSurveyResponseStats",C="api/response/getGroupedByFamily",Z=["Contact Form","Address"],M="api/auth/login",F="api/auth/forgotPassword",W="api/auth/resetPassword",D="api/role/allRoles",P="api/role/roles",_="api/role/create",O="api/role/update",A="api/role/delete",E="api/todo/create",R="api/todo/todo",I="api/todo/todos",T="api/todo/update",B="api/todo/delete"}},function(e){e.O(0,[5223,7699,614,1544,4574,7240,1910,8472,6164,3004,4049,7583,8143,8088,2971,7023,1744],function(){return e(e.s=25410)}),_N_E=e.O()}]);