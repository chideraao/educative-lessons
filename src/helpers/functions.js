import { getFunctions, httpsCallable } from "firebase/functions";
import { firebaseApp } from "../services/firebase";

// initialise functions
const functions = getFunctions(firebaseApp);

export const sayHello = () => {
  const helloFromEducative = httpsCallable(functions, "helloFromEducative");

  helloFromEducative()
    .then((result) => {
      alert(result.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
