import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import logo from "./img/logo.svg";
import backIcon from "./img/back-icon.svg";

import ArrivalCity from "./ArrivalCity";
import DepartureCity from "./DepartureCity";
import DepartureDate from "./DepartureDate";
import ReturnDate from "./ReturnDate";
import FindTicketsButton from "./FindTicketsButton";
import PassangersOpt from "./PassangersOpt";

const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

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

const Delimener = styled.div`
  min-width: ${props => (props.width ? props.width : "2px")};
  max-width: ${props => (props.width ? props.width : "2px")};
`;

const SearchRow = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media only screen and (min-width: 576px) {
    flex-flow: row wrap;
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row wrap;
  }
  @media only screen and (min-width: 992px) {
    flex-flow: row nowrap;
  }
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
      "align-items": "center"
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
      "align-items": "center"
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
        "align-items": "center"
      }}
    >
      <img src={logo} alt="Aviasales" />
      <LogoText>aviasales</LogoText>
    </div>
  </BackLink>
);

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
  const windowSize = props.width;
  return (
    windowSize < 768 && (
      <div style={{ "flex-grow": "2" }}>
        <Cities>
          {props.origin} — {props.destination}
        </Cities>
        <DatesAndPassangers>
          {props.departureDate} — {props.arrivalDate}, {props.passengersN}{" "}
          passengers
        </DatesAndPassangers>
      </div>
    )
  );
}

export default function Header(props) {
  const search = props.searchPerformed;
  return (
    <StyledHeader>
      {search ? (
        <div className="container">
          <div
            className="container "
            style={
              props.width > 768
                ? { "margin-bottom": "38px" }
                : { "margin-bottom": "0" }
            }
          >
            <div
              className="row middle-xs middle-sm"
              style={{
                "justify-content": "space-between"
              }}
            >
              <Logo width={props.width} />
              <ShortSearchQuery
                width={props.width}
                origin={props.origin}
                destination={props.destination}
                departureDate={props.departureDate}
                arrivalDate={props.arrivalDate}
                passengersN={props.passengersN}
              />

              <CurrencyButton>RUB</CurrencyButton>
            </div>
          </div>
          <div
            className="row middle-xl middle-lg hidden-xs hidden-sm"
            style={{ "margin-bottom": "38px" }}
          >
            <div className="col-lg-10 col-xl-10">
              <SearchRow>
                <DepartureCity
                  city={props.origin}
                  updateCity={props.updateCity}
                  swapCitiesCallback={props.swapCitiesCallback}
                />
                <Delimener className="hidden-xs hidden-sm" />
                <ArrivalCity city={props.destination} />
                <Delimener className="hidden-xs hidden-sm hidden-md" />
                <DepartureDate />
                <Delimener />
                <ReturnDate />
                <Delimener className="hidden-xs hidden-sm" />
                <PassangersOpt />
                <Delimener className="hidden-lg hidden-xl hidden-xs hidden-sm" />
                <FindTicketsButton className="hidden-lg hidden-xl" />
              </SearchRow>
            </div>
            <div className="col-xl-2 col-lg-2 hidden-xs hidden-sm hidden-md">
              <FindTicketsButton />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="col-xs-12">
            <div className="row">
              <Logo width={props.width} />
            </div>
            <div className="row">
              <h1>Поиск дешевых авиабилетов</h1>
            </div>
            <div className="row">
              <DepartureCity
                origin={props.origin}
                updateOrigin={props.updateOrigin}
                swapCitiesCallback={props.swapCitiesCallback}
              />
              <ArrivalCity
                destination={props.destination}
                updateDestination={props.updateDestination}
              />
              <DepartureDate />
              <ReturnDate />
              <PassangersOpt />
              <FindTicketsButton />
            </div>
          </div>
        </div>
      )}
    </StyledHeader>
  );
}
