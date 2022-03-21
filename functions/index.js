const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getDoc = functions.https.onRequest((request, response) => {
  admin.database().ref("/tasks").get().then((snapshot) => {
    response.send(snapshot.val());
  }).catch((error) => {
    console.log(error.message);
  });
});
