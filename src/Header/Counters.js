import React from "react";
import styled from "styled-components";

function incrementAdults(state) {
  console.log(JSON.stringify(state));
  if (state.adults < 7) return { adults: state.adults + 1 };
}

function decrementAdults(state) {
  if (state.adults > 1)
    if (state.adults - 1 < state.infants)
      return { adults: state.adults - 1, infants: state.infants - 1 };
    else return { adults: state.adults - 1 };
}

function incrementKids(state) {
  if (state.kids < 7) return { kids: state.kids + 1 };
}

function decrementKids(state) {
  if (state.kids > 0) return { kids: state.kids - 1 };
}

function incrementInfants(state) {
  if (state.infants < state.adults) return { infants: state.infants + 1 };
}

function decrementInfants(state) {
  if (state.infants > 0) return { infants: state.infants - 1 };
}

const CounterLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;

  color: #4a4a4a;
`;

const CounterControls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  width: 72px;
  height: 32px;

  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const CounterButton = styled.button`
  flex-grow: 1;

  border: none;
  background: none;

  text-align: center;
  text-decoration: none;
  color: #dbdbdb;
`;

const CounterValue = styled.div`
  flex-grow: 0;

  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;

  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  color: #4a4a4a;

  background: #ffffff;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const CounterRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 auto;

  margin-bottom: 16px;
`;

export function AdultsCounter(props) {
  const handleIncrement = () => {
    props.changeCallback(incrementAdults);
  };
  const handleDecrement = () => {
    props.changeCallback(decrementAdults);
  };

  return (
    <CounterRow>
      <CounterLabel>Взрослые</CounterLabel>
      <CounterControls>
        <CounterButton onClick={handleDecrement}>−</CounterButton>
        <CounterValue>{props.adults}</CounterValue>
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </CounterControls>
    </CounterRow>
  );
}

export function KidsCounter(props) {
  const handleIncrement = () => {
    props.changeCallback(incrementKids);
  };
  const handleDecrement = () => {
    props.changeCallback(decrementKids);
  };

  return (
    <CounterRow>
      <CounterLabel>Дети до 12 лет</CounterLabel>
      <CounterControls>
        <CounterButton onClick={handleDecrement}>−</CounterButton>
        <CounterValue>{props.kids}</CounterValue>
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </CounterControls>
    </CounterRow>
  );
}

export function InfantsCounter(props) {
  const handleIncrement = () => {
    props.changeCallback(incrementInfants);
  };
  const handleDecrement = () => {
    props.changeCallback(decrementInfants);
  };

  return (
    <CounterRow>
      <CounterLabel>
        Дети до 2 лет <br />{" "}
        <span style={{ fontSize: "12px", color: "#A0B0B9" }}>Без места</span>
      </CounterLabel>
      <CounterControls>
        <CounterButton onClick={handleDecrement}>−</CounterButton>
        <CounterValue>{props.infants}</CounterValue>
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </CounterControls>
    </CounterRow>
  );
}
