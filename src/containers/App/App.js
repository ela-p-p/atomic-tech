import React from "react";
import logo from "./logo-peach.png";
import "./App.css";
import Navigation from "../../components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} alt="logo" className="w3-ns w2 mr2" />
        <h1 className="f1-ns f3">Elizabeth Porter</h1>
      </header>
      <section>
        <h2 className='f2-ns f4'>Full Stack Web Developer</h2>
      </section>
    </div>
  );
}

export default App;
