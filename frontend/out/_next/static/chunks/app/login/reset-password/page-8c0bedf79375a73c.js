(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3955],{98666:function(e,r,t){Promise.resolve().then(t.bind(t,93381))},93381:function(e,r,t){"use strict";t.r(r);var n=t(57437),s=t(2265),a=t(16463),u=t(88726),o=t(34755);let i=()=>{let e=(0,a.useRouter)(),r=(0,a.useSearchParams)().get("token"),[t,i]=(0,s.useState)(""),[c,l]=(0,s.useState)("");return(0,s.useEffect)(()=>{r||(console.error("Token is missing"),alert("Token is missing"))},[r]),(0,n.jsxs)("div",{className:"flex items-center justify-center min-h-screen bg-white",children:[(0,n.jsx)(u.x7,{position:"top-center",reverseOrder:!1}),(0,n.jsxs)("div",{className:"relative bg-blue-50 rounded-lg shadow-lg p-10 w-full max-w-md",children:[(0,n.jsx)("h2",{className:"text-center text-xl font-semibold text-orange-500 mb-6",children:"Reset Password"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700",children:"New Password"}),(0,n.jsx)("input",{type:"password",value:t,onChange:e=>i(e.target.value),className:"w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700",children:"Confirm Password"}),(0,n.jsx)("input",{type:"password",value:c,onChange:e=>l(e.target.value),className:"w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200",required:!0})]}),(0,n.jsx)("button",{onClick:()=>{if(!t||!c){u.ZP.error("Please fill in all fields");return}if(t!==c){u.ZP.error("Passwords do not match");return}u.ZP.promise((0,o.c0)({token:r,new_password:t}),{loading:"Resetting password...",success:"Password reset successfully",error:"Failed to reset password"}),e.push("/login")},className:"w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600",children:"Reset Password"})]})]})]})};r.default=()=>(0,n.jsx)(s.Suspense,{children:(0,n.jsx)(i,{})})},34755:function(e,r,t){"use strict";t.d(r,{c0:function(){return i},cW:function(){return u},gF:function(){return o},pH:function(){return a}});var n=t(1633),s=t(38472);let a=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.x4),data:e};return(await s.Z.request(r)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}},u=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.r1),data:e};return(await s.Z.request(r)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}},o=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.jV),data:e},t=await s.Z.request(r);if(!t.data.success)throw Error(t.data.message||"Failed to send email.");return t.data}catch(e){if(e.response)throw Error(e.response.data.message||"Something went wrong");throw Error("Network error. Please try again.")}},i=async e=>{try{let r={method:"POST",url:"".concat(n.M6,"/").concat(n.q6),data:e};return(await s.Z.request(r)).data}catch(e){if(e.response)return{success:!1,message:e.response.data.message||"Something went wrong",error:e.response.data};return{success:!1,message:"Network error. Please try again.",error:e.message}}}},1633:function(e,r,t){"use strict";t.d(r,{A5:function(){return v},Dy:function(){return w},EK:function(){return c},HA:function(){return S},M6:function(){return n},ND:function(){return U},Ny:function(){return E},Pn:function(){return p},SR:function(){return a},TK:function(){return y},Tp:function(){return s},Tv:function(){return u},UY:function(){return V},VH:function(){return K},VJ:function(){return k},Yn:function(){return g},d1:function(){return F},dt:function(){return x},ht:function(){return f},it:function(){return b},jC:function(){return N},jV:function(){return C},mW:function(){return M},nM:function(){return Z},pX:function(){return m},q6:function(){return R},qJ:function(){return h},ql:function(){return O},r1:function(){return T},rO:function(){return j},rd:function(){return o},sC:function(){return i},sI:function(){return q},tm:function(){return l},tt:function(){return d},vx:function(){return P},we:function(){return D},x4:function(){return A},xD:function(){return _}});let n="https://survey-3uf0.onrender.com",s="api/user/getUser",a="api/user/getAllUsers",u="api/user/addUsers",o="api/user/addMultipleUsers",i="api/user/updateUser",c="api/user/updateUsers",l="api/chatroom/getAllChatsData",d="api/user/getAllKaryakarta",p="api/user/getKaryakarta",f="api/user/createKaryakarta",g="api/user/updateKaryakarta",m="api/user/getUsersByAcList",h="api/user/updateMultipleKaryakarta",y="api/survey/saveSurvey",w="api/survey/updateSurvey",v="api/survey/getSurvey",x="api/survey/deleteSurvey",b="api/survey/getAllSurveys",P="api/response/saveResponses",S="api/response/getAllSurveyResponses",N="api/response/getAllResponses",k="api/response/getSurveyResponseStats",j=["Contact Form","Address"],q="api/dashboard",A="api/auth/login",C="api/auth/forgotPassword",R="api/auth/resetPassword",T="api/auth/adminLogin",E="api/role/allRoles",M="api/role/roles",O="api/role/create",U="api/role/update",K="api/role/delete",Z="api/todo/create",_="api/todo/todo",D="api/todo/todos",F="api/todo/update",V="api/todo/delete"}},function(e){e.O(0,[8472,3004,2971,7023,1744],function(){return e(e.s=98666)}),_N_E=e.O()}]);