import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import dropdown_icon from "./img/dropdown-arrow.svg";

import { AdultsCounter, KidsCounter, InfantsCounter } from "./Counters";

const PassengersSelector = styled.div`
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
  }
  @media only screen and (min-width: 992px) {
    border-top-right-radius: 5px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;

const PassangersNumberLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropdownIcon = styled.img`
  margin-left: 10px;
`;

const Dropdown = styled.div`
  display: ${props => (props.show ? "block" : "none")};

  box-sizing: border-box;
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 20;

  width: 100%;

  padding: 16px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const PassangerOptionsDelimener = styled.div`
  height: 1px;

  margin-bottom: 16px;

  background: #dbdbdb;
`;

const BussinesClassLabel = styled.span`
  margin-left: 6px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;

  color: #4a4a4a;
`;

const BussinesClassCheckbox = styled.input`
  vertical-align: middle;
`;

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

  changeState = f => this.setState(f);

  handleBusinessClassCheckboxChange = () => {
    this.setState(prevState => ({
      businessClass: !prevState.businessClass
    }));
  };

  render() {
    const totalPassangers =
      this.state.adults + this.state.kids + this.state.infants;
    return (
      <PassengersSelector onClick={this.handleClick}>
        <PassangersNumberLabel>
          {totalPassangers} пассажир,{" "}
        </PassangersNumberLabel>
        <div style={{ color: "#A0B0B9" }}>
          {this.state.businessClass ? "бизнес" : "эконом"}
        </div>

        <DropdownIcon src={dropdown_icon} alt="dropdown-arrow" />
        <Dropdown show={this.state.dropdown}>
          <AdultsCounter
            adults={this.state.adults}
            changeCallback={f => this.changeState(f)}
          />
          <KidsCounter
            kids={this.state.kids}
            changeCallback={f => this.changeState(f)}
          />
          <InfantsCounter
            infants={this.state.infants}
            changeCallback={f => this.changeState(f)}
          />
          <PassangerOptionsDelimener />
          <label>
            <BussinesClassCheckbox
              type="checkbox"
              onClick={this.handleBusinessClassCheckboxChange}
            />
            <BussinesClassLabel>Бизнес-класс</BussinesClassLabel>
          </label>
        </Dropdown>
      </PassengersSelector>
    );
  }
}

export default onClickOutside(PassangersOpt);
