import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
