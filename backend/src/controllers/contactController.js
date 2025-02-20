const { sendSMSService } = require("../utils/contact/smsServices");
const { initiateCallService } = require("../utils/contact/callService");

// Controller function to send SMS
exports.sendSMS = async (req, res) => {
  const {phone_no,arg} = req.body;

  // Define the payload
  const payload = {
    filetype: 1,
    language: 0,
    credittype: 2,
    senderid: "BHDRPL",
    templateid: 74481,
    ukey: process.env.VOICENSMS_KEY,
    isrefno: true,
    dlttemplateid: "1707173226646916413",
    msisdnlist: [
      {
        phoneno:phone_no,
        arg1:arg
      }
    ]
  };

  try {

    const response = await sendSMSService(payload);

    res.status(200).json({
      success: true,
      data: response,
      message: "SMS sent successfully",
    });
  } catch (error) {
    console.error("Error sending SMS:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send SMS",
      error: error.response?.data || error.message,
    });
  }
};

exports.initiateCall = async (req, res) => {
  const {phone_no1 , phone_no2} = req.body;

  // Define the payload for initiating the call
  // const payload = {
  //   sourcetype: "0",
  //   campaigntype: "4",
  //   filetype: "2",
  //   voicefile: "Test.wav",
  //   ukey: process.env.VOICENSMS_KEY,
  //   serviceno: process.env.SERVICE_NO,
  //   ivrtemplateid: "1",
  //   retryatmpt: "3",
  //   retryduration: "15",
  //   msisdn: [phone_no],
  // };


  try {
    // const response = await initiateCallService(payload);
    const response = await initiateCallService({phone_no1 , phone_no2});
    res.status(200).json({
      success: true,
      data: response,
      message: "Call initiated successfully",
    });
  } catch (error) {
    console.error("Error initiating call:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to initiate call",
      error: error.response?.data || error.message,
    });
  }
};
exports.contactCallback = async(req,res)=>{
  console.log("body from callback ---->",req.body)
  console.log("body from query ---->",req.query)
  return res.status(200).json({
    message:"callback hit successfully"
  })
}
