import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import DropdownIcon from "./img/dropdown-arrow.svg";

const StyledDiv = styled.div`
  position: relative;

  height: 56px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
      dropdown: true
    };

    this.incAdultsQuote = this.incAdultsQuote.bind(this);
  }

  incAdultsQuote(props) {
    console.log("incAdultsQuote props: " + JSON.stringify(props));
    this.setState(function(prevState, props) {
      console.log("setState props: " + JSON.stringify(props));
      return { adults: 999 };
    });
  }

  render() {
    return (
      <StyledDiv onClick={this.handleClick}>
        <span>{this.state.adults} Passanger,</span>
        <span>economy</span>
        <img src={DropdownIcon} alt="dropdown-arrow" />

        <StyledDropdown show={this.state.dropdown}>
          <div style={{ display: "flex", "flex-flow": "row nowrap" }}>
            <p>Adults</p>
            <Counter
              base="adults"
              state={this.state}
              incCallback={() => this.incAdultsQuote("adults")}
            />
          </div>
        </StyledDropdown>
      </StyledDiv>
    );
  }
}

export default onClickOutside(PassangersOpt);
