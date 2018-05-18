import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";

import ArrivalCity from "./ArrivalCity";
import DepartureCity from "./DepartureCity";
import FlightDates from "./FlightDates";
import FindTicketsButton from "./FindTicketsButton";
import PassangersOpt from "./PassangersOpt";

const StyledHeader = styled.header`
  padding-bottom: 20px;

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

const Logo = styled.img`
  width: 40px;
  display: flex;
`;

export default function Header(props) {
  const search = props.searchPerformed;
  return (
    <StyledHeader>
      {search ? (
        <div className="container">
          <div className="row between-lg">
            <Logo src={logo} alt="Aviasales" />
          </div>
          <div className="row between-lg">
            <div className="col-lg-10">
              <div className="row between-lg nowrap">
                <DepartureCity
                  city={props.city}
                  updateCity={props.updateCity}
                />
                <ArrivalCity />
                <FlightDates />
                <PassangersOpt />
              </div>
            </div>
            <div className="col-lg-2">
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
              <FlightDates />
              <PassangersOpt />
              <FindTicketsButton />
            </div>
          </div>
        </div>
      )}
    </StyledHeader>
  );
}
