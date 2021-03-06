import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import arrowsIcon from "./img/arrows.svg";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;

  padding: 18px 16px;

  background-color: #fff;

  border-radius: inherit;
`;

const CityInput = styled.input`
  width: 50%;

  padding: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  border: 0;

  text-overflow: ellipsis;

  ::placeholder {
    color: #a0b0b9;
  }
`;

const Dropdown = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-flow: column;

  box-sizing: border-box;
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 20;

  width: 100%;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const IATACodeLabel = styled.div`
  position: absolute;
  right: 43px;
  top: 19px;
  z-index: 26;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #a0b0b9;
`;

const Suggestion = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 14px;

  color: #4a4a4a;

  :hover {
    background: #f4f4f4;
  }

  cursor: pointer;
`;

const SuggestionCity = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SuggestionCountry = styled.div`
  flex-grow: 2;

  margin-left: 2px;

  font-weight: normal;
  color: #a0b0b9;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const SuggestionIATACode = styled.div`
  flex-shrink: 0;
  flex-basis: 23px;
  font-weight: normal;
  color: #a0b0b9;
`;

const SwapCitiesButton = styled.button`
  position: absolute;
  right: 16px;
  top: 21px;
  z-index: 26;

  border: 0;
  padding: 0;

  background: #fff;

  cursor: pointer;
`;

const airports = [
  { name: "Бангкок", country: "Таиланд", iataCode: "BKK" },
  { name: "Барселона", country: "Испания", iataCode: "BCN" },
  { name: "Баландино", country: "Челябинск", iataCode: "CEK" },
  { name: "Бандаранаике", country: "Коломбо", iataCode: "CMB" },
  { name: "Батуми", country: "Грузия", iataCode: "CMB" },
  { name: "Денпасар Бали", country: "Индонезия", iataCode: "DPS" },
  { name: "Франкфурт-на-Майне", country: "Германия", iataCode: "FRA" },
  { name: "Манила", country: "Филипинны", iataCode: "MNL" },
  { name: "Мале", country: "Мальдивы", iataCode: "MLE" },
  { name: "Мюнхен", country: "Германия", iataCode: "MUC" },
  { name: "Минеральные Воды", country: "Россия", iataCode: "MRV" },
  { name: "Мальта", country: "Мальта", iataCode: "MLA" },
  { name: "Москва", country: "Россия", iataCode: "VKO" }
];

class OriginCity extends Component {
  state = {
    dropdownVisible: false
  };

  handleChange = event => {
    this.props.updateOrigin(event.target.value);
  };

  handleFocus = event => {
    this.setState({ dropdownVisible: true });
  };

  handleClick = event => {
    this.props.updateOrigin(event.name, event.iataCode);
    this.setState({ dropdownVisible: false });
  };

  handleClickOutside = evt => {
    this.setState({ dropdownVisible: false });
  };

  render() {
    const airportSuggestionsList = airports.map(a => (
      <Suggestion key={a.name} onClick={() => this.handleClick(a)}>
        <SuggestionCity>{a.name}, </SuggestionCity>
        <SuggestionCountry>{a.country}</SuggestionCountry>
        <SuggestionIATACode>{a.iataCode}</SuggestionIATACode>
      </Suggestion>
    ));
    return (
      <Container>
        <CityInput
          type="text"
          name="Departure City"
          value={this.props.origin.city}
          placeholder="Город отправления"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="off"
          onFocus={this.handleFocus}
          onChange={this.handleChange}
        />

        <Dropdown visible={this.state.dropdownVisible}>
          {airportSuggestionsList}
        </Dropdown>
        <IATACodeLabel>{this.props.origin.iataCode}</IATACodeLabel>
        <SwapCitiesButton onClick={this.props.swapCitiesCallback}>
          <img src={arrowsIcon} alt="Arrows" />
        </SwapCitiesButton>
      </Container>
    );
  }
}

export default onClickOutside(OriginCity);
