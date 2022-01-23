import { getDatabase, onValue, push, ref } from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);

// reference to database path
const tasksRef = ref(db, "tasks");

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

export const getDataOnce = () => {
  onValue(tasksRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
