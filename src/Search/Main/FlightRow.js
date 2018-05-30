import React from "react";
import styled from "styled-components";

import pinIcon from "./img/pin-icon.svg";
import departureIcon from "./img/departure-icon.svg";
import arrivalIcon from "./img/arrival-icon.svg";

const Time = styled.span`
  margin-left: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 40px;
  font-size: 28px;

  color: #323333;
`;

const City = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;

  color: #9ca5a8;
`;

const Date = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;

  color: #9ca5a8;
`;

const ArrivalBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const IATA = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;

  color: #4a4a4a;
`;

const FlightTime = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #a0b0b9;
`;

const FlightDuration = styled.div`
  flex-basis: 45%;
`;

const Delimener = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Circle = styled.div`
  width: 11px;
  height: 11px;

  margin-left: 2px;
  margin-right: 2px;

  background: #ffffff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 0px;
  border: 0.5px solid #a0b0b9;
`;

export default function FlightRow(props) {
  const flight = props.flight;
  return (
    <div className="row between-md">
      <div>
        <img src={pinIcon} alt="Pin it!" />
        <Time>{flight.departure.time}</Time>
        <City>{flight.departure.city}</City>
        <Date>{flight.departure.date}</Date>
      </div>
      <FlightDuration>
        <div className="row between-md middle-md">
          <img src={departureIcon} alt="Departure" />
          <FlightTime>Всего: {flight.flightDuration}</FlightTime>
          <img src={arrivalIcon} alt="Arrival" />
        </div>
        <Delimener className="row middle-md">
          <Circle />
          <Line />
          <Circle />
        </Delimener>
        <div className="row between-md">
          <IATA>{flight.departure.airportCode}</IATA>
          <IATA>{flight.arrival.airportCode}</IATA>
        </div>
      </FlightDuration>
      <ArrivalBlock>
        <Time>{flight.arrival.time}</Time>
        <City>{flight.arrival.city}</City>
        <Date>{flight.arrival.date}</Date>
      </ArrivalBlock>
    </div>
  );
}
