import React from "react";
import styled from "styled-components";

import FilterCard from "./FilterCard";
import ResetButton from "./ResetButton";
import Checkbox from "../assets/Checkbox";

import planeIcon from "./img/filter-plane.svg";

const Container = styled.div`
  background-color: #ffffff;
`;

const OptionLabel = styled(Checkbox)`
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

const RangeSelector = styled.div`
  margin-top: 4px;
  margin-bottom: 24px;
`;

const Slider = styled.div`
  width: 16px;
  height: 16px;

  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
`;

const Axis = styled.div`
  flex-grow: 2;
  height: 2px;

  background: #00acde;
  border-radius: 2px;
`;

const PlaneIcon = styled.img`
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
`;

export default function Filters({
  filters: { changes, departureTime, carriers },
  multyCarriersFilter,
  handleCarriersFilterChange
}) {
  const ChangesList = changes.map(f => (
    <div className="row between-lg middle-lg" key={f.option}>
      <OptionLabel>{f.option}</OptionLabel>
      <OptionPrice>{f.price}</OptionPrice>
    </div>
  ));

  const DirectDepartureTime = (
    <div className="column">
      <FlightDirectionLabel className="row">
        Москва <PlaneIcon src={planeIcon} alt="plane icon" /> Барселона
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

      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>

      <DirectionsLabel className="row">Прибытие в Барселону:</DirectionsLabel>

      <div className="row between-md">
        <DirectionsLabel>
          {departureTime.direct.arrivalTimeFrom}
        </DirectionsLabel>
        <DirectionsLabel>{departureTime.direct.arrivalTimeTo}</DirectionsLabel>
      </div>

      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>

      <FlightDirectionLabel className="row">
        Барселона <PlaneIcon src={planeIcon} alt="plane icon" /> Москва
      </FlightDirectionLabel>

      <DirectionsLabel className="row">Вылет из Барселоны:</DirectionsLabel>

      <div className="row between-lg">
        <DirectionsLabel>
          {departureTime.back.departureTimeFrom}
        </DirectionsLabel>
        <DirectionsLabel>{departureTime.back.departureTimeTo}</DirectionsLabel>
      </div>

      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>

      <DirectionsLabel className="row">Прибытие в Москву:</DirectionsLabel>

      <div className="row between-md">
        <DirectionsLabel>{departureTime.back.arrivalTimeFrom}</DirectionsLabel>
        <DirectionsLabel>{departureTime.back.arrivalTimeTo}</DirectionsLabel>
      </div>

      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>
    </div>
  );

  const FlightDuration = (
    <div className="column">
      <FlightDirectionLabel className="row">
        Москва <PlaneIcon src={planeIcon} alt="plane icon" /> Барселона
      </FlightDirectionLabel>
      <div className="row between-lg">
        <DirectionsLabel>от 04ч 20м</DirectionsLabel>
        <DirectionsLabel>до 48ч 50м</DirectionsLabel>
      </div>
      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>
      <FlightDirectionLabel className="row">
        Барселона <PlaneIcon src={planeIcon} alt="plane icon" /> Москва
      </FlightDirectionLabel>
      <div className="row between-lg">
        <DirectionsLabel>от 04ч 10м</DirectionsLabel>
        <DirectionsLabel>до 41ч 20м</DirectionsLabel>
      </div>
      <RangeSelector className="row middle-lg">
        <Slider />
        <Axis />
        <Slider />
      </RangeSelector>
    </div>
  );

  const AlliansesList = carriers.alliances.map(a => (
    <div className="row between-lg middle-lg " key={a.name}>
      <OptionLabel defaultChecked>{a.name}</OptionLabel>
      <OptionPrice>{a.price}</OptionPrice>
    </div>
  ));

  const IndividualCarriersList = carriers.carriers.map(c => (
    <div className="row between-lg middle-lg" key={c.name}>
      <OptionLabel defaultChecked>{c.name}</OptionLabel>
      <OptionPrice>{c.price}</OptionPrice>
    </div>
  ));

  const CarriersList = (
    <div>
      <div className="row between-lg middle-lg">
        <OptionLabel
          checked={multyCarriersFilter}
          onChange={handleCarriersFilterChange}
        >
          Несколько авиакомпаний
          <span className="checkmark" />
        </OptionLabel>
        <OptionExtraInfo>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </OptionExtraInfo>
      </div>
      <OptionsHeader>Альянсы</OptionsHeader>
      {AlliansesList}
      <OptionsHeader>Авиакомпании</OptionsHeader>
      {IndividualCarriersList}
    </div>
  );

  return (
    <Container>
      <FilterCard body={ChangesList} title="ПЕРЕСАДКИ" expanded />
      <FilterCard
        body={DirectDepartureTime}
        title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ"
        expanded
      />
      <FilterCard title="БАГАЖ" />
      <FilterCard title="Длительность пересадки" />
      <FilterCard body={FlightDuration} title="Время в пути" expanded />
      <FilterCard
        body={CarriersList}
        otionsCount="43"
        title="Авиакомпании"
        expanded
      />
      <FilterCard title="аэропорты" />
      <FilterCard otionsCount="71" title="аэропорт пересадки" />
      <FilterCard title="агенства" />
      <ResetButton />
    </Container>
  );
}
