import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import { getDate, getMonth } from "date-fns";

import logo from "./img/logo.svg";
import backIcon from "./img/back-icon.svg";

import ArrivalCity from "./ArrivalCity";
import DepartureCity from "./DepartureCity";
import FlightDates from "./FlightDates";
import FindTicketsButton from "./FindTicketsButton";
import PassangersOpt from "./PassangersOpt";

const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (min-width: 768px) {
    padding-bottom: ${props => (props.searchPerformed ? "32px" : "122px")}}

  @media only screen and (min-width: 992px) {
    padding-bottom: ${props => (props.searchPerformed ? "32px" : "254px")}}

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

const BackLink = styled(Link)`
  text-decoration: none;
`;

const MobileLogo = () => (
  <div
    style={{
      display: "flex",
      flexflow: "row nowrap",
      alignItems: "center"
    }}
  >
    <img src={logo} alt="Aviasales" />
  </div>
);

const MobileLogoActive = () => (
  <BackLink to="/">
    <img src={backIcon} alt="back" />
  </BackLink>
);

const TabletLogo = () => (
  <div
    style={{
      display: "flex",
      flexflow: "row nowrap",
      alignItems: "center"
    }}
  >
    <img src={logo} alt="Aviasales" />
    <LogoText>aviasales</LogoText>
  </div>
);

const TabletLogoActive = () => (
  <BackLink to="/">
    <div
      style={{
        display: "flex",
        flexflow: "row nowrap",
        alignItems: "center"
      }}
    >
      <img src={logo} alt="Aviasales" />
      <LogoText>aviasales</LogoText>
    </div>
  </BackLink>
);

const LandingHeader = styled.h1`
  margin-top: 47px;

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

function Logo(props) {
  const windowSize = props.width;
  return windowSize < 768 ? (
    <div>
      <Route exact path="/" component={MobileLogo} />
      <Route path="/search" component={MobileLogoActive} />
    </div>
  ) : (
    <div>
      <Route exact path="/" component={TabletLogo} />
      <Route path="/search" component={TabletLogoActive} />{" "}
    </div>
  );
}

function ShortSearchQuery(props) {
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
        {props.origin.city} — {props.destination.city}
      </Cities>
      <DatesAndPassangers>
        {getDate(props.departureDate)} {monthes[getMonth(props.departureDate)]}{" "}
        — {getDate(props.returnDate)} {monthes[getMonth(props.returnDate)]} ,{" "}
        {props.adults + props.kids + props.infants} пассажир
      </DatesAndPassangers>
    </div>
  );
}

export default function Header(props) {
  return (
    <StyledHeader searchPerformed={props.searchPerformed}>
      <div className="container">
        <div className="col-xs-12">
          <div className="row between-xs middle-xs">
            <Logo width={props.width} />
            {props.searchPerformed &&
              (props.width < 768 && (
                <ShortSearchQuery
                  width={props.width}
                  origin={props.origin}
                  destination={props.destination}
                  departureDate={props.departureDate}
                  returnDate={props.returnDate}
                  adults={props.adults}
                  kids={props.kids}
                  infants={props.infants}
                />
              ))}
            {props.searchPerformed && <CurrencyButton>RUB</CurrencyButton>}
          </div>

          {!props.searchPerformed && (
            <div className="row center-xs">
              <LandingHeader>Поиск дешевых авиабилетов</LandingHeader>
            </div>
          )}

          {!props.searchPerformed && (
            <div className="row center-xs">
              <LandingSubHeader>
                Лучший способ купить авиабилеты дешево
              </LandingSubHeader>
            </div>
          )}

          <div
            className="row middle-lg hidden-xs"
            style={
              props.width > 768 ? { marginTop: "38px" } : { marginTop: "32px" }
            }
          >
            <div
              className={
                props.searchPerformed
                  ? "col-xs-12 col-lg-10"
                  : "col-xs-12 col-lg-10 col-lg-offset-1"
              }
            >
              <SearchContainer>
                <DepartureCity
                  origin={props.origin}
                  updateOrigin={props.updateOrigin}
                  swapCitiesCallback={props.swapCitiesCallback}
                />
                <ArrivalCity
                  destination={props.destination}
                  updateDestination={props.updateDestination}
                />
                <FlightDates
                  updateDepartureDate={props.updateDepartureDate}
                  updateReturnDate={props.updateReturnDate}
                />
                <PassangersOpt
                  origin={props.origin}
                  searchPerformed={props.searchPerformed}
                  adults={props.adults}
                  kids={props.kids}
                  infants={props.infants}
                  businessClass={props.businessClass}
                  updateAppState={props.updateAppState}
                />
                {props.searchPerformed &&
                  props.width < 992 && (
                    <FindTicketsButton
                      searchString={props.searchString}
                      searchPerformed={props.searchPerformed}
                      origin={props.origin}
                      destination={props.destination}
                      departureDate={props.departureDate}
                      returnDate={props.returnDate}
                      adults={props.adults}
                      kids={props.kids}
                      infants={props.infants}
                      businessClass={props.businessClass}
                      updateAppState={props.updateAppState}
                    />
                  )}
              </SearchContainer>
            </div>
            {props.searchPerformed &&
              props.width > 992 && (
                <div className="col-lg-2">
                  <FindTicketsButton
                    searchString={props.searchString}
                    searchPerformed={props.searchPerformed}
                    origin={props.origin}
                    destination={props.destination}
                    departureDate={props.departureDate}
                    returnDate={props.returnDate}
                    adults={props.adults}
                    kids={props.kids}
                    infants={props.infants}
                    businessClass={props.businessClass}
                    updateAppState={props.updateAppState}
                  />
                </div>
              )}
          </div>
          {!props.searchPerformed && (
            <div className="row center-xs">
              <FindTicketsButton
                searchString={props.searchString}
                searchPerformed={props.searchPerformed}
                origin={props.origin}
                destination={props.destination}
                departureDate={props.departureDate}
                returnDate={props.returnDate}
                adults={props.adults}
                kids={props.kids}
                infants={props.infants}
                businessClass={props.businessClass}
                updateAppState={props.updateAppState}
              />
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}
