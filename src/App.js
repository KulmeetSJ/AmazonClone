import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import React from "react";

import Manatee from './Manatee';


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Link>
          <Route path="/">
            <Manatee />
          </Route>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
