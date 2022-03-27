import { getAuth } from "firebase/auth";
import React from "react";
import { logOut } from "../helpers/auth";
import { firebaseApp } from "../services/firebase";
import FirebaseLogo from "../logo/Firebase.png";
import { sayHello } from "../helpers/functions";

function Home() {
  const auth = getAuth(firebaseApp);

  // sign out click handler
  var handleClick = () => {
    logOut();
  };

  const handleHelloClick = () => {
    sayHello();
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
        title="say-hello"
        aria-label="say-hello"
        onClick={handleHelloClick}
      >
        Say Hello
      </button>
      <div className="">
        <img src={FirebaseLogo} alt="firebase logo" />
      </div>
    </div>
  );
}

export default Home;
