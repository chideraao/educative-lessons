import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import AddTask from "../components/AddTask";
import { logOut } from "../helpers/auth";
import { fileDownload } from "../helpers/storage";
import { firebaseApp } from "../services/firebase";

function Home() {
  const auth = getAuth(firebaseApp);
  const [URL, setURL] = useState("");

  // sign out click handler
  var handleClick = () => {
    logOut();
  };

  // delete click handler
  var showImage = () => {
    fileDownload(setURL);
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
      </button>{" "}
      <button title="show image" aria-label="show-image" onClick={showImage}>
        Show Image
      </button>
      {URL ? <img src={URL} alt="from storage bucket" /> : ""}
      <AddTask />
    </div>
  );
}

export default Home;
