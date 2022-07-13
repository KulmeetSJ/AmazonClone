//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import React from "react";



function App() {


  return <div className="app">Hello World!</div>;




}

function Home() {
  return (

    <div className="home">
      <h1>Hello World Again!!</h1>
      <Router>
        <Link to="/app">  App  </Link>
      </Router>
    </div>
  );
}

export default App;
