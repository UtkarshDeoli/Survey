(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{20808:function(e,r,t){Promise.resolve().then(t.bind(t,71193))},71193:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(57437),s=t(2265),a=t(16463),o=t(34755),u=t(7583),i=t.n(u),c=t(88726);function l(){let[e,r]=(0,s.useState)(""),[t,u]=(0,s.useState)(""),[l,d]=(0,s.useState)(!1),p=(0,a.useRouter)();(0,s.useEffect)(()=>{localStorage.getItem("jwt_token")&&p.push("/admin/surveys")},[p]);let m=async e=>{console.log("Forgot Password for Email:",e);let r=(0,o.gF)({email:e});c.ZP.promise(r,{loading:"Sending email to reset password...",success:"Email sent successfully.",error:e=>e.message||"Failed to send email."}),d(!1)};return(0,n.jsxs)("div",{className:"flex items-center justify-center min-h-screen bg-white",children:[(0,n.jsx)(c.x7,{position:"top-center",reverseOrder:!1}),(0,n.jsxs)(i(),{isOpen:l,onRequestClose:()=>d(!1),contentLabel:"Forgot Password",className:"bg-white p-8 rounded-lg shadow-lg max-w-md w-full",overlayClassName:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:[(0,n.jsx)("h2",{className:"text-xl mb-4 text-center font-semibold",children:"Forgot Password"}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 mb-2",children:"Enter your email"}),(0,n.jsx)("input",{type:"email",value:e,onChange:e=>r(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)("button",{className:"py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600",onClick:()=>m(e),children:"Submit"}),(0,n.jsx)("button",{className:"py-2 px-4 ml-2 bg-gray-300 text-black rounded-md hover:bg-gray-400",onClick:()=>d(!1),children:"Cancel"})]})]}),(0,n.jsxs)("div",{id:"main",className:"relative bg-blue-50 rounded-lg shadow-lg p-10 w-full max-w-md",children:[(0,n.jsx)("h2",{className:"text-center text-xl font-semibold text-orange-500 mb-6",children:"Survey Login"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700",children:"Email"}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>r(e.target.value),className:"w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700",children:"Password"}),(0,n.jsx)("input",{type:"password",value:t,onChange:e=>u(e.target.value),className:"w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsx)("div",{className:"flex justify-between items-center mb-6",children:(0,n.jsx)("a",{onClick:()=>d(!0),className:"cursor-pointer text-sm text-blue-600 hover:underline",children:"Forgot your password?"})}),(0,n.jsx)("button",{onClick:()=>{(0,o.pH)({email:e,password:t}).then(e=>{localStorage.setItem("jwt_token",e.token),e.success?(c.ZP.success(e.message),p.push("/admin/surveys")):(console.log(e),c.ZP.error(e.message))})},className:"w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600",children:"Login"})]}),(0,n.jsxs)("div",{className:"text-center mt-4",children:[(0,n.jsx)("span",{children:"Don't have an account? "}),(0,n.jsx)("a",{onClick:()=>p.push("/signup"),className:"text-blue-600 cursor-pointer hover:underline",children:"Register Now"})]})]})]})}i().setAppElement("#main")},34755:function(e,r,t){"use strict";t.d(r,{c0:function(){return u},gF:function(){return o},pH:function(){return a}});var n=t(1633),s=t(38472);let a=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.x4),data:e};return(await s.Z.request(r)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}},o=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.jV),data:e},t=await s.Z.request(r);if(!t.data.success)throw Error(t.data.message||"Failed to send email.");return t.data}catch(e){if(e.response)throw Error(e.response.data.message||"Something went wrong");throw Error("Network error. Please try again.")}},u=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.q6),data:e};return(await s.Z.request(r)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}}},1633:function(e,r,t){"use strict";t.d(r,{A5:function(){return x},Dy:function(){return y},EK:function(){return i},HA:function(){return N},M6:function(){return n},ND:function(){return _},Ny:function(){return F},O1:function(){return w},Pn:function(){return d},SR:function(){return a},TK:function(){return h},Tp:function(){return s},Tv:function(){return o},UN:function(){return g},UY:function(){return D},VH:function(){return K},VJ:function(){return S},Yn:function(){return m},d1:function(){return Z},dt:function(){return b},ht:function(){return p},it:function(){return v},jC:function(){return k},jV:function(){return A},mW:function(){return O},n$:function(){return P},nM:function(){return M},q6:function(){return q},qJ:function(){return f},ql:function(){return R},rO:function(){return C},rd:function(){return u},tm:function(){return c},tt:function(){return l},vx:function(){return j},we:function(){return T},x4:function(){return E},xD:function(){return U}});let n="https://survey-3uf0.onrender.com",s="api/user/getUser",a="api/user/getAllUsers",o="api/user/addUsers",u="api/user/addMultipleUsers",i="api/user/updateUsers",c="api/chatroom/getAllChatsData",l="api/user/getAllKaryakarta",d="api/user/getKaryakarta",p="api/user/createKaryakarta",m="api/user/updateKaryakarta",g="api/user/getPannaPramukh",f="api/user/updateMultipleKaryakarta",h="api/survey/saveSurvey",y="api/survey/updateSurvey",x="api/survey/getSurvey",b="api/survey/deleteSurvey",v="api/survey/getAllSurveys",w="api/survey/getSurveysByAcAndBooth",j="api/response/saveResponses",N="api/response/getAllSurveyResponses",k="api/response/getAllResponses",S="api/response/getSurveyResponseStats",P="api/response/getGroupedByFamily",C=["Contact Form","Address"],E="api/auth/login",A="api/auth/forgotPassword",q="api/auth/resetPassword",F="api/role/allRoles",O="api/role/roles",R="api/role/create",_="api/role/update",K="api/role/delete",M="api/todo/create",U="api/todo/todo",T="api/todo/todos",Z="api/todo/update",D="api/todo/delete"}},function(e){e.O(0,[8472,3004,7583,2971,7023,1744],function(){return e(e.s=20808)}),_N_E=e.O()}]);