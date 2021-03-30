import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
