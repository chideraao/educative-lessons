import {
  doc,
  getFirestore,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { firebaseApp } from "../services/firebase";

const firestore = getFirestore(firebaseApp);

const docRef = doc(firestore, "users/test@educative.io");
const colRef = collection(firestore, "users/test@educative.io/tasks");

const queryRef = query(
  colRef,
  where("difficulty", "==", "hard"),
  orderBy("task", "desc"),
  limit(2)
);

export const retrieveDocs = async () => {
  const colSnapshot = await getDocs(queryRef);

  colSnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

export const docListener = () => {
  onSnapshot(docRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      // console.log(docSnapshot.data());
    }
  });
};

export const retrieveDoc = async () => {
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const docData = docSnapshot.data();
    // console.log(docData);
  }
};

export const deleteDocument = () => {
  deleteDoc(docRef)
    .then(console.log("document deleted"))
    .catch((err) => {
      console.log(err.message);
    });
};

export const documentWrite = (task, difficulty, setInput) => {
  addDoc(colRef, {
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
