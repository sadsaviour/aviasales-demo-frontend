import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BackArrow from "./img/back-arrow.svg";

const StyledHeader = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Link to="/">
                <img src={BackArrow} alt="Back" />
              </Link>
              <p>Москва — Барселона</p>
            </div>
          </div>
        </div>
      </StyledHeader>
    );
  }
}
