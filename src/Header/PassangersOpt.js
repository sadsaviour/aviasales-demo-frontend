import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import DropdownIcon from "./img/dropdown-arrow.svg";

const StyledDiv = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  @media only screen and (min-width: 768px) {
    flex-grow: 1;
    flex-basis: 20%;
  }

  position: relative;

  height: 56px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  background-color: #fff;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media only screen and (min-width: 768px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media only screen and (min-width: 992px) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;

const StyledDropdownIcon = styled.img`
  margin-left: 10px;
`;

const StyledDropdown = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 20;
  width: 100%;
  background: pink;
`;

function Counter(props) {
  const state = props.state;
  const base = props.base;
  return (
    <div style={{ display: "flex", "flex-flow": "row nowrap" }}>
      {" "}
      {state[base] > 0 && (base === "adults" && state[base] > 1) ? (
        <button value="decrement" onClick={props.decCallback}>
          −
        </button>
      ) : (
        <button disabled={true}>−</button>
      )}
      <p>{state[base]}</p>
      <button value="increment" onClick={props.incCallback}>
        +
      </button>
    </div>
  );
}

class PassangersOpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      kids: 0,
      infants: 0,
      businessClass: false,
      dropdown: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBusinessClassCheckboxChange = this.handleBusinessClassCheckboxChange.bind(
      this
    );
    this.incAdultsQuote = this.incAdultsQuote.bind(this);
  }

  showDropdown() {
    this.setState({ dropdown: true });
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  handleClick() {
    if (!this.dropdown) {
      this.showDropdown();
    }
  }

  handleClickOutside = evt => {
    this.hideDropdown();
  };

  incAdultsQuote(props) {
    this.setState(prevState => ({ adults: prevState.adults + 1 }));
  }
  decAdultsQuote() {
    this.setState(prevState => ({ adults: prevState.adults - 1 }));
  }

  incKidsQuote() {
    this.setState(prevState => ({ kids: prevState.kids + 1 }));
  }
  decKidsQuote() {
    this.setState(prevState => ({ kids: prevState.kids - 1 }));
  }

  incInfantsQuote() {
    this.setState(prevState => ({ infants: prevState.infants + 1 }));
  }
  decInfantsQuote() {
    this.setState(prevState => ({ infants: prevState.infants - 1 }));
  }

  handleBusinessClassCheckboxChange() {
    this.setState(prevState => ({
      businessClass: !prevState.businessClass
    }));
  }

  render() {
    return (
      <StyledDiv onClick={this.handleClick}>
        <span>{this.state.adults} пассажир, эконом</span>
        <StyledDropdownIcon src={DropdownIcon} alt="dropdown-arrow" />

        <StyledDropdown show={this.state.dropdown}>
          <div style={{ display: "flex", "flex-flow": "row nowrap" }}>
            <p>Adults</p>
            <Counter
              base="adults"
              state={this.state}
              incCallback={() => this.incAdultsQuote("adults")}
              decCallback={() => this.decAdultsQuote()}
            />
          </div>
          <div>
            <p>Kids</p>
            <Counter
              base="kids"
              state={this.state}
              incCallback={() => this.incKidsQuote()}
              decCallback={() => this.decKidsQuote()}
            />
          </div>
          <div>
            <p>Infants</p>
            <Counter
              base="infants"
              state={this.state}
              test="test"
              incCallback={() => this.incInfantsQuote()}
              decCallback={() => this.decInfantsQuote()}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={this.handleBusinessClassCheckboxChange}
              />Business Class
            </label>{" "}
          </div>
        </StyledDropdown>
      </StyledDiv>
    );
  }
}

export default onClickOutside(PassangersOpt);
