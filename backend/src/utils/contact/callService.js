const axios = require("axios");
exports.initiateCallService = async(payload)=>{
  try{
    const response = await axios.post(
        "https://api.voicensms.in/OBDAPI/webresources/CreateOBDCampaignPost",
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