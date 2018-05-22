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
      <button value="decrement" onClick={props.decCallback}>
        −
      </button>
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
      dropdown: true
    };

    this.handleClick = this.handleClick.bind(this);
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

  incPassangerQuote(passangerType) {
    this.setState(
      (prevState, props) => (prevState[props.base] = 10)
      //    { adults: passangerType }
      //      function(prevState, props: passangerType) {
      //      const newValue = prevState[passangerType] + 1;
      //      let newState = Object.create(prevState);
      //      newState[passangerType] = newValue;
      //      return {
      //        newState
      //      };
      //    }
    );
  }

  render() {
    return (
      <StyledDiv onClick={this.handleClick}>
        <span>1 Passanger,</span>
        <span>economy</span>
        <img src={DropdownIcon} alt="dropdown-arrow" />

        <StyledDropdown show={this.state.dropdown}>
          <div style={{ display: "flex", "flex-flow": "row nowrap" }}>
            <p>Adults</p>
            <Counter
              base="adults"
              state={this.state}
              incCallback={() => this.incPassangerQuote("adults")}
            />
          </div>
          <div>
            <p>Kids</p>{" "}
          </div>
          <div>
            <p>Infants</p>{" "}
          </div>
          <div>
            <label>
              <input type="checkbox" />Business Class
            </label>{" "}
          </div>
        </StyledDropdown>
      </StyledDiv>
    );
  }
}

export default onClickOutside(PassangersOpt);
