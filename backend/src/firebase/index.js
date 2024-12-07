const firebase = require("firebase-admin");

const serviceAccount = require("./serviceAccountKeys.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

async function sendNotification(token, message) {
  try {
    const response = await firebase.messaging().send({
      notification: {
        title: "Survey",
        body: message,
      },
      token: token,
    });
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

module.exports = { firebase, sendNotification };
