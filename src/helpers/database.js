import { getDatabase } from "firebase/database";
import { firebaseApp } from "../services/firebase";

const db = getDatabase(firebaseApp);
