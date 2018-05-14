import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 400px;
`;

export default class Main extends Component {
  render() {
    return (
      <StyledMain>
        <div className="container">Main</div>
      </StyledMain>
    );
  }
}
