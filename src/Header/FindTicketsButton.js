import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    flex-grow: 1;
    flex-basis: 24.2%;
  }

  height: 56px;

  @media only screen and (min-width: 992px) {
    height: 58px;
  }

  box-sizing: border-box;
  width: 100%;

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 5px;
  }
`;

const StyledButtonText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

export default class FindTicketsButton extends Component {
  render() {
    return (
      <Button
        name="Find Tickets"
        type="submit"
        className={this.props.className}
      >
        <Link style={{ "text-decoration": "none" }} to="/search">
          <StyledButtonText>Find Tickets</StyledButtonText>
        </Link>
      </Button>
    );
  }
}
