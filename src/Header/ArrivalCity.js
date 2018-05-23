import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  flex-grow: 1;

  height: 56px;
  /* width: 20%; */
  @media (max-width: 992px) {
    width: 50%;
  }

  margin-right: 2px;

  padding-left: 16px;

  @media (max-width: 992px) {
    margin-right: 0;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  @media (max-width: 992px) {
    border-top-right-radius: 5px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;

export default class ArrivalCity extends Component {
  render() {
    return <StyledDiv>Arrival City</StyledDiv>;
  }
}
