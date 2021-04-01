import { Component } from "react";
//import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import FullArticle from "./components/FullArticle.js";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/fullArticle/:id" component={FullArticle} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
