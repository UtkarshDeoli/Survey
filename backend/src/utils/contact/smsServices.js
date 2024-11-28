const axios = require("axios");
exports.sendSMSService = async(payload)=>{
  try{
    const response = await axios.post(
        "https://api.voicensms.in/SMSAPI/webresources/CreateSMSCampaignPost",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      return response.data;
  }
  catch(error){
    console.log('error is --->',error);
    throw error;
  }
}