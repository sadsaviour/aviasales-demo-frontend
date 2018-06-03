import React, { Component } from "react";
import styled, { css } from "styled-components";

import CalendarIcon from "./img/calendar.svg";

const StyledRetTime = styled.div`
  height: 56px;

  @media only screen and (min-width: 768px) {
    width: 21%;
  }

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 2px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
  }

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
