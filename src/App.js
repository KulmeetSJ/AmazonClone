import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



function App() {
  return (

    <div className="app">
      <h1>Hello World!</h1>
      <Router>
        <Link>
          <Route path="/" element={<Home />} />
        </Link>
      </Router>

    </div>

  );
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
