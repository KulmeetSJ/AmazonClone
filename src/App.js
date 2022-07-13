import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';



function App() {
  return (

    <div className="app">
      <h1>Hello World!</h1>
      <Router>
        <Route path="/" element={<Home />} />

      </Router>

    </div>

  );
}

function Home() {
  return (

    <div className="home">
      <h1>Hello World Again!!</h1>
      <Router>
        <Switch to="/App">  App     </Switch>
      </Router>
    </div>
  );
}

export default App;
