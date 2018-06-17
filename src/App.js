import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./normalize.css";
import "./flexboxgrid2.css";

import "./App.css";

import Header from "./Header/index";
import Main from "./Landing/index";
import Footer from "./Footer/index";
import SearchMain from "./Search/Main/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: { city: "Москва", iataCode: "VKO" },
      destination: { city: "", iataCode: "" },
      departureDate: "24 feb",
      arrivalDate: "3 mar",
      passengersNumber: 1,

      searchString: "blah",

      searchPerformed: false,

      width: window.innerWidth,

      airports: [
        { name: "Бангкок", country: "Таиланд", iataCode: "BKK" },
        { name: "Барселона", country: "Испания", iataCode: "BCN" },
        { name: "Баландино", country: "Челябинск", iataCode: "CEK" },
        { name: "Бандаранаике", country: "Коломбо", iataCode: "CMB" },
        { name: "Батуми", country: "Грузия", iataCode: "CMB" },
        { name: "Денпасар Бали", country: "Индонезия", iataCode: "DPS" },
        { name: "Франкфурт-на-Майне", country: "Германия", iataCode: "FRA" },
        { name: "Манила", country: "Филипинны", iataCode: "MNL" },
        { name: "Мале", country: "Мальдивы", iataCode: "MLE" },
        { name: "Мюнхен", country: "Германия", iataCode: "MUC" },
        { name: "Минеральные Воды", country: "Россия", iataCode: "MRV" },
        { name: "Мальта", country: "Мальта", iataCode: "MLA" },
        { name: "Москва", country: "Россия", iataCode: "VKO" }
      ]
    };
  }

  findIataCode(city) {
    if (city !== "") {
      const iataCode = this.state.airports.find(a => a.name === "Бангкок")
        .iataCode;
      if (iataCode !== undefined) {
        return iataCode;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

  updateOrigin = (city, iataCode) => {
    this.setState({
      origin: { city: city, iataCode: iataCode }
    });
  };
  updateDestination = (city, iataCode) => {
    this.setState({
      destination: { city: city, iataCode: iataCode }
    });
  };

  swapCities = () => {
    this.setState(prevState => {
      return { origin: prevState.destination, destination: prevState.origin };
    });
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
            href="https://fonts.googleapis.com/css?family=Roboto:400,500"
            rel="stylesheet"
          />
          <Route
            exact
            path="/"
            render={() => (
              <Header
                origin={this.state.origin}
                destination={this.state.destination}
                updateOrigin={this.updateOrigin}
                updateDestination={this.updateDestination}
                searchPerformed={false}
                width={this.state.width}
                swapCitiesCallback={this.swapCities}
                searchString={this.state.searchString}
              />
            )}
          />
          <Route
            path="/search/:id"
            render={props => (
              <Header
                {...props}
                origin={this.state.origin}
                destination={this.state.destination}
                departureDate={this.state.departureDate}
                arrivalDate={this.state.arrivalDate}
                updateOrigin={this.updateOrigin}
                updateDestination={this.updateDestination}
                searchPerformed={true}
                width={this.state.width}
                swapCitiesCallback={this.swapCities}
                searchString={this.state.searchString}
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={() => <Main width={this.state.width} />}
          />
          <Route path="/search" component={SearchMain} />
          <Footer />
        </div>
      </Router>
    );
  }
}
