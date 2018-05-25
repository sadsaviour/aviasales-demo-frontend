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
      origin: "Moscow",
      destination: "Barcelona",
      departureDate: "24 feb",
      arrivalDate: "3 mar",
      passengersN: 1,
      searchPerformed: true,
      width: window.innerWidth
    };
  }

  updateCity = value => {
    this.setState({ city: value });
    console.log(this.state);
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
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
                origin={this.state.origin}
                updateCity={this.updateCity}
                searchPerformed={false}
                width={this.state.width}
              />
            )}
            city={this.state.city}
          />
          <Route
            path="/search"
            render={() => (
              <Header
                origin={this.state.origin}
                destination={this.state.destination}
                departureDate={this.state.departureDate}
                arrivalDate={this.state.arrivalDate}
                passengersN={this.state.passengersN}
                updateCity={this.updateCity}
                searchPerformed={true}
                width={this.state.width}
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
