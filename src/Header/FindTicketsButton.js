import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 58px;

  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

const StyledButtonText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;

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
      <Container>
        <Button name="Find Tickets" type="submit">
          <Link style={{ "text-decoration": "none" }} to="/search">
            <StyledButtonText>Find Tickets</StyledButtonText>
          </Link>
        </Button>
      </Container>
    );
  }
}
