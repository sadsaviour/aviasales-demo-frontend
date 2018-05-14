import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";

import ArrivalCity from "./ArrivalCity";
import DepartureCity from "./DepartureCity";
import FlightDates from "./FlightDates";
import FindTicketsButton from "./FindTicketsButton";
import PassangersOpt from "./PassangersOpt";

const StyledHeader = styled.header`
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

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Logo src={logo} alt="Aviasales" />
              <h1>Поиск дешевых авиабилетов</h1>
              <DepartureCity DepartureCityName="london" />
              <ArrivalCity />
              <FlightDates />
              <PassangersOpt />
              <FindTicketsButton />
            </div>
          </div>
        </div>
      </StyledHeader>
    );
  }
}
