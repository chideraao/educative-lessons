import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { logOut, profileUpdate } from "../helpers/auth";
import logo from "../logo/Firebase.png";
import { firebaseApp } from "../services/firebase";

function Home() {
  const [displayName, setdisplayName] = useState("");

  const auth = getAuth(firebaseApp);

  // sign out click handler
  var handleClick = () => {
    logOut();
  };

  var handleChange = (e) => {
    setdisplayName(e.target.value);
  };

  var handleUpdateClick = () => {
    profileUpdate(displayName);
    setdisplayName("");
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

      <div className="App-main">
        <div className="display-container">
          <div className="display-input">
            <input
              name="display name"
              type="text"
              placeholder="Enter display name"
              onChange={handleChange}
              value={displayName}
              required
              autoComplete="true"
            />
            <label htmlFor="display name" className="label-name">
              <span className="content-name">Display Name</span>
            </label>
            <button
              title="signout"
              aria-label="signout"
              onClick={handleUpdateClick}
            >
              Update Profile
            </button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Firebase Auth <br />
      </div>
    </div>
  );
}

export default Home;
