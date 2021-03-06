import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import dropdown_icon from "./img/dropdown-arrow.svg";
import Checkbox from "../assets/Checkbox";

import { AdultsCounter, KidsCounter, InfantsCounter } from "./Counters";

const Container = styled.div`
  position: relative;

  padding: 18px 16px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  background-color: #fff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;

  border-radius: inherit;
`;

const PassangersNumberLabel = styled.div`
  flex-shrink: 20;

  @media only screen and (min-width: 768px) {
    flex-grow: 1;
    flex-basis: 70%;
  }

  box-sizing: border-box;
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
  flex-shrink: 0;
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
  margin-bottom: 16px;

  border-top: 1px solid #dbdbdb;
`;

const BussinesClassOption = styled(Checkbox)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;

  color: #4a4a4a;
`;

class PassengersNumberSelector extends Component {
  state = {
    dropdown: false
  };

  showDropdown() {
    this.setState({ dropdown: true });
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  handleClick = () => {
    if (!this.dropdown) {
      this.showDropdown();
    }
  };

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
      this.props.passengers.adults +
      this.props.passengers.kids +
      this.props.passengers.infants;
    return (
      <Container
        onClick={this.handleClick}
        searchPerformed={this.props.searchPerformed}
      >
        <PassangersNumberLabel>
          {totalPassangers} пассажир,
          <BusinessClassLabel>
             {this.props.businessClass ? "бизнес" : "эконом"}
          </BusinessClassLabel>
        </PassangersNumberLabel>
        <DropdownIcon src={dropdown_icon} alt="dropdown-arrow" />
        <Dropdown show={this.state.dropdown}>
          <AdultsCounter
            adults={this.props.passengers.adults}
            changeCallback={f => this.props.updateAppState(f)}
          />
          <KidsCounter
            kids={this.props.passengers.kids}
            changeCallback={f => this.props.updateAppState(f)}
          />
          <InfantsCounter
            infants={this.props.passengers.infants}
            changeCallback={f => this.props.updateAppState(f)}
          />
          <PassangerOptionsDelimener />
          <BussinesClassOption
            onChange={this.handleBusinessClassCheckboxChange}
            checked={this.props.businessClass}
          >
            Бизнес-класс
          </BussinesClassOption>
        </Dropdown>
      </Container>
    );
  }
}

export default onClickOutside(PassengersNumberSelector);
