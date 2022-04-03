const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// function responds with "Firebase course on Educative"
exports.helloUser = functions.https.onRequest((request, response) => {
  const { name, email } = functions.config().user;

  response.send(`Hello ${name}! Your email is ${email}`);
});

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
