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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "Moscow" };
  }

  updateCity = value => {
    this.setState({ city: value });
    console.log(this.state);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <Route
            exact={true}
            path="/"
            render={() => (
              <Header city={this.state.city} updateCity={this.updateCity} />
            )}
            city={this.state.city}
          />
          <Route path="/search" component={SearchHeader} />

          <Route exact={true} path="/" component={Main} />
          <Route path="/search" component={SearchMain} />

          <Footer />
        </div>
      </Router>
    );
  }
}
