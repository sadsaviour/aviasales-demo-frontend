import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./normalize.css";
import "./flexboxgrid2.css";

import "./App.css";

import Header from "./Home/Header/index";
import Main from "./Home/Main/index";
import Footer from "./Home/Footer/index";
import SearchHeader from "./Search/Header/index";
import SearchMain from "./Search/Main/index";

function Hello({ match }) {
  return <h1>HEllo</h1>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Header} />
          <Route path="/search" component={SearchHeader} />

          <Route exact={true} path="/" component={Main} />
          <Route path="/search" component={SearchMain} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
