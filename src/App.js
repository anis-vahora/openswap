// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
};

export default App;
