import { getAuth, signOut } from "firebase/auth";
import React from "react";
import logo from "../logo/Firebase.png";
import { firebaseApp } from "../services/firebase";

function Home() {
  const auth = getAuth(firebaseApp);

  var handleClick = () => {
    signOut(auth);
  };

  return (
    <div className="home">
      <p>Currently signed in as {auth.currentUser.email}</p>
      <button title="signout" aria-label="signout" onClick={handleClick}>
        Signout
      </button>
      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Firebase Auth <br />
      </div>
    </div>
  );
}

export default Home;
