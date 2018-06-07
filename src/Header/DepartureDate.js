import React, { Component } from "react";
import styled from "styled-components";
import { getMonth } from "date-fns";

import getArrayOfDays from "./MonthCreator.js";

import CalendarIcon from "./img/calendar.svg";
import prevMonthIcon from "./img/prevMonthIcon.svg";
import nextMonthIcon from "./img/nextMonthIcon.svg";
import departureDateCursor from "./img/departureDateCursor.svg";

const StyledDepTime = styled.div`
  position: relative;

  height: 56px;
  flex-grow: 1;

  @media only screen and (min-width: 768px) {
    width: 20%;
    flex-grow: auto;
    margin-right: 2px;
  }

  margin-right: 2px;

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

const Dropdown = styled.div`
  position: absoulte;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
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

const MonthSelector = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const MonthLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 14px;
  text-transform: uppercase;

  color: #4a4a4a;
`;

const Month = styled.div`
  display: grid;

  grid-template-columns: 46px 46px 46px 46px 46px 46px 46px;
  grid-auto-rows: 46px;

  justify-items: center;

  box-sizing: border-box;

  margin-top: 8px;
  margin-bottom: 16px;

  border: 1px solid #fff;
`;

const SingleDate = styled.div`
  grid-column-start: ${props => props.day}
  
  position: relative;

  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  color: ${props => (props.past ? "rgba(74, 74, 74, 0.1)" : "#4A4A4A")};

  background: ${props => (props.selected ? "#F4F4F4" : "none")};
  
`;

const SingleDateLabel = styled.div`
  position: absolute;

  top: 8px;
  width: 100%;

  z-index: 10;
`;

const DepartureDateCursor = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

const OneWayPricesOption = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;

  color: #4a4a4a;
`;

const OneWayPricesToggle = styled.input`
  vertical-align: middle;
`;

const WeekDays = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  margin-top: 27px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;

  color: #5b5b5c;
`;

const currentDate = new Date("june 6, 2018 03:24:00");

function getMonthInRussian(date) {
  const month = getMonth(currentDate);
  const monthMap = {
    0: "январь",
    1: "февраль",
    2: "март",
    3: "апрель",
    4: "май",
    5: "июнь",
    6: "июль",
    7: "август",
    8: "сентябрь",
    9: "октябрь",
    10: "ноябрь",
    11: "декабрь"
  };

  return monthMap[month];
}

export default class DepartureDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      departureDate: null,
      monthName: getMonthInRussian(currentDate),
      month: getArrayOfDays(currentDate)
    };
  }

  showDropdown = () => {
    this.setState({
      dropdownVisible: true
    });
  };

  setDepartureDate = dateLabel => {
    this.setState({
      dropdownVisible: false,
      departureDate: dateLabel
    });
  };

  showNextMonth = () => {
    this.setState({
      dropdownVisible: true
    });
  };

  render() {
    console.log(currentDate);
    const Dates = props => {
      /* month is map of Dates where date is key and value is map {past: month: day: etc.}   */
      return Object.keys(props.month).map(date => (
        <SingleDate
          key={date}
          day={props.month[date].day}
          past={props.month[date].past}
          selected={props.month[date].selected}
          onClick={() => this.setDepartureDate(props.month[date].dateLabel)}
        >
          <SingleDateLabel>{date}</SingleDateLabel>
          {date === this.state.departureDate && (
            <DepartureDateCursor src={departureDateCursor} alt="cursor" />
          )}
        </SingleDate>
      ));
    };
    return (
      <StyledDepTime>
        <p>{this.state.departureDate ? this.state.departureDate : "Туда"}</p>
        <img src={CalendarIcon} alt="Calendar" onClick={this.showDropdown} />
        {this.state.dropdownVisible && (
          <Dropdown>
            <MonthSelector>
              <img src={prevMonthIcon} alt="Previous month" />
              <MonthLabel>{this.state.monthName}</MonthLabel>
              <img src={nextMonthIcon} alt="Next month" />
            </MonthSelector>
            <WeekDays>
              <div>ПН</div>
              <div>ВТ</div>
              <div>СР</div>
              <div>ЧТ</div>
              <div>ПТ</div>
              <div>СБ</div>
              <div>ВС</div>
            </WeekDays>
            <Month>
              <Dates month={this.state.month} />
            </Month>
            <OneWayPricesOption>
              <label>
                <OneWayPricesToggle type="checkbox" />
                Показать цены в одну сторону
              </label>
            </OneWayPricesOption>
          </Dropdown>
        )}
      </StyledDepTime>
    );
  }
}
