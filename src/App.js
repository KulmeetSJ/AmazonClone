import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React from "react";

import Manatee from '../Manatee/Manatee';


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Manatee />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
