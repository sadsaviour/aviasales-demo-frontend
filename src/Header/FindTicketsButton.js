import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getDate, getMonth } from "date-fns";
import qs from "qs";

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

export default function FindTicketsButton({
  searchPerformed,
  setSearchStatus,
  origin,
  destination,
  destinationDate,
  returnDate,
  passengers,
  businessClass,
  className,
  departureDate
}) {
  const qString = qs.stringify({
    origin,
    destination,
    departureDate,
    returnDate,
    passengers,
    businessClass
  });
  const qObj = qs.parse(qString);
  return (
    <ButtonWraper searchPerformed={searchPerformed}>
      <RouterLink
        to={`/search/${qs.stringify({
          origin,
          destination,
          departureDate,
          returnDate,
          passengers,
          businessClass
        })}`}
        onClick={() =>
          setSearchStatus(true) || console.log("qSrting", qString, "qObj", qObj)
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
