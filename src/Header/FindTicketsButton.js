import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getDate, getMonth } from 'date-fns';

import findTicketsIcon from './img/findTicketsIcon.svg';

const Button = styled.button`
  height: 56px;
  @media only screen and (min-width: 992px) {
    height: 58px;
  }

  width: 100%;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 5px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;

  @media only screen and (min-width: 992px) and (max-width: 1260px) {
    font-size: 18px;
  }

  text-align: center;

  color: #ffffff;

  cursor: pointer;
`;

const LandingButton = styled.button`
  height: 56px;

  @media only screen and (min-width: 768px) {
    height: 64px;
  }

  width: 100%;

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;

  @media only screen and min-width: 768px {
    font-size: 28px;
  }

  text-align: center;

  color: #ffffff;

  cursor: pointer;
`;

const IconWraper = styled.img`
  display: inline-block;
  vertical-align: middle;

  margin-left: 16px;
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ButtonWraper = styled.div`
  display: block;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    grid-column-start: 4;
    grid-column-end: span 1;
  }

  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.searchPerformed ? '100%' : '308px')};
  }

  margin-top: 16px;
  @media only screen and (min-width: 768px) {
    margin-top: ${props => (props.searchPerformed ? '0' : '32px')};
  }
  @media only screen and (min-width: 992px) {
    margin-top: ${props => (props.searchPerformed ? '0' : '48px')};
  }
`;

const addZeroToString = (number) => {
  if (number.length === 1) {
    return 0 + number;
  }
  return number;
};

const MakeQueryString = (
  origin,
  destination,
  destinationDate,
  returnDate,
  adults,
  kids,
  infants,
  businessClass,
) => {
  const departureDateString = addZeroToString(getDate(destinationDate).toString())
    + addZeroToString((getMonth(destinationDate) + 1).toString());
  const returnDateString = addZeroToString(getDate(returnDate).toString())
    + addZeroToString((getMonth(returnDate) + 1).toString());
  const passengers = (businessClass ? 'b' : '')
    + (adults ? adults.toString() : '')
    + (kids ? kids.toString() : infants ? '0' : '')
    + (infants ? infants.toString() : '');
  return (
    origin.iataCode + departureDateString + destination.iataCode + returnDateString + passengers
  );
};

export default function FindTicketsButton(props) {
  return (
    <ButtonWraper searchPerformed={props.searchPerformed}>
      <RouterLink
        to={`/search/${MakeQueryString(
          props.origin,
          props.destination,
          props.departureDate,
          props.returnDate,
          props.adults,
          props.kids,
          props.infants,
          props.businessClass,
        )}`}
        onClick={() => props.updateAppState({ searchPerformed: true, stateIsDefault: false })}
      >
        {props.searchPerformed ? (
          <Button name="Find Tickets" type="submit" className={props.className}>
            Найти билеты
          </Button>
        ) : (
          <LandingButton name="Find Tickets" type="submit" className={props.className}>
            Найти билеты
            <IconWraper src={findTicketsIcon} alt="Find Tickets" />
          </LandingButton>
        )}
      </RouterLink>
    </ButtonWraper>
  );
}
