import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import AddTask from "../components/AddTask";
import { logOut } from "../helpers/auth";
import {
  deleteDocument,
  docListener,
  retrieveDoc,
  retrieveDocs,
} from "../helpers/firestore";
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
    retrieveDoc();
    retrieveDocs();
    docListener();
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
