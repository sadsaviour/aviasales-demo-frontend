import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.main``;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [
        {
          id: 1,
          carrierName: "Rossiya",
          price: "7 712 ₽"
        },
        {
          id: 2,
          carrierName: "Fly",
          price: "9 269 ₽"
        },
        {
          id: 3,
          carrierName: "Nordwind",
          price: "9 108 ₽"
        },
        {
          id: 4,
          carrierName: "Red Wings",
          price: "8 029 ₽"
        },
        {
          id: 5,
          carrierName: "Aeroflot",
          price: "8 164 ₽"
        }
      ]
    };

    this.flights = this.state.flights.map(function(f) {
      return (
        <div>
          <p>{f.carrierName}</p>
          <p>{f.price}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <StyledMain>
        <div className="container">{this.flights}</div>
      </StyledMain>
    );
  }
}
