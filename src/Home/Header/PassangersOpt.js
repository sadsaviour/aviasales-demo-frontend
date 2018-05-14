import React, { Component } from "react";
import styled from "styled-components";

import DropdownIcon from "./img/dropdown-arrow.svg";

const StyledDiv = styled.div`
  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default class PassangersOpt extends Component {
  render() {
    return (
      <StyledDiv>
        <p>1 Passanger,</p>
        <p>economy</p>
        <img src={DropdownIcon} alt="dropdown-arrow" />
      </StyledDiv>
    );
  }
}
