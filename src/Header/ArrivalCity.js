import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

const Container = styled.div`
  position: relative;

  box-sizing: border-box;

  padding: 18px 16px;

  background-color: #fff;

  border-radius: inherit;
`;

const CityInput = styled.input`
  width: 70%;

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
  right: 16px;
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

const City = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Country = styled.div`
  flex-grow: 2;

  margin-left: 2px;

  font-weight: normal;
  color: #a0b0b9;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const IATACode = styled.div`
  flex-shrink: 0;
  flex-basis: 23px;
  font-weight: normal;
  color: #a0b0b9;

  line-height: 20px;
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

class ArrivalCity extends Component {
  state = {
    dropdownVisible: false
  };

  handleFocus = event => {
    this.setState({ dropdownVisible: true });
  };

  handleChange = event => {
    this.props.updateDestination(event.target.value);
  };

  handleClick = event => {
    this.props.updateDestination(event.name, event.iataCode);
    this.setState({ dropdownVisible: false });
  };

  handleClickOutside = event => {
    this.setState({ dropdownVisible: false });
  };

  render() {
    const airportSuggestionsList = airports.map(a => (
      <Suggestion key={a.name} onClick={() => this.handleClick(a)}>
        <City>{a.name}, </City>
        <Country>{a.country}</Country>
        <IATACode>{a.iataCode}</IATACode>
      </Suggestion>
    ));
    return (
      <Container>
        <CityInput
          type="text"
          name="Destination City"
          value={this.props.destination.city}
          placeholder="Город прибытия"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="off"
          onFocus={this.handleFocus}
          onChange={this.handleChange}
        />
        <Dropdown visible={this.state.dropdownVisible}>
          {airportSuggestionsList}
        </Dropdown>
        {this.props.destination.city && (
          <IATACodeLabel>{this.props.destination.iataCode}</IATACodeLabel>
        )}
      </Container>
    );
  }
}

export default onClickOutside(ArrivalCity);
