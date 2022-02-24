import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebaseApp } from "../services/firebase";

const storage = getStorage(firebaseApp);

// reference to educative directory
const educativeRef = ref(storage, "images/logo.png");

export const fileUpload = (image) => {
  const metadata = {
    contentType: "image/png",
  };

  uploadBytes(educativeRef, image, metadata)
    .then((snapshot) => {
      alert("File uploaded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
