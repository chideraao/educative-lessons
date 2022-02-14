import { collection, doc, getFirestore } from "firebase/firestore";

const firestore = getFirestore();

const usersRef = collection(firestore, "users");

const docsRef = doc(firestore, "users/test@educative.io/messages");
