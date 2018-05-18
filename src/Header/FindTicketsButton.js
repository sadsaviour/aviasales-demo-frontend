import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 56px;
  width: 100%;

  background: #ff9241;
  border-color: #ff9241;
  border-radius: 4px;
`;

export default class FindTicketsButton extends Component {
  render() {
    return (
      <Container>
        <Link to="/search">
          <Button name="Find Tickets" type="submit">
            Find Tickets
          </Button>
        </Link>
      </Container>
    );
  }
}
