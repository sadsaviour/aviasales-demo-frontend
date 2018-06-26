import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import dropdown_icon from "./img/dropdown-arrow.svg";

import { AdultsCounter, KidsCounter, InfantsCounter } from "./Counters";
import Logotypes from "../SearchResults/Logotypes/logos";

const Container = styled.div`
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
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BusinessClassLabel = styled.span`
  color: #a0b0b9;
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

const BussinesClassOption = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;

  color: #4a4a4a;
`;

class PassengersNumberSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      kids: 0,
      infants: 0,
      dropdown: false
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

  handleClickOutside(evt) {
    this.hideDropdown();
  }

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
      <Container
        onClick={this.handleClick}
        searchPerformed={this.props.searchPerformed}
      >
        <PassangersNumberLabel>
          {totalPassangers} пассажир,{" "}
          <BusinessClassLabel>
            {this.state.businessClass ? "бизнес" : "эконом"}
          </BusinessClassLabel>
        </PassangersNumberLabel>

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
          <BussinesClassOption className="styledCheckbox">
            Бизнес-класс
            <input
              type="checkbox"
              onChange={this.handleBusinessClassCheckboxChange}
              checked={this.props.businessClass}
            />
            <span className="checkmark" />
          </BussinesClassOption>
        </Dropdown>
      </Container>
    );
  }
}

export default onClickOutside(PassengersNumberSelector);