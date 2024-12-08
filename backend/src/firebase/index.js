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
      android: {
        priority: "high", // or "normal"
      },
      token: token,
    });
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

async function sendNotificationToMultipleTokens(tokens, message) {
  if (!tokens || tokens.length === 0) {
    console.warn("No tokens provided to send notification");
    return;
  }

  console.log("TOKENS ARE ===>", tokens);

  try {
    // Use sendMulticast for sending to multiple tokens more efficiently
    const response = await firebase.messaging().sendEachForMulticast({
      notification: {
        title: "Survey",
        body: message,
      },
      tokens: tokens,
    });

    // Log detailed results of the multicast
    console.log(
      `Successfully sent notification to ${response.successCount} devices`,
    );

    // Log any devices that failed
    if (response.failureCount > 0) {
      response.responses.forEach((resp, index) => {
        if (!resp.success) {
          console.error(
            `Failed to send to token ${tokens[index]}: ${resp.error}`,
          );
        }
      });
    }

    return response;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error; // Re-throw to allow caller to handle the error
  }
}

module.exports = {
  firebase,
  sendNotification,
  sendNotificationToMultipleTokens,
};
