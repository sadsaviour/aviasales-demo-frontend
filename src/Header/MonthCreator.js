import React, { Component } from 'react';
import styled from 'styled-components';

import prevMonthIcon from './img/prevMonthIcon.svg';
import nextMonthIcon from './img/nextMonthIcon.svg';
import selectedDateCursor from './img/selectedDateCursor.svg';

import {
  eachDay,
  startOfMonth,
  endOfMonth,
  getISODay,
  getDay,
  getDate,
  getMonth,
  setMonth,
  isBefore,
  isWithinRange,
  compareAsc,
} from 'date-fns';

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

  color: ${props => (props.past ? 'rgba(74, 74, 74, 0.1)' : '#4A4A4A')};

  background: ${props => (props.inDatesRange ? '#F4F4F4' : 'none')};

  cursor: ${props => (props.past ? 'auto' : 'pointer')}
  
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

const ReturnDateCursor = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transform: scaleX(-1);
`;

const WeekDays = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
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

const WeekDay = styled.div`
  width: 46px;
`;

function getMonthInRussian(date) {
  const month = getMonth(date);
  const monthes = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];

  return monthes[month];
}

function dayOfWeekLabel(singleDate) {
  /* Sunday is first cause getDay works with american stile week*/
  const daysLabels = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const day = getDay(singleDate);
  return daysLabels[day];
}

export function dateLabel(date) {
  return getDate(date) + ' ' + monthLabel(date) + ', ' + dayOfWeekLabel(date);
}

export function monthLabel(date) {
  const month = getMonth(date);
  const monthes = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];

  return monthes[month];
}

export function getEachDateOfMonth(referenceDate, departureDate, returnDate) {
  const currentDate = new Date();

  const dateToShow = referenceDate === null ? currentDate : referenceDate;

  const monthStart = startOfMonth(dateToShow);
  const monthEnd = endOfMonth(dateToShow);

  const wholeMonth = eachDay(monthStart, monthEnd);

  /* Keys in object will be dates */
  const dates = wholeMonth.reduce(function(map, singleDate) {
    map[getDate(singleDate)] = {
      date: singleDate,
      day: getISODay(singleDate),
      dateLabel:
        getDate(singleDate) + ' ' + monthLabel(singleDate) + ', ' + dayOfWeekLabel(singleDate),
      month: getMonth(singleDate),
      past: isBefore(singleDate, currentDate) || isBefore(singleDate, departureDate),
      inDatesRange: returnDate ? isWithinRange(singleDate, departureDate, returnDate) : false,
    };
    return map;
  }, {});

  return dates;
}

const currentDate = new Date();

export default class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate,
      departureDate: this.props.departureDate,
      returnDate: this.props.returnDate,
      refrenceDate: this.props.refrenceDate
        ? this.props.refrenceDate
        : this.props.departureDate
          ? this.props.departureDate
          : currentDate,
      refrenceMonth: getMonth(
        this.props.refrenceDate
          ? this.props.refrenceDate
          : this.props.departureDate
            ? this.props.departureDate
            : currentDate,
      ),
      refrenceMonthLabel: getMonthInRussian(
        this.props.refrenceDate
          ? this.props.refrenceDate
          : this.props.departureDate
            ? this.props.departureDate
            : currentDate,
      ),
      month: getEachDateOfMonth(
        this.props.refrenceDate
          ? this.props.refrenceDate
          : this.props.departureDate
            ? this.props.departureDate
            : currentDate,
        this.props.departureDate,
        this.props.returnDate,
      ),
    };
    this.showNextMonth = this.showNextMonth.bind(this);
    this.showPrevMonth = this.showPrevMonth.bind(this);
  }

  showNextMonth() {
    const nextMonthDate = setMonth(this.state.refrenceDate, this.state.refrenceMonth + 1);
    this.setState({
      refrenceDate: nextMonthDate,
      refrenceMonth: getMonth(nextMonthDate),
      refrenceMonthLabel: getMonthInRussian(nextMonthDate),
      month: getEachDateOfMonth(nextMonthDate, this.props.departureDate, this.props.returnDate),
    });
  }

  showPrevMonth() {
    const nextMonthDate = setMonth(this.state.refrenceDate, this.state.refrenceMonth - 1);
    this.setState({
      refrenceDate: nextMonthDate,
      refrenceMonth: getMonth(nextMonthDate),
      refrenceMonthLabel: getMonthInRussian(nextMonthDate),
      month: getEachDateOfMonth(nextMonthDate, this.props.departureDate, this.props.returnDate),
    });
  }

  setSelectedDate = (date, dateLabel) => {
    this.props.setCallback(date, dateLabel);
    this.setState({
      dropdownVisible: false,
      selectedDate: date,
    });
  };

  setDepartureDate = (date, dateLabel) => {
    this.props.setCallback(date, dateLabel);
    this.setState({
      dropdownVisible: false,
      departureDate: date,
    });
  };

  setReturnDate = (date, dateLabel) => {
    this.props.setCallback(date, dateLabel);
    this.setState({
      dropdownVisible: false,
      returnDate: date,
    });
  };

  render() {
    const Dates = props => {
      /* month is map of Dates where date is key and value is map {past: month: day: etc.}   */
      return Object.keys(props.month).map(date => (
        <SingleDate
          key={date}
          day={props.month[date].day}
          past={props.month[date].past}
          inDatesRange={props.month[date].inDatesRange}
          onClick={
            !props.month[date].past &&
            (() => this.setSelectedDate(props.month[date].date, props.month[date].dateLabel))
          }
        >
          <SingleDateLabel>{date}</SingleDateLabel>
          {/* It appears one can't compare date objects directly */
          compareAsc(props.month[date].date, this.props.departureDate) === 0 && (
            <DepartureDateCursor src={selectedDateCursor} alt="cursor" />
          )}
          {compareAsc(props.month[date].date, this.props.returnDate) === 0 && (
            <ReturnDateCursor src={selectedDateCursor} alt="cursor" />
          )}
        </SingleDate>
      ));
    };
    return (
      <div>
        <MonthSelector>
          <img
            src={prevMonthIcon}
            alt="Previous month"
            style={{ cursor: 'pointer', marginLeft: '8px' }}
            onClick={this.showPrevMonth}
          />
          <MonthLabel>{this.state.refrenceMonthLabel}</MonthLabel>
          <img
            src={nextMonthIcon}
            alt="Next month"
            style={{ cursor: 'pointer', marginRight: '8px' }}
            onClick={this.showNextMonth}
          />
        </MonthSelector>
        <WeekDays>
          <WeekDay>ПН</WeekDay>
          <WeekDay>ВТ</WeekDay>
          <WeekDay>СР</WeekDay>
          <WeekDay>ЧТ</WeekDay>
          <WeekDay>ПТ</WeekDay>
          <WeekDay>СБ</WeekDay>
          <WeekDay>ВС</WeekDay>
        </WeekDays>
        <Month>
          <Dates month={this.state.month} />
        </Month>
      </div>
    );
  }
}
