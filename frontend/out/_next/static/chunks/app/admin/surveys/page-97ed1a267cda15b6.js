(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7135],{20067:function(){},72061:function(){},16133:function(e,t,n){Promise.resolve().then(n.bind(n,10522))},94057:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var s,r,a=n(2265);(s=r||(r={})).maroon="#800000",s.red="#FF0000",s.orange="#FFA500",s.yellow="#FFFF00",s.olive="#808000",s.green="#008000",s.purple="#800080",s.fuchsia="#FF00FF",s.lime="#00FF00",s.teal="#008080",s.aqua="#00FFFF",s.blue="#0000FF",s.navy="#000080",s.black="#000000",s.gray="#808080",s.silver="#C0C0C0",s.white="#FFFFFF";var o=function(e,t){if(e.includes("/"))return e.replace("rgb(","rgba(");var n=e.substring(e.startsWith("rgba(")?5:4,e.length-1).trim(),s=n.split(",");return 4===s.length?e.replace("rgb(","rgba("):3===s.length?"rgba(".concat(n,", ").concat(t,")"):"rgba(".concat(n," / ").concat(t,")")},i=function(e,t){if(e.startsWith("rgb"))return o(e,t);if(Object.keys(r).includes(e)&&(e=r[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var n="";e.split("").forEach(function(e){n+=e+e}),e=n}var s=(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(", ");return"rgba(".concat(s,", ").concat(t,")")},c={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function l(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var s=(e.match(/[^0-9]*$/)||"").toString();return c[s]?{value:t,unit:s}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function u(e){var t=l(e);return"".concat(t.value).concat(t.unit)}var d=function(e,t,n){var s="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return s;var r=document.createElement("style");document.head.appendChild(r);var a=r.sheet,o="\n    @keyframes ".concat(s," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(o,0),s},h=function(){return(h=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n},f=function(e){var t=e.loading,n=e.color,s=void 0===n?"#000000":n,r=e.speedMultiplier,o=void 0===r?1:r,c=e.cssOverride,f=e.size,m=void 0===f?50:f,x=p(e,["loading","color","speedMultiplier","cssOverride","size"]),y=l(m),g=y.value,b=y.unit,v=h({display:"inherit",position:"relative",width:u(m),height:u(m),transform:"rotate(165deg)"},void 0===c?{}:c),w=g/5,j=(g-w)/2,S=j-w,N=i(s,.75),k=d("HashLoader","0% {width: ".concat(w,"px; box-shadow: ").concat(j,"px ").concat(-S,"px ").concat(N,", ").concat(-j,"px ").concat(S,"px ").concat(N,"}\n    35% {width: ").concat(u(m),"; box-shadow: 0 ").concat(-S,"px ").concat(N,", 0 ").concat(S,"px ").concat(N,"}\n    70% {width: ").concat(w,"px; box-shadow: ").concat(-j,"px ").concat(-S,"px ").concat(N,", ").concat(j,"px ").concat(S,"px ").concat(N,"}\n    100% {box-shadow: ").concat(j,"px ").concat(-S,"px ").concat(N,", ").concat(-j,"px ").concat(S,"px ").concat(N,"}"),"before"),C=d("HashLoader","0% {height: ".concat(w,"px; box-shadow: ").concat(S,"px ").concat(j,"px ").concat(s,", ").concat(-S,"px ").concat(-j,"px ").concat(s,"}\n    35% {height: ").concat(u(m),"; box-shadow: ").concat(S,"px 0 ").concat(s,", ").concat(-S,"px 0 ").concat(s,"}\n    70% {height: ").concat(w,"px; box-shadow: ").concat(S,"px ").concat(-j,"px ").concat(s,", ").concat(-S,"px ").concat(j,"px ").concat(s,"}\n    100% {box-shadow: ").concat(S,"px ").concat(j,"px ").concat(s,", ").concat(-S,"px ").concat(-j,"px ").concat(s,"}"),"after"),O=function(e){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(g/5).concat(b),height:"".concat(g/5).concat(b),borderRadius:"".concat(g/10).concat(b),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===e?k:C," ").concat(2/o,"s infinite")}};return void 0===t||t?a.createElement("span",h({style:v},x),a.createElement("span",{style:O(1)}),a.createElement("span",{style:O(2)})):null}},10522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(57437),r=n(2265),a=n(824),o=n(16463),i=n(85260),c=n(95650),l=n(60274),u=n(27800),d=n(88726),h=n(60152),p=n(3003),f=function(e){let{setUpdated:t}=e,[n,f]=(0,r.useState)(!1),[m,x]=(0,r.useState)(!1),[y,g]=(0,r.useState)(""),[b,v]=(0,r.useState)(""),[w,j]=(0,r.useState)(""),[S,N]=(0,r.useState)(null),[k,C]=(0,r.useState)([]),O=(0,o.useRouter)(),_=(0,r.useRef)(null);console.log(k),(0,r.useEffect)(()=>{N((0,c.a_)())},[]);let M=async e=>{var n;e.preventDefault();let s=null===(n=e.target.files)||void 0===n?void 0:n[0];if(s){let e;let n=new FileReader;n.onload=async n=>{var s;let r=new Uint8Array(null===(s=n.target)||void 0===s?void 0:s.result),a=u.ij(r,{type:"array"}),o=a.SheetNames[0],i=a.Sheets[o];if(e=u.P6.sheet_to_json(i),S){let n=[];console.log("json data------>",e),Object.keys(e[0]).forEach((e,t)=>{n.push({question_id:t+10,type:"Single line Text Input",randomize:!1,dependency:[],children:[],parameters:{question:e}})});let s={name:y,created_by:S.email,published:!1,questions:n},r=await (0,l.Vb)(s);if(console.log(r),r.success){d.ZP.success("Survey created successfully!"),console.log(r.survey._id);let t=[];e.forEach((e,n)=>{let s=[];Object.keys(e).forEach((t,n)=>{let r={};r.response=String(e[t]),r.question_id=n+10,r.question=t,r.question_type="Single line Text Input",s.push(r)}),t.push({survey_id:r.survey._id,responses:s})}),E(t)}else d.ZP.error("Failed to create survey!");x(!1),t(e=>!e)}C(e)},n.readAsArrayBuffer(s)}};async function E(e){(await (0,h.Pt)(e)).success?d.ZP.success("Responses saved successfully"):d.ZP.error("Something went wrong while saving responses")}let D=()=>f(!1),T=()=>x(!1);return(0,s.jsxs)("header",{className:"top-0 left-0 z-20 w-full h-16",children:[(0,s.jsxs)("div",{className:"h-16 w-full py-3 px-8 flex justify-between ",children:[(0,s.jsx)("h3",{className:"text-secondary-300 text-2xl",children:"Surveys"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(a.Z,{onClick:()=>f(!0),className:"bg-white font-semibold",children:[" ","+ Create survey"]}),(0,s.jsxs)(a.Z,{onClick:()=>x(!0),className:"flex gap-2 items-center bg-white font-semibold",children:[(0,s.jsx)(p.Fb$,{className:"tex-xl"}),"Import survey"]})]})]}),(0,s.jsx)(i.Z,{open:n,closeModal:D,children:(0,s.jsxs)("div",{className:"min-w-[662px] h-[400px] flex flex-col justify-center items-center",children:[(0,s.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Create surveys"}),(0,s.jsxs)("form",{className:"grid grid-cols-2 h-full w-[90%] place-items-center",children:[(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"Name"}),(0,s.jsx)("input",{onChange:e=>g(e.target.value),value:y,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none",type:"text",placeholder:"Survey name"}),(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"AC_NO"}),(0,s.jsx)("input",{onChange:e=>v(e.target.value),value:b,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",type:"number",placeholder:"AC_NO"}),(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"BOOTH_NO"}),(0,s.jsx)("input",{onChange:e=>j(e.target.value),value:w,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",type:"number",placeholder:"BOOTH_NO"}),(0,s.jsxs)("div",{className:"col-span-2 flex items-center gap-10",children:[(0,s.jsx)(a.Z,{onClick:D,type:"button",className:"border-secondary-200",children:"Cancel"}),(0,s.jsx)("button",{disabled:!y||!b||!w,className:"px-6 py-2 bg-primary-300 text-white rounded-md disabled:bg-blue-100 disabled:cursor-not-allowed",type:"button",onClick:()=>O.push("/admin/surveys/create?name=".concat(encodeURIComponent(y),"&ac_no=").concat(encodeURIComponent(b),"&booth_no=").concat(encodeURIComponent(w))),children:"Create survey"})]})]})]})}),(0,s.jsx)(i.Z,{open:m,closeModal:T,children:(0,s.jsxs)("div",{className:"min-w-[662px] h-[400px] flex flex-col justify-center items-center",children:[(0,s.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Import survey"}),(0,s.jsxs)("form",{className:"grid grid-cols-2 h-full w-[90%] place-items-center",children:[(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"Name"}),(0,s.jsx)("input",{onChange:e=>g(e.target.value),value:y,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none",type:"text",placeholder:"Survey name"}),(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"AC_NO"}),(0,s.jsx)("input",{onChange:e=>v(e.target.value),value:b,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",type:"number",placeholder:"AC_NO"}),(0,s.jsx)("label",{className:"h-full w-full flex justify-center items-center",children:"BOOTH_NO"}),(0,s.jsx)("input",{onChange:e=>j(e.target.value),value:w,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 h-3/4 w-full focus:ring-1 focus:ring-blue-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",type:"number",placeholder:"BOOTH_NO"}),(0,s.jsxs)("div",{className:"flex items-center gap-10 col-span-2",children:[(0,s.jsx)(a.Z,{onClick:T,type:"button",className:"border-secondary-200",children:"Cancel"}),(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{ref:_,type:"file",accept:".xlsx, .xls",onChange:M,className:"hidden"}),(0,s.jsx)("button",{type:"button",onClick:()=>{_.current&&_.current.click()},disabled:!y||!b||!w,className:"px-6 py-2 bg-primary-300 text-white rounded-md disabled:bg-blue-100 disabled:cursor-not-allowed",children:"Import questions"})]})]})]})]})})]})},m=n(76965),x=n(66648),y=n(43781),g=n(41942),b=n(16356),v=n(80106),w=n(79005),j=n(69824),S=n(84298),N=function(e){let{queryParams:t,setQueryParams:n,updated:a}=e,[u,h]=(0,r.useState)([]),[p,f]=(0,r.useState)(!1),[x,N]=(0,r.useState)(null),[k,C]=(0,r.useState)(!1),[O,_]=(0,r.useState)(null),[M,E]=(0,r.useState)(null),[D,T]=(0,r.useState)(null),[A,Z]=(0,r.useState)(!1),[W,F]=(0,r.useState)(1),[P,I]=(0,r.useState)([]),[R,B]=(0,r.useState)(!1),[U,q]=(0,r.useState)([]),[H,z]=(0,r.useState)([]),[L,G]=(0,r.useState)(""),[K,J]=(0,r.useState)(null);console.log("selected Users --->",U),console.log("deselected Users --->",H);let X=(0,o.useRouter)();async function $(){(await (0,l.Gn)({id:O,created_by:"rohitchand490@gmail.com"})).success?(Y(),C(!1),N(null),d.ZP.success("Survey deleted successfully")):d.ZP.error("Failed to delete survey")}(0,r.useEffect)(()=>{Y()},[t,a]),(0,r.useEffect)(()=>{let e=(0,c.a_)();e&&J(e),ee()},[]);let V=e=>{U.includes(e)?(q(t=>t.filter(t=>t!==e)),z(t=>[...t,e])):(q(t=>[...t,e]),z(t=>t.filter(t=>t!==e)))};async function Q(){(await (0,l.ez)({_id:M,formData:{published:!D,created_by:"rohitchand490@gmail.com"}})).success?(Y(),Z(!1),E(null),T(null),d.ZP.success("Survey ".concat(D?"Unpublished":"Published"," successfully"))):d.ZP.error("Failed to Publish survey")}async function Y(){f(!0);let e=await (0,l.tB)(t);console.log(e),h(e.surveys),F(e.totalPages),f(!1)}async function ee(){f(!0);let e=await (0,S.AW)({selectedRole:"Survey Collector"});console.log(e.data),I(e.data),f(!1)}let et=e=>{N(t=>t===e?null:e)},en=e=>{T(e.published),E(e._id),Z(!0)};async function es(){let e=U.map(e=>({user_id:e,assigned_survey:L})),n=H.map(e=>({user_id:e,remove_survey:L}));if(n&&(e=[...e,...n]),!e||0===e.length){d.ZP.error("Please select at least one new user");return}let s={users:e};console.log("params-------->",e),f(!0),(await (0,S.GK)(s)).success?(d.ZP.success("Assigned surveys updated successfully!"),(0,l.tB)(t),ee()):d.ZP.error("Something went wrong"),f(!1),B(!1),N(null),q([])}return(0,s.jsxs)("div",{className:"w-full px-5 py-5 text-sm",children:[(0,s.jsxs)("div",{className:"grid grid-cols-8 text-white font-semibold bg-blue-500 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,s.jsx)("p",{className:"col-span-2",children:"All surveys"}),(0,s.jsx)("p",{className:"col-span-2",children:"Total responses"}),(0,s.jsx)("p",{className:"col-span-2",children:"Date created"}),(0,s.jsx)("p",{className:"col-span-2",children:"Status"})]}),p&&(0,s.jsx)(v.Z,{className:"h-[40vh] w-full flex justify-center items-center text-primary-300"}),!p&&u&&u.length>0?u.map((e,t)=>(0,s.jsxs)("div",{className:"grid grid-cols-8 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white",children:[(0,s.jsx)("p",{onClick:()=>X.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"col-span-2 cursor-pointer",children:e.name}),(0,s.jsx)("p",{className:"col-span-2 pl-8",children:"0"}),(0,s.jsx)("p",{className:"col-span-2",children:(0,c.p6)(e.createdAt)}),(0,s.jsxs)("div",{className:"col-span-2 flex items-center justify-between w-full relative",children:[(0,s.jsx)(w.Z,{onChange:()=>en(e),checked:e.published,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("button",{onClick:()=>{_(e._id),q(P.filter(t=>t.assigned_survey.includes(e._id)).map(e=>e._id)),et(e._id)},children:(0,s.jsx)(y.FQA,{})}),x===e._id&&(0,s.jsxs)("div",{className:"absolute right-0 top-8 h-auto w-48 bg-white shadow-lg border rounded-md py-2 z-10",children:[(0,s.jsxs)("button",{onClick:()=>X.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(g.ffH,{})," Edit"]}),(0,s.jsxs)("button",{onClick:()=>{G(e._id),N(null),B(!0)},className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(g.BKo,{})," Assign to user"]}),(0,s.jsxs)("button",{onClick:()=>{N(null),C(!0)},className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(b.F1H,{})," Delete"]})]})]})]})]},t)):!p&&!u&&(0,s.jsx)("p",{className:"w-full h-20 flex justify-center items-center font-semibold text-secondary-300",children:"No surveys"}),!p&&(0,s.jsxs)("div",{className:"flex gap-3 items-center mt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,s.jsxs)("select",{id:"limit-select",value:t.limit,onChange:e=>{let s=parseInt(e.target.value,10);n({...t,limit:s,page:1})},className:"p-2 border rounded-md",children:[(0,s.jsx)("option",{value:10,children:"10"}),(0,s.jsx)("option",{value:20,children:"20"}),(0,s.jsx)("option",{value:50,children:"50"}),(0,s.jsx)("option",{value:100,children:"100"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("button",{onClick:()=>{t.page>1&&n({...t,page:t.page-1})},disabled:1===t.page,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(j.u1R,{})}),(0,s.jsxs)("span",{children:["Page ",t.page," of ",W]}),(0,s.jsx)("button",{onClick:()=>{t.page<W&&n({...t,page:t.page+1})},disabled:t.page===W,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(j.hjJ,{})})]})]}),(0,s.jsx)(i.Z,{open:A,closeModal:()=>{Z(!1),E(null),T(null)},children:(0,s.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,s.jsxs)("h1",{className:"text-xl",children:["Do you want to ",D?"Unpublish":"Publish"," this survey?"]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(m.Z,{onClick:Q,className:"w-40",children:D?"Unpublish":"Publish"}),(0,s.jsx)(m.Z,{onClick:()=>{Z(!1),E(null),T(null)},className:"w-40",children:"No"})]})]})}),(0,s.jsx)(i.Z,{open:k,closeModal:()=>{C(!1),N(null),_(null)},children:(0,s.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,s.jsx)("h1",{className:"text-xl",children:"Are you sure you want to delete this survey?"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(m.Z,{onClick:$,className:"w-40",children:"Yes"}),(0,s.jsx)(m.Z,{onClick:()=>{C(!1),N(null),_(null)},className:"w-40",children:"No"})]})]})}),(0,s.jsx)(i.Z,{open:R,closeModal:()=>{B(!1),q([])},children:(0,s.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw]  justify-center items-center gap-5",children:[(0,s.jsx)("h1",{className:"text-xl w-full text-center",children:"Select users to assign the survey"}),(0,s.jsx)("div",{className:"flex flex-col gap-4 max-h-60 w-full overflow-y-auto justify-center items-center",children:P&&K&&P.map(e=>{let{_id:t,email:n,name:r,assigned_survey:a}=e;return K.id===t?null:(0,s.jsxs)("label",{className:"cursor-pointer flex items-center gap-10 min-w-[50%] justify-between",children:[r||n,(0,s.jsx)("input",{className:"h-5 w-5 disabled:cursor-not-allowed",type:"checkbox",defaultChecked:a.includes(L),onChange:()=>V(t)})]},K._id)})}),(0,s.jsx)(m.Z,{onClick:es,className:"whitespace-nowrap",children:"Updated Assigned Surveys"})]})})]})};let k={page:1,limit:10,sortBy:"createdAt",sortOrder:"desc",published:"all",created_by:"rohitchand490@gmail.com",filter:""};var C=function(){let[e,t]=(0,r.useState)(k),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)("all"),[c,l]=(0,r.useState)("dateDesc"),[u,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{},[e]),(0,s.jsxs)("section",{className:"w-full  bg-[#ECF0FA] h-full",children:[(0,s.jsx)(f,{setUpdated:d}),(0,s.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("input",{className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Search Surveys here",value:n,onChange:e=>a(e.target.value)}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsxs)("div",{className:"flex  h-10 items-center space-x-1 text-secondary-300 font-semibold text-[14px] whitespace-nowrap",children:[(0,s.jsx)("p",{children:"Filter By:"}),(0,s.jsx)("div",{className:"rounded-md py-2 px-2 justify-between border border-secondary-200 bg-white",children:(0,s.jsxs)("select",{name:"filterby",className:"w-fit bg-white  focus:outline-none px-2",id:"filterby",value:o,onChange:e=>i(e.target.value),children:[(0,s.jsx)("option",{value:"all",children:"All"}),(0,s.jsx)("option",{value:"published",children:"Published"}),(0,s.jsx)("option",{value:"unpublished",children:"Unpublished"})]})})]}),(0,s.jsxs)("div",{className:"flex h-10 items-center space-x-1 mr-8 text-secondary-300 font-semibold text-[14px] whitespace-nowrap",children:[(0,s.jsx)("p",{className:"",children:"Sort By:"}),(0,s.jsx)("div",{className:"rounded-md py-2 px-2 justify-between border border-secondary-200 bg-white",children:(0,s.jsxs)("select",{name:"sortby",className:"w-fit bg-white focus:outline-none px-2",id:"sortby",value:c,onChange:e=>l(e.target.value),children:[(0,s.jsx)("option",{value:"nameAsc",children:"Name ASC"}),(0,s.jsx)("option",{value:"nameDesc",children:"Name DESC"}),(0,s.jsx)("option",{value:"dateDesc",children:"Date DESC"}),(0,s.jsx)("option",{value:"dateAsc",children:"Date ASC"})]})})]}),(0,s.jsxs)(m.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{t(e=>({...e,filter:n,published:o,sortBy:c.includes("name")?"name":"createdAt",sortOrder:c.includes("Asc")?"asc":"desc",page:1}))},children:[(0,s.jsx)(x.default,{src:"/_next/static/media/Filter.bcc39a0d.png",alt:"filter icon",height:20,width:20}),(0,s.jsx)("p",{children:"Apply filters"})]}),(0,s.jsx)(m.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{a(""),i("all"),l("dateDesc"),t(()=>k)},children:(0,s.jsx)("p",{children:"Clear Filters"})})]})]})}),(0,s.jsx)(N,{updated:u,setQueryParams:e=>t(t=>({...t,...e})),queryParams:e})]})}},80106:function(e,t,n){"use strict";var s=n(57437),r=n(94057);t.Z=function(e){let{className:t}=e;return(0,s.jsx)("div",{className:t,children:(0,s.jsx)(r.Z,{color:"#477BFF"})})}},85260:function(e,t,n){"use strict";var s=n(57437),r=n(7583),a=n.n(r);let o={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};a().setAppElement("body"),t.Z=function(e){let{children:t,open:n,closeModal:r}=e;return(0,s.jsx)(a(),{isOpen:n,onRequestClose:r,style:o,contentLabel:"Example Modal",children:t})}},824:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,...a}=e;return(0,s.jsx)("button",{...a,className:(0,r.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300 hover:text-white hover:bg-primary-300",n),children:t})}},76965:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(96164);t.Z=function(e){let{children:t,className:n,onClick:a,...o}=e;return(0,s.jsx)("button",{...o,onClick:a,className:(0,r.m6)("border text-white bg-primary-300 px-4 py-2 rounded-md",n),children:t})}},60152:function(e,t,n){"use strict";n.d(t,{K7:function(){return i},Pt:function(){return a},sD:function(){return o}});var s=n(1633),r=n(38472);let a=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.vx),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.HA),params:e};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.jC),params:e},n=await r.Z.request(t);return console.log("response --->",n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},60274:function(e,t,n){"use strict";n.d(t,{Gn:function(){return u},LA:function(){return l},Vb:function(){return a},a2:function(){return c},ez:function(){return o},tB:function(){return i}});var s=n(1633),r=n(38472);let a=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.TK),data:e};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Dy,"?_id=").concat(e._id),data:e.formData};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let t=e.page||1,n=e.limit||10,a=e.filter||"",o=e.created_by,i=e.sortBy,c=e.sortOrder,l=e.published;"published"===e.published?l=!0:"unpublished"===e.published?l=!1:"all"===e.published&&(l=void 0);let u={method:"GET",url:"".concat(s.M6,"/").concat(s.it,"?filter=").concat(a,"&page=").concat(t,"&limit=").concat(n,"&sortBy=").concat(i,"&sortOrder=").concat(c,"&published=").concat(l,"&created_by=").concat(o)},d=await r.Z.request(u);return console.log(d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{e.page,e.limit,e.filter,e.created_by,e.sortBy,e.sortOrder,e.published,"published"===e.published||"unpublished"===e.published||e.published;let t={method:"GET",url:"".concat(s.M6,"/").concat(s.VJ),params:{survey_id:e.survey_id}},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.A5,"?_id=").concat(e._id)};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.dt),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},84298:function(e,t,n){"use strict";n.d(t,{AW:function(){return i},GK:function(){return a},PR:function(){return o},Sh:function(){return c},TJ:function(){return l},sm:function(){return u}});var s=n(1633),r=n(38472);let a=async e=>{try{let t=localStorage.getItem("token"),n={method:"POST",url:"".concat(s.M6,"/").concat(s.EK),headers:{Authorization:"Bearer ".concat(t)},data:e};return(await r.Z.request(n)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let t=localStorage.getItem("token"),n={method:"GET",url:"".concat(s.M6,"/").concat(s.Tp,"?userId=").concat(e),headers:{Authorization:"Bearer ".concat(t)}};return(await r.Z.request(n)).data.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{var t;let n=localStorage.getItem("token"),a={method:"GET",url:"".concat(s.M6,"/").concat(s.SR),params:{filter:e.searchBarInput||"",getWithProfilePicture:null!==(t=e.withProfilePic)&&void 0!==t&&t,role:e.selectedRole||"",page:e.page,limit:e.limit},headers:{Authorization:"Bearer ".concat(n)}};return(await r.Z.request(a)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Tv),data:e};console.log(t);let n=await r.Z.request(t);return console.log(n),n.data.success}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.rd),data:e},n=await r.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},u=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.tm),params:{filter:e.searchBarInput,role:e.selectedRole,currentUserId:e.currentUserId,page:e.page,limit:e.limit}};return(await r.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong while getting all chats data",error:e}}}},95650:function(e,t,n){"use strict";n.d(t,{Sg:function(){return o},aF:function(){return a},a_:function(){return i},p6:function(){return r}});let s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function r(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=s[t.getMonth()],a=t.getFullYear();return"".concat(n,"-").concat(r,"-").concat(a)}function a(e,t){return e.length>t?e.slice(0,t)+"...":e}function o(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=s[t.getMonth()];return"".concat(n," ").concat(r)}function i(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return h},Dy:function(){return d},EK:function(){return c},HA:function(){return x},M6:function(){return s},SR:function(){return a},TK:function(){return u},Tp:function(){return r},Tv:function(){return o},VJ:function(){return g},dt:function(){return p},it:function(){return f},jC:function(){return y},jV:function(){return w},q6:function(){return j},rO:function(){return b},rd:function(){return i},tm:function(){return l},vx:function(){return m},x4:function(){return v}});let s="https://survey-3uf0.onrender.com",r="api/user/getUser",a="api/user/getAllUsers",o="api/user/addUsers",i="api/user/addMultipleUsers",c="api/user/updateUsers",l="api/chatroom/getAllChatsData",u="api/survey/saveSurvey",d="api/survey/updateSurvey",h="api/survey/getSurvey",p="api/survey/deleteSurvey",f="api/survey/getAllSurveys",m="api/response/saveResponses",x="api/response/getAllSurveyResponses",y="api/response/getAllResponses",g="api/response/getSurveyResponseStats",b=["Contact Form","Address"],v="api/auth/login",w="api/auth/forgotPassword",j="api/auth/resetPassword"},79005:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(2265);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var a=s.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},s.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=s.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},s.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function i(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function c(e,t,n,s,r){return function(e,t,n,s,r){var a=(e-n)/(t-n);if(0===a)return s;if(1===a)return r;for(var o="#",i=1;i<6;i+=2){var c=Math.round((1-a)*parseInt(s.substr(i,2),16)+a*parseInt(r.substr(i,2),16)).toString(16);1===c.length&&(c="0"+c),o+=c}return o}(e,t,n,i(s),i(r))}var l=function(e){function t(t){e.call(this,t);var n=t.height,s=t.width,r=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(s-n,s-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:r?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,n=t.R,s=t.h,r=(this.props.checked?this.i:this.o)+e-n;t.N||e===n||this.setState({N:!0});var a=Math.min(this.i,Math.max(this.o,r));a!==s&&this.setState({h:a})},t.prototype.U=function(e){var t=this.state,n=t.h,s=t.N,r=t.B,a=this.props.checked,o=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var i=Date.now()-r;(!s||i<250||a&&n<=o||!a&&n>=o)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.m=function(e){this.L(e.touches[0].clientX)},t.prototype.M=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,a=e.className,o=e.offColor,i=e.onColor,l=e.offHandleColor,u=e.onHandleColor,d=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,m=e.boxShadow,x=e.activeBoxShadow,y=e.height,g=e.width,b=e.borderRadius,v=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&-1===t.indexOf(s)&&(n[s]=e[s]);return n}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,j=w.h,S=w.N,N=w.j,k={height:y,width:g,margin:Math.max(0,(this.t-y)/2),position:"relative",background:c(j,this.i,this.o,o,i),borderRadius:"number"==typeof b?b:y/2,cursor:n?"default":"pointer",WebkitTransition:S?null:"background 0.25s",MozTransition:S?null:"background 0.25s",transition:S?null:"background 0.25s"},C={height:y,width:Math.min(1.5*y,g-(this.t+y)/2+1),position:"relative",opacity:(j-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},O={height:y,width:Math.min(1.5*y,g-(this.t+y)/2+1),position:"absolute",opacity:1-(j-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},_={height:this.t,width:this.t,background:c(j,this.i,this.o,l,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof b?b-1:"50%",position:"absolute",transform:"translateX("+j+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:N?x:m,border:0,WebkitTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"};return s.createElement("div",{className:a,style:{position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}},s.createElement("div",{className:"react-switch-bg",style:k,onClick:n?null:this.T,onMouseDown:function(e){return e.preventDefault()}},d&&s.createElement("div",{style:C},d),h&&s.createElement("div",{style:O},h)),s.createElement("div",{className:"react-switch-handle",style:_,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},f&&s.createElement("div",{style:M},f),p&&s.createElement("div",{style:E},p)),s.createElement("input",r({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(s.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56}}},function(e){e.O(0,[7699,1779,5452,6051,1994,1425,8472,6164,3004,4049,7583,2971,7023,1744],function(){return e(e.s=16133)}),_N_E=e.O()}]);