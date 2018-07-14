import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./normalize.css";
import "./flexboxgrid2.css";

import { flightsData } from "./SearchResults/data";

import favicon from "./assets/aviasales.png";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";

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

function findIataCode(city) {
  if (city !== "") {
    const iataCode = airports.find(a => a.name === "Бангкок").iataCode;
    return iataCode ? iataCode : "";
  } else {
    return "";
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: { city: "Москва", iataCode: "VKO" },
      destination: { city: "Барселона", iataCode: "BCN" },
      departureDate: null,
      returnDate: null,
      adults: 1,
      kids: 0,
      infants: 0,
      businessClass: false,
      searchPerformed: false,
      stateIsDefault: true,

      windowSize: window.innerWidth,

      flightsData,
      flightsDataToDisplay: flightsData,

      multyCarriersFilter: true
    };
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

  updateDepartureDate = date => {
    this.setState({
      departureDate: date
    });
  };

  updateReturnDate = date => {
    this.setState({
      returnDate: date
    });
  };

  updateAppState = f => this.setState(f);

  setSearchStatus = flag => {
    this.setState({
      searchPerformed: flag
    });
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowSize: window.innerWidth });
  };

  restoreStateFromURL(props) {
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
      adults: Number(restoredParams.adults),
      kids: Number(restoredParams.kids ? restoredParams.kids : 0),
      infants: Number(restoredParams.infants ? restoredParams.infants : 0),
      stateIsDefault: false,
      searchPerformed: true
    };

    this.setState(restoredState);
  }

  filterMonoCarriersFlights() {
    const filteredFlights = this.state.flightsData.filter(
      f => typeof f.carrier === "string"
    );
    this.setState({ flightsDataToDisplay: filteredFlights });
  }

  filterMultiCarriersFlights() {
    const filteredFlights = this.state.flightsData.filter(
      f =>
        typeof f.carrier === "string" ||
        Object.prototype.toString.call(f.carrier) === "[object Array]"
    );
    this.setState({ flightsDataToDisplay: filteredFlights });
  }

  handleCarriersFilterChange = event => {
    event.target.checked
      ? this.filterMultiCarriersFlights()
      : this.filterMonoCarriersFlights();
    this.setState(prevState => ({
      multyCarriersFilter: !prevState.multyCarriersFilter
    }));
    console.log("event", event.target.checked);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Дешевые авиабилеты онлайн, цены. Поиск билетов на самолет и
              сравнение цен — Aviasales.ru
            </title>
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,500,bold"
              rel="stylesheet"
            />
            <link rel="shortcut icon" type="image/png" href={favicon} />
          </Helmet>
          <Route
            exact
            path="/"
            render={() => (
              <Header
                updateAppState={this.updateAppState}
                origin={this.state.origin}
                destination={this.state.destination}
                departureDate={this.state.departureDate}
                returnDate={this.state.returnDate}
                updateOrigin={this.updateOrigin}
                updateDestination={this.updateDestination}
                updateDepartureDate={this.updateDepartureDate}
                updateReturnDate={this.updateReturnDate}
                adults={this.state.adults}
                kids={this.state.kids}
                infants={this.state.infants}
                businessClass={this.state.businessClass}
                searchPerformed={false}
                windowSize={this.state.windowSize}
                swapCitiesCallback={this.swapCities}
                searchString={this.state.searchString}
              />
            )}
          />
          <Route
            path="/search/:id"
            render={props =>
              this.state.stateIsDefault ? (
                this.restoreStateFromURL(props) || (
                  <Header
                    origin={this.state.origin}
                    destination={this.state.destination}
                    departureDate={this.state.departureDate}
                    returnDate={this.state.returnDate}
                    adults={this.state.adults}
                    kids={this.state.kids}
                    infants={this.state.infants}
                    businessClass={this.state.businessClass}
                    updateAppState={this.updateAppState}
                    updateOrigin={this.updateOrigin}
                    updateDestination={this.updateDestination}
                    updateDepartureDate={this.updateDepartureDate}
                    updateReturnDate={this.updateReturnDate}
                    searchPerformed={this.state.searchPerformed}
                    windowSize={this.state.windowSize}
                    swapCitiesCallback={this.swapCities}
                    searchString={this.state.searchString}
                  />
                )
              ) : (
                <Header
                  origin={this.state.origin}
                  destination={this.state.destination}
                  departureDate={this.state.departureDate}
                  returnDate={this.state.returnDate}
                  adults={this.state.adults}
                  kids={this.state.kids}
                  infants={this.state.infants}
                  businessClass={this.state.businessClass}
                  updateAppState={this.updateAppState}
                  updateOrigin={this.updateOrigin}
                  updateDestination={this.updateDestination}
                  updateDepartureDate={this.updateDepartureDate}
                  updateReturnDate={this.updateReturnDate}
                  searchPerformed={this.state.searchPerformed}
                  windowSize={this.state.windowSize}
                  swapCitiesCallback={this.swapCities}
                  searchString={this.state.searchString}
                />
              )
            }
          />
          <Route
            exact={true}
            path="/"
            render={() => <Landing windowSize={this.state.windowSize} />}
          />
          <Route
            path="/search"
            render={props => (
              <SearchResults
                flightsData={this.state.flightsDataToDisplay}
                multyCarriersFilter={this.state.multyCarriersFilter}
                handleCarriersFilterChange={this.handleCarriersFilterChange}
              />
            )}
          />
          <Footer windowSize={this.state.windowSize} />
        </div>
      </Router>
    );
  }
}
