import React from 'react';

//import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";

import './index.css';
import App from './App';


import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

//createRoot(document.getElementById('root')).render(
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>, document.getElementById('root')
);


