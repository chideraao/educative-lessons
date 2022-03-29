const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// auth background trigger
exports.userSignup = functions.auth.user().onCreate((user) => {
  console.log("user created", user.displayName, user.uid);
  return null;
});

// http request function
exports.getTasks = functions.https.onRequest((request, response) => {
  admin
    .database()
    .ref("/tasks")
    .get()
    .then((snapshot) => {
      response.send(snapshot.val());
    })
    .catch((error) => {
      console.log(error.message);
      response.status(500).send(error.message);
    });
});
