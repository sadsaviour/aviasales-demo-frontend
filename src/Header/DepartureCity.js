import React, { Component } from "react";
import styled from "styled-components";

import arrowsIcon from "./img/arrows.svg";

const StyledDiv = styled.div`
  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export default class DepartureCity extends Component {
  render() {
    return (
      <StyledDiv>
        <div>Moscow</div>
        <div>MOW</div>
        <img src={arrowsIcon} alt="Arrows" />
      </StyledDiv>
    );
  }
}
