(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7135],{20067:function(){},72061:function(){},16133:function(e,t,n){Promise.resolve().then(n.bind(n,21841))},94057:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var s,o,i=n(2265);(s=o||(o={})).maroon="#800000",s.red="#FF0000",s.orange="#FFA500",s.yellow="#FFFF00",s.olive="#808000",s.green="#008000",s.purple="#800080",s.fuchsia="#FF00FF",s.lime="#00FF00",s.teal="#008080",s.aqua="#00FFFF",s.blue="#0000FF",s.navy="#000080",s.black="#000000",s.gray="#808080",s.silver="#C0C0C0",s.white="#FFFFFF";var a=function(e,t){if(e.includes("/"))return e.replace("rgb(","rgba(");var n=e.substring(e.startsWith("rgba(")?5:4,e.length-1).trim(),s=n.split(",");return 4===s.length?e.replace("rgb(","rgba("):3===s.length?"rgba(".concat(n,", ").concat(t,")"):"rgba(".concat(n," / ").concat(t,")")},r=function(e,t){if(e.startsWith("rgb"))return a(e,t);if(Object.keys(o).includes(e)&&(e=o[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var n="";e.split("").forEach(function(e){n+=e+e}),e=n}var s=(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(", ");return"rgba(".concat(s,", ").concat(t,")")},c={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function l(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var s=(e.match(/[^0-9]*$/)||"").toString();return c[s]?{value:t,unit:s}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function u(e){var t=l(e);return"".concat(t.value).concat(t.unit)}var d=function(e,t,n){var s="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return s;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(s," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(a,0),s},h=function(){return(h=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)0>t.indexOf(s[o])&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n},f=function(e){var t=e.loading,n=e.color,s=void 0===n?"#000000":n,o=e.speedMultiplier,a=void 0===o?1:o,c=e.cssOverride,f=e.size,m=void 0===f?50:f,x=p(e,["loading","color","speedMultiplier","cssOverride","size"]),y=l(m),b=y.value,v=y.unit,g=h({display:"inherit",position:"relative",width:u(m),height:u(m),transform:"rotate(165deg)"},void 0===c?{}:c),w=b/5,j=(b-w)/2,N=j-w,S=r(s,.75),k=d("HashLoader","0% {width: ".concat(w,"px; box-shadow: ").concat(j,"px ").concat(-N,"px ").concat(S,", ").concat(-j,"px ").concat(N,"px ").concat(S,"}\n    35% {width: ").concat(u(m),"; box-shadow: 0 ").concat(-N,"px ").concat(S,", 0 ").concat(N,"px ").concat(S,"}\n    70% {width: ").concat(w,"px; box-shadow: ").concat(-j,"px ").concat(-N,"px ").concat(S,", ").concat(j,"px ").concat(N,"px ").concat(S,"}\n    100% {box-shadow: ").concat(j,"px ").concat(-N,"px ").concat(S,", ").concat(-j,"px ").concat(N,"px ").concat(S,"}"),"before"),C=d("HashLoader","0% {height: ".concat(w,"px; box-shadow: ").concat(N,"px ").concat(j,"px ").concat(s,", ").concat(-N,"px ").concat(-j,"px ").concat(s,"}\n    35% {height: ").concat(u(m),"; box-shadow: ").concat(N,"px 0 ").concat(s,", ").concat(-N,"px 0 ").concat(s,"}\n    70% {height: ").concat(w,"px; box-shadow: ").concat(N,"px ").concat(-j,"px ").concat(s,", ").concat(-N,"px ").concat(j,"px ").concat(s,"}\n    100% {box-shadow: ").concat(N,"px ").concat(j,"px ").concat(s,", ").concat(-N,"px ").concat(-j,"px ").concat(s,"}"),"after"),D=function(e){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(b/5).concat(v),height:"".concat(b/5).concat(v),borderRadius:"".concat(b/10).concat(v),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===e?k:C," ").concat(2/a,"s infinite")}};return void 0===t||t?i.createElement("span",h({style:g},x),i.createElement("span",{style:D(1)}),i.createElement("span",{style:D(2)})):null}},21841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var s=n(57437),o=n(2265),i=n(824),a=n(16463),r=n(7583),c=n.n(r);let l={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};c().setAppElement("body");var u=function(e){let{children:t,open:n,closeModal:o}=e;return(0,s.jsx)(c(),{isOpen:n,onRequestClose:o,style:l,contentLabel:"Example Modal",children:t})},d=n(95650),h=n(60274),p=n(27800),f=n(88726),m=n(60152),x=function(e){let{setUpdated:t}=e,[n,r]=(0,o.useState)(!1),[c,l]=(0,o.useState)(!1),[x,y]=(0,o.useState)(""),[b,v]=(0,o.useState)(null),[g,w]=(0,o.useState)([]),j=(0,a.useRouter)(),N=(0,o.useRef)(null);console.log(g),(0,o.useEffect)(()=>{v((0,d.a_)())},[]);let S=async e=>{var n;e.preventDefault();let s=null===(n=e.target.files)||void 0===n?void 0:n[0];if(s){let e;let n=new FileReader;n.onload=async n=>{var s;let o=new Uint8Array(null===(s=n.target)||void 0===s?void 0:s.result),i=p.ij(o,{type:"array"}),a=i.SheetNames[0],r=i.Sheets[a];if(e=p.P6.sheet_to_json(r),b){let n=[];console.log("json data------>",e),Object.keys(e[0]).forEach((e,t)=>{n.push({question_id:t+10,type:"Single line Text Input",randomize:!1,dependency:[],children:[],parameters:{question:e}})});let s={name:x,created_by:b.email,published:!1,questions:n},o=await (0,h.Vb)(s);if(console.log(o),o.success){f.ZP.success("Survey created successfully!"),console.log(o.survey._id);let t=[];e.forEach((e,n)=>{let s=[];Object.keys(e).forEach((t,n)=>{let o={};o.response=e[t],o.question_id=1,o.question=t,o.question_type="Single line Text Input",s.push(o)}),t.push({survey_id:o.survey._id,responses:s})}),k(t)}else f.ZP.error("Failed to create survey!");l(!1),t(e=>!e)}w(e)},n.readAsArrayBuffer(s)}};async function k(e){(await (0,m.Pt)(e)).success?f.ZP.success("Responses saved successfully"):f.ZP.error("Something went wrong while saving responses")}let C=()=>r(!1),D=()=>l(!1);return(0,s.jsxs)("header",{className:"top-0 left-0 z-20 w-full h-16",children:[(0,s.jsxs)("div",{className:"h-16 w-full py-3 px-8 flex justify-between ",children:[(0,s.jsx)("h3",{className:"text-secondary-300 text-2xl",children:"Surveys"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(i.Z,{onClick:()=>r(!0),className:"bg-white font-semibold",children:[" ","+ Create survey"]}),(0,s.jsxs)(i.Z,{onClick:()=>l(!0),className:"bg-white font-semibold",children:[" ","+ Import survey"]})]})]}),(0,s.jsx)(u,{open:n,closeModal:C,children:(0,s.jsxs)("div",{className:"min-w-[662px] h-[337px] flex flex-col",children:[(0,s.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Create surveys"}),(0,s.jsxs)("form",{className:"w-full h-full flex flex-col gap-10 justify-center items-center",children:[(0,s.jsxs)("div",{className:"flex items-center gap-10",children:[(0,s.jsx)("label",{children:"Name"}),(0,s.jsx)("input",{onChange:e=>y(e.target.value),value:x,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]",type:"text",placeholder:"Survey name"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-10",children:[(0,s.jsx)(i.Z,{onClick:C,type:"button",className:"border-secondary-200",children:"Cancel"}),(0,s.jsx)("button",{className:"px-6 py-2 bg-primary-300 text-white rounded-md",type:"button",onClick:()=>j.push("/admin/surveys/create?name=".concat(encodeURIComponent(x))),children:"Create survey"})]})]})]})}),(0,s.jsx)(u,{open:c,closeModal:D,children:(0,s.jsxs)("div",{className:"min-w-[662px] h-[337px] flex flex-col",children:[(0,s.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Import survey"}),(0,s.jsxs)("form",{className:"w-full h-full flex flex-col gap-10 justify-center items-center",children:[(0,s.jsxs)("div",{className:"flex items-center gap-10",children:[(0,s.jsx)("label",{children:"Name"}),(0,s.jsx)("input",{onChange:e=>y(e.target.value),value:x,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]",type:"text",placeholder:"Survey name"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-10",children:[(0,s.jsx)(i.Z,{onClick:D,type:"button",className:"border-secondary-200",children:"Cancel"}),(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{ref:N,type:"file",accept:".xlsx, .xls",onChange:S,className:"hidden"}),(0,s.jsx)("button",{type:"button",onClick:()=>{N.current&&N.current.click()},className:"border text-white bg-primary-300 px-4 py-2 rounded-md text-[14px] font-sem font-semibold",children:"Import questions"})]})]})]})]})})]})},y=n(76965),b=n(66648),v=n(43781),g=n(41942),w=n(16356),j=n(80106),N=n(79005),S=n(69824),k=function(e){let{queryParams:t,setQueryParams:n,updated:i}=e,[r,c]=(0,o.useState)([]),[l,p]=(0,o.useState)(!1),[m,x]=(0,o.useState)(null),[b,k]=(0,o.useState)(!1),[C,D]=(0,o.useState)(null),[M,F]=(0,o.useState)(null),[E,O]=(0,o.useState)(null),[_,A]=(0,o.useState)(!1),[T,P]=(0,o.useState)(1),Z=(0,a.useRouter)();async function W(){(await (0,h.Gn)({id:C,created_by:"rohitchand490@gmail.com"})).success?(R(),k(!1),x(null),f.ZP.success("Survey deleted successfully")):f.ZP.error("Failed to delete survey")}async function I(){(await (0,h.ez)({_id:M,formData:{published:!E,created_by:"rohitchand490@gmail.com"}})).success?(R(),A(!1),F(null),O(null),f.ZP.success("Survey ".concat(E?"Unpublished":"Published"," successfully"))):f.ZP.error("Failed to Publish survey")}async function R(){p(!0);let e=await (0,h.tB)(t);console.log(e),c(e.surveys),P(e.totalPages),p(!1)}(0,o.useEffect)(()=>{R()},[t,i]);let H=e=>{x(t=>t===e?null:e)},U=e=>{O(e.published),F(e._id),A(!0)};return(0,s.jsxs)("div",{className:"w-full px-5 py-5 text-sm",children:[(0,s.jsxs)("div",{className:"grid grid-cols-8 text-white font-semibold bg-blue-500 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,s.jsx)("p",{className:"col-span-2",children:"All surveys"}),(0,s.jsx)("p",{className:"col-span-2",children:"Total responses"}),(0,s.jsx)("p",{className:"col-span-2",children:"Date created"}),(0,s.jsx)("p",{className:"col-span-2",children:"Status"})]}),l&&(0,s.jsx)(j.Z,{className:"h-[40vh] w-full flex justify-center items-center text-primary-300"}),!l&&r&&r.length>0?r.map((e,t)=>(0,s.jsxs)("div",{className:"grid grid-cols-8 px-8 py-[16px] border-l border-r border-b border-secondary-200 w-full bg-white",children:[(0,s.jsx)("p",{onClick:()=>Z.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"col-span-2 cursor-pointer",children:e.name}),(0,s.jsx)("p",{className:"col-span-2 pl-8",children:"0"}),(0,s.jsx)("p",{className:"col-span-2",children:(0,d.p6)(e.createdAt)}),(0,s.jsxs)("div",{className:"col-span-2 flex items-center justify-between w-full relative",children:[(0,s.jsx)(N.Z,{onChange:()=>U(e),checked:e.published,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("button",{onClick:()=>{D(e._id),H(e._id)},children:(0,s.jsx)(v.FQA,{})}),m===e._id&&(0,s.jsxs)("div",{className:"absolute right-0 top-8 h-auto w-48 bg-white shadow-lg border rounded-md py-2 z-10",children:[(0,s.jsxs)("button",{onClick:()=>Z.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(g.ffH,{})," Edit"]}),(0,s.jsxs)("button",{className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(g.BKo,{})," Assign to user"]}),(0,s.jsxs)("button",{onClick:()=>{x(null),k(!0)},className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,s.jsx)(w.F1H,{})," Delete"]})]})]})]})]},t)):!l&&!r&&(0,s.jsx)("p",{className:"w-full h-20 flex justify-center items-center font-semibold text-secondary-300",children:"No surveys"}),!l&&(0,s.jsxs)("div",{className:"flex gap-3 items-center mt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"limit-select",className:"mr-2",children:"Show:"}),(0,s.jsxs)("select",{id:"limit-select",value:t.limit,onChange:e=>{let s=parseInt(e.target.value,10);n({...t,limit:s,page:1})},className:"p-2 border rounded-md",children:[(0,s.jsx)("option",{value:10,children:"10"}),(0,s.jsx)("option",{value:20,children:"20"}),(0,s.jsx)("option",{value:50,children:"50"}),(0,s.jsx)("option",{value:100,children:"100"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("button",{onClick:()=>{t.page>1&&n({...t,page:t.page-1})},disabled:1===t.page,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(S.u1R,{})}),(0,s.jsxs)("span",{children:["Page ",t.page," of ",T]}),(0,s.jsx)("button",{onClick:()=>{t.page<T&&n({...t,page:t.page+1})},disabled:t.page===T,className:"p-2 border rounded-md disabled:opacity-50",children:(0,s.jsx)(S.hjJ,{})})]})]}),(0,s.jsx)(u,{open:_,closeModal:()=>{A(!1),F(null),O(null)},children:(0,s.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,s.jsxs)("h1",{className:"text-xl",children:["Do you want to ",E?"Unpublish":"Publish"," this survey?"]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(y.Z,{onClick:I,className:"w-40",children:E?"Unpublish":"Publish"}),(0,s.jsx)(y.Z,{onClick:()=>{A(!1),F(null),O(null)},className:"w-40",children:"No"})]})]})}),(0,s.jsx)(u,{open:b,closeModal:()=>{k(!1),x(null),D(null)},children:(0,s.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,s.jsx)("h1",{className:"text-xl",children:"Are you sure you want to delete this survey?"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(y.Z,{onClick:W,className:"w-40",children:"Yes"}),(0,s.jsx)(y.Z,{onClick:()=>{k(!1),x(null),D(null)},className:"w-40",children:"No"})]})]})})]})};let C={page:1,limit:10,sortBy:"createdAt",sortOrder:"desc",published:"all",created_by:"rohitchand490@gmail.com",filter:""};var D=function(){let[e,t]=(0,o.useState)(C),[n,i]=(0,o.useState)(""),[a,r]=(0,o.useState)("all"),[c,l]=(0,o.useState)("dateDesc"),[u,d]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{},[e]),(0,s.jsxs)("section",{className:"w-full  bg-[#ECF0FA] h-full",children:[(0,s.jsx)(x,{setUpdated:d}),(0,s.jsx)("div",{className:"p-3 text-sm text-my-gray-200 bg-white mx-5 rounded-xl my-2",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("input",{className:"w-[387px] h-[42.5px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Search Surveys here",value:n,onChange:e=>i(e.target.value)}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsxs)("div",{className:"flex  h-10 items-center space-x-1 text-secondary-300 font-semibold text-[14px] whitespace-nowrap",children:[(0,s.jsx)("p",{children:"Filter By:"}),(0,s.jsx)("div",{className:"rounded-md py-2 px-2 justify-between border border-secondary-200 bg-white",children:(0,s.jsxs)("select",{name:"filterby",className:"w-fit bg-white  focus:outline-none px-2",id:"filterby",value:a,onChange:e=>r(e.target.value),children:[(0,s.jsx)("option",{value:"all",children:"All"}),(0,s.jsx)("option",{value:"published",children:"Published"}),(0,s.jsx)("option",{value:"unpublished",children:"Unpublished"})]})})]}),(0,s.jsxs)("div",{className:"flex h-10 items-center space-x-1 mr-8 text-secondary-300 font-semibold text-[14px] whitespace-nowrap",children:[(0,s.jsx)("p",{className:"",children:"Sort By:"}),(0,s.jsx)("div",{className:"rounded-md py-2 px-2 justify-between border border-secondary-200 bg-white",children:(0,s.jsxs)("select",{name:"sortby",className:"w-fit bg-white focus:outline-none px-2",id:"sortby",value:c,onChange:e=>l(e.target.value),children:[(0,s.jsx)("option",{value:"nameAsc",children:"Name ASC"}),(0,s.jsx)("option",{value:"nameDesc",children:"Name DESC"}),(0,s.jsx)("option",{value:"dateDesc",children:"Date DESC"}),(0,s.jsx)("option",{value:"dateAsc",children:"Date ASC"})]})})]}),(0,s.jsxs)(y.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{t(e=>({...e,filter:n,published:a,sortBy:c.includes("name")?"name":"createdAt",sortOrder:c.includes("Asc")?"asc":"desc",page:1}))},children:[(0,s.jsx)(b.default,{src:"/_next/static/media/Filter.bcc39a0d.png",alt:"filter icon",height:20,width:20}),(0,s.jsx)("p",{children:"Apply filters"})]}),(0,s.jsx)(y.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{i(""),r("all"),l("dateDesc"),t(()=>C)},children:(0,s.jsx)("p",{children:"Clear Filters"})})]})]})}),(0,s.jsx)(k,{updated:u,setQueryParams:e=>t(t=>({...t,...e})),queryParams:e})]})}},80106:function(e,t,n){"use strict";var s=n(57437),o=n(94057);t.Z=function(e){let{className:t}=e;return(0,s.jsx)("div",{className:t,children:(0,s.jsx)(o.Z,{color:"#477BFF"})})}},824:function(e,t,n){"use strict";var s=n(57437);n(2265);var o=n(96164);t.Z=function(e){let{children:t,className:n,...i}=e;return(0,s.jsx)("button",{...i,className:(0,o.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300 hover:text-white hover:bg-primary-300",n),children:t})}},76965:function(e,t,n){"use strict";var s=n(57437);n(2265);var o=n(96164);t.Z=function(e){let{children:t,className:n,onClick:i}=e;return(0,s.jsx)("button",{onClick:i,className:(0,o.m6)("border text-white bg-primary-300 px-4 py-2 rounded-md",n),children:t})}},60152:function(e,t,n){"use strict";n.d(t,{K7:function(){return r},Pt:function(){return i},sD:function(){return a}});var s=n(1633),o=n(38472);let i=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.vx),data:e},n=await o.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},a=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.HA),params:e};return(await o.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},r=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.jC),params:e};return(await o.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},60274:function(e,t,n){"use strict";n.d(t,{Gn:function(){return l},LA:function(){return c},Vb:function(){return i},ez:function(){return a},tB:function(){return r}});var s=n(1633),o=n(38472);let i=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.TK),data:e};return(await o.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},a=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.Dy,"?_id=").concat(e._id),data:e.formData};return(await o.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},r=async e=>{try{let t=e.page||1,n=e.limit||10,i=e.filter||"",a=e.created_by,r=e.sortBy,c=e.sortOrder,l=e.published;"published"===e.published?l=!0:"unpublished"===e.published?l=!1:"all"===e.published&&(l=void 0);let u={method:"GET",url:"".concat(s.M6,"/").concat(s.it,"?filter=").concat(i,"&page=").concat(t,"&limit=").concat(n,"&sortBy=").concat(r,"&sortOrder=").concat(c,"&published=").concat(l,"&created_by=").concat(a)},d=await o.Z.request(u);return console.log(d),d.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let t={method:"GET",url:"".concat(s.M6,"/").concat(s.A5,"?_id=").concat(e._id)};return(await o.Z.request(t)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},l=async e=>{try{let t={method:"POST",url:"".concat(s.M6,"/").concat(s.dt),data:e},n=await o.Z.request(t);return console.log(n),n.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},95650:function(e,t,n){"use strict";n.d(t,{Sg:function(){return a},aF:function(){return i},a_:function(){return r},p6:function(){return o}});let s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function o(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),o=s[t.getMonth()],i=t.getFullYear();return"".concat(n,"-").concat(o,"-").concat(i)}function i(e,t){return e.length>t?e.slice(0,t)+"...":e}function a(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),o=s[t.getMonth()];return"".concat(n," ").concat(o)}function r(){{let e=localStorage.getItem("jwt_token");return e?JSON.parse(atob(e.split(".")[1])):null}}},1633:function(e,t,n){"use strict";n.d(t,{A5:function(){return d},Dy:function(){return u},HA:function(){return m},M6:function(){return s},SR:function(){return i},TK:function(){return l},Tp:function(){return o},Tv:function(){return a},dt:function(){return h},it:function(){return p},jC:function(){return x},jV:function(){return v},q6:function(){return g},rO:function(){return y},rd:function(){return r},tm:function(){return c},vx:function(){return f},x4:function(){return b}});let s="http://localhost:6969",o="api/user/getUser",i="api/user/getAllUsers",a="api/user/addUsers",r="api/user/addMultipleUsers",c="api/chatroom/getAllChatsData",l="api/survey/saveSurvey",u="api/survey/updateSurvey",d="api/survey/getSurvey",h="api/survey/deleteSurvey",p="api/survey/getAllSurveys",f="api/response/saveResponses",m="api/response/getAllSurveyResponses",x="api/response/getAllResponses",y=["Contact Form","Address"],b="api/auth/login",v="api/auth/forgotPassword",g="api/auth/resetPassword"},79005:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(2265);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var i=s.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},s.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=s.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},s.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function c(e,t,n,s,o){return function(e,t,n,s,o){var i=(e-n)/(t-n);if(0===i)return s;if(1===i)return o;for(var a="#",r=1;r<6;r+=2){var c=Math.round((1-i)*parseInt(s.substr(r,2),16)+i*parseInt(o.substr(r,2),16)).toString(16);1===c.length&&(c="0"+c),a+=c}return a}(e,t,n,r(s),r(o))}var l=function(e){function t(t){e.call(this,t);var n=t.height,s=t.width,o=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(s-n,s-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,n=t.R,s=t.h,o=(this.props.checked?this.i:this.o)+e-n;t.N||e===n||this.setState({N:!0});var i=Math.min(this.i,Math.max(this.o,o));i!==s&&this.setState({h:i})},t.prototype.U=function(e){var t=this.state,n=t.h,s=t.N,o=t.B,i=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!s||r<250||i&&n<=a||!i&&n>=a)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.m=function(e){this.L(e.touches[0].clientX)},t.prototype.M=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,i=e.className,a=e.offColor,r=e.onColor,l=e.offHandleColor,u=e.onHandleColor,d=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,m=e.boxShadow,x=e.activeBoxShadow,y=e.height,b=e.width,v=e.borderRadius,g=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&-1===t.indexOf(s)&&(n[s]=e[s]);return n}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,j=w.h,N=w.N,S=w.j,k={height:y,width:b,margin:Math.max(0,(this.t-y)/2),position:"relative",background:c(j,this.i,this.o,a,r),borderRadius:"number"==typeof v?v:y/2,cursor:n?"default":"pointer",WebkitTransition:N?null:"background 0.25s",MozTransition:N?null:"background 0.25s",transition:N?null:"background 0.25s"},C={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"relative",opacity:(j-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},D={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"absolute",opacity:1-(j-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},M={height:this.t,width:this.t,background:c(j,this.i,this.o,l,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+j+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:S?x:m,border:0,WebkitTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},F={height:this.t,width:this.t,opacity:Math.max(2*(1-(j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"};return s.createElement("div",{className:i,style:{position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}},s.createElement("div",{className:"react-switch-bg",style:k,onClick:n?null:this.T,onMouseDown:function(e){return e.preventDefault()}},d&&s.createElement("div",{style:C},d),h&&s.createElement("div",{style:D},h)),s.createElement("div",{className:"react-switch-handle",style:M,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},f&&s.createElement("div",{style:F},f),p&&s.createElement("div",{style:E},p)),s.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(s.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56}}},function(e){e.O(0,[7699,1779,5452,6051,1425,8472,6164,3004,4049,7583,2971,7023,1744],function(){return e(e.s=16133)}),_N_E=e.O()}]);