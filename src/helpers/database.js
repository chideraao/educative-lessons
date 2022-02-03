import {
  equalTo,
  getDatabase,
  limitToFirst,
  limitToLast,
  onValue,
  orderByChild,
  orderByKey,
  orderByValue,
  push,
  query,
  ref,
  update,
} from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);

console.log(typeof query);

// reference to database path
const tasksRef = ref(db, "tasks");

const filteredTasksRef = query(
  tasksRef,
  orderByChild("difficulty"),
  equalTo("easy"),
  limitToLast(2)
);

// basic write operation
export const addNewTask = (task, difficulty, setInput) => {
  push(tasksRef, {
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

export const getData = () => {
  onValue(filteredTasksRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
