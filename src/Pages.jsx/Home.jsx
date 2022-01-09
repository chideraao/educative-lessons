import { getAuth } from "firebase/auth";
import React from "react";
import { logOut, userDelete } from "../helpers/auth";
import logo from "../logo/Firebase.png";
import { firebaseApp } from "../services/firebase";

function Home() {
  const auth = getAuth(firebaseApp);

  // sign out click handler
  var handleClick = () => {
    logOut();
  };

  var handleDeleteClick = () => {
    userDelete();
  };

  return (
    <div className="home">
      <p>
        Currently signed in as {auth.currentUser.email}
        <br /> Display name:{" "}
        {auth.currentUser.displayName
          ? auth.currentUser.displayName
          : "Update profile"}
      </p>
      <button title="signout" aria-label="signout" onClick={handleClick}>
        Signout
      </button>
      <button
        title="delete account"
        aria-label="delete account"
        onClick={handleDeleteClick}
      >
        Delete account
      </button>

      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Firebase Auth <br />
      </div>
    </div>
  );
}

export default Home;
