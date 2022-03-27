const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// http callable function
exports.helloFromEducative = functions.https.onCall((data, context) => {
  const name = context.auth.token.name || "user";
  // const picture = context.auth.token.picture || null;
  // const email = context.auth.token.email || null;

  return `Hello ${name} from Educative`;
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
