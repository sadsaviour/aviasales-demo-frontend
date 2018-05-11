import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 308px;
  height: 56px;

  background: #ff9241;
  border-color: #ff9241;
  border-radius: 4px;
`;

export default class FindTicketsButton extends Component {
  render() {
    return (
      <Container>
        <Button name="Find Tickets" type="submit">
          Find Tickets
        </Button>
      </Container>
    );
  }
}
