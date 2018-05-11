import React, { Component } from "react";
import styled from "styled-components";

import Calendar from "./img/calendar.svg";

const StyledDiv = styled.div`
  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
`;

const StyledDepTime = styled.div`
  width: 50%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const StyledRetTime = styled.div`
  width: 50%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export default class FlightDates extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledDepTime>
          <p>Depart</p>
          <img src={Calendar} alt="Calendar" />
        </StyledDepTime>
        <StyledRetTime>
          <p>Return</p>
          <img src={Calendar} alt="Calendar" />
        </StyledRetTime>
      </StyledDiv>
    );
  }
}
