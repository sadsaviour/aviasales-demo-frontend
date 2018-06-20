import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import dropdown_icon from "./img/dropdown-arrow.svg";

import { AdultsCounter, KidsCounter, InfantsCounter } from "./Counters";

const PassengersSelector = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: span ${props => (props.searchPerformed ? "1" : "2")};
  }

  @media only screen and (min-width: 992px) {
    grid-column-start: 4;
    grid-column-end: span 1;
  }

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
    border-bottom-right-radius: ${props =>
      props.searchPerformed ? "0" : "5px"};
  }
  @media only screen and (min-width: 992px) {
    border-bottom-right-radius: 5px;
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

const BussinesClassLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
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

  changeState = f => this.props.updateAppState(f);

  handleBusinessClassCheckboxChange = () => {
    this.props.updateAppState(prevState => ({
      businessClass: !prevState.businessClass
    }));
  };

  render() {
    const totalPassangers =
      this.props.adults + this.props.kids + this.props.infants;
    return (
      <PassengersSelector
        onClick={this.handleClick}
        searchPerformed={this.props.searchPerformed}
      >
        <PassangersNumberLabel>
          {totalPassangers} пассажир,{" "}
        </PassangersNumberLabel>
        <div style={{ color: "#A0B0B9" }}>
          {this.state.businessClass ? "бизнес" : "эконом"}
        </div>

        <DropdownIcon src={dropdown_icon} alt="dropdown-arrow" />
        <Dropdown show={this.state.dropdown}>
          <AdultsCounter
            adults={this.props.adults}
            changeCallback={f => this.changeState(f)}
          />
          <KidsCounter
            kids={this.props.kids}
            changeCallback={f => this.changeState(f)}
          />
          <InfantsCounter
            infants={this.props.infants}
            changeCallback={f => this.changeState(f)}
          />
          <PassangerOptionsDelimener />
          <BussinesClassLabel className="styledCheckbox">
            Бизнес-класс
            <input
              type="checkbox"
              onClick={this.handleBusinessClassCheckboxChange}
              defaultChecked={this.props.businessClass}
            />
            <span className="checkmark" />
          </BussinesClassLabel>
        </Dropdown>
      </PassengersSelector>
    );
  }
}

export default onClickOutside(PassangersOpt);
