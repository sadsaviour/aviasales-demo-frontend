import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import debounce from "lodash/debounce";

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
    /** Pattern is following:
     * departure Iata, departure date (with 0), departure month (start from 1 and with 0),
     * destination Iata, return date, return month,
     * bussines b letter, adults (one digit), kids, adults   */
    const urlPattern = /([A-Z]{3})(\d{2})(\d{2})([A-Z]{3})(\d{2})?(\d{2})?([b])?(\d)?(\d)?(\d)?/;
    const restoredParams = {
      originIataCode: urlPattern.exec(props.match.params.id)[1],
      departureDate: urlPattern.exec(props.match.params.id)[2],
      departureMonth: urlPattern.exec(props.match.params.id)[3],
      destinationIataCode: urlPattern.exec(props.match.params.id)[4],
      returnDate: urlPattern.exec(props.match.params.id)[5],
      returnMonth: urlPattern.exec(props.match.params.id)[6],
      businessClass: urlPattern.exec(props.match.params.id)[7],
      adults: urlPattern.exec(props.match.params.id)[8],
      kids: urlPattern.exec(props.match.params.id)[9],
      infants: urlPattern.exec(props.match.params.id)[10]
    };

    const restoredState = {
      origin: {
        iataCode: restoredParams.originIataCode,
        city: airports.find(a => a.iataCode === restoredParams.originIataCode)
          .name
      },
      destination: {
        iataCode: restoredParams.destinationIataCode,
        city: airports.find(
          a => a.iataCode === restoredParams.destinationIataCode
        ).name
      },
      departureDate: new Date(
        2018,
        restoredParams.departureMonth - 1,
        restoredParams.departureDate,
        12,
        0,
        0
      ),
      returnDate: new Date(
        2018,
        restoredParams.returnMonth - 1,
        restoredParams.returnDate,
        12,
        0,
        0
      ),
      businessClass: restoredParams.businessClass ? true : false,
      passengers: {
        adults: Number(restoredParams.adults),
        kids: Number(restoredParams.kids ? restoredParams.kids : 0),
        infants: Number(restoredParams.infants ? restoredParams.infants : 0)
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
                searchString={this.state.searchString}
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
                searchString={this.state.searchString}
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={() => <Landing windowSize={this.state.windowSize} />}
          />
          <Route path="/search" render={props => <SearchResults />} />
          <Footer windowSize={this.state.windowSize} />
        </div>
      </Router>
    );
  }
}
