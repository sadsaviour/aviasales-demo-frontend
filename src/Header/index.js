import React, { Component } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import { getDate, getMonth } from "date-fns";

import logo from "./img/logo.svg";
import backIcon from "./img/back-icon.svg";

import ArrivalCity from "./ArrivalCity";
import OriginCity from "./OriginCity";
import FlightDates from "./FlightDates";
import FindTicketsButton from "./FindTicketsButton";
import PassangersNumberSelector from "./PassangersNumberSelector";

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: ${({ searchPerformed }) =>
    searchPerformed ? "10px" : "88px"}};

  @media only screen and (min-width: 768px) {
    padding-bottom: ${({ searchPerformed }) =>
      searchPerformed ? "32px" : "122px"}}

  @media only screen and (min-width: 992px) {
    padding-bottom: ${({ searchPerformed }) =>
      searchPerformed ? "32px" : "254px"}}

  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const LogoText = styled.p`
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;

  color: #ffffff;
`;

const CurrencyButton = styled.div`
  box-sizing: border-box;
  width: 56px;
  height: 28px;

  margin-right: 8px;

  @media only screen and (min-width: 768px) {
    width: 72px;
    height: 36px;
  }

  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;

  padding-top: 6px;
  @media only screen and (min-width: 768px) {
    padding-top: 8px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  font-size: 14px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  text-align: center;

  color: #ffffff;
`;

const FlexContainer = styled.div`
  display: flex;
  flexflow: row nowrap;
  alignitems: center;
`;

const BackLink = styled(Link)`
  text-decoration: none;
`;

const MobileLogo = () => (
  <FlexContainer>
    <img src={logo} alt="Aviasales" />
  </FlexContainer>
);

const MobileLogoActive = () => (
  <BackLink to="/" onClick={() => this.props.setSearchStatus(false)}>
    <img src={backIcon} alt="back" />
  </BackLink>
);

const TabletLogo = () => (
  <FlexContainer>
    <img src={logo} alt="Aviasales" />
    <LogoText>aviasales</LogoText>
  </FlexContainer>
);

const TabletLogoActive = () => (
  <BackLink to="/" onClick={() => this.props.setSearchStatus(false)}>
    <FlexContainer style={{ marginLeft: "8px" }}>
      <img src={logo} alt="Aviasales" />
      <LogoText>aviasales</LogoText>
    </FlexContainer>
  </BackLink>
);

const LandingHeader = styled.h1`
  margin-top: 47px;
  margin-bottom: -16px;

  @media only screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 8px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 216px;
    margin-bottom: 8px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;

  line-height: normal;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }

  text-align: center;

  color: #ffffff;

  line-height: 48px;
`;

const LandingSubHeader = styled.h2`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  margin-top: 0;
  margin-bottom: 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  font-size: 20px;

  @media only screen and (min-width: 992px) {
    font-size: 24px;
  }

  text-align: center;

  color: #ffffff;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: none;
  grid-template-rows: 56px 56px 56px 56px;

  grid-row-gap: 2px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 56px 56px;

    grid-column-gap: 2px;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto 360px auto;
    grid-template-rows: 56px;

    grid-column-gap: 2px;
  }

  width: 100%;
`;

function Logo({ windowSize, setSearchStatus }) {
  return windowSize < 768 ? (
    <div style={{ marginLeft: "6px" }}>
      <Route exact path="/" component={MobileLogo} />
      <Route path="/search" render={MobileLogoActive} />
    </div>
  ) : (
    <div style={{ marginLeft: "6px" }}>
      <Route exact path="/" component={TabletLogo} />
      <Route path="/search" component={TabletLogoActive} />{" "}
    </div>
  );
}

function ShortSearchQuery({
  origin,
  destination,
  departureDate,
  returnDate,
  passengers,
  adults,
  kids,
  infants,
  ...props
}) {
  const monthes = [
    "янв",
    "фев",
    "март",
    "апр",
    "май",
    "июнь",
    "июль",
    "авг",
    "сен",
    "окт",
    "нояб",
    "дек"
  ];

  const Cities = styled.div`
    margin-left: 26px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;

    color: #ffffff;
  `;
  const DatesAndPassangers = styled.div`
  margin-left: 26px
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;

    color: #ffffff;
  `;
  return (
    <div style={{ "flex-grow": "2" }}>
      <Cities>
        {origin.city}
        {" — "}
        {destination.city}
      </Cities>
      <DatesAndPassangers>
        {getDate(departureDate)} {monthes[getMonth(departureDate)]}
        {" — "}
        {getDate(returnDate)} {monthes[getMonth(returnDate)]} ,{" "}
        {passengers.adults + passengers.kids + passengers.infants} пассажир
      </DatesAndPassangers>
    </div>
  );
}

export default class Header extends Component {
  state =
    /* this.props.restoredState
    ? this.props.restoredState
    : */
    {
      origin: { city: "Москва", iataCode: "VKO" },
      destination: { city: "Барселона", iataCode: "BCN" },
      departureDate: null,
      returnDate: null,
      passengers: {
        adults: 1,
        kids: 0,
        infants: 0
      },

      businessClass: false,
      restoredState: this.props.restoredState
    };

  updateOrigin = (city, iataCode) => {
    this.setState({
      origin: { city, iataCode }
    });
  };

  updateDestination = (city, iataCode) => {
    this.setState({
      destination: { city, iataCode }
    });
  };

  swapCities = () => {
    this.setState(prevState => {
      return { origin: prevState.destination, destination: prevState.origin };
    });
  };

  updateDepartureDate = departureDate => {
    this.setState({
      departureDate
    });
  };

  updateReturnDate = returnDate => {
    this.setState({
      returnDate
    });
  };

  render() {
    const {
      windowSize,
      searchPerformed,
      searchString,
      setSearchStatus,
      restoredState,
      ...other
    } = this.props;
    const isSessionFromURL = searchPerformed
      ? false
      : restoredState
        ? true
        : false;
    if (isSessionFromURL) {
      setSearchStatus(true);
      this.setState(restoredState);
    }
    return (
      <Container searchPerformed={searchPerformed}>
        <div className="container">
          <div className="row between-xs middle-xs">
            <Logo windowSize={windowSize} setSearchStatus={setSearchStatus} />
            {searchPerformed &&
              (windowSize < 768 && (
                <ShortSearchQuery
                  origin={this.state.origin}
                  destination={this.state.destination}
                  departureDate={this.state.departureDate}
                  returnDate={this.state.returnDate}
                  passengers={this.state.passengers}
                />
              ))}
            {searchPerformed && <CurrencyButton>RUB</CurrencyButton>}
          </div>

          {!searchPerformed && (
            <div className="row center-xs">
              <LandingHeader>Поиск дешевых авиабилетов</LandingHeader>
            </div>
          )}

          {!searchPerformed && (
            <div className="row center-xs">
              <LandingSubHeader>
                Лучший способ купить авиабилеты дешево
              </LandingSubHeader>
            </div>
          )}

          <div
            className={
              searchPerformed ? "row middle-lg hidden-xs" : "row middle-lg "
            }
            style={
              windowSize > 768 ? { marginTop: "38px" } : { marginTop: "32px" }
            }
          >
            <div
              className={
                searchPerformed
                  ? "col-xs-12 col-lg-10"
                  : "col-xs-12 col-lg-10 col-lg-offset-1"
              }
            >
              <SearchContainer>
                <OriginCity
                  origin={this.state.origin}
                  updateOrigin={this.updateOrigin}
                  swapCitiesCallback={this.swapCitiesCallback}
                />
                <ArrivalCity
                  destination={this.state.destination}
                  updateDestination={this.updateDestination}
                />
                <FlightDates
                  departureDate={this.state.departureDate}
                  returnDate={this.state.returnDate}
                  updateDepartureDate={this.updateDepartureDate}
                  updateReturnDate={this.updateReturnDate}
                />
                <PassangersNumberSelector
                  searchPerformed={searchPerformed}
                  passengers={this.state.passengers}
                  businessClass={this.state.businessClass}
                  updateAppState={f => this.setState(f)}
                />
                {searchPerformed &&
                  windowSize < 992 && (
                    <FindTicketsButton
                      searchString={searchString}
                      searchPerformed={searchPerformed}
                      setSearchStatus={setSearchStatus}
                      origin={this.state.origin}
                      destination={this.state.destination}
                      departureDate={this.state.departureDate}
                      returnDate={this.state.returnDate}
                      passengers={this.state.passengers}
                      businessClass={this.state.businessClass}
                      updateAppState={f => this.setState(f)}
                    />
                  )}
              </SearchContainer>
            </div>
            {searchPerformed &&
              windowSize > 992 && (
                <div className="col-lg-2">
                  <FindTicketsButton
                    searchString={searchString}
                    searchPerformed={searchPerformed}
                    setSearchStatus={setSearchStatus}
                    origin={this.state.origin}
                    destination={this.state.destination}
                    departureDate={this.state.departureDate}
                    returnDate={this.state.returnDate}
                    passengers={this.state.passengers}
                    businessClass={this.state.businessClass}
                    updateAppState={f => this.setState(f)}
                  />
                </div>
              )}
          </div>
          {!searchPerformed && (
            <div className="row center-xs">
              <div className="col-xs-12 ">
                <FindTicketsButton
                  searchString={searchString}
                  searchPerformed={searchPerformed}
                  setSearchStatus={setSearchStatus}
                  origin={this.state.origin}
                  destination={this.state.destination}
                  departureDate={this.state.departureDate}
                  returnDate={this.state.returnDate}
                  passengers={this.state.passengers}
                  businessClass={this.state.businessClass}
                  updateAppState={f => this.setState(f)}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    );
  }
}
