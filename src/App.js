import React, { Component } from "react";
import "./normalize.css";
import "./flexboxgrid2.css";

import "./App.css";

import Header from "./Header/index.js";
import Main from "./Main/index.js";
import Footer from "./Footer/index.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
