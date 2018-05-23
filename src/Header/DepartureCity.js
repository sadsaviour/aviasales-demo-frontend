import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import arrowsIcon from "./img/arrows.svg";

const SearchFormOrigin = styled.div`
  flex-grow: 0;

  padding-left: 18px;
  padding-top: 18px;

  position: relative;
  box-sizing: border-box;
  margin-right: 2px;

  height: 56px;
  /* width: 20%; */

  @media (max-width: 992px) {
    width: 50%;
  }

  background-color: #fff;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (max-width: 992px) {
    border-bottom-left-radius: 0px;
  }
`;

const AutocompleteBlock = styled.div`
  position: relative;
`;

const AutocompleteInput = styled.input`
  width: 50%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  border: 0;
`;

const AutocompleteDropdown = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 20;
  width: 100%;
  background: pink;
`;

const AutocompleteAirportCode = styled.div`
  position: absolute;
  right: 56px;
  top: 21px;
  z-index: 26;
`;

const SwapCitiesButton = styled.button`
  position: absolute;
  right: 16px;
  top: 21px;
  z-index: 26;

  border: 0;
  padding: 0;

  background: #fff;
`;

class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      suggestion: false,

      airports: [
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
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleFocus(event) {
    this.setState({ suggestion: true });
  }

  handleClick(event) {
    this.setState({ city: event.name });
    this.setState({ suggestion: false });
  }

  handleClickOutside = evt => {
    this.setState({ suggestion: false });
  };

  Suggest(props) {
    return (
      <AutocompleteDropdown>{this.airportSuggestionsList}</AutocompleteDropdown>
    );
  }

  render() {
    const airportSuggestionsList = this.state.airports.map(a => (
      <div
        key={a.name}
        style={{ cursor: "pointer" }}
        onClick={() => this.handleClick(a)}
      >
        {a.name}
      </div>
    ));
    return (
      <SearchFormOrigin>
        <AutocompleteBlock>
          <AutocompleteInput
            type="text"
            name="Departure City"
            value={this.state.city}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            onFocus={this.handleFocus}
            onChange={this.handleChange}
          />
          {this.state.suggestion && (
            <AutocompleteDropdown>
              {airportSuggestionsList}
            </AutocompleteDropdown>
          )}
          <AutocompleteAirportCode />
        </AutocompleteBlock>
        <SwapCitiesButton>
          <img src={arrowsIcon} alt="Arrows" />
        </SwapCitiesButton>
      </SearchFormOrigin>
    );
  }
}

export default onClickOutside(DepartureCity);
