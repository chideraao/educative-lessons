import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { handleAuthState } from "./helpers/auth";

// Higher order component for public pages
function PrivateRoute({ authenticated, children }) {
  return authenticated ? children : <Navigate to="/login" />;
}

// Higher order component for public pages
function PublicRoute({ authenticated, children }) {
  return !authenticated ? children : <Navigate to="/" />;
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    handleAuthState(setAuthenticated);

    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute authenticated={authenticated}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute authenticated={authenticated}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute authenticated={authenticated}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            authenticated={authenticated}
            path="/*"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
