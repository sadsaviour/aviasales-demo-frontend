import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
`;

export default class ArrivalCity extends Component {
  render() {
    return (
      <StyledDiv>
        <p>Arrival City</p>
      </StyledDiv>
    );
  }
}
