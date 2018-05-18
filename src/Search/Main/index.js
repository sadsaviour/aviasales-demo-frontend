import React, { Component } from "react";
import styled from "styled-components";
import flightsData from "./data.js";

import arrivalIcon from "./img/arrival-icon_mobile.svg";
import departureIcon from "./img/departure-icon_mobile.svg";
import durationIcon from "./img/duration-icon_mobile.svg";
import Logo from "./img/Rossya.png";

const StyledMain = styled.main`
  background: #eaeaea;
`;

const StyledFCard = styled.div`
  margin-bottom: 8px;

  padding-top: 14px;
  padding-bottopm: 14px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  font-color: #4a4a4a;

  background-color: #ffffff;
`;

const StyledPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  font-size: 22px;

  color: #ff9241;
`;

function FlightsList(props) {
  const flights = props.flights;

  const fList = flights.map(f => (
    <StyledFCard key={f.id}>
      <div className="container">
        <div className="row between-xs">
          <div className="col-xs-6 start-xs middle-xs">
            <StyledPrice>{f.offers.best.price}</StyledPrice>
          </div>
          <div className="col-xs-6 end-xs middle-xs">
            <img src={Logo} alt={f.carrier} />
          </div>
        </div>
        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <div className="row">
                <img src={arrivalIcon} alt="Arrival icon" />
                <div>
                  {f.directFlight.departure.time} —
                  {f.directFlight.arrival.time}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="row">
              <img src={durationIcon} alt="Duration icon" />
              <div>{f.directFlight.flightDuration}</div>
            </div>
          </div>
          <div className="col-xs-3 end-xs">{f.direct && <div>Прямой</div>}</div>
        </div>
        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <div className="row">
                <img src={departureIcon} alt="Arrival icon" />
                <div>
                  {f.backFlight.departure.time} — {f.backFlight.arrival.time}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="row">
              <img src={durationIcon} alt="Duration icon" />
              <div>{f.backFlight.flightDuration}</div>
            </div>
          </div>
          <div className="col-xs-3 end-xs">{f.direct && <div>Прямой</div>}</div>
        </div>
      </div>
    </StyledFCard>
  ));
  return <div>{fList}</div>;
}

export default class Main extends Component {
  render() {
    return (
      <StyledMain>
        <FlightsList flights={flightsData} />
        <button>Filter</button>
      </StyledMain>
    );
  }
}
