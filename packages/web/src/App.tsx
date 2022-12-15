import React from "react";
import logo from "./logo.svg";
import Rover from "./assets/images/rover.jpg";
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header
        className="App-header"
        style={{
          backgroundImage: `url('${Rover}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
