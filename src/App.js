// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
};

export default App;
