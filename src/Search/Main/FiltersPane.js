import React from "react";
import styled from "styled-components";

import FilterCard from "./FilterCard";

import planeIcon from "./img/filter-plane.svg";

const StyledFiltersPane = styled.div`
  background-color: #ffffff;
`;

const OptionLabel = styled.div`
  margin-left: 6px;

  flex-grow: 1;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;

  color: #4a4a4a;
`;

const OptionPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;

const OptionsHeader = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: -8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;
`;

const OptionExtraInfo = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const FlightDirectionLabel = styled.span`
  margin-top: 16px;
  margin-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;
`;

const DirectionsLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const Slider = styled.div`
  margin-top: 4px;
  margin-bottom: 24px;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;

  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
`;

const Line = styled.div`
  flex-grow: 2;
  height: 2px;

  background: #00acde;
  border-radius: 2px;
`;

export default function FiltersPane(props) {
  const changes = props.filters.changes;
  const departureTime = props.filters.departureTime;
  const carriers = props.filters.carriers;

  const changesList = changes.map(f => (
    <div className="row between-lg middle-lg">
      <input type="checkbox" />
      <OptionLabel>{f.option}</OptionLabel>
      <OptionPrice>{f.price}</OptionPrice>
    </div>
  ));

  const directDepartureTime = (
    <div className="column">
      <FlightDirectionLabel className="row">
        Москва{" "}
        <img
          src={planeIcon}
          alt="plane icon"
          style={{
            "vertical-align": "middle",
            "margin-left": "5px",
            "margin-right": "5px"
          }}
        />{" "}
        Барселона
      </FlightDirectionLabel>

      <DirectionsLabel className="row">Вылет из Москвы:</DirectionsLabel>

      <div className="row between-lg">
        <DirectionsLabel>
          {departureTime.direct.departureTimeFrom}
        </DirectionsLabel>
        <DirectionsLabel>
          {departureTime.direct.departureTimeTo}
        </DirectionsLabel>
      </div>

      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>

      <DirectionsLabel className="row">Прибытие в Барселону:</DirectionsLabel>

      <div className="row between-md">
        <DirectionsLabel>
          {departureTime.direct.arrivalTimeFrom}
        </DirectionsLabel>
        <DirectionsLabel>{departureTime.direct.arrivalTimeTo}</DirectionsLabel>
      </div>

      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>

      <FlightDirectionLabel className="row">
        Барселона{"  "}
        <img
          src={planeIcon}
          alt="plane icon"
          style={{
            "vertical-align": "middle",
            "margin-left": "5px",
            "margin-right": "5px"
          }}
        />{" "}
        Москва
      </FlightDirectionLabel>

      <DirectionsLabel className="row">Вылет из Барселоны:</DirectionsLabel>

      <div className="row between-lg">
        <DirectionsLabel>
          {departureTime.back.departureTimeFrom}
        </DirectionsLabel>
        <DirectionsLabel>{departureTime.back.departureTimeTo}</DirectionsLabel>
      </div>

      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>

      <DirectionsLabel className="row">Прибытие в Москву:</DirectionsLabel>

      <div className="row between-md">
        <DirectionsLabel>{departureTime.back.arrivalTimeFrom}</DirectionsLabel>
        <DirectionsLabel>{departureTime.back.arrivalTimeTo}</DirectionsLabel>
      </div>

      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>
    </div>
  );

  const flightDuration = (
    <div className="column">
      <FlightDirectionLabel className="row">
        Москва{" "}
        <img
          src={planeIcon}
          alt="plane icon"
          style={{
            "vertical-align": "middle",
            "margin-left": "5px",
            "margin-right": "5px"
          }}
        />{" "}
        Барселона
      </FlightDirectionLabel>
      <div className="row between-lg">
        <DirectionsLabel>от 04ч 20м</DirectionsLabel>
        <DirectionsLabel>до 48ч 50м</DirectionsLabel>
      </div>
      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>
      <FlightDirectionLabel className="row">
        Барселона{" "}
        <img
          src={planeIcon}
          alt="plane icon"
          style={{
            "vertical-align": "middle",
            "margin-left": "5px",
            "margin-right": "5px"
          }}
        />{" "}
        Москва
      </FlightDirectionLabel>
      <div className="row between-lg">
        <DirectionsLabel>от 04ч 10м</DirectionsLabel>
        <DirectionsLabel>до 41ч 20м</DirectionsLabel>
      </div>
      <Slider className="row middle-lg">
        <Circle />
        <Line />
        <Circle />
      </Slider>
    </div>
  );

  const alliansesList = carriers.alliances.map(a => (
    <div className="row between-lg middle-lg ">
      <input type="checkbox" />
      <OptionLabel>{a.name}</OptionLabel>
      <OptionPrice>{a.price}</OptionPrice>
    </div>
  ));

  const individualCarriersList = carriers.carriers.map(c => (
    <div className="row between-lg middle-lg">
      <input type="checkbox" />
      <OptionLabel>{c.name}</OptionLabel>
      <OptionPrice>{c.price}</OptionPrice>
    </div>
  ));

  const carriersList = (
    <div>
      <div className="row between-lg middle-lg">
        <input type="checkbox" />
        <OptionLabel>Несколько авиакомпаний</OptionLabel>
        <OptionExtraInfo>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </OptionExtraInfo>
      </div>
      <OptionsHeader>Альянсы</OptionsHeader>
      {alliansesList}
      <OptionsHeader>Авиакомпании</OptionsHeader>
      {individualCarriersList}
    </div>
  );

  return (
    <StyledFiltersPane>
      <FilterCard body={changesList} title="ПЕРЕСАДКИ" />
      <FilterCard body={directDepartureTime} title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" />
      <FilterCard title="БАГАЖ" />
      <FilterCard title="Длительность пересадки" />
      <FilterCard body={flightDuration} title="Время в пути" />
      <FilterCard body={carriersList} otionsCount="43" title="Авиакомпании" />
      <FilterCard title="аэропорты" />
      <FilterCard otionsCount="71" title="аэропорт пересадки" />
      <FilterCard title="агенства" />
    </StyledFiltersPane>
  );
}
