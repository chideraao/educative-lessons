import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firebaseApp } from "../services/firebase";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const auth = getAuth(firebaseApp);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-body">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>Fill in the form below to sign in to your account.</p>
        <div className="email-input">
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="password-input">
          <input
            name="password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
          <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="btn">
          {error ? <p className="login-error">{error}</p> : null}
          <button title="Login" aria-label="Login" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
