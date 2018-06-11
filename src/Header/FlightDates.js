import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import DateSelector from "./MonthCreator.js";

import CalendarIcon from "./img/calendar.svg";

const FlightDates = styled.div`
  display: flex;
  flex-flow: row nowrap;

  flex-basis: 100%;

  @media only screen and (min-width: 768px) {
    width: 20%;
    flex-grow: auto;
  }
`;

const DepartureDate = styled.div`
  position: relative;

  height: 56px;
  width: 50%;

  width: @media only screen and (min-width: 768px) {
    width: 20%;
    flex-grow: auto;
    margin-right: 2px;
  }

  margin-right: 1px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 2px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: 5px;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

const ReturnDate = styled.div`
  position: relative;

  height: 56px;
  width: 50%;

  @media only screen and (min-width: 768px) {
    flex-grow: auto;
    width: 21%;
  }

  margin-left: 1px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 2px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

const Dropdown = styled.div`
  position: absoulte;
  box-sizing: border-box;
  position: absolute;
  top: 0;

  left: ${props => (props.departure ? "0" : "auto")}
  right: ${props => (props.return ? "0" : "auto")}



  z-index: 20;

  width: 370px;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);

  border-radius: 2px;


`;

const OneWayPricesOption = styled.div`
  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;

    padding-left: 56px;
    margin-bottom: 12px;

    cursor: pointer;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 12px;

    color: #4a4a4a;

    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom checkbox */
  .switch {
    position: absolute;
    top: 0;
    left: 0;

    width: 40px;
    height: 24px;

    border-radius: 100px;
    background-color: #bccdd6;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .switch {
    background-color: #bccdd6;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .switch {
    background-color: #2196f3;
  }

  /* Create the switch/indicator (hidden when not checked) */
  .switch:after {
    content: "";
    position: absolute;

    display: block;
  }

  /* Transform the switch when checked */
  .container input:checked ~ .switch:after {
    left: 18px;
  }

  /* Style the switch/indicator */
  .container .switch:after {
    left: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 10px;
  }
`;

const OneWayPricesToggle = styled.input`
  box-sizing: border-box;
  vertical-align: middle;
  margin-right: 16px;
`;

const currentDate = new Date();

class FlightDatesSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureDropdownVisible: false,
      returnDropdownVisible: false,
      departureDate: null,
      returnDate: null,
      departureDateLabel: null,
      returnDateLabel: null,
      month: null
    };
  }

  showDepartureDropdown = () => {
    this.setState({
      departureDropdownVisible: true,
      returnDropdownVisible: false
    });
  };

  showReturnDropdown = () => {
    this.setState({
      departureDropdownVisible: false,
      returnDropdownVisible: true
    });
  };

  setDepartureDate = (date, dateLabel) => {
    this.setState({
      departureDropdownVisible: false,
      returnDropdownVisible: true,
      departureDateLabel: dateLabel,
      departureDate: date
    });
  };

  setReturnDate = (date, dateLabel) => {
    this.setState({
      returnDropdownVisible: false,
      returnDateLabel: dateLabel,
      returnDate: date
    });
  };

  handleClickOutside = () => {
    this.setState({
      departureDropdownVisible: false,
      returnDropdownVisible: false
    });
  };

  render() {
    return (
      <FlightDates>
        <DepartureDate>
          <p onClick={this.showDepartureDropdown}>
            {this.state.departureDateLabel
              ? this.state.departureDateLabel
              : "Туда"}
          </p>
          <img
            src={CalendarIcon}
            alt="Calendar"
            onClick={this.showDepartureDropdown}
          />
          {this.state.departureDropdownVisible && (
            <Dropdown departure={true}>
              <DateSelector
                refrenceDate={currentDate}
                selectedDate={this.state.departureDate}
                departureDate={this.state.departureDate}
                returnDate={this.state.returnDate}
                setCallback={(date, dateLabel) =>
                  this.setDepartureDate(date, dateLabel)
                }
              />
              <OneWayPricesOption>
                <label class="container">
                  Показать цены в одну сторону
                  <OneWayPricesToggle type="checkbox" />
                  <span class="switch" />
                </label>
              </OneWayPricesOption>
            </Dropdown>
          )}
        </DepartureDate>
        <ReturnDate>
          <p onClick={this.showReturnDropdown}>
            {this.state.returnDateLabel
              ? this.state.returnDateLabel
              : "Обратно"}
          </p>
          <img
            src={CalendarIcon}
            alt="Calendar"
            onClick={this.showReturnDropdown}
          />
          {this.state.returnDropdownVisible && (
            <Dropdown return={true}>
              <DateSelector
                refrenceDate={currentDate}
                selectedDate={this.state.returnDate}
                departureDate={this.state.departureDate}
                returnDate={this.state.returnDate}
                setCallback={(date, dateLabel) =>
                  this.setReturnDate(date, dateLabel)
                }
              />
            </Dropdown>
          )}
        </ReturnDate>
      </FlightDates>
    );
  }
}

export default onClickOutside(FlightDatesSelector);
