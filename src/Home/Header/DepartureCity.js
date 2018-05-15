import React, { Component } from "react";
import styled from "styled-components";

import arrowsIcon from "./img/arrows.svg";

const StyledDiv = styled.div`
  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export default class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { city: props.city };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    this.props.updateCity(this.state.city);

    event.preventDefault();
  }

  render() {
    return (
      <StyledDiv>
        <form>
          <input
            type="text"
            name="Departure City"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <div>MOW</div>
        <img src={arrowsIcon} alt="Arrows" />
      </StyledDiv>
    );
  }
}
