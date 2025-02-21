const admin = require("firebase-admin");
const serviceAccount = require("../firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (token, message) => {
  await admin.messaging().send({
    token,
    notification: { title: "Booking Update", body: message },
  });
};

module.exports = { sendNotification };
