import React, { Component } from "react";
import styled from "styled-components";
import flightsData, { filters } from "./data.js";

import arrivalIcon from "./img/arrival-icon_mobile.svg";
import departureIcon from "./img/departure-icon_mobile.svg";
import durationIcon from "./img/duration-icon_mobile.svg";
import Logo from "./img/Rossya.png";

const StyledMain = styled.main`
  background: #eaeaea;
`;

const StyledFiltersPane = styled.div`
  background-color: #ffffff;
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

function FiltersPane(props) {
  const changes = props.filters.changes;
  const departureTime = props.filters.departureTime;
  const carriers = props.filters.carriers;

  const changesList = changes.map(f => (
    <div className="row between-lg">
      <input type="checkbox" />
      <div>{f.option}</div>
      <div>{f.price}</div>
    </div>
  ));

  const directDepartureTime = (
    <div className="row">
      <div>{departureTime.direct.departureTimeFrom}</div>
      <div>{departureTime.direct.departureTimeTo}</div>
      <div>{departureTime.direct.arrivalTimeFrom}</div>
      <div>{departureTime.direct.arrivalTimeTo}</div>
    </div>
  );

  const backDepartureTime = (
    <div className="row">
      <div>{departureTime.back.departureTimeFrom}</div>
      <div>{departureTime.back.departureTimeTo}</div>
      <div>{departureTime.back.arrivalTimeFrom}</div>
      <div>{departureTime.back.arrivalTimeTo}</div>
    </div>
  );

  const alliansesList = carriers.alliances.map(a => (
    <div className="row between-xs">
      <input type="checkbox" />
      <div>{a.name}</div>
      <div>{a.price}</div>
    </div>
  ));

  const carriersList = carriers.carriers.map(c => (
    <div className="row between-xs">
      <input type="checkbox" />
      <div>{c.name}</div>
      <div>{c.price}</div>
    </div>
  ));

  return (
    <StyledFiltersPane>
      <div className="container">
        {changesList}
        {directDepartureTime}
        {backDepartureTime}
        <div>Luggage</div>
        <div>Allianses</div>
        {alliansesList}
        <div>Companies</div>
        {carriersList}
      </div>
    </StyledFiltersPane>
  );
}

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
        <div className="container">
          <div className="row">
            <div className="col-lg-3 hidden-xs">
              <FiltersPane filters={filters} />
              <p>test</p>
            </div>
            <div className="col-lg-7 col-xs-12">
              <FlightsList flights={flightsData} />
              <button>Filter</button>
            </div>
            <div className="col-lg-offset-2" />
          </div>
        </div>
      </StyledMain>
    );
  }
}
