import React, { Component } from "react";
import styled, { css } from "styled-components";

import CalendarIcon from "./img/calendar.svg";

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

  background: gray;

  ${props =>
    props.enabled &&
    css`
      background: white;
    `};
`;

export default class FlightDates extends Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };
  }

  toggleEnable() {
    return this.setState({ enabled: !this.state.enabled });
  }

  render() {
    return (
      <StyledDiv>
        <StyledDepTime>
          <p>Depart</p>
          <img src={CalendarIcon} alt="Calendar" />
        </StyledDepTime>
        <StyledRetTime enabled={this.state.enabled}>
          <p>Return</p>
          <img
            src={CalendarIcon}
            alt="Calendar"
            onClick={() => this.toggleEnable()}
          />
        </StyledRetTime>
      </StyledDiv>
    );
  }
}
