import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 400px;
`;

export default function Main(props) {
  return (
    <StyledMain>
      <div className="container">Main1</div>
    </StyledMain>
  );
}
