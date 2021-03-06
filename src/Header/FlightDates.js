import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import DateSelector, { dateLabel } from "./MonthCreator.js";

import CalendarIcon from "./img/calendar.svg";

const FlightDates = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const DepartureDate = styled.div`
  position: relative;

  width: 50%;

  margin-right: 1px;

  padding: 18px 16px;

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

  width: 50%;

  margin-left: 1px;

  padding: 18px 16px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
`;

const Placeholder = styled.div`
  color: #a0b0b9;
`;

const DateLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Dropdown = styled.div`
  position: absoulte;
  box-sizing: border-box;
  position: absolute;
  top: 0;

  left: ${props => (props.departure ? "0" : "auto")}
  right: ${props => (props.return ? "0" : "auto")}



  z-index: 30;

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
  /* Customize the label (the iosStyleCheckbox) */
  .iosStyleCheckbox {
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
  .iosStyleCheckbox input {
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
  .iosStyleCheckbox:hover input ~ .switch {
    background-color: #bccdd6;
  }

  /* When the checkbox is checked, add a blue background */
  .iosStyleCheckbox input:checked ~ .switch {
    background-color: #2196f3;
  }

  /* Create the switch/indicator (hidden when not checked) */
  .switch:after {
    content: "";
    position: absolute;

    display: block;
  }

  /* Transform the switch when checked */
  .iosStyleCheckbox input:checked ~ .switch:after {
    left: 18px;
  }

  /* Style the switch/indicator */
  .iosStyleCheckbox .switch:after {
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

class FlightDatesSelector extends Component {
  state = {
    departureDropdownVisible: false,
    returnDropdownVisible: false
  };

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

  setDepartureDate = date => {
    this.setState({
      departureDropdownVisible: false,
      returnDropdownVisible: true
    });
    this.props.updateDepartureDate(date);
  };

  setReturnDate = date => {
    this.props.updateReturnDate(date);
    this.setState({
      returnDropdownVisible: false
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
          {this.props.departureDate ? (
            <DateLabel onClick={this.showDepartureDropdown}>
              {dateLabel(this.props.departureDate)}
            </DateLabel>
          ) : (
            <Placeholder onClick={this.showDepartureDropdown}>Туда</Placeholder>
          )}
          <img
            src={CalendarIcon}
            alt="Calendar"
            onClick={this.showDepartureDropdown}
          />
          {this.state.departureDropdownVisible && (
            <Dropdown departure={true}>
              <DateSelector
                refrenceDate={this.props.departureDate}
                selectedDate={this.props.departureDate}
                departureDate={this.props.departureDate}
                returnDate={this.props.returnDate}
                setCallback={this.setDepartureDate}
              />
              <OneWayPricesOption>
                <label className="iosStyleCheckbox">
                  Показать цены в одну сторону
                  <OneWayPricesToggle type="checkbox" />
                  <span className="switch" />
                </label>
              </OneWayPricesOption>
            </Dropdown>
          )}
        </DepartureDate>
        <ReturnDate>
          {this.props.returnDate ? (
            <DateLabel onClick={this.showReturnDropdown}>
              {dateLabel(this.props.returnDate)}
            </DateLabel>
          ) : (
            <Placeholder onClick={this.showReturnDropdown}>Обратно</Placeholder>
          )}
          <img
            src={CalendarIcon}
            alt="Calendar"
            onClick={this.showReturnDropdown}
          />
          {this.state.returnDropdownVisible && (
            <Dropdown return={true}>
              <DateSelector
                refrenceDate={this.props.returnDate}
                selectedDate={this.props.returnDate}
                departureDate={this.props.departureDate}
                returnDate={this.props.returnDate}
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
