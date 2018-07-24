import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import debounce from "lodash/debounce";
import qs from "qs";

import "./normalize.css";
import "./flexboxgrid2.css";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

const airports = [
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
];

export default class App extends Component {
  state = {
    searchPerformed: false,
    windowSize: window.innerWidth
  };

  setSearchStatus = searchPerformed => {
    this.setState({
      searchPerformed
    });
  };

  componentWillMount() {
    window.addEventListener(
      "resize",
      debounce(this.handleWindowSizeChange, 300)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      debounce(this.handleWindowSizeChange, 300)
    );
  }

  handleWindowSizeChange = () => {
    this.setState({ windowSize: window.innerWidth });
  };

  restoreStateFromURL = props => {
    const queryString = props.match.params.id;

    const {
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      businessClass
    } = qs.parse(queryString);

    const restoredState = {
      origin,
      destination,
      departureDate:
        departureDate === "" ? new Date() : new Date(departureDate),
      returnDate: returnDate === "" ? new Date() : new Date(returnDate),
      businessClass,
      passengers: {
        adults: parseInt(passengers.adults),
        kids: parseInt(passengers.kids),
        infants: parseInt(passengers.infants)
      }
    };
    return restoredState;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>
              Дешевые авиабилеты онлайн, цены. Поиск билетов на самолет и
              сравнение цен — Aviasales.ru
            </title>
          </Helmet>
          <Route
            exact
            path="/"
            render={() => (
              <Header
                updateAppState={this.setState}
                searchPerformed={this.state.searchPerformed}
                setSearchStatus={this.setSearchStatus}
                windowSize={this.state.windowSize}
              />
            )}
          />
          <Route
            path="/search/:id"
            render={props => (
              <Header
                setSearchStatus={this.setSearchStatus}
                restoredState={this.restoreStateFromURL(props)}
                updateAppState={this.setState}
                searchPerformed={this.state.searchPerformed}
                windowSize={this.state.windowSize}
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={() => <Landing windowSize={this.state.windowSize} />}
          />
          <Route path="/search" component={SearchResults} />
          <Footer windowSize={this.state.windowSize} />
        </div>
      </Router>
    );
  }
}
