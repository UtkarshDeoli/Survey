const axios = require("axios");
require('dotenv').config();
// exports.initiateCallService = async(payload)=>{
//   try{
//     const response = await axios.post(
//         "https://api.voicensms.in/OBDAPI/webresources/CreateOBDCampaignPost",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response)
//       return response.data;
//   }
//   catch(error){
//     console.log('error is --->',error);
//     throw error;
//   }
// }  


exports.initiateCallService = async ({phone_no1 , phone_no2}) => {
  try{
    console.log('phone_no1--->',phone_no1);
    console.log('phone_no2--->',phone_no2);
    const response = await axios.get(
      `http://agent.drivesu.in/iconnect/?authkey=${process.env.AUTH_KEY}&custid=${process.env.CUST_ID}&passwd=${process.env.PASSWORD}&phone1=${phone_no2}&phone2=${phone_no1}&param2=${process.env.PARAM2}`
      );
      console.log(response)
      return response.data;
  }
  catch(error){
    console.log('error is --->',error);
    throw error;
  }
}