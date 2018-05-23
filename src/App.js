import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./normalize.css";
import "./flexboxgrid2.css";

import "./App.css";

import Header from "./Header/index";
import Main from "./Home/Main/index";
import Footer from "./Home/Footer/index";
import SearchMain from "./Search/Main/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Moscow",
      searchPerformed: true
    };
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
            exact
            path="/"
            render={() => (
              <Header
                city={this.state.city}
                updateCity={this.updateCity}
                searchPerformed={false}
              />
            )}
            city={this.state.city}
          />
          <Route
            path="/search"
            render={() => (
              <Header
                city={this.state.city}
                updateCity={this.updateCity}
                searchPerformed={true}
              />
            )}
            city={this.state.city}
          />
          <Route exact={true} path="/" component={Main} />
          <Route path="/search" component={SearchMain} />
          <Footer />
        </div>
      </Router>
    );
  }
}
