import React from "react";
import styled from "styled-components";

const StyledFiltersPane = styled.div`
  background-color: #ffffff;
`;

export default function FiltersPane(props) {
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
