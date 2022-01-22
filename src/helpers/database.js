import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "../services/firebase";

export const db = getDatabase(firebaseApp);

// basic write operation
export const addNewTask = (task, difficulty, setInput) => {
  set(ref(db, "tasks"), {
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
