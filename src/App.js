import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";


function App() {
  return (
    <div className="app">
      <Router>
        <Link>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Link>
      </Router>
    </div>
  );
}


export default App;