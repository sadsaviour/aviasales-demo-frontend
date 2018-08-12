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
        adults: parseInt(passengers.adults, 10),
        kids: parseInt(passengers.kids, 10),
        infants: parseInt(passengers.infants, 10)
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
