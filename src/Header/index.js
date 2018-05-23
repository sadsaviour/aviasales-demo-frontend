import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";

import ArrivalCity from "./ArrivalCity";
import DepartureCity from "./DepartureCity";
import DepartureDate from "./DepartureDate";
import ReturnDate from "./ReturnDate";
import FindTicketsButton from "./FindTicketsButton";
import PassangersOpt from "./PassangersOpt";

const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 32px;

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

function Logo() {
  return (
    <div
      style={{
        "padding-top": "2px",
        "padding-bottom": "8px",
        display: "flex",
        flexflow: "row nowrap",
        "align-items": "center"
      }}
    >
      <img src={logo} alt="Aviasales" />
      <LogoText>aviasales</LogoText>
    </div>
  );
}

export default function Header(props) {
  const search = props.searchPerformed;
  return (
    <StyledHeader>
      {search ? (
        <div className="container">
          <div className="row between-lg">
            <div>
              <Logo />
            </div>
          </div>
          <div className="row middle-xl">
            <div className="col-lg-10">
              <div className="row">
                <DepartureCity
                  city={props.city}
                  updateCity={props.updateCity}
                />
                <ArrivalCity />
                <DepartureDate />
                <ReturnDate />
                <PassangersOpt />
                <div className="hidden-lg hidden-xl" style={{ width: "25%" }}>
                  <FindTicketsButton />
                </div>
              </div>
            </div>
            <div className="col-lg-2 hidden-md hidden-sm hidden-xs">
              <FindTicketsButton />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Logo src={logo} alt="Aviasales" />
              <h1>Поиск дешевых авиабилетов</h1>
              <DepartureCity city={props.city} updateCity={props.updateCity} />
              <ArrivalCity />
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
