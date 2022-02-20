import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";
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
  setDoc(
    docsRef,
    {
      task: "Learn K8s",
      difficulty: deleteField(),
    },
    { merge: true }
  )
    .then(() => {
      setInput({ task: "", difficulty: "easy" });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
