import React, { Component } from "react";
import styled, { css } from "styled-components";

import CalendarIcon from "./img/calendar.svg";

const StyledDepTime = styled.div`
  height: 56px;

  @media only screen and (min-width: 768px) {
    width: 20%;
  }

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 2px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: 5px;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

export default class DepartureDate extends Component {
  render() {
    return (
      <StyledDepTime>
        <p>Depart</p>
        <img src={CalendarIcon} alt="Calendar" />
      </StyledDepTime>
    );
  }
}
