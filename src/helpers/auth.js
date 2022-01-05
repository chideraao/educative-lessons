import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../services/firebase";

const auth = getAuth(firebaseApp);

// sign out function
export const logOut = () => {
  signOut(auth);
};

// sign up function
export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // ...
    })
    .catch((err) => {
      if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        alert("The password is too weak");
      }
      console.log(err.code);
      alert(err.code);
    });
};

// sign in function
export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log(userCredential.user);
      // ...
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.code);
    });
};

// sign in function with Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      const userrr = result.user;
      console.log(userrr);
      // ...
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.code);
    });
};

// sign in function with Github
export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const userrr = result.user;
      console.log(userrr);
      // ...
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.code);
    });
};
