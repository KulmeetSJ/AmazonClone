import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from "react";

import Navbar from "./navbar";
/*
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";

*/

function App() {
  return (
    <div className="App">
      <h1>Hello ji</h1>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navbar />} />


      </Routes>
    </div>
  );
}

function Home() {
  return (

    <div className="home">
      <h1>Hello World Again!!</h1>
      <nav>
        <Link to="/App">App</Link>
      </nav>
    </div>

  );
}
/*
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
*/

export default App;
