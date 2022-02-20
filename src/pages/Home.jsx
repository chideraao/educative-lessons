import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import AddTask from "../components/AddTask";
import { logOut } from "../helpers/auth";
import { getData } from "../helpers/database";
import { deleteDocument } from "../helpers/firestore";
import { firebaseApp } from "../services/firebase";

function Home() {
  const auth = getAuth(firebaseApp);

  // sign out click handler
  var handleClick = () => {
    logOut();
  };

  // delete click handler
  var handleDelete = () => {
    deleteDocument();
  };

  useEffect(() => {
    getData();
  }, []);

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
      <button
        title="delete document"
        aria-label="signout"
        onClick={handleDelete}
      >
        Delete Document
      </button>
      <AddTask />
    </div>
  );
}

export default Home;
