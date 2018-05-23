import React, { Component } from "react";
import styled, { css } from "styled-components";

import CalendarIcon from "./img/calendar.svg";

const StyledRetTime = styled.div`
  flex-grow: 1;

  height: 56px;

  @media (max-width: 992px) {
    width: 50%;
  }

  margin-right: 2px;

  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: gray;

  ${props =>
    props.enabled &&
    css`
      background: #fff;
    `};

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

export default class ReturnDate extends Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };
  }

  toggleEnable() {
    return this.setState({ enabled: !this.state.enabled });
  }

  render() {
    return (
      <StyledRetTime enabled={this.state.enabled}>
        <p>Return</p>
        <img
          src={CalendarIcon}
          alt="Calendar"
          onClick={() => this.toggleEnable()}
        />
      </StyledRetTime>
    );
  }
}
