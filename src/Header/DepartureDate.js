import React, { Component } from "react";
import styled, { css } from "styled-components";

import CalendarIcon from "./img/calendar.svg";

const StyledDepTime = styled.div`
  flex-grow: 1;

  height: 56px;

  @media (max-width: 992px) {
    width: 50%;
  }

  padding-left: 16px;
  padding-right: 16px;

  margin-right: 2px;

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
      <StyledDepTime style={{ "margin-right": "2px" }}>
        <p>Depart</p>
        <img src={CalendarIcon} alt="Calendar" />
      </StyledDepTime>
    );
  }
}
