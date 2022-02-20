import { doc, getFirestore, setDoc, deleteDoc } from "firebase/firestore";
import { firebaseApp } from "../services/firebase";

const firestore = getFirestore(firebaseApp);

const docsRef = doc(firestore, "users/test@educative.io");

export const deleteDocument = () => {
  deleteDoc(docsRef)
    .then(console.log("document deleted"))
    .catch((err) => {
      console.log(err.message);
    });
};

export const documentWrite = (task, difficulty, setInput) => {
  setDoc(docsRef, {
    task,
    difficulty,
  })
    .then(() => {
      setInput({ task: "", difficulty: "easy" });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
