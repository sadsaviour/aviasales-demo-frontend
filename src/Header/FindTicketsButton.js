import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getDate, getMonth } from "date-fns";

import findTicketsIcon from "./img/findTicketsIcon.svg";

const Button = styled.button`
  width: 100%;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: ${props => (props.searchPerformed ? 0 : "4px")};
    border-top-left-radius: ${props => (props.searchPerformed ? 0 : "4px")};
    border-top-right-radius: ${props => (props.searchPerformed ? 0 : "4px")};
    border-bottom-right-radius: ${props =>
      props.searchPerformed ? "5px" : "4px"};
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 56px;

  @media only screen and (min-width: 768px) {
    line-height: ${props => (props.searchPerformed ? "56px" : "64px")};
  }

  @media only screen and (min-width: 992px) {
    line-height: 58px;
  }

  font-size: 20px;

  @media only screen and (min-width: 992px) and (max-width: 1260px) {
    font-size: 18px;
  }

  text-align: center;
  vertical-align: middle;

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

  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    grid-column-start: 4;
    grid-column-end: span 1;
  }

  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.searchPerformed ? "100%" : "308px")};
  }

  margin-top: 16px;
  @media only screen and (min-width: 768px) {
    margin-top: ${props => (props.searchPerformed ? "0" : "32px")};
  }
  @media only screen and (min-width: 992px) {
    margin-top: ${props => (props.searchPerformed ? "0" : "48px")};
  }
`;

const addZeroToString = number => {
  if (number.length === 1) {
    return 0 + number;
  }
  return number;
};

const codeSateToURL = (
  origin,
  destination,
  destinationDate,
  returnDate,
  adults,
  kids,
  infants,
  businessClass
) => {
  const departureDateString =
    addZeroToString(getDate(destinationDate).toString()) +
    addZeroToString((getMonth(destinationDate) + 1).toString());
  const returnDateString =
    addZeroToString(getDate(returnDate).toString()) +
    addZeroToString((getMonth(returnDate) + 1).toString());
  const passengers =
    (businessClass ? "b" : "") +
    (adults ? adults.toString() : "") +
    (kids ? kids.toString() : infants ? "0" : "") +
    (infants ? infants.toString() : "");
  return (
    origin.iataCode +
    departureDateString +
    destination.iataCode +
    returnDateString +
    passengers
  );
};

export default function FindTicketsButton({
  searchPerformed,
  origin,
  destination,
  destinationDate,
  returnDate,
  adults,
  kids,
  infants,
  businessClass,
  updateAppState,
  className,
  departureDate
}) {
  return (
    <ButtonWraper searchPerformed={searchPerformed}>
      <RouterLink
        to={`/search/${codeSateToURL(
          origin,
          destination,
          departureDate,
          returnDate,
          adults,
          kids,
          infants,
          businessClass
        )}`}
        onClick={() =>
          updateAppState({ searchPerformed: true, stateIsDefault: false })
        }
      >
        <Button
          name="Find Tickets"
          type="submit"
          className={className}
          searchPerformed={searchPerformed}
        >
          Найти билеты
          {!searchPerformed && (
            <IconWraper src={findTicketsIcon} alt="Find Tickets" />
          )}
        </Button>
      </RouterLink>
    </ButtonWraper>
  );
}
