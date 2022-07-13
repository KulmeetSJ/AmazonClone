import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import React from "react";



function App() {
  return (
    <div className="app">
      <h1>Helo ji</h1>
      <BrowserRouter>
        <Link>
          <Route path="/">
            <Home />
          </Route>
        </Link>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <div className="home">Hello World Again!!</div>;
}

export default App;
