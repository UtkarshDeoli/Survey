(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{3265:function(e,s,t){Promise.resolve().then(t.bind(t,7993))},7993:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return w}});var r=t(7437),n=t(2265),l=t(824),a=t(6463),c=t(7583),i=t.n(c);let o={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:9999}};i().setAppElement("body");var d=function(e){let{children:s,open:t,closeModal:n}=e;return(0,r.jsx)(i(),{isOpen:t,onRequestClose:n,style:o,contentLabel:"Example Modal",children:s})},u=function(){let[e,s]=(0,n.useState)(!1),[t,c]=(0,n.useState)(""),i=(0,a.useRouter)(),o=()=>s(!1);return(0,r.jsxs)("header",{className:"sticky top-0 left-0 z-20 w-full h-16 border-2",children:[(0,r.jsxs)("div",{className:"bg-secondary-100 h-full w-full px-8 py-3 flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-secondary-300",children:"Surveys"}),(0,r.jsx)("div",{className:" flex gap-2",children:(0,r.jsx)(l.Z,{onClick:()=>s(!0),className:"bg-white font-semibold",children:" + Create survey"})})]}),(0,r.jsx)(d,{open:e,closeModal:o,children:(0,r.jsxs)("div",{className:"min-w-[662px] h-[337px] flex flex-col",children:[(0,r.jsx)("div",{className:"relative z-10 text-primary-300 px-8 py-4 font-semibold border-b border-secondary-300 w-full shadow-md",children:"Create surveys"}),(0,r.jsxs)("form",{className:"w-full h-full flex flex-col gap-10 justify-center items-center",children:[(0,r.jsxs)("div",{className:"flex items-center gap-10",children:[(0,r.jsx)("label",{children:"Name"}),(0,r.jsx)("input",{onChange:e=>c(e.target.value),value:t,className:"flex items-center border border-secondary-200 rounded-md px-8 py-3 w-[185px] h-[35px]",type:"text",placeholder:"name"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-10",children:[(0,r.jsx)(l.Z,{onClick:o,type:"button",className:"border-secondary-200",children:"Cancel"}),(0,r.jsx)("button",{className:"px-6 py-2 bg-primary-300 text-white rounded-md",type:"button",onClick:()=>i.push("/admin/surveys/create?name=".concat(encodeURIComponent(t))),children:"Create survey"})]})]})]})})]})},h=t(6965),p=t(6648),x=t(3781),m=t(274),y=t(1942),f=t(6356),b=t(8726),j=t(106),v=t(9005),g=function(e){let{queryParams:s}=e,[t,l]=(0,n.useState)([]),[c,i]=(0,n.useState)(!1),[o,u]=(0,n.useState)(null),[p,g]=(0,n.useState)(!1),[N,w]=(0,n.useState)(null),[S,C]=(0,n.useState)(null),[_,A]=(0,n.useState)(null),[D,k]=(0,n.useState)(!1),Z=(0,a.useRouter)();async function P(){(await (0,m.Gn)({id:N,created_by:"rohitchand490@gmail.com"})).success?(M(),g(!1),u(null),b.ZP.success("Survey deleted successfully")):b.ZP.error("Failed to delete survey")}async function F(){(await (0,m.ez)({_id:S,formData:{published:!_,created_by:"rohitchand490@gmail.com"}})).success?(M(),k(!1),C(null),A(null),b.ZP.success("Survey ".concat(_?"Unpublished":"Published"," successfully"))):b.ZP.error("Failed to Publish survey")}async function M(){i(!0),l((await (0,m.tB)(s)).survey),i(!1)}(0,n.useEffect)(()=>{M()},[s]);let E=e=>{u(s=>s===e?null:e)},O=e=>{A(e.published),C(e._id),k(!0)};return(0,r.jsxs)("div",{className:"w-full px-8 py-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-8 text-secondary-300 font-semibold bg-secondary-100 px-8 py-[16px] rounded-tl-2xl rounded-tr-2xl border border-secondary-200",children:[(0,r.jsx)("p",{className:"col-span-2",children:"All surveys"}),(0,r.jsx)("p",{className:"col-span-2",children:"Total responses"}),(0,r.jsx)("p",{className:"col-span-2",children:"Date created"}),(0,r.jsx)("p",{className:"col-span-2",children:"Status"})]}),c&&(0,r.jsx)(j.Z,{className:"h-[40vh] w-full flex justify-center items-center text-primary-300"}),!c&&t&&t.length>0?t.map((e,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-8 px-8 py-[16px] border border-secondary-200 w-full",children:[(0,r.jsx)("p",{onClick:()=>Z.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"col-span-2 cursor-pointer underline",children:e.name}),(0,r.jsx)("p",{className:"col-span-2 pl-8",children:"0"}),(0,r.jsx)("p",{className:"col-span-2",children:function(e){let s=new Date(e),t=String(s.getDate()).padStart(2,"0"),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],n=s.getFullYear();return"".concat(t,"-").concat(r,"-").concat(n)}(e.createdAt)}),(0,r.jsxs)("div",{className:"col-span-2 flex items-center justify-between w-full relative",children:[(0,r.jsx)(v.Z,{onChange:()=>O(e),checked:e.published,onColor:"#4CAF50",offColor:"#DDDDDD",uncheckedIcon:!1,checkedIcon:!1,className:"transition-switch duration-300 ease-in-out"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("button",{onClick:()=>{w(e._id),E(e._id)},children:(0,r.jsx)(x.FQA,{})}),o===e._id&&(0,r.jsxs)("div",{className:"absolute right-0 top-8 h-auto w-48 bg-white shadow-lg border rounded-md py-2 z-10",children:[(0,r.jsxs)("button",{onClick:()=>Z.push("/admin/surveys/edit?survey_id=".concat(e._id)),className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,r.jsx)(y.ffH,{})," Edit"]}),(0,r.jsxs)("button",{className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,r.jsx)(y.BKo,{})," Assign to user"]}),(0,r.jsxs)("button",{onClick:()=>{u(null),g(!0)},className:"flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer w-full",children:[(0,r.jsx)(f.F1H,{})," Delete"]})]})]})]})]},s)):!c&&!t&&(0,r.jsx)("p",{className:"w-full h-20 flex justify-center items-center font-semibold text-secondary-300",children:"No surveys"}),(0,r.jsx)(d,{open:D,closeModal:()=>{k(!1),C(null),A(null)},children:(0,r.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,r.jsxs)("h1",{className:"text-xl",children:["Do you want to ",_?"Unpublish":"Publish"," this survey?"]}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(h.Z,{onClick:F,className:"w-40",children:_?"Unpublish":"Publish"}),(0,r.jsx)(h.Z,{onClick:()=>{k(!1),C(null),A(null)},className:"w-40",children:"No"})]})]})}),(0,r.jsx)(d,{open:p,closeModal:()=>{g(!1),u(null),w(null)},children:(0,r.jsxs)("div",{className:"flex flex-col h-[40vh] w-[40vw] justify-center items-center gap-10 ",children:[(0,r.jsx)("h1",{className:"text-xl",children:"Are you sure you want to delete this survey?"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(h.Z,{onClick:P,className:"w-40",children:"Yes"}),(0,r.jsx)(h.Z,{onClick:()=>{g(!1),u(null),w(null)},className:"w-40",children:"No"})]})]})})]})};let N={page:1,limit:10,sortBy:"createdAt",sortOrder:"desc",published:"all",created_by:"rohitchand490@gmail.com",filter:""};var w=function(){let[e,s]=(0,n.useState)(N),[t,l]=(0,n.useState)(""),[a,c]=(0,n.useState)("all"),[i,o]=(0,n.useState)("dateDesc");return(0,n.useEffect)(()=>{},[e]),(0,r.jsxs)("section",{className:"w-full",children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"bg-white border-b border-gray-200 z-10",children:(0,r.jsxs)("div",{className:"flex justify-between px-8 py-3",children:[(0,r.jsx)("input",{className:"w-[387px] h-[41px] px-4 py-[10px] border border-secondary-200 rounded-md focus:outline-none text-[14px] text-secondary-300",placeholder:"Search surveys here",value:t,onChange:e=>l(e.target.value)}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)("div",{className:"flex h-10 items-center space-x-5 text-secondary-300 font-semibold",children:[(0,r.jsx)("p",{className:"",children:"Filter By:"}),(0,r.jsx)("div",{className:"rounded-md py-1 px-2 justify-between border border-secondary-200",children:(0,r.jsxs)("select",{name:"filterby",className:"w-40 bg-my-gray-100",id:"filterby",value:a,onChange:e=>c(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All"}),(0,r.jsx)("option",{value:"published",children:"Published"}),(0,r.jsx)("option",{value:"unpublished",children:"Unpublished"})]})})]}),(0,r.jsxs)("div",{className:"flex h-10 items-center space-x-5 mr-8 text-secondary-300 font-semibold",children:[(0,r.jsx)("p",{className:"",children:"Sort By:"}),(0,r.jsx)("div",{className:"rounded-md py-1 px-2 justify-between border border-secondary-200",children:(0,r.jsxs)("select",{name:"sortby",className:"w-40 bg-my-gray-100",id:"sortby",value:i,onChange:e=>o(e.target.value),children:[(0,r.jsx)("option",{value:"nameAsc",children:"Name ASC"}),(0,r.jsx)("option",{value:"nameDesc",children:"Name DESC"}),(0,r.jsx)("option",{value:"dateDesc",children:"Date DESC"}),(0,r.jsx)("option",{value:"dateAsc",children:"Date ASC"})]})})]}),(0,r.jsxs)(h.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{s(e=>({...e,filter:t,published:a,sortBy:i.includes("name")?"name":"createdAt",sortOrder:i.includes("Asc")?"asc":"desc",page:1}))},children:[(0,r.jsx)(p.default,{src:"/_next/static/media/Filter.bcc39a0d.png",alt:"filter icon",height:24,width:24}),(0,r.jsx)("p",{children:"Apply filters"})]}),(0,r.jsx)(h.Z,{className:"text-[14px] font-semibold flex gap-2 items-center justify-center",onClick:()=>{l(""),c("all"),o("dateDesc"),s(()=>N)},children:(0,r.jsx)("p",{children:"Clear Filters"})})]})]})}),(0,r.jsx)(g,{queryParams:e})]})}},106:function(e,s,t){"use strict";var r=t(7437),n=t(4057);s.Z=function(e){let{className:s}=e;return(0,r.jsx)("div",{className:s,children:(0,r.jsx)(n.Z,{color:"#477BFF"})})}},824:function(e,s,t){"use strict";var r=t(7437);t(2265);var n=t(6164);s.Z=function(e){let{children:s,className:t,...l}=e;return(0,r.jsx)("button",{...l,className:(0,n.m6)("border border-primary-300 px-4 py-2 rounded-md text-primary-300",t),children:s})}},6965:function(e,s,t){"use strict";var r=t(7437);t(2265);var n=t(6164);s.Z=function(e){let{children:s,className:t,onClick:l}=e;return(0,r.jsx)("button",{onClick:l,className:(0,n.m6)("border text-white bg-primary-300 px-4 py-2 rounded-md",t),children:s})}},274:function(e,s,t){"use strict";t.d(s,{Gn:function(){return o},LA:function(){return i},Vb:function(){return l},ez:function(){return a},tB:function(){return c}});var r=t(1633),n=t(8472);let l=async e=>{try{let s={method:"POST",url:"".concat(r.M6,"/").concat(r.TK),data:e};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},a=async e=>{try{let s={method:"POST",url:"".concat(r.M6,"/").concat(r.Dy,"?_id=").concat(e._id),data:e.formData};return(await n.Z.request(s)).data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},c=async e=>{try{let s=e.page||1,t=e.limit||10,l=e.filter||"",a=e.created_by,c=e.sortBy,i=e.sortOrder,o=e.published;"published"===e.published?o=!0:"unpublished"===e.published?o=!1:"all"===e.published&&(o=void 0);let d={method:"GET",url:"".concat(r.M6,"/").concat(r.it,"?filter=").concat(l,"&page=").concat(s,"&limit=").concat(t,"&sortBy=").concat(c,"&sortOrder=").concat(i,"&published=").concat(o,"&created_by=").concat(a)},u=await n.Z.request(d);return console.log(u),u.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},i=async e=>{try{let s={method:"GET",url:"".concat(r.M6,"/").concat(r.A5,"?_id=").concat(e._id)},t=await n.Z.request(s);return console.log(t),t.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}},o=async e=>{try{let s={method:"POST",url:"".concat(r.M6,"/").concat(r.dt),data:e},t=await n.Z.request(s);return console.log(t),t.data}catch(e){return{success:!1,message:"Something Went Wrong",error:e}}}},1633:function(e,s,t){"use strict";t.d(s,{A5:function(){return o},Dy:function(){return i},M6:function(){return r},SR:function(){return l},TK:function(){return c},Tp:function(){return n},Tv:function(){return a},dt:function(){return d},it:function(){return u},rO:function(){return h}});let r="https://survey-3uf0.onrender.com",n="api/user/getUser",l="api/user/getAllUsers",a="api/user/addUsers",c="api/survey/saveSurvey",i="api/survey/updateSurvey",o="api/survey/getSurvey",d="api/survey/deleteSurvey",u="api/survey/getAllSurveys",h=["Contact Form","Address"]}},function(e){e.O(0,[699,51,779,164,236,726,173,755,971,23,744],function(){return e(e.s=3265)}),_N_E=e.O()}]);